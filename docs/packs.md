# Furniture packs

A furniture pack adds items to the Home 3D library. Items are built from boxes, cylinders and lofts, like the
built-in furniture, so they run just as smoothly on slow wall tablets.

Packs are **data only**: JSON that Home Assistant checks against a schema before it keeps anything. A pack carries no
code, no pictures and no links. The schema and the limits live in `custom_components/home_3d/packs.py`; the same code
checks a pack on import and in `tools/fp3dpack.py`.

This page describes **pack format v2**. Old single-file packs (format `fp3dpack`, version 1) still import; see the end
of the page.

## A pack is a folder

```
theovencook.core/
├── pack.json                 the pack: id, name, publisher, licence
├── LICENSE                   optional, not read
├── README.md                 optional, not read
├── seating/
│   ├── bar_stool.json        one item per file
│   └── dining_chair.json
└── tables/
    └── side_table.json
```

- `pack.json` sits at the top of the folder.
- Every other `.json` file in the folder is one item. Subfolders (up to three deep) are only for keeping a large pack
  tidy, for example one folder per category; they mean nothing to Home 3D.
- File and folder names are lower case: letters, digits, `_` and `-` (file names may also contain `.`).
- An item file is named after its item: `seating/bar_stool.json` holds the item `bar_stool`.
- A `README`, `LICENSE`/`LICENCE`, `COPYING` or `CHANGELOG` file (optionally `.md` or `.txt`) at the top of the folder
  may come along and is ignored. Hidden files and folders (`.git`, `.github`) are skipped by the importer and the
  checker.
- Anything else (pictures, scripts, other files) makes the import fail.

A repository can hold several packs, one folder each (like `theovencook/home-3d-packs`). Pick the repository folder
in the importer and every folder with a `pack.json` in it is imported as its own pack.

## pack.json

```json
{
  "format": "home3d-pack",
  "version": 2,
  "id": "theovencook.core",
  "name": "Home 3D core",
  "publisher": "theovencook",
  "licence": "MIT",
  "release": 1,
  "description": "Everyday furniture for every room."
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `format` | yes | Always `"home3d-pack"`. |
| `version` | yes | Always `2`. |
| `id` | yes | `publisher.pack`: two lower-case names joined by a dot (letters, digits, `_`, `-`; up to 30 characters each), e.g. `theovencook.ikea-uk`. |
| `name` | yes | The pack's name as people see it (1 to 80 characters). |
| `publisher` | yes | Who made the pack, as people see it (1 to 80 characters). |
| `licence` | yes | The licence of the pack's content as an [SPDX id](https://spdx.org/licenses/) such as `MIT` or `CC-BY-4.0`. A pack without a licence is refused. `"license"` is read as `"licence"`. |
| `release` | no | Release number of the pack (1 to 100000, default 1). A newer release of the same pack id replaces the installed one. |
| `description` | no | Up to 400 characters. |

No other fields are allowed. The fields of the old signed shop packs (`signature`, `licensee`, `instance`) are not
part of v2 and make a v2 pack fail.

## Item ids

An item's full id is the pack id, a slash and the item id: `theovencook.core/bar_stool`. The item id is unique
within its pack (1 to 40 characters: lower-case letters, digits, `_`, `.`, `-`), so the full id is unique across
packs. In a saved plan, an item from a pack is stored with the furniture type `pack:theovencook.core:bar_stool`.

## Item files

```json
{
  "id": "bar_stool",
  "name": { "en": "Bar stool", "de": "Barhocker" },
  "size": [0.42, 0.42, 0.75],
  "group": "seating",
  "room": ["kitchen", "dining"],
  "tags": ["counter", "high"],
  "parts": [
    { "shape": "cyl", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0.93, "h": 0.07, "color": "wood", "fix": "h" },
    { "shape": "cyl", "x": 0, "z": 0, "w": 0.12, "d": 0.12, "y": 0, "h": 0.93, "color": "metal" },
    { "shape": "cyl", "x": 0, "z": 0, "w": 0.8, "d": 0.8, "y": 0, "h": 0.03, "color": "metal", "fix": "h" }
  ],
  "symbol": [{ "shape": "circle", "x": 0, "z": 0, "r": 0.5 }]
}
```

### Required fields

- `id`: the item id; it must match the file name.
- `name`: the name by language code (`"en"`, `"de"`, …; 1 to 10 languages, 1 to 80 characters each). English, then
  the first name, is the fallback for other languages.
- `size`: the default size in metres as `[width, depth, height]` (0.01 to 10 each). In the plan every item can be
  resized freely; all parts grow with it, except the measures a part keeps with `fix`.
- `parts`: 1 to 60 parts (see below).

### Parts

All measures of a part are **fractions of the item's size**:

- `x`, `z`: centre across and in depth (−0.5 to 0.5; the front is +z).
- `w`, `d`: width and depth (0.001 to 1).
- `y`: bottom (0 to 1 of the height); `h`: height (0.001 to 1).
- `shape`:
  - `box`: a box.
  - `cyl`: a cylinder. Its diameter is the smaller of `w` and `d`. With `axis: "x"` or `"z"` it lies down (wheels,
    rollers, pipes): its length is the extent along that axis and its diameter the smaller of the other extent and
    `h`.
  - `loft`: a box whose top face is another rectangle: `tx`/`tz` for its centre and `tw`/`td` for its size (default:
    the same as the bottom). Use it for sloped surfaces such as bonnets, windscreens and lamp shades; a thin loft
    with an offset top makes a slanted bar (a handrail).
- `color`: `#rrggbb` or a role of the built-in palette (`body`, `fabric`, `cushion`, `wood`, `white`, `metal`,
  `dark`, `glass`, `plant`, `pot`, `accent`). Roles follow the look of the plan, so prefer them.
