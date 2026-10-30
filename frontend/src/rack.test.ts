// Rack contents (#113): rack-mount gear fitted into whole-U positions of a placed rack, saved on it as `rack.slots`.
// The placement rules are pure (rack.ts); the backend checks the same ones (custom_components/home_3d/racks.py).

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import type { PackItem } from "./packs.ts";
import { rackLayout, readRackFrame } from "./rack-frame.ts";
import { addSlot, packGearOf, rackContents, rackGearProblems, readRackGear, RACK_GEAR_DEPTHS, RACK_GEAR_WIDTHS, RACK_MAX_SLOTS, moveSlot, removeSlot, type GearOf, type RackSlot, type RackSpace } from "./rack.ts";

/** A 9U 19" rack 0.4 m deep. */
const SPACE: RackSpace = { u: 9, width: 19, mountDepth: 0.4 };

/** 1U switch and blanking plate, a 2U UPS, a 10" panel and a deep server. */
const gearOf: GearOf = (type) =>
  ({
    switch: { gear: { u: 1, width: "full", depth: "half", inch: 19 }, depth: 0.25 },
    blank: { gear: { u: 1, width: "full", depth: "half", inch: 19 }, depth: 0.01 },
    ups: { gear: { u: 2, width: "full", depth: "full", inch: 19 }, depth: 0.38 },
    mini: { gear: { u: 1, width: "full", depth: "half", inch: 10 }, depth: 0.1 },
    server: { gear: { u: 1, width: "full", depth: "full", inch: 19 }, depth: 0.7 },
  } as Record<string, ReturnType<GearOf>>)[type] ?? null;

const slot = (id: string, type: string, u: number): RackSlot => ({ id, type, u });

test("gear goes into a free U and its slot is kept in order from the bottom (#113)", () => {
  const one = addSlot(SPACE, [], slot("a", "ups", 3), gearOf);
  assert.equal(one.ok, true);
  const two = addSlot(SPACE, one.slots, slot("b", "switch", 1), gearOf);
  assert.equal(two.ok, true);
  assert.deepEqual(two.slots, [slot("b", "switch", 1), slot("a", "ups", 3)]);
});

test("gear that would overlap other gear is refused, naming what it hits and where (#113)", () => {
  const slots = [slot("a", "ups", 3)];
  // the 2U UPS takes U3 and U4: a switch at U4 hits it
  const hit = addSlot(SPACE, slots, slot("b", "switch", 4), gearOf);
  assert.equal(hit.ok, false);
  assert.equal(hit.why, "overlap");
  assert.deepEqual(hit.clash, ["a"]);
  assert.deepEqual(hit.units, [4]);
  assert.equal(hit.slots, slots, "the slots stay as they were");
  // a UPS at U2 takes U2 and U3: hits it too
  assert.equal(addSlot(SPACE, slots, slot("c", "ups", 2), gearOf).why, "overlap");
  // just below and just above are free
  assert.equal(addSlot(SPACE, slots, slot("d", "switch", 2), gearOf).ok, true);
  assert.equal(addSlot(SPACE, slots, slot("e", "switch", 5), gearOf).ok, true);
});

test("gear must fit inside the rack: no U below the first or above the top, nothing deeper than the rails, the rack's width (#113)", () => {
  assert.equal(addSlot(SPACE, [], slot("a", "switch", 0), gearOf).why, "outside");
  assert.equal(addSlot(SPACE, [], slot("a", "switch", 9), gearOf).ok, true);
  assert.equal(addSlot(SPACE, [], slot("a", "ups", 9), gearOf).why, "outside", "a 2U box at the top U sticks out");
  assert.equal(addSlot(SPACE, [], slot("a", "switch", 2.5), gearOf).why, "outside", "whole U only");
  assert.equal(addSlot(SPACE, [], slot("a", "server", 1), gearOf).why, "too_deep");
  assert.equal(addSlot(SPACE, [], slot("a", "mini", 1), gearOf).why, "wrong_width");
  assert.equal(addSlot(SPACE, [], slot("a", "sofa", 1), gearOf).why, "not_gear");
});

test("moving gear checks the new place against everything but itself (#113)", () => {
  const slots = [slot("a", "ups", 3), slot("b", "switch", 6)];
  // one U down overlaps only its own old place: fine
  const down = moveSlot(SPACE, slots, "a", 2, gearOf);
  assert.equal(down.ok, true);
  assert.deepEqual(down.slots, [slot("a", "ups", 2), slot("b", "switch", 6)]);
  // onto the switch: refused
  const onto = moveSlot(SPACE, slots, "a", 5, gearOf);
  assert.equal(onto.ok, false);
  assert.deepEqual(onto.clash, ["b"]);
  assert.equal(moveSlot(SPACE, slots, "nope", 1, gearOf).ok, false);
});

