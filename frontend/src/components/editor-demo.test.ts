import assert from "node:assert/strict";
import { test } from "node:test";
import { demoHome } from "../demo-home.fixture.ts";

for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dEditor } = (await import("./editor.ts")) as unknown as { Fp3dEditor: new () => Record<string, any> };

const flat = (v: unknown): string => {
  if (v == null || typeof v === "function" || typeof v === "symbol") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  const t = v as { strings?: readonly string[]; values?: unknown[] };
  if (typeof v === "object") return t.strings ? t.strings.map((s, i) => s + (i < t.values!.length ? flat(t.values![i]) : "")).join("") : "";
  return String(v);
};

function editor(demo: boolean) {
  const el = new Fp3dEditor();
  el._doc = demoHome(demo);
  el._floorId = "g";
  el.canEdit = true;
  el.hass = { language: "en", areas: {}, states: {}, entities: {}, devices: {}, user: { is_admin: true } };
  return el;
}

test("a demo home's editor can switch the demo states off and on again; an ordinary home has no such switch (#100)", () => {
  const el = editor(true);
  assert.match(flat(el.renderDemoSwitch()), /Demo states/);
  el.setDemo(false);
  assert.equal(el._doc.settings.demo, false);
  // switched off it stays offered, so it can come back
  assert.match(flat(el.renderDemoSwitch()), /Demo states/);
  el.setDemo(true);
  assert.equal(el._doc.settings.demo, true);
  assert.equal(flat(editor(false).renderDemoSwitch()), "");
});
