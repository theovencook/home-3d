"""Rack contents (#113): the gear in a placed rack, kept on the rack item as `rack: {"slots": [...]}`.

A rack is a pack item with a `rack_frame` spec, gear a pack item with a `rack` spec (packs.py). A slot names its gear's
pack item type and its lowest rail position counted from the bottom (`u`, 1 = the lowest U, whatever the rack's
numbering). The schema checks the slots' shape on every save; `new_rack_problems` is what an editor's save is refused
for: gear that overlaps other gear, sticks out of the rack, is no gear or is made for the other rack width. The rules
are frontend/src/rack.ts's (the depth check stays in the editor: it only changes how the gear looks). They read the
plan's recipe copies, so they hold for whatever the plan shows; gear whose recipe is gone is not checked.

A slot may carry a column and a face (#114) and links to Home Assistant (#119: `entity`, its status entity, and
`links`, further entities of the device; frontend/src/rack-links.ts). The schema keeps unknown slot fields, like the
rest of the plan's schema. `card` (#120) holds the editor's pick of values for the rack card (rack-card.ts).
"""

from __future__ import annotations

from collections.abc import Iterator
import math
from typing import Any

import voluptuous as vol

# at most this many pieces of gear in one rack
RACK_MAX_SLOTS = 60
# at most this many further entities linked to one piece of gear (#119)
RACK_MAX_LINKS = 16
# at most this many values on a rack's card (#120, frontend rack-card.ts RACK_CARD_MAX)
RACK_CARD_MAX = 8
_MAX_U = 60

_SLOT_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))


_ENTITY_ID = vol.All(str, vol.Length(max=255), vol.Match(r"^[a-z0-9_]+\.[a-z0-9_]+$"))


def _unique(values: list[str]) -> list[str]:
    if len(set(values)) != len(values):
        raise vol.Invalid("each entity is linked once")
    return values


def _position(value: Any) -> int:
    """A whole rail position (not true or false, which Python counts as numbers)."""
    if isinstance(value, bool) or not isinstance(value, int):
        raise vol.Invalid("expected a whole number of U")
    return value


RACK_SLOT_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _SLOT_ID,
        # the gear's pack item type
        vol.Required("type"): vol.All(str, vol.Length(min=1, max=96)),
        # its lowest rail position, 1 = the lowest U
        vol.Required("u"): vol.All(_position, vol.Range(min=1, max=_MAX_U)),
        # its own name; None = the item's name
        vol.Optional("name"): vol.Any(None, vol.All(str, vol.Length(max=60))),
        # #114: its column (half / third width 0-1 / 0-2; 0U gear its side lane, 0 left, 1 right), its face, and
        # for loose gear the shelf slot it stands on (its `u` is then the shelf's)
        vol.Optional("col"): vol.All(_position, vol.Range(min=0, max=2)),
        vol.Optional("face"): vol.Any(None, vol.In(["front", "rear"])),
        vol.Optional("on"): vol.Any(None, _SLOT_ID),
        # #119: its status entity (its LED) and further entities of the same device
        vol.Optional("entity"): vol.Any(None, _ENTITY_ID),
        vol.Optional("links"): vol.Any(None, vol.All([_ENTITY_ID], vol.Length(max=RACK_MAX_LINKS), _unique)),
    },
    extra=vol.ALLOW_EXTRA,
)


def _unique_ids(slots: list[dict[str, Any]]) -> list[dict[str, Any]]:
    ids = [s["id"] for s in slots]
    if len(set(ids)) != len(ids):
        raise vol.Invalid("every slot of a rack has its own id")
    return slots


# a value on the rack card: an entity, or a figure over the whole rack (rack-card.ts RACK_HOTTEST / RACK_ONLINE)
_CARD_METRIC = vol.Any(_ENTITY_ID, vol.In(["@hottest", "@online"]))

# #120: the card over the rack; `metrics` is the editor's pick (None: the default set, []: no card)
RACK_CARD_SCHEMA = vol.Schema(
    {vol.Optional("metrics"): vol.Any(None, vol.All([_CARD_METRIC], vol.Length(max=RACK_CARD_MAX), _unique))},
    extra=vol.ALLOW_EXTRA,
)

