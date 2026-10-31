// Time travel: every control in the room panel that cannot act is visibly disabled, and the ones with no meaning are gone (#210).
import assert from "node:assert/strict";
import { test } from "node:test";

const g = globalThis as Record<string, unknown>;
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR", "SETTINGS"]) g[`__FP3D_${k}_HASH__`] = "test";
g.__FP3D_VERSION__ = "0";
g.window ??= {};
Object.assign(g.window as object, { addEventListener: () => undefined, removeEventListener: () => undefined });
g.location = { search: "", hash: "", pathname: "/home_3d" };
g.history = { state: null, replaceState: () => undefined };

const { Fp3dRoomPanel } = await import("./room-panel.ts");

/** Everything a lit template contains: its static strings and, recursively, its values. */
function flat(v: unknown): string {
  if (Array.isArray(v)) return v.map(flat).join("");
  const r = v as { strings?: string[]; values?: unknown[] } | null;
  if (r && Array.isArray(r.strings)) return r.strings.reduce((out, str, i) => out + str + (i < r.values!.length ? `\u0001${flat(r.values![i])}\u0002` : ""), "");
  return typeof v === "string" ? v : typeof v === "boolean" ? String(v) : "";
}

function panel(readOnly: boolean) {
  const el = new Fp3dRoomPanel() as unknown as Record<string, any>;
  el.hass = {
    language: "en",
    areas: { a1: { name: "Lounge" } },
    entities: {},
    devices: {},
    states: {
      "light.sample_a": { entity_id: "light.sample_a", state: "on", attributes: { friendly_name: "A" } },
      "light.sample_b": { entity_id: "light.sample_b", state: "off", attributes: { friendly_name: "B" } },
      "camera.sample_cam": { entity_id: "camera.sample_cam", state: "idle", attributes: { friendly_name: "Cam", entity_picture: "data:image/png;base64,AA" } },
    },
  };
  el.room = { id: "r1", name: "Lounge", area_id: "a1", points: [[0, 0], [4, 0], [4, 4], [0, 4]] };
  el.floor = {
    id: "f1",
    rooms: [el.room],
    furniture: [],
    openings: [],
    placements: ["light.sample_a", "light.sample_b", "camera.sample_cam"].map((entity_id) => ({ entity_id, x: 1, z: 1 })),
  };
  el.readOnly = readOnly;
  return el;
}

test("in time travel the panel's controls sit in a disabled fieldset with a tooltip (#210)", () => {
  const html = flat(panel(true).render());
  assert.match(html, /<fieldset class="fp3d-rp-controls" \?disabled=\u0001true\u0002 title=\u0001Not while looking at the past\u0002>/);
});

test("in the present the fieldset is not disabled and has no tooltip (#210)", () => {
  const html = flat(panel(false).render());
  assert.match(html, /<fieldset class="fp3d-rp-controls" \?disabled=\u0001false\u0002 title=\u0001\u0002>/);
});

test("in time travel 'Look through the camera' is gone and the camera picture is no button (#210)", () => {
  const past = flat(panel(true).render());
  assert.doesNotMatch(past, /fp3d-rp-look/);
  assert.match(past, /fp3d-rp-camera fp3d-rp-camera-still/);
  const now = flat(panel(false).render());
  assert.match(now, /fp3d-rp-look/);
  assert.doesNotMatch(now, /fp3d-rp-camera-still/);
});

test("the All on / All off buttons are inside the disabled fieldset (#210)", () => {
  const html = flat(panel(true).render());
  const open = html.indexOf("<fieldset");
  const close = html.indexOf("</fieldset>");
  const inside = html.slice(open, close);
  for (const key of ["panel_all_on", "panel_all_off"]) assert.ok(inside.includes(key === "panel_all_on" ? "All on" : "All off"), key);
});
