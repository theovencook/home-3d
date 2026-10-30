import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, type Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import type { Alert } from "../alerts.ts";

// the view's 3D bundle and lazy chunks read their hashes from build-time constants
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dView3d } = await import("./view3d.ts");

// "for now" dismissals leave the plan once their warning clears – written by an editor's live view only (#138)

const ENTITY = "binary_sensor.sample_window";
const contact: Alert = { kind: "contact_unavailable", entity: ENTITY, roomId: "k", floorId: "f" };

type View = {
  building: Building;
  hass: HomeAssistant;
  canEdit?: boolean;
  replay: unknown;
  tidySnoozes(hass: HomeAssistant, b: Building, active: Alert[], modulesOn: boolean): void;
  dismiss(a: Alert, forGood: boolean): void;
  spentSnoozes: Set<string>;
};

function view(state: string, canEdit: boolean, replay: unknown = null) {
  const saved: Building[] = [];
  const hass = {
    language: "en",
    user: { is_admin: true },
    states: { [ENTITY]: { entity_id: ENTITY, state, attributes: {} } },
    callWS: async (msg: { building: Building }) => {
      saved.push(msg.building);
      return { revision: 2 };
    },
  } as unknown as HomeAssistant;
  const b = emptyBuilding();
  b.settings.alert_snoozed = [{ kind: "contact_unavailable", entity: ENTITY, at: 1000 }];
  const el = new Fp3dView3d() as unknown as View;
  Object.assign(el, { hass, building: b, canEdit, replay });
  return { el, hass, b, saved };
}

test("an editor's view takes a cleared warning's snooze out of the plan", () => {
  const { el, hass, b, saved } = view("off", true);
  el.tidySnoozes(hass, b, [], false);
  assert.equal(saved.length, 1);
  assert.deepEqual(saved[0].settings.alert_snoozed, []);
  assert.deepEqual(el.building.settings.alert_snoozed, []);
});

test("while the warning stands nothing is written", () => {
  const { el, hass, b, saved } = view("unavailable", true);
  el.tidySnoozes(hass, b, [contact], false);
  assert.equal(saved.length, 0);
  assert.equal(el.spentSnoozes.size, 0);
});

test("a view without edit rights never writes, but stops honouring the spent snooze itself", () => {
  const { el, hass, b, saved } = view("off", false);
  el.tidySnoozes(hass, b, [], false);
  assert.equal(saved.length, 0);
  assert.equal(el.spentSnoozes.size, 1);
});

test("time travel neither writes nor spends a snooze", () => {
  const { el, hass, b, saved } = view("off", true, { t: 0 });
  el.tidySnoozes(hass, b, [], false);
  assert.equal(saved.length, 0);
  assert.equal(el.spentSnoozes.size, 0);
});

test("a module's warning is kept snoozed while the modules do not report", () => {
  const { el, hass, b, saved } = view("off", true);
  b.settings.alert_snoozed = [{ kind: "pool_ph", entity: ENTITY, at: 1 }];
  el.tidySnoozes(hass, b, [], false);
  assert.equal(saved.length, 0);
});

test("dismissing from the banner saves the choice; a viewer without edit rights cannot", () => {
  const { el, saved } = view("unavailable", true);
  el.building.settings.alert_snoozed = [];
  el.dismiss(contact, true);
  assert.deepEqual(saved.at(-1)?.settings.alert_ignored, [{ kind: "contact_unavailable", entity: ENTITY }]);
  const ro = view("unavailable", false);
  ro.el.dismiss(contact, false);
  assert.equal(ro.saved.length, 0);
});
