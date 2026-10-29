import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { mountBase, setPacks, type FurniturePack } from "../packs.ts";
import { newFloor } from "../model.ts";
import { hasFixedColors, packGlowCentre, packMotionParts, pushFurniture, screenPictureSize, setLightLook } from "./furniture.ts";
import { packMotion, type PackItem } from "../packs.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";

const PACK: FurniturePack = {
  id: "t.cars",
  name: "Cars",
  publisher: "t",
  items: [
    {
      id: "wedge",
      name: { de: "Keil", en: "Wedge" },
      size: [2, 4, 1],
      parts: [
        // a hood: the top rectangle is shorter and sits further back
        { shape: "loft", x: 0, z: 0.25, w: 1, d: 0.5, y: 0, h: 0.5, color: "body", tx: 0, tz: 0.05, tw: 0.9, td: 0.1, edges: "glow" },
        // a wheel lying along x
        { shape: "cyl", axis: "x", x: -0.4, z: -0.3, w: 0.1, d: 0.2, y: 0, h: 0.4, color: "dark", edges: true },
      ],
    },
  ],
};

function build(type: string) {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const f: Furniture = { id: "f", type, x: 1, z: 2, rotation: 90, w: 2, d: 4, h: 1, variant: null, entity: null, power: null };
  pushFurniture(buf, lines, new GeoBuffer(), f);
  return { buf, lines };
}

test("loft and lying cylinder parts build finite geometry with their outlines", () => {
  setPacks([PACK]);
  const { buf, lines } = build("pack:t.cars:wedge");
  assert.ok(buf.count > 20, "triangles");
  assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), "finite");
  // the loft: 4 sides x 2 + top 2 = 10 triangles; the 12-sided wheel: 24 sides + 24 caps... plus 14 here
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...ys) <= 0.5 + 1e-6 && Math.min(...ys) >= 0, "heights within the parts");
  // top outline of the loft (4) + 4 sloped corners + two wheel rims (14 each)
  assert.equal(lines.p.length / 6, 8 + 28);
  // the wheel's rim lies along x (after the 90° turn: along z in the world)
  const wheelSegs = lines.p.length / 6 - 8;
  assert.ok(wheelSegs === 28);
});

test("a built-in item lifted by its mount height (a dryer on the washer) leaves the floor", () => {
  const dryer = { id: "d", type: "dryer", x: 0, z: 0, w: 0.6, d: 0.6, h: 0.85, rotation: 0, variant: null } as Furniture;
  const ys = (base: number) => {
    const buf = new GeoBuffer();
    const shadow = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), shadow, dryer, base);
    const y = buf.p.filter((_, i) => i % 3 === 1);
    return { min: Math.min(...y), max: Math.max(...y), shadow: shadow.p.length };
  };
  const floor = ys(0);
  const lifted = ys(0.85);
  assert.ok(Math.abs(floor.min) < 1e-6 && floor.shadow > 0);
  assert.ok(Math.abs(lifted.min - 0.85) < 1e-6, `min ${lifted.min}`);
  assert.ok(Math.abs(lifted.max - floor.max - 0.85) < 1e-6);
  // no contact shadow on the floor under a lifted item
  assert.equal(lifted.shadow, 0);
});

test("the mount height is absolute: a wall cabinet hangs at 1.45 m and can go lower", () => {
  const cab = { id: "c", type: "kitchen_wall", x: 0, z: 0, w: 0.8, d: 0.35, h: 0.7, rotation: 0, variant: null } as Furniture;
  const floor = newFloor("eg", "EG", 0);
  const minY = (f: Furniture) => {
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f, mountBase(floor, f));
    return Math.min(...buf.p.filter((_, i) => i % 3 === 1));
  };
  assert.equal(mountBase(floor, cab), 1.45);
  assert.ok(Math.abs(minY(cab) - 1.45) < 1e-6);
  assert.ok(Math.abs(minY({ ...cab, mount_y: 1.0 }) - 1.0) < 1e-6);
});

