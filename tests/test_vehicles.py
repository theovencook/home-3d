"""The vehicles catalogue (#129): ~200 cars for 20 brands plus bikes, snowmobiles, golf carts and the like."""

from __future__ import annotations

import importlib.util
import json
from pathlib import Path

from custom_components.home_3d import packs

ROOT = Path(__file__).resolve().parent.parent
VEHICLES = ROOT / "custom_components" / "home_3d" / "bundled_packs" / "theovencook.outdoor" / "vehicle"
DOC = ROOT / "docs" / "vehicles.md"


def _items() -> dict[str, dict]:
    return {f.stem: json.loads(f.read_text(encoding="utf-8")) for f in sorted(VEHICLES.glob("*.json"))}


def _data():
    spec = importlib.util.spec_from_file_location("vehicles_data", ROOT / "tools" / "vehicles_data.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def _car_ids() -> dict[str, tuple]:
    data = _data()
    return {data.car_id(b, m[0]): (b, *m) for b, _name, _site, models in data.BRANDS for m in models}


def test_the_pack_has_about_two_hundred_cars_from_twenty_brands() -> None:
    data = _data()
    assert len(data.BRANDS) == 20
    ids = _car_ids()
    assert 190 <= len(ids) <= 210
    assert len(set(ids)) == sum(len(m) for *_x, m in data.BRANDS), "no two cars share an id"
    items = _items()
    assert not [i for i in ids if i not in items]
    for brand, _name, _site, models in data.BRANDS:
        assert 7 <= len(models) <= 10, brand


def test_every_car_is_a_vehicle_for_parking_spots_painted_in_the_paint_role() -> None:
    items = _items()
    for i in _car_ids():
        item = items[i]
        assert item["vehicle"] is True, i
        assert any(p["color"] == "paint" for p in item["parts"]), i
        assert len(item["parts"]) <= 40, i
        assert 3.4 <= item["size"][1] <= 6.0 and 1.5 <= item["size"][0] <= 2.2 and 1.2 <= item["size"][2] <= 2.0, i
        packs.ITEM_SCHEMA(item)


def test_a_car_has_the_real_outer_size_and_the_checklist_lists_it() -> None:
    puma = _items()["ford_puma"]
    assert puma["size"] == [1.805, 4.186, 1.537]
    doc = DOC.read_text(encoding="utf-8")
    assert "Ford Puma" in doc and "4186" in doc
    items = _items()
    for i in _car_ids():
        assert items[i]["name"]["en"] in doc, i


def test_the_other_vehicles_are_there_and_use_the_paint_role() -> None:
    items = _items()
    kinds = {
        "snowmobile": 3,
        "bicycle": 8,
        "motorbike": 5,
        "golf_cart": 3,
        "scooter": 4,
        "quad": 1,
        "mobility_scooter": 1,
    }
    for prefix, least in kinds.items():
        found = [i for i in items if i.startswith(prefix)]
        assert len(found) >= least, (prefix, found)
    for i in items:
        if i.startswith(("snowmobile", "golf_cart", "mobility_scooter", "quad")):
            assert any(p["color"] == "paint" for p in items[i]["parts"]), i


def test_the_existing_vehicles_are_untouched() -> None:
    items = _items()
    for i in (
        "nissan_leaf",
        "nissan_leaf_black",
        "bicycle",
        "bicycle_child",
        "bicycle_electric",
        "moped_red",
        "scooter_kick_adult",
    ):
        assert i in items
    assert items["nissan_leaf"]["electric"] is True


def test_the_pack_stays_under_the_item_limit_with_room_to_spare() -> None:
    folder = ROOT / "custom_components" / "home_3d" / "bundled_packs" / "theovencook.outdoor"
    count = len([f for f in folder.rglob("*.json") if f.name != packs.PACK_FILE])
    assert count <= 600 < packs.MAX_ITEMS
