import assert from "node:assert/strict";
import { test } from "node:test";
import { furnitureFields } from "./item-panel.ts";

test("the Name box sits below the position fields, not where the library's search box was (#70)", () => {
  const order = furnitureFields({ mirror: true, strip: false, lift: true });
  const name = order.indexOf("name");
  for (const pos of ["x", "z", "rotation"] as const) assert.ok(order.indexOf(pos) < name, `${pos} before name`);
  assert.equal(order[0], "x");
});
