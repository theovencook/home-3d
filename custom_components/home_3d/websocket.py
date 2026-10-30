"""Websocket commands used by the panel, the card and the editor."""

from __future__ import annotations

from collections.abc import Callable
from functools import wraps
import time
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import Unauthorized
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.loader import async_get_integration
import voluptuous as vol

from . import frontend_build
from .const import (
    DATA_ASK,
    DATA_EDITORS,
    DATA_PACK_UPDATES,
    DATA_VOICE,
    DOMAIN,
    SIGNAL_ASK,
    SIGNAL_BUILDING_UPDATED,
    SIGNAL_HOMES_UPDATED,
)
from .custom_items import not_reserved
from .editors import Editors, EditorsError, can_edit, performed_actions
from .locate.recorder import ws_locate_rec
from .locate.ws import COMMANDS as LOCATE_COMMANDS
from .pack_github import checked_origin, fetch_pack
from .pack_updates import SETTINGS_FIELDS, PackUpdates
from .packs import (
    MAX_ITEMS,
    MAX_PACK_SIZE,
    PackError,
    is_bundled,
    parts_of,
    source_of_folder,
    verify_folder,
    verify_item,
    verify_pack,
    verify_source,
)
from .schema import BUILDING_SCHEMA, IMAGE_DATA
from .storage import FloorplanData, Home, HomesError, complete
from .timetravel import ws_timetravel_history
from .voice import SENTENCE_MODES, AskBroker, VoiceSettings

_IMAGE_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))
# a home (#53): commands about one plan take it optionally; without it they work on the active home
_HOME_ID = vol.All(str, vol.Length(min=1, max=32), vol.Match(r"^[A-Za-z0-9_]+$"))
_HOME = {vol.Optional("home_id"): _HOME_ID}
_HOME_NAME = vol.All(str, vol.Strip, vol.Length(min=1, max=60))


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    """Register all websocket commands."""
    for command in (
        ws_get_building,
        ws_version,
        ws_save_building,
        ws_subscribe_building,
        ws_get_image,
        ws_set_image,
        ws_delete_image,
        ws_history_list,
        ws_history_snapshot,
        ws_history_restore,
        ws_packs_list,
        ws_packs_items,
        ws_packs_import,
        ws_packs_install_url,
        ws_packs_remove,
        ws_packs_updates,
        ws_packs_updates_settings,
        ws_packs_update_items,
        ws_packs_check,
        ws_packs_pin,
        ws_packs_rollback,
        ws_items_save,
        ws_items_remove,
        ws_backup_export,
        ws_backup_import,
        ws_timetravel_history,
        ws_voice_subscribe,
        ws_voice_answer,
        ws_voice_settings,
        ws_voice_settings_set,
        ws_locate_rec,
        ws_editors_get,
        ws_editors_set,
        ws_homes_list,
        ws_homes_create,
        ws_homes_rename,
        ws_homes_duplicate,
        ws_homes_delete,
        ws_homes_set_active,
    ):
        websocket_api.async_register_command(hass, command)
    for command in LOCATE_COMMANDS:
        websocket_api.async_register_command(hass, command)


