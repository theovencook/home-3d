// Small polish of the view and show menus (#214): the View popover closes when the sheet opens, each Markers button
// has its own name, and Apart / Stacked / Roof stays are disabled with a hint instead of vanishing on one floor.
import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding } from "./model.ts";

const g = globalThis as Record<string, unknown>;
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR", "SETTINGS"]) g[`__FP3D_${k}_HASH__`] = "test";
g.__FP3D_VERSION__ = "0";
g.window ??= {};
Object.assign(g.window as object, { addEventListener: () => undefined, removeEventListener: () => undefined });
g.location = { search: "", hash: "", pathname: "/home_3d" };
g.history = { state: null, replaceState: () => undefined };

const { Floorplan3dPanel } = await import("./panel.ts");

function flat(v: unknown): string {
  if (v === null || v === undefined || typeof v === "symbol") return "";
  if (typeof v === "function") return "<fn>";
  if (Array.isArray(v)) return v.map(flat).join("");
  if (typeof v === "object" && "strings" in (v as object)) {
    const r = v as { strings: readonly string[]; values: unknown[] };
    return r.strings.map((s, i) => s + (i < r.values.length ? flat(r.values[i]) : "")).join("");
  }
  return String(v);
}

function panel(floorId: string | null) {
  const p = new (Floorplan3dPanel as any)();
  p.hass = { language: "en", user: { id: "u", is_admin: true, name: "x" }, states: {}, themes: { darkMode: true } };
  const b = emptyBuilding();
  const floor = (id: string, name: string, elevation: number) => ({ id, name, rooms: [{ id: `${id}r`, name: "Room", points: [[0, 0], [4, 0], [4, 3], [0, 3]], area_id: null }], furniture: [], placements: [], openings: [], walls: [], height: 2.5, elevation });
  b.floors = [floor("f1", "Ground", 0), floor("f2", "Upper", 2.5)] as unknown as typeof b.floors;
  b.settings.roof = { ...b.settings.roof, type: "gable" };
  p.data.building = b;
  p.data.canEdit = true;
  p.willUpdate(new Map());
  p._showOpen = true;
  p._optsOpen = true;
  p._floorId = floorId;
  return p;
}

test("each Markers button has its own name (#214)", () => {
  const out = flat(panel(null).render());
  for (const label of ["None", "In the room", "Important", "All"]) assert.ok(out.includes(`aria-label=Markers: ${label}`), label);
});

test("with one floor picked, Apart / Stacked / Roof stays are there but disabled, with the hint (#214)", () => {
  const one = flat(panel("f1").render());
  assert.match(one, /\?disabled=true @click=<fn>>Apart</);
  assert.match(one, /\?disabled=true @click=<fn>>Stacked</);
  assert.match(one, /\?disabled=true[^@]*@click=<fn>>Roof stays</);
  assert.ok(one.includes("Pick All floors"));
  const all = flat(panel(null).render());
  assert.match(all, /\?disabled=false @click=<fn>>Apart</);
  assert.match(all, /\?disabled=false[^@]*@click=<fn>>Roof stays</);
  assert.ok(!all.includes("Pick All floors"));
});

test("the Sun and lights button closes the View popover before the sheet opens (#214)", () => {
  const p = panel(null);
  let opened = 0;
  p.view3d = () => ({ openSettings: () => opened++ });
  const tpl = p.render();
  // find the click handler of the button in the rendered template values
  const handlers: unknown[] = [];
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) return v.forEach(walk);
    if (v && typeof v === "object" && "strings" in (v as object)) {
      const r = v as { strings: readonly string[]; values: unknown[] };
      r.values.forEach((x, i) => {
        if (typeof x === "function" && /fp3d-opt-more" @click=$/.test(r.strings[i])) handlers.push(x);
        walk(x);
      });
    }
  };
  walk(tpl);
  assert.equal(handlers.length, 1, "the Sun and lights button is rendered once");
  assert.equal(p._optsOpen, true);
  (handlers[0] as () => void)();
  assert.equal(opened, 1);
  assert.equal(p._optsOpen, false);
});

test("each Show menu label appears once, with a floor picked or not (#215)", () => {
  for (const floorId of [null, "f1"]) {
    const out = flat(panel(floorId).render());
    const menu = out.slice(out.indexOf("fp3d-show-panel"));
    const labels = menu.split("<button").slice(1).map((b) => b.split("</button>")[0].replace(/<fn>/g, "").replace(/^[^>]*>/, "").replace(/<[^>]*>/g, "").trim()).filter(Boolean);
    const seen = new Set<string>();
    for (const l of labels) {
      assert.ok(!seen.has(l), `"${l}" is listed twice (floor ${floorId})`);
      seen.add(l);
    }
    assert.equal(labels.filter((l) => l === "Stacked").length, 1, "Stacked once (the Apart / Stacked pair)");
  }
  // with a floor picked the floors-below group says what it does
  const one = flat(panel("f1").render());
  for (const l of ["Dim below", "Show below", "Hide below"]) assert.ok(one.includes(`>${l}<`) || one.includes(l), l);
});
