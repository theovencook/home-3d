# Racks

A rack in Home 3D is an ordinary item with a `rack_frame` spec, and the gear in it is saved on the placed item. You can
draw a comms cabinet, fill it with the switches and the UPS you really own, link each box to its Home Assistant device
and read the temperature or the UPS battery off a glass card above it.

## What a rack is

- **A rack frame** is a pack item with a `rack_frame` spec: its height in U (1 to 60), its form (`frame2`, `frame4`,
  `cabinet`, `wall_frame`, `wall_cabinet`), 19 or 10 inch, and optionally a door. The spec is in
  [packs.md](packs.md#racks).
- **Gear** is a pack item with a `rack` spec: its height in U (0 to 60), its width (full, half, third), its depth and
  whether it is a shelf. See [Rack-mount gear](packs.md#rack-mount-gear).
- **The placed rack** keeps a list of slots (`rack.slots`): which gear, at which U, in which column, on which face.
  Nothing new is added to the plan format: the gear's recipes are copied into the plan like those of any other item,
  so a house keeps its look when a pack changes.

## Placing a rack

Pick a rack from the library (search "rack" or open the IT & network group). It places, moves and rotates like any other
item. Floor racks stand on the floor, wall racks hang at a height you can change, desktop racks stand on a surface. A
rack's item panel has a **Rack frame** picker that swaps in another rack of the same kind and keeps the gear; gear that
no longer fits is listed with the reason and is not drawn until you move it.

The bundled racks are 10-inch mini racks (4U, 6U, 8U), 10-inch and 19-inch wall frames, wall cabinets, desktop frames,
floor cabinets and open frames, and an AV rack. The 10-inch wall frames (4U, 6U, 9U) double as mini-rack wall mounts, the
19-inch wall frames (6U, 9U, 12U) as wall brackets. All of them, with the source of every size, are in
[rack-frames.md](rack-frames.md).

## Filling a rack

Select a placed rack and press **Edit rack**. The sheet shows the U positions numbered down both sides.

1. Pick gear from the list.
2. Tap the lowest U it should take.
3. Tap gear in the rack to move it up or down a U, to another U, to rename it or to delete it.

Gear that would overlap other gear, stick out of the rack or does not fit is refused, and the clash is marked in red.
The head of the sheet shows U used and free and the estimated watts (a minimum, shown as "≥ 93 W", when some gear has no
figure).

### Faces, columns, 0U and shelves

- **Front and rear.** A toggle in the sheet head switches between the faces. Full-depth gear takes both. A 2-post rack
  has no rear rails.
- **Half and third width.** Several small boxes share one U side by side, one column each. Tap the column you want.
- **0U.** A vertical PDU stands in a narrow lane beside the rails and takes as many U as it is tall.
- **Shelves.** A shelf takes whole U; loose gear (a hub, a mini PC, a modem) stands on its tray, side by side from the
  left, as long as it fits the shelf's height, depth and width.

The rules in full, and the slot fields, are in [packs.md](packs.md#rack-mount-gear). The gear catalogue is in
[rack-gear.md](rack-gear.md).

## Looking at a rack

- **Front view.** A rack with gear shows a drawing of its front in the item panel: every U numbered, each piece drawn
  from its own parts with its name across it. In the 2D view, tap a rack with gear for the same drawing, sized for a wall
  tablet.
- **3D.** Gear is drawn in the rack, a tick on the rails at every U. Far away, gear shrinks to plain boxes; it gets its
  detail when the camera comes near.

## Linking gear to Home Assistant

Choose gear in the sheet and pick the Home Assistant device behind it. Its status entity and up to eight useful values
come along (buttons, switches, updates and per-port entities are left out), and the gear takes the device's name if it
has none. You can set the status entity and further links by hand; a slot links at most 16 entities.

Linked gear shows a status LED in 3D, in the front view and in the sheet: green online, amber warning (on battery, a
problem sensor on, a linked entity unavailable), red offline. In the view, tap the gear for its status and values, hold
it for the device's more-info dialog. The LEDs are one small mesh apart from the rack, so a state change does not rebuild
the rack.

## The rack card

A rack with linked gear gets a glass card above it in 3D, in the look of the energy cards. Folded it shows the devices
online and the first values; a tap unfolds every value with the device it comes from and a sparkline of the last hours.

Without any choice the card shows, at most, the UPS load, battery and runtime, PoE watts, the hottest temperature,
devices online, a volume's used percentage and one throughput figure. In the editor, **Card values** lets you tick
up to eight values from the rack's linked entities, per device, plus two figures over the whole rack: **Hottest** and
**Devices online**. The card can be switched off for a view in the card's options (`rack_cards`).

## Voice

With voice control on (the microphone button), Home 3D answers questions about a rack from the same values the card
shows, and flies to the rack:

- "How hot is the rack?": the hottest gear and its temperature.
- "What's the UPS battery?" / "How long does the UPS last?": the battery or runtime of the UPS.
- "Which devices in the rack are online?": "2 of 3".
- "How is the rack doing?": a short summary of the card.

A rack is meant by the word "rack" (or cabinet), by its own name or by a piece of gear it holds, so name the rack when
there are several ("how hot is the garage rack?"). If the rack has nothing linked for what you asked, it says so;
"hottest" and "online" work even when the card does not show them. The answers come from the card's values, not the
whole of Home Assistant. The sentences work in German and English, with the main words of a few other languages;
anything that is not a question about a rack goes on to Assist. Switching or restarting gear is never done by voice
here.

## Performance

A rack's gear is drawn as one geometry per rack with a plain far version, a full rack costs about 12 triangles a piece
at a distance. Selecting a rack in the editor costs about twice as much as an ordinary item (the rack form and the
front view). Numbers and method are in [performance.md](performance.md#racks-121).

## Catalogues

- [rack-frames.md](rack-frames.md): every bundled rack with its size and source.
- [rack-gear.md](rack-gear.md): every bundled piece of gear with its U, size, power and source.

Both lists are generated (`node tools/rack-frames.ts`, `python tools/rack_gear.py`) from the code; edit the list, not
the JSON files. To make your own racks and gear, see [packs.md](packs.md#racks).
