# Furniture packs

A furniture pack adds items to the Home 3D library. Items are built from a few simple shapes (boxes, cylinders,
lofts, spheres, lathes and rounded boxes), like the built-in furniture, so they run just as smoothly on slow wall
tablets.

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
  the first name, is the fallback for other languages. Write the English name first, as a readable name in UK
  words: "Wardrobe", "Hob", "Worktop", "Bedside table", "Cooker" (not a product name: that goes in `ikea`).
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
  - `sphere`: a ball that fills the part's box, squashed when `w`, `d` and `h` differ (a pouffe, a globe lamp, a
    knob). See [Round shapes](#round-shapes).
  - `lathe`: a `profile` turned around the part's upright axis (vases, lamp bases, bowls, planters).
  - `rbox`: a box with rounded edges (cushions, mattresses, appliances, soft seats); `round` sets how round.
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
- `glow` (optional, lamps): the part shines in the colour and brightness of the linked light. On a 3D printer it is
  the chamber light (see [3D printers](#3d-printers)). On an item with a `screen` that is no lamp it is Ambilight:
  LED strips round the back of a TV that shine in the screen's colour whenever the screen is lit
  (`theovencook.core/tv_ambilight_55`). On a speaker without a screen it is the light ring, lit while it plays.
- `screen` (optional): the part is a screen (TV, monitor). The item can then be linked to a media player and its
  front (+z) shows the colour and picture of the running app, like the built-in TVs.
- `profile` (`lathe` only, required there): see [Round shapes](#round-shapes).
- `round` (`rbox` only, optional): see [Round shapes](#round-shapes).

### Round shapes

A sphere, a lathe and a rounded box fill the part's box like the other shapes: they take `x`, `z`, `w`, `d`, `y`,
`h`, the colour roles, `top`, `edges`, `rot` and `fix`, and grow with the item. When `w` and `d` differ they are oval
seen from above. They are low-poly (12 points around, 8 on parts under 10 cm), so a room full of them stays smooth on
a wall tablet. In the plan a sphere and a lathe show as an ellipse as wide as they reach, a rounded box as a rectangle
with rounded corners. An item whose largest part is a sphere or a lathe casts a round shadow.

**Sphere.** Nothing more to set. A flat `h` gives a squashed ball; for a dome or half a ball, use a lathe.

```json
{
  "id": "pouffe_round",
  "name": { "en": "Round pouffe" },
  "size": [0.5, 0.5, 0.4],
  "group": "seating",
  "parts": [
    { "shape": "sphere", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "fabric" }
  ]
}
```

**Lathe.** `profile` is a list of 2 to 12 points `[radius, height]`, turned around the part's upright axis:

- `radius` is a fraction of the part's half width and half depth: `1` touches the part's box, `0` is the axis.
- `height` is a fraction of the part's height: `0` its bottom, `1` its top.
- Write the points from the bottom up the outside, like drawing the right half of the object's silhouette. A
  profile that starts or ends away from the axis is closed with a flat disc there, so the solid has no holes. A
  profile can come back down on the inside (a bowl): go up the outside, over the rim and down the inside.

```json
{
  "id": "vase_tall",
  "name": { "en": "Tall vase" },
  "size": [0.22, 0.22, 0.45],
  "group": "vase",
  "mount": "surface",
  "parts": [
    {
      "shape": "lathe", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "pot",
      "profile": [[0, 0], [0.55, 0], [1, 0.35], [0.4, 0.85], [0.5, 1], [0, 1]]
    }
  ]
}
```

A bowl, its hollow 15 % above the bottom:

```json
{
  "id": "bowl",
  "name": { "en": "Bowl" },
  "size": [0.3, 0.3, 0.12],
  "group": "deco",
  "mount": "surface",
  "parts": [
    {
      "shape": "lathe", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "white",
      "profile": [[0, 0], [0.6, 0], [1, 1], [0.9, 1], [0.55, 0.15], [0, 0.15]]
    }
  ]
}
```

**Rounded box.** `round` is the radius of the rounded edges as a fraction of the part's shortest side, from `0.01`
to `0.5` (default `0.2`). At `0.5` the shortest side is fully round, like a bolster.

```json
{
  "id": "floor_cushion",
  "name": { "en": "Floor cushion" },
  "size": [0.6, 0.6, 0.15],
  "group": "seating",
  "room": ["living", "kids"],
  "parts": [
    { "shape": "rbox", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "cushion", "round": 0.4 }
  ]
}
```

A newer Home 3D shape in an older Home 3D is refused with `needs_update` (see below), so a pack that uses these
shapes needs a Home 3D version that knows them.

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
  - `group`: what the item is, which is its section in the library: `sofa`, `seating`, `table`, `storage`, `bed`,
    `kitchen`, `appliance`, `bath`, `lamp`, `media`, `office`, `tech`, `network`, `heating`, `energy`,
    `household`, `deco`, `tray`, `frame`, `vase`, `cushion`, `throw`, `candle`, `plant`, `outdoor`, `kids`,
    `sport`, `pets`, `vehicle`, `stairs` or `architecture`.
  - `room`: up to 12 rooms the item is meant for: `living`, `dining`, `kitchen`, `bedroom`, `kids`, `bath`,
    `office`, `hall`, `utility`, `garage`, `garden`, `hobby`, `conservatory`, `loft`. Empty means any room.
  - `tags`: up to 12 more search words (1 to 30 characters each).
  - `family`: groups variants of one thing (a table in three lengths) into one library card; `variant` (text by
    language, like `name`) labels the variant's chip.
  - `ikea`: the IKEA product name (1 to 40 characters, such as `"KALLAX"`). Searching for it finds the item as well
    as its readable name does; the readable name stays the item's label.

  Without these fields Home 3D sorts the item by its words and its pack id; it finds variants by a size at the end of
  the id (`table_160`) and by the numbers in the name.

  The groups and their library sections:

  | Group | Section | Group | Section |
  | --- | --- | --- | --- |
  | `sofa` | Sofas | `household` | Household |
  | `seating` | Seating (chairs, stools, benches) | `deco` | Decoration (rugs, mirrors, anything else) |
  | `table` | Tables | `tray` | Trays |
  | `storage` | Cabinets & shelves (wardrobes, chests of drawers) | `frame` | Frames & pictures |
  | `bed` | Beds | `vase` | Vases |
  | `kitchen` | Kitchen (units, worktops, sinks) | `cushion` | Cushions |
  | `appliance` | Appliances (cooker, hob, fridge, washing machine) | `throw` | Throws |
  | `bath` | Bathroom | `candle` | Candles |
  | `lamp` | Lights | `plant` | Plants |
  | `media` | TV & audio | `outdoor` | Garden & outdoors |
  | `office` | Office | `kids` | Kids |
  | `tech` | Tech & smart home (switches, sockets, sensors) | `sport` | Fitness |
  | `network` | Network (router, switch, access point, NAS) | `pets` | Pets |
  | `heating` | Heating & climate | `vehicle` | Vehicles |
  | `energy` | Energy | `stairs` | Stairs & railings |
  | | | `architecture` | Architecture |

  **Other words for a thing.** The library knows the common other words for many things, UK word first: an item
  named "Induction cooktop" is found by `hob`, a "Countertop" by `worktop`, a "Closet" by `wardrobe`, and the other
  way round. A pack needs no `tags` for these; use `tags` for words the library does not know. The list lives in
  `frontend/src/vocabulary.ts` (`SYNONYMS`), next to the group and room ids.

No other fields are allowed, in an item or in a part.

### 3D printers

An item whose id names a 3D printer (`3d_printer`, `3d_printer_enclosed`, `resin_3d_printer`, …) and is `electric`
shows the printer it is linked to. Link it to one entity of the printer's Home Assistant device, usually its print
status sensor; Home 3D finds the rest on the same device, whatever integration made it:

- while a print runs (or is paused), a ring on the item's top fills with the print's progress (a sensor in `%` whose
  name says progress);
- its `glow` parts shine while the printer's light (its chamber light) is on, in that light's colour;
- a tap opens the printer's camera when its device has one (an own tap action set in the editor still wins).

`theovencook.core/3d_printer` is one; see its file for a model to start from.

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
A pack installed this way whose id is one of the packs that ship with Home 3D follows the same rule as an imported
copy (see below).

## Packs that ship with Home 3D

Our own library comes with the integration in `custom_components/home_3d/bundled_packs/`, one folder per pack
(`theovencook.core` for now). Home Assistant reads these folders from its own disk when the integration starts, so
they are there on a fresh install without network access and nothing has to be imported. They are checked like an
imported pack; a bundled pack that does not check is logged and left out.

- A bundled pack shows under **Extensions** with "Comes with Home 3D" and cannot be removed. It is not part of a
  backup: the next version of Home 3D brings it again.
- An imported pack with the same id and at least the same `release` takes the bundled one's place, whether it was
  imported from files or installed from a GitHub URL (for example a newer `theovencook.core` from
  `https://github.com/theovencook/home-3d-packs/tree/main/theovencook.core`). An older copy is kept but the bundled
  one is shown. Removing the copy brings the bundled one back.

### Adding an item to theovencook.core

Every item is one file, in the folder of its library section: `theovencook.core/<group>/<item id>.json`, where
`<group>` is one of the `group` values above (`sofa`, `seating`, `table`, `storage`, `bed`, `kitchen`, `lamp`,
`tech`, `pets`, …) and the item's `group` field says the same. There is no index to edit: the folder is read as it
is. Every core item has an English name.

```
custom_components/home_3d/bundled_packs/theovencook.core/
├── pack.json
├── LICENSE
├── sofa/
│   └── loveseat_simple.json
├── lamp/
│   └── floor_lamp_simple.json
└── tech/
    └── desktop_tower_simple.json
```

`tests/test_core_pack.py` checks every bundled pack and every item file against the schema and that each item sits
in the folder of its `group`; `frontend/src/core-pack.test.ts` checks that each item shows in the library under that
section. Adding an item does not touch `pack.json`; its `release` goes up once per Home 3D release that changes the
pack, so installs holding an older imported copy pick up the bundled one.

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