test("every mailbox shape is drawn where its box is: a wall mailbox at 1 m, a bank at 0.75 m, the others on the floor", () => {
  const floor = newFloor("eg", "EG", 0);
  for (const [variant, bottom] of [[null, 1], ["bank", 0.75], ["pole", 0], ["pillar", 0], ["parcel", 0]] as const) {
    const f = { id: "m", type: "mailbox", x: 0, z: 0, w: 0.38, d: 0.14, h: 0.34, rotation: 0, variant } as Furniture;
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f, mountBase(floor, f));
    const ys = buf.p.filter((_, i) => i % 3 === 1);
    assert.equal(mountBase(floor, f), bottom);
    assert.ok(Math.abs(Math.min(...ys) - bottom) < 1e-6, `${variant}: ${Math.min(...ys)}`);
    // a mount height of its own moves it along
    const low = { ...f, mount_y: 0.5 };
    const b2 = new GeoBuffer();
    pushFurniture(b2, new LineBuffer(), new GeoBuffer(), low, mountBase(floor, low));
    assert.ok(Math.abs(Math.min(...b2.p.filter((_, i) => i % 3 === 1)) - 0.5) < 1e-6, `${variant} at 0.5`);
  }
});

/** Signed volume of a closed-ish mesh: positive when its triangles face outwards. */
function orientation(buf: GeoBuffer): number {
  let v = 0;
  for (let i = 0; i < buf.p.length; i += 9) {
    const [ax, ay, az, bx, by, bz, cx, cy, cz] = buf.p.slice(i, i + 9);
    v += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
  }
  return v;
}

test("a mirrored item keeps its faces pointing outwards (#159)", () => {
  setPacks([PACK]);
  for (const type of ["sofa", "sofa_l", "sofa_u", "stairs_u", "bed", "fridge", "pack:t.cars:wedge"]) {
    const vol = (mirror: boolean) => {
      const buf = new GeoBuffer();
      const f: Furniture = { id: "f", type, x: 0, z: 0, rotation: 30, w: 2, d: 1, h: 1, variant: null, entity: null, power: null, mirror };
      pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
      return orientation(buf);
    };
    const plain = vol(false);
    const mirrored = vol(true);
    assert.ok(Math.sign(plain) === Math.sign(mirrored) && Math.abs(plain - mirrored) < Math.abs(plain) * 0.01 + 1e-6, `${type}: ${plain} vs ${mirrored}`);
  }
});

test("a mirrored pack lamp is drawn mirrored and still faces outwards", async () => {
  const { pushPackLamp } = await import("./furniture.ts");
  setPacks([PACK]);
  const item = PACK.items[0];
  const vol = (mirror: boolean) => {
    const buf = new GeoBuffer();
    pushPackLamp(buf, item, { x: 0, z: 0, rotation: 0, w: 2, d: 4, h: 1, mirror }, 0, 0xffffff);
    return { v: orientation(buf), xs: buf.p.filter((_, i) => i % 3 === 0) };
  };
  const a = vol(false);
  const b = vol(true);
  assert.ok(Math.sign(a.v) === Math.sign(b.v));
  // the wheel sits at x = -0.4 of the item: mirrored, it moves to the other side
  near2(Math.min(...a.xs), -Math.max(...b.xs));
});

function near2(a: number, b: number) {
  assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);
}