RACK_CONTENTS_SCHEMA = vol.Schema(
    {
        vol.Required("slots"): vol.All([RACK_SLOT_SCHEMA], vol.Length(max=RACK_MAX_SLOTS), _unique_ids),
        vol.Optional("card"): vol.Any(None, RACK_CARD_SCHEMA),
    },
    extra=vol.ALLOW_EXTRA,
)

# (rack item id, slot id, why): why is "overlap", "outside", "not_gear", "wrong_width", "no_rear", "no_shelf",
# "not_loose", "too_tall" or "shelf_full" (rack.ts RackRefusal)
RackProblem = tuple[str, str, str]


def _recipe(recipes: dict[str, Any], type_: str) -> dict[str, Any] | None:
    copy_ = recipes.get(type_)
    recipe = copy_.get("recipe") if isinstance(copy_, dict) else None
    return recipe if isinstance(recipe, dict) else None


def _rack_items(building: dict[str, Any]) -> Iterator[dict[str, Any]]:
    for floor in building.get("floors") or []:
        for item in floor.get("furniture") or []:
            if isinstance(item.get("rack"), dict):
                yield item


_UNIT = 0.04445
# the clear opening between the rails a shelf gives loose gear, by rack width (rack-frame.ts RACK_OPENING)
_OPENING = {19: 0.45085, 10: 0.22225}
_COLUMNS = {"full": 1, "half": 2, "third": 3}
# 0U gear: a lane down the left (col 0) and one down the right (col 1)
_LANES = 2
_SLACK = 0.001
# a shelf's tray: loose gear stands this high above the bottom of its lowest U (rack.ts SHELF_TRAY)
SHELF_TRAY = 0.004


def _lane_units(height: float) -> int:
    """How many U a 0U item standing in a side lane is long (rack.ts laneUnits)."""
    return max(1, math.ceil(height / _UNIT - 0.02))


def _size(recipe: dict[str, Any]) -> list[float]:
    size = recipe.get("size")
    return size if isinstance(size, list) and len(size) == 3 else [0.0, 0.0, 0.0]


def _faces(slot: dict[str, Any], gear: dict[str, Any]) -> set[str]:
    """Full-depth gear takes both faces, other gear the one it is on."""
    if gear.get("depth") == "full":
        return {"front", "rear"}
    return {"rear" if slot.get("face") == "rear" else "front"}


def _columns(gear: dict[str, Any]) -> int:
    return _COLUMNS.get(gear.get("width", "full"), 1)


def _beside(a: dict[str, Any], b: dict[str, Any]) -> bool:
    """Whether two placed pieces of the same kind (U gear, or 0U gear) take some of the same width or lane."""
    if a["lane"]:
        return a["col"] == b["col"]
    na, nb = _columns(a["gear"]), _columns(b["gear"])
    return a["col"] / na < (b["col"] + 1) / nb - 1e-9 and b["col"] / nb < (a["col"] + 1) / na - 1e-9


def _whole_col(col: Any, cols: int) -> bool:
    return isinstance(col, int) and not isinstance(col, bool) and 0 <= col < cols


def _gear_problem(
    slot: dict[str, Any], gear: Any, recipe: dict[str, Any], frame: dict[str, Any]
) -> tuple[str | None, int]:
    """Why a slot's gear does not fit the rack on its own (None: it does), and how many U it takes."""
    if not isinstance(gear, dict):
        return "not_gear", 1
    if gear.get("inch", 19) != frame.get("width", 19):
        return "wrong_width", 1
    lane = gear.get("u", 0) < 1
    n = _lane_units(_size(recipe)[2]) if lane else gear["u"]
    low = slot.get("u", 0)
    if low < 1 or low + n - 1 > frame.get("u", 0):
        return "outside", n
    if not _whole_col(slot.get("col", 0), _LANES if lane else _columns(gear)):
        return "outside", n
    if slot.get("face") == "rear" and frame.get("form") == "frame2":
        return "no_rear", n
    return None, n


