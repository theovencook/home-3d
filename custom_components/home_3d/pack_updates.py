"""Pack updates (#26): update checks, per-item updates, auto-update, pin and roll back.

A placed pack item is drawn from the plan's copy of its recipe (#2, recipes.py), so a newer release of its pack
changes nothing in the house by itself. A placed item "has an update" when the installed item differs from the copy
and is not an older release than it (an older release never silently replaces a newer one). Updating an item puts a
copy of the installed item into the plan; with the auto-update setting on, that happens without asking whenever a
newer release arrives (an import, an install, a scheduled check, a Home 3D update that brings a bundled pack).

Packs installed from GitHub (#25) are checked on the schedule the household sets (daily, weekly or monthly at a
time, or off): when the pack's own pack.json at the ref names a higher release, the new release is installed into the
library (placed items still keep their copies). A pack folder in a repository with several packs is compared by its
own release, so a release of the repository that changes other packs is no update for it.

A pinned pack is left alone: no check installs a newer release of it, auto-update skips its items, and an import of
another release asks first. Rolling back puts back the release a pack had before its last update (and the placed
items that had taken that update), and pins the pack so the next check does not bring the update back.

The household's own items (#13, `household.custom`) are never listed: placed copies follow their edits by themselves.
Bundled packs come with Home 3D itself; their placed items follow the auto-update setting like any other.
"""

from __future__ import annotations

import asyncio
from collections import Counter
from collections.abc import Callable
from datetime import datetime, timedelta
import logging
import time
from typing import TYPE_CHECKING, Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.event import async_track_time_change
from homeassistant.helpers.start import async_at_started
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util
import voluptuous as vol

from .const import STORAGE_KEY_PACK_UPDATES, STORAGE_VERSION, TIME_PATTERN
from .custom_items import not_reserved
from .moves import migrate_pins, moved_copy, moved_out_of, retired_packs
from .pack_github import checked_origin, fetch_pack, latest_release
from .packs import CUSTOM_PACK_ID, PackError, source_of_folder, verify_folder, with_bundled
from .recipes import installed_copies, placed_types, recipe_copy

if TYPE_CHECKING:
    from .storage import FloorplanData

_LOGGER = logging.getLogger(__name__)

# how often installed packs are checked for a new release ("off": only when asked)
FREQUENCIES = ["off", "daily", "weekly", "monthly"]
DEFAULT_SETTINGS: dict[str, Any] = {
    # updates are opt-in: placed items wait for an editor until this is switched on
    "auto_update": False,
    "frequency": "daily",
    # local time of the check, "HH:MM"
    "time": "04:00",
    # the day of a weekly check, 0 = Monday (a monthly check runs on the 1st)
    "weekday": 0,
}
SETTINGS_FIELDS: dict[Any, Any] = {
    vol.Optional("auto_update"): bool,
    vol.Optional("frequency"): vol.In(FREQUENCIES),
    vol.Optional("time"): vol.All(str, vol.Match(TIME_PATTERN)),
    vol.Optional("weekday"): vol.All(int, vol.Range(min=0, max=6)),
}
SETTINGS_SCHEMA = vol.Schema(SETTINGS_FIELDS)


def placed_counts(building: dict[str, Any]) -> dict[str, int]:
    """How often each furniture type is placed (a parking spot's vehicles count too)."""
    return dict(Counter(placed_types(building)))


