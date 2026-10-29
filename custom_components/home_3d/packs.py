"""Furniture packs: data-only JSON, furniture models built from boxes, cylinders, lofts, spheres, lathes and
rounded boxes.

A pack (format v2, see docs/packs.md) is a folder: a pack.json naming the pack, its publisher and its licence, and
one JSON file per item, in subfolders if wanted. The pack id is "publisher.pack", an item's full id
"publisher.pack/item_id". verify_folder() checks every file against the schemas below, within limits (item count,
parts per item, file size), and refuses anything else: packs carry no code, pictures or links.

Old single-file packs (format "fp3dpack", version 1) still import through verify_pack().

This module only depends on voluptuous, so tools/fp3dpack.py (which checks packs) uses the same schema.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
import re
from typing import Any

import voluptuous as vol

_LOGGER = logging.getLogger(__name__)

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

# A lathe's profile: [radius, height] points turned around the part's upright axis (#4). The radius is a fraction of
# the part's half width and half depth (1 touches the part's box), the height a fraction of the part's height.
# At most 12 points keeps a turned part low-poly on wall tablets.
MAX_PROFILE_POINTS = 12
_PROFILE = vol.All(
    [vol.All([_LEVEL], vol.Length(min=2, max=2))],
    vol.Length(min=2, max=MAX_PROFILE_POINTS),
)
# A rounded box: the radius of its rounded edges as a fraction of the part's shortest side (0.5: fully round)
_ROUND = vol.All(vol.Coerce(float), vol.Range(min=0.01, max=0.5))


def _shape_fields(part: dict[str, Any]) -> dict[str, Any]:
    """A lathe has a profile and only a lathe; only a rounded box has a rounding."""
    if (part["shape"] == "lathe") != ("profile" in part):
        raise vol.Invalid("a lathe part needs a profile, and only a lathe part has one", path=["profile"])
    if "round" in part and part["shape"] != "rbox":
        raise vol.Invalid("only a rounded box (rbox) part has a rounding", path=["round"])
    return part


# Parts in fractions of the item's size: x/z centre (-0.5..0.5, front at +z), w/d extent, y/h bottom
# and height of the item height. A cylinder's diameter is the smaller of w and d; a sphere, a lathe and a rounded
# box fill their part box (squashed when w, d and h differ).
_PART_FIELDS = vol.Schema(
    {
        vol.Required("shape"): vol.In(["box", "cyl", "loft", "sphere", "lathe", "rbox"]),
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
        # lathe: the profile turned around the upright axis (vases, lamp bases, bowls)
        vol.Optional("profile"): _PROFILE,
        # rounded box: the radius of its edges (default 0.2 of the shortest side)
        vol.Optional("round"): _ROUND,
    }
)
PART_SCHEMA = vol.All(_PART_FIELDS, _shape_fields)

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
        # the IKEA product name ("KALLAX"): the library finds the item by it as well as by its readable name
        vol.Optional("ikea"): vol.All(str, vol.Length(min=1, max=40)),
    }
)


class PackError(Exception):
    """A pack that cannot be imported; `code` says why, `detail` names the file and the fault."""

    def __init__(self, code: str, detail: str = "") -> None:
        """Keep the reason."""
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


def _unknown_value(err: vol.Invalid) -> bool:
    """Whether a value outside a known list failed: voluptuous says so in its message; Probatio, which checks
    schemas since Home Assistant 2026.9, gives it the code "not_in_list" (pointed out by hohoanganh)."""
    found = getattr(err, "errors", None) or [err]
    return any(getattr(e, "code", None) == "not_in_list" or "value must be one of" in str(e) for e in found)


def _check(schema: vol.Schema, path: str, data: Any) -> dict[str, Any]:
    """Data against a schema; raises PackError naming the file (a value this version does not know yet, as a
    newer pack may use, asks for an update)."""
    try:
        return schema(data)
    except vol.Invalid as err:
        code = "needs_update" if _unknown_value(err) else "invalid_content"
        raise PackError(code, f"{path}: {err}" if path else str(err)) from err


# ---------------------------------------------------------------------------- pack format v2: a folder

PACK_FORMAT_V2 = "home3d-pack"
PACK_VERSION_V2 = 2
PACK_FILE = "pack.json"
# limits of a pack folder: items, characters per file and in all (one websocket message carries the folder)
MAX_ITEMS = 500
MAX_FILE_SIZE = 50_000
MAX_FOLDER_SIZE = 3_000_000
# an item file: lower-case names, at most three folders deep ("seating/chairs/stool.json")
_ITEM_PATH = re.compile(r"^(?:[a-z0-9][a-z0-9_-]{0,39}/){0,3}[a-z0-9][a-z0-9_.-]{0,39}\.json$")
# a readme and the licence text may come along; they are not read
_DOC_PATH = re.compile(r"^(?:README|LICEN[CS]E|COPYING|CHANGELOG)(?:\.(?:md|txt))?$", re.IGNORECASE)
# packs are data only: no links in any text
_LINK = re.compile(r"\b(?:https?|ftp|file|data|javascript|mailto):|\bwww\.", re.IGNORECASE)

# a pack id is "publisher.pack"; an item's full id is "publisher.pack/item_id"
_PACK_ID = vol.All(str, vol.Match(r"^[a-z0-9][a-z0-9_-]{0,29}\.[a-z0-9][a-z0-9_-]{0,29}$"))

PACK_SCHEMA_V2 = vol.Schema(
    {
        vol.Required("format"): PACK_FORMAT_V2,
        vol.Required("version"): PACK_VERSION_V2,
        vol.Required("id"): _PACK_ID,
        vol.Required("name"): _TEXT,
        vol.Required("publisher"): _TEXT,
        # an SPDX licence id ("MIT", "CC-BY-4.0", …); "license" is read as "licence"
        vol.Required("licence"): vol.All(str, vol.Match(r"^[A-Za-z0-9][A-Za-z0-9.+-]{1,39}$")),
        # release number of the pack (a newer release of the same id replaces an installed one)
        vol.Optional("release", default=1): vol.All(int, vol.Range(min=1, max=100000)),
        vol.Optional("description", default=""): vol.All(str, vol.Length(max=400)),
    }
)


def item_ref(pack: dict[str, Any], item: dict[str, Any]) -> str:
    """The full id of a pack item: "publisher.pack/item_id"."""
    return f"{pack['id']}/{item['id']}"


def _parse(path: str, text: str) -> Any:
    """One file of a pack folder as JSON; raises PackError naming the file."""
    try:
        return json.loads(text)
    except ValueError as err:
        raise PackError("invalid_content", f"{path}: not JSON") from err


def _link_in(data: Any) -> str | None:
    """The first text with a link in parsed JSON, or None."""
    if isinstance(data, str):
        return data if _LINK.search(data) else None
    values = data.values() if isinstance(data, dict) else data if isinstance(data, list) else []
    for value in values:
        if (found := _link_in(value)) is not None:
            return found
    return None


def _no_links(path: str, data: Any) -> Any:
    if (found := _link_in(data)) is not None:
        raise PackError("not_data", f"{path}: links are not allowed ({found[:60]})")
    return data


def _pack_file(text: str) -> dict[str, Any]:
    """The checked pack.json of a folder."""
    pack = _no_links(PACK_FILE, _parse(PACK_FILE, text))
    if not isinstance(pack, dict) or pack.get("format") != PACK_FORMAT_V2:
        raise PackError("not_a_pack", f'{PACK_FILE}: "format" must be "{PACK_FORMAT_V2}"')
    if "licence" not in pack and "license" in pack:
        pack = {**pack, "licence": pack["license"]}
        del pack["license"]
    if not pack.get("licence"):
        raise PackError("no_licence", f'{PACK_FILE} must name the licence of the pack, e.g. "licence": "MIT"')
    return _check(PACK_SCHEMA_V2, PACK_FILE, pack)


def _item_file(path: str, text: str) -> dict[str, Any]:
    """One checked item file; its name is the item's id ("seating/stool.json" holds "stool")."""
    item = _check(ITEM_SCHEMA, path, _no_links(path, _parse(path, text)))
    stem = path.rsplit("/", 1)[-1].removesuffix(".json")
    if item["id"] != stem:
        raise PackError("invalid_content", f'{path}: the item id "{item["id"]}" must match the file name')
    return item


