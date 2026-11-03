"""Writes the Nissan Leaf and its colourways (theovencook.outdoor/vehicle/nissan_leaf*.json), #242, #252.

    python tools/gen_leaf.py

The second-generation Leaf (ZE1, 2018 on) at 4490 x 1790 x 1540 mm, wheelbase 2700 mm: a rounded hatchback with a short
bonnet sloping down to the nose, a steeply raked windscreen, a high rear with a kick in the window line, black pillars
under a body-coloured roof (the "floating roof"), boomerang lamps front and rear and a V-shaped grille. The body,
glasshouse and roof are curved shells (#252) traced from photos of the car; the rest are simple shapes. Modelled by
us; no logos, no maker images, no 3D files. The other cars come from tools/gen_vehicles.py.

Windows are in the palette role "glass" and the lamps in the colours the viewer lights for a linked car (headlights
#e8f4ff, tail lights #ff3b4f): Auto Pro's lights and cabin glow show on it. Every part above the waist sits inside the
glasshouse or just proud of it, so nothing stands out of the body.
"""

from __future__ import annotations

import json
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_vehicles import OUT, Shell, V, dump

W, L, H = 1.79, 4.49, 1.54
HEAD = "#e8f4ff"
TAIL = "#ff3b4f"
CHROME = "#c9ced6"
GRILLE = "#16233a"

# id, variant name, body colour, roof colour (None: the body's), mirror colour (None: the body's)
COLOURWAYS = [
    ("nissan_leaf", "Pearl white", "#e9ebee", None),
    ("nissan_leaf_black", "Black", "#1d1e21", None),
    ("nissan_leaf_blue", "Vivid blue", "#1f4f8f", None),
    ("nissan_leaf_grey", "Grey", "#6f757b", None),
    ("nissan_leaf_red", "Flame red", "#a51c2c", None),
    ("nissan_leaf_red_black_roof", "Red, black roof", "#a51c2c", "#1d1e21"),
]

FRONT, REAR = L / 2, -L / 2
FRONT_AXLE = FRONT - 0.95
REAR_AXLE = FRONT_AXLE - 2.70
WHEEL, TYRE = 0.65, 0.215

# The body (#252): curved shells lofted through side-view stations (z, bottom, top) and plan-view half widths (z, half
# width), in metres, rear (-z) to front (+z). Traced from photos of a 2018-on Leaf: a flat tail, a waist that rises
# to the rear, a short bonnet that rounds down to the nose, a long raked windscreen, a roof that falls gently to an
# upright hatch, and the glasshouse narrowing to the rear (tumblehome).
BODY_SIDE = [
    (REAR, 0.30, 0.96),
    (-2.18, 0.20, 1.02),
    (-1.95, 0.17, 1.045),
    (-1.0, 0.17, 1.02),
    (0.0, 0.17, 0.99),
    (0.85, 0.17, 0.965),
    (1.40, 0.18, 0.90),
    (1.85, 0.20, 0.85),
    (2.10, 0.24, 0.79),
    (FRONT, 0.33, 0.66),
]
BODY_PLAN = [(REAR, 0.76), (-2.10, 0.855), (-1.60, 0.885), (-0.60, 0.87), (0.60, 0.875), (1.30, 0.88), (1.90, 0.84), (2.15, 0.78), (FRONT, 0.70)]
BODY_ROUND, BODY_TAPER = 0.28, 0.93
# the glasshouse, its top under the roof
GLASS_SIDE = [
    (-2.15, 1.02, 1.06),
    (-1.95, 1.005, 1.22),
    (-1.72, 0.995, 1.38),
    (-1.45, 0.99, 1.455),
    (-0.90, 0.975, 1.50),
    (-0.30, 0.965, 1.505),
    (0.10, 0.96, 1.47),
    (0.45, 0.955, 1.30),
    (0.95, 0.945, 0.965),
]
GLASS_PLAN = [(-2.15, 0.70), (-1.80, 0.80), (-1.20, 0.83), (0.30, 0.83), (0.95, 0.80)]
GLASS_ROUND, GLASS_TAPER = 0.3, 0.8
# the floating roof over it
ROOF_SIDE = [
    (-1.80, 1.33, 1.38),
    (-1.66, 1.40, 1.45),
    (-1.40, 1.445, 1.495),
    (-0.90, 1.475, 1.53),
    (-0.30, 1.48, 1.54),
    (0.05, 1.46, 1.515),
    (0.14, 1.44, 1.47),
]
ROOF_PLAN = [(-1.80, 0.60), (-1.50, 0.655), (-0.60, 0.675), (0.14, 0.665)]
GLASS = Shell(GLASS_SIDE, GLASS_PLAN, GLASS_ROUND, GLASS_TAPER)


def pillar_band(v: V, za: float, zb: float) -> None:
    """A black pillar across the glasshouse from za to zb, standing just proud of the glass (the roof hides its top)."""
    grow = 0.012
    side, plan = GLASS.band(za, zb, grow, below=0.035)
    zm = (za + zb) / 2
    hw = GLASS.width(zm)
    height = GLASS.top(zm) - GLASS.bottom(zm)
    r = GLASS_ROUND * min(2 * hw, height)
    band_h = side[1][2] - side[1][1]
    v.shell(side, plan, "dark", round=round(min(0.5, (r + grow) / min(2 * (hw + grow), band_h)), 3), taper=GLASS_TAPER)


