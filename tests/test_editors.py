"""Editors list (#7): who may change the plan. Defaults to the admins; a non-admin can be added."""

from __future__ import annotations

import copy

from homeassistant.core import HomeAssistant

from custom_components.home_3d.const import DOMAIN
from tests.test_init import BUILDING, IMAGE, _setup
from tests.test_pack_updates import _files


def _by_id(users: list[dict]) -> dict[str, dict]:
    return {u["id"]: u for u in users}


async def test_editors_default_to_the_admins(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user
) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "home_3d/editors/get"})
    result = await client.receive_json()
    assert result["success"], result
    users = _by_id(result["result"]["users"])
    assert users[hass_admin_user.id]["editor"] is True
    assert users[hass_admin_user.id]["is_admin"] is True
    assert users[hass_read_only_user.id]["editor"] is False
    assert result["result"]["custom"] is False


async def test_a_non_admin_on_the_list_can_save(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user, hass_read_only_access_token
) -> None:
    await _setup(hass)
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {"type": "home_3d/editors/set", "editors": [hass_admin_user.id, hass_read_only_user.id]}
    )
    result = await admin.receive_json()
    assert result["success"], result
    assert _by_id(result["result"]["users"])[hass_read_only_user.id]["editor"] is True
    assert result["result"]["custom"] is True

    editor = await hass_ws_client(hass, hass_read_only_access_token)
    await editor.send_json_auto_id({"type": "home_3d/building/get"})
    assert (await editor.receive_json())["result"]["can_edit"] is True
    await editor.send_json_auto_id({"type": "home_3d/building/save", "building": BUILDING})
    result = await editor.receive_json()
    assert result["success"], result
    assert result["result"]["revision"] == 1


async def test_someone_not_on_the_list_is_refused_but_can_still_view(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_access_token
) -> None:
    await _setup(hass)
    viewer = await hass_ws_client(hass, hass_read_only_access_token)
    await viewer.send_json_auto_id({"type": "home_3d/building/get"})
    got = await viewer.receive_json()
    assert got["success"] and got["result"]["can_edit"] is False
    for command in (
        {"type": "home_3d/building/save", "building": BUILDING},
        {"type": "home_3d/image/set", "image_id": "img1", "data": IMAGE},
        {"type": "home_3d/image/delete", "image_id": "img1"},
        {"type": "home_3d/history/list"},
        {"type": "home_3d/history/snapshot"},
        {"type": "home_3d/history/restore", "snapshot_id": "abc"},
        {"type": "home_3d/packs/remove", "pack_id": "x"},
        {"type": "home_3d/backup/export"},
        {"type": "home_3d/backup/import", "building": BUILDING},
        {"type": "home_3d/editors/get"},
        {"type": "home_3d/editors/set", "editors": None},
    ):
        await viewer.send_json_auto_id(command)
        result = await viewer.receive_json()
        assert not result["success"], command
        assert result["error"]["code"] == "unauthorized", command
    # what the view needs to show the house and control devices stays open
    for command in (
        {"type": "home_3d/packs/list"},
        {"type": "home_3d/packs/items", "pack_id": "theovencook.living", "items": ["_simple_chair"]},
        {"type": "home_3d/building/subscribe"},
    ):
        await viewer.send_json_auto_id(command)
        assert (await viewer.receive_json())["success"], command


