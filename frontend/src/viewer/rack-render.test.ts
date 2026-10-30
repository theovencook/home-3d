// A rack's gear in 3D (#113): each slot's item is drawn inside the rack at its U, from the plan's recipe copies, so the
// view needs no library to show it.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { setPacks, setPlanRecipes, type PackItem, type PlanRecipe } from "../packs.ts";
import { rackLayout, readRackFrame } from "../rack-frame.ts";
import { pushFurniture, pushRackLeds } from "./furniture.ts";
import { GeoBuffer, LineBuffer } from "./geo.ts";

const NETWORK = new URL("../../../custom_components/home_3d/bundled_packs/theovencook.it/network/", import.meta.url);
const read = (id: string): PackItem => JSON.parse(readFileSync(new URL(`${id}.json`, NETWORK), "utf8"));
const RACK = read("rack_wall_cabinet_9u");
const SWITCH = read("rack_switch_24_1u");
const T_RACK = "pack:theovencook.it:rack_wall_cabinet_9u";
const T_SWITCH = "pack:theovencook.it:rack_switch_24_1u";

const copy = (type: string, recipe: PackItem): PlanRecipe => ({ pack: "theovencook.it", item: recipe.id, release: 1, hash: `sha256:${type}`, recipe });

function rack(slots: { id: string; type: string; u: number }[]): Furniture {
  const [w, d, h] = RACK.size;
  return { id: "r", type: T_RACK, x: 0, z: 0, rotation: 0, w, d, h, variant: null, entity: null, power: null, rack: { slots } };
}

function heights(f: Furniture): number[] {
  const buf = new GeoBuffer();
  pushFurniture(buf, new LineBuffer(), new GeoBuffer(), f, 0);
  return buf.p.filter((_, i) => i % 3 === 1);
}

test("a rack's gear is drawn inside it at its U, from the plan's recipe copies without the library (#113)", () => {
  setPacks([]);
  setPlanRecipes({ [T_RACK]: copy(T_RACK, RACK), [T_SWITCH]: copy(T_SWITCH, SWITCH) });
  const empty = heights(rack([]));
  const filled = heights(rack([{ id: "s", type: T_SWITCH, u: 5 }]));
  assert.ok(filled.length > empty.length, "the switch adds triangles");
  // the switch's own geometry sits within U5
  const at = rackLayout(readRackFrame(RACK)!, ...RACK.size);
  const added = filled.slice(empty.length);
  assert.ok(Math.min(...added) >= at.units[4].y0 - 1e-6 && Math.max(...added) <= at.units[4].y1 + 1e-6, "inside U5");
  // a slot whose gear has no recipe draws nothing (and breaks nothing)
  assert.equal(heights(rack([{ id: "x", type: "pack:gone:thing", u: 1 }])).length, empty.length);
  setPlanRecipes(undefined);
});

test("status LEDs (#119): one small box per linked slot, in front of its gear, placed and turned with the rack", () => {
  setPacks([]);
  setPlanRecipes({ [T_RACK]: copy(T_RACK, RACK), [T_SWITCH]: copy(T_SWITCH, SWITCH) });
  const slots = [
    { id: "a", type: T_SWITCH, u: 2, entity: "binary_sensor.a" },
    { id: "b", type: T_SWITCH, u: 4 },
    { id: "c", type: T_SWITCH, u: 6, links: ["sensor.c"] },
  ];
  const f = { ...rack(slots), x: 2, z: 3 };
  const buf = new GeoBuffer();
  const ranges = pushRackLeds(buf, f, 1.2, ["a", "c"]);
  assert.deepEqual([...ranges.keys()], ["a", "c"]);
  const a = ranges.get("a")!;
  assert.equal(a.end - a.start, 12, "a box: 12 triangles");
  // every LED vertex sits in front of the rack's front (+z), at the rack's place, up at its U
  const at = rackLayout(readRackFrame(RACK)!, ...RACK.size);
  const ys: number[] = [];
  for (let i = 0; i < buf.p.length; i += 3) {
    assert.ok(Math.abs(buf.p[i] - 2) < RACK.size[0] / 2, "x within the rack");
    assert.ok(buf.p[i + 2] > 3 + at.front, "in front of the front rails");
    ys.push(buf.p[i + 1]);
  }
  assert.ok(Math.min(...ys.slice(0, 36)) > 1.2 + at.units[1].y0 && Math.max(...ys.slice(0, 36)) < 1.2 + at.units[1].y1, "first LED within U2");
  // turned 180°: in front of the rack is now -z
  const turned = new GeoBuffer();
  pushRackLeds(turned, { ...f, rotation: 180 }, 1.2, ["a"]);
  for (let i = 2; i < turned.p.length; i += 3) assert.ok(turned.p[i] < 3 - at.front);
  // nothing linked, or no rack: nothing drawn
  assert.equal(pushRackLeds(new GeoBuffer(), f, 0, []).size, 0);
  setPlanRecipes(undefined);
});