def verify_item(data: Any) -> dict[str, Any]:
    """One item on its own, as an item file holds it (an item made in the item editor, #13): the same checks as an
    item in a pack folder; raises PackError."""
    path = f"{data['id']}.json" if isinstance(data, dict) and isinstance(data.get("id"), str) else "item"
    return _check(ITEM_SCHEMA, path, _no_links(path, data))


def data_paths(paths: list[str]) -> list[str]:
    """The paths of a folder's files that are read (pack.json and the items, not the readme or licence text), after
    the checks on names and count; raises PackError. A fetch from GitHub runs it before downloading anything."""
    if PACK_FILE not in paths:
        raise PackError("not_a_pack", f"no {PACK_FILE}")
    kept: list[str] = []
    for path in paths:
        if _DOC_PATH.match(path):
            continue
        if path != PACK_FILE and not _ITEM_PATH.match(path):
            raise PackError("not_data", f"{path}: a pack holds only {PACK_FILE} and item .json files")
        kept.append(path)
    if len(kept) - 1 > MAX_ITEMS:
        raise PackError("too_many_items", f"{len(kept) - 1} items, at most {MAX_ITEMS}")
    return kept


def _data_files(files: dict[str, str]) -> dict[str, str]:
    """The pack.json and item files of a folder, after the checks on names, count and size; raises PackError."""
    kept = {path: files[path] for path in data_paths(list(files))}
    for path, text in kept.items():
        if len(text) > MAX_FILE_SIZE:
            raise PackError("too_large", f"{path}: {len(text)} characters, at most {MAX_FILE_SIZE}")
    total = sum(len(text) for text in kept.values())
    if total > MAX_FOLDER_SIZE:
        raise PackError("too_large", f"the pack: {total} characters, at most {MAX_FOLDER_SIZE}")
    return kept


