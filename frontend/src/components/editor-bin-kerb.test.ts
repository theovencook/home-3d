// A bin's kerb spot is easy to find (#226): it sits right under the position fields of the bin's panel, before the
// shape, colours and collection fields; the household bins settings have a button that goes to it.
import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { SETTINGS } from "../settings/registry.ts";
import { makeEditor, square } from "./editor-harness.ts";

const flat = (v: unknown): string => {
  if (v == null || typeof v === "boolean") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  const t = v as { strings?: readonly string[]; values?: unknown[] };
  if (typeof v === "object") return t.strings ? t.strings.map((s, i) => s + (i < t.values!.length ? flat(t.values![i]) : "")).join("") : "";
  return String(v);
};

const bin = (id = "bin", x = 1.5): Furniture => ({ id, type: "waste_bin", x, z: 1.5, rotation: 0, w: 0.58, d: 0.72, h: 1.07, variant: null });

test("a selected bin shows Set kerb spot before its shape, colours and collection fields (#226)", async () => {
  const ed = await makeEditor([square("r1", 0, 0, 6, 6)], [bin()]);
  ed.selectItem("furniture", "bin");
  const out = flat(ed.renderFurnitureForm(ed.furnitureItem));
  const at = (s: string) => out.indexOf(s);
  assert.ok(at("Set kerb spot") > 0, "the button is there");
  for (const later of ["Waste calendar or sensor", "Word in the calendar", "Shape"]) assert.ok(at("Set kerb spot") < at(later), `before "${later}"`);
  assert.equal(out.split("Set kerb spot").length - 1, 1, "once, not twice");
  // a bin with a spot offers Move and Remove
  ed.updateFurniture({ bin_kerb: { x: 3, z: 4 } });
  const set = flat(ed.renderFurnitureForm(ed.furnitureItem));
  assert.ok(set.includes("Move kerb spot") && set.includes("Remove"));
});

test("the kerb spot is not on other items (#226)", async () => {
  const ed = await makeEditor([square("r1", 0, 0, 6, 6)], [{ ...bin("sofa"), type: "sofa" }]);
  ed.selectItem("furniture", "sofa");
  assert.ok(!flat(ed.renderFurnitureForm(ed.furnitureItem)).includes("kerb spot"));
});

test("goToFurniture selects an item on another floor and shows it (#226)", async () => {
  const ed = await makeEditor([square("r1", 0, 0, 6, 6)], [bin()]);
  ed._doc.floors.push({ ...ed._doc.floors[0], id: "g", furniture: [bin("far", 4)], rooms: [square("r2", 0, 0, 6, 6)] });
  ed._floorId = "f";
  assert.equal(ed.goToFurniture("far"), true);
  assert.equal(ed._floorId, "g");
  assert.equal(ed._furnitureId, "far");
  assert.equal(ed.goToFurniture("nope"), false);
});

test("the household bins settings have a button that goes to the bin's kerb spot (#226)", () => {
  const s = SETTINGS.find((x) => x.id === "household.kerb");
  assert.ok(s && s.card === "bins" && s.control.kind === "action");
  assert.equal((s.control as { action: string }).action, "kerb");
});
