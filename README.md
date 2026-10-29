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

## Installation

Requires Home Assistant 2025.1 or newer.

### HACS (custom repository)

1. In HACS, open the menu (⋮) → **Custom repositories**.
2. Add `https://github.com/theovencook/home-3d` with the type **Integration**.
3. Install **Home 3D** and restart Home Assistant.
4. Go to *Settings → Devices & services → Add integration → Home 3D*.
5. Open **Home 3D** in the sidebar, switch to **Editor** and draw your first floor.

### Manual

1. Copy `custom_components/home_3d` into your Home Assistant `config/custom_components/` folder.
2. Restart Home Assistant and add the integration under *Settings → Devices & services*.

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
