"""Websocket commands used by the panel, the card and the editor."""

from __future__ import annotations

import time
from collections.abc import Callable
from functools import wraps
from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import Unauthorized
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.loader import async_get_integration
import voluptuous as vol

from .const import DATA_ASK, DATA_EDITORS, DATA_VOICE, DOMAIN, SIGNAL_ASK, SIGNAL_BUILDING_UPDATED
from .editors import Editors, EditorsError, can_edit
from .locate.recorder import ws_locate_rec
from .locate.ws import COMMANDS as LOCATE_COMMANDS
from .packs import MAX_PACK_SIZE, PackError, parts_of, source_of_folder, verify_folder, verify_pack, verify_source
from .schema import BUILDING_SCHEMA, IMAGE_DATA
from .storage import FloorplanData, complete
from .timetravel import ws_timetravel_history
from .voice import SENTENCE_MODES, AskBroker, VoiceSettings

_IMAGE_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    """Register all websocket commands."""
    for command in (
        ws_get_building,
        ws_save_building,
        ws_subscribe_building,
        ws_get_image,
        ws_set_image,
        ws_delete_image,
        ws_history_list,
        ws_history_snapshot,
        ws_history_restore,
        ws_packs_list,
        ws_packs_import,
        ws_packs_remove,
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


@websocket_api.websocket_command({vol.Required("type"): "home_3d/building/get"})
@websocket_api.async_response
async def ws_get_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the building, its revision, the running integration version and whether the user may edit.

    The frontend compares the version with its own: after an update the new frontend files are served
    at once, but the backend (and its validation) only changes with a restart.
    """
    if (data := _data(hass, connection, msg)) is None:
        return
    integration = await async_get_integration(hass, DOMAIN)
    connection.send_result(
        msg["id"],
        {
            "building": data.building,
            "revision": data.revision,
            "version": str(integration.version),
            # whether this user is on the editors list (#7); the backend checks every change again
            "can_edit": can_edit(hass, connection.user),
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/building/save",
        vol.Required("building"): BUILDING_SCHEMA,
    }
)
@require_editor
@websocket_api.async_response
async def ws_save_building(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the building."""
    if (data := _data(hass, connection, msg)) is None:
        return
    revision = await data.async_save_building(msg["building"])
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/building/subscribe"})
@callback
def ws_subscribe_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the new revision whenever the building changes."""

    @callback
    def forward(revision: int) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"revision": revision}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_BUILDING_UPDATED, forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "home_3d/image/get", vol.Required("image_id"): _IMAGE_ID})
@callback
def ws_get_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return a background image as data URL."""
    if (data := _data(hass, connection, msg)) is None:
        return
    image = data.get_image(msg["image_id"])
    if image is None:
        connection.send_error(msg["id"], "not_found", "Image not found")
        return
    connection.send_result(msg["id"], {"data": image})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/image/set",
        vol.Required("image_id"): _IMAGE_ID,
        vol.Required("data"): IMAGE_DATA,
    }
)
@require_editor
@websocket_api.async_response
async def ws_set_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Store a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_set_image(msg["image_id"], msg["data"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "home_3d/image/delete", vol.Required("image_id"): _IMAGE_ID})
@require_editor
@websocket_api.async_response
async def ws_delete_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_delete_image(msg["image_id"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "home_3d/history/list"})
@require_editor
@callback
def ws_history_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """List the restore points (newest first)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"snapshots": data.history()})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/history/snapshot"})
@require_editor
@websocket_api.async_response
async def ws_history_snapshot(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Keep the current building as a restore point (e.g. before an import)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_snapshot()
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/history/restore", vol.Required("snapshot_id"): _IMAGE_ID}
)
@require_editor
@websocket_api.async_response
async def ws_history_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Go back to a restore point; the current state becomes a restore point itself."""
    if (data := _data(hass, connection, msg)) is None:
        return
    building = data.snapshot(msg["snapshot_id"])
    if building is None:
        connection.send_error(msg["id"], "not_found", "Restore point not found")
        return
    await data.async_snapshot()
    revision = await data.async_save_building(complete(building))
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "home_3d/packs/list"})
@callback
def ws_packs_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the imported furniture packs (every user needs them to see the furniture)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"packs": data.packs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/packs/import",
        # an old single-file pack ...
        vol.Exclusive("pack", "source"): vol.All(str, vol.Length(max=MAX_PACK_SIZE)),
        # ... or a v2 pack folder: relative path -> file text (packs.py checks names, count and sizes)
        vol.Exclusive("files", "source"): {str: str},
    }
)
@require_editor
@websocket_api.async_response
async def ws_packs_import(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Check a pack's content, then keep it with its source (a backup carries the source and checks it again)."""
    if (data := _data(hass, connection, msg)) is None:
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
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    await data.async_add_pack(payload, source)
    result = {
        "id": payload["id"],
        "name": payload["name"],
        "publisher": payload["publisher"],
        "licence": payload["licence"],
        "items": len(payload["items"]),
    }
    connection.send_result(msg["id"], result)


@websocket_api.websocket_command(
    {vol.Required("type"): "home_3d/packs/remove", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@require_editor
@websocket_api.async_response
async def ws_packs_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove an imported pack."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_remove_pack(msg["pack_id"]):
        connection.send_error(msg["id"], "not_found", "Pack not found")
        return
    connection.send_result(msg["id"])


# ---------------------------------------------------------------------------- backup

BACKUP_FORMAT = "home3d-backup"


@websocket_api.websocket_command({vol.Required("type"): "home_3d/backup/export"})
@require_editor
@callback
def ws_backup_export(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The plan and the packs for a backup file (the frontend adds the images one by one)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(
        msg["id"], {"format": BACKUP_FORMAT, "version": 1, "building": data.building, "packs": data.packs}
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "home_3d/backup/import",
        vol.Required("building"): dict,
        vol.Optional("packs", default=[]): [dict],
    }
)
@require_editor
@websocket_api.async_response
async def ws_backup_import(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the plan and the packs from a backup. Packs are checked again: only ones whose content
    validates come back; the rest are reported as skipped. The state before becomes a restore point."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        building = BUILDING_SCHEMA(msg["building"])
    except vol.Invalid as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
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
            clean = verify_source(source)
        except PackError as err:
            skipped.append({"id": name, "reason": err.code})
            continue
        packs.append({**clean, "source": source, "imported_at": time.time()})
    revision = await data.async_restore(complete(building), packs)
    connection.send_result(
        msg["id"],
        {
            "revision": revision,
            "building": data.building,
            "packs": len(packs),
            "skipped": skipped,
        },
    )


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
