"""Writes the Nissan Leaf and its colourways (theovencook.outdoor/vehicle/nissan_leaf*.json), #242.

    python tools/gen_leaf.py

The second-generation Leaf (ZE1, 2018 on) at 4490 x 1790 x 1540 mm, wheelbase 2700 mm: a rounded hatchback with a short
bonnet sloping down to the nose, a steeply raked windscreen, a high rear with a kick in the window line, black pillars
under a body-coloured roof (the "floating roof"), boomerang lamps front and rear and a V-shaped grille. Modelled from
simple shapes by us; no logos, no maker images, no 3D files. The other cars come from tools/gen_vehicles.py.

Windows are in the palette role "glass" and the lamps in the colours the viewer lights for a linked car (headlights
#e8f4ff, tail lights #ff3b4f): Auto Pro's lights and cabin glow show on it. Every part above the waist sits inside the
glasshouse or just proud of it, so nothing stands out of the body.
"""

from __future__ import annotations

import json
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gen_vehicles import OUT, V, dump

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

# heights (m): sill, shoulder (top of the lower body), waist (where the glass starts), glass top, roof top
SILL, SHOULDER, WAIST, GLASS, ROOF = 0.17, 0.72, 0.98, 1.47, 1.54
# the glasshouse: half widths at the waist and at the top; z of its front (windscreen) and back (hatch glass) edges
GW0, GW1 = 0.83, 0.66
GF0, GF1 = 0.95, 0.08
GB0, GB1 = -2.02, -1.58
FRONT, REAR = L / 2, -L / 2
FRONT_AXLE = FRONT - 0.95
REAR_AXLE = FRONT_AXLE - 2.70
WHEEL, TYRE = 0.65, 0.215


def glass_at(y: float) -> tuple[float, float, float]:
    """Half width, front z and back z of the glasshouse at height y."""
    t = (y - WAIST) / (GLASS - WAIST)
    return GW0 + (GW1 - GW0) * t, GF0 + (GF1 - GF0) * t, GB0 + (GB1 - GB0) * t


def pillar(
    v: V,
    sx: int,
    z0: float,
    z1: float,
    y0: float,
    y1: float,
    w: float = 0.03,
    proud: float = 0.008,
    top: tuple[float, float] | None = None,
) -> None:
    """A black strip on the side glass from y0 to y1, leaning in with it, its outer face `proud` outside the glass;
    z0..z1 at y0 and `top` (default the same) at y1."""
    hw0 = glass_at(y0)[0]
    hw1 = glass_at(y1)[0]
    t0, t1 = top or (z0, z1)
    v.loft(
        sx * (hw0 + proud - w / 2),
        (z0 + z1) / 2,
        w,
        z1 - z0,
        y0,
        y1 - y0,
        "dark",
        tcx=sx * (hw1 + proud - w / 2),
        tcz=(t0 + t1) / 2,
        td=t1 - t0,
    )


