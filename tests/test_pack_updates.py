"""Pack updates (#26): scheduled checks, per-item updates, auto-update, pin and roll back.

Placed items keep a copy of their recipe (#2), so a newer release of a pack changes nothing in the house until an
item is updated (one by one, or by the auto-update setting). GitHub is mocked (aioclient_mock): no test reaches the
network.
"""

from __future__ import annotations

import asyncio
from datetime import timedelta
import json
from unittest.mock import patch

from freezegun.api import FrozenDateTimeFactory
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from homeassistant.util import dt as dt_util
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_fire_time_changed
from pytest_homeassistant_custom_component.test_util.aiohttp import AiohttpClientMocker

from custom_components.home_3d import pack_updates
from custom_components.home_3d.const import DATA_PACK_UPDATES, DOMAIN, STORAGE_KEY_PACK_UPDATES
from custom_components.home_3d.packs import source_of_folder, verify_folder

PACK_JSON = {
    "format": "home3d-pack",
    "version": 2,
    "id": "test.starter",
    "name": "Starter",
    "publisher": "Test",
    "licence": "MIT",
    "release": 1,
}
PART = {"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"}
CHAIR = {"id": "cube_chair", "name": {"en": "Cube chair"}, "size": [0.8, 0.8, 0.75], "parts": [PART]}
STOOL = {"id": "stool", "name": {"en": "Stool"}, "size": [0.4, 0.4, 0.45], "parts": [PART]}
CHAIR_TYPE = "pack:test.starter:cube_chair"
STOOL_TYPE = "pack:test.starter:stool"


def _files(release: int = 1, chair_size: list[float] | None = None, stool_size: list[float] | None = None) -> dict:
    return {
        "pack.json": json.dumps({**PACK_JSON, "release": release}),
        "cube_chair.json": json.dumps({**CHAIR, "size": chair_size or CHAIR["size"]}),
        "stool.json": json.dumps({**STOOL, "size": stool_size or STOOL["size"]}),
    }


def _furniture(item_id: str, type_: str, x: float = 1) -> dict:
    return {"id": item_id, "type": type_, "x": x, "z": 1, "rotation": 0, "w": 0.8, "d": 0.8, "h": 0.75, "variant": None}


def _building(*furniture: dict) -> dict:
    return {
        "version": 1,
        "settings": {"wall_exterior": 0.24, "wall_interior": 0.12, "grid": 0.05},
        "floors": [
            {
                "id": "f1",
                "name": "Ground floor",
                "elevation": 0,
                "height": 2.5,
                "cut_height": 1.15,
                "rooms": [],
                "openings": [],
                "furniture": list(furniture),
                "placements": [],
                "background": None,
            }
        ],
    }


async def _setup(hass: HomeAssistant) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done(wait_background_tasks=True)


async def _client(hass: HomeAssistant, hass_ws_client, token: str | None = None):
    await _setup(hass)
    return await hass_ws_client(hass, token) if token else await hass_ws_client(hass)


async def _send(client, **msg) -> dict:
    await client.send_json_auto_id(msg)
    return await client.receive_json()


async def _call(client, **msg) -> dict:
    result = await _send(client, **msg)
    assert result["success"], result
    return result["result"]


async def _recipes(client) -> dict:
    return (await _call(client, type="home_3d/building/get"))["building"]["recipes"]


async def _placed_chair_and_stool(client) -> None:
    """Release 1 installed, a chair and a stool placed (two chairs: one copy)."""
    await _call(client, type="home_3d/packs/import", files=_files())
    plan = _building(_furniture("a", CHAIR_TYPE), _furniture("b", CHAIR_TYPE, x=3), _furniture("c", STOOL_TYPE))
    await _call(client, type="home_3d/building/save", building=plan)


async def test_placed_items_with_a_newer_release_are_listed_and_updated_one_by_one(
    hass: HomeAssistant, hass_ws_client
) -> None:
    client = await _client(hass, hass_ws_client)
    await _placed_chair_and_stool(client)
    assert (await _call(client, type="home_3d/packs/updates"))["items"] == []

    await _call(
        client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8], stool_size=[0.5, 0.5, 0.5])
    )
    # the house is unchanged until an item is updated
    assert (await _recipes(client))[CHAIR_TYPE]["recipe"]["size"] == [0.8, 0.8, 0.75]
    items = {i["type"]: i for i in (await _call(client, type="home_3d/packs/updates"))["items"]}
    assert set(items) == {CHAIR_TYPE, STOOL_TYPE}
    assert items[CHAIR_TYPE]["pack"] == "test.starter"
    assert items[CHAIR_TYPE]["name"] == {"en": "Cube chair"}
    assert items[CHAIR_TYPE]["release"] == 1
    assert items[CHAIR_TYPE]["new_release"] == 2
    assert items[CHAIR_TYPE]["placed"] == 2

    result = await _call(client, type="home_3d/packs/update_items", types=[CHAIR_TYPE])
    assert result["updated"] == [CHAIR_TYPE]
    recipes = await _recipes(client)
    assert recipes[CHAIR_TYPE]["recipe"]["size"] == [1.2, 0.9, 0.8]
    assert recipes[CHAIR_TYPE]["release"] == 2
    assert recipes[STOOL_TYPE]["release"] == 1
    assert [i["type"] for i in (await _call(client, type="home_3d/packs/updates"))["items"]] == [STOOL_TYPE]


