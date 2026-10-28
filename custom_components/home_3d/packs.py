"""Furniture packs: JSON files with furniture models built from boxes and cylinders.

A pack file is JSON: {"payload": {format, version, id, name, publisher, items, ...}} (an optional "signature"
next to the payload, as older pack files carry, is ignored), or the payload itself. Packs are not signed:
an admin imports them, and the content is checked against the schema below.

This module only depends on voluptuous, so tools/fp3dpack.py (which checks packs) uses the same schema.
"""

from __future__ import annotations

import json
from typing import Any

import voluptuous as vol

PACK_FORMAT = "fp3dpack"
PACK_VERSION = 1
# largest pack file accepted (characters of JSON)
MAX_PACK_SIZE = 1_000_000

_ID = vol.All(str, vol.Match(r"^[a-z0-9][a-z0-9_.-]{0,39}$"))
_TEXT = vol.All(str, vol.Length(min=1, max=80))
# a colour: "#rrggbb" or a role of the built-in palette (so packs follow the look of the plan)
_COLOR = vol.Any(
    vol.Match(r"^#[0-9a-fA-F]{6}$"),
    vol.In(["body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"]),
)
_FRACTION = vol.All(vol.Coerce(float), vol.Range(min=-0.5, max=0.5))
_SPAN = vol.All(vol.Coerce(float), vol.Range(min=0.001, max=1))
_LEVEL = vol.All(vol.Coerce(float), vol.Range(min=0, max=1))
_METRES = vol.All(vol.Coerce(float), vol.Range(min=0.01, max=10))

# Parts in fractions of the item's size: x/z centre (-0.5..0.5, front at +z), w/d extent, y/h bottom
# and height of the item height. A cylinder's diameter is the smaller of w and d.
PART_SCHEMA = vol.Schema(
    {
        vol.Required("shape"): vol.In(["box", "cyl", "loft"]),
        vol.Required("x"): _FRACTION,
        vol.Required("z"): _FRACTION,
        vol.Required("w"): _SPAN,
        vol.Required("d"): _SPAN,
        vol.Required("y"): _LEVEL,
        vol.Required("h"): _SPAN,
        vol.Required("color"): _COLOR,
        vol.Optional("top"): _COLOR,
        # outline: True (soft blue), "glow" (cyan like the walls) or "faint"
        vol.Optional("edges", default=False): vol.Any(bool, vol.In(["glow", "faint"])),
        # lamps: the part shines in the colour and brightness of the linked light
        vol.Optional("glow", default=False): bool,
        # a screen (TV, monitor): shows the linked media player's app colour and picture on its front (+z)
        vol.Optional("screen", default=False): bool,
        # loft: centre and extent of the top rectangle (default: the same as the bottom)
        vol.Optional("tx"): _FRACTION,
        vol.Optional("tz"): _FRACTION,
        vol.Optional("tw"): _SPAN,
        vol.Optional("td"): _SPAN,
        # cylinder axis: upright (default) or lying along x or z (wheels, rollers)
        vol.Optional("axis"): vol.In(["x", "y", "z"]),
        # turn of the part around its own centre (degrees around the vertical axis): spiral steps, diagonals
        vol.Optional("rot"): vol.All(vol.Coerce(float), vol.Range(min=-360, max=360)),
        # free sizes (1.23): the measures that stay when the item is resized ("w", "d", "h" or several): legs,
        # arms and plates keep their size and their distance from the edge, the parts between them stretch
        vol.Optional("fix"): vol.All(str, vol.Match(r"^[wdh]{1,3}$")),
    }
)

# Plan symbol in the same fractions (optional: without it the parts are drawn from above).
SYMBOL_SCHEMA = vol.Any(
    vol.Schema(
        {
            vol.Required("shape"): "rect",
            "x": _FRACTION,
            "z": _FRACTION,
            "w": _SPAN,
            "d": _SPAN,
            vol.Optional("fill", default=False): bool,
        }
    ),
    vol.Schema({vol.Required("shape"): "circle", "x": _FRACTION, "z": _FRACTION, "r": _SPAN}),
    vol.Schema({vol.Required("shape"): "line", "x1": _FRACTION, "z1": _FRACTION, "x2": _FRACTION, "z2": _FRACTION}),
)

ITEM_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        # names by language ("de", "en", …); "en" or the first one is the fallback
        vol.Required("name"): vol.All({vol.All(str, vol.Length(min=2, max=5)): _TEXT}, vol.Length(min=1, max=10)),
        vol.Required("size"): vol.All([_METRES], vol.Length(min=3, max=3)),
        vol.Optional("electric", default=False): bool,
        # where it stands: on the floor, on the furniture below it, on a wall (bottom at wall_y) or
        # hanging from the ceiling
        vol.Optional("mount", default="floor"): vol.In(["floor", "surface", "wall", "ceiling"]),
        vol.Optional("wall_y", default=1.0): vol.All(vol.Coerce(float), vol.Range(min=0, max=3)),
        # its top carries other items (like a table or a worktop)
        vol.Optional("surface", default=False): bool,
        # a vehicle: offered for parking spots
        vol.Optional("vehicle", default=False): bool,
        # stairs: when it reaches the floor above, it cuts a stairwell opening into that floor
        vol.Optional("hole", default=False): bool,
        # a lamp: how its light spreads (like the built-in lamp of that kind)
        vol.Optional("light"): vol.In(
            [
                "ceiling",
                "downlight",
                "spot",
                "panel",
                "pendant",
                "floor",
                "uplight",
                "table",
                "wall",
                "strip",
                "bollard",
                "garden",
            ]
        ),
        vol.Required("parts"): vol.All([PART_SCHEMA], vol.Length(min=1, max=60)),
        vol.Optional("symbol"): vol.All([SYMBOL_SCHEMA], vol.Length(max=40)),
        # the library (since 1.23): what the item is, the rooms it is made for, words that find it, and
        # variants of one thing (a table in three lengths) as a family with the variant's name by language
        vol.Optional("group"): _ID,
        vol.Optional("room"): vol.All([_ID], vol.Length(max=12)),
        vol.Optional("tags"): vol.All([vol.All(str, vol.Length(min=1, max=30))], vol.Length(max=12)),
        vol.Optional("family"): _ID,
        vol.Optional("variant"): vol.All({vol.All(str, vol.Length(min=2, max=5)): _TEXT}, vol.Length(min=1, max=10)),
    }
)