test("deleting gear frees its U (#113)", () => {
  const slots = [slot("a", "ups", 3), slot("b", "switch", 6)];
  assert.deepEqual(removeSlot(slots, "a"), [slot("b", "switch", 6)]);
  assert.equal(addSlot(SPACE, removeSlot(slots, "a"), slot("c", "switch", 4), gearOf).ok, true);
});

const PACKS_PY = readFileSync(new URL("../../custom_components/home_3d/packs.py", import.meta.url), "utf8");
const RACKS_PY = readFileSync(new URL("../../custom_components/home_3d/racks.py", import.meta.url), "utf8");
function py(src: string, name: string): unknown {
  const line = src.match(new RegExp(`^${name} = (.*)$`, "m"));
  assert.ok(line, `the backend names ${name}`);
  return JSON.parse(line[1]);
}

test("the gear lists are the ones the backend checks (#113)", () => {
  assert.deepEqual(RACK_GEAR_WIDTHS, py(PACKS_PY, "RACK_GEAR_WIDTHS"));
  assert.deepEqual(RACK_GEAR_DEPTHS, py(PACKS_PY, "RACK_GEAR_DEPTHS"));
  assert.equal(RACK_MAX_SLOTS, py(RACKS_PY, "RACK_MAX_SLOTS"));
});

const SWITCH: PackItem = {
  id: "rack_switch_24_1u",
  name: { en: "Switch 24-port 1U" },
  size: [0.4826, 0.25, 0.0437],
  parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "dark" }],
  rack: { u: 1 },
};

test("a gear spec reads with its defaults; one that breaks the rules makes no gear (#113)", () => {
  assert.deepEqual(readRackGear(SWITCH), { u: 1, width: "full", depth: "half", inch: 19 });
  assert.equal(readRackGear({ ...SWITCH, rack: undefined }), null);
  for (const bad of [{ u: 1.5 }, { u: 61 }, { u: -1 }, { u: 1, width: "quarter" }, { u: 1, depth: "deep" }, { u: 1, inch: 23 }, { u: 1, colour: "red" }])
    assert.equal(readRackGear({ ...SWITCH, rack: bad as never }), null, JSON.stringify(bad));
  assert.deepEqual(rackGearProblems({ rack: { u: 1, width: "quarter" } as never }).map((p) => p.field), ["width"]);
});

test("a pack item is gear by its spec, with its depth from its size (#113)", () => {
  const items: Record<string, PackItem> = { "pack:t:switch": SWITCH, "pack:t:sofa": { ...SWITCH, rack: undefined } };
  const of = packGearOf((t) => items[t]);
  assert.deepEqual(of("pack:t:switch"), { gear: { u: 1, width: "full", depth: "half", inch: 19 }, depth: 0.25 });
  assert.equal(of("pack:t:sofa"), null);
  assert.equal(of("pack:t:gone"), null);
});

const CABINET: PackItem = {
  id: "wall_cabinet_9u",
  name: { en: "Wall cabinet 9U" },
  size: [0.6, 0.45, 0.5],
  mount: "wall",
  parts: [],
  rack_frame: { u: 9, form: "wall_cabinet", door: "glass" },
};

test("gear in a rack is drawn on the front rails at its U, as wide as the panels, up to its own depth (#113)", () => {
  const at = rackLayout(readRackFrame(CABINET)!, 0.6, 0.45, 0.5);
  const items: Record<string, PackItem> = { sw: SWITCH, ups: { ...SWITCH, size: [0.4826, 0.38, 0.088], rack: { u: 2, depth: "full" } } };
  const got = rackContents(at, [slot("a", "sw", 1), slot("b", "ups", 3), slot("c", "gone", 6), slot("d", "ups", 9)], (t) => items[t]);
  assert.deepEqual(got.map((g) => g.slot.id), ["a", "b"], "unknown gear and gear that no longer fits are left out");
  const [sw, ups] = got;
  assert.equal(sw.item, SWITCH);
  // U1 starts at the bottom of the U space; a 43.7 mm box sits in the middle of its 44.45 mm
  assert.ok(Math.abs(sw.y - (at.units[0].y0 + (0.04445 - 0.0437) / 2)) < 1e-9);
  assert.equal(sw.h, 0.0437);
  assert.equal(sw.w, 0.4826);
  assert.equal(sw.d, 0.25);
  assert.equal(sw.x, 0);
  // its front panel just in front of the rails' face
  assert.ok(Math.abs(sw.z + sw.d / 2 - (at.front + 0.003)) < 1e-9);
  assert.ok(Math.abs(ups.y - (at.units[2].y0 + (2 * 0.04445 - 0.088) / 2)) < 1e-9);
});
