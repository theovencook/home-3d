// The slim phone header and the View menu folding after a pick (#216).
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

test("on a phone the View menu folds after a quality, look, clock, marker or size pick (#216)", () => {
  (g.window as Record<string, unknown>).innerWidth = 390;
  for (const pick of [(p: any) => p.setQuality("low"), (p: any) => p.setLook("day")]) {
    const p = panel(null);
    p._optsOpen = true;
    pick(p);
    assert.equal(p._optsOpen, false);
  }
  // the clock, markers and size buttons call the same fold
  const src = flat(panel(null).render());
  assert.ok(src.includes("fp3d-view-opts"));
});

test("on a wide screen the View menu stays open to change several things (#216)", () => {
  (g.window as Record<string, unknown>).innerWidth = 1280;
  const p = panel(null);
  p._optsOpen = true;
  p.setQuality("high");
  p.setLook("neon");
  assert.equal(p._optsOpen, true);
});

test("the header is slim on screens up to 480 px: no title, version or Extensions word (#216)", async () => {
  const { readFileSync } = await import("node:fs");
  const src = readFileSync(new URL("./panel.ts", import.meta.url), "utf8");
  const at = src.indexOf("PHONE_NARROW_MEDIA)} {");
  assert.ok(at > 0, "a narrow-phone block");
  const block = src.slice(at, src.indexOf("/* the installed version", at));
  for (const sel of [".fp3d-header h1", ".fp3d-header .fp3d-version", ".fp3d-tab-ext-word"]) assert.ok(block.includes(sel), sel);
  assert.match(block, /display: none/);
  // the Extensions tab keeps its name for screen readers and long-press
  const tab = flat(panel(null).render());
  assert.match(tab, /class="fp3d-tab-ext"[^>]*aria-label=Extensions/);
});