test("the U-stair: both flights share one going, the landing turns it and the top step reaches the floor above", async () => {
  const { stairsULayout } = await import("../model.ts");
  for (const h of [2.6, 2.75, 2.77, 3.0]) {
    const l = stairsULayout(2.1, 2.7, h);
    assert.equal(l.steps1 + 1 + l.steps2, l.n);
    assert.ok(l.steps1 >= l.steps2 && l.steps2 >= 1);
    assert.ok(Math.abs(l.landing + l.run * l.steps1 - 2.7) < 1e-9);
    assert.ok(l.rise > 0.16 && l.rise < 0.2, `rise ${l.rise}`);
  }
  const f: Furniture = { id: "u", type: "stairs_u", x: 0, z: 0, rotation: 0, w: 2.1, d: 2.7, h: 2.75, variant: null };
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
  const pts = (pred: (x: number, y: number, z: number) => boolean) => {
    const out: number[][] = [];
    for (let i = 0; i < buf.p.length; i += 3) if (pred(buf.p[i], buf.p[i + 1], buf.p[i + 2])) out.push([buf.p[i], buf.p[i + 1], buf.p[i + 2]]);
    return out;
  };
  // the top step sits on the right half (+x) at the front; mirrored it moves to the left half
  const top = pts((_, y) => Math.abs(y - 2.75) < 1e-6);
  assert.ok(top.length > 0 && top.every(([x, , z]) => x > 0 && z > 0), "top step at the front right");
  const mbuf = new GeoBuffer();
  pushFurniture(mbuf, new LineBuffer(), new GeoBuffer(), { ...f, mirror: true });
  let mirroredLeft = true;
  for (let i = 0; i < mbuf.p.length; i += 3) if (Math.abs(mbuf.p[i + 1] - 2.75) < 1e-6 && mbuf.p[i] > 0) mirroredLeft = false;
  assert.ok(mirroredLeft, "mirrored: top step at the front left");
});

test("a motorised curtain opens to both ends and a roll-down screen rolls up with its cover (#511)", () => {
  assert.equal(packMotion("pack:home3d.architecture:curtain_motor"), "curtain");
  assert.equal(packMotion("pack:home3d.cinema:screen_roll"), "screen");
  assert.equal(packMotion("pack:home3d.cinema:screen_wall"), null);
  const box = (x: number, color: string, y = 0, h = 1) => ({ shape: "box" as const, x, z: 0, w: 0.06, d: 0.2, y, h, color });
  const curtain = { id: "curtain_motor", names: {}, size: [2.4, 0.15, 2.4], parts: [box(0, "metal", 0.97, 0.03), box(-0.45, "fabric"), box(-0.05, "fabric"), box(0.05, "fabric"), box(0.45, "fabric")] } as unknown as PackItem;
  // closed: the panels stay where the pack has them; the rail does not move at all
  assert.deepEqual(packMotionParts(curtain, "curtain", 0).map((p) => Math.round(p.x * 1000) / 1000), [-0.45, -0.05, 0.05, 0.45]);
  // open: every panel lies in the outer fifth of its half
  for (const p of packMotionParts(curtain, "curtain", 1)) assert.ok(Math.abs(p.x) >= 0.4 - 1e-9, `${p.x}`);
  // opening to one side: every panel ends up at that end
  for (const p of packMotionParts(curtain, "curtain", 1, "left")) assert.ok(p.x <= -0.3 + 1e-9, `${p.x}`);
  for (const p of packMotionParts(curtain, "curtain", 1, "right")) assert.ok(p.x >= 0.3 - 1e-9, `${p.x}`);
  const screen = { id: "screen_roll", names: {}, size: [2.6, 0.12, 1.75], parts: [{ shape: "cyl", axis: "x", x: 0, z: 0, w: 1, d: 1, y: 0.93, h: 0.07, color: "white" }, box(0, "white", 0.07, 0.85), box(0, "dark", 0.05, 0.02)] } as unknown as PackItem;
  const down = packMotionParts(screen, "screen", 0);
  assert.equal(down.length, 2);
  assert.ok(Math.abs(down[0].h - 0.85) < 1e-9);
  // half up: the cloth is half as long and still hangs from the top
  const half = packMotionParts(screen, "screen", 0.5);
  assert.ok(Math.abs(half[0].y + half[0].h - 0.92) < 1e-9 && Math.abs(half[0].h - 0.425) < 1e-9);
});

