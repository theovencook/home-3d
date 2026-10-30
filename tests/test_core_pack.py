"""The packs that ship with Home 3D (the themed packs, #111): offline, schema-checked, one file per item."""

from __future__ import annotations

import json
from pathlib import Path

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.home_3d import packs
from custom_components.home_3d.const import DOMAIN

BUNDLED = Path(__file__).resolve().parent.parent / "custom_components" / "home_3d" / "bundled_packs"
CORE = BUNDLED / "theovencook.living"
KITCHEN_BATH = BUNDLED / "theovencook.kitchen-bath"


async def _client(hass: HomeAssistant, hass_ws_client):
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return await hass_ws_client(hass)


async def _listed(client) -> list[dict]:
    await client.send_json_auto_id({"type": "home_3d/packs/list"})
    return (await client.receive_json())["result"]["packs"]


async def test_a_fresh_install_has_the_core_pack(hass: HomeAssistant, hass_ws_client) -> None:
    """Nothing imported, no network (the test harness blocks sockets): the core pack is there from the disk."""
    client = await _client(hass, hass_ws_client)
    listed = await _listed(client)
    core = next(p for p in listed if p["id"] == "theovencook.living")
    assert core["bundled"] is True
    assert core["licence"] == "MIT"
    assert core["publisher"] == "theovencook"
    assert len(core["items"]) >= 5
    # the files are not sent along: the frontend only needs the items
    assert "source" not in core


async def test_a_fresh_install_has_the_ikea_uk_pack_beside_the_core(hass: HomeAssistant, hass_ws_client) -> None:
    """The second bundled pack (#30) loads from the disk like the core: offline, MIT, every item with its IKEA name."""
    client = await _client(hass, hass_ws_client)
    listed = await _listed(client)
    ikea = next(p for p in listed if p["id"] == "theovencook.ikea-uk")
    assert ikea["bundled"] is True
    assert ikea["licence"] == "MIT"
    assert len(ikea["items"]) >= 40
    assert [i["id"] for i in ikea["items"] if not i.get("ikea")] == []
    assert "theovencook.living" in [p["id"] for p in listed]


def test_the_core_pack_is_retired_and_every_bundled_pack_is_under_the_item_limit() -> None:
    """The core pack was split into themed packs (#111): no folder is left and each pack stays within the limit."""
    assert not (BUNDLED / "theovencook.core").exists()
    names = {p.name for p in BUNDLED.iterdir() if p.is_dir()}
    assert {
        "theovencook.living",
        "theovencook.bedroom",
        "theovencook.kitchen-bath",
        "theovencook.office",
        "theovencook.it",
        "theovencook.decor",
        "theovencook.outdoor",
        "theovencook.household",
        "theovencook.devices",
        "theovencook.makers",
        "theovencook.ikea-uk",
    } == names
    for folder in BUNDLED.iterdir():
        count = len([f for f in folder.rglob("*.json") if f.name != packs.PACK_FILE])
        assert 1 <= count <= packs.MAX_ITEMS, folder.name


def _bundled_folders() -> list[Path]:
    return sorted(p for p in BUNDLED.iterdir() if (p / packs.PACK_FILE).is_file())


def _item_files() -> list[Path]:
    return sorted(f for folder in _bundled_folders() for f in folder.rglob("*.json") if f.name != packs.PACK_FILE)


@pytest.mark.parametrize("folder", _bundled_folders(), ids=lambda p: p.name)
def test_every_bundled_pack_checks_like_an_imported_one(folder: Path) -> None:
    """The whole folder against the schema and the limits of an import (ids, file names, links, sizes)."""
    pack = packs.verify_folder(packs.read_folder(folder))
    assert pack["id"] == folder.name
    assert pack["licence"] == "MIT"


@pytest.mark.parametrize("path", _item_files(), ids=lambda p: p.relative_to(BUNDLED).as_posix())
def test_every_bundled_item_checks_and_sits_in_its_category_folder(path: Path) -> None:
    """One file per item, in the folder of its library category: <pack>/<group>/<item id>.json."""
    item = packs.ITEM_SCHEMA(json.loads(path.read_text(encoding="utf-8")))
    category = path.relative_to(BUNDLED).parts[1]
    assert len(path.relative_to(BUNDLED).parts) == 3, "items sit directly in a category folder"
    assert item["id"] == path.stem
    assert item.get("group") == category, f'"group" must be the folder name "{category}"'
    assert item["name"].get("en"), "every item has an English name"