def _rack_slot_problems(
    rack_id: str, frame: dict[str, Any], slots: list[dict[str, Any]], recipes: dict[str, Any]
) -> set[RackProblem]:
    """The rule breaks of one rack's slots (rack.ts checkSlot, without the editor-only depth and lane-width checks)."""
    problems: set[RackProblem] = set()
    placed: list[dict[str, Any]] = []
    shelves: dict[str, dict[str, float]] = {}
    for slot in slots:
        recipe = _recipe(recipes, slot.get("type", ""))
        if slot.get("on") or recipe is None:
            continue
        gear = recipe.get("rack")
        why, n = _gear_problem(slot, gear, recipe, frame)
        if why is None:
            low = slot["u"]
            me = {
                "id": slot["id"],
                "gear": gear,
                "lane": gear["u"] < 1,
                "col": slot.get("col", 0),
                "units": set(range(low, low + n)),
                "faces": _faces(slot, gear),
            }
            # both sides of an overlap count, so the order of the slots does not matter
            hit = {
                o["id"]
                for o in placed
                if o["lane"] == me["lane"] and o["units"] & me["units"] and o["faces"] & me["faces"] and _beside(me, o)
            }
            if hit:
                why = "overlap"
                problems.update((rack_id, other, "overlap") for other in hit)
            placed.append(me)
            if gear.get("shelf") and not me["lane"]:
                width = _OPENING.get(frame.get("width", 19), _OPENING[19]) / _columns(gear)
                shelves[slot["id"]] = {"w": width, "h": gear["u"] * _UNIT - SHELF_TRAY, "used": 0.0}
        if why:
            problems.add((rack_id, slot["id"], why))
    for slot in slots:
        recipe = _recipe(recipes, slot.get("type", ""))
        if not slot.get("on") or recipe is None:
            continue
        why = _loose_problem(shelves.get(slot["on"]), recipe)
        if why:
            problems.add((rack_id, slot["id"], why))
    return problems


def _loose_problem(shelf: dict[str, float] | None, recipe: dict[str, Any]) -> str | None:
    """Why loose gear can't stand on its shelf (None: it can; the shelf's room is then used up by its width)."""
    if shelf is None:
        return "no_shelf"
    if "rack_frame" in recipe:
        return "not_loose"
    width, _, height = _size(recipe)
    if height > shelf["h"] + _SLACK:
        return "too_tall"
    if shelf["used"] + width > shelf["w"] + _SLACK:
        return "shelf_full"
    shelf["used"] += width
    return None


def rack_problems(building: dict[str, Any]) -> set[RackProblem]:
    """Every slot of every rack in the plan that breaks a placement rule."""
    recipes = building.get("recipes") or {}
    problems: set[RackProblem] = set()
    for item in _rack_items(building):
        frame = (_recipe(recipes, item.get("type", "")) or {}).get("rack_frame")
        if isinstance(frame, dict):
            problems |= _rack_slot_problems(item["id"], frame, item["rack"].get("slots") or [], recipes)
    return problems


def _frames(building: dict[str, Any]) -> dict[str, tuple[Any, ...]]:
    """Each rack's frame as placed: its type and size (a change of either may leave gear outside it)."""
    return {
        item["id"]: (item.get("type"), item.get("w"), item.get("d"), item.get("h")) for item in _rack_items(building)
    }


def new_rack_problems(before: dict[str, Any], after: dict[str, Any]) -> set[RackProblem]:
    """The rule breaks `after` has that `before` had not: a plan that broke them already (a pack update made a box
    taller) still saves while that stays as it was. A rack whose frame changed in this save (another rack type, or
    resized, #114) keeps its gear and saves too: the editor names what no longer fits."""
    old = _frames(before)
    changed = {rack for rack, frame in _frames(after).items() if rack in old and old[rack] != frame}
    return {p for p in rack_problems(after) - rack_problems(before) if p[0] not in changed}


class RackError(ValueError):
    """A save refused for rack gear that does not fit; `problems` says which and why."""

    def __init__(self, problems: set[RackProblem]) -> None:
        self.problems = problems
        super().__init__(
            "; ".join(f"{slot} in {item}: {why}" for item, slot, why in sorted(problems)) or "rack gear does not fit"
        )