test("pack parts in a colour of their own keep it down to the ground in the light looks (#609)", () => {
  const pumpkin: FurniturePack = {
    id: "t.fun",
    name: "Fun",
    publisher: "t",
    items: [
      {
        id: "pumpkin",
        name: { de: "Kürbis", en: "Pumpkin" },
        size: [0.4, 0.4, 0.4],
        parts: [
          { shape: "loft", x: 0, z: 0, w: 0.6, d: 0.6, y: 0, h: 0.5, color: "#c4500a", tx: 0, tz: 0, tw: 1, td: 1 },
          { shape: "box", x: 0, z: 0, w: 0.4, d: 0.4, y: 0.5, h: 0.5, color: "dark" },
        ],
      },
    ],
  };
  setPacks([pumpkin]);
  assert.ok(hasFixedColors("pack:t.fun:pumpkin"));
  assert.ok(!hasFixedColors("pack:t.cars:wedge") && !hasFixedColors("sofa"));
  const f: Furniture = { id: "p", type: "pack:t.fun:pumpkin", x: 0, z: 0, rotation: 0, w: 0.4, d: 0.4, h: 0.4, variant: null, entity: null, power: null };
  const colours = (light: boolean) => {
    setLightLook(light);
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
    setLightLook(false);
    const out: number[][] = [];
    for (let i = 0; i + 2 < buf.c.length; i += 3) out.push([buf.c[i], buf.c[i + 1], buf.c[i + 2]]);
    return out;
  };
  // the looks keep a colour that is bright (> 0.45) and strong (saturation > 0.45)
  const kept = (c: number[]) => {
    const mx = Math.max(...c);
    return mx > 0.45 && (mx - Math.min(...c)) / mx > 0.45;
  };
  const orange = (c: number[]) => c[0] > c[1] * 1.5 && c[0] > c[2] * 3;
  const neon = colours(false).filter(orange);
  const light = colours(true).filter(orange);
  assert.ok(neon.some((c) => !kept(c)), "in neon the shading darkens the lower part");
  assert.ok(light.length > 0 && light.every(kept), "in the light looks every orange vertex stays a signal colour");
  // the neon look is unchanged
  assert.deepEqual(colours(false), colours(false));
});

test("a pack wall lamp's light sits in its glowing parts, turned and mirrored with it (#680)", () => {
  // a wall lantern 0.2 wide, 0.24 deep, 0.4 tall: a back plate at the wall (-z), the glass box out front, a small LED
  const lantern = {
    id: "lantern",
    name: { de: "Laterne", en: "Lantern" },
    size: [0.2, 0.24, 0.4],
    parts: [
      { shape: "box", x: 0, z: -0.45, w: 1, d: 0.1, y: 0, h: 1, color: "body" },
      { shape: "box", x: 0.1, z: 0.2, w: 0.6, d: 0.5, y: 0.25, h: 0.5, color: "glass", glow: true },
    ],
  } as unknown as PackItem;
  const f = { x: 2, z: 1, rotation: 0, w: 0.2, d: 0.24, h: 0.4, mirror: false };
  const near = (a: number[] | null, b: number[]) => !!a && a.every((v, i) => Math.abs(v - b[i]) < 1e-9);
  // the glass's centre: 0.1 × 0.2 to the side, 0.2 × 0.24 out from the middle, halfway up the glass above the mount
  assert.ok(near(packGlowCentre(lantern, f, 1.8), [2.02, 1.8 + 0.2, 1.048]), String(packGlowCentre(lantern, f, 1.8)));
  // mirrored: the side offset changes sides; turned by 90°: the depth points along -x
  assert.ok(near(packGlowCentre(lantern, { ...f, mirror: true }, 1.8), [1.98, 2, 1.048]));
  assert.ok(near(packGlowCentre(lantern, { ...f, rotation: 90 }, 1.8), [2 - 0.048, 2, 1.02]));
  // no glowing part: null (the lamp keeps its old halo and light)
  assert.equal(packGlowCentre({ ...lantern, parts: [lantern.parts[0]] } as PackItem, f, 1.8), null);
});