# feature names a pack may list (kept for pack compatibility; every feature whose code is here is on anyway)
KNOWN_FEATURES = [
    "camera_cockpit",
    "weather",
    "screens",
    "fridge_smart",
    "energy_pro",
    "sound",
    "auto_pro",
    "time_travel",
    "pool",
    "household",
    # fun extras (pets, seasonal decorations)
    "fun_pets",
    "fun_halloween",
]

PAYLOAD_SCHEMA = vol.Schema(
    {
        vol.Required("format"): PACK_FORMAT,
        vol.Required("version"): PACK_VERSION,
        vol.Required("id"): _ID,
        vol.Required("name"): _TEXT,
        vol.Required("publisher"): _TEXT,
        # older pack files may name a licensee: accepted for compatibility, shown on import
        vol.Optional("licensee", default=None): vol.Any(None, _TEXT),
        # release number of the pack (a newer release of the same id replaces an installed one)
        vol.Optional("release", default=1): vol.All(int, vol.Range(min=1, max=100000)),
        # older pack files may carry an installation binding: accepted for compatibility and ignored
        vol.Optional("instance", default=None): vol.Any(None, vol.Match(r"^[0-9a-f]{16}$")),
        vol.Optional("description", default=""): vol.All(str, vol.Length(max=400)),
        # feature names (compatibility only: they unlock nothing that is not already on)
        vol.Optional("features", default=[]): vol.All(
            [vol.In(KNOWN_FEATURES)],
            vol.Length(max=10),
        ),
        vol.Required("items"): vol.All([ITEM_SCHEMA], vol.Length(min=0, max=200)),
    }
)


class PackError(Exception):
    """A pack that cannot be imported; `code` says why."""

    def __init__(self, code: str, detail: str = "") -> None:
        """Keep the reason."""
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


def canonical(payload: dict[str, Any]) -> bytes:
    """A pack payload in a stable form (sorted keys, no whitespace, UTF-8)."""
    return json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode("utf-8")


def _payload_of(data: Any) -> dict[str, Any] | None:
    """The payload of a parsed pack file: {"payload": {...}} (optionally with an ignored "signature") or the
    payload itself; None when it is not a pack."""
    if not isinstance(data, dict):
        return None
    payload = data.get("payload") if isinstance(data.get("payload"), dict) else data
    return payload if payload.get("format") == PACK_FORMAT else None


def parts_of(text: str) -> dict[str, Any]:
    """The payload of a pack file that verify_pack accepted, exactly as in the file; it is kept with the pack so a
    backup can carry it and a restore can check it again."""
    payload = _payload_of(json.loads(text))
    assert payload is not None
    return payload


def _unknown_value(err: vol.Invalid) -> bool:
    """Whether a value outside a known list failed: voluptuous says so in its message; Probatio, which checks
    schemas since Home Assistant 2026.9, gives it the code "not_in_list" (pointed out by hohoanganh)."""
    found = getattr(err, "errors", None) or [err]
    return any(getattr(e, "code", None) == "not_in_list" or "value must be one of" in str(e) for e in found)


def validate_payload(payload: Any) -> dict[str, Any]:
    """Check the content of a pack; raises PackError."""
    features = payload.get("features") if isinstance(payload, dict) else None
    if isinstance(features, list):
        unknown = [f for f in features if isinstance(f, str) and f not in KNOWN_FEATURES]
        if unknown:
            # a Pro add-on newer than this installation (#218): ask for an update, not a cryptic error
            raise PackError("needs_update", ", ".join(unknown))
    try:
        clean = PAYLOAD_SCHEMA(payload)
    except vol.Invalid as err:
        # a value this version does not know yet (a new item kind of a newer pack release)
        if _unknown_value(err):
            raise PackError("needs_update", str(err)) from err
        raise PackError("invalid_content", str(err)) from err
    ids = [item["id"] for item in clean["items"]]
    if len(ids) != len(set(ids)):
        raise PackError("invalid_content", "item ids must be unique")
    if not ids and not clean["features"]:
        raise PackError("invalid_content", "a pack needs items or features")
    return clean


def verify_pack(text: str) -> dict[str, Any]:
    """Parse a pack file and return its checked payload; raises PackError."""
    if len(text) > MAX_PACK_SIZE:
        raise PackError("too_large")
    try:
        data = json.loads(text)
    except ValueError as err:
        raise PackError("not_a_pack", "not JSON") from err
    payload = _payload_of(data)
    if payload is None:
        raise PackError("not_a_pack")
    return validate_payload(payload)