def leaf(body: str, roof: str, mirror: str) -> list[dict]:
    v = V(W, L, H)
    # wheels and rims
    for sx in (-1, 1):
        for z in (FRONT_AXLE, REAR_AXLE):
            v.wheel(sx * (W / 2 - TYRE / 2 - 0.005), z, WHEEL, TYRE)
            v.add("cyl", sx * (W / 2 - 0.009), z, 0.014, 0.44, (WHEEL - 0.44) / 2, 0.44, "metal", axis="x")
    # lower body: narrower than the shoulder above it, so the shoulder reads as the wheel arches
    v.rbox(0, -0.005, 1.74, L - 0.02, SILL, SHOULDER - SILL, body, round=0.3)
    # shoulder up to the waist, its back leaning in a little
    v.loft(
        0,
        (REAR + GF0) / 2 + 0.005,
        1.76,
        GF0 - REAR - 0.01,
        SHOULDER,
        WAIST - SHOULDER,
        body,
        tcz=(REAR + 0.08 + GF0) / 2,
        tw=1.70,
        td=GF0 - REAR - 0.08,
    )
    # short bonnet sloping down to the nose, in two steps so it curves
    v.loft(
        0,
        (GF0 + FRONT - 0.01) / 2,
        1.76,
        FRONT - 0.01 - GF0,
        SHOULDER,
        0.14,
        body,
        tcz=(GF0 + 1.98) / 2,
        tw=1.70,
        td=1.98 - GF0,
    )
    v.loft(
        0,
        (GF0 + 1.98) / 2,
        1.70,
        1.98 - GF0,
        SHOULDER + 0.14,
        WAIST - 0.01 - SHOULDER - 0.14,
        body,
        tcz=(GF0 + 1.40) / 2,
        tw=1.60,
        td=1.40 - GF0,
    )
    # glasshouse: steep windscreen, high hatch
    v.loft(
        0,
        (GB0 + GF0) / 2,
        2 * GW0,
        GF0 - GB0,
        WAIST,
        GLASS - WAIST,
        "glass",
        tcz=(GB1 + GF1) / 2,
        tw=2 * GW1,
        td=GF1 - GB1,
    )
    # the kick in the window line over the rear wheels, up to the tailgate
    ky = 0.13
    kw = glass_at(WAIST + ky)[0] + 0.012
    v.loft(
        0,
        (REAR + 0.08 - 1.20) / 2,
        1.70,
        -1.20 - REAR - 0.08,
        WAIST,
        ky,
        body,
        tcz=(REAR + 0.16 - 1.42) / 2,
        tw=2 * kw,
        td=-1.42 - REAR - 0.16,
    )
    # black pillars: A along the windscreen, B, and the wide C pillar that lets the roof float
    for sx in (-1, 1):
        a0, a1 = glass_at(WAIST)[1], glass_at(GLASS)[1]
        v.loft(
            sx * (GW0 - 0.012),
            a0 - 0.05,
            0.04,
            0.10,
            WAIST,
            GLASS - WAIST,
            "dark",
            tcx=sx * (GW1 - 0.012),
            tcz=a1 - 0.03,
            td=0.06,
        )
        pillar(v, sx, -0.36, -0.26, WAIST, GLASS)
        # the C pillar follows the hatch glass's slope: upright, its top stood out behind the roof
        cy = WAIST + ky - 0.01
        pillar(v, sx, glass_at(cy)[2] + 0.01, -1.22, cy, GLASS, w=0.04, top=(GB1 + 0.01, -1.36))
    # floating roof, and a black spoiler over the hatch glass
    v.loft(
        0,
        (GB1 + GF1) / 2 - 0.01,
        2 * GW1 + 0.03,
        GF1 - GB1 + 0.06,
        GLASS,
        ROOF - GLASS,
        roof,
        tcz=(GB1 + GF1) / 2 - 0.06,
        tw=2 * GW1 - 0.08,
        td=GF1 - GB1 - 0.22,
    )
    sy = GLASS - 0.04
    sb = glass_at(sy)[2]
    v.loft(
        0,
        sb + 0.01,
        2 * glass_at(sy)[0] - 0.04,
        0.10,
        sy,
        ROOF - 0.01 - sy,
        "dark",
        tcz=sb + 0.02,
        tw=2 * GW1 - 0.04,
        td=0.06,
    )
    # door mirrors on the door, just behind the A pillar
    for sx in (-1, 1):
        v.rbox(sx * (W / 2 - 0.06), GF0 - 0.10, 0.11, 0.09, WAIST + 0.02, 0.10, mirror, round=0.4)
    # boomerang headlights high on the nose, swept back into the wings
    for sx in (-1, 1):
        v.loft(
            sx * 0.63,
            (1.86 + FRONT) / 2,
            0.42,
            FRONT - 1.86,
            SHOULDER - 0.06,
            0.14,
            HEAD,
            tcx=sx * 0.65,
            tcz=(1.86 + FRONT - 0.07) / 2,
            tw=0.34,
            td=FRONT - 0.07 - 1.86,
        )
    # V-motion grille: a dark panel narrowing downwards with a chrome V round it
    v.loft(0, FRONT - 0.012, 0.22, 0.024, 0.44, SHOULDER - 0.44, GRILLE, tw=0.62)
    for sx in (-1, 1):
        v.loft(sx * 0.125, FRONT - 0.01, 0.035, 0.02, 0.42, SHOULDER - 0.42 + 0.01, CHROME, tcx=sx * 0.33)
    # front bumper: plate, then a wide dark intake
    v.box(0, FRONT - 0.008, 0.52, 0.016, 0.33, 0.10, "white")
    v.box(0, FRONT - 0.03, 1.24, 0.06, 0.19, 0.12, "dark")
    # boomerang tail lights: an arm across the tailgate wrapping round the corner, a leg down the corner
    for sx in (-1, 1):
        y0, y1 = 0.86, WAIST
        zr0 = REAR + 0.08 * (y0 - SHOULDER) / (WAIST - SHOULDER)
        zr1 = REAR + 0.08
        v.loft(
            sx * 0.645,
            (zr0 - 0.01 - 1.95) / 2,
            0.47,
            -1.95 - zr0 + 0.01,
            y0,
            y1 - y0,
            TAIL,
            tcx=sx * 0.64,
            tcz=(zr1 - 0.01 - 1.95) / 2,
            tw=0.44,
            td=-1.95 - zr1 + 0.01,
        )
        zl1 = zr0
        v.loft(
            sx * 0.82,
            (REAR - 0.002 - 2.05) / 2,
            0.12,
            -2.05 - REAR + 0.002,
            SHOULDER + 0.02,
            y0 - SHOULDER - 0.02,
            TAIL,
            tcz=(zl1 - 0.01 - 2.05) / 2,
            td=-2.05 - zl1 + 0.01,
        )
    # rear plate on the tailgate, dark diffuser below the bumper
    v.box(0, REAR + 0.012, 0.52, 0.016, SHOULDER + 0.04, 0.10, "#e9c645")
    v.box(0, REAR + 0.02, 1.40, 0.04, 0.18, 0.15, "dark")
    # dark sills between the wheels
    for sx in (-1, 1):
        v.box(sx * 0.85, (FRONT_AXLE + REAR_AXLE) / 2, 0.02, FRONT_AXLE - REAR_AXLE - WHEEL - 0.1, SILL, 0.08, "dark")
    return v.parts


def symbol() -> list[dict]:
    r = lambda v: round(v + 0.0, 4)  # noqa: E731
    return [
        {"shape": "rect", "x": 0.0, "z": 0.0, "w": r(1.76 / W), "d": 0.99},
        {"shape": "line", "x1": r(-GW0 / W), "z1": r(GF0 / L), "x2": r(GW0 / W), "z2": r(GF0 / L)},
        {"shape": "line", "x1": r(-GW0 / W), "z1": r(GB0 / L), "x2": r(GW0 / W), "z2": r(GB0 / L)},
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
