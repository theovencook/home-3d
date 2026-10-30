# Home 3D

Home 3D is a Home Assistant integration that lets you draw your home as a floor plan and control it in 3D. It adds a
sidebar panel with a plan editor and a live 3D view, plus a dashboard card (`custom:home-3d-card`).

- Plan editor inside Home Assistant: floors, rooms, walls, doors, windows, stairs, roofs, outdoor areas and solar fields.
- Live 3D view: lights, covers, doors, cameras, sensors and warnings shown in the room they belong to.
- Live room effects in 3D and 2D: a wet leak sensor turns its room's floor red until it is dry, motion lights the room
  for a short time (30 s by default), radiators and hot-water cylinders shade from cold blue to warm red with their
  temperature. Sensors are found from each room's area and placed devices; a room or item can name its own. Times
  and temperature ranges are in the ⚙ settings.
- Read-only 2D plan of the same building, for dashboards and wall tablets: device states, the same tap, hold and
  double-tap actions as in 3D, camera pictures from the plan. Switch with the 2D/3D buttons in the panel (or open it
  with `?view=2d`) and on the card.
- Furniture library with built-in models and furniture packs you can import yourself.
- Built-in extras: camera cockpit and motion trail, weather outside, live screens, energy view, sound, car,
  household, time travel and the fun extras.
- Restore points and a full backup of the plan, its pictures and the packs.

## Credit

Home 3D is derived from [NeonPlan 3D](https://github.com/Mastershort/neonplan3d) by Mastershort (MIT licence,
copied at commit 0a947aa). Thanks to Mastershort for the original work. Home 3D is not affiliated with or endorsed by
Mastershort; see [NOTICE](NOTICE).

## Quick start

You need Home Assistant 2025.1 or newer and [HACS](https://hacs.xyz). Home 3D is a custom repository, so it is not in the default HACS list.

1. In HACS, open the menu (⋮) → **Custom repositories**.
2. Add `https://github.com/theovencook/home-3d` with the type **Integration**.
3. Install **Home 3D** and restart Home Assistant.
4. Go to *Settings → Devices & services → Add integration → Home 3D*.
5. Open **Home 3D** in the sidebar.

No manual HACS setup? Copy `custom_components/home_3d` into your `config/custom_components/` folder, restart, and add the integration under *Settings → Devices & services*.

To keep Home 3D out of the sidebar for everyone, open the integration's **Configure** and turn off **Show in sidebar**. It takes effect at once; the panel link (`/home_3d`) and the dashboard card keep working. Each user can also hide the entry in Home Assistant's own sidebar settings.

### Your first 10 minutes

A one-click sample home to explore is coming soon; until then you start from an empty plan.

1. **Draw one floor (about 3 minutes).** Switch to **Editor**, then draw the outer walls and split them into rooms. Doors and windows go on the walls. Name each room. Press **?** to see the keyboard shortcuts and what the plan symbols mean.
2. **Add furniture (2 minutes).** Open the library, search for a sofa, a lamp or a radiator, and drop it in a room. The search understands UK and US words. Select an item to move, turn or resize it.
3. **Link a device (2 minutes).** Select a lamp, cover, sensor or camera and pick its Home Assistant entity in the item panel. Lights glow in 3D when they are on, and a tap toggles them.
4. **Look around (1 minute).** Switch back to the live view. Drag to orbit, scroll or pinch to zoom, tap an item to use it, and hold or double-tap for the item's other actions.
5. **Try the 2D plan and the dashboard card (2 minutes).** The **2D** button shows the flat plan, which suits a wall tablet (`?view=2d` opens it directly). To put the plan on a dashboard, add the card from the previous section.

Home 3D keeps restore points of the plan, so you can go back to an earlier version, and can make a full backup of the plan, its pictures and the packs. Take one before big changes.

### Supported versions

- Home Assistant 2025.1.0 or newer (the same minimum is set in `hacs.json`).
- A browser with WebGL 2: current Chrome, Edge, Firefox, Safari, and the Home Assistant Companion app on Android and iOS.
- Only the 3D view needs WebGL. The 2D plan and the editor's plan drawing work without it.

### Tablets and phones

- **Wall tablets** should use the 2D plan or set the quality to **Tablet** (in the view settings, or `quality` on the card). That level is the lightest: moving decorations rest after 30 seconds without a touch, and shadows and weather are reduced. **Auto** picks it for Fire tablets it recognises, such as the Fire HD 10.
- **Locked tablet mode:** add `?tablet` to the panel address (for example in a kiosk browser's start URL) and the panel shows only the home name, the floors and the View menu: no editor, no view settings. `?tablet=0` turns it off again. You can also tick users for tablet mode in the settings. After a quiet spell the tablet returns to the whole house; `?idle=<seconds>` changes the wait and `?idle=0` disables it.
- **WebGL:** the 3D view needs hardware WebGL. If a tablet shows a blank 3D view, check that the browser is up to date and that hardware acceleration is on (Android System WebView and Fully Kiosk Browser use the system's WebView, so update that). Old or very cheap tablets can run out of graphics memory; use the 2D plan there.
- **Phones** can view and control the house. Drawing works best on a computer or a tablet.

## Dashboard card

The card is registered automatically. All options can be set in the card's visual editor; a minimal YAML example:

```yaml
type: custom:home-3d-card
height: 420
```

To start the card as the 2D plan, with a button to switch to 3D (a wall tablet, say):

```yaml
type: custom:home-3d-card
view: 2d
controls: [view]
```

## Privacy

Home 3D makes no network calls to third-party services. The plan, its pictures and the furniture packs are stored in
Home Assistant's `.storage`, and the frontend only talks to your own Home Assistant. There is no licence check, no shop
connection and no usage reporting. The only outside addresses it loads are ones you enter yourself (for example a
background picture by URL).

## Furniture packs

A pack is a folder of plain JSON: a `pack.json` that names the pack and its licence, and one file per item (see
[docs/packs.md](docs/packs.md)). Packs are data only, with no code, pictures or links, and Home Assistant checks every
file on import. Import one under **Extensions** → **Import a pack folder …**. Old single-file packs still import.
`python tools/fp3dpack.py validate <folder>` checks a pack before you import or publish it.

Racks, rack-mount gear, links to Home Assistant, the rack card and voice questions are in [docs/racks.md](docs/racks.md).

## Development

```bash
cd frontend
npm ci
npm test
npm run typecheck
npm run build   # writes the bundles to custom_components/home_3d/frontend (committed)
```

Python tests use `pytest-homeassistant-custom-component` (`pip install -r requirements_test.txt`, then `pytest`).
Home Assistant does not run on Windows; use Linux, WSL or CI for the Python tests.

## Licence

MIT, see [LICENSE](LICENSE). The bundled fonts are under the SIL Open Font License (licence files next to the fonts).