def verify_folder(files: dict[str, str]) -> dict[str, Any]:
    """Check a pack folder (relative path -> file text) and return the pack with its items; raises PackError.

    The result has the same shape as an old single-file pack (see verify_pack), so everything after the import
    treats both alike."""
    files = _data_files(files)
    pack = _pack_file(files[PACK_FILE])
    items = [_item_file(path, text) for path, text in sorted(files.items()) if path != PACK_FILE]
    if not items:
        raise PackError("invalid_content", "a pack needs at least one item file")
    seen: set[str] = set()
    for item in items:
        if item["id"] in seen:
            raise PackError("invalid_content", f'the item id "{item["id"]}" is used twice')
        seen.add(item["id"])
    return {**pack, "features": [], "items": items}


def read_folder(folder: Path) -> dict[str, str]:
    """Every file of a pack folder on disk (relative path with "/" -> text), leaving out hidden files and folders."""
    files: dict[str, str] = {}
    for path in sorted(folder.rglob("*")):
        rel = path.relative_to(folder)
        if path.is_file() and not any(part.startswith(".") for part in rel.parts):
            files[rel.as_posix()] = path.read_text(encoding="utf-8", errors="replace")
    return files


# ---------------------------------------------------------------------------- packs that ship with Home 3D

# The packs bundled with the integration: one folder per pack (theovencook.core, ...), read from the disk at setup,
# so they are there on a fresh install without network access. They are checked like an imported pack.
BUNDLED_DIR = Path(__file__).parent / "bundled_packs"


def load_bundled(root: Path = BUNDLED_DIR) -> list[dict[str, Any]]:
    """The checked bundled packs, marked "bundled"; a folder that does not check is logged and left out."""
    found: list[dict[str, Any]] = []
    if not root.is_dir():
        return found
    for folder in sorted(p for p in root.iterdir() if (p / PACK_FILE).is_file()):
        try:
            found.append({**verify_folder(read_folder(folder)), "bundled": True})
        except PackError as err:
            _LOGGER.error("Bundled pack %s does not check: %s", folder.name, err)
    return found


