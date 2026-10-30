"""Rack contents (#113): the gear in a placed rack, kept on the rack item as `rack: {"slots": [...]}`.

A rack is a pack item with a `rack_frame` spec, gear a pack item with a `rack` spec (packs.py). A slot names its gear's
pack item type and its lowest rail position counted from the bottom (`u`, 1 = the lowest U, whatever the rack's
numbering). The schema checks the slots' shape on every save; `new_rack_problems` is what an editor's save is refused
for: gear that overlaps other gear, sticks out of the rack, is no gear or is made for the other rack width. The rules
are frontend/src/rack.ts's (the depth check stays in the editor: it only changes how the gear looks). They read the
plan's recipe copies, so they hold for whatever the plan shows; gear whose recipe is gone is not checked.

Room for later tickets: a slot may carry more fields (a column and a face for half-width and rear gear, #114; links
to Home Assistant, #119): the schema keeps unknown slot fields, like the rest of the plan's schema.
"""

from __future__ import annotations

from collections.abc import Iterator
from typing import Any

import voluptuous as vol

# at most this many pieces of gear in one rack
RACK_MAX_SLOTS = 60
_MAX_U = 60

_SLOT_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))


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
    },
    extra=vol.ALLOW_EXTRA,
)


def _unique_ids(slots: list[dict[str, Any]]) -> list[dict[str, Any]]:
    ids = [s["id"] for s in slots]
    if len(set(ids)) != len(ids):
        raise vol.Invalid("every slot of a rack has its own id")
    return slots


RACK_CONTENTS_SCHEMA = vol.Schema(
    {vol.Required("slots"): vol.All([RACK_SLOT_SCHEMA], vol.Length(max=RACK_MAX_SLOTS), _unique_ids)},
    extra=vol.ALLOW_EXTRA,
)

# (rack item id, slot id, why): why is "overlap", "outside", "not_gear" or "wrong_width" (rack.ts RackRefusal)
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


def rack_problems(building: dict[str, Any]) -> set[RackProblem]:
    """Every slot of every rack in the plan that breaks a placement rule."""
    recipes = building.get("recipes") or {}
    problems: set[RackProblem] = set()
    for item in _rack_items(building):
        frame = (_recipe(recipes, item.get("type", "")) or {}).get("rack_frame")
        if not isinstance(frame, dict):
            continue
        size, width = frame.get("u", 0), frame.get("width", 19)
        taken: dict[int, str] = {}
        for slot in item["rack"].get("slots") or []:
            recipe = _recipe(recipes, slot.get("type", ""))
            if recipe is None:
                continue
            gear = recipe.get("rack")
            low = slot.get("u", 0)
            why = None
            if not isinstance(gear, dict) or gear.get("u", 0) < 1:
                why = "not_gear"
            elif gear.get("inch", 19) != width:
                why = "wrong_width"
            elif low < 1 or low + gear["u"] - 1 > size:
                why = "outside"
            else:
                units = range(low, low + gear["u"])
                # both sides of an overlap count, so the order of the slots does not matter
                hit = {taken[u] for u in units if u in taken}
                if hit:
                    why = "overlap"
                    problems.update((item["id"], other, "overlap") for other in hit)
                taken.update({u: slot["id"] for u in units})
            if why:
                problems.add((item["id"], slot["id"], why))
    return problems


def new_rack_problems(before: dict[str, Any], after: dict[str, Any]) -> set[RackProblem]:
    """The rule breaks `after` has that `before` had not: a plan that broke them already (a pack update made a box
    taller) still saves while that stays as it was."""
    return rack_problems(after) - rack_problems(before)


class RackError(ValueError):
    """A save refused for rack gear that does not fit; `problems` says which and why."""

    def __init__(self, problems: set[RackProblem]) -> None:
        self.problems = problems
        super().__init__(
            "; ".join(f"{slot} in {item}: {why}" for item, slot, why in sorted(problems)) or "rack gear does not fit"
        )
