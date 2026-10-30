// The "Edit rack" sheet (#113): the rack's U positions numbered down both sides, gear added, moved and deleted in
// whole-U slots, overlaps refused with a red highlight. The sheet owns no plan: it sends the new slots out.

import assert from "node:assert/strict";
import { test } from "node:test";
import type { GearOf, LooseOf, RackSlot } from "../rack.ts";

const { RackSheet } = (await import("./rack-sheet.ts")) as unknown as { RackSheet: new () => Record<string, any> };

const flat = (v: unknown): string => {
  if (v == null || typeof v === "function" || typeof v === "symbol") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  const t = v as { strings?: readonly string[]; values?: unknown[] };
  if (typeof v === "object") return t.strings ? t.strings.map((s, i) => s + (i < t.values!.length ? flat(t.values![i]) : "")).join("") : "";
  return String(v);
};

const gearOf: GearOf = (type) =>
  ({
    switch: { gear: { u: 1, width: "full", depth: "half", inch: 19 }, depth: 0.25 },
    ups: { gear: { u: 2, width: "full", depth: "full", inch: 19 }, depth: 0.3 },
  } as Record<string, ReturnType<GearOf>>)[type] ?? null;

/** A sheet on a 6U rack numbered 1 (bottom) to 6, with a switch at U1 and a UPS at U3-U4. */
function sheet(slots: RackSlot[] = [{ id: "a", type: "switch", u: 1 }, { id: "b", type: "ups", u: 3 }]) {
  const el = new RackSheet();
  el.space = { u: 6, width: 19, mountDepth: 0.4 };
  el.labels = [1, 2, 3, 4, 5, 6];
  el.slots = slots;
  el.gear = [{ type: "switch", name: "Switch" }, { type: "ups", name: "UPS" }];
  el.gearOf = gearOf;
  el.nameOf = (type: string) => (type === "switch" ? "Switch" : type === "ups" ? "UPS" : "?");
  el.editable = true;
  el.t = (key: string) => key;
  const changes: RackSlot[][] = [];
  el.addEventListener("rack-change", (e: Event) => {
    changes.push((e as CustomEvent).detail.slots);
    el.slots = (e as CustomEvent).detail.slots;
  });
  return { el, changes };
}

test("the U positions are numbered down both sides, top first (#113)", () => {
  const { el } = sheet();
  const out = flat(el.render());
  const left = [...out.matchAll(/fp3d-rack-num fp3d-rack-left[^>]*>(\d+)</g)].map((m) => +m[1]);
  const right = [...out.matchAll(/fp3d-rack-num fp3d-rack-right[^>]*>(\d+)</g)].map((m) => +m[1]);
  assert.deepEqual(left, [6, 5, 4, 3, 2, 1]);
  assert.deepEqual(right, [6, 5, 4, 3, 2, 1]);
  assert.match(out, /Switch/);
  assert.match(out, /UPS/);
});

test("picking gear and tapping a free U adds it there (#113)", () => {
  const { el, changes } = sheet();
  el.pickGear("switch");
  el.tapUnit(5);
  assert.equal(changes.length, 1);
  const added = changes[0].find((s) => s.u === 5)!;
  assert.equal(added.type, "switch");
  assert.ok(added.id && !["a", "b"].includes(added.id), "a new id");
  assert.equal(el.selected, added.id, "the new gear is chosen");
});

test("a tap where the gear overlaps is refused and shows red on the clash (#113)", () => {
  const { el, changes } = sheet();
  el.pickGear("ups");
  // a UPS at U2 would take U2 and U3, where the other UPS is
  el.hoverUnit(2);
  assert.deepEqual(el.ghost, { units: [2, 3], ok: false, clash: ["b"] });
  el.tapUnit(2);
  assert.equal(changes.length, 0);
  assert.deepEqual(el.refused?.clash, ["b"]);
  const out = flat(el.render());
  assert.match(out, /fp3d-rack-bad/);
  assert.match(out, /rack_overlap/, "says why");
  // a free place is green
  el.hoverUnit(5);
  assert.deepEqual(el.ghost, { units: [5, 6], ok: true, clash: [] });
});

test("chosen gear moves by a U, or to a tapped U, and is refused where it would overlap (#113)", () => {
  const { el, changes } = sheet();
  el.tapSlot("a");
  el.nudge(1);
  assert.deepEqual(changes.at(-1)!.find((s) => s.id === "a")!.u, 2);
  el.nudge(1);
  assert.equal(changes.length, 1, "U3 is the UPS's: refused");
  assert.deepEqual(el.refused?.clash, ["b"]);
  el.startMove();
  el.tapUnit(6);
  assert.equal(changes.at(-1)!.find((s) => s.id === "a")!.u, 6);
});

test("deleting chosen gear takes it out, renaming gives it its own name (#113)", () => {
  const { el, changes } = sheet();
  el.tapSlot("b");
  el.rename("Garage UPS");
  assert.equal(changes.at(-1)!.find((s) => s.id === "b")!.name, "Garage UPS");
  el.deleteSelected();
  assert.deepEqual(changes.at(-1)!.map((s) => s.id), ["a"]);
  assert.equal(el.selected, null);
});

test("someone who can't edit sees the rack but changes nothing (#113)", () => {
  const { el, changes } = sheet();
  el.editable = false;
  el.pickGear("switch");
  el.tapUnit(5);
  el.tapSlot("a");
  el.nudge(1);
  el.deleteSelected();
  assert.equal(changes.length, 0);
  assert.doesNotMatch(flat(el.render()), /rack_add/);
});

// ------------------------------------------------------------------------------------------------ #114

