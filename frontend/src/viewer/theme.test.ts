import assert from "node:assert/strict";
import { test } from "node:test";
import { contrast } from "../scheme.ts";
import { STAGE } from "../themes.ts";
import { FLOOR_LOOK } from "./build.ts";
import { DAY_LINE, dayFloor, daySurface, neonSurface } from "./theme.ts";

const hex = (n: number) => `#${n.toString(16).padStart(6, "0")}`;
const rgbHex = (c: number[]) => `#${c.map((v) => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, "0")).join("")}`;
const unit = (n: number): [number, number, number] => [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
// the neon colours the geometry is built in: a furniture body and a wall
const ITEM = 0x172238;
const WALL = 0x131d31;

test("Day floors keep their material: wood, oak, tiles and carpet are told apart (#86)", () => {
  const seen = new Set(Object.keys(FLOOR_LOOK).map((k) => dayFloor(FLOOR_LOOK[k].color)));
  assert.equal(seen.size, Object.keys(FLOOR_LOOK).length);
  assert.ok(contrast(hex(dayFloor(FLOOR_LOOK.wood.color)!), hex(dayFloor(FLOOR_LOOK.tiles.color)!)) >= 1.5);
  // any other colour is no floor
  assert.equal(dayFloor(ITEM), null);
});

test("Day items stand out from every floor and from the walls (#86)", () => {
  const item = rgbHex(daySurface(unit(ITEM)));
  for (const k of Object.keys(FLOOR_LOOK)) assert.ok(contrast(item, hex(dayFloor(FLOOR_LOOK[k].color)!)) >= 1.25, `item on ${k}`);
  assert.ok(contrast(item, rgbHex(daySurface(unit(WALL)))) >= 1.1, "item against a wall");
});

test("Day lines read clearly against the Day sky (#86)", () => {
  const sky = rgbHex(STAGE.day.day[0].map((v) => v / 255));
  assert.ok(contrast(rgbHex(DAY_LINE), sky) >= 7);
});

test("Neon lifts items a notch above the floor they stand on; signal colours and floors stay as built (#88)", () => {
  const item = rgbHex(neonSurface(unit(ITEM)));
  for (const k of Object.keys(FLOOR_LOOK)) {
    const floor = rgbHex(neonSurface(unit(FLOOR_LOOK[k].color)));
    assert.equal(floor, hex(FLOOR_LOOK[k].color), `${k} floor unchanged`);
    assert.ok(contrast(item, floor) >= 1.3, `item on ${k}`);
  }
  assert.ok(contrast(rgbHex(neonSurface(unit(WALL))), hex(FLOOR_LOOK.wood.color)) >= 1.15, "walls stand out of the floor");
  // a lit lamp's yellow is a signal colour
  assert.equal(rgbHex(neonSurface(unit(0xffd36b))), "#ffd36b");
});
