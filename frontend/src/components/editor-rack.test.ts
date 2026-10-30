// "Edit rack" from the item panel (#113): a rack's panel opens the rack sheet; the sheet's changes become one undo
// step each on the placed rack's `rack.slots`; someone who can't edit opens it read-only and changes nothing.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import type { Furniture } from "../model.ts";
import { setPacks, type FurniturePack, type PackItem } from "../packs.ts";
import type { RackSlot } from "../rack.ts";
import { makeEditor, square } from "./editor-harness.ts";

const NETWORK = new URL("../../../custom_components/home_3d/bundled_packs/theovencook.it/network/", import.meta.url);
const read = (id: string): PackItem => JSON.parse(readFileSync(new URL(`${id}.json`, NETWORK), "utf8"));
const PACK = { id: "theovencook.it", name: "IT", publisher: "t", items: ["rack_wall_cabinet_9u", "rack_switch_24_1u", "rack_patch_panel_24_1u", "rack_blank_1u", "router"].map(read) } as unknown as FurniturePack;
const RACK = "pack:theovencook.it:rack_wall_cabinet_9u";
const SWITCH = "pack:theovencook.it:rack_switch_24_1u";

const flat = (v: unknown): string => {
  if (v == null || typeof v === "function" || typeof v === "symbol") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  const t = v as { strings?: readonly string[]; values?: unknown[] };
  if (typeof v === "object") return t.strings ? t.strings.map((s, i) => s + (i < t.values!.length ? flat(t.values![i]) : "")).join("") : "";
  return String(v);
};

const rack = (): Furniture => ({ id: "rack", type: RACK, x: 1, z: 1, rotation: 0, w: 0.6, d: 0.45, h: 0.5, variant: null });
const router = (): Furniture => ({ id: "router", type: "pack:theovencook.it:router", x: 2, z: 2, rotation: 0, w: 0.3, d: 0.2, h: 0.05, variant: null });

async function editor() {
  setPacks([PACK]);
  const ed = await makeEditor([square("r1", 0, 0, 4, 4)], [rack(), router()]);
  ed.packs = [PACK];
  return ed;
}

test("a rack's item panel has Edit rack; other items have not (#113)", async () => {
  const ed = await editor();
  ed.selectItem("furniture", "rack");
  assert.match(flat(ed.renderFurnitureForm(ed.furnitureItem)), /rack_edit|Edit rack/);
  ed.selectItem("furniture", "router");
  assert.doesNotMatch(flat(ed.renderFurnitureForm(ed.furnitureItem)), /Edit rack/);
});

test("the sheet offers the rack's gear and its numbers, and its changes land on the rack as one undo step each (#113)", async () => {
  const ed = await editor();
  ed.selectItem("furniture", "rack");
  ed.openRackSheet();
  const props = ed.rackSheetProps();
  assert.equal(props.space.u, 9);
  assert.deepEqual(props.labels, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.deepEqual(props.gear.map((g: { type: string }) => g.type).sort(), ["pack:theovencook.it:rack_blank_1u", "pack:theovencook.it:rack_patch_panel_24_1u", SWITCH]);
  assert.equal(props.editable, true);
  const slots: RackSlot[] = [{ id: "s1", type: SWITCH, u: 3 }];
  ed.onRackChange(new CustomEvent("rack-change", { detail: { slots } }));
  const placed = () => ed._doc.floors[0].furniture.find((f: Furniture) => f.id === "rack");
  assert.deepEqual(placed().rack, { slots });
  ed.onRackChange(new CustomEvent("rack-change", { detail: { slots: [] } }));
  assert.deepEqual(placed().rack, { slots: [] });
  ed.undo();
  assert.deepEqual(placed().rack, { slots });
});

test("someone who can't edit opens the sheet read-only and its changes are ignored (#113)", async () => {
  const ed = await editor();
  ed.canEdit = false;
  ed.selectItem("furniture", "rack");
  ed.openRackSheet();
  assert.equal(ed.rackSheetProps().editable, false);
  ed.onRackChange(new CustomEvent("rack-change", { detail: { slots: [{ id: "s1", type: SWITCH, u: 3 }] } }));
  assert.equal(ed._doc.floors[0].furniture.find((f: Furniture) => f.id === "rack").rack, undefined);
});

// ------------------------------------------------------------------------------------------------ #114

const PACK114 = {
  ...PACK,
  items: [...PACK.items, ...["rack_wall_cabinet_6u", "rack_switch_8_half_1u", "rack_pdu_vertical_0u", "rack_shelf_2u", "unifi_cloud_gateway_ultra", "rack_floor_cabinet_42u"].map(read)],
} as unknown as FurniturePack;
const P = (id: string) => `pack:theovencook.it:${id}`;

async function editor114() {
  setPacks([PACK114]);
  const ed = await makeEditor([square("r1", 0, 0, 4, 4)], [rack(), router()]);
  ed.packs = [PACK114];
  return ed;
}

test("the sheet offers half-width and 0U gear and a shelf, loose gear for shelves, and knows the rack's rear and lanes (#114)", async () => {
  const ed = await editor114();
  ed.selectItem("furniture", "rack");
  ed.openRackSheet();
  const props = ed.rackSheetProps();
  const gear = props.gear.map((g: { type: string }) => g.type);
  for (const id of ["rack_switch_8_half_1u", "rack_pdu_vertical_0u", "rack_shelf_2u"]) assert.ok(gear.includes(P(id)), id);
  const loose = props.loose.map((g: { type: string }) => g.type);
  assert.ok(loose.includes(P("unifi_cloud_gateway_ultra")), "a small gateway stands on a shelf");
  assert.ok(!loose.includes(P("rack_wall_cabinet_6u")) && !loose.includes(P("rack_switch_24_1u")), "no racks, no rack gear");
  assert.equal(props.space.rear, true);
  assert.ok(props.space.lane > 0.05);
  assert.deepEqual(props.looseOf(P("unifi_cloud_gateway_ultra"))?.size, [0.1418, 0.1276, 0.03]);
  assert.equal(props.gearOf(P("rack_switch_8_half_1u"))?.watts, 10);
});

test("changing the rack frame keeps the gear, resizes the rack and warns about what no longer fits (#114)", async () => {
  const ed = await editor114();
  ed.selectItem("furniture", "rack");
  const slots: RackSlot[] = [{ id: "s1", type: SWITCH, u: 2 }, { id: "s2", type: SWITCH, u: 8 }];
  ed.openRackSheet();
  ed.onRackChange(new CustomEvent("rack-change", { detail: { slots } }));
  ed._rackSheet = null;
  const form = () => flat(ed.renderFurnitureForm(ed.furnitureItem));
  assert.match(form(), /rack_frame_pick|Rack frame/);
  const choices = ed.rackFrameChoices(ed.furnitureItem).map((c: { type: string }) => c.type);
  assert.ok(choices.includes(P("rack_wall_cabinet_6u")));
  assert.ok(!choices.includes(P("rack_floor_cabinet_42u")), "a wall rack swaps for wall racks");
  ed.changeRackFrame(P("rack_wall_cabinet_6u"));
  const placed = ed._doc.floors[0].furniture.find((f: Furniture) => f.id === "rack");
  assert.equal(placed.type, P("rack_wall_cabinet_6u"));
  assert.deepEqual([placed.w, placed.d, placed.h], [0.6, 0.45, 0.379]);
  assert.deepEqual(placed.rack, { slots }, "the gear stays");
  assert.match(form(), /doesn't fit|no longer fit/i);
  ed.undo();
  assert.equal(ed._doc.floors[0].furniture.find((f: Furniture) => f.id === "rack").type, RACK);
});
