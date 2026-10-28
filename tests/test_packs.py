"""Furniture packs: content check and import through the websocket (packs are not signed)."""

from __future__ import annotations

import copy
import json
from types import SimpleNamespace

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry
import voluptuous as vol

from custom_components.neonplan3d import packs
from custom_components.neonplan3d.const import DOMAIN

PAYLOAD = {
    "format": "fp3dpack",
    "version": 1,
    "id": "test.starter",
    "name": "Starter",
    "publisher": "Test",
    "items": [
        {
            "id": "cube_chair",
            "name": {"de": "Würfelsessel", "en": "Cube chair"},
            "size": [0.8, 0.8, 0.75],
            "parts": [
                {"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"},
                {"shape": "box", "x": 0, "z": -0.4, "w": 1, "d": 0.2, "y": 0.55, "h": 0.45, "color": "#223355"},
            ],
        }
    ],
}


def _pack(payload: dict) -> str:
    return json.dumps({"payload": payload})


def test_unsigned_pack_is_accepted() -> None:
    payload = packs.verify_pack(_pack(PAYLOAD))
    assert payload["items"][0]["parts"][0]["edges"] is False
    assert payload["licensee"] is None


def test_bare_payload_and_old_signed_files_are_accepted() -> None:
    """A pack file may be the payload itself; a signature block of an older file is ignored."""
    assert packs.verify_pack(json.dumps(PAYLOAD))["id"] == "test.starter"
    old = json.dumps({"payload": PAYLOAD, "signature": {"key": "0" * 12, "sig": "not checked"}})
    assert packs.verify_pack(old)["id"] == "test.starter"
    # an installation binding of an older file is ignored as well
    assert packs.verify_pack(_pack({**PAYLOAD, "instance": "0123456789abcdef"}))["id"] == "test.starter"
    assert packs.parts_of(old) == PAYLOAD


def test_non_packs_are_rejected() -> None:
    for text in ("{}", "[]", json.dumps({"payload": {**PAYLOAD, "format": "other"}})):
        with pytest.raises(packs.PackError) as err:
            packs.verify_pack(text)
        assert err.value.code == "not_a_pack"
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack("not json")
    assert err.value.code == "not_a_pack"


def test_module_packs_are_refused() -> None:
    """Module code (JavaScript in a pack) is not supported: such a pack does not validate."""
    module = {**PAYLOAD, "items": [], "module": {"api": 1, "kind": "voice", "code": "export default {};"}}
    with pytest.raises(packs.PackError):
        packs.verify_pack(_pack(module))


def test_sloped_and_lying_parts_are_accepted() -> None:
    shaped = copy.deepcopy(PAYLOAD)
    box = {"x": 0, "z": 0.2, "w": 1, "d": 0.6, "y": 0, "h": 0.5, "color": "body"}
    shaped["items"][0]["parts"] = [
        {"shape": "loft", **box, "tx": 0, "tz": 0.1, "tw": 0.9, "td": 0.2, "edges": "glow"},
        {"shape": "cyl", "axis": "x", **box, "edges": "faint"},
    ]
    payload = packs.verify_pack(_pack(shaped))
    assert payload["items"][0]["parts"][0]["edges"] == "glow"
    assert payload["items"][0]["parts"][1]["axis"] == "x"
    bad = copy.deepcopy(shaped)
    bad["items"][0]["parts"][1]["axis"] = "w"
    with pytest.raises(packs.PackError):
        packs.verify_pack(_pack(bad))


def test_pack_content_is_checked() -> None:
    heavy = copy.deepcopy(PAYLOAD)
    heavy["items"][0]["parts"] *= 31  # more than 60 parts
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(_pack(heavy))
    assert err.value.code == "invalid_content"
    twice = copy.deepcopy(PAYLOAD)
    twice["items"].append(copy.deepcopy(twice["items"][0]))
    with pytest.raises(packs.PackError):
        packs.verify_pack(_pack(twice))


