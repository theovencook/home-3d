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

// ---------------------------------------------------------------- editors arrange the list (#229)

test("an editor gets 'Edit list' in the header; a viewer, time travel and a room without area do not (#229)", () => {
  const editor = panel(false);
  editor.canEdit = true;
  assert.match(flat(editor.render()), /fp3d-rp-edit/);
  assert.doesNotMatch(flat(panel(false).render()), /fp3d-rp-edit/, "not on the editors list");
  const past = panel(true);
  past.canEdit = true;
  assert.doesNotMatch(flat(past.render()), /fp3d-rp-edit/, "time travel");
  const noArea = panel(false);
  noArea.canEdit = true;
  noArea.room = { ...noArea.room, area_id: null };
  assert.doesNotMatch(flat(noArea.render()), /fp3d-rp-edit/, "no area");
});

test("the panel shows pinned rows on top and the groups in the chosen order, for everyone (#229)", () => {
  const el = panel(false);
  el.room = { ...el.room, panel_layout: { pinned: ["light.sample_b"], groups: ["cameras", "lights"] } };
  const html = flat(el.render());
  const pinned = html.indexOf("Pinned");
  const cameras = html.indexOf("Cameras");
  const lights = html.indexOf("Lights");
  assert.ok(pinned > 0 && pinned < cameras && cameras < lights, "Pinned, then Cameras, then Lights");
  assert.ok(html.slice(pinned, cameras).includes("B"), "the pinned light is in Pinned");
  assert.ok(!html.slice(lights).includes("\u0001B\u0002"), "and not again under Lights");
  // "All off" still switches every light that is on, the pinned one too
  assert.match(html.slice(lights), /All off/);
});

test("hidden entities stay out of the panel, but 'Edit list' lists them to show them again (#229)", () => {
  const el = panel(false);
  el.canEdit = true;
  el.room = { ...el.room, hidden: ["light.sample_b"] };
  const html = flat(el.render());
  assert.ok(!html.includes("\u0001B\u0002"), "B is hidden");
  el._editing = true;
  const edit = flat(el.render());
  assert.match(edit, /<fp3d-room-list-edit/);
  const arranged = el.editList(el.room);
  assert.deepEqual(arranged.groups.find((g: { group: string }) => g.group === "lights").ids, ["light.sample_a", "light.sample_b"]);
  assert.doesNotMatch(edit, /fp3d-switch/, "no controls while editing");
});

test("'Edit list' stores each step as a plan change on the room (#229)", async () => {
  const { Fp3dRoomListEdit } = await import("./listedit.ts");
  const el = new Fp3dRoomListEdit() as unknown as Record<string, any>;
  const changes: ((b: unknown) => void)[] = [];
  el.dispatchEvent = (e: CustomEvent) => {
    assert.equal(e.type, "plan-change");
    assert.ok(e.bubbles && e.composed, "reaches the panel through the room panel's shadow root");
    changes.push(e.detail.change);
    return false;
  };
  el.roomId = "r1";
  el.arranged = { pinned: [], groups: [{ group: "lights", ids: ["light.sample_a", "light.sample_b"] }, { group: "covers", ids: ["cover.sample_c"] }] };
  el.hiddenIds = [];
  el.layout = null;
  el.allGroups = ["lights", "covers", "climate", "media", "switches", "cameras", "sensors", "scenes"];
  el.move("lights", 1, 0);
  el.move("groups", 1, 0);
  const room = { id: "r1" } as Record<string, any>;
  const b = { floors: [{ rooms: [room] }] };
  for (const c of changes) c(b);
  // each step starts from the layout it was given (the panel hands in the saved one after each save)
  assert.deepEqual(room.panel_layout.groups.slice(0, 2), ["covers", "lights"]);
  changes.length = 0;
  el.move("lights", 0, -1);
  el.move("lights", 1, 2);
  assert.equal(changes.length, 0, "no move past either end");
});