def with_bundled(bundled: list[dict[str, Any]], imported: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """All packs to offer: the bundled ones, then the imported ones, one per pack id. When a pack is both bundled
    and imported (a copy imported from files or installed from a GitHub URL), the higher release wins; on a tie the
    imported one."""
    release = {p["id"]: p.get("release", 1) for p in imported}
    kept = [p for p in bundled if release.get(p["id"], 0) < p.get("release", 1)]
    shadowed = {p["id"] for p in kept}
    return kept + [p for p in imported if p["id"] not in shadowed]


def is_bundled(bundled: list[dict[str, Any]], pack_id: str) -> bool:
    """Whether a pack id is one of the bundled packs."""
    return any(p["id"] == pack_id for p in bundled)


# ---------------------------------------------------------------------------- old single-file packs (v1)

PACK_FORMAT = "fp3dpack"
PACK_VERSION = 1
# largest single pack file accepted (characters of JSON)
MAX_PACK_SIZE = 1_000_000

# feature names an old pack may list (kept for pack compatibility; every feature whose code is here is on anyway)
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

# An old pack's payload. Top-level keys this version does not read (the fields of the old signed shop packs) are
# dropped; the items are checked as strictly as in a v2 pack.
PAYLOAD_SCHEMA = vol.Schema(
    {
        vol.Required("format"): PACK_FORMAT,
        vol.Required("version"): PACK_VERSION,
        vol.Required("id"): _ID,
        vol.Required("name"): _TEXT,
        vol.Required("publisher"): _TEXT,
        vol.Optional("release", default=1): vol.All(int, vol.Range(min=1, max=100000)),
        vol.Optional("description", default=""): vol.All(str, vol.Length(max=400)),
        # feature names (compatibility only: they unlock nothing that is not already on)
        vol.Optional("features", default=[]): vol.All([vol.In(KNOWN_FEATURES)], vol.Length(max=10)),
        vol.Required("items"): vol.All([ITEM_SCHEMA], vol.Length(min=0, max=200)),
    },
    extra=vol.REMOVE_EXTRA,
)


def _payload_of(data: Any) -> dict[str, Any] | None:
    """The payload of a parsed old pack file: {"payload": {...}} (anything next to it is ignored) or the payload
    itself; None when it is not an old pack."""
    if not isinstance(data, dict):
        return None
    payload = data["payload"] if isinstance(data.get("payload"), dict) else data
    return payload if payload.get("format") == PACK_FORMAT else None


def validate_payload(payload: Any) -> dict[str, Any]:
    """Check the content of an old single-file pack; raises PackError."""
    features = payload.get("features") if isinstance(payload, dict) else None
    if isinstance(features, list):
        unknown = [f for f in features if isinstance(f, str) and f not in KNOWN_FEATURES]
        if unknown:
            # a Pro add-on newer than this installation (#218): ask for an update, not a cryptic error
            raise PackError("needs_update", ", ".join(unknown))
    clean = _check(PAYLOAD_SCHEMA, "", payload)
    ids = [item["id"] for item in clean["items"]]
    if len(ids) != len(set(ids)):
        raise PackError("invalid_content", "item ids must be unique")
    if not ids and not clean["features"]:
        raise PackError("invalid_content", "a pack needs items or features")
    # an old pack declares no licence
    return {**clean, "licence": None}


def verify_pack(text: str) -> dict[str, Any]:
    """Parse an old single-file pack and return its checked payload; raises PackError."""
    if len(text) > MAX_PACK_SIZE:
        raise PackError("too_large", f"{len(text)} characters, at most {MAX_PACK_SIZE}")
    try:
        data = json.loads(text)
    except ValueError as err:
        raise PackError("not_a_pack", "not JSON") from err
    payload = _payload_of(data)
    if payload is None:
        if isinstance(data, dict) and data.get("format") == PACK_FORMAT_V2:
            raise PackError("not_a_pack", f"this is the {PACK_FILE} of a pack folder: import the whole folder")
        raise PackError("not_a_pack", f'neither a pack folder nor an old pack file (format "{PACK_FORMAT}")')
    return validate_payload(payload)


def parts_of(text: str) -> dict[str, Any]:
    """The source kept with an old pack that verify_pack accepted: its payload with only the fields this version
    reads, so a backup can carry the pack and a restore can check it again."""
    payload = _payload_of(json.loads(text))
    assert payload is not None
    return {key: value for key, value in payload.items() if key in {str(k) for k in PAYLOAD_SCHEMA.schema}}


# ---------------------------------------------------------------------------- the kept source of a pack


def source_of_folder(files: dict[str, str]) -> dict[str, Any]:
    """The source kept with a v2 pack: its data files as they were imported."""
    return {"files": _data_files(files)}


def verify_source(source: Any) -> dict[str, Any]:
    """Check the kept source of an imported pack again (a backup being restored); raises PackError."""
    if isinstance(source, dict) and isinstance(source.get("files"), dict):
        files = source["files"]
        if not all(isinstance(k, str) and isinstance(v, str) for k, v in files.items()):
            raise PackError("invalid_content", "the files of a pack are texts")
        return verify_folder(files)
    return validate_payload(source)