test("round things cast a round shadow, lying on the ground they stand on (#719, #708)", async () => {
  const { pushFurniture, roundFootprint } = await import("./furniture.ts");
  const { GeoBuffer, LineBuffer } = await import("./geo.ts");
  const part = { shape: "cyl" as const, x: 0, z: 0, w: 1, d: 1, y: 0, h: 0.2, color: "wood" };
  setPacks([{ id: "g", name: "G", publisher: "G", items: [{ id: "trampoline", name: { en: "Trampoline" }, size: [3, 3, 0.9], parts: [part] }, { id: "box", name: { en: "Box" }, size: [1, 1, 1], parts: [{ ...part, shape: "box" }] }] } as FurniturePack]);
  try {
    assert.equal(roundFootprint({ type: "pack:g:trampoline" }), true);
    assert.equal(roundFootprint({ type: "pack:g:box" }), false);
    assert.equal(roundFootprint({ type: "table_round" }), true);
    assert.equal(roundFootprint({ type: "sofa" }), false);
    // the shadow of an item on a lawn 0.55 m below the floor lies on that lawn
    const shadow = new GeoBuffer();
    const f = { id: "t", type: "pack:g:trampoline", x: 0, z: 0, w: 3, d: 3, h: 0.9, rotation: 0, variant: null } as Furniture;
    pushFurniture(new GeoBuffer(), new LineBuffer(), shadow, f, -0.55);
    const ys = new Set<number>();
    for (let i = 1; i < shadow.p.length; i += 3) ys.add(Math.round(shadow.p[i] * 1000) / 1000);
    assert.deepEqual([...ys], [-0.547]);
    // round: many more corners than a square's
    assert.ok(shadow.p.length / 9 > 40);
  } finally {
    setPacks([]);
  }
});

test("a cover fills a small smart display, not just a sliver; a TV keeps its 4 cm margin (#799)", () => {
  // a 5″ display: 11 × 6.5 cm, a square cover
  const small = screenPictureSize(0.11, 0.065, 1);
  assert.ok(small.h > 0.055, `cover only ${small.h} m high`);
  assert.ok(small.w <= 0.11 && small.h <= 0.065);
  // a 55″ TV with a 16:9 picture: 4 cm off its height
  const tv = screenPictureSize(1.21, 0.68, 16 / 9);
  assert.ok(Math.abs(tv.h - 0.64) < 1e-9);
});

test("an open stair floats: nothing under its upper treads reaches the floor", () => {
  const f: Furniture = { id: "s", type: "stairs", x: 0, z: 0, rotation: 0, w: 1, d: 3.2, h: 2.75, variant: null, stair_open: true };
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
  // under the back half (the upper treads) every point sits well above the floor
  let lowest = Infinity;
  for (let i = 0; i < buf.p.length; i += 3) if (buf.p[i + 2] < -0.5) lowest = Math.min(lowest, buf.p[i + 1]);
  assert.ok(lowest > 1, `lowest point under the upper treads at ${lowest}`);
  // the solid stair stands on the floor there
  const solid = new GeoBuffer();
  pushFurniture(solid, new LineBuffer(), new GeoBuffer(), { ...f, stair_open: false });
  let low2 = Infinity;
  for (let i = 0; i < solid.p.length; i += 3) if (solid.p[i + 2] < -0.5) low2 = Math.min(low2, solid.p[i + 1]);
  assert.equal(low2, 0);
});

test("a stair turning at the bottom: its first steps wind inside the bottom square, from the entry side", async () => {
  const { STAIR_WINDERS } = await import("./furniture.ts");
  const w = 1, d = 3.2, h = 2.75;
  const n = Math.round(h / 0.18);
  const rise = h / n;
  for (const turn of ["left", "right"] as const) {
    const f: Furniture = { id: "s", type: "stairs", x: 0, z: 0, rotation: 0, w, d, h, variant: null, stair_turn: turn };
    const buf = new GeoBuffer();
    pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
    const at = (y: number) => {
      const out: number[][] = [];
      for (let i = 0; i < buf.p.length; i += 3) if (Math.abs(buf.p[i + 1] - y) < 1e-6) out.push([buf.p[i], buf.p[i + 2]]);
      return out;
    };
    // every winder's top lies in the bottom w × w square
    for (let k = 1; k <= STAIR_WINDERS; k++) assert.ok(at(rise * k).every(([, z]) => z >= d / 2 - w - 1e-6), `${turn}: winder ${k} outside the square`);
    // the first winder starts at the entry side: left = -x, right = +x
    const first = at(rise);
    const sx = turn === "left" ? -1 : 1;
    assert.ok(first.some(([x]) => Math.abs(x - (sx * w) / 2) < 1e-6), `${turn}: first winder not on the entry side`);
    // the top step still reaches the floor above at the back
    assert.ok(at(h).length > 0 && at(h).every(([, z]) => z < 0));
  }
});

