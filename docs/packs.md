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
theovencook.living/
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
  "id": "theovencook.living",
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

An item's full id is the pack id, a slash and the item id: `theovencook.living/bar_stool`. The item id is unique
within its pack (1 to 40 characters: lower-case letters, digits, `_`, `.`, `-`), so the full id is unique across
packs. In a saved plan, an item from a pack is stored with the furniture type `pack:theovencook.living:bar_stool`.

## Placed items keep their recipe

The plan keeps a copy of the recipe of every pack item placed in it, in `recipes`, by furniture type. There is one
copy per item, however often it is placed:

```json
{
  "recipes": {
    "pack:theovencook.living:bar_stool": {
      "pack": "theovencook.living",
      "item": "bar_stool",
      "release": 1,
      "hash": "sha256:<hash of the recipe>",
      "commit": "<the commit its files came from, only for a pack installed from GitHub>",
      "recipe": {
        "id": "bar_stool",
        "name": { "en": "Bar stool" },
        "size": [0.42, 0.42, 0.75],
        "parts": [{ "shape": "cyl", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "wood" }]
      }
    }
  }
}
```

The views draw a placed item from the plan's copy, so:

- removing a pack leaves its placed items looking exactly as before;
- a newer release of a pack does not change items already placed; an item placed again later takes the same copy.
  Only updating the item replaces its copy (see [Updates](#updates)).

Home Assistant fills the copies in: when an item is placed (on save), and once for plans saved before copies
existed, from the packs installed then. A save that sends no copies (an older frontend, a script) keeps the copies the
plan has. Copies of items no longer in the plan are dropped. `hash` is the SHA-256 of the recipe's JSON with sorted
keys, so it can be compared with the installed item.

## How the library loads

The browser never gets every recipe at once. Two websocket commands serve the library:

- `home_3d/packs/list` returns every offered pack (bundled, imported, your own items) with its fields, a `hash` of its
  items and an index of the items: every item field except `parts` and `symbol`, without the defaults the check
  fills in (`mount: "floor"`, `electric: false` and the like). That is enough to browse, search (readable and IKEA
  names, tags, UK synonyms), filter and size items. A pack's imported files stay in Home Assistant; only where it came
  from (`source.origin`) is listed. Your own items come whole, since the item editor works on them.
- `home_3d/packs/items` with `pack_id` and `items` (a list of item ids; leave it out for all) returns those items with
  their recipes, plus the pack's `release` and `hash`. Ids the pack does not have are left out.

The editor fetches a recipe when it first draws or places the item (a library card's picture, the hover preview,
adding the item), gathering the requests of a moment into one per pack, and keeps it while the pack's `hash` stays.
A view that only shows the plan, such as a wall tablet or a dashboard card, fetches no library at all: placed items
draw from the plan's recipe copies. The editor and the extensions page load the library when they open.

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
  `dark`, `glass`, `plant`, `pot`, `accent`). Roles follow the look of the plan, so prefer them. In the realistic
  look each role also has a material (`fabric` and `cushion` fabric, `metal` metal, `glass` glass, `white` gloss, the
  rest matt), which an editor can change per placed item in the item panel (matt, gloss, fabric, glass, metal or
  rattan weave); a `#rrggbb` part is matt.
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
  (`theovencook.living/tv_ambilight_55`). On a speaker without a screen it is the light ring, lit while it plays.
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
- `rack_frame`: the item is an empty rack (19 or 10 inch, its height in U); see [Racks](#racks).
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

`theovencook.makers/3d_printer` is one; see its file for a model to start from.

### Camera models

An item tagged `security camera` is a camera model: the editor offers it under *Camera model* for every placed camera.
It is only the camera's look; the camera keeps its live view, field-of-view wedge and actions. Make the lens look
along +z, like any item's front. A `ceiling` item (a dome, a turret) moves the camera to the ceiling and a `wall`
item to the wall, with the camera's pin in the middle of the item; the wedge keeps its angle, reach and tilt.

A tag with a number in it names the model as Home Assistant's device registry reports it, such as `g4 pro` or
`rlc-810a`. A camera whose device reports that model (with or without UniFi's `UVC` prefix, or a longer name that
starts with it, like `G5 Turret Ultra` for `g5 turret`) shows it as the model *the device reports*, and a camera placed
from now on gets that look straight away. Cameras already in the plan keep their look until one is chosen. The
UniFi cameras in `theovencook.office/tech/` (`unifi_g3_flex`, `unifi_g4_pro`, `unifi_g4_dome`, …) are examples.

### Energy devices

An `electric` item takes part in the energy flow by its `family`, like the built-in meter, inverter, home battery
and wallbox. The editor then offers the same links as for the built-in one, and the cables run to and from it:

| `family` | Plays the part of | Links |
| --- | --- | --- |
| `consumer_unit`, `energy_monitor` (a CT clamp box), `meter` | the meter: where the cables meet, the grid comes in | power (the grid, + = import), export |
| `inverter` | an inverter: the solar fields' and panels' cables end here, it feeds the meter | power (its solar output) |
| `home_battery`, `power_station` | a battery: on the nearest inverter of its floor, else on the meter | power, charge, state of charge |
| `ev_charger` | a wallbox: its cable has its own colour | power, status |
| `solar_panel` | a solar panel placed as an item (a garden array, a balcony panel): a cable to the nearest inverter of its floor, else to a battery there, else to the meter | power (its own output, optional) |

A `meter` tagged `gas` or `water` is a gas or water meter and plays no part. Every other electric item (a smart plug,
a heat pump) is a consumer once it has a power sensor. The meter, inverter, battery and solar panel are never
consumers, even when their power sensor is placed on its own as well: a discharging battery is a source (the green
share of the cables' colour), a charging one draws through its own cable. A consumer inside a circuit that has its
own meter (a circuit monitor's channel placed in the plan) names that circuit's power sensor under *Inside circuit*:
it keeps its own watts and its own branch, but the circuit's cable and the house total count those watts only once. Plans made before this
existed keep counting such a plug twice until its circuit is set on the item, and the editor says so under every device that has a power
sensor but no circuit. A hot-water cylinder whose id starts with `hot_water_cylinder`
also takes a `water_heater` entity. `theovencook.devices` has one of each in `energy/` and `heating/`.

### Smart-home devices

`theovencook.devices` holds models of smart-home devices. A few `family` values decide what the item's Device field
offers (the entities of these families are listed by their kind):

| `family` | Device field offers |
| --- | --- |
| `entity_marker` | any entity: a sensor or switch marker that stands for a device without a model |
| `thermostat` (also `radiator_trv`, `radiator_valve`) | `climate` entities |
| `video_doorbell` (any item tagged `doorbell` or `camera`) | `camera` entities, and the device's switches |
| `sensor`, `water_meter`, `smoke_alarm` | `sensor` and `binary_sensor` entities |
| ids ending `gas_boiler`, `combi_boiler`, `heat_pump_indoor` … | `water_heater` and `climate` entities |

### Roof window blinds

An item whose id starts with `roof_window` and ends with `_blind` (`roof_window_mk04_blind`) and is `electric` has a
blind that follows a cover, like a motorised curtain: link it to the blind's cover (or a switch that drives it). Its
`fabric` parts, other than cylinders, are the blind: lofts that lie on the slope from the window's low edge up to its
high edge. Open, the blind runs up the slope to its top edge; closed, it covers the pane. The run time, a live
position sensor and the other direction are set like a curtain's.

### Architecture items and openings

Doors, windows, garage doors and roof windows that cut a wall or a roof are **openings** and **roof windows** of the
plan, not library items; they follow contacts and covers. The architecture items in `theovencook.household` are for what
those cannot show, or for places without a wall or a roof to cut:

| Item | In a wall or roof of the plan | The library item |
| --- | --- | --- |
| Roof window with blind | A roof window on a roof face: blind, window motor, contact | A window on a sloped ceiling the plan has no roof for (a loft room); its blind follows a cover |
| French doors | The opening's **French doors** preset | Doors for a garden room, a summerhouse or a shed drawn from items |
| Up-and-over garage door | A garage door opening with the style **Up-and-over door**: it tilts up into a canopy with its cover | The door's look for a garage drawn from items |
| Bay window | Draw the room's outline with the bay and put a window on each side | A bay that stands in front of a window opening |
| Chimney breast, half-wall with cap | A free wall can be low, but has no cap | The breast (plain, with an open fireplace or a mantelpiece) and the capped half-wall |

### Racks

An item with a `rack_frame` is an empty 19-inch or 10-inch rack. Its `parts` draw the frame like any other item;
the spec says how many rack units (U) it has and where they sit, so Home 3D can mark them and fit rack-mount gear
into them (see "Rack-mount gear" below). It places, moves and rotates like any other item.

```json
{
  "id": "wall_cabinet_6u",
  "name": {"en": "Wall cabinet 19-inch 6U"},
  "size": [0.6, 0.45, 0.37],
  "group": "network",
  "mount": "wall",
  "wall_y": 1.2,
  "rack_frame": {"u": 6, "form": "wall_cabinet", "door": "glass"},
  "parts": [
    {"shape": "box", "x": 0, "z": -0.02, "w": 1, "d": 0.96, "y": 0, "h": 1, "color": "dark"},
    {"shape": "box", "x": -0.389, "z": 0.35, "w": 0.026, "d": 0.033, "y": 0.14, "h": 0.72, "color": "metal"},
    {"shape": "box", "x": 0.389, "z": 0.35, "w": 0.026, "d": 0.033, "y": 0.14, "h": 0.72, "color": "metal"}
  ]
}
```

| Field | Value | Default |
| --- | --- | --- |
| `u` | Height in rack units, a whole number from 1 to 60. 1U is 44.45 mm. | required |
| `form` | `frame2` (2-post relay rack), `frame4` (4-post open frame), `cabinet` (4-post cabinet), `wall_frame` (wall-mounted frame) or `wall_cabinet` (wall-mounted cabinet), as NetBox names them. | required |
| `width` | `19` or `10` (inches). | `19` |
| `door` | A cabinet's front door: `none`, `glass`, `mesh` or `solid`. Only a cabinet has one. | `none` |
| `start_u` | The number of the lowest U, 1 to 100. | `1` |
| `desc` | `true`: the numbers run from the top down. | `false` |
| `mount_depth` | Metres from the front rails to the rear rails, 0.05 to 1.5: the deepest gear that fits. | from the item's depth |
| `bottom` | Metres from the item's bottom to the bottom of its lowest U (a plinth, castors), 0 to 2. | the U space centred in the item's height |

The spec must fit its item, or the pack is refused (`invalid_content`):

- the panels fit the width: 482.6 mm for 19 inches, 254 mm for 10 inches;
- `bottom` plus `u` x 44.45 mm fit the height, and `mount_depth` the depth;
- a `wall_frame` or `wall_cabinet` has `"mount": "wall"`; any other form stands on the floor or a desk (`floor` or
  `surface`).

A form, width or door this version does not know yet asks for an update (`needs_update`).

The rails sit centred across the width, 450.85 mm apart for 19 inches (222.25 mm for 10 inches). Gear goes in from
the front (+z): the front rails stand 80 mm behind a floor cabinet's front, 60 mm behind a wall cabinet's, 20 mm behind
a wall frame's and at the front of an open frame; a 2-post rack holds gear on its posts in the middle of its depth. The
3D view draws a tick on both front rails at every U (a longer one every fifth). A rack resized in the editor keeps its
number of U and its U height; squeezed below its U space, the units shrink to fit.

In the plan, a cabinet with a door shows the door's swing as a dashed quarter circle in front of it (hinged on the
left, as wide as the cabinet), so the room it needs to open stays clear.

The bundled racks in `theovencook.it` (`network/rack_*.json`) are written by `node tools/rack-frames.ts` from the list
in `frontend/src/rack-catalogue.ts`, which draws each frame from its spec (`rackFrameParts` in
`frontend/src/rack-frame.ts`); a test fails while a file differs. To add a bundled rack, add it to that list and run
the tool. The catalogue (30 racks) and where each size comes from are in [rack-frames.md](rack-frames.md). Other packs may draw their racks any way they like.

### Rack-mount gear

An item with a `rack` spec is rack-mount gear: a switch, a patch panel, a blanking plate. It can still be placed on
its own like any item, and it can go into a rack: in the editor, choose a placed rack and press **Edit rack**. The
sheet shows the rack's U positions numbered down both sides; pick gear from the list and tap the lowest U it should
take. Tap gear in the rack to move it a U up or down, move it to another U, rename or delete it. Gear that would
overlap other gear, stick out of the rack or not fit is refused, with the U and the gear in the way in red.

A rack with gear shows a **front view** in its item panel: the rack with every U numbered on both sides and each piece
of gear drawn from its own parts at its U, with its name across it. In the 2D view, tap a rack with gear to see the
same drawing (sized for a wall tablet: 1U is at least 24 px tall). A rack that is linked to a device keeps its tap
for that device.

```json
{
  "id": "switch_24_1u",
  "name": {"en": "Switch 24-port 1U"},
  "size": [0.4826, 0.25, 0.0437],
  "rack": {"u": 1},
  "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "dark"}]
}
```

| Field | Value | Default |
| --- | --- | --- |
| `u` | Height in rack units, a whole number from 0 to 60. 0: a vertical PDU, which stands in a side lane beside the rails, as many U long as it is tall. | required |
| `width` | `full`, `half` or `third` of the rack's width. Half- and third-width gear share a U side by side, a column each. | `full` |
| `depth` | `half` (on the face it is mounted on) or `full` (it takes the front and the rear face). | `half` |
| `inch` | The rack width it is made for: `19` or `10`. It only goes into racks of that width. | `19` |
| `shelf` | `true`: a shelf, at least 1U. Loose gear (a hub, a mini PC, a modem) stands on it. | `false` |

Draw gear with its front at +z and its `size` the real box: across the ears (482.6 mm for 19-inch gear, about
220 mm for half width), its depth and its height (a 1U box is 43.7 mm). In a rack it is drawn at its own size in its
column, centred in its U; gear deeper than the rack's mounting depth does not go in. A shelf is drawn from the bottom
of its lowest U; loose gear stands on its 4 mm tray, side by side from the left, its front at the shelf's front.

Any item may give its estimated typical power draw in `watts` (a number, 0 to 100,000). The rack sheet adds up the
watts of a rack's gear, shelves' loose gear included; when electric gear has no `watts` the total is shown as a minimum ("≥ 93 W").

The bundled `theovencook.it` pack has six starters: `rack_switch_24_1u`, `rack_patch_panel_24_1u`, `rack_blank_1u`,
`rack_switch_8_half_1u` (half width), `rack_pdu_vertical_0u` (0U, 980 mm: for floor cabinets) and `rack_shelf_2u`.

The rest of the bundled gear (about 50 more: switches 5-48 ports standard and PoE, the UniFi switch range, UDM Pro / SE / Pro Max, UNVRs, firewalls, patch panels, blanks, brush and cable panels, shelves, UPS, PDUs, servers and rack NAS) is written by `python tools/rack_gear.py`; its sizes, power figures and sources are in [rack-gear.md](rack-gear.md).

The gear is saved on the placed rack (`rack.slots`). Each slot has:

| Field | Value |
| --- | --- |
| `id` | Unique within the rack. |
| `type` | The gear's item type. |
| `u` | Its lowest rail position counted from the bottom, 1 = the lowest U whatever the rack's numbering. Loose gear: its shelf's. |
| `name` | Its own name (optional). |
| `col` | Its column: 0 or 1 for half width, 0 to 2 for a third, from the left; for 0U gear its lane, 0 left, 1 right. Default 0. |
| `face` | `front` (default) or `rear`. A 2-post rack has no rear. Full-depth gear takes both faces whichever it names. |
| `on` | Loose gear only: the id of the shelf slot it stands on. |

The rules: gear takes whole U from its lowest one up; two pieces clash when they share a U, a face and some of the
width (0U gear only clashes with 0U gear in the same lane and face, loose gear only with the room left on its
shelf). Gear sticks out when it runs past the top or the bottom, or has no such column or lane. Loose gear must be no
taller than the shelf's U less the tray, no deeper than the shelf, and all loose gear on a shelf together no wider
than the opening between the rails (its half or third for a narrower shelf).

The editor's **Edit rack** sheet shows the front or the rear (a toggle in its head, beside U used / free and the
estimated watts). Half- and third-width gear goes into the column under the pointer; 0U gear goes into the narrow
lanes either side of the U numbers. Choose a shelf to put loose gear on it. A rack's item panel has a **Rack frame**
picker: another rack of the same kind (wall or floor) takes the rack's place at its own size, and the gear stays; gear
that no longer fits is listed with why (in the panel and in the sheet) and is not drawn until it is moved.

The plan keeps a copy of each gear's recipe like any placed item's, so a rack shows its gear without the pack. Home
Assistant refuses an editor's save that breaks the rules above (`invalid_rack`), except gear left misplaced by a
change of the rack frame (another type or size) in that save, and breaks the plan had already.

## What the loader checks

A pack is refused, with a message that names the file and the fault, when:

| Check | Limit | Error code |
| --- | --- | --- |
| The folder has no `pack.json`, or its `format` is not `home3d-pack` | | `not_a_pack` |
| `pack.json` has no `licence` | | `no_licence` |
| A file is not `pack.json`, an item `.json` or a readme/licence text; a path leaves the folder or breaks the naming rules | | `not_data` |
| Any text contains a link (`http:`, `https:`, `www.` and the like) | | `not_data` |
| Too many items | 1,000 per pack | `too_many_items` |
| A file is too large | 50,000 characters | `too_large` |
| The whole pack is too large | 3,000,000 characters | `too_large` |
| A file is not JSON, breaks the schema, or an item id does not match its file name or is used twice | 60 parts and 40 symbol shapes per item | `invalid_content` |
| A value this version does not know yet (a newer shape, for example) | | `needs_update` |

The size limits keep a pack within one websocket message. A larger collection is split into several packs.

## Checking and importing

1. Write the pack folder.
2. Check it: `python tools/fp3dpack.py validate path/to/theovencook.living` (needs the Python package `voluptuous`).
   It runs the same checks as Home Assistant and prints the pack's id, item count, release and licence.
3. Import it in Home Assistant: **Extensions** → **Import a pack folder …**, then pick the pack folder (or a
   repository folder that holds several packs).

The plan keeps working when a pack is removed: its placed items keep their look from the plan's copies of their
recipes (see [Placed items keep their recipe](#placed-items-keep-their-recipe)). Only items placed before copies
existed, whose pack was already gone then, show as plain boxes.

## Installing from GitHub

An editor can also paste a GitHub URL into **Extensions** → **Install from GitHub**:

- a repository with the pack at its root: `https://github.com/<owner>/<repo>` (the default branch);
- a pack folder inside a repository: `https://github.com/<owner>/<repo>/tree/<branch or tag>/<folder>`, for example
  `https://github.com/theovencook/home-3d-packs/tree/main/theovencook.living`;
- a release: `https://github.com/<owner>/<repo>/releases/tag/<tag>`.

Home Assistant fetches the pack, not the browser, and only from `api.github.com` (the repository, the commit and its
file list) and `raw.githubusercontent.com` (the files, at that commit). The repository must be public. Before
anything is downloaded the file list is checked: the names (as above), at most 1,010 files in the folder and the size
of each file; hidden files and folders and the readme and licence texts are not fetched. The files then go through
the same checks as a folder import. A repository root that holds several packs is refused with the URLs of its pack
folders. Branch names that contain a `/` cannot be told from the folder and are not supported.

| Problem | Error code |
| --- | --- |
| Not a URL of a GitHub repository, folder or release | `bad_url` |
| The repository (or branch, tag, folder) does not exist or is private | `not_found` |
| GitHub cannot be reached, refuses (rate limit) or redirects elsewhere | `fetch_failed` |

The installed pack keeps where it came from in `source.origin`, so an update check knows where to look:

```json
{
  "type": "github",
  "url": "https://github.com/theovencook/home-3d-packs/tree/main/theovencook.living",
  "owner": "theovencook",
  "repo": "home-3d-packs",
  "ref": "main",
  "default_branch": false,
  "folder": "theovencook.living",
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

## Updates

Packs installed from GitHub are checked for new releases on a schedule set under **Extensions** → **Pack updates**:
daily, weekly (on a chosen day) or monthly (on the 1st), at a chosen time, or never (default: daily at 04:00). An
editor can also press **Check now**.

- A check reads the commit the pack's `ref` points at. When it is the installed commit, nothing more is fetched.
  Otherwise it reads only the pack's own `pack.json` there and compares its `release` with the installed one. A
  repository with a folder per pack (like `theovencook/home-3d-packs`) changes when any pack in it changes, so the
  release of the pack's folder decides, not the commit: **publishers raise `release` with every change to a pack**.
- A higher release is installed into the library. Placed items keep their recipe copies: the **Pack updates**
  section lists every placed item whose installed item differs from its copy, with the release it has and the one
  it would get, and **Update** replaces its copy (**Update all** does every listed item).
- With **Update placed items automatically** on (off by default), new releases are applied to placed items without
  asking: after a check, an import or an install, when the setting is switched on, and when a Home 3D update brings
  a newer bundled pack.
- A check never installs an older release. Importing or installing an older release than the one the library offers
  asks first (the backend refuses with `older_release`; the page asks and sends it again with `confirm: true`).
- **Pin release** keeps a pack where it is: checks skip it, auto-update leaves its placed items alone (they can still
  be updated one by one), and importing another release of it asks first (`pinned`).
- **Roll back to v…** puts back the release the pack had before its last update, together with the placed items that
  had taken that update, and pins the pack so the next check does not bring the update back. Unpin it to take
  updates again. One step back is kept per pack.
- The household's own items (`household.custom`) are never listed: placed copies follow every edit at once. Bundled
  packs update with Home 3D itself; their placed items follow the auto-update setting like any other pack's.

The settings, pins, previous releases and last check results are kept in `.storage/home_3d.pack_updates`.

## Packs that ship with Home 3D

Our own library comes with the integration in `custom_components/home_3d/bundled_packs/`, one folder per pack
(`theovencook.living`, `theovencook.bedroom`, `theovencook.kitchen-bath`, `theovencook.office`, `theovencook.it`, `theovencook.decor`, `theovencook.outdoor`, `theovencook.household`, `theovencook.devices`, `theovencook.makers` and `theovencook.ikea-uk`; the former `theovencook.core` was split into the themed ones and retired, #111). Home Assistant reads these folders from its own disk when the integration starts, so
they are there on a fresh install without network access and nothing has to be imported. They are checked like an
imported pack; a bundled pack that does not check is logged and left out.

- A bundled pack shows under **Extensions** with "Comes with Home 3D" and cannot be removed. It is not part of a
  backup: the next version of Home 3D brings it again.
- An imported pack with the same id and at least the same `release` takes the bundled one's place, whether it was
  imported from files or installed from a GitHub URL (for example a newer `theovencook.living` from
  `https://github.com/theovencook/home-3d-packs/tree/main/theovencook.living`). An older copy is kept but the bundled
  one is shown. Removing the copy brings the bundled one back.

### Adding an item to a bundled pack

Every item is one file, in the folder of its library section: `<pack id>/<group>/<item id>.json` (pick the pack from the table below), where
`<group>` is one of the `group` values above (`sofa`, `seating`, `table`, `storage`, `bed`, `kitchen`, `lamp`,
`tech`, `pets`, …) and the item's `group` field says the same. There is no index to edit: the folder is read as it
is. Every bundled item has an English name.

```
custom_components/home_3d/bundled_packs/theovencook.living/
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

### Moving an item to another bundled pack

An item's type names its pack (`pack:<pack id>:<item id>`), so moving an item file into another pack folder changes
the id every placed copy refers to. Every move goes into `custom_components/home_3d/moved_items.json`, old type to
new type (the item id may change too):

```json
{
  "moved": {
    "pack:theovencook.core:loveseat_simple": "pack:theovencook.living:loveseat_simple"
  }
}
```

- Plans migrate wherever they come in: when a home loads (written back once, at the same revision), when a plan is
  saved or imported, when a backup or a restore point is restored and when a home is added (the sample home too).
  Placed items, parking spots' vehicles and the plan's recipe copies take the new ids; a copy keeps the recipe the
  plan showed, with its release reset to 1 (the old pack's release says nothing about the new pack).
- An old id still resolves: the library lists the old ids of the items that moved into each pack (`aliases`), so a
  browser draws an old plan file before it is saved, and the editor's plan import takes the new ids at once.
- A pin follows the items into their new packs. Rolling back a pack that items moved out of also rolls back the moved
  placed items that had taken its update.
- A pack all of whose items moved away can be retired: delete its folder. Its pin, rollback entry and last check are
  dropped; plans keep working through the table. Never remove an entry from the table.
- A later move of the same item adds another entry (`a -> b`, then `b -> c`); the chain is followed.
- `tests/test_moved_items.py` checks that every entry leads to an item a bundled pack has, and that no bundled pack
  still offers an old id.

### The themed bundled packs

The former core pack (847 items) was split by part of the home (#111) so every pack stays under the 1000-item limit
and people can tell the collections apart. Items kept their ids; `moved_items.json` holds one entry per item. The packs
are laid out alike (`<pack>/<group>/<item id>.json`, MIT, loaded from disk, offline):

| Pack | Name in the library | What goes in it |
|---|---|---|
| `theovencook.living` | Living | sofa, seating, table, lamp, media |
| `theovencook.bedroom` | Bedroom & kids | bed, kids, storage |
| `theovencook.kitchen-bath` | Kitchen & bath | kitchen, appliance, bath |
| `theovencook.office` | Office & tech | office, tech (cameras, computers; not 3D printers) |
| `theovencook.it` | IT & network | racks, switches, routers, NAS, access points, UPS |
| `theovencook.decor` | Decor & plants | deco, frame, candle, vase, tray, cushion, throw, plant |
| `theovencook.outdoor` | Garden & outdoor | outdoor, sport, vehicle |
| `theovencook.household` | Household & building | household, architecture, pets |
| `theovencook.makers` | Makers | 3D printers (FDM and resin), wash and cure stations, maker and workshop kit |
| `theovencook.devices` | Smart-home devices | sensors, switches, thermostats, doorbells, boilers, meters, alarms, smart speakers, radiators and other device models |

Printers in the makers pack work like any other printer item: an item whose id contains `3d_printer` and is
`electric` shows the progress ring, chamber light (a part with `glow`) and camera of the Home Assistant device it is
linked to (see "3D printers" above), whichever pack it comes from. Desk and table lamps and fires are furniture, not
devices, and do not go in the devices pack.

The library has a row of pack chips ("All packs", then one per installed pack) above the filter chips, so the library
can be narrowed to one pack; the search also finds an item by its pack's name ("makers", "devices").

### The IKEA UK pack

`theovencook.ikea-uk` holds models of IKEA UK bestsellers, laid out like the core pack
(`theovencook.ikea-uk/<group>/<item id>.json`). Each item has a readable English `name` ("Cube shelving unit 2x4")
and the IKEA product name in `ikea` ("KALLAX"); searching either finds it. The models are our own, built from the
shapes above with sizes read from IKEA UK product pages; no IKEA pictures or 3D files are used. The trademark note is
in the repository's `NOTICE`.

- Every size, layout and left/right version is its own item, grouped into one library card by `family`.
- Colourways are not separate items: the parts are drawn in colour roles (the white carcass of a KALLAX in `white`,
  a walnut veneer in `wood`), and a placed item takes its colourway from the colour presets in the item panel
  (white gloss, black-brown, white stained oak, oak, walnut, birch, pine, acacia, anthracite, …). The colourways IKEA
  sells are listed in the item's `tags`, so "kallax black-brown" finds it. This keeps the pack under the 500-item
  limit for its 200 models.
- Kitchen cabinets (METOD, ENHET) come without a worktop, as in the shop, and carry items on top: put a worktop
  (SÄLJAN, KARLBY) on a run of them and a hob or an inset sink on that. Wall cabinets hang with their top at 2.20 m;
  integrated appliances (RENGÖRA, TVÄTTAD) show the kitchen front they hide behind. KNOXHULT kitchens are whole.
- The models and their batches are tracked in `docs/ikea-uk-models.md`.

## Publishing the packs

Our packs are published together in one public repository, [`theovencook/home-3d-packs`](https://github.com/theovencook/home-3d-packs),
with one folder per pack. The bundled folders in this repository stay the source: Home 3D ships them for offline
use, and the packs repository is a generated copy so other installs can add or update a pack by URL.

1. Check out the packs repository next to this one (`git clone https://github.com/theovencook/home-3d-packs`).
2. Run `python tools/publish_packs.py path/to/home-3d-packs`. It checks every bundled pack with the same schema and
   limits as `tools/fp3dpack.py` and refuses to publish anything if one fails, or if a pack changed since its copy
   in the checkout without a higher `release`. Otherwise it copies each pack folder
   over its copy in the checkout (files removed from a pack are removed there too) and writes `README.md` (the
   packs, their install URLs, licence), `NOTICE` (with the IKEA trademark note while the IKEA UK pack is in) and
   `LICENSE`. A pack that was retired (all its items are in `moved_items.json` and its folder is gone, like the former
   core pack) has its folder in the checkout replaced by a README pointing at the packs its items went to. Git data
   and folders of other packs in the checkout are not touched.
3. Commit and push the checkout. Every pack that changed needs a higher `release` in its `pack.json` (raise it in
   this repository; the script names the packs that need one): the update check compares each pack's own
   `release`, so a pack whose release did not move shows no update.
4. Tag a release in the packs repository (`vYYYY.MM.DD`, for example `v2026.10.29`) so a version can be named in a URL:
   `https://github.com/theovencook/home-3d-packs/tree/v2026.10.29/theovencook.living`.

After pushing, `python tools/check_pack_urls.py` fetches every pack by its folder URL from real GitHub with the
code Home Assistant uses and runs the update check against an older commit (needs the network and Home
Assistant's packages, so run it in the test virtualenv).

Each pack installs by its folder URL, for example
`https://github.com/theovencook/home-3d-packs/tree/main/theovencook.ikea-uk`. The repository URL alone is refused
with the list of folders to pick from.

## Your own items

Editors can build items in Home 3D itself: **Extensions** → **Your own items** → **Open the item editor**. The editor
adds parts from the shapes above on a live 3D picture, sets their colour roles and fixed measures, and gives the item
a name, a library section (`group`), rooms, search words (`tags`) and an optional IKEA name.

- A saved item is an item file like the ones in a pack folder, checked against the same schema.
- The items are kept in Home Assistant (`.storage/home_3d.custom_items`) and shared by everyone who uses it. The
  library shows them as the pack `household.custom` ("Your own items"), so a placed one is the furniture type
  `pack:household.custom:<item id>`. No imported pack may use that pack id.
- The item id comes from the name while the item is new and stays the same once it is saved, so placed copies follow
  later changes: placed copies of an item change with it when it is saved, with no update to accept. Removing an
  item leaves placed copies as they were last saved.
- **Export** downloads the item as `<item id>.json`. **Import item files …** takes one or more such files (exported
  on another install, or written by hand); an item whose id is already used either replaces that item or is kept
  beside it under a free id. **Paste an item** takes the same JSON pasted in; an LLM's answer can be pasted as it
  came, inside a code fence or a line of chat.
- **Copy instructions for an LLM** copies a short brief on this format (shapes, sizes, colour roles, fixed measures,
  the library's sections and rooms, the limits, and two core items as examples). Paste it into ChatGPT, Claude or
  Gemini, say what item you want, and paste the answer under **Paste an item**. The brief is written from the same
  lists and limits the backend checks (`frontend/src/item-format.ts`, held equal to `packs.py` by a test), so it
  follows this page as the format changes.
- Home 3D's own backup file carries the custom items as well.

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