- `top` (optional): another colour for the top face.
- `edges` (optional): glowing outlines: `true` (soft blue), `"glow"` (cyan like the walls) or `"faint"`.
- `rot` (optional): turn of the part around its own centre, in degrees around the vertical axis (−360 to 360), for
  spiral stairs or diagonal struts.
- `fix` (optional): the measures the part **keeps** when the item is resized: `"w"`, `"d"`, `"h"` or several
  (`"wdh"`). Legs, armrests, plates and handles keep their size and their distance from the item's edge, and the
  parts between them (seat, carcass) stretch. Per axis there is a fixed zone at each end and a middle that grows; a
  fixed part in the middle stays centred. When there is not enough room for the fixed parts (a very narrow item),
  everything scales as before.
- `glow` (optional, lamps): the part shines in the colour and brightness of the linked light.
- `screen` (optional): the part is a screen (TV, monitor). The item can then be linked to a media player and its
  front (+z) shows the colour and picture of the running app, like the built-in TVs.

### Optional item fields

- `symbol`: up to 40 shapes for the plan's top view, in the same fractions: `rect` (`x`, `z`, `w`, `d`, `fill` for a
  filled one), `circle` (`x`, `z`, `r` as a fraction of the shorter side) and `line` (`x1`, `z1`, `x2`, `z2`).
  Without a symbol the plan draws the parts from above.
- `electric`: the item can be linked to a switch and a power sensor.
- `mount`: where the item sits: `floor` (default), `surface` (on the item below it, such as a coffee machine on a
  worktop), `wall` (bottom at `wall_y` metres, 0 to 3, default 1; such as a wallbox) or `ceiling` (hangs from the
  ceiling, such as a cooker hood or pendant lights).
- `surface`: its top carries other items (a table, a kitchen island, a workbench).
- `vehicle`: a vehicle; offered for parking spots.
- `hole`: stairs. When they reach the floor above, they cut the stairwell opening into that floor, like the built-in
  stairs; the steps rise from the front edge (+z) to the back.
- `light`: the item is a lamp and is linked to a light (or a switch). The value says how the light spreads in the
  room: `ceiling`, `downlight`, `spot`, `panel`, `pendant`, `floor`, `uplight`, `table`, `wall`, `strip`,
  `bollard` or `garden`.
- Library fields:
  - `group`: what the item is: `sofa`, `seating`, `table`, `storage`, `bed`, `kitchen`, `appliance`, `bath`,
    `lamp`, `media`, `office`, `tech`, `heating`, `energy`, `household`, `deco`, `plant`, `outdoor`, `kids`,
    `sport`, `pets`, `vehicle`, `stairs` or `architecture`.
  - `room`: up to 12 rooms the item is meant for: `living`, `dining`, `kitchen`, `bedroom`, `kids`, `bath`,
    `office`, `hall`, `utility`, `garage`, `garden`, `hobby`. Empty means any room.
  - `tags`: up to 12 more search words (1 to 30 characters each).
  - `family`: groups variants of one thing (a table in three lengths) into one library card; `variant` (text by
    language, like `name`) labels the variant's chip.

  Without these fields Home 3D sorts the item by its words and its pack id; it finds variants by a size at the end of
  the id (`table_160`) and by the numbers in the name.