def test_core_appliances_can_be_linked_to_a_switch_and_a_power_sensor() -> None:
    """Every appliance in the kitchen-bath pack draws power, so each one is marked electric."""
    files = sorted((KITCHEN_BATH / "appliance").glob("*.json"))
    appliances = [json.loads(f.read_text(encoding="utf-8")) for f in files]
    assert appliances, "the kitchen-bath pack has appliances"
    assert [a["id"] for a in appliances if not a.get("electric")] == []


def _core_files(release: int) -> dict[str, str]:
    files = packs.read_folder(CORE)
    meta = json.loads(files["pack.json"])
    files["pack.json"] = json.dumps({**meta, "release": release, "name": f"Core release {release}"})
    return files


async def test_the_bundled_pack_cannot_be_removed(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    await client.send_json_auto_id({"type": "home_3d/packs/remove", "pack_id": "theovencook.living"})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "bundled"
    assert "theovencook.living" in [p["id"] for p in await _listed(client)]


async def test_a_newer_imported_copy_replaces_the_bundled_one_until_removed(
    hass: HomeAssistant, hass_ws_client
) -> None:
    """A newer release installed from the packs repository wins; removing it brings the bundled one back."""
    client = await _client(hass, hass_ws_client)
    await client.send_json_auto_id({"type": "home_3d/packs/import", "files": _core_files(99)})
    assert (await client.receive_json())["success"]
    cores = [p for p in await _listed(client) if p["id"] == "theovencook.living"]
    assert [(p["name"], p.get("bundled", False)) for p in cores] == [("Core release 99", False)]

    await client.send_json_auto_id({"type": "home_3d/packs/remove", "pack_id": "theovencook.living"})
    assert (await client.receive_json())["success"]
    cores = [p for p in await _listed(client) if p["id"] == "theovencook.living"]
    assert [p["bundled"] for p in cores] == [True]


async def test_an_older_imported_copy_does_not_hide_the_bundled_one(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    bundled_release = json.loads((CORE / "pack.json").read_text(encoding="utf-8"))["release"]
    data = hass.data[DOMAIN]
    data.bundled = [{**p, "release": bundled_release + 1} for p in data.bundled]
    await client.send_json_auto_id({"type": "home_3d/packs/import", "files": _core_files(bundled_release)})
    assert (await client.receive_json())["success"]
    cores = [p for p in await _listed(client) if p["id"] == "theovencook.living"]
    assert [p.get("bundled", False) for p in cores] == [True]


async def test_a_fresh_install_has_the_makers_and_devices_packs(hass: HomeAssistant, hass_ws_client) -> None:
    """The themed packs (#109) load from the disk like the core: offline, MIT, with items, under the item limit."""
    client = await _client(hass, hass_ws_client)
    listed = await _listed(client)
    for pack_id, name in (("theovencook.makers", "Makers"), ("theovencook.devices", "Smart-home devices")):
        found = next(p for p in listed if p["id"] == pack_id)
        assert found["bundled"] is True
        assert found["name"] == name
        assert found["licence"] == "MIT"
        assert 1 <= len(found["items"]) <= packs.MAX_ITEMS
    assert "theovencook.living" in [p["id"] for p in listed]


def test_every_printer_in_the_makers_pack_gets_the_live_printer_state() -> None:
    """The progress ring, chamber light and camera (#11) are found by the item id and `electric`; a makers printer
    needs both and a glowing chamber light part."""
    printers = [
        json.loads(path.read_text(encoding="utf-8"))
        for path in sorted((BUNDLED / "theovencook.makers").glob("*/*.json"))
        if "3d_printer" in path.stem
    ]
    assert printers, "the makers pack has a printer"
    for item in printers:
        assert item["electric"] is True, item["id"]
        if not item["id"].endswith("_mini"):  # the open-frame mini has no chamber to light
            assert any(part.get("glow") for part in item["parts"]), item["id"]