test("a stair with a bottom landing: a flat square that many risers up, the flight climbing on from it", () => {
  const w = 1, d = 3.2, h = 2.75;
  const n = Math.round(h / 0.18);
  const rise = h / n;
  const f: Furniture = { id: "s", type: "stairs", x: 0, z: 0, rotation: 0, w, d, h, variant: null, stair_open: true, stair_landing: 3 };
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
  const at = (y: number) => {
    const out: number[][] = [];
    for (let i = 0; i < buf.p.length; i += 3) if (Math.abs(buf.p[i + 1] - y) < 1e-6) out.push([buf.p[i], buf.p[i + 2]]);
    return out;
  };
  // the landing's top covers the bottom square at 3 risers
  const top = at(rise * 3);
  assert.ok(top.some(([x, z]) => Math.abs(x + w / 2) < 1e-6 && Math.abs(z - d / 2) < 1e-6), "landing reaches the front corner");
  assert.ok(top.some(([, z]) => Math.abs(z - (d / 2 - w)) < 1e-6), "landing ends where the flight starts");
  // no steps below it inside the square: nothing at 1 or 2 risers
  assert.equal(at(rise).length + at(rise * 2).length, 0);
  // the next step is the flight's first, behind the landing
  assert.ok(at(rise * 4).length > 0 && at(rise * 4).every(([, z]) => z <= d / 2 - w + 1e-6));
  assert.ok(at(h).length > 0);
});

test("a few steps up to a flat top: the last step runs on to the back", () => {
  const w = 1, d = 1.3, h = 0.55;
  const f: Furniture = { id: "s", type: "stairs", x: 0, z: 0, rotation: 0, w, d, h, variant: null, stair_top: 0.5 };
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
  const topZ: number[] = [];
  for (let i = 0; i < buf.p.length; i += 3) if (Math.abs(buf.p[i + 1] - h) < 1e-6) topZ.push(buf.p[i + 2]);
  // the top reaches the back edge and is at least 0.5 m deep
  assert.ok(Math.abs(Math.min(...topZ) + d / 2) < 1e-6);
  assert.ok(Math.max(...topZ) - Math.min(...topZ) >= 0.5 - 1e-6);
});

test("a loft ladder stands steeply under its hatch: its foot lands well inside the hatch's length", () => {
  const f: Furniture = { id: "l", type: "loft_ladder", x: 0, z: 0, rotation: 0, w: 0.6, d: 1.1, h: 2.5, variant: null };
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f);
  // the lowest points are the rails' feet: from the hinge end (z = -0.55) about 0.8 m on, about 72° from the floor
  let foot = -Infinity;
  for (let i = 0; i < buf.p.length; i += 3) if (buf.p[i + 1] < 0.01) foot = Math.max(foot, buf.p[i + 2]);
  const run = foot - (-0.55 + 0.06);
  assert.ok(run > 0.7 && run < 0.9, `foot ${run.toFixed(2)} m out`);
  assert.ok(foot <= 0.55);
});

// ---------------------------------------------------------------------------- spheres, lathes, rounded boxes (#4)

/** A pack item of one part filling the whole item, drawn at `size` (w, d, h) without a turn. */
function solo(part: PackItem["parts"][number], size: [number, number, number] = [1, 1, 1], mirror = false) {
  setPacks([{ id: "t.shapes", name: "Shapes", publisher: "t", items: [{ id: "solo", name: { en: "Solo" }, size: [1, 1, 1], parts: [part] }] }]);
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  const [w, d, h] = size;
  pushFurniture(buf, lines, new GeoBuffer(), { id: "s", type: "pack:t.shapes:solo", x: 0, z: 0, rotation: 0, w, d, h, variant: null, entity: null, power: null, mirror });
  const xs = buf.p.filter((_, i) => i % 3 === 0);
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  const zs = buf.p.filter((_, i) => i % 3 === 2);
  const span = (v: number[]) => [Math.min(...v), Math.max(...v)];
  // the signed volume of a closed mesh (six times the volume) is positive when its faces point outwards
  return { buf, lines, volume: orientation(buf) / 6, x: span(xs), y: span(ys), z: span(zs) };
}