No other fields are allowed, in an item or in a part.

## What the loader checks

A pack is refused, with a message that names the file and the fault, when:

| Check | Limit | Error code |
| --- | --- | --- |
| The folder has no `pack.json`, or its `format` is not `home3d-pack` | | `not_a_pack` |
| `pack.json` has no `licence` | | `no_licence` |
| A file is not `pack.json`, an item `.json` or a readme/licence text; a path leaves the folder or breaks the naming rules | | `not_data` |
| Any text contains a link (`http:`, `https:`, `www.` and the like) | | `not_data` |
| Too many items | 500 per pack | `too_many_items` |
| A file is too large | 50,000 characters | `too_large` |
| The whole pack is too large | 3,000,000 characters | `too_large` |
| A file is not JSON, breaks the schema, or an item id does not match its file name or is used twice | 60 parts and 40 symbol shapes per item | `invalid_content` |
| A value this version does not know yet (a newer shape, for example) | | `needs_update` |

The size limits keep a pack within one websocket message. A larger collection is split into several packs.

## Checking and importing

1. Write the pack folder.
2. Check it: `python tools/fp3dpack.py validate path/to/theovencook.core` (needs the Python package `voluptuous`).
   It runs the same checks as Home Assistant and prints the pack's id, item count, release and licence.
3. Import it in Home Assistant: **Extensions** → **Import a pack folder …**, then pick the pack folder (or a
   repository folder that holds several packs).

The plan keeps working when a pack is removed: its items stay in the plan as plain boxes.

## Installing from GitHub

An editor can also paste a GitHub URL into **Extensions** → **Install from GitHub**:

- a repository with the pack at its root: `https://github.com/<owner>/<repo>` (the default branch);
- a pack folder inside a repository: `https://github.com/<owner>/<repo>/tree/<branch or tag>/<folder>`, for example
  `https://github.com/theovencook/home-3d-packs/tree/main/theovencook.core`;
- a release: `https://github.com/<owner>/<repo>/releases/tag/<tag>`.

Home Assistant fetches the pack, not the browser, and only from `api.github.com` (the repository, the commit and its
file list) and `raw.githubusercontent.com` (the files, at that commit). The repository must be public. Before
anything is downloaded the file list is checked: the names (as above), at most 510 files in the folder and the size
of each file; hidden files and folders and the readme and licence texts are not fetched. The files then go through
the same checks as a folder import. A repository root that holds several packs is refused with the URLs of its pack
folders. Branch names that contain a `/` cannot be told from the folder and are not supported.

| Problem | Error code |
| --- | --- |
| Not a URL of a GitHub repository, folder or release | `bad_url` |
| The repository (or branch, tag, folder) does not exist or is private | `not_found` |
| GitHub cannot be reached, refuses (rate limit) or redirects elsewhere | `fetch_failed` |

The installed pack keeps where it came from in `source.origin`, so an update check can compare commits:

```json
{
  "type": "github",
  "url": "https://github.com/theovencook/home-3d-packs/tree/main/theovencook.core",
  "owner": "theovencook",
  "repo": "home-3d-packs",
  "ref": "main",
  "default_branch": false,
  "folder": "theovencook.core",
  "commit": "<the 40-character commit id the files came from>",
  "release": 1,
  "fetched_at": 1793232000.0
}
```

`ref` is the branch, tag or commit the URL named, or the default branch's name when it named none
(`default_branch: true`); `folder` is `""` for a pack at the repository root; `release` is the pack's release number
when it was fetched. A backup carries the origin; on restore it is kept only when it still names GitHub.

## Old single-file packs (v1)

Packs made for earlier versions are one JSON file: `{"payload": {…}}` or the payload itself, with
`"format": "fp3dpack"`, `"version": 1`, an `id` without a publisher prefix and all items in an `items` list. They
still import through **Extensions** → **Import pack files …**, and `tools/fp3dpack.py validate old-pack.json` checks
them. Their items use the same fields as above. They declare no licence. Fields of the old signed shop packs
(`signature`, `licensee`, `instance`) are dropped on import. An old pack may list `features`; they unlock nothing,
since every feature whose code is in this repository is always on.

To move an old pack to v2: put the payload's `id`, `name`, `publisher`, `release` and `description` into a
`pack.json` with `"format": "home3d-pack"`, `"version": 2`, a `publisher.pack` id and a `licence`, then save each
entry of `items` as `<item id>.json`.
