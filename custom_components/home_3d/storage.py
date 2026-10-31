"""Persistence for Home 3D.

An install keeps several homes (#53). Each home's building (rooms, walls, furniture, placements), restore points
and background images live in separate stores so frequent saves from the editor never rewrite the large image data.
The packs, the custom items and the list of homes are shared.
"""

from __future__ import annotations

import asyncio
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
    DEFAULT_RESTORE_PICTURE_DAYS,
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
from .racks import RackError, new_rack_problems
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


class RevisionConflict(Exception):
    """A save from a plan that is out of date (#149): the plan changed since the revision the client started from."""

    def __init__(self, base: int, revision: int) -> None:
        """Keep both revisions."""
        super().__init__(f"The plan changed since revision {base}; it is at revision {revision} now")
        self.base = base
        self.revision = revision


def _without_recipes(building: dict[str, Any]) -> dict[str, Any]:
    return {k: v for k, v in building.items() if k != "recipes"}


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
        picture_days: Callable[[], int] = lambda: DEFAULT_RESTORE_PICTURE_DAYS,
    ) -> None:
        """Make the stores; `packs` gives the packs on offer (for the plan's recipe copies), `moves` the items that
        moved between packs (#110), `picture_days` how long the pictures of restore points are kept (#154)."""
        self.hass = hass
        self.id = home_id
        self.name = name
        self._packs = packs
        self._moves = moves
        self._picture_days = picture_days
        building_key, image_key, history_key = _home_keys(home_id)
        self._building_store = _BuildingStore(hass, STORAGE_VERSION, building_key, minor_version=STORAGE_MINOR_VERSION)
        self._image_store: Store[Any] = Store(hass, STORAGE_VERSION, image_key, **_OFF_LOOP)
        self._history_store: Store[Any] = Store(hass, STORAGE_VERSION, history_key, **_OFF_LOOP)
        self.building: dict[str, Any] = empty_building()
        self.revision = 0
        # the last revision that changed more than the recipe copies (#149): a save from a plan at this revision or
        # later is not out of date, as the server's own recipe-only writes merge with it (recipe_bases, #45)
        self._content_revision = 0
        # saves, restores and the server's own updates of this home run one at a time (#149), so the revision check,
        # the plan they start from and the write are one step
        self._lock = asyncio.Lock()
        self._images: dict[str, str] = {}
        self._history: list[dict[str, Any]] = []

    def info(self) -> dict[str, Any]:
        """The home as the homes list shows it."""
        return {"id": self.id, "name": self.name, "revision": self.revision, **_summary(self.building)}

    async def async_load(self) -> None:
        """Load the stores and drop the images neither the plan nor a recent restore point uses (#154)."""
        stored = await self._building_store.async_load()
        if stored:
            self.building = complete(stored.get("building") or empty_building())
            self.revision = int(stored.get("revision", 0))
            self._content_revision = self.revision
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
        used = self._images_in_use()
        unused = set(self._images) - used if used is not None else set()
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
            self._content_revision = 1
        await self._save_building()

    async def async_save_building(
        self,
        building: dict[str, Any],
        recipe_bases: dict[str, str] | None = None,
        *,
        check_racks: bool = False,
        base_revision: int | None = None,
        guard: Callable[[dict[str, Any]], None] | None = None,
    ) -> int:
        """Store a validated building, bump the revision and notify subscribers.

        The state before the save becomes a restore point when the last one is older than
        HISTORY_INTERVAL, so a long editing session leaves a trail without saving every step.

        `base_revision` (#149) is the revision the client's plan started from: when the plan changed since (more than
        its recipe copies), the save is refused with RevisionConflict and nothing changes. Without it (an older
        client) the save replaces the plan as before. `guard` sees the current plan first and may raise to refuse.
        """
        async with self._lock:
            if base_revision is not None and not self._content_revision <= base_revision <= self.revision:
                raise RevisionConflict(base_revision, self.revision)
            if guard is not None:
                guard(self.building)
            return await self._async_store(building, recipe_bases, check_racks=check_racks)

    async def async_update_building(self, change: Callable[[dict[str, Any]], dict[str, Any] | None]) -> int:
        """A change the server makes itself (#149: a pack update, a rollback, a custom item edit): `change` gets the
        current plan once no other save runs and returns the new one (None: nothing to change), so a save that
        landed meanwhile is never overwritten. The revision after it."""
        async with self._lock:
            building = change(self.building)
            if building is None:
                return self.revision
            return await self._async_store(building, content=None)

    async def _async_store(
        self,
        building: dict[str, Any],
        recipe_bases: dict[str, str] | None = None,
        *,
        check_racks: bool = False,
        content: bool | None = True,
    ) -> int:
        """Store a building while the lock is held. `content`: whether more than the recipe copies changed (None:
        compare)."""
        last = self._history[-1]["saved_at"] if self._history else 0
        if self.building.get("floors") and time.time() - last > HISTORY_INTERVAL:
            await self._async_snapshot()
        # items that moved to another pack take their new ids (#110): an imported plan, a backup, a restore point
        moves = self._moves()
        sent, building = building, migrate_building(building, moves)
        recipe_bases = migrate_bases(recipe_bases, sent, building, moves)
        # every pack item type in the plan keeps its recipe copy (#2): the one sent, else the one kept so far, else
        # a copy of the installed item; one the client sends as it started from it gives way to a newer kept one (#45)
        building = with_recipes(building, self.building.get("recipes"), self._packs(), recipe_bases)
        # an editor's save that puts rack gear where it does not fit is refused (#113); what broke the rules before
        # (a pack update) stays
        if check_racks and (problems := new_rack_problems(self.building, building)):
            raise RackError(problems)
        if content is None:
            content = _without_recipes(building) != _without_recipes(self.building)
        self.building = building
        self.revision += 1
        # the revision of this save, also when the write below takes a while
        revision = self.revision
        if content:
            self._content_revision = revision
        await self._save_building()
        async_dispatcher_send(self.hass, SIGNAL_BUILDING_UPDATED, self.id, revision)
        return revision

    async def async_follow_custom_items(self) -> None:
        """After a custom item changed (#13): placed copies of it follow the change at once (#26)."""

        def follow(current: dict[str, Any]) -> dict[str, Any] | None:
            building = with_recipes(current, current.get("recipes"), self._packs())
            return building if building.get("recipes") != current.get("recipes") else None

        await self.async_update_building(follow)

    async def async_restore(self, building: dict[str, Any]) -> int:
        """Replace the plan (a restore point or a backup); the state before becomes a restore point."""
        async with self._lock:
            await self._async_snapshot()
            return await self._async_store(building)

    async def async_snapshot(self) -> None:
        """Keep the current building as a restore point."""
        async with self._lock:
            await self._async_snapshot()

    async def _async_snapshot(self) -> None:
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

    def _images_in_use(self) -> set[str] | None:
        """The images the plan uses and those of the restore points made in the last `picture_days` days (#154); a
        picture only an older restore point names is removed. None (remove nothing) when a restore point cannot be
        read."""
        used = image_ids(self.building)
        since = time.time() - self._picture_days() * 86400
        try:
            for point in self._history:
                if point["saved_at"] >= since:
                    used |= image_ids(point["building"])
        except (KeyError, TypeError, AttributeError) as err:
            _LOGGER.warning("A restore point of home %s cannot be read (%s); keeping every picture", self.id, err)
            return None
        return used

    def missing_images(self, building: dict[str, Any]) -> list[str]:
        """The stored pictures a plan names that this home no longer has (#154: removed after `picture_days`)."""
        try:
            return sorted(image_ids(building) - set(self._images))
        except (KeyError, TypeError, AttributeError):
            return []

    def history(self) -> list[dict[str, Any]]:
        """Restore points, newest first, without their buildings; `missing_pictures`: how many of the pictures a
        restore point names are gone (#154), so it restores without them."""
        return [
            {
                "id": h["id"],
                "revision": h["revision"],
                "saved_at": h["saved_at"],
                **_summary(h["building"]),
                "missing_pictures": len(self.missing_images(h["building"])),
            }
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

    def __init__(self, hass: HomeAssistant, picture_days: int = DEFAULT_RESTORE_PICTURE_DAYS) -> None:
        """Initialise the stores; `picture_days`: how long a picture only a restore point uses is kept (#154)."""
        self.hass = hass
        self.picture_days = picture_days
        self._pack_store: Store[Any] = Store(hass, STORAGE_VERSION, STORAGE_KEY_PACKS)
        self._homes_store: Store[Any] = Store(hass, STORAGE_VERSION, STORAGE_KEY_HOMES)
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
        return Home(self.hass, home_id, name, lambda: self.offered_packs, lambda: self.moves, lambda: self.picture_days)

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
        *,
        area_import: bool = True,
        demo: bool = False,
    ) -> Home:
        """Add a home: empty, or with a given (checked, completed) building and its pictures. The new home is not
        made active. #54 loads a sample home with this; a sample or template passes `area_import=False` (#61) so the
        editor never offers to fill it with this install's own Home Assistant areas. `demo=True` marks it as a demo
        (#100): the viewer then shows fixed demo states for linked entities this install does not have."""
        if not area_import or demo:
            building = copy.deepcopy(building) if building is not None else empty_building()
            marks = {**({"area_import": False} if not area_import else {}), **({"demo": True} if demo else {})}
            building["settings"] = {**building.get("settings", {}), **marks}
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
        """A new home with a copy of another's plan and the pictures it uses (the restore points stay with the
        original, and so do the pictures only they use, #154)."""
        source = self._get(home_id)
        used = image_ids(source.building)
        images = {k: v for k, v in source.images.items() if k in used}
        return await self.async_create_home(name, copy.deepcopy(source.building), images)

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

    async def async_save_building(
        self, building: dict[str, Any], recipe_bases: dict[str, str] | None = None, *, check_racks: bool = False
    ) -> int:
        """Store the active home's building (see Home.async_save_building)."""
        return await self.active.async_save_building(building, recipe_bases)

    async def async_update_building(self, change: Callable[[dict[str, Any]], dict[str, Any] | None]) -> int:
        """Change the active home's building from the plan it has then (see Home.async_update_building)."""
        return await self.active.async_update_building(change)

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
