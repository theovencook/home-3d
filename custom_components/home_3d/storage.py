"""Persistence for Home 3D.

An install keeps several homes (#53). Each home's building (rooms, walls, furniture, placements), restore points
and background images live in separate stores so frequent saves from the editor never rewrite the large image data.
The packs, the custom items and the list of homes are shared.
"""

from __future__ import annotations

from collections.abc import Callable
import copy
import inspect
import logging
import time
from typing import Any
import uuid

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store
import voluptuous as vol

from .const import (
    DEFAULT_HOME_NAME,
    DOMAIN,
    FIRST_HOME_ID,
    HISTORY_INTERVAL,
    HISTORY_MAX,
    SIGNAL_BUILDING_UPDATED,
    SIGNAL_HOMES_UPDATED,
    STORAGE_KEY_BUILDING,
    STORAGE_KEY_HISTORY,
    STORAGE_KEY_HOMES,
    STORAGE_KEY_IMAGES,
    STORAGE_KEY_PACKS,
    STORAGE_MINOR_VERSION,
    STORAGE_VERSION,
)
from .custom_items import CustomItems
from .moves import Moves, load_moves, migrate_bases, migrate_building, moved_into
from .packs import library_pack, load_bundled, with_bundled
from .recipes import with_recipes
from .schema import BUILDING_SCHEMA, empty_building, image_ids

_LOGGER = logging.getLogger(__name__)


def complete(building: dict[str, Any]) -> dict[str, Any]:
    """Fill fields added in later versions with their defaults (keeps the building when it is invalid)."""
    try:
        return BUILDING_SCHEMA(building)
    except vol.Invalid as err:
        _LOGGER.warning("Stored building does not validate (%s); loading it unchanged", err)
        return building


class _BuildingStore(Store):
    """Building store with migrations between minor versions."""

    async def _async_migrate_func(self, old_major_version: int, old_minor_version: int, old_data: dict) -> dict:
        # 1 -> 2: newer optional fields (openings, furniture, energy, presence) get their defaults
        if old_minor_version < 2 and old_data.get("building"):
            old_data = {**old_data, "building": complete(old_data["building"])}
        return old_data


# newer Home Assistant turns a store's data into JSON in the event loop unless told otherwise; the background images
# and the restore points can be megabytes, so they are serialised in the executor (older versions always did that)
_OFF_LOOP: dict[str, Any] = {}
if "serialize_in_event_loop" in inspect.signature(Store.__init__).parameters:
    _OFF_LOOP["serialize_in_event_loop"] = False


class HomesError(Exception):
    """A change to the homes that cannot be made (`code` for the websocket error)."""

    def __init__(self, code: str, detail: str) -> None:
        """Keep the code and the message."""
        super().__init__(detail)
        self.code = code
        self.detail = detail


def _home_keys(home_id: str) -> tuple[str, str, str]:
    """The building, image and history store keys of a home: the first home keeps the stores of before #53."""
    if home_id == FIRST_HOME_ID:
        return STORAGE_KEY_BUILDING, STORAGE_KEY_IMAGES, STORAGE_KEY_HISTORY
    base = f"{DOMAIN}.home_{home_id}"
    return f"{base}.building", f"{base}.images", f"{base}.history"


def _summary(building: dict[str, Any]) -> dict[str, int]:
    floors = building.get("floors", [])
    return {
        "floors": len(floors),
        "rooms": sum(len(f.get("rooms", [])) for f in floors),
        "furniture": sum(len(f.get("furniture", [])) for f in floors),
    }


