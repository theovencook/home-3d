"""A backup's packs (#375): limits that fit one websocket message, and packs sent ahead in parts."""

from __future__ import annotations

import json

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry
from pytest_homeassistant_custom_component.test_util.aiohttp import AiohttpClientMocker

from custom_components.home_3d import backup_restore, packs
from custom_components.home_3d.const import DOMAIN
from tests.test_init import BUILDING

PART = {"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"}
CHAIR = {"id": "cube_chair", "name": {"en": "Cube chair"}, "size": [0.8, 0.8, 0.75], "parts": [PART]}


def _pack_json(pack_id: str = "test.starter", **extra) -> str:
    return json.dumps(
        {"format": "home3d-pack", "version": 2, "id": pack_id, "name": "Starter", "publisher": "Test", "licence": "MIT"}
        | extra
    )


def _folder(pack_id: str = "test.starter", **extra) -> dict[str, str]:
    return {"pack.json": _pack_json(pack_id, **extra), "cube_chair.json": json.dumps(CHAIR)}


async def _client(hass: HomeAssistant, hass_ws_client, token: str | None = None):
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done(wait_background_tasks=True)
    return await hass_ws_client(hass, token) if token else await hass_ws_client(hass)


async def _send(client, **msg) -> dict:
    await client.send_json_auto_id(msg)
    return await client.receive_json()


# ---------------------------------------------------------------------------- the limits


def test_a_folder_must_fit_in_one_message_as_sent() -> None:
    """Within the character limit, but more bytes as sent than one message takes (non-ASCII text)."""
    files = {"pack.json": _pack_json(), **{f"f{n}.json": "ü" * 40_000 for n in range(50)}}
    assert sum(len(t) for t in files.values()) <= packs.MAX_FOLDER_SIZE
    with pytest.raises(packs.PackError) as err:
        packs.verify_folder(files)
    assert err.value.code == "too_large" and "bytes as sent" in err.value.detail
    assert packs.MAX_FOLDER_BYTES < packs.MAX_MESSAGE_BYTES


def test_every_bundled_pack_fits_in_one_message() -> None:
    for root in (packs.BUNDLED_DIR, packs.BUNDLED_LANGUAGES_DIR):
        for folder in root.iterdir():
            if (folder / packs.PACK_FILE).is_file():
                files = packs.read_folder(folder)
                kept = {path: files[path] for path in packs.data_paths(list(files))}
                assert packs.folder_bytes(kept) <= packs.MAX_FOLDER_BYTES, folder.name


async def test_github_refuses_a_folder_larger_than_a_folder_import_takes(
    hass: HomeAssistant, hass_ws_client, aioclient_mock: AiohttpClientMocker
) -> None:
    """The file list's sizes are checked against the same byte limit before anything is downloaded."""
    api = "https://api.github.com/repos/someone/packs"
    aioclient_mock.get(api, json={"default_branch": "main"})
    aioclient_mock.get(f"{api}/commits/main", json={"sha": "a" * 40, "commit": {"tree": {"sha": "b" * 40}}})
    tree = [{"path": "pack.json", "type": "blob", "size": 200}]
    tree += [{"path": f"i{n}.json", "type": "blob", "size": 49_000} for n in range(80)]
    aioclient_mock.get(f"{api}/git/trees/{'b' * 40}", json={"tree": tree, "truncated": False})
    client = await _client(hass, hass_ws_client)
    result = await _send(client, type="home_3d/packs/install_url", url="https://github.com/someone/packs")
    assert result["error"]["code"] == "too_large" and str(packs.MAX_FOLDER_BYTES) in result["error"]["message"]
    assert not any("raw.githubusercontent.com" in str(url) for _m, url, _d, _h in aioclient_mock.mock_calls)


# ---------------------------------------------------------------------------- packs sent ahead


def test_staged_packs_are_taken_once_and_expire(monkeypatch: pytest.MonkeyPatch) -> None:
    staged = backup_restore.StagedPacks()
    token = staged.add(None, [{"id": "a"}])
    assert token is not None and staged.add(token, [{"id": "b"}]) == token
    assert staged.take(token) == [{"id": "a"}, {"id": "b"}]
    assert staged.take(token) is None
    assert staged.add("unknown", [{"id": "a"}]) is None

    now = [1000.0]
    monkeypatch.setattr(backup_restore.time, "monotonic", lambda: now[0])
    old = staged.add(None, [{"id": "a"}])
    now[0] += backup_restore.STAGE_SECONDS + 1
    assert old is not None and staged.take(old) is None
    # too many packs for one backup
    big = staged.add(None, [{"id": "x"}] * backup_restore.MAX_STAGED_PACKS)
    assert big is not None and staged.add(big, [{"id": "y"}]) is None


async def test_a_backup_restores_packs_sent_ahead_in_parts(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    first = {"id": "test.one", "source": {"files": _folder("test.one")}}
    second = {"id": "test.two", "source": {"files": _folder("test.two")}}
    token = (await _send(client, type="home_3d/backup/stage", packs=[first]))["result"]["token"]
    again = await _send(client, type="home_3d/backup/stage", packs=[second], token=token)
    assert again["result"]["token"] == token

    restore = await _send(client, type="home_3d/backup/import", building=BUILDING, staged=token)
    assert restore["success"], restore
    assert restore["result"]["packs"] == 2
    assert sorted(p["id"] for p in hass.data[DOMAIN].packs) == ["test.one", "test.two"]
    # a token is taken by the import that names it
    gone = await _send(client, type="home_3d/backup/import", building=BUILDING, staged=token)
    assert gone["error"]["code"] == "staged_expired"


async def test_only_admins_send_packs_ahead(hass: HomeAssistant, hass_ws_client, hass_read_only_access_token) -> None:
    await _client(hass, hass_ws_client)
    viewer = await hass_ws_client(hass, hass_read_only_access_token)
    refused = await _send(viewer, type="home_3d/backup/stage", packs=[{"id": "a"}])
    assert not refused["success"]
