import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room } from "../model.ts";
import { wallSummary } from "../geometry/room-walls.ts";

// the editor's bundle hashes are build-time constants: plain strings will do here
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dEditor } = (await import("./editor.ts")) as unknown as { Fp3dEditor: new () => Record<string, any> };

const room = (extra: Partial<Room> = {}): Room => ({ id: "r", name: "Bedroom", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood", ...extra });

function editor() {
  const b = emptyBuilding();
  const floor = newFloor("f", "Ground", 0);
  floor.rooms.push(room());
  b.floors.push(floor);
  const el = new Fp3dEditor();
  el._doc = b;
  el._floorId = "f";
  el.canEdit = true;
  el._roomId = "r";
  el.hass = { language: "en", areas: {}, states: {}, entities: {}, devices: {}, user: { is_admin: true } };
  return el;
}

/** A lit template as flat text (strings with their values), enough to see what comes in which order. */
const flat = (v: unknown): string => {
  if (v == null || typeof v === "function") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  const t = v as { strings?: readonly string[]; values?: unknown[] };
  if (typeof v === "object") return t.strings ? t.strings.map((s, i) => s + (i < t.values!.length ? flat(t.values![i]) : "")).join("") : "";
  return String(v);
};

test("the Walls section sits near the top of the room panel, before ceiling, area and the rest (#67)", () => {
  const el = editor();
  const panel = flat(el.renderRoomForm(el.room, []));
  const walls = panel.indexOf('<details class="fp3d-edge-box"');
  assert.ok(walls > 0, "the Walls section is a collapsible <details>");
  assert.ok(walls < panel.indexOf("fp3d-room-id"));
  assert.ok(walls < panel.indexOf(el.t("room_ceiling_hint")));
});

test("the Walls section starts folded and remembers being opened (#67)", () => {
  const el = editor();
  assert.equal(el._wallsOpen, false);
  el.setWallsOpen(true);
  assert.equal(el._wallsOpen, true);
  assert.match(flat(el.renderEdgeHeights(el.room)), /<details class="fp3d-edge-box"[^>]*\?open=true/);
});

test("the folded Walls heading counts the walls and names the special ones (#67)", () => {
  assert.deepEqual(wallSummary(room()), { walls: 4, open: 0, sloping: 0 });
  assert.deepEqual(wallSummary(room({ wall_heights: [0, null, 1.2, null], wall_slopes: [null, [2.4, 1.8], null, null] })), { walls: 4, open: 1, sloping: 1 });
  // an edge split into parts by another room: a part with no wall counts once
  assert.deepEqual(wallSummary(room({ wall_heights: [[0, null], null, null, null] })), { walls: 4, open: 1, sloping: 0 });
});