async def test_someone_not_on_the_list_cannot_install_or_change_packs(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_access_token
) -> None:
    """Installing a pack (a folder, a GitHub URL), its updates and its items are editor commands (#7)."""
    await _setup(hass)
    viewer = await hass_ws_client(hass, hass_read_only_access_token)
    for command in (
        {"type": "home_3d/packs/import", "files": _files()},
        {"type": "home_3d/packs/import", "pack": "{}"},
        {"type": "home_3d/packs/install_url", "url": "https://github.com/someone/their-pack"},
        {"type": "home_3d/packs/updates/settings", "auto_update": True},
        {"type": "home_3d/packs/update_items"},
        {"type": "home_3d/packs/check"},
        {"type": "home_3d/packs/pin", "pack_id": "test.starter", "pinned": True},
        {"type": "home_3d/packs/rollback", "pack_id": "test.starter"},
        {"type": "home_3d/items/save", "item": {"id": "x"}},
        {"type": "home_3d/items/remove", "item_id": "x"},
    ):
        await viewer.send_json_auto_id(command)
        result = await viewer.receive_json()
        assert not result["success"], command
        assert result["error"]["code"] == "unauthorized", command
    # nothing was installed
    assert [p["id"] for p in hass.data[DOMAIN].packs] == []
    # the same import by an editor works
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id({"type": "home_3d/packs/import", "files": _files()})
    assert (await admin.receive_json())["success"]
    assert [p["id"] for p in hass.data[DOMAIN].packs] == ["test.starter"]


async def test_an_admin_left_off_the_list_is_refused(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_owner_user
) -> None:
    await _setup(hass)
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id({"type": "home_3d/editors/set", "editors": [hass_owner_user.id]})
    assert (await admin.receive_json())["success"]
    # the admin still manages the list, but no longer changes the plan
    await admin.send_json_auto_id({"type": "home_3d/building/get"})
    assert (await admin.receive_json())["result"]["can_edit"] is False
    await admin.send_json_auto_id({"type": "home_3d/building/save", "building": BUILDING})
    assert (await admin.receive_json())["error"]["code"] == "unauthorized"
    await admin.send_json_auto_id({"type": "home_3d/editors/get"})
    users = _by_id((await admin.receive_json())["result"]["users"])
    assert users[hass_admin_user.id]["editor"] is False
    assert users[hass_owner_user.id]["editor"] is True

    # back to the default: every admin edits again
    await admin.send_json_auto_id({"type": "home_3d/editors/set", "editors": None})
    result = await admin.receive_json()
    assert result["result"]["custom"] is False
    await admin.send_json_auto_id({"type": "home_3d/building/save", "building": BUILDING})
    assert (await admin.receive_json())["success"]


async def test_the_list_keeps_an_admin(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user
) -> None:
    await _setup(hass)
    admin = await hass_ws_client(hass)
    for editors in ([], [hass_read_only_user.id], ["no-such-user"]):
        await admin.send_json_auto_id({"type": "home_3d/editors/set", "editors": editors})
        result = await admin.receive_json()
        assert not result["success"], editors
        assert result["error"]["code"] == "no_admin", editors
    await admin.send_json_auto_id({"type": "home_3d/editors/get"})
    assert (await admin.receive_json())["result"]["custom"] is False


async def test_the_list_survives_a_restart(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user, hass_read_only_access_token
) -> None:
    entry = await _setup(hass)
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {"type": "home_3d/editors/set", "editors": [hass_admin_user.id, hass_read_only_user.id]}
    )
    assert (await admin.receive_json())["success"]
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()
    editor = await hass_ws_client(hass, hass_read_only_access_token)
    await editor.send_json_auto_id({"type": "home_3d/building/save", "building": BUILDING})
    assert (await editor.receive_json())["success"]


async def test_item_actions_follow_the_editors_list(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user, hass_read_only_access_token
) -> None:
    """Own tap/hold/double-tap actions (#6) are part of the plan: an editor changes them, a viewer cannot."""
    await _setup(hass)
    building = copy.deepcopy(BUILDING)
    building["floors"][0]["placements"] = [
        {"entity_id": "switch.gate", "x": 1, "z": 1, "y": None, "actions": {"tap": {"action": "more_info"}}}
    ]
    viewer = await hass_ws_client(hass, hass_read_only_access_token)
    await viewer.send_json_auto_id({"type": "home_3d/building/save", "building": building})
    assert (await viewer.receive_json())["error"]["code"] == "unauthorized"

    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {"type": "home_3d/editors/set", "editors": [hass_admin_user.id, hass_read_only_user.id]}
    )
    assert (await admin.receive_json())["success"]
    await viewer.send_json_auto_id({"type": "home_3d/building/save", "building": building})
    assert (await viewer.receive_json())["success"]
    await viewer.send_json_auto_id({"type": "home_3d/building/get"})
    got = (await viewer.receive_json())["result"]["building"]["floors"][0]["placements"][0]
    assert got["actions"]["tap"]["action"] == "more_info"