async def test_only_editors_update_items_or_change_the_settings(
    hass: HomeAssistant, hass_ws_client, hass_read_only_access_token
) -> None:
    admin = await _client(hass, hass_ws_client)
    await _placed_chair_and_stool(admin)
    await _call(admin, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))
    viewer = await hass_ws_client(hass, hass_read_only_access_token)

    # anyone may see what has an update
    assert [i["type"] for i in (await _call(viewer, type="home_3d/packs/updates"))["items"]] == [CHAIR_TYPE]
    for msg in (
        {"type": "home_3d/packs/update_items", "types": [CHAIR_TYPE]},
        {"type": "home_3d/packs/updates/settings", "auto_update": True},
        {"type": "home_3d/packs/check"},
        {"type": "home_3d/packs/pin", "pack_id": "test.starter", "pinned": True},
        {"type": "home_3d/packs/rollback", "pack_id": "test.starter"},
    ):
        result = await _send(viewer, **msg)
        assert not result["success"], msg
        assert result["error"]["code"] == "unauthorized", msg
    assert (await _recipes(admin))[CHAIR_TYPE]["release"] == 1


async def test_auto_update_applies_new_releases_to_placed_items_without_asking(
    hass: HomeAssistant, hass_ws_client
) -> None:
    client = await _client(hass, hass_ws_client)
    await _placed_chair_and_stool(client)
    status = await _call(client, type="home_3d/packs/updates")
    # updates are opt-in: auto-update starts off
    assert status["settings"]["auto_update"] is False

    status = await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    assert status["settings"]["auto_update"] is True
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))

    recipes = await _recipes(client)
    assert recipes[CHAIR_TYPE]["release"] == 2
    assert recipes[CHAIR_TYPE]["recipe"]["size"] == [1.2, 0.9, 0.8]
    assert (await _call(client, type="home_3d/packs/updates"))["items"] == []


async def test_switching_auto_update_on_applies_the_waiting_updates(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    await _placed_chair_and_stool(client)
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))
    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 1

    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 2


async def test_the_settings_survive_a_restart(hass: HomeAssistant, hass_ws_client, hass_storage) -> None:
    client = await _client(hass, hass_ws_client)
    await _call(
        client, type="home_3d/packs/updates/settings", auto_update=True, frequency="weekly", time="05:30", weekday=6
    )
    await hass.config_entries.async_reload(hass.config_entries.async_entries(DOMAIN)[0].entry_id)
    await hass.async_block_till_done(wait_background_tasks=True)
    client = await hass_ws_client(hass)

    settings = (await _call(client, type="home_3d/packs/updates"))["settings"]
    assert settings == {"auto_update": True, "frequency": "weekly", "time": "05:30", "weekday": 6}
    bad = await _send(client, type="home_3d/packs/updates/settings", time="25:00")
    assert not bad["success"]


async def test_importing_an_older_release_than_the_installed_one_asks_first(
    hass: HomeAssistant, hass_ws_client
) -> None:
    client = await _client(hass, hass_ws_client)
    await _call(client, type="home_3d/packs/import", files=_files(3))

    refused = await _send(client, type="home_3d/packs/import", files=_files(2))
    assert not refused["success"]
    assert refused["error"]["code"] == "older_release"
    assert hass.data[DOMAIN].packs[0]["release"] == 3
    # the same release again, or a newer one, needs no question
    await _call(client, type="home_3d/packs/import", files=_files(3))

    await _call(client, type="home_3d/packs/import", files=_files(2), confirm=True)
    assert hass.data[DOMAIN].packs[0]["release"] == 2


async def test_a_pinned_pack_is_not_updated(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    await _placed_chair_and_stool(client)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    status = await _call(client, type="home_3d/packs/pin", pack_id="test.starter", pinned=True)
    assert next(p for p in status["packs"] if p["id"] == "test.starter")["pinned"] is True

    # another release asks first; confirmed, it is installed but auto-update leaves the placed items alone
    refused = await _send(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))
    assert refused["error"]["code"] == "pinned"
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]), confirm=True)
    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 1
    items = (await _call(client, type="home_3d/packs/updates"))["items"]
    assert {i["type"]: i["pinned"] for i in items} == {CHAIR_TYPE: True}

    # unpinned, auto-update catches up
    await _call(client, type="home_3d/packs/pin", pack_id="test.starter", pinned=False)
    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 2

    unknown = await _send(client, type="home_3d/packs/pin", pack_id="no.such", pinned=True)
    assert unknown["error"]["code"] == "not_found"


