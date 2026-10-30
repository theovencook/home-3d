"""Rack contents (#113): rack-mount gear (pack items with a `rack` spec) in whole-U slots of a placed rack, saved on it
as `rack.slots`. The backend checks the slots' shape on every save and refuses an editor's save that puts gear where
it does not fit (overlaps, outside the rack, not gear, the wrong rack width); the gear's recipes are copied into the
plan like any placed item's (#2)."""

from __future__ import annotations

import copy
import json

from homeassistant.core import HomeAssistant
import pytest
import voluptuous as vol

from custom_components.home_3d import packs, racks
from custom_components.home_3d.schema import BUILDING_SCHEMA
from tests.test_recipes import _building, _call, _client, _furniture

PACK_JSON = {
    "format": "home3d-pack",
    "version": 2,
    "id": "test.gear",
    "name": "Gear",
    "publisher": "Test",
    "licence": "MIT",
}
SWITCH = {
    "id": "switch_1u",
    "name": {"en": "Switch 1U"},
    "size": [0.4826, 0.25, 0.0437],
    "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "dark"}],
    "rack": {"u": 1},
}

RACK = "pack:theovencook.it:rack_wall_cabinet_9u"
SWITCH_24 = "pack:theovencook.it:rack_switch_24_1u"
PATCH_24 = "pack:theovencook.it:rack_patch_panel_24_1u"
BLANK = "pack:theovencook.it:rack_blank_1u"


def _verified(item: dict) -> dict:
    files = {"pack.json": json.dumps(PACK_JSON), f"{item['id']}.json": json.dumps(item)}
    return packs.verify_folder(files)["items"][0]


def _rack(*slots: dict, **extra) -> dict:
    return _furniture("rack", RACK, w=0.6, d=0.45, h=0.5, rack={"slots": list(slots)}, **extra)


def _slot(slot_id: str, type_: str, u: int, **extra) -> dict:
    return {"id": slot_id, "type": type_, "u": u, **extra}


# ------------------------------------------------------------------------------------------------ the gear spec


def test_a_gear_spec_is_kept_as_written() -> None:
    assert _verified(SWITCH)["rack"] == {"u": 1}
    full = {"u": 2, "width": "half", "depth": "full", "inch": 10}
    assert _verified({**SWITCH, "rack": full})["rack"] == full


@pytest.mark.parametrize(
    "rack",
    [
        {"u": 1.5},
        {"u": 61},
        {"u": -1},
        {"u": True},
        {"u": 1, "width": "quarter"},
        {"u": 1, "depth": "deep"},
        {"u": 1, "inch": 23},
        {"u": 1, "colour": "red"},
        {},
    ],
)
def test_a_gear_spec_that_breaks_the_rules_is_refused(rack: dict) -> None:
    with pytest.raises(packs.PackError):
        _verified({**SWITCH, "rack": rack})


def test_the_starter_gear_is_bundled() -> None:
    """Three starter devices in the IT & network pack: a 1U 24-port switch, a 1U 24-port patch panel, a 1U blank."""
    pack = next(p for p in packs.load_bundled() if p["id"] == "theovencook.it")
    items = {i["id"]: i for i in pack["items"]}
    for item_id in ("rack_switch_24_1u", "rack_patch_panel_24_1u", "rack_blank_1u"):
        assert items[item_id]["rack"]["u"] == 1, item_id
        assert items[item_id]["size"][0] == pytest.approx(0.4826)


def test_the_114_starters_are_bundled() -> None:
    """A half-width switch, a 0U vertical PDU and a 2U shelf to try the #114 rules with."""
    pack = next(p for p in packs.load_bundled() if p["id"] == "theovencook.it")
    items = {i["id"]: i for i in pack["items"]}
    assert items["rack_switch_8_half_1u"]["rack"] == {"u": 1, "width": "half"}
    assert items["rack_pdu_vertical_0u"]["rack"] == {"u": 0}
    assert items["rack_shelf_2u"]["rack"] == {"u": 2, "shelf": True}
    assert items["rack_switch_8_half_1u"]["watts"] == 10


# ------------------------------------------------------------------------------------------------ the slots' shape


