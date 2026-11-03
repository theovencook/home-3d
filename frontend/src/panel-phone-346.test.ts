// Phone layout on the panel (#346): the floor dropdown and the bottom bar.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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
  p._floorId = floorId;
  return p;
}

function handlers(v: unknown, re: RegExp, out: ((e?: unknown) => void)[] = []): ((e?: unknown) => void)[] {
  if (Array.isArray(v)) v.forEach((x) => handlers(x, re, out));
  else if (v && typeof v === "object" && "strings" in (v as object)) {
    const r = v as { strings: readonly string[]; values: unknown[] };
    r.values.forEach((x, i) => {
      if (typeof x === "function" && re.test(r.strings[i])) out.push(x as () => void);
      handlers(x, re, out);
    });
  }
  return out;
}

test("phones pick the floor from a dropdown: the whole house first, the top floor next, the chosen one selected (#346)", () => {
  const p = panel("f1");
  const bar = p.renderFloorBar(p.data.building, p.data.building.floors[0]);
  const out = flat(bar);
  const pick = out.slice(out.indexOf('<label class="fp3d-floor-pick'));
  assert.match(pick, /^<label class="fp3d-floor-pick fp3d-floor-on">/);
  assert.match(pick, /<select aria-label=Floors/);
  const options = [...pick.matchAll(/<option value="?(\w*)"? \?selected=(true|false)>([^<]*)<\/option>/g)].map((m) => [m[1], m[2], m[3]]);
  assert.deepEqual(options, [
    ["", "false", "Whole house"],
    ["f2", "false", "Upper"],
    ["f1", "true", "Ground"],
  ]);
  const [change] = handlers(bar, /@change=$/);
  change({ target: { value: "f2" } });
  assert.equal(p._floorId, "f2");
  change({ target: { value: "" } });
  assert.equal(p._floorId, null);
  // the chips stay for wider screens; a phone shows the dropdown instead
  const src = readFileSync(new URL("./panel.ts", import.meta.url), "utf8");
  const phone = src.slice(src.indexOf("@media ${unsafeCSS(PHONE_MEDIA)} {\n        .fp3d-header {"));
  assert.match(phone, /\.fp3d-nav \.fp3d-floors \{\s*display: none;\s*\}\s*\.fp3d-floor-pick \{\s*display: block;/);
});