async def test_rolling_back_restores_the_previous_release_and_pins_it(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    await _placed_chair_and_stool(client)
    await _call(
        client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8], stool_size=[0.5, 0.5, 0.5])
    )
    await _call(client, type="home_3d/packs/update_items", types=[CHAIR_TYPE])
    status = await _call(client, type="home_3d/packs/updates")
    starter = next(p for p in status["packs"] if p["id"] == "test.starter")
    assert (starter["release"], starter["previous_release"]) == (2, 1)

    result = await _call(client, type="home_3d/packs/rollback", pack_id="test.starter")

    assert result["release"] == 1
    assert hass.data[DOMAIN].packs[0]["release"] == 1
    assert next(i for i in hass.data[DOMAIN].packs[0]["items"] if i["id"] == "cube_chair")["size"] == [0.8, 0.8, 0.75]
    # the chair had taken the update: it goes back too; the stool never left release 1
    recipes = await _recipes(client)
    assert recipes[CHAIR_TYPE]["release"] == 1
    assert recipes[CHAIR_TYPE]["recipe"]["size"] == [0.8, 0.8, 0.75]
    assert recipes[STOOL_TYPE]["recipe"]["size"] == [0.4, 0.4, 0.45]
    starter = next(p for p in result["packs"] if p["id"] == "test.starter")
    assert starter["pinned"] is True
    assert starter["previous_release"] is None
    assert result["items"] == []

    again = await _send(client, type="home_3d/packs/rollback", pack_id="test.starter")
    assert again["error"]["code"] == "no_previous"


async def test_placed_custom_items_follow_the_households_edits(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    shelf = {**STOOL, "id": "shelf", "name": {"en": "Shelf"}}
    shelf_type = "pack:household.custom:shelf"
    await _call(client, type="home_3d/items/save", item=shelf)
    await _call(client, type="home_3d/building/save", building=_building(_furniture("s", shelf_type)))
    plan = (await _call(client, type="home_3d/building/get"))["building"]
    assert plan["recipes"][shelf_type]["recipe"]["size"] == [0.4, 0.4, 0.45]

    await _call(client, type="home_3d/items/save", item={**shelf, "size": [1.0, 0.3, 1.8]})

    # no update to accept: the placed shelf follows the edit at once (the open views hear of the new revision)
    assert (await _recipes(client))[shelf_type]["recipe"]["size"] == [1.0, 0.3, 1.8]
    assert (await _call(client, type="home_3d/packs/updates"))["items"] == []
    # an editor that still has the old copy does not undo the edit
    await _call(client, type="home_3d/building/save", building=plan)
    assert (await _recipes(client))[shelf_type]["recipe"]["size"] == [1.0, 0.3, 1.8]


# ---------------------------------------------------------------------------- every home (#164)


async def _recipes_of(client, home_id: str) -> dict:
    return (await _call(client, type="home_3d/building/get", home_id=home_id))["building"]["recipes"]


async def _chairs_in_two_homes(client) -> str:
    """Release 1 installed, a chair placed in the active home and two in a second home that is not active; the second
    home's id."""
    await _placed_chair_and_stool(client)
    second = (await _call(client, type="home_3d/homes/create", name="Flat"))["home"]["id"]
    plan = _building(_furniture("a", CHAIR_TYPE), _furniture("b", CHAIR_TYPE, x=3))
    await _call(client, type="home_3d/building/save", home_id=second, building=plan)
    return second


async def test_auto_update_reaches_the_homes_that_are_not_active(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    second = await _chairs_in_two_homes(client)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)

    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))

    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 2
    flat = await _recipes_of(client, second)
    assert flat[CHAIR_TYPE]["release"] == 2
    assert flat[CHAIR_TYPE]["recipe"]["size"] == [1.2, 0.9, 0.8]


async def test_the_items_with_an_update_cover_every_home_and_update_together(
    hass: HomeAssistant, hass_ws_client
) -> None:
    client = await _client(hass, hass_ws_client)
    second = await _chairs_in_two_homes(client)
    active = hass.data[DOMAIN].active_id
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))

    items = {i["type"]: i for i in (await _call(client, type="home_3d/packs/updates"))["items"]}
    # two chairs in the flat and two in the active home
    assert items[CHAIR_TYPE]["placed"] == 4
    assert items[CHAIR_TYPE]["homes"] == [active, second]

    result = await _call(client, type="home_3d/packs/update_items", types=[CHAIR_TYPE])

    assert result["updated"] == [CHAIR_TYPE]
    assert result["revision"] == hass.data[DOMAIN].revision
    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 2
    assert (await _recipes_of(client, second))[CHAIR_TYPE]["release"] == 2
    assert [i["type"] for i in (await _call(client, type="home_3d/packs/updates"))["items"]] == []