async def _non_admin_editor(hass: HomeAssistant, hass_ws_client, admin_id: str, user_id: str, token: str):
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id({"type": "home_3d/editors/set", "editors": [admin_id, user_id]})
    assert (await admin.receive_json())["success"]
    return admin, await hass_ws_client(hass, token)


def _with_tap(action: dict) -> dict:
    building = copy.deepcopy(BUILDING)
    building["floors"][0]["placements"] = [
        {"entity_id": "lock.front", "x": 1, "z": 1, "y": None, "actions": {"tap": action}}
    ]
    return building


async def test_only_an_admin_adds_or_changes_a_perform_action(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user, hass_read_only_access_token
) -> None:
    """A perform_action runs in the session of whoever taps, an admin too (#51): a non-admin editor can't set one."""
    await _setup(hass)
    admin, editor = await _non_admin_editor(
        hass, hass_ws_client, hass_admin_user.id, hass_read_only_user.id, hass_read_only_access_token
    )
    unlock = {"action": "perform_action", "target": "lock.unlock", "data": {"entity_id": "lock.front"}, "confirm": True}
    await editor.send_json_auto_id({"type": "home_3d/building/save", "building": _with_tap(unlock)})
    result = await editor.receive_json()
    assert not result["success"]
    assert result["error"]["code"] == "unauthorized"

    await admin.send_json_auto_id({"type": "home_3d/building/save", "building": _with_tap(unlock)})
    assert (await admin.receive_json())["success"]

    # the editor still changes everything else, the admin's action kept as it is
    moved = _with_tap(unlock)
    moved["floors"][0]["placements"][0]["x"] = 2
    await editor.send_json_auto_id({"type": "home_3d/building/save", "building": moved})
    assert (await editor.receive_json())["success"]
    # ... and may remove it
    await editor.send_json_auto_id({"type": "home_3d/building/save", "building": _with_tap({"action": "more_info"})})
    assert (await editor.receive_json())["success"]
    # but not change it (dropping the question counts)
    await admin.send_json_auto_id({"type": "home_3d/building/save", "building": _with_tap(unlock)})
    assert (await admin.receive_json())["success"]
    for changed in ({**unlock, "confirm": False}, {**unlock, "target": "lock.open"}):
        await editor.send_json_auto_id({"type": "home_3d/building/save", "building": _with_tap(changed)})
        assert (await editor.receive_json())["error"]["code"] == "unauthorized", changed


async def test_backup_import_and_restore_are_admin_only(
    hass: HomeAssistant, hass_ws_client, hass_admin_user, hass_read_only_user, hass_read_only_access_token
) -> None:
    """They replace the whole plan, actions and all (#51): a non-admin editor is refused."""
    await _setup(hass)
    admin, editor = await _non_admin_editor(
        hass, hass_ws_client, hass_admin_user.id, hass_read_only_user.id, hass_read_only_access_token
    )
    await admin.send_json_auto_id({"type": "home_3d/building/save", "building": BUILDING})
    assert (await admin.receive_json())["success"]
    await admin.send_json_auto_id({"type": "home_3d/history/snapshot"})
    assert (await admin.receive_json())["success"]
    await admin.send_json_auto_id({"type": "home_3d/history/list"})
    snapshot = (await admin.receive_json())["result"]["snapshots"][0]["id"]
    for command in (
        {"type": "home_3d/backup/import", "building": BUILDING},
        {"type": "home_3d/history/restore", "snapshot_id": snapshot},
    ):
        await editor.send_json_auto_id(command)
        result = await editor.receive_json()
        assert not result["success"], command
        assert result["error"]["code"] == "unauthorized", command
        await admin.send_json_auto_id(command)
        assert (await admin.receive_json())["success"], command