class Home:
    """One home (#53): its building, revision, restore points and background images, each in its own store."""

    def __init__(
        self,
        hass: HomeAssistant,
        home_id: str,
        name: str,
        packs: Callable[[], list[dict[str, Any]]],
        moves: Callable[[], Moves] = dict,
    ) -> None:
        """Make the stores; `packs` gives the packs on offer (for the plan's recipe copies), `moves` the items that
        moved between packs (#110)."""
        self.hass = hass
        self.id = home_id
        self.name = name
        self._packs = packs
        self._moves = moves
        building_key, image_key, history_key = _home_keys(home_id)
        self._building_store = _BuildingStore(hass, STORAGE_VERSION, building_key, minor_version=STORAGE_MINOR_VERSION)
        self._image_store = Store(hass, STORAGE_VERSION, image_key, **_OFF_LOOP)
        self._history_store = Store(hass, STORAGE_VERSION, history_key, **_OFF_LOOP)
        self.building: dict[str, Any] = empty_building()
        self.revision = 0
        self._images: dict[str, str] = {}
        self._history: list[dict[str, Any]] = []

    def info(self) -> dict[str, Any]:
        """The home as the homes list shows it."""
        return {"id": self.id, "name": self.name, "revision": self.revision, **_summary(self.building)}

    async def async_load(self) -> None:
        """Load the stores and drop images no floor refers to any more."""
        stored = await self._building_store.async_load()
        if stored:
            self.building = complete(stored.get("building") or empty_building())
            self.revision = int(stored.get("revision", 0))
            # items that moved to another pack take their new ids (#110), and a plan saved before #2 (or placed
            # while a client did not send recipes) picks up the recipes of its pack items from the installed packs;
            # both are written back once
            moved = migrate_building(self.building, self._moves())
            building = with_recipes(moved, moved.get("recipes"), self._packs())
            if moved is not self.building or building.get("recipes") != self.building.get("recipes"):
                self.building = building
                await self._save_building()
        history = await self._history_store.async_load()
        self._history = list((history or {}).get("snapshots", []))
        images = await self._image_store.async_load()
        self._images = dict((images or {}).get("images", {}))
        unused = set(self._images) - image_ids(self.building)
        if unused:
            _LOGGER.debug("Removing %d unused background images", len(unused))
            for image_id in unused:
                self._images.pop(image_id)
            await self._save_images()

    async def async_start(self, building: dict[str, Any] | None, images: dict[str, str] | None) -> None:
        """Fill a new home: its first plan (revision 1) and pictures, or an empty plan at revision 0."""
        if images:
            self._images = dict(images)
            await self._save_images()
        if building is not None:
            building = migrate_building(building, self._moves())
            self.building = with_recipes(building, building.get("recipes"), self._packs())
            self.revision = 1
        await self._save_building()

    async def async_save_building(self, building: dict[str, Any], recipe_bases: dict[str, str] | None = None) -> int:
        """Store a validated building, bump the revision and notify subscribers.

        The state before the save becomes a restore point when the last one is older than
        HISTORY_INTERVAL, so a long editing session leaves a trail without saving every step.
        """
        last = self._history[-1]["saved_at"] if self._history else 0
        if self.building.get("floors") and time.time() - last > HISTORY_INTERVAL:
            await self.async_snapshot()
        # items that moved to another pack take their new ids (#110): an imported plan, a backup, a restore point
        moves = self._moves()
        sent, building = building, migrate_building(building, moves)
        recipe_bases = migrate_bases(recipe_bases, sent, building, moves)
        # every pack item type in the plan keeps its recipe copy (#2): the one sent, else the one kept so far, else
        # a copy of the installed item; one the client sends as it started from it gives way to a newer kept one (#45)
        building = with_recipes(building, self.building.get("recipes"), self._packs(), recipe_bases)
        self.building = building
        self.revision += 1
        await self._save_building()
        async_dispatcher_send(self.hass, SIGNAL_BUILDING_UPDATED, self.id, self.revision)
        return self.revision

    async def async_follow_custom_items(self) -> None:
        """After a custom item changed (#13): placed copies of it follow the change at once (#26)."""
        building = with_recipes(self.building, self.building.get("recipes"), self._packs())
        if building.get("recipes") != self.building.get("recipes"):
            await self.async_save_building(building)

    async def async_restore(self, building: dict[str, Any]) -> int:
        """Replace the plan (a restore point or a backup); the state before becomes a restore point."""
        await self.async_snapshot()
        return await self.async_save_building(building)

    async def async_snapshot(self) -> None:
        """Keep the current building as a restore point."""
        self._history.append(
            {
                "id": uuid.uuid4().hex[:12],
                "revision": self.revision,
                "saved_at": time.time(),
                "building": self.building,
            }
        )
        self._history = self._history[-HISTORY_MAX:]
        # copies: the JSON is written in the executor while the loop may change the originals
        await self._history_store.async_save({"snapshots": list(self._history)})

    def history(self) -> list[dict[str, Any]]:
        """Restore points, newest first, without their buildings."""
        return [
            {"id": h["id"], "revision": h["revision"], "saved_at": h["saved_at"], **_summary(h["building"])}
            for h in reversed(self._history)
        ]

    def snapshot(self, snapshot_id: str) -> dict[str, Any] | None:
        """Building of a restore point."""
        return next((h["building"] for h in self._history if h["id"] == snapshot_id), None)

    @property
    def images(self) -> dict[str, str]:
        """All stored images (id -> data URL)."""
        return dict(self._images)

    def get_image(self, image_id: str) -> str | None:
        """Return an image as data URL."""
        return self._images.get(image_id)

    async def async_set_image(self, image_id: str, data: str) -> None:
        """Store an image."""
        self._images[image_id] = data
        await self._save_images()

    async def async_delete_image(self, image_id: str) -> None:
        """Remove an image."""
        if self._images.pop(image_id, None) is not None:
            await self._save_images()

    async def async_remove(self) -> None:
        """Delete the home's stores."""
        for store in (self._building_store, self._image_store, self._history_store):
            await store.async_remove()

    async def _save_building(self) -> None:
        await self._building_store.async_save({"revision": self.revision, "building": self.building})

    async def _save_images(self) -> None:
        await self._image_store.async_save({"images": dict(self._images)})


