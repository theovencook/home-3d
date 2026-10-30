import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { setPacks, type FurniturePack } from "../packs.ts";
import { makeEditor, square } from "./editor-harness.ts";

const PACK: FurniturePack = {
  id: "demo.cars",
  name: "Cars",
  publisher: "Demo",
  items: [
    {
      id: "hatch",
      name: { en: "Hatch" },
      size: [1.8, 4, 1.5],
      parts: [
        { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.2, h: 0.4, color: "paint" },
        { shape: "box", x: 0, z: 0, w: 0.8, d: 0.5, y: 0.6, h: 0.3, color: "glass" },
      ],
    },
  ],
};

const flat = (v: unknown): string => {
  if (v == null || typeof v === "boolean") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  const t = v as { strings?: readonly string[]; values?: unknown[] };
  if (typeof v === "object") return t.strings ? t.strings.map((s, i) => s + (i < t.values!.length ? flat(t.values![i]) : "")).join("") : "";
  return String(v);
};

const car = (): Furniture => ({ id: "car", type: "pack:demo.cars:hatch", x: 1.5, z: 1.5, rotation: 0, w: 1.8, d: 4, h: 1.5, variant: null });

async function editor() {
  setPacks([PACK]);
  const ed = await makeEditor([square("r1", 0, 0, 6, 6)], [car()]);
  ed.packs = [PACK];
  ed.selectItem("furniture", "car");
  return ed;
}
const colours = (ed: Awaited<ReturnType<typeof editor>>) => ed._doc.floors[0].furniture.find((f: Furniture) => f.id === "car").colors;

test("the paint role of a car offers ten swatches and a hex field in the item panel (#129)", async () => {
  const ed = await editor();
  const html = flat(ed.renderColourRoles(ed.furnitureItem));
  for (const name of ["White", "Black", "Silver", "Grey", "Blue", "Red", "Green", "Yellow/orange", "Brown/bronze", "Dark blue"]) assert.ok(html.includes(`aria-label=${name} `) || html.includes(`title=${name} `), name);
  assert.equal((html.match(/class="fp3d-swatch"/g) ?? []).length, 10);
  assert.match(html, /Hex colour/);
});

test("picking a swatch saves the colour in the paint role of the placed item (#129)", async () => {
  const ed = await editor();
  ed.setPaint(ed.furnitureItem, "#B3262D");
  assert.deepEqual(colours(ed), { paint: "#b3262d" });
});

test("a typed hex value is saved, a bad one is ignored, and empty goes back to the look (#129)", async () => {
  const ed = await editor();
  ed.setPaint(ed.furnitureItem, "2f6b45");
  assert.deepEqual(colours(ed), { paint: "#2f6b45" });
  ed.setPaint(ed.furnitureItem, "banana");
  assert.deepEqual(colours(ed), { paint: "#2f6b45" }, "not a colour: unchanged");
  ed.setPaint(ed.furnitureItem, "");
  assert.equal(colours(ed) ?? null, null);
});

test("a copy of a painted car keeps its paint (#129)", async () => {
  const ed = await editor();
  ed.setPaint(ed.furnitureItem, "#e08a1e");
  ed.duplicateFurniture();
  const [a, b] = ed._doc.floors[0].furniture;
  assert.deepEqual(b.colors, a.colors);
  assert.equal(b.colors.paint, "#e08a1e");
  assert.notEqual(a.id, b.id);
});
