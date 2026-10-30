import assert from "node:assert/strict";
import { test } from "node:test";
import { furnitureFields, furniturePanel } from "./item-panel.ts";

test("the Name box sits below the position fields, not where the library's search box was (#70)", () => {
  const order = furnitureFields({ mirror: true, strip: false, lift: true });
  const name = order.indexOf("name");
  for (const pos of ["x", "z", "rotation"] as const) assert.ok(order.indexOf(pos) < name, `${pos} before name`);
  assert.equal(order[0], "x");
});

const KINDS = [
  { mirror: true, strip: false, lift: false },
  { mirror: false, strip: false, lift: true },
  { mirror: true, strip: true, lift: true },
  { mirror: false, strip: false, lift: false },
];

test("the pinned header holds X, Y and the rotation for every kind of item (#71)", () => {
  for (const needs of KINDS) assert.deepEqual(furniturePanel(needs).head, ["x", "z", "rotation"]);
});

test("every kind of item lists its fields in the same order, with the size first below the header (#71)", () => {
  const full = furniturePanel({ mirror: true, strip: true, lift: true }).body;
  for (const needs of KINDS) {
    const body = furniturePanel(needs).body;
    assert.deepEqual(body.slice(0, 3), ["w", "d", "h"]);
    assert.deepEqual(body, full.filter((f) => body.includes(f)));
  }
});

test("the show-name row is always there, so naming an item doesn't push the rows below it (#71)", () => {
  for (const needs of KINDS) assert.ok(furniturePanel(needs).body.includes("show_name"));
});
