import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { itemsAt, minHitPx } from "./pick.ts";

const item = (id: string, x: number, z: number, w: number, d: number, rotation = 0): Furniture => ({ id, type: "box", x, z, rotation, w, d, h: 0.5, variant: null });

test("a tiny item is hit within a 24 px target, 44 px on touch (#72)", () => {
  // a 9 x 3 cm thermostat at 50 px/m is 4.5 x 1.5 px on screen
  const thermostat = item("t", 2, 2, 0.09, 0.03);
  assert.equal(minHitPx("mouse"), 24);
  assert.equal(minHitPx("pen"), 24);
  assert.equal(minHitPx("touch"), 44);
  // 10 px from its centre: inside a 24 px target (12 px each side), outside the drawn shape
  assert.deepEqual(itemsAt([thermostat], [2 + 10 / 50, 2], 50, 24), ["t"]);
  // 15 px away: outside 24 px, inside 44 px
  assert.deepEqual(itemsAt([thermostat], [2 + 15 / 50, 2], 50, 24), []);
  assert.deepEqual(itemsAt([thermostat], [2 + 15 / 50, 2], 50, 44), ["t"]);
});

test("a turned item is hit along its own axes (#72)", () => {
  const bench = item("b", 0, 0, 2, 0.4, 90);
  // turned 90 degrees: 2 m long along z, 0.4 m along x
  assert.deepEqual(itemsAt([bench], [0, 0.9], 100, 24), ["b"]);
  assert.deepEqual(itemsAt([bench], [0.9, 0], 100, 24), []);
});

test("stacked items: the smallest drawn shape under the point comes first, padded targets after real hits (#72)", () => {
  const sideboard = item("sb", 2, 2, 1.6, 0.45);
  const thermostat = item("t", 2, 2, 0.09, 0.03);
  const lamp = item("l", 2.5, 2, 0.2, 0.2);
  // on the thermostat itself: the thermostat, then the sideboard under it
  assert.deepEqual(itemsAt([thermostat, sideboard, lamp], [2, 2], 50, 24), ["t", "sb"]);
  // on the sideboard 8 px beside the thermostat: the sideboard was pressed, the thermostat's padding comes second
  assert.deepEqual(itemsAt([sideboard, thermostat], [2 + 8 / 50, 2], 50, 24), ["sb", "t"]);
});

test("items can be left out of the hit test, e.g. hidden in the editor (#72)", () => {
  const a = item("a", 0, 0, 1, 1);
  assert.deepEqual(itemsAt([a], [0, 0], 50, 24, (f) => f.id === "a"), []);
});
