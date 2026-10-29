"""Persistence for Home 3D.

The building (rooms, walls, furniture, placements) and the background images live in separate
stores so frequent saves from the editor never rewrite the large image data.
"""

from __future__ import annotations

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
    HISTORY_INTERVAL,
    HISTORY_MAX,
    SIGNAL_BUILDING_UPDATED,
    STORAGE_KEY_BUILDING,
    STORAGE_KEY_HISTORY,
    STORAGE_KEY_IMAGES,
    STORAGE_KEY_PACKS,
    STORAGE_MINOR_VERSION,
    STORAGE_VERSION,
)
from .custom_items import CustomItems
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


def _stores(hass: HomeAssistant) -> tuple[Store, Store, Store, Store]:
    return (
        _BuildingStore(hass, STORAGE_VERSION, STORAGE_KEY_BUILDING, minor_version=STORAGE_MINOR_VERSION),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_IMAGES, **_OFF_LOOP),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_HISTORY, **_OFF_LOOP),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_PACKS),
    )


def _summary(building: dict[str, Any]) -> dict[str, int]:
    floors = building.get("floors", [])
    return {
        "floors": len(floors),
        "rooms": sum(len(f.get("rooms", [])) for f in floors),
        "furniture": sum(len(f.get("furniture", [])) for f in floors),
    }


class FloorplanData:
    """Building and images of one installation."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the stores."""
        self.hass = hass
        self._building_store, self._image_store, self._history_store, self._pack_store = _stores(hass)
        self.building: dict[str, Any] = empty_building()
        self.revision = 0
        self._images: dict[str, str] = {}
        self._history: list[dict[str, Any]] = []
        # imported furniture packs (checked payloads, see packs.py)
        self.packs: list[dict[str, Any]] = []
        # the packs that ship with Home 3D (bundled_packs/, read from the disk; never stored or backed up)
        self.bundled: list[dict[str, Any]] = []
        # the household's own items (#13), offered as one more pack
        self.custom = CustomItems(hass)
        # the light form of each offered pack (#44), kept while the pack (the same object) stays
        self._library: dict[str, tuple[Any, dict[str, Any]]] = {}

    async def async_load(self) -> None:
        """Load both stores and drop images no floor refers to any more."""
        packs = await self._pack_store.async_load()
        self.packs = list((packs or {}).get("packs", []))
        self.bundled = await self.hass.async_add_executor_job(load_bundled)
        await self.custom.async_load()
        stored = await self._building_store.async_load()
        if stored:
            self.building = complete(stored.get("building") or empty_building())
            self.revision = int(stored.get("revision", 0))
            # a plan saved before #2 (or placed while a client did not send recipes) picks up the recipes of its
            # pack items from the installed packs, and keeps them from now on
            building = with_recipes(self.building, self.building.get("recipes"), self.offered_packs)
            if building.get("recipes") != self.building.get("recipes"):
                self.building = building
                await self._building_store.async_save({"revision": self.revision, "building": building})
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

    async def async_save_building(self, building: dict[str, Any], recipe_bases: dict[str, str] | None = None) -> int:
        """Store a validated building, bump the revision and notify subscribers.

        The state before the save becomes a restore point when the last one is older than
        HISTORY_INTERVAL, so a long editing session leaves a trail without saving every step.
        """
        last = self._history[-1]["saved_at"] if self._history else 0
        if self.building.get("floors") and time.time() - last > HISTORY_INTERVAL:
            await self.async_snapshot()
        # every pack item type in the plan keeps its recipe copy (#2): the one sent, else the one kept so far, else
        # a copy of the installed item; one the client sends as it started from it gives way to a newer kept one (#45)
        building = with_recipes(building, self.building.get("recipes"), self.offered_packs, recipe_bases)
        self.building = building
        self.revision += 1
        await self._building_store.async_save({"revision": self.revision, "building": building})
        async_dispatcher_send(self.hass, SIGNAL_BUILDING_UPDATED, self.revision)
        return self.revision

    async def async_follow_custom_items(self) -> None:
        """After a custom item changed (#13): placed copies of it follow the change at once (#26)."""
        building = with_recipes(self.building, self.building.get("recipes"), self.offered_packs)
        if building.get("recipes") != self.building.get("recipes"):
            await self.async_save_building(building)

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
        for pack in self.offered_packs:
            custom = bool(pack.get("custom"))
            # the custom items' pack is made anew on every call: it stays the same while its item list does
            key = pack["items"] if custom else pack
            cached = self._library.get(pack["id"])
            light = cached[1] if cached is not None and cached[0] is key else library_pack(pack, whole=custom)
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

    @property
    def images(self) -> dict[str, str]:
        """All stored images (id -> data URL)."""
        return dict(self._images)

    async def async_restore(self, building: dict[str, Any], packs: list[dict[str, Any]]) -> int:
        """Replace the plan and the packs from a backup; the state before becomes a restore point."""
        await self.async_snapshot()
        self.packs = packs
        await self._pack_store.async_save({"packs": self.packs})
        return await self.async_save_building(building)

    async def async_remove_pack(self, pack_id: str) -> bool:
        """Remove a pack (furniture using it stays in the plan as plain boxes)."""
        kept = [p for p in self.packs if p["id"] != pack_id]
        if len(kept) == len(self.packs):
            return False
        self.packs = kept
        await self._pack_store.async_save({"packs": self.packs})
        return True

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

    async def _save_images(self) -> None:
        await self._image_store.async_save({"images": dict(self._images)})