async def test_a_home_whose_plan_cannot_be_read_takes_no_update(hass: HomeAssistant, hass_ws_client) -> None:
    """A read-only home (#165: plan_too_new or plan_invalid) is never written over: it lists no item with an update
    and an update of every home leaves it as it is."""
    client = await _client(hass, hass_ws_client)
    second = await _chairs_in_two_homes(client)
    active = hass.data[DOMAIN].active_id
    flat = hass.data[DOMAIN].homes[second]
    flat.problem = {"code": "plan_too_new", "message": "The stored plan cannot be opened"}
    revision, building = flat.revision, flat.building
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))

    items = {i["type"]: i for i in (await _call(client, type="home_3d/packs/updates"))["items"]}
    assert items[CHAIR_TYPE]["homes"] == [active]
    assert items[CHAIR_TYPE]["placed"] == 2

    result = await _call(client, type="home_3d/packs/update_items", types=[CHAIR_TYPE])

    assert result["updated"] == [CHAIR_TYPE]
    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 2
    assert flat.revision == revision and flat.building is building


async def test_a_rollback_puts_back_the_items_of_every_home(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    second = await _chairs_in_two_homes(client)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))
    assert (await _recipes_of(client, second))[CHAIR_TYPE]["release"] == 2
    flat_revision = hass.data[DOMAIN].homes[second].revision

    await _call(client, type="home_3d/packs/rollback", pack_id="test.starter")

    for recipes in (await _recipes(client), await _recipes_of(client, second)):
        assert recipes[CHAIR_TYPE]["release"] == 1
        assert recipes[CHAIR_TYPE]["recipe"]["size"] == [0.8, 0.8, 0.75]
    assert hass.data[DOMAIN].homes[second].revision == flat_revision + 1