def test_a_rack_keeps_its_slots_through_the_schema() -> None:
    building = BUILDING_SCHEMA(_building(_rack(_slot("s1", SWITCH_24, 1, name="Core switch"))))
    assert building["floors"][0]["furniture"][0]["rack"]["slots"] == [
        {"id": "s1", "type": SWITCH_24, "u": 1, "name": "Core switch"}
    ]


@pytest.mark.parametrize(
    "slots",
    [
        [_slot("s1", SWITCH_24, 0)],
        [_slot("s1", SWITCH_24, 1.5)],
        [_slot("s1", SWITCH_24, 61)],
        [_slot("s 1", SWITCH_24, 1)],
        [_slot("s1", "", 1)],
        [_slot("s1", SWITCH_24, 1), _slot("s1", BLANK, 2)],
        [_slot(f"s{i}", BLANK, 1) for i in range(racks.RACK_MAX_SLOTS + 1)],
    ],
)
def test_slots_of_the_wrong_shape_are_refused(slots: list[dict]) -> None:
    with pytest.raises(vol.Invalid):
        BUILDING_SCHEMA(_building(_rack(*slots)))


# ------------------------------------------------------------------------------------------------ the placement rules

_GEAR = {
    "sw": {"rack": {"u": 1}, "size": [0.48, 0.25, 0.04]},
    "ups": {"rack": {"u": 2, "depth": "full"}, "size": [0.48, 0.38, 0.088]},
    "mini": {"rack": {"u": 1, "inch": 10}, "size": [0.25, 0.1, 0.04]},
    "sofa": {"size": [2, 1, 0.8]},
}
_FRAME = {"rack_frame": {"u": 9, "form": "wall_cabinet"}, "size": [0.6, 0.45, 0.5]}


def _plan(*slots: dict) -> dict:
    recipes = {f"pack:t:{k}": {"recipe": v} for k, v in _GEAR.items()}
    recipes["pack:t:rack"] = {"recipe": _FRAME}
    item = {
        "id": "rack",
        "type": "pack:t:rack",
        "rack": {"slots": [{**s, "type": f"pack:t:{s['type']}"} for s in slots]},
    }
    return {"floors": [{"furniture": [item]}], "recipes": recipes}


def test_gear_that_fits_has_no_problems() -> None:
    assert racks.rack_problems(_plan(_slot("a", "sw", 1), _slot("b", "ups", 2), _slot("c", "sw", 9))) == set()


@pytest.mark.parametrize(
    ("slots", "why"),
    [
        ([_slot("a", "ups", 3), _slot("b", "sw", 4)], "overlap"),
        ([_slot("a", "ups", 9)], "outside"),
        ([_slot("a", "mini", 1)], "wrong_width"),
        ([_slot("a", "sofa", 1)], "not_gear"),
    ],
)
def test_gear_that_does_not_fit_is_a_problem(slots: list[dict], why: str) -> None:
    assert why in {p[2] for p in racks.rack_problems(_plan(*slots))}


def test_gear_whose_recipe_is_gone_is_not_checked() -> None:
    """A pack removed without a copy kept: the slot stays as it was (it shows nothing)."""
    plan = _plan(_slot("a", "sw", 1))
    plan["floors"][0]["furniture"][0]["rack"]["slots"].append({"id": "b", "type": "pack:t:gone", "u": 1})
    assert racks.rack_problems(plan) == set()


# ------------------------------------------------------------------------------------------------ #114: columns, faces,
# the 0U lane, shelves (the rules of frontend/src/rack.ts)

_GEAR.update(
    {
        "half": {"rack": {"u": 1, "width": "half"}, "size": [0.22, 0.2, 0.04]},
        "third": {"rack": {"u": 1, "width": "third"}, "size": [0.15, 0.2, 0.04]},
        "pdu": {"rack": {"u": 0}, "size": [0.05, 0.05, 0.35]},
        "shelf": {"rack": {"u": 2, "shelf": True}, "size": [0.4826, 0.3, 0.004]},
        "hub": {"size": [0.09, 0.09, 0.026]},
        "pc": {"size": [0.18, 0.18, 0.035]},
        "nas": {"size": [0.2, 0.22, 0.166]},
    }
)