def require_editor(func: Callable[..., Any]) -> Callable[..., Any]:
    """Like `require_admin`, for the editors list (#7): anyone else is refused with "unauthorized"."""

    @wraps(func)
    def with_editor(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
        if not can_edit(hass, connection.user):
            raise Unauthorized
        func(hass, connection, msg)

    return with_editor


def _data(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> FloorplanData | None:
    data: FloorplanData | None = hass.data.get(DOMAIN)
    if data is None:
        connection.send_error(msg["id"], "not_loaded", "Home 3D is not set up")
    return data


def _home(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> Home | None:
    """The home a command names (`home_id`), else the active one; an unknown id is answered with an error."""
    if (data := _data(hass, connection, msg)) is None:
        return None
    home = data.home(msg.get("home_id"))
    if home is None:
        connection.send_error(msg["id"], "home_not_found", "There is no such home")
    return home


@websocket_api.websocket_command({vol.Required("type"): "home_3d/building/get", **_HOME})
@websocket_api.async_response
async def ws_get_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the building, its revision, the running integration version and whether the user may edit.

    The frontend compares the version with its own: after an update the new frontend files are served
    at once, but the backend (and its validation) only changes with a restart.
    """
    if (home := _home(hass, connection, msg)) is None:
        return
    integration = await async_get_integration(hass, DOMAIN)
    connection.send_result(
        msg["id"],
        {
            "building": home.building,
            "revision": home.revision,
            # which home this is (#53): a client saves back to it, whichever home is active by then
            "home_id": home.id,
            "home_name": home.name,
            "version": str(integration.version),
            # whether this user is on the editors list (#7); the backend checks every change again
            "can_edit": can_edit(hass, connection.user),
            **await _async_build(hass),
        },
    )


async def _async_build(hass: HomeAssistant) -> dict[str, str]:
    """`{"build": id}` of the frontend files served now (#60), empty without a build file."""
    build = await hass.async_add_executor_job(frontend_build.read_build)
    return {"build": build} if build else {}


@websocket_api.websocket_command({vol.Required("type"): "home_3d/version"})
@websocket_api.async_response
async def ws_version(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The running integration version and the frontend build on disk (#60): an open page asks again when its
    websocket reconnects and offers a reload when it runs older JavaScript."""
    integration = await async_get_integration(hass, DOMAIN)
    connection.send_result(msg["id"], {"version": str(integration.version), **await _async_build(hass)})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/building/save",
        **_HOME,
        vol.Required("building"): BUILDING_SCHEMA,
        # the hashes of the recipe copies the client started from (#45), by pack item type
        vol.Optional("recipe_bases"): vol.All({str: vol.All(str, vol.Length(max=100))}, vol.Length(max=2000)),
    }
)
@require_editor
@websocket_api.async_response
async def ws_save_building(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the building. A new or changed `perform_action` item action needs an admin (#51)."""
    if (home := _home(hass, connection, msg)) is None:
        return
    if not connection.user.is_admin and performed_actions(msg["building"]) - performed_actions(home.building):
        connection.send_error(msg["id"], "unauthorized", "Only an admin adds or changes an item's perform action")
        return
    revision = await home.async_save_building(msg["building"], msg.get("recipe_bases"))
    # the plan's recipe copies as stored (#2): an open editor keeps them with its plan
    connection.send_result(
        msg["id"], {"revision": revision, "home_id": home.id, "recipes": home.building.get("recipes", {})}
    )


@websocket_api.websocket_command({vol.Required("type"): "home_3d/building/subscribe", **_HOME})
@callback
def ws_subscribe_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the new revision (and the home's id) whenever the building changes. Without a home this follows the
    active home: when another home becomes active, its revision is sent at once."""
    if (home := _home(hass, connection, msg)) is None:
        return
    data: FloorplanData = hass.data[DOMAIN]
    named = msg.get("home_id")
    followed = [home.id]

    def send(home_id: str, revision: int) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"revision": revision, "home_id": home_id}))

    @callback
    def forward(home_id: str, revision: int) -> None:
        if home_id == followed[0]:
            send(home_id, revision)

    @callback
    def homes_changed() -> None:
        if named is None and data.active_id != followed[0] and data.active_id in data.homes:
            followed[0] = data.active_id
            send(data.active_id, data.active.revision)

    unsubs = [
        async_dispatcher_connect(hass, SIGNAL_BUILDING_UPDATED, forward),
        async_dispatcher_connect(hass, SIGNAL_HOMES_UPDATED, homes_changed),
    ]

    @callback
    def unsubscribe() -> None:
        for unsub in unsubs:
            unsub()

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/image/get", **_HOME, vol.Required("image_id"): _IMAGE_ID}
)
@callback
def ws_get_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return a background image as data URL."""
    if (home := _home(hass, connection, msg)) is None:
        return
    image = home.get_image(msg["image_id"])
    if image is None:
        connection.send_error(msg["id"], "not_found", "Image not found")
        return
    connection.send_result(msg["id"], {"data": image})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/image/set",
        **_HOME,
        vol.Required("image_id"): _IMAGE_ID,
        vol.Required("data"): IMAGE_DATA,
    }
)
@require_editor
@websocket_api.async_response
async def ws_set_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Store a background image."""
    if (home := _home(hass, connection, msg)) is None:
        return
    await home.async_set_image(msg["image_id"], msg["data"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/image/delete", **_HOME, vol.Required("image_id"): _IMAGE_ID}
)
@require_editor
@websocket_api.async_response
async def ws_delete_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a background image."""
    if (home := _home(hass, connection, msg)) is None:
        return
    await home.async_delete_image(msg["image_id"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "home_3d/history/list", **_HOME})
@require_editor
@callback
def ws_history_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """List the restore points (newest first)."""
    if (home := _home(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"snapshots": home.history()})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/history/snapshot", **_HOME})
@require_editor
@websocket_api.async_response
async def ws_history_snapshot(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Keep the current building as a restore point (e.g. before an import)."""
    if (home := _home(hass, connection, msg)) is None:
        return
    await home.async_snapshot()
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/history/restore", **_HOME, vol.Required("snapshot_id"): _IMAGE_ID}
)
@websocket_api.require_admin
@require_editor
@websocket_api.async_response
async def ws_history_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Go back to a restore point; the current state becomes a restore point itself."""
    if (home := _home(hass, connection, msg)) is None:
        return
    building = home.snapshot(msg["snapshot_id"])
    if building is None:
        connection.send_error(msg["id"], "not_found", "Restore point not found")
        return
    revision = await home.async_restore(complete(building))
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/packs/list"})
@callback
def ws_packs_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the bundled and the imported furniture packs in their light form (#44): an index of the items, enough to
    browse and search the library. The recipes come with `packs/items`; placed items draw from the plan's copies."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"packs": data.library})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/packs/items",
        vol.Required("pack_id"): vol.All(str, vol.Length(max=64)),
        # the ids of the items wanted; without them every item of the pack
        vol.Optional("items"): vol.All([vol.All(str, vol.Length(max=40))], vol.Length(max=MAX_ITEMS)),
    }
)
@callback
def ws_packs_items(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The recipes of a pack's items, on demand (#44), with the pack's hash and release: a browser keeps them while
    the hash stays. Ids the pack does not have are left out."""
    if (data := _data(hass, connection, msg)) is None:
        return
    pack = next((p for p in data.offered_packs if p["id"] == msg["pack_id"]), None)
    if pack is None:
        connection.send_error(msg["id"], "not_found", "Pack not found")
        return
    listed = next(p for p in data.library if p["id"] == pack["id"])
    wanted = set(msg["items"]) if "items" in msg else None
    items = [item for item in pack["items"] if wanted is None or item["id"] in wanted]
    result = {"pack_id": pack["id"], "release": pack.get("release", 1), "hash": listed["hash"], "items": items}
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/packs/import",
        # an old single-file pack ...
        vol.Exclusive("pack", "source"): vol.All(str, vol.Length(max=MAX_PACK_SIZE)),
        # ... or a v2 pack folder: relative path -> file text (packs.py checks names, count and sizes)
        vol.Exclusive("files", "source"): {str: str},
        # an older release than the installed one, or another release of a pinned pack, was confirmed (#26)
        vol.Optional("confirm", default=False): bool,
    }
)
@require_editor
@websocket_api.async_response
async def ws_packs_import(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Check a pack's content, then keep it with its source (a backup carries the source and checks it again)."""
    if _data(hass, connection, msg) is None or (updates := _updates(hass, connection, msg)) is None:
        return
    try:
        if "files" in msg:
            payload = verify_folder(msg["files"])
            source = source_of_folder(msg["files"])
        elif "pack" in msg:
            payload = verify_pack(msg["pack"])
            source = parts_of(msg["pack"])
        else:
            raise PackError("not_a_pack", "send a pack file or a pack folder")
        not_reserved(payload)
        await updates.async_install(payload, source, confirm=msg["confirm"])
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    result = {
        "id": payload["id"],
        "name": payload["name"],
        "publisher": payload["publisher"],
        "licence": payload["licence"],
        "items": len(payload["items"]),
    }
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/packs/install_url",
        vol.Required("url"): vol.All(str, vol.Length(min=1, max=500)),
        vol.Optional("confirm", default=False): bool,
    }
)
@require_editor
@websocket_api.async_response
async def ws_packs_install_url(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Install a pack from a GitHub URL (#25): Home Assistant fetches it, checks it like a folder import and keeps
    where it came from (`source.origin`) for update checks."""
    if _data(hass, connection, msg) is None or (updates := _updates(hass, connection, msg)) is None:
        return
    try:
        files, origin = await fetch_pack(hass, msg["url"])
        payload = not_reserved(verify_folder(files))
        source = {**source_of_folder(files), "origin": {**origin, "release": payload["release"]}}
        await updates.async_install(payload, source, confirm=msg["confirm"])
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    result = {
        "id": payload["id"],
        "name": payload["name"],
        "publisher": payload["publisher"],
        "licence": payload["licence"],
        "items": len(payload["items"]),
        "origin": source["origin"],
    }
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/packs/remove", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@require_editor
@websocket_api.async_response
async def ws_packs_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove an imported pack (a bundled pack comes with Home 3D and stays; removing an imported copy of it brings
    the bundled one back)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_remove_pack(msg["pack_id"]):
        if is_bundled(data.bundled, msg["pack_id"]):
            connection.send_error(msg["id"], "bundled", "This pack comes with Home 3D and cannot be removed")
            return
        connection.send_error(msg["id"], "not_found", "Pack not found")
        return
    connection.send_result(msg["id"])


# ---------------------------------------------------------------------------- pack updates (#26)


def _updates(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> PackUpdates | None:
    updates: PackUpdates | None = hass.data.get(DATA_PACK_UPDATES)
    if updates is None:
        connection.send_error(msg["id"], "not_loaded", "Home 3D is not set up")
    return updates


@websocket_api.websocket_command({vol.Required("type"): "home_3d/packs/updates"})
@callback
def ws_packs_updates(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The update settings, the installed packs (pinned, previous release, last check) and the placed items with an
    update."""
    if (updates := _updates(hass, connection, msg)) is not None:
        connection.send_result(msg["id"], updates.status())


@websocket_api.websocket_command({vol.Required("type"): "home_3d/packs/updates/settings", **SETTINGS_FIELDS})
@require_editor
@websocket_api.async_response
async def ws_packs_updates_settings(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Change the update settings: auto-update, and how often and when packs are checked."""
    if (updates := _updates(hass, connection, msg)) is None:
        return
    await updates.async_set({k: v for k, v in msg.items() if k not in ("id", "type")})
    connection.send_result(msg["id"], updates.status())


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/packs/update_items",
        # the furniture types to update; left out: every placed item with an update
        vol.Optional("types"): vol.All([vol.All(str, vol.Length(max=200))], vol.Length(max=2000)),
    }
)
@require_editor
@websocket_api.async_response
async def ws_packs_update_items(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Update placed items to the installed release of their pack (their recipe copies in the plan)."""
    if (updates := _updates(hass, connection, msg)) is None:
        return
    updated, revision = await updates.async_apply(msg.get("types"))
    connection.send_result(msg["id"], {"updated": updated, "revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/packs/check"})
@require_editor
@websocket_api.async_response
async def ws_packs_check(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Check the packs installed from GitHub for a new release now."""
    if (updates := _updates(hass, connection, msg)) is None:
        return
    result = await updates.async_check()
    connection.send_result(msg["id"], {**updates.status(), **result})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/packs/pin",
        vol.Required("pack_id"): vol.All(str, vol.Length(max=64)),
        vol.Required("pinned"): bool,
    }
)
@require_editor
@websocket_api.async_response
async def ws_packs_pin(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Pin a pack to its installed release (or unpin it)."""
    if (updates := _updates(hass, connection, msg)) is None:
        return
    try:
        await updates.async_pin(msg["pack_id"], msg["pinned"])
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    connection.send_result(msg["id"], updates.status())


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/packs/rollback", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@require_editor
@websocket_api.async_response
async def ws_packs_rollback(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Put back the release a pack had before its last update; the pack is pinned to it."""
    if (updates := _updates(hass, connection, msg)) is None:
        return
    try:
        result = await updates.async_rollback(msg["pack_id"])
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    connection.send_result(msg["id"], {**updates.status(), **result})


# ---------------------------------------------------------------------------- custom items (#13)


@websocket_api.websocket_command({vol.Required("type"): "home_3d/items/save", vol.Required("item"): dict})
@require_editor
@websocket_api.async_response
async def ws_items_save(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Keep an item made in the item editor (or imported from an item file); it is checked like a pack's item and
    replaces a custom item with the same id, and placed copies of it change with it."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        item = await data.custom.async_save(msg["item"])
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    # placed copies of the item follow the change (#26)
    await data.async_follow_custom_items()
    connection.send_result(msg["id"], {"item": item})


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/items/remove", vol.Required("item_id"): vol.All(str, vol.Length(max=64))}
)
@require_editor
@websocket_api.async_response
async def ws_items_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a custom item (placed copies stay in the plan and keep their recipe copy)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.custom.async_remove(msg["item_id"]):
        connection.send_error(msg["id"], "not_found", "Item not found")
        return
    connection.send_result(msg["id"])


# ---------------------------------------------------------------------------- backup

BACKUP_FORMAT = "home3d-backup"


@websocket_api.websocket_command({vol.Required("type"): "home_3d/backup/export"})
@require_editor
@callback
def ws_backup_export(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Every home's plan and the packs for a backup file (the frontend adds the images one by one). The active
    home's plan is also `building`, so a version from before several homes (#53) can still restore the file."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(
        msg["id"],
        {
            "format": BACKUP_FORMAT,
            "version": 1,
            "building": data.building,
            "homes": [{"id": h.id, "name": h.name, "building": h.building} for h in data.homes.values()],
            "active": data.active_id,
            "packs": data.packs,
            # the household's own items (#13)
            "items": data.custom.items,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/backup/import",
        vol.Optional("building"): dict,
        vol.Optional("packs", default=[]): [dict],
        # the custom items (#13); a backup from before them leaves the current ones as they are
        vol.Optional("items"): [dict],
        # every home (#53): restored onto the home with the same id, or added; homes not in the backup stay.
        # Without them (a backup from before #53) `building` replaces the plan of `home_id` (default: the active one)
        vol.Optional("homes"): [
            vol.Schema(
                {vol.Required("id"): _HOME_ID, vol.Required("name"): _HOME_NAME, vol.Required("building"): dict},
                extra=vol.ALLOW_EXTRA,
            )
        ],
        vol.Optional("active"): _HOME_ID,
        **_HOME,
    }
)
@websocket_api.require_admin
@require_editor
@websocket_api.async_response
async def ws_backup_import(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the plans and the packs from a backup. Packs are checked again: only ones whose content
    validates come back; the rest are reported as skipped. The state before becomes a restore point."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        homes = [{**h, "building": BUILDING_SCHEMA(h["building"])} for h in msg.get("homes", [])]
        if not homes and "building" not in msg:
            raise vol.Invalid("a backup has a building or homes")
        # with homes the building at the top is the active home's again (for older versions): not needed
        building = BUILDING_SCHEMA(msg["building"]) if not homes else None
    except vol.Invalid as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    target = None
    if not homes and (target := _home(hass, connection, msg)) is None:
        return
    packs: list[dict[str, Any]] = []
    skipped: list[dict[str, str]] = []
    for entry in msg["packs"]:
        source = entry.get("source")
        name = str(entry.get("id") or "?")
        if not isinstance(source, dict):
            skipped.append({"id": name, "reason": "no_source"})
            continue
        try:
            clean = not_reserved(verify_source(source))
        except PackError as err:
            skipped.append({"id": name, "reason": err.code})
            continue
        if "origin" in source:
            # where a pack came from (#25): kept only when it names GitHub as this version writes it
            source = {k: v for k, v in source.items() if k != "origin"}
            if (origin := checked_origin(entry["source"]["origin"])) is not None:
                source["origin"] = origin
        packs.append({**clean, "source": source, "imported_at": time.time()})
    items: list[dict[str, Any]] | None = None
    if "items" in msg:
        items = []
        for item in msg["items"]:
            try:
                items.append(verify_item(item))
            except PackError as err:
                skipped.append({"id": str(item.get("id") or "?"), "reason": err.code})
    await data.async_set_packs(packs)
    if target is not None and building is not None:
        await target.async_restore(complete(building))
    for entry in homes:
        if (home := data.homes.get(entry["id"])) is not None:
            if home.name != entry["name"]:
                await data.async_rename_home(home.id, entry["name"])
            await home.async_restore(complete(entry["building"]))
        else:
            await data.async_create_home(entry["name"], complete(entry["building"]), home_id=entry["id"])
    if msg.get("active") in data.homes:
        await data.async_set_active(msg["active"])
    if items is not None:
        await data.custom.async_replace(items)
    shown = target or data.active
    result: dict[str, Any] = {
        "revision": shown.revision,
        "building": shown.building,
        "home_id": shown.id,
        "homes": data.homes_list(),
        "active": data.active_id,
        "packs": len(packs),
        "skipped": skipped,
    }
    if items is not None:
        result["items"] = len(items)
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command({vol.Required("type"): "home_3d/voice/subscribe"})
@callback
def ws_voice_subscribe(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Every sentence Assist (or the service `home_3d.ask`) hands to the views; each open view listens."""

    @callback
    def forward(ask: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], ask))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_ASK, forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/voice/answer",
        vol.Required("ask_id"): vol.All(str, vol.Length(max=64)),
        vol.Required("text"): vol.All(str, vol.Length(max=2000)),
        vol.Optional("answered", default=True): bool,
    }
)
@callback
def ws_voice_answer(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """A view's answer to a sentence: the first one is taken, later ones are told so (`taken: false`)."""
    broker: AskBroker | None = hass.data.get(DATA_ASK)
    taken = broker.answer(msg["ask_id"], msg["text"], msg["answered"]) if broker else False
    connection.send_result(msg["id"], {"taken": taken})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/voice/settings"})
@callback
def ws_voice_settings(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The voice settings: which sentences Assist hands to Home 3D."""
    settings: VoiceSettings | None = hass.data.get(DATA_VOICE)
    connection.send_result(msg["id"], {"sentences": settings.sentences if settings else "off"})


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/voice/settings/set", vol.Required("sentences"): vol.In(SENTENCE_MODES)}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_voice_settings_set(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Sets which sentences Assist hands to Home 3D; the sentence files are rewritten and Assist reloads them."""
    settings: VoiceSettings | None = hass.data.get(DATA_VOICE)
    if settings is None:
        connection.send_error(msg["id"], "not_ready", "voice settings not loaded")
        return
    try:
        kept = await settings.async_set_sentences(msg["sentences"])
    except OSError as err:
        connection.send_error(msg["id"], "write_failed", str(err))
        return
    connection.send_result(msg["id"], {"sentences": settings.sentences, "kept": kept})


# ---------------------------------------------------------------------------- editors (#7)


def _editors(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> Editors | None:
    editors: Editors | None = hass.data.get(DATA_EDITORS)
    if editors is None:
        connection.send_error(msg["id"], "not_loaded", "Home 3D is not set up")
    return editors


async def _send_editors(editors: Editors, connection: websocket_api.ActiveConnection, msg: dict) -> None:
    connection.send_result(msg["id"], {"users": await editors.async_users(), "custom": editors.custom is not None})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/editors/get"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_editors_get(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Everyone who signs in and whether they may change the plan; `custom` is false while the admins are."""
    if (editors := _editors(hass, connection, msg)) is not None:
        await _send_editors(editors, connection, msg)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/editors/set",
        vol.Required("editors"): vol.Any(None, [vol.All(str, vol.Length(max=64))]),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_editors_set(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Pick the editors (null: every admin again). A list without an admin is refused."""
    if (editors := _editors(hass, connection, msg)) is None:
        return
    try:
        await editors.async_set(msg["editors"])
    except EditorsError as err:
        connection.send_error(msg["id"], err.code, err.detail)
        return
    await _send_editors(editors, connection, msg)


# ---------------------------------------------------------------------------- homes (#53)


def _send_homes(data: FloorplanData, connection: websocket_api.ActiveConnection, msg: dict, **extra: Any) -> None:
    connection.send_result(msg["id"], {"homes": data.homes_list(), "active": data.active_id, **extra})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/homes/list"})
@require_editor
@callback
def ws_homes_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Every home with its revision and size, and which one is active (editors: viewers see the active home)."""
    if (data := _data(hass, connection, msg)) is not None:
        _send_homes(data, connection, msg)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/homes/create",
        vol.Required("name"): _HOME_NAME,
        # False for a sample or template home (#61): no import of this install's areas offered
        vol.Optional("area_import", default=True): bool,
    }
)
@require_editor
@websocket_api.async_response
async def ws_homes_create(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Add an empty home (it does not become active)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    home = await data.async_create_home(msg["name"], area_import=msg["area_import"])
    _send_homes(data, connection, msg, home=home.info())


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/homes/rename", vol.Required("home_id"): _HOME_ID, vol.Required("name"): _HOME_NAME}
)
@require_editor
@websocket_api.async_response
async def ws_homes_rename(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Give a home another name."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        await data.async_rename_home(msg["home_id"], msg["name"])
    except HomesError as err:
        connection.send_error(msg["id"], err.code, err.detail)
        return
    _send_homes(data, connection, msg)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/homes/duplicate",
        vol.Required("home_id"): _HOME_ID,
        vol.Required("name"): _HOME_NAME,
    }
)
@require_editor
@websocket_api.async_response
async def ws_homes_duplicate(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Add a home with a copy of another's plan and pictures."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        home = await data.async_duplicate_home(msg["home_id"], msg["name"])
    except HomesError as err:
        connection.send_error(msg["id"], err.code, err.detail)
        return
    _send_homes(data, connection, msg, home=home.info())


@websocket_api.websocket_command({vol.Required("type"): "home_3d/homes/delete", vol.Required("home_id"): _HOME_ID})
@require_editor
@websocket_api.async_response
async def ws_homes_delete(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a home with its plan, restore points and pictures; the last home is never removed."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        await data.async_delete_home(msg["home_id"])
    except HomesError as err:
        connection.send_error(msg["id"], err.code, err.detail)
        return
    _send_homes(data, connection, msg)


@websocket_api.websocket_command({vol.Required("type"): "home_3d/homes/set_active", vol.Required("home_id"): _HOME_ID})
@require_editor
@websocket_api.async_response
async def ws_homes_set_active(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Make a home the active one: the panel, the cards without a home, voice, locating and time travel follow."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        await data.async_set_active(msg["home_id"])
    except HomesError as err:
        connection.send_error(msg["id"], err.code, err.detail)
        return
    _send_homes(data, connection, msg)
