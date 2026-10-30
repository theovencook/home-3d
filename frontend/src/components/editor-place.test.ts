import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { makeEditor, planEl, square } from "./editor-harness.ts";

const settle = () => new Promise((r) => setTimeout(r, 0));
const rooms = () => [square("r1", 0, 0, 3, 3), square("r2", 3, 0, 6, 3)];

test("choosing a library card arms it; a click on the plan places it there (#76)", async () => {
  const ed = await makeEditor(rooms());
  ed._tool = "furniture";
  ed.addFurniture("armchair");
  await settle();
  assert.equal(ed._doc.floors[0].furniture.length, 0, "nothing placed yet");
  assert.equal(ed._placing?.type, "armchair");
  // press inside room r2 at (4.5 m, 1.5 m)
  ed.press(450, 150, { target: planEl({ "data-room": "r2" }) });
  ed.release(450, 150);
  await settle();
  const [f] = ed._doc.floors[0].furniture as Furniture[];
  assert.equal(f?.type, "armchair");
  assert.deepEqual([f.x, f.z], [4.5, 1.5]);
  assert.equal(ed._furnitureId, f.id, "the new item is selected");
  assert.equal(ed._roomId, "r2", "in the room it was placed in");
  assert.equal(ed._placing, null, "one placement per pick");
  assert.equal(ed.drag?.kind ?? null, null, "the room did not start a drag");
});

test("the click snaps to the grid, Alt places freely (#76)", async () => {
  const ed = await makeEditor(rooms());
  ed._doc.settings.grid = 0.1;
  ed.addFurniture("armchair");
  ed.press(123, 187);
  await settle();
  ed.addFurniture("armchair");
  ed.press(123, 187, { altKey: true });
  await settle();
  const [a, b] = ed._doc.floors[0].furniture as Furniture[];
  assert.deepEqual([a.x, a.z], [1.2, 1.9]);
  assert.deepEqual([b.x, b.z], [1.23, 1.87]);
});

test("Shift keeps the card armed for the next click (#76)", async () => {
  const ed = await makeEditor(rooms());
  ed.addFurniture("chair");
  ed.press(100, 100, { shiftKey: true });
  ed.release(100, 100, { shiftKey: true });
  ed.press(200, 100, { shiftKey: true });
  await settle();
  assert.equal(ed._doc.floors[0].furniture.length, 2);
  assert.equal(ed._placing?.type, "chair");
});

test("Escape or another tool cancels an armed card (#76)", async () => {
  const ed = await makeEditor(rooms());
  ed.addFurniture("chair");
  ed.key("Escape");
  assert.equal(ed._placing, null);
  ed.addFurniture("chair");
  ed.setTool("rect");
  assert.equal(ed._placing, null);
});

test("'Place in the middle' places an armed card the old way, in the selected room (#76)", async () => {
  const ed = await makeEditor(rooms());
  ed.selectItem("room", "r1");
  ed.addFurniture("chair");
  ed.placeArmedInMiddle();
  await settle();
  const [f] = ed._doc.floors[0].furniture as Furniture[];
  assert.deepEqual([f.x, f.z], [1.5, 1.5]);
  assert.equal(ed._placing, null);
});