async def test_import_list_and_remove(hass: HomeAssistant, hass_ws_client) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    client = await hass_ws_client(hass)

    await client.send_json_auto_id(
        {"type": "neonplan3d/packs/import", "pack": _pack({**PAYLOAD, "licensee": "Anna"})}
    )
    result = await client.receive_json()
    assert result["success"]
    assert result["result"] == {
        "id": "test.starter",
        "name": "Starter",
        "publisher": "Test",
        "licensee": "Anna",
        "items": 1,
    }

    await client.send_json_auto_id({"type": "neonplan3d/packs/import", "pack": "{}"})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "not_a_pack"

    await client.send_json_auto_id({"type": "neonplan3d/packs/list"})
    listed = (await client.receive_json())["result"]["packs"]
    assert [p["id"] for p in listed] == ["test.starter"]
    assert listed[0]["items"][0]["name"]["de"] == "Würfelsessel"

    await client.send_json_auto_id({"type": "neonplan3d/packs/remove", "pack_id": "test.starter"})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/packs/list"})
    assert (await client.receive_json())["result"]["packs"] == []


def test_turned_parts_and_stairs_holes_are_accepted() -> None:
    """A part may turn around its centre (rot) and a stairs item may cut the floor above (hole)."""
    item = copy.deepcopy(PAYLOAD["items"][0])
    item["hole"] = True
    item["parts"][0]["rot"] = 27.5
    clean = packs.validate_payload({**PAYLOAD, "items": [item]})
    assert clean["items"][0]["hole"] is True
    assert clean["items"][0]["parts"][0]["rot"] == 27.5
    with pytest.raises(packs.PackError):
        item["parts"][0]["rot"] = 400
        packs.validate_payload({**PAYLOAD, "items": [item]})


def test_library_fields_are_accepted_and_checked() -> None:
    """A pack may say what an item is, which rooms it is for and which variants belong together (1.23)."""
    library = {"group": "seating", "room": ["living", "kids"], "tags": ["cube", "kids"], "family": "cube_chair"}
    item = {**PAYLOAD["items"][0], **library, "variant": {"de": "80", "en": "80"}}
    clean = packs.validate_payload({**PAYLOAD, "items": [item]})
    assert clean["items"][0]["group"] == "seating"
    assert clean["items"][0]["room"] == ["living", "kids"]
    assert clean["items"][0]["variant"] == {"de": "80", "en": "80"}
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": [{**item, "room": "living"}]})
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": [{**item, "group": "Not An Id"}]})


def test_feature_packs_need_no_items_but_a_pack_needs_something() -> None:
    """A pack may list features without furniture (compatibility); an empty pack is refused."""
    pro = {**PAYLOAD, "id": "test.pro", "items": [], "features": ["camera_cockpit", "weather"]}
    assert packs.validate_payload(pro)["features"] == ["camera_cockpit", "weather"]
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": []})
    # a feature this version does not know asks for an update (#218)
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**pro, "features": ["some_future_addon"]})
    assert err.value.code == "needs_update"
    assert err.value.detail == "some_future_addon"


def test_a_newer_part_shape_asks_for_an_update() -> None:
    """An unknown value of a newer pack asks for an update (voluptuous and Probatio); other faults stay errors."""
    item = copy.deepcopy(PAYLOAD["items"][0])
    item["parts"][0]["shape"] = "some_future_shape"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**PAYLOAD, "items": [item]})
    assert err.value.code == "needs_update"
    item["parts"][0]["shape"] = "box"
    item["parts"][0]["w"] = "wide"
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload({**PAYLOAD, "items": [item]})
    assert err.value.code == "invalid_content"


def test_probatio_marks_an_unknown_value_by_its_code() -> None:
    """Probatio (Home Assistant 2026.9+) words its errors its own way but gives the code "not_in_list"."""
    probatio = SimpleNamespace(errors=[SimpleNamespace(code="not_in_list")])
    assert packs._unknown_value(probatio)  # type: ignore[arg-type]
    assert not packs._unknown_value(vol.MultipleInvalid([vol.Invalid("expected float")]))