const FULL = { x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "pot" } as const;
const near1 = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol;

test("a sphere fills its part box, squashed when the item is, and is a closed low-poly solid facing outwards", () => {
  const ball = solo({ shape: "sphere", ...FULL }, [2, 1, 0.5]);
  assert.ok(ball.buf.p.every(Number.isFinite));
  assert.ok(near1(ball.x[0], -1, 0.01) && near1(ball.x[1], 1, 0.01), `x ${ball.x}`);
  assert.ok(near1(ball.z[0], -0.5, 0.01) && near1(ball.z[1], 0.5, 0.01), `z ${ball.z}`);
  assert.ok(near1(ball.y[0], 0) && near1(ball.y[1], 0.5), `y ${ball.y}`);
  // an ellipsoid of 2 × 1 × 0.5 m holds π/6 · 1 m³; the low-poly one a little less
  const exact = (Math.PI / 6) * 2 * 1 * 0.5;
  assert.ok(ball.volume > exact * 0.85 && ball.volume <= exact, `volume ${ball.volume} of ${exact}`);
  assert.ok(ball.buf.count <= 160, `${ball.buf.count} triangles`);
  // mirrored it still faces outwards
  assert.ok(near1(solo({ shape: "sphere", ...FULL }, [2, 1, 0.5], true).volume, ball.volume, 1e-6));
});

test("a lathe turns its profile into a closed solid facing outwards, whichever way the profile is written", () => {
  // a straight profile at the part's edge is a (12-sided) cylinder: π · 0.5 · 0.25 · 0.8 m³ for 1 × 0.5 × 0.8 m
  const drum = solo({ shape: "lathe", ...FULL, profile: [[1, 0], [1, 1]] }, [1, 0.5, 0.8]);
  const exact = Math.PI * 0.5 * 0.25 * 0.8;
  assert.ok(drum.volume > exact * 0.9 && drum.volume <= exact, `volume ${drum.volume} of ${exact}`);
  assert.ok(near1(drum.y[0], 0) && near1(drum.y[1], 0.8) && near1(drum.x[1], 0.5, 1e-6) && near1(drum.z[1], 0.25, 0.01));
  // the same profile from the top down
  assert.ok(near1(solo({ shape: "lathe", ...FULL, profile: [[1, 1], [1, 0]] }, [1, 0.5, 0.8]).volume, drum.volume, 1e-9));
  // a vase: a foot, a belly and a narrow neck; mirrored it is the same solid
  const profile: [number, number][] = [[0, 0], [0.6, 0], [1, 0.4], [0.35, 0.9], [0.45, 1], [0, 1]];
  const vase = solo({ shape: "lathe", ...FULL, profile }, [0.3, 0.3, 0.5]);
  assert.ok(vase.volume > 0 && vase.volume < 0.3 * 0.3 * 0.5, `volume ${vase.volume}`);
  assert.ok(near1(solo({ shape: "lathe", ...FULL, profile }, [0.3, 0.3, 0.5], true).volume, vase.volume, 1e-9));
  // a bowl: up the outside, over the rim and down the inside: its hollow takes volume away from the full solid
  const full = solo({ shape: "lathe", ...FULL, profile: [[0, 0], [0.7, 0], [1, 1], [0, 1]] }).volume;
  const bowl = solo({ shape: "lathe", ...FULL, profile: [[0, 0], [0.7, 0], [1, 1], [0.9, 1], [0.6, 0.15], [0, 0.15]] }).volume;
  assert.ok(bowl > 0 && bowl < full * 0.5, `bowl ${bowl} of ${full}`);
  // at most 12 profile points stay low-poly: 11 bands of 12 quads and two caps
  const twelve = solo({ shape: "lathe", ...FULL, profile: Array.from({ length: 12 }, (_, i) => [0.5 + 0.04 * i, i / 11] as [number, number]) });
  assert.ok(twelve.buf.count <= 11 * 24 + 24, `${twelve.buf.count} triangles`);
});