class FloorplanData:
    """The homes of one installation (#53) and what they share: the packs, the custom items and the library.

    `building`, `revision`, the restore points and the images without a home are those of the active home: the one
    the panel opens, cards show by default and voice, locating and time travel use.
    """

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the stores."""
        self.hass = hass
        self._pack_store = Store(hass, STORAGE_VERSION, STORAGE_KEY_PACKS)
        self._homes_store = Store(hass, STORAGE_VERSION, STORAGE_KEY_HOMES)
        self.homes: dict[str, Home] = {}
        self.active_id = FIRST_HOME_ID
        # imported furniture packs (checked payloads, see packs.py)
        self.packs: list[dict[str, Any]] = []
        # the packs that ship with Home 3D (bundled_packs/, read from the disk; never stored or backed up)
        self.bundled: list[dict[str, Any]] = []
        # the household's own items (#13), offered as one more pack
        self.custom = CustomItems(hass)
        # bundled items that moved to another pack: old type -> new type (#110, moved_items.json)
        self.moves: Moves = {}
        # the light form of each offered pack (#44), kept while the pack (the same object) stays
        self._library: dict[str, tuple[Any, dict[str, Any]]] = {}

    async def async_load(self) -> None:
        """Load the shared stores, then every home. An install from before #53 has no list of homes: its plan
        becomes the first home, read from the stores it always had (nothing is copied)."""
        packs = await self._pack_store.async_load()
        self.packs = list((packs or {}).get("packs", []))
        self.bundled = await self.hass.async_add_executor_job(load_bundled)
        self.moves = await self.hass.async_add_executor_job(load_moves)
        await self.custom.async_load()
        stored = await self._homes_store.async_load()
        listed = list((stored or {}).get("homes") or [{"id": FIRST_HOME_ID, "name": DEFAULT_HOME_NAME}])
        self.homes = {}
        for entry in listed:
            home = self._new_home(entry["id"], entry.get("name") or DEFAULT_HOME_NAME)
            await home.async_load()
            self.homes[home.id] = home
        active = (stored or {}).get("active")
        self.active_id = active if active in self.homes else next(iter(self.homes))
        if stored is None:
            await self._save_homes()

    def _new_home(self, home_id: str, name: str) -> Home:
        return Home(self.hass, home_id, name, lambda: self.offered_packs, lambda: self.moves)

    async def _save_homes(self) -> None:
        homes = [{"id": h.id, "name": h.name} for h in self.homes.values()]
        await self._homes_store.async_save({"homes": homes, "active": self.active_id})

    # ------------------------------------------------------------------------ homes (#53)

    @property
    def active(self) -> Home:
        """The active home."""
        return self.homes[self.active_id]

    def home(self, home_id: str | None) -> Home | None:
        """A home by its id (None: the active one); None when there is no such home."""
        return self.active if home_id is None else self.homes.get(home_id)

    def homes_list(self) -> list[dict[str, Any]]:
        """Every home in its order, as the switcher lists them."""
        return [home.info() for home in self.homes.values()]

    def _get(self, home_id: str) -> Home:
        if (home := self.homes.get(home_id)) is None:
            raise HomesError("home_not_found", f"There is no home {home_id}")
        return home

    async def async_create_home(
        self,
        name: str,
        building: dict[str, Any] | None = None,
        images: dict[str, str] | None = None,
        home_id: str | None = None,
    ) -> Home:
        """Add a home: empty, or with a given (checked, completed) building and its pictures. The new home is not
        made active. #54 loads a sample home with this."""
        if home_id is None:
            home_id = uuid.uuid4().hex[:8]
        if home_id in self.homes:
            raise HomesError("home_exists", f"There is a home {home_id} already")
        home = self._new_home(home_id, name)
        # a home made again under the id of one removed earlier never finds that one's stores
        await home.async_remove()
        await home.async_start(building, images)
        self.homes[home.id] = home
        await self._save_homes()
        async_dispatcher_send(self.hass, SIGNAL_HOMES_UPDATED)
        return home

    async def async_rename_home(self, home_id: str, name: str) -> Home:
        """Give a home another name."""
        home = self._get(home_id)
        home.name = name
        await self._save_homes()
        async_dispatcher_send(self.hass, SIGNAL_HOMES_UPDATED)
        return home

    async def async_duplicate_home(self, home_id: str, name: str) -> Home:
        """A new home with a copy of another's plan and pictures (the restore points stay with the original)."""
        source = self._get(home_id)
        return await self.async_create_home(name, copy.deepcopy(source.building), source.images)

    async def async_delete_home(self, home_id: str) -> None:
        """Remove a home with its stores; the last one stays. If it was active, the first one left becomes so."""
        home = self._get(home_id)
        if len(self.homes) == 1:
            raise HomesError("last_home", "The last home cannot be deleted")
        del self.homes[home_id]
        if self.active_id == home_id:
            self.active_id = next(iter(self.homes))
        await self._save_homes()
        await home.async_remove()
        async_dispatcher_send(self.hass, SIGNAL_HOMES_UPDATED)

    async def async_set_active(self, home_id: str) -> Home:
        """Make a home the active one."""
        home = self._get(home_id)
        self.active_id = home.id
        await self._save_homes()
        async_dispatcher_send(self.hass, SIGNAL_HOMES_UPDATED)
        return home

    # ------------------------------------------------------------------------ the active home's plan

    @property
    def building(self) -> dict[str, Any]:
        """The active home's building."""
        return self.active.building

    @building.setter
    def building(self, building: dict[str, Any]) -> None:
        self.active.building = building

    @property
    def revision(self) -> int:
        """The active home's revision."""
        return self.active.revision

    @property
    def images(self) -> dict[str, str]:
        """The active home's images (id -> data URL)."""
        return self.active.images

    def get_image(self, image_id: str) -> str | None:
        """One of the active home's images as data URL."""
        return self.active.get_image(image_id)

    async def async_save_building(self, building: dict[str, Any], recipe_bases: dict[str, str] | None = None) -> int:
        """Store the active home's building (see Home.async_save_building)."""
        return await self.active.async_save_building(building, recipe_bases)

    async def async_snapshot(self) -> None:
        """Keep the active home's building as a restore point."""
        await self.active.async_snapshot()

    def history(self) -> list[dict[str, Any]]:
        """The active home's restore points, newest first."""
        return self.active.history()

    def snapshot(self, snapshot_id: str) -> dict[str, Any] | None:
        """Building of one of the active home's restore points."""
        return self.active.snapshot(snapshot_id)

    async def async_follow_custom_items(self) -> None:
        """After a custom item changed (#13): placed copies of it follow the change at once (#26), in every home."""
        for home in list(self.homes.values()):
            await home.async_follow_custom_items()

    # ------------------------------------------------------------------------ packs (shared by every home)

    @property
    def offered_packs(self) -> list[dict[str, Any]]:
        """The bundled packs, the imported ones and the custom items, as the library offers them."""
        custom = self.custom.pack()
        return with_bundled(self.bundled, self.packs) + ([custom] if custom else [])

    @property
    def library(self) -> list[dict[str, Any]]:
        """The offered packs as the library lists them (#44): an index of their items without the recipes. The
        household's own items come whole: they are few, and the item editor works on them."""
        listed: list[dict[str, Any]] = []
        kept: dict[str, tuple[Any, dict[str, Any]]] = {}
        aliases = moved_into(self.moves) if self.moves else {}
        for pack in self.offered_packs:
            custom = bool(pack.get("custom"))
            # the custom items' pack is made anew on every call: it stays the same while its item list does
            key = pack["items"] if custom else pack
            cached = self._library.get(pack["id"])
            if cached is not None and cached[0] is key:
                light = cached[1]
            else:
                light = library_pack(pack, whole=custom)
                # the old ids of items that moved into the pack (#110)
                if moved := aliases.get(pack["id"]):
                    light["aliases"] = moved
            kept[pack["id"]] = (key, light)
            listed.append(light)
        self._library = kept
        return listed

    async def async_add_pack(self, payload: dict[str, Any], source: dict[str, Any] | None = None) -> None:
        """Keep an imported pack; a newer release of the same pack replaces the old one. Its source (the files of a
        v2 folder, the payload of an old pack) stays with it, so a backup can carry the pack and a restore can check
        it again."""
        entry: dict[str, Any] = {**payload, "imported_at": time.time()}
        if source is not None:
            entry["source"] = source
        self.packs = [p for p in self.packs if p["id"] != payload["id"]] + [entry]
        await self._pack_store.async_save({"packs": self.packs})

    async def async_set_packs(self, packs: list[dict[str, Any]]) -> None:
        """Replace the imported packs (from a backup)."""
        self.packs = packs
        await self._pack_store.async_save({"packs": self.packs})

    async def async_remove_pack(self, pack_id: str) -> bool:
        """Remove a pack (furniture using it stays in the plan and keeps its recipe copy)."""
        kept = [p for p in self.packs if p["id"] != pack_id]
        if len(kept) == len(self.packs):
            return False
        self.packs = kept
        await self._pack_store.async_save({"packs": self.packs})
        return True
