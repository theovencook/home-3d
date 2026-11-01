// The floor / room chip row (#222, #224): floor chips only under "All floors", and the scroll / expand button has its
// own place beside the scrolling chips instead of sitting over the last one.
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

test("All floors lists the floor chips only; a picked floor brings its rooms (#222)", () => {
  const all = flat(panel(null).render());
  assert.ok(all.includes("All floors") && all.includes("Ground") && all.includes("Upper"));
  assert.ok(!all.includes("fp3d-room-chip"), "no room chips under All floors");
  assert.ok(!all.includes("fp3d-sep"), "no divider with nothing after it");
  const one = flat(panel("f1").render());
  assert.ok(one.includes("fp3d-room-chip"), "the picked floor shows its rooms");
});

test("the scroll / expand button sits beside the chips box, not inside it (#224)", () => {
  const out = flat(panel("f1").render());
  const chips = out.indexOf('class="fp3d-nav-chips');
  const close = out.indexOf("</div>", out.indexOf("fp3d-room-chip"));
  const toggle = out.indexOf("fp3d-nav-toggle");
  assert.ok(chips > -1 && toggle > close, "the toggle follows the end of the scrolling chips box");
  const css = String((Floorplan3dPanel as unknown as { styles: unknown }).styles instanceof Array ? ((Floorplan3dPanel as unknown as { styles: { cssText?: string }[] }).styles.map((x) => x.cssText ?? "").join("")) : "");
  const rule = css.match(/\.fp3d-nav-toggle \{[^}]*\}/)?.[0] ?? "";
  assert.ok(rule && !/sticky/.test(rule), "no sticky overlay");
});