def _problems(*slots: dict, frame: dict | None = None) -> set[tuple[str, str]]:
    plan = _plan(*slots)
    if frame is not None:
        plan["recipes"]["pack:t:rack"] = {"recipe": frame}
    return {(slot, why) for _, slot, why in racks.rack_problems(plan)}


def test_half_and_third_width_gear_shares_a_u_by_columns() -> None:
    assert _problems(_slot("a", "half", 3, col=0), _slot("b", "half", 3, col=1)) == set()
    assert _problems(_slot("a", "half", 3, col=0), _slot("b", "half", 3, col=0)) == {("a", "overlap"), ("b", "overlap")}
    assert ("c", "overlap") in _problems(_slot("a", "half", 3, col=1), _slot("c", "sw", 3))
    assert _problems(_slot("a", "half", 3, col=0), _slot("t", "third", 3, col=2)) == set()
    assert ("t", "overlap") in _problems(_slot("a", "half", 3, col=0), _slot("t", "third", 3, col=1))
    assert _problems(_slot("a", "half", 1, col=2)) == {("a", "outside")}
    assert _problems(_slot("a", "sw", 1, col=1)) == {("a", "outside")}


def test_front_and_rear_faces_are_two_places_and_full_depth_gear_blocks_both() -> None:
    assert _problems(_slot("a", "sw", 2), _slot("b", "sw", 2, face="rear")) == set()
    assert ("b", "overlap") in _problems(_slot("a", "ups", 2), _slot("b", "sw", 3, face="rear"))
    two_post = {"rack_frame": {"u": 9, "form": "frame2"}, "size": [0.52, 0.3, 0.5]}
    assert _problems(_slot("b", "sw", 2, face="rear"), frame=two_post) == {("b", "no_rear")}


def test_0u_gear_stands_in_a_side_lane() -> None:
    # 350 mm: U1-U8, beside the gear
    assert _problems(_slot("p", "pdu", 1), _slot("s", "sw", 1), _slot("u", "ups", 3)) == set()
    assert _problems(_slot("p", "pdu", 3)) == {("p", "outside")}
    assert _problems(_slot("p", "pdu", 1, col=2)) == {("p", "outside")}
    assert ("q", "overlap") in _problems(_slot("p", "pdu", 1), _slot("q", "pdu", 2))
    assert _problems(_slot("p", "pdu", 1), _slot("q", "pdu", 2, col=1)) == set()
    assert _problems(_slot("p", "pdu", 1), _slot("q", "pdu", 2, face="rear")) == set()


def test_a_shelf_carries_loose_gear() -> None:
    shelf = _slot("sh", "shelf", 2)
    on = {"on": "sh"}
    assert _problems(shelf, _slot("h", "hub", 2, **on), _slot("m", "pc", 2, **on), _slot("n", "pc", 2, **on)) == set()
    # loose gear is not in the way of rack gear (the shelf is)
    assert _problems(shelf, _slot("h", "hub", 2, **on), _slot("x", "sw", 3)) == {("x", "overlap"), ("sh", "overlap")}
    full = _problems(
        shelf,
        *(_slot(f"m{i}", "pc", 2, **on) for i in range(2)),
        _slot("h", "hub", 2, **on),
        _slot("i", "hub", 2, **on),
    )
    assert ("i", "shelf_full") in full
    assert _problems(shelf, _slot("n", "nas", 2, **on)) == {("n", "too_tall")}
    assert _problems(shelf, _slot("h", "hub", 2, on="nope")) == {("h", "no_shelf")}
    assert _problems(_slot("s", "sw", 2), _slot("h", "hub", 2, on="s")) == {("h", "no_shelf")}
    assert _problems(shelf, _slot("r", "rack", 2, **on)) == {("r", "not_loose")}


def test_a_shelf_is_gear_of_at_least_1u() -> None:
    assert _verified({**SWITCH, "rack": {"u": 1, "shelf": True}})["rack"] == {"u": 1, "shelf": True}
    for bad in ({"u": 0, "shelf": True}, {"u": 1, "shelf": "yes"}):
        with pytest.raises(packs.PackError):
            _verified({**SWITCH, "rack": bad})