async def test_a_rollback_leaves_a_home_without_the_update_unchanged(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    second = await _chairs_in_two_homes(client)
    first_copy = (await _recipes(client))[CHAIR_TYPE]
    await _call(client, type="home_3d/packs/import", files=_files(2, chair_size=[1.2, 0.9, 0.8]))
    await _call(client, type="home_3d/packs/update_items", types=[CHAIR_TYPE])
    # the flat goes back to release 1 by a save of its own (an editor that kept the older copy)
    flat = (await _call(client, type="home_3d/building/get", home_id=second))["building"]
    await _call(
        client, type="home_3d/building/save", home_id=second, building={**flat, "recipes": {CHAIR_TYPE: first_copy}}
    )
    assert (await _recipes_of(client, second))[CHAIR_TYPE]["release"] == 1
    revision = hass.data[DOMAIN].homes[second].revision

    await _call(client, type="home_3d/packs/rollback", pack_id="test.starter")

    assert (await _recipes(client))[CHAIR_TYPE]["release"] == 1
    # nothing to put back in the flat: it is not written
    assert hass.data[DOMAIN].homes[second].revision == revision


async def test_removing_a_pack_forgets_its_pin_and_previous_release(
    hass: HomeAssistant, hass_ws_client, hass_storage
) -> None:
    client = await _client(hass, hass_ws_client)
    await _call(client, type="home_3d/packs/import", files=_files())
    await _call(client, type="home_3d/packs/import", files=_files(2))
    await _call(client, type="home_3d/packs/pin", pack_id="test.starter", pinned=True)
    stored = hass_storage[STORAGE_KEY_PACK_UPDATES]["data"]
    assert stored["pinned"] == ["test.starter"]
    assert stored["previous"]["test.starter"]["release"] == 1

    await _call(client, type="home_3d/packs/remove", pack_id="test.starter")

    stored = hass_storage[STORAGE_KEY_PACK_UPDATES]["data"]
    assert stored["pinned"] == []
    assert "test.starter" not in stored["previous"]
    # installed again, the pack starts afresh: not pinned, nothing to roll back to
    await _call(client, type="home_3d/packs/import", files=_files(3))
    starter = next(p for p in (await _call(client, type="home_3d/packs/updates"))["packs"] if p["id"] == "test.starter")
    assert starter["pinned"] is False
    assert starter["previous_release"] is None
    refused = await _send(client, type="home_3d/packs/rollback", pack_id="test.starter")
    assert refused["error"]["code"] == "no_previous"
    missing = await _send(client, type="home_3d/packs/remove", pack_id="no.such")
    assert missing["error"]["code"] == "not_found"


# ---------------------------------------------------------------------------- checks against GitHub (mocked)

OWNER, REPO = "theovencook", "home-3d-packs"
API = f"https://api.github.com/repos/{OWNER}/{REPO}"
FOLDER_URL = f"https://github.com/{OWNER}/{REPO}/tree/main/test.starter"
OTHER = {**PACK_JSON, "id": "test.other", "name": "Other"}


def _sha(n: int) -> str:
    return f"{n:040x}"


def _github(aioclient_mock: AiohttpClientMocker, commit: int, starter: dict[str, str], other_release: int = 1) -> None:
    """The packs repository at a commit: a folder per pack (test.starter and test.other)."""
    aioclient_mock.clear_requests()
    sha, tree = _sha(commit), _sha(commit + 1000)
    files = {f"test.starter/{p}": t for p, t in starter.items()}
    files["test.other/pack.json"] = json.dumps({**OTHER, "release": other_release})
    files["test.other/stool.json"] = json.dumps(STOOL)
    aioclient_mock.get(f"{API}/commits/main", json={"sha": sha, "commit": {"tree": {"sha": tree}}})
    entries = [{"path": p, "type": "blob", "size": len(t.encode())} for p, t in files.items()]
    entries += [{"path": "test.starter", "type": "tree"}, {"path": "test.other", "type": "tree"}]
    aioclient_mock.get(f"{API}/git/trees/{tree}", json={"sha": tree, "tree": entries, "truncated": False})
    for path, text in files.items():
        aioclient_mock.get(f"https://raw.githubusercontent.com/{OWNER}/{REPO}/{sha}/{path}", text=text)


def _fetched(aioclient_mock: AiohttpClientMocker) -> list[str]:
    return [str(url) for _method, url, _data, _headers in aioclient_mock.mock_calls]


async def _installed_from_github(client, aioclient_mock: AiohttpClientMocker) -> None:
    _github(aioclient_mock, 1, _files())
    await _call(client, type="home_3d/packs/install_url", url=FOLDER_URL)
    plan = _building(_furniture("a", CHAIR_TYPE), _furniture("c", STOOL_TYPE))
    await _call(client, type="home_3d/building/save", building=plan)


async def test_a_check_only_records_the_update_until_an_editor_installs_it(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    """Auto-update is off by default: a check finds the newer release but installs nothing (#189)."""
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    _github(aioclient_mock, 2, _files(2, chair_size=[1.2, 0.9, 0.8]))

    status = await _call(client, type="home_3d/packs/check")

    assert status["installed"] == []
    pack = hass.data[DOMAIN].packs[0]
    assert pack["release"] == 1
    assert pack["source"]["origin"]["commit"] == _sha(1)
    starter = next(p for p in status["packs"] if p["id"] == "test.starter")
    assert starter["latest_release"] == 2
    assert starter["available"] == {"release": 2, "commit": _sha(2)}
    assert status["items"] == []
    # nothing was downloaded: the commit and the pack's own pack.json
    assert _fetched(aioclient_mock) == [
        f"{API}/commits/main",
        f"https://raw.githubusercontent.com/{OWNER}/{REPO}/{_sha(2)}/test.starter/pack.json",
    ]


async def test_a_repository_change_to_another_pack_is_no_update(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    # a new commit in the packs repository: only test.other got a new release
    _github(aioclient_mock, 2, _files(), other_release=5)

    status = await _call(client, type="home_3d/packs/check")

    assert status["installed"] == []
    assert hass.data[DOMAIN].packs[0]["source"]["origin"]["commit"] == _sha(1)
    assert next(p for p in status["packs"] if p["id"] == "test.starter")["latest_release"] == 1
    # only the pack's own pack.json was read, nothing was downloaded
    fetched = _fetched(aioclient_mock)
    assert fetched == [
        f"{API}/commits/main",
        f"https://raw.githubusercontent.com/{OWNER}/{REPO}/{_sha(2)}/test.starter/pack.json",
    ]


async def test_an_unchanged_repository_costs_one_request(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    _github(aioclient_mock, 1, _files())

    await _call(client, type="home_3d/packs/check")

    assert _fetched(aioclient_mock) == [f"{API}/commits/main"]


async def test_a_check_with_auto_update_updates_the_placed_items(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    _github(aioclient_mock, 2, _files(2, chair_size=[1.2, 0.9, 0.8]))

    status = await _call(client, type="home_3d/packs/check")

    assert status["updated"] == [CHAIR_TYPE]
    recipes = await _recipes(client)
    assert recipes[CHAIR_TYPE]["release"] == 2
    assert recipes[CHAIR_TYPE]["commit"] == _sha(2)
    # the library took the release, with the one before it kept for a roll back
    assert status["installed"] == ["test.starter"]
    starter = next(p for p in status["packs"] if p["id"] == "test.starter")
    assert starter["previous_release"] == 1 and "available" not in starter


async def test_a_check_leaves_pinned_packs_and_never_installs_an_older_release(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/pin", pack_id="test.starter", pinned=True)
    _github(aioclient_mock, 2, _files(2))
    await _call(client, type="home_3d/packs/check")
    assert _fetched(aioclient_mock) == []
    assert hass.data[DOMAIN].packs[0]["release"] == 1

    await _call(client, type="home_3d/packs/pin", pack_id="test.starter", pinned=False)
    await _call(client, type="home_3d/packs/import", files=_files(3))
    # the branch went back to release 2: older than the installed 3
    _github(aioclient_mock, 3, _files(2))
    status = await _call(client, type="home_3d/packs/check")
    assert status["installed"] == []
    assert hass.data[DOMAIN].packs[0]["release"] == 3


async def test_a_failed_check_is_reported_per_pack(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    aioclient_mock.clear_requests()
    aioclient_mock.get(f"{API}/commits/main", status=403)

    status = await _call(client, type="home_3d/packs/check")

    starter = next(p for p in status["packs"] if p["id"] == "test.starter")
    assert "fetch_failed" in starter["error"]
    assert hass.data[DOMAIN].packs[0]["release"] == 1


class _HeldCheck:
    """Holds a check at GitHub's first answer until released, so something else can try to run meanwhile."""

    def __init__(self) -> None:
        self.gate = asyncio.Event()
        self.real = pack_updates.latest_release

    async def latest_release(self, hass, origin):
        await self.gate.wait()
        return await self.real(hass, origin)


async def test_an_install_waits_for_a_running_check(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    """A check that is under way finishes before an import lands, so it can't put its older release over it (#47)."""
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    updates = hass.data[DATA_PACK_UPDATES]
    _github(aioclient_mock, 2, _files(2))
    held = _HeldCheck()
    with patch.object(pack_updates, "latest_release", held.latest_release):
        check = hass.async_create_task(updates.async_check())
        await asyncio.sleep(0.05)
        install = hass.async_create_task(updates.async_install(verify_folder(_files(3)), source_of_folder(_files(3))))
        await asyncio.sleep(0.05)
        held.gate.set()
        await asyncio.gather(check, install)
    assert hass.data[DOMAIN].packs[0]["release"] == 3


async def test_a_rollback_waits_for_a_running_check(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    _github(aioclient_mock, 2, _files(2))
    await _call(client, type="home_3d/packs/check")
    updates = hass.data[DATA_PACK_UPDATES]
    _github(aioclient_mock, 3, _files(3))
    held = _HeldCheck()
    with patch.object(pack_updates, "latest_release", held.latest_release):
        check = hass.async_create_task(updates.async_check())
        await asyncio.sleep(0.05)
        rollback = hass.async_create_task(updates.async_rollback("test.starter"))
        await asyncio.sleep(0.05)
        held.gate.set()
        await asyncio.gather(check, rollback)
    # the check brought release 3, the rollback then went back to 2 and pinned it
    assert hass.data[DOMAIN].packs[0]["release"] == 2
    assert "test.starter" in updates.pinned


async def test_the_checks_of_removed_packs_are_dropped(
    hass: HomeAssistant, hass_ws_client, hass_storage, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    _github(aioclient_mock, 1, _files())
    await _call(client, type="home_3d/packs/check")
    assert "test.starter" in hass_storage[STORAGE_KEY_PACK_UPDATES]["data"]["checks"]

    await _call(client, type="home_3d/packs/remove", pack_id="test.starter")
    await _call(client, type="home_3d/packs/check")
    assert "test.starter" not in hass_storage[STORAGE_KEY_PACK_UPDATES]["data"]["checks"]


# ---------------------------------------------------------------------------- the schedule


async def _at(hass: HomeAssistant, freezer: FrozenDateTimeFactory, when) -> None:
    freezer.move_to(when)
    async_fire_time_changed(hass, when)
    await hass.async_block_till_done(wait_background_tasks=True)


async def test_checks_run_on_the_configured_schedule(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker, freezer: FrozenDateTimeFactory
) -> None:
    # next Monday 01:00 (signed in first: time only moves on once the connection is open)
    monday = dt_util.now().replace(hour=1, minute=0, second=0, microsecond=0)
    monday += timedelta(days=7 - monday.weekday())
    client = await _client(hass, hass_ws_client)
    freezer.move_to(monday)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    # by default a daily check at 04:00
    assert (await _call(client, type="home_3d/packs/updates"))["settings"]["frequency"] == "daily"
    await _call(client, type="home_3d/packs/updates/settings", frequency="weekly", weekday=2, time="05:30")
    _github(aioclient_mock, 2, _files(2))

    # not at the old time, not on another day
    await _at(hass, freezer, monday.replace(hour=4))
    await _at(hass, freezer, monday.replace(hour=5, minute=30))
    await _at(hass, freezer, monday.replace(hour=5, minute=30) + timedelta(days=1))
    assert _fetched(aioclient_mock) == []

    # Wednesday 05:30
    await _at(hass, freezer, monday.replace(hour=5, minute=30) + timedelta(days=2))
    assert hass.data[DOMAIN].packs[0]["release"] == 2


async def test_a_daily_check_and_switching_checks_off(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker, freezer: FrozenDateTimeFactory
) -> None:
    start = dt_util.now().replace(hour=1, minute=0, second=0, microsecond=0) + timedelta(days=1)
    client = await _client(hass, hass_ws_client)
    freezer.move_to(start)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    _github(aioclient_mock, 2, _files(2))
    await _call(client, type="home_3d/packs/updates/settings", frequency="off")
    await _at(hass, freezer, start.replace(hour=4))
    assert _fetched(aioclient_mock) == []

    await _call(client, type="home_3d/packs/updates/settings", frequency="daily", time="04:00")
    await _at(hass, freezer, start.replace(hour=4) + timedelta(days=1))
    assert hass.data[DOMAIN].packs[0]["release"] == 2


async def test_a_check_missed_while_home_assistant_was_down_runs_once_after_start_up(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker, freezer: FrozenDateTimeFactory
) -> None:
    """The daily 04:00 check passes while Home Assistant is down: it runs once when Home 3D starts again (#47)."""
    start = dt_util.now().replace(hour=3, minute=0, second=0, microsecond=0) + timedelta(days=1)
    client = await _client(hass, hass_ws_client)
    freezer.move_to(start)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/updates/settings", auto_update=True)
    await _call(client, type="home_3d/packs/check")
    entry = hass.config_entries.async_entries(DOMAIN)[0]

    # down from 03:00 to 05:00: no time change reaches the 04:00 check
    _github(aioclient_mock, 2, _files(2))
    freezer.move_to(start.replace(hour=5))
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done(wait_background_tasks=True)
    assert hass.data[DOMAIN].packs[0]["release"] == 2

    # started again after a check that ran on time: nothing is overdue
    aioclient_mock.clear_requests()
    freezer.move_to(start.replace(hour=6))
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done(wait_background_tasks=True)
    assert _fetched(aioclient_mock) == []


# ---------------------------------------------------------------------------- what an install or update changes (#189)


async def _preview(client, url: str = FOLDER_URL) -> dict:
    return await _call(client, type="home_3d/packs/preview_url", url=url)


async def test_a_preview_names_the_commit_and_the_items_an_update_adds_changes_and_removes(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    newer = _files(2, chair_size=[1.2, 0.9, 0.8])
    del newer["stool.json"]
    newer["bench.json"] = json.dumps({**STOOL, "id": "bench", "name": {"en": "Bench"}})
    _github(aioclient_mock, 2, newer)

    preview = await _preview(client)

    assert preview["origin"] == {
        "url": FOLDER_URL,
        "owner": OWNER,
        "repo": REPO,
        "ref": "main",
        "folder": "test.starter",
        "commit": _sha(2),
        "default_branch": False,
    }
    assert preview["pack"] | {"items": 0} == {
        "id": "test.starter",
        "name": "Starter",
        "publisher": "Test",
        "licence": "MIT",
        "release": 2,
        "items": 0,
    }
    assert preview["installed"] == {
        "release": 1,
        "publisher": "Test",
        "bundled": False,
        "pinned": False,
        "commit": _sha(1),
    }
    changes = preview["changes"]
    assert [i["id"] for i in changes["added"]] == ["bench"]
    assert [i["id"] for i in changes["changed"]] == ["cube_chair"]
    assert [i["id"] for i in changes["removed"]] == ["stool"]
    assert changes["added"][0]["name"] == {"en": "Bench"}
    assert changes["unchanged"] == 0
    assert preview["warnings"] == []
    # a preview installs nothing
    assert hass.data[DOMAIN].packs[0]["release"] == 1
    assert hass.data[DOMAIN].packs[0]["source"]["origin"]["commit"] == _sha(1)


async def test_a_preview_of_a_pack_not_installed_lists_every_item_as_new(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    _github(aioclient_mock, 1, _files())

    preview = await _preview(client)

    assert preview["installed"] is None
    assert sorted(i["id"] for i in preview["changes"]["added"]) == ["cube_chair", "stool"]
    assert preview["changes"]["changed"] == [] and preview["changes"]["removed"] == []
    assert hass.data[DOMAIN].packs == []


async def test_a_preview_warns_about_an_older_release_and_a_pinned_pack(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    await _call(client, type="home_3d/packs/import", files=_files(3))
    _github(aioclient_mock, 2, _files(2))
    assert (await _preview(client))["warnings"] == ["older_release"]

    await _call(client, type="home_3d/packs/pin", pack_id="test.starter", pinned=True)
    _github(aioclient_mock, 4, _files(4))
    preview = await _preview(client)
    assert preview["warnings"] == ["pinned"]
    assert preview["installed"]["pinned"] is True


async def test_an_install_insists_on_the_commit_the_preview_showed(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    _github(aioclient_mock, 2, _files(2))
    commit = (await _preview(client))["origin"]["commit"]

    # the branch moved on after the preview: nothing is installed, the editor looks again
    _github(aioclient_mock, 3, _files(3))
    moved = await _send(client, type="home_3d/packs/install_url", url=FOLDER_URL, commit=commit)
    assert moved["error"]["code"] == "changed_since_preview"
    assert hass.data[DOMAIN].packs[0]["release"] == 1

    _github(aioclient_mock, 2, _files(2))
    done = await _call(client, type="home_3d/packs/install_url", url=FOLDER_URL, commit=commit)
    assert done["origin"]["commit"] == commit
    assert hass.data[DOMAIN].packs[0]["release"] == 2


async def test_installing_the_update_a_check_found_clears_it(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    await _installed_from_github(client, aioclient_mock)
    _github(aioclient_mock, 2, _files(2))
    status = await _call(client, type="home_3d/packs/check")
    assert next(p for p in status["packs"] if p["id"] == "test.starter")["available"]["release"] == 2

    await _call(client, type="home_3d/packs/install_url", url=FOLDER_URL, commit=_sha(2))

    status = await _call(client, type="home_3d/packs/updates")
    starter = next(p for p in status["packs"] if p["id"] == "test.starter")
    assert starter["release"] == 2 and "available" not in starter


async def test_a_preview_of_a_bundled_pack_id_from_another_publisher_is_flagged(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    client = await _client(hass, hass_ws_client)
    bundled = hass.data[DOMAIN].bundled[0]
    files = _files(bundled.get("release", 1) + 1)
    files["pack.json"] = json.dumps(
        {**PACK_JSON, "id": bundled["id"], "publisher": "Someone else", "release": bundled.get("release", 1) + 1}
    )
    _github(aioclient_mock, 1, {"pack.json": files["pack.json"], "stool.json": files["stool.json"]})

    preview = await _preview(client)

    assert preview["installed"]["bundled"] is True
    assert "bundled_publisher" in preview["warnings"]


def _language_files(release: int, strings: dict[str, str]) -> dict[str, str]:
    pack = {**PACK_JSON, "kind": "language", "language": "fr", "release": release}
    return {"pack.json": json.dumps(pack), "strings.json": json.dumps(strings)}


async def test_a_language_pack_previews_its_texts_and_installs_at_the_previewed_commit(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    """A language pack (#196) goes through the same preview and commit pin (#189); its changes are text keys."""
    client = await _client(hass, hass_ws_client)
    _github(aioclient_mock, 1, _language_files(1, {"view": "Vue 3D", "editor": "Éditeur"}))
    first = await _preview(client)
    assert first["pack"]["kind"] == "language" and first["pack"]["language"] == "fr" and first["pack"]["texts"] == 2
    assert sorted(i["id"] for i in first["changes"]["added"]) == ["editor", "view"]
    done = await _call(client, type="home_3d/packs/install_url", url=FOLDER_URL, commit=first["origin"]["commit"])
    assert done["kind"] == "language" and done["origin"]["commit"] == _sha(1)

    _github(aioclient_mock, 2, _language_files(2, {"view": "Vue", "loading": "Chargement …"}))
    update = await _preview(client)
    changes = update["changes"]
    assert [i["id"] for i in changes["added"]] == ["loading"]
    assert [i["id"] for i in changes["changed"]] == ["view"]
    assert [i["id"] for i in changes["removed"]] == ["editor"]
    assert changes["unchanged"] == 0 and update["installed"]["commit"] == _sha(1)

    # moved on after the preview: refused, the installed texts stay
    _github(aioclient_mock, 3, _language_files(3, {"view": "Vue"}))
    moved = await _send(client, type="home_3d/packs/install_url", url=FOLDER_URL, commit=update["origin"]["commit"])
    assert moved["error"]["code"] == "changed_since_preview"
    got = await _call(client, type="home_3d/languages/get", language="fr")
    assert got["strings"] == {"view": "Vue 3D", "editor": "Éditeur"}