def pending_items(building: dict[str, Any], packs: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """The placed pack items with an update, sorted by type: the installed item differs from the plan's copy and is
    not an older release. The household's own items follow their edits by themselves and are never listed."""
    installed = installed_copies(packs)
    counts = placed_counts(building)
    found: list[dict[str, Any]] = []
    for type_, copy_ in sorted((building.get("recipes") or {}).items()):
        if copy_["pack"] == CUSTOM_PACK_ID or type_ not in installed:
            continue
        pack, item = installed[type_]
        new = recipe_copy(pack, item)
        if new["hash"] == copy_.get("hash") or new["release"] < copy_.get("release", 1):
            continue
        found.append(
            {
                "type": type_,
                "pack": copy_["pack"],
                "item": copy_["item"],
                "name": item["name"],
                "release": copy_.get("release", 1),
                "new_release": new["release"],
                "placed": counts.get(type_, 0),
            }
        )
    return found


def last_due(settings: dict[str, Any], now: datetime) -> datetime | None:
    """The last time a scheduled check was due up to `now` (None when checks are off)."""
    frequency = settings["frequency"]
    if frequency == "off":
        return None
    hour, minute = (int(x) for x in settings["time"].split(":"))
    due = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
    if due > now:
        due -= timedelta(days=1)
    if frequency == "weekly":
        due -= timedelta(days=(due.weekday() - settings["weekday"]) % 7)
    elif frequency == "monthly":
        due -= timedelta(days=due.day - 1)
    return due


def with_updates(
    building: dict[str, Any], packs: list[dict[str, Any]], types: list[str] | None
) -> tuple[dict[str, Any], list[str]]:
    """The building with the named placed items (None: every one with an update) updated to the installed item, and
    the types that were updated."""
    wanted = [p["type"] for p in pending_items(building, packs) if types is None or p["type"] in types]
    if not wanted:
        return building, []
    installed = installed_copies(packs)
    recipes = dict(building.get("recipes") or {})
    for type_ in wanted:
        recipes[type_] = recipe_copy(*installed[type_])
    return {**building, "recipes": recipes}, wanted


class PackUpdates:
    """The update settings, pins and previous releases of one installation, and the scheduled check."""

    def __init__(self, hass: HomeAssistant, data: FloorplanData) -> None:
        self.hass = hass
        self.data = data
        self._store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY_PACK_UPDATES)
        self.settings: dict[str, Any] = dict(DEFAULT_SETTINGS)
        self.pinned: set[str] = set()
        # pack id -> the pack entry its last update replaced ({"id", "release", "bundled": True} for a bundled one)
        self.previous: dict[str, dict[str, Any]] = {}
        # pack id -> the result of its last check: {"checked_at", "latest_release"} or {"checked_at", "error"}
        self.checks: dict[str, dict[str, Any]] = {}
        self.last_check: float | None = None
        self._unsub: Callable[[], None] | None = None
        self._unsub_started: Callable[[], None] | None = None
        self._lock = asyncio.Lock()

    async def async_load(self) -> None:
        stored = await self._store.async_load() or {}
        try:
            self.settings = {**DEFAULT_SETTINGS, **SETTINGS_SCHEMA(stored.get("settings") or {})}
        except vol.Invalid:
            self.settings = dict(DEFAULT_SETTINGS)
        self.pinned = {str(p) for p in stored.get("pinned") or []}
        self.previous = dict(stored.get("previous") or {})
        self.checks = dict(stored.get("checks") or {})
        self.last_check = stored.get("last_check")
        if self._follow_moves():
            await self._async_save()

    def _follow_moves(self) -> bool:
        """Pins and rollback entries after items moved between packs (#110): a pin follows the items into their new
        packs; a retired pack (every item moved out, no longer installed) keeps no pin, rollback entry or check.
        Whether anything changed."""
        moves = self.data.moves
        if not moves:
            return False
        installed = {p["id"] for p in with_bundled(self.data.bundled, self.data.packs)}
        retired = retired_packs(moves, installed)
        pinned = migrate_pins(self.pinned, moves, installed)
        previous = {k: v for k, v in self.previous.items() if k not in retired}
        checks = {k: v for k, v in self.checks.items() if k not in retired}
        if (pinned, previous, checks) == (self.pinned, self.previous, self.checks):
            return False
        self.pinned, self.previous, self.checks = pinned, previous, checks
        return True

    async def async_forget_uninstalled(self) -> None:
        """After the packs were replaced (a backup, #153): pins, previous releases and checks of packs that are no
        longer installed go."""
        installed = {p["id"] for p in with_bundled(self.data.bundled, self.data.packs)}
        pinned = {p for p in self.pinned if p in installed}
        previous = {k: v for k, v in self.previous.items() if k in installed}
        checks = {k: v for k, v in self.checks.items() if k in installed}
        if (pinned, previous, checks) == (self.pinned, self.previous, self.checks):
            return
        self.pinned, self.previous, self.checks = pinned, previous, checks
        await self._async_save()

    async def _async_save(self) -> None:
        await self._store.async_save(
            {
                "settings": self.settings,
                "pinned": sorted(self.pinned),
                "previous": self.previous,
                "checks": self.checks,
                "last_check": self.last_check,
            }
        )

    # ------------------------------------------------------------------------ status and settings

    def _installed(self, pack_id: str) -> dict[str, Any] | None:
        """The pack the library offers under an id (an imported copy or the bundled one), not the custom items."""
        return next((p for p in with_bundled(self.data.bundled, self.data.packs) if p["id"] == pack_id), None)

    def status(self) -> dict[str, Any]:
        """The settings, every installed pack with its pin, previous release and last check, and the placed items
        with an update."""
        packs = []
        for pack in with_bundled(self.data.bundled, self.data.packs):
            previous = self.previous.get(pack["id"])
            packs.append(
                {
                    "id": pack["id"],
                    "release": pack.get("release", 1),
                    "bundled": bool(pack.get("bundled")),
                    "pinned": pack["id"] in self.pinned,
                    # whether a check looks for new releases (installed from GitHub)
                    "checked": isinstance((pack.get("source") or {}).get("origin"), dict),
                    "previous_release": previous.get("release", 1) if previous else None,
                    **self.checks.get(pack["id"], {}),
                }
            )
        items = [
            {**item, "pinned": item["pack"] in self.pinned}
            for item in pending_items(self.data.building, self.data.offered_packs)
        ]
        return {"settings": dict(self.settings), "last_check": self.last_check, "packs": packs, "items": items}

    async def async_set(self, changes: dict[str, Any]) -> None:
        """Change settings (checked by SETTINGS_SCHEMA); switching auto-update on applies the waiting updates."""
        self.settings = {**self.settings, **SETTINGS_SCHEMA(changes)}
        await self._async_save()
        self.schedule()
        await self.async_auto_update()

    # ------------------------------------------------------------------------ placed items

    async def async_apply(self, types: list[str] | None, *, skip_pinned: bool = False) -> tuple[list[str], int]:
        """Update placed items (None: every one with an update) to the installed release; the updated types and the
        plan's revision. Worked out from the plan as it is once no save runs (#149), so none is overwritten."""
        updated: list[str] = []

        def change(building: dict[str, Any]) -> dict[str, Any] | None:
            nonlocal updated
            packs = self.data.offered_packs
            wanted = types
            if skip_pinned:
                wanted = [
                    p["type"]
                    for p in pending_items(building, packs)
                    if p["pack"] not in self.pinned and (types is None or p["type"] in types)
                ]
            new, updated = with_updates(building, packs, wanted)
            return new if updated else None

        revision = await self.data.async_update_building(change)
        return updated, revision

    async def async_auto_update(self) -> list[str]:
        """With auto-update on, update every placed item of a pack that is not pinned; the updated types."""
        if not self.settings["auto_update"]:
            return []
        updated, _revision = await self.async_apply(None, skip_pinned=True)
        return updated

    # ------------------------------------------------------------------------ installing

    async def async_install(self, payload: dict[str, Any], source: dict[str, Any], *, confirm: bool = False) -> None:
        """Install a checked pack (an import, a URL install or a check). When the library would then offer an older
        release than now, or another release of a pinned pack, it asks first: PackError("older_release" / "pinned")
        unless `confirm`. (An older copy of a bundled pack changes nothing: the bundled release stays offered.)"""
        # never in the middle of a check, which could put its release over this one (#47)
        async with self._lock:
            current = self._installed(payload["id"])
            after = self._offered_after(payload)
            if current is not None and not confirm:
                installed, new = current.get("release", 1), after.get("release", 1)
                if new < installed:
                    raise PackError(
                        "older_release",
                        f"release {payload.get('release', 1)} is older than the installed release {installed}",
                    )
                if payload["id"] in self.pinned and new != installed:
                    raise PackError("pinned", f"{payload['id']} is pinned to release {installed}")
            await self._async_add(payload, source)
        await self.async_auto_update()

    async def _async_add(self, payload: dict[str, Any], source: dict[str, Any]) -> None:
        """Install a pack, keeping the release the library offered so far for a roll back."""
        current = self._installed(payload["id"])
        if current is not None and current.get("release", 1) != self._offered_after(payload).get("release", 1):
            if current.get("bundled"):
                self.previous[payload["id"]] = {
                    "id": current["id"],
                    "release": current.get("release", 1),
                    "bundled": True,
                }
            else:
                self.previous[payload["id"]] = current
            await self._async_save()
        await self.data.async_add_pack(payload, source)

    def _offered_after(self, payload: dict[str, Any]) -> dict[str, Any]:
        """The pack the library would offer under the payload's id once it is installed."""
        imported = [p for p in self.data.packs if p["id"] != payload["id"]] + [payload]
        return next(p for p in with_bundled(self.data.bundled, imported) if p["id"] == payload["id"])

    # ------------------------------------------------------------------------ schedule

    def schedule(self) -> None:
        """(Re)start the scheduled check from the settings."""
        if self._unsub is not None:
            self._unsub()
            self._unsub = None
        if self.settings["frequency"] == "off":
            return
        hour, minute = (int(x) for x in self.settings["time"].split(":"))
        self._unsub = async_track_time_change(self.hass, self._scheduled, hour=hour, minute=minute, second=0)

    def start(self) -> None:
        """Start the scheduled check, and run a check missed while Home Assistant was down once it has started
        (#47): one was due since the last check, or none has run yet for a pack installed from GitHub."""
        self.schedule()

        @callback
        def catch_up(_hass: HomeAssistant) -> None:
            self._unsub_started = None
            due = last_due(self.settings, dt_util.now())
            if due is None:
                return
            if self.last_check is None:
                overdue = any(checked_origin((p.get("source") or {}).get("origin")) for p in self.data.packs)
            else:
                overdue = self.last_check < due.timestamp()
            if overdue:
                self.hass.async_create_background_task(self._async_scheduled_check(), "home_3d missed pack check")

        self._unsub_started = async_at_started(self.hass, catch_up)

    def stop(self) -> None:
        """Stop the scheduled check (unloading)."""
        if self._unsub is not None:
            self._unsub()
            self._unsub = None
        if self._unsub_started is not None:
            self._unsub_started()
            self._unsub_started = None

    @callback
    def _scheduled(self, now: datetime) -> None:
        """The time of the check: daily, weekly on the set day, monthly on the 1st."""
        frequency = self.settings["frequency"]
        if (frequency == "weekly" and now.weekday() != self.settings["weekday"]) or (
            frequency == "monthly" and now.day != 1
        ):
            return
        self.hass.async_create_background_task(self._async_scheduled_check(), "home_3d pack update check")

    async def _async_scheduled_check(self) -> None:
        try:
            await self.async_check()
        except Exception:
            _LOGGER.exception("The scheduled pack update check failed")

    # ------------------------------------------------------------------------ checking

    async def async_check(self) -> dict[str, Any]:
        """Check every pack installed from GitHub that is not pinned: a higher release of the pack at its ref is
        installed into the library (placed items follow only with auto-update on). The answer names the packs that
        were installed and the placed items auto-update updated."""
        installed: list[str] = []
        async with self._lock:
            for pack in list(self.data.packs):
                origin = checked_origin((pack.get("source") or {}).get("origin"))
                if origin is None or pack["id"] in self.pinned:
                    continue
                result: dict[str, Any] = {"checked_at": time.time()}
                try:
                    if await self._async_check_pack(pack, origin, result):
                        installed.append(pack["id"])
                except PackError as err:
                    _LOGGER.info("Update check of pack %s failed: %s", pack["id"], err)
                    result["error"] = f"{err.code}: {err.detail}" if err.detail else err.code
                self.checks[pack["id"]] = result
            # the checks of packs removed since are dropped (#47)
            self.checks = {k: v for k, v in self.checks.items() if any(p["id"] == k for p in self.data.packs)}
            self.last_check = time.time()
            await self._async_save()
        updated = await self.async_auto_update()
        return {"installed": installed, "updated": updated}

    async def _async_check_pack(self, pack: dict[str, Any], origin: dict[str, Any], result: dict[str, Any]) -> bool:
        """Check one pack; whether a newer release was installed. Raises PackError."""
        release = pack.get("release", 1)
        _commit, pack_json = await latest_release(self.hass, origin)
        if pack_json is not None and pack_json["id"] != pack["id"]:
            raise PackError("not_a_pack", f"the folder now holds the pack {pack_json['id']}")
        latest = pack_json["release"] if pack_json is not None else release
        result["latest_release"] = latest
        if latest <= release:
            # nothing newer for this pack (a check never installs an older release)
            return False
        files, new_origin = await fetch_pack(self.hass, origin["url"])
        payload = not_reserved(verify_folder(files))
        if payload["id"] != pack["id"] or payload["release"] <= release:
            return False
        source = {**source_of_folder(files), "origin": {**new_origin, "release": payload["release"]}}
        await self._async_add(payload, source)
        result["latest_release"] = payload["release"]
        return True

    async def async_pin(self, pack_id: str, pinned: bool) -> None:
        """Pin a pack to its installed release, or unpin it (auto-update then catches up); raises PackError."""
        if self._installed(pack_id) is None:
            raise PackError("not_found", f"{pack_id} is not installed")
        if pinned:
            self.pinned.add(pack_id)
        else:
            self.pinned.discard(pack_id)
        await self._async_save()
        if not pinned:
            await self.async_auto_update()

    async def async_rollback(self, pack_id: str) -> dict[str, Any]:
        """Put back the release a pack had before its last update, with the placed items that had taken that update,
        and pin the pack to it; raises PackError. The answer names the release now installed."""
        # never in the middle of a check, which could install over the release put back (#47)
        async with self._lock:
            current = self._installed(pack_id)
            previous = self.previous.get(pack_id)
            if current is None or previous is None:
                raise PackError("no_previous", f"{pack_id} has no earlier release to go back to")
            # the placed items that show the release being rolled back
            took = {
                type_
                for type_, copy_ in (self.data.building.get("recipes") or {}).items()
                if copy_["pack"] == pack_id
                and any(
                    recipe_copy(current, i)["hash"] == copy_.get("hash")
                    for i in current["items"]
                    if i["id"] == copy_["item"]
                )
            }
            # and the placed items that moved out of the pack since and still show that release (#110)
            current_items = {i["id"]: i for i in current["items"]}
            took_moved = {
                type_: item_id
                for type_, item_id in moved_out_of(pack_id, self.data.moves).items()
                if (copy_ := (self.data.building.get("recipes") or {}).get(type_)) is not None
                and item_id in current_items
                and moved_copy(recipe_copy(current, current_items[item_id]), type_)["hash"] == copy_.get("hash")
            }
            if previous.get("bundled"):
                # the bundled release comes back once the imported copy is gone
                await self.data.async_remove_pack(pack_id)
            else:
                payload = {k: v for k, v in previous.items() if k not in ("imported_at", "source")}
                await self.data.async_add_pack(payload, previous.get("source"))
            del self.previous[pack_id]
            self.pinned.add(pack_id)
            await self._async_save()
            restored = self._installed(pack_id)
            release = restored.get("release", 1) if restored else previous.get("release", 1)
            if restored is not None and (took or took_moved):
                installed = installed_copies([restored])
                restored_items = {i["id"]: i for i in restored["items"]}

                # on the plan as it is once no save runs (#149)
                def change(building: dict[str, Any]) -> dict[str, Any]:
                    recipes = dict(building.get("recipes") or {})
                    for type_ in took:
                        if type_ in installed:
                            recipes[type_] = recipe_copy(*installed[type_])
                    for type_, item_id in took_moved.items():
                        if item_id in restored_items:
                            recipes[type_] = moved_copy(recipe_copy(restored, restored_items[item_id]), type_)
                    return {**building, "recipes": recipes}

                await self.data.async_update_building(change)
        return {"release": release}