def test_an_item_may_give_its_estimated_watts() -> None:
    assert _verified({**SWITCH, "watts": 18})["watts"] == 18
    for bad in (-1, 100001, "20", True):
        with pytest.raises(packs.PackError):
            _verified({**SWITCH, "watts": bad})


def test_changing_the_rack_frame_keeps_the_gear_and_saves_with_what_no_longer_fits() -> None:
    """A smaller rack (another type, or resized) may leave gear outside it: the editor warns, the save goes through."""
    before = _plan(_slot("a", "sw", 8))
    after = copy.deepcopy(before)
    after["recipes"]["pack:t:small"] = {
        "recipe": {"rack_frame": {"u": 6, "form": "wall_cabinet"}, "size": [0.6, 0.45, 0.4]}
    }
    after["floors"][0]["furniture"][0]["type"] = "pack:t:small"
    assert {p[2] for p in racks.rack_problems(after)} == {"outside"}
    assert racks.new_rack_problems(before, after) == set()
    # gear added later is checked again
    later = copy.deepcopy(after)
    later["floors"][0]["furniture"][0]["rack"]["slots"].append({"id": "b", "type": "pack:t:sw", "u": 7})
    assert {p[1] for p in racks.new_rack_problems(after, later)} == {"b"}


def test_only_new_problems_count() -> None:
    """A rack that broke the rules before (a pack update made a box taller) still saves while that stays as it was."""
    old = _plan(_slot("a", "ups", 3), _slot("b", "sw", 4))
    assert racks.new_rack_problems(old, copy.deepcopy(old)) == set()
    worse = _plan(_slot("a", "ups", 3), _slot("b", "sw", 4), _slot("c", "sw", 3))
    assert {p[1] for p in racks.new_rack_problems(old, worse)} == {"c"}


# ------------------------------------------------------------------------------------------------ saving


async def test_a_racks_gear_is_saved_and_its_recipes_are_copied_into_the_plan(
    hass: HomeAssistant, hass_ws_client
) -> None:
    client = await _client(hass, hass_ws_client)
    slots = [_slot("s1", SWITCH_24, 1), _slot("s2", PATCH_24, 2), _slot("s3", BLANK, 3)]
    await _call(client, type="home_3d/building/save", building=_building(_rack(*slots)))
    plan = (await _call(client, type="home_3d/building/get"))["building"]
    assert plan["floors"][0]["furniture"][0]["rack"]["slots"] == slots
    assert set(plan["recipes"]) == {RACK, SWITCH_24, PATCH_24, BLANK}
    assert plan["recipes"][SWITCH_24]["recipe"]["rack"]["u"] == 1


async def test_a_save_that_overlaps_gear_is_refused(hass: HomeAssistant, hass_ws_client) -> None:
    client = await _client(hass, hass_ws_client)
    await _call(client, type="home_3d/building/save", building=_building(_rack(_slot("s1", SWITCH_24, 1))))
    bad = _building(_rack(_slot("s1", SWITCH_24, 1), _slot("s2", BLANK, 1)))
    await client.send_json_auto_id({"type": "home_3d/building/save", "building": bad})
    result = await client.receive_json()
    assert not result["success"]
    assert result["error"]["code"] == "invalid_rack"
    plan = (await _call(client, type="home_3d/building/get"))["building"]
    assert len(plan["floors"][0]["furniture"][0]["rack"]["slots"]) == 1, "the plan stays as it was"


async def test_someone_not_on_the_editors_list_cannot_change_a_racks_gear(
    hass: HomeAssistant, hass_ws_client, hass_read_only_access_token
) -> None:
    client = await _client(hass, hass_ws_client)
    await _call(client, type="home_3d/building/save", building=_building(_rack(_slot("s1", SWITCH_24, 1))))
    viewer = await hass_ws_client(hass, hass_read_only_access_token)
    moved = _building(_rack(_slot("s1", SWITCH_24, 5)))
    await viewer.send_json_auto_id({"type": "home_3d/building/save", "building": moved})
    result = await viewer.receive_json()
    assert result["error"]["code"] == "unauthorized"
    plan = (await _call(client, type="home_3d/building/get"))["building"]
    assert plan["floors"][0]["furniture"][0]["rack"]["slots"][0]["u"] == 1