def leaf(body: str, roof: str, mirror: str) -> list[dict]:
    v = V(W, L, H)
    # wheels and rims
    for sx in (-1, 1):
        for z in (FRONT_AXLE, REAR_AXLE):
            v.wheel(sx * (W / 2 - TYRE / 2 - 0.005), z, WHEEL, TYRE)
            v.add("cyl", sx * (W / 2 - 0.009), z, 0.014, 0.44, (WHEEL - 0.44) / 2, 0.44, "metal", axis="x")
    v.shell(BODY_SIDE, BODY_PLAN, body, round=BODY_ROUND, taper=BODY_TAPER)
    v.shell(GLASS_SIDE, GLASS_PLAN, "glass", round=GLASS_ROUND, taper=GLASS_TAPER)
    v.shell(ROOF_SIDE, ROOF_PLAN, roof, round=0.45, taper=0.95)
    # black pillars: B, and the wide C pillar that lets the roof float
    pillar_band(v, -0.40, -0.31)
    pillar_band(v, -1.62, -1.25)
    # A pillars along the windscreen's edges, from the waist to the roof, just proud of the glass
    for sx in (-1, 1):
        za, ya = 0.86, GLASS.bottom(0.86) + 0.03
        zb, yb = 0.10, 1.45
        xa, xb = GLASS.half_width(za, ya) + 0.004, GLASS.half_width(zb, yb) + 0.004
        v.loft(sx * (xa - 0.02), za, 0.04, 0.10, ya, yb - ya, "dark", tcx=sx * (xb - 0.02), tcz=zb, td=0.08)
    # door mirrors on the door, just behind the A pillar
    for sx in (-1, 1):
        v.rbox(sx * (W / 2 - 0.07), 0.80, 0.13, 0.09, 0.93, 0.10, mirror, round=0.4)
    # boomerang headlights high on the nose, swept back into the wings
    for sx in (-1, 1):
        v.loft(sx * 0.56, (2.02 + FRONT + 0.01) / 2, 0.44, FRONT + 0.01 - 2.02, 0.60, 0.20, HEAD, tcx=sx * 0.6, tcz=(1.92 + 2.13) / 2, tw=0.34, td=2.13 - 1.92)
    # V-motion grille: a dark panel narrowing downwards with a chrome V round it
    v.loft(0, FRONT - 0.005, 0.22, 0.03, 0.36, 0.25, GRILLE, tw=0.62)
    for sx in (-1, 1):
        v.loft(sx * 0.125, FRONT - 0.003, 0.035, 0.026, 0.34, 0.28, CHROME, tcx=sx * 0.33)
    # front plate on the bumper, a wide dark intake below it
    v.box(0, FRONT + 0.0, 0.52, 0.016, 0.24, 0.10, "white")
    v.box(0, FRONT - 0.04, 1.24, 0.08, 0.19, 0.10, "dark")
    # boomerang tail lights: an arm across the tailgate wrapping round the corner, a leg down the corner
    for sx in (-1, 1):
        v.loft(sx * 0.58, -2.10, 0.42, 0.30, 0.84, 0.14, TAIL, tcx=sx * 0.57, tcz=-2.08, tw=0.40, td=0.24)
        v.loft(sx * 0.75, -2.13, 0.12, 0.24, 0.66, 0.18, TAIL, tcz=-2.13, td=0.22)
    # the black band across the tailgate between the lamps, under the hatch glass
    v.box(0, REAR - 0.003, 0.80, 0.03, 0.88, 0.10, "dark")
    # rear plate on the tailgate, dark diffuser below the bumper
    v.box(0, REAR + 0.0, 0.52, 0.016, 0.62, 0.10, "#e9c645")
    v.box(0, REAR + 0.03, 1.40, 0.08, 0.19, 0.14, "dark")
    # dark sills between the wheels
    for sx in (-1, 1):
        v.box(sx * 0.845, (FRONT_AXLE + REAR_AXLE) / 2, 0.03, FRONT_AXLE - REAR_AXLE - WHEEL - 0.1, 0.17, 0.08, "dark")
    return v.parts


def symbol() -> list[dict]:
    r = lambda v: round(v + 0.0, 4)  # noqa: E731
    return [
        {"shape": "rect", "x": 0.0, "z": 0.0, "w": r(1.76 / W), "d": 0.99},
        {"shape": "line", "x1": r(-0.8 / W), "z1": r(0.95 / L), "x2": r(0.8 / W), "z2": r(0.95 / L)},
        {"shape": "line", "x1": r(-0.7 / W), "z1": r(-2.02 / L), "x2": r(0.7 / W), "z2": r(-2.02 / L)},
    ]


def main() -> None:
    for ident, variant, body, roof in COLOURWAYS:
        v = V(W, L, H)
        v.parts = leaf(body, roof or body, roof or body)
        item = {
            "id": ident,
            "name": {"en": "Nissan Leaf"},
            "size": [W, L, H],
            "group": "vehicle",
            "room": ["garage"],
            "tags": [
                "electric car",
                "ev",
                "car",
                "hatchback",
                "nissan",
                "leaf",
                "electric vehicle",
                "charging",
                "plug-in",
            ],
            "family": "nissan_leaf",
            "variant": {"en": variant},
            "electric": True,
            "vehicle": True,
            "parts": v.parts,
        }
        assert len(item["parts"]) <= 60, len(item["parts"])
        text = dump(item)
        # the symbol goes after the parts, like the hand-made items
        text = (
            text.rstrip()[:-1].rstrip()
            + ',\n  "symbol": [\n'
            + ",\n".join("    " + json.dumps(s, separators=(", ", ": ")) for s in symbol())
            + "\n  ]\n}\n"
        )
        (OUT / f"{ident}.json").write_text(text, encoding="utf-8", newline="\n")
    print(f"{len(COLOURWAYS)} Leaf colourways written")


if __name__ == "__main__":
    main()