const gear114: GearOf = (type) =>
  ({
    switch: { gear: { u: 1, width: "full", depth: "half", inch: 19 }, depth: 0.25, watts: 20 },
    ups: { gear: { u: 2, width: "full", depth: "full", inch: 19 }, depth: 0.3, watts: 30 },
    half: { gear: { u: 1, width: "half", depth: "half", inch: 19 }, depth: 0.2, watts: 10 },
    pdu: { gear: { u: 0, width: "full", depth: "half", inch: 19 }, depth: 0.05, size: [0.05, 0.05, 0.13], electric: true },
    shelf: { gear: { u: 2, width: "full", depth: "half", inch: 19, shelf: true }, depth: 0.3, size: [0.4826, 0.3, 0.004] },
  } as Record<string, ReturnType<GearOf>>)[type] ?? null;
const loose114: LooseOf = (type) => (type === "hub" ? { size: [0.09, 0.09, 0.026], watts: 3 } : null);
const NAMES: Record<string, string> = { switch: "Switch", ups: "UPS", half: "Half", pdu: "PDU", shelf: "Shelf", hub: "Hub" };

/** A 6U 4-post rack for the #114 rules; `t` shows its values so the totals can be read. */
function sheet114(slots: RackSlot[] = []) {
  const made = sheet(slots);
  const el = made.el;
  el.gearOf = gear114;
  el.looseOf = loose114;
  el.gear = ["switch", "ups", "half", "pdu", "shelf"].map((type) => ({ type, name: NAMES[type] }));
  el.loose = [{ type: "hub", name: "Hub" }];
  el.nameOf = (type: string) => NAMES[type] ?? "?";
  el.t = (key: string, vars?: Record<string, string | number>) => (vars ? `${key}${JSON.stringify(vars)}` : key);
  return made;
}

test("the head sums up U used and free and the estimated watts (#114)", () => {
  const { el } = sheet114([{ id: "a", type: "switch", u: 1 }, { id: "b", type: "ups", u: 3 }, { id: "p", type: "pdu", u: 1 }]);
  const out = flat(el.render());
  assert.match(out, /rack_totals\{"used":3,"free":3\}/);
  assert.match(out, /rack_watts_about\{"w":50\}/, "the PDU has no watts: the total is at least 50 W");
});

test("the front / rear toggle shows a face's gear and puts new gear on that face (#114)", () => {
  const { el, changes } = sheet114([{ id: "a", type: "switch", u: 1 }, { id: "b", type: "ups", u: 3 }]);
  assert.match(flat(el.render()), /rack_face_rear/);
  el.setFace("rear");
  const out = flat(el.render());
  assert.doesNotMatch(out, /data-slot=a/, "the front switch is not on the rear");
  assert.match(out, /data-slot=b/, "the full-depth UPS is on both faces");
  el.pickGear("switch");
  el.tapUnit(1);
  assert.equal(changes.at(-1)!.find((s) => s.type === "switch" && s.id !== "a")!.face, "rear");
  // a 2-post rack has no toggle
  el.space = { ...el.space, rear: false };
  el.setFace("front");
  assert.doesNotMatch(flat(el.render()), /rack_face_rear/);
});

test("half-width gear goes in the column under the pointer, and the chosen half moves across (#114)", () => {
  const { el, changes } = sheet114();
  el.pickGear("half");
  el.tapUnit(2, 0.8);
  const right = changes.at(-1)![0];
  assert.equal(right.col, 1);
  el.pickGear("half");
  el.hoverUnit(2, 0.7);
  assert.equal(el.ghost.ok, false, "the right half is taken");
  el.tapUnit(2, 0.2);
  assert.equal(changes.at(-1)!.length, 2, "the left half is free");
  el.tapSlot(right.id);
  el.nudgeCol(-1);
  assert.equal(changes.length, 2, "the left half is taken now: refused");
  assert.match(flat(el.render()), /grid-column/);
});

test("0U gear goes in a side lane, left or right (#114)", () => {
  const { el, changes } = sheet114([{ id: "a", type: "switch", u: 1 }]);
  el.pickGear("pdu");
  el.tapLane(1, 1);
  assert.deepEqual(changes.at(-1)!.find((s) => s.type === "pdu"), { id: changes.at(-1)!.find((s) => s.type === "pdu")!.id, type: "pdu", u: 1, col: 1 });
  assert.match(flat(el.render()), /fp3d-rack-lane/);
});

test("a chosen shelf takes loose gear; loose gear can be chosen and deleted (#114)", () => {
  const { el, changes } = sheet114([{ id: "sh", type: "shelf", u: 2 }]);
  el.tapSlot("sh");
  assert.match(flat(el.render()), /rack_on_shelf/);
  el.putOnShelf("hub");
  const hub = changes.at(-1)!.find((s) => s.type === "hub")!;
  assert.equal(hub.on, "sh");
  assert.equal(hub.u, 2);
  assert.match(flat(el.render()), new RegExp(`data-slot=${hub.id}`));
  el.tapSlot(hub.id);
  el.deleteSelected();
  assert.deepEqual(changes.at(-1)!.map((s) => s.id), ["sh"]);
});

test("gear that no longer fits (the rack frame changed) is listed and shown red (#114)", () => {
  const { el } = sheet114([{ id: "a", type: "switch", u: 1 }, { id: "b", type: "ups", u: 5 }]);
  el.space = { ...el.space, u: 4 };
  el.labels = [1, 2, 3, 4];
  const out = flat(el.render());
  assert.match(out, /rack_misfits\{"n":1\}/);
  assert.match(out, /UPS: rack_outside/);
});
