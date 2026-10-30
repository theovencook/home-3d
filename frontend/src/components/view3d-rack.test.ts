// Tapping a rack in the 2D view (#115): a sheet shows the rack's front view with its gear, readable on a wall tablet.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Furniture } from "../model.ts";
import { setPacks, type FurniturePack, type PackItem } from "../packs.ts";

for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dView3d } = (await import("./view3d.ts")) as unknown as { Fp3dView3d: { new (): Record<string, any> } };

const NETWORK = new URL("../../../custom_components/home_3d/bundled_packs/theovencook.it/network/", import.meta.url);
const read = (id: string): PackItem => JSON.parse(readFileSync(new URL(`${id}.json`, NETWORK), "utf8"));
const PACK = { id: "theovencook.it", name: "IT", publisher: "t", items: ["rack_wall_cabinet_9u", "rack_switch_24_1u"].map(read) } as unknown as FurniturePack;

const flat = (v: unknown): string => {
  if (v == null || typeof v === "symbol" || typeof v === "function") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  if (typeof v === "object" && "strings" in (v as object)) {
    const t = v as { strings: readonly string[]; values: unknown[] };
    return t.strings.map((s, i) => s + (i < t.values.length ? flat(t.values[i]) : "")).join("");
  }
  return String(v);
};

function viewer(): Record<string, any> {
  setPacks([PACK]);
  const el = new Fp3dView3d();
  el.hass = { language: "en", locale: { language: "en", number_format: "language" }, states: {}, config: { unit_system: {} } };
  const b = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  const rack: Furniture = { id: "rack", type: "pack:theovencook.it:rack_wall_cabinet_9u", name: "Hall rack", x: 1, z: 1, rotation: 0, w: 0.6, d: 0.45, h: 0.5, variant: null, rack: { slots: [{ id: "s1", type: "pack:theovencook.it:rack_switch_24_1u", u: 2, name: "Core switch" }] } } as Furniture;
  floor.furniture = [rack];
  b.floors = [floor];
  el.building = b;
  return el;
}

test("a rack tapped in the plan opens a sheet with its front view; closing it hides the sheet (#115)", () => {
  const el = viewer();
  assert.equal(flat(el.renderRackView()), "");
  el.showRackView("rack");
  const sheet = flat(el.renderRackView());
  assert.match(sheet, /role="dialog"/);
  assert.match(sheet, /Hall rack/);
  assert.match(sheet, /1 of 9U used/);
  const view = el.rackViewOf();
  assert.match(view.svg, /Core switch/);
  // built once while the sheet stays open
  assert.equal(el.rackViewOf(), view);
  el.closeRackView();
  assert.equal(flat(el.renderRackView()), "");
});

test("a tap naming a rack that is gone shows nothing (#115)", () => {
  const el = viewer();
  el.showRackView("nope");
  assert.equal(flat(el.renderRackView()), "");
});