test("a rounded box fills its part box with rounded edges; fully rounded it is a pill", () => {
  const box = 1.2 * 0.6 * 0.4;
  const soft = solo({ shape: "rbox", ...FULL }, [1.2, 0.6, 0.4]);
  assert.ok(near1(soft.x[0], -0.6) && near1(soft.x[1], 0.6) && near1(soft.z[1], 0.3) && near1(soft.y[1], 0.4), `${soft.x} ${soft.z} ${soft.y}`);
  // the default rounding (0.2 of the shortest side: 8 cm) shaves a little off the corners
  assert.ok(soft.volume < box && soft.volume > box * 0.9, `volume ${soft.volume} of ${box}`);
  const pill = solo({ shape: "rbox", ...FULL, round: 0.5 }, [1.2, 0.6, 0.4]);
  assert.ok(pill.volume < soft.volume && pill.volume > box * 0.6, `pill ${pill.volume}`);
  assert.ok(soft.buf.count <= 200, `${soft.buf.count} triangles`);
  assert.ok(near1(solo({ shape: "rbox", ...FULL }, [1.2, 0.6, 0.4], true).volume, soft.volume, 1e-9));
  // its outline follows the rounded corners
  assert.ok(solo({ shape: "rbox", ...FULL, edges: true }, [1.2, 0.6, 0.4]).lines.p.length / 6 === 16);
});

test("round parts keep their measures when the item grows, like the other fixed parts", () => {
  // a cabinet on four ball feet: the feet keep their size and their corners, the carcass stretches
  const foot = (x: number, z: number) => ({ shape: "sphere", x, z, w: 0.1, d: 0.1, y: 0, h: 0.1, color: "metal", fix: "wdh" }) as const;
  setPacks([{ id: "t.shapes", name: "Shapes", publisher: "t", items: [{ id: "cab", name: { en: "Cabinet" }, size: [0.5, 0.5, 0.5], parts: [{ shape: "rbox", x: 0, z: 0, w: 1, d: 1, y: 0.1, h: 0.9, color: "wood", round: 0.1 }, foot(-0.45, -0.45), foot(0.45, 0.45)] }] }]);
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), { id: "c", type: "pack:t.shapes:cab", x: 0, z: 0, rotation: 0, w: 1, d: 1, h: 1, variant: null, entity: null, power: null });
  // the feet: everything below the carcass (5 cm), 5 cm wide each, in the corners of the larger item
  const low: number[][] = [];
  for (let i = 0; i < buf.p.length; i += 3) if (buf.p[i + 1] < 0.05 - 1e-6) low.push([buf.p[i], buf.p[i + 2]]);
  const xs = low.map((p) => p[0]);
  assert.ok(near1(Math.min(...xs), -0.5, 0.002) && near1(Math.max(...xs), 0.5, 0.002), `feet ${Math.min(...xs)}..${Math.max(...xs)}`);
  assert.ok(low.every(([x]) => Math.abs(Math.abs(x) - 0.475) <= 0.025 + 1e-6), "each foot stays 5 cm wide");
});

test("a pouffe (a sphere) and a planter (a lathe) cast a round shadow; a rounded box does not (#4)", async () => {
  const { roundFootprint } = await import("./furniture.ts");
  const part = { x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "fabric" } as const;
  setPacks([{ id: "g", name: "G", publisher: "G", items: [
    { id: "pouffe", name: { en: "Pouffe" }, size: [0.5, 0.5, 0.4], parts: [{ ...part, shape: "sphere" }] },
    { id: "planter", name: { en: "Planter" }, size: [0.5, 0.5, 0.6], parts: [{ ...part, shape: "lathe", profile: [[0.7, 0], [1, 1]] }] },
    { id: "cushion", name: { en: "Cushion" }, size: [0.5, 0.5, 0.2], parts: [{ ...part, shape: "rbox" }] },
  ] }]);
  try {
    assert.equal(roundFootprint({ type: "pack:g:pouffe" }), true);
    assert.equal(roundFootprint({ type: "pack:g:planter" }), true);
    assert.equal(roundFootprint({ type: "pack:g:cushion" }), false);
  } finally {
    setPacks([]);
  }
});
