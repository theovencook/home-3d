import assert from "node:assert/strict";
import { test } from "node:test";
import { clearedSnoozes, dismissAlert, mayIgnoreAlert, restoreAlert, shownAlerts, snoozeKey, type AlertRef, type AlertSnooze } from "./alerts.ts";
import type { HomeAssistant } from "./types.ts";

// warnings dismissed from the 3D view's banner: for now (until the warning clears) or for good (#138)

const smoke = { kind: "smoke", entity: "binary_sensor.sample_smoke", roomId: "k", floorId: "f" };
const contact = { kind: "contact_unavailable", entity: "binary_sensor.sample_window", roomId: "k", floorId: "f" };
const rain = { kind: "window_rain", entity: "binary_sensor.sample_window", roomId: "k", floorId: "f" };
const alarm = { kind: "alarm", entity: "alarm_control_panel.sample", roomId: null, floorId: null };

const hassWith = (states: Record<string, string>) => ({ states: Object.fromEntries(Object.entries(states).map(([id, state]) => [id, { entity_id: id, state, attributes: {} }])) }) as unknown as HomeAssistant;

test("smoke, CO, gas, water and the alarm may only be dismissed for now; the rest for good too", () => {
  for (const kind of ["smoke", "co", "gas", "water", "alarm", "alarm_pending"]) assert.equal(mayIgnoreAlert(kind), false, kind);
  for (const kind of ["contact_unavailable", "window_rain", "power_outage", "fridge_door", "pool_ph"]) assert.equal(mayIgnoreAlert(kind), true, kind);
});

test("without dismissals every warning shows", () => {
  const all = [smoke, contact];
  assert.equal(shownAlerts(all, {}), all);
  assert.equal(shownAlerts(all, { alert_snoozed: [], alert_ignored: [] }), all);
});

test("for now: the warning is hidden while it stands", () => {
  const settings = dismissAlert({}, contact, false, 1000);
  assert.deepEqual(settings, { alert_snoozed: [{ kind: "contact_unavailable", entity: contact.entity, at: 1000 }], alert_ignored: [] });
  assert.deepEqual(shownAlerts([smoke, contact], settings), [smoke]);
  // only that kind for that entity: the same window in the rain still warns
  assert.deepEqual(shownAlerts([contact, rain], settings), [rain]);
});

test("for good: the entity never raises that kind of warning again, until restored", () => {
  const settings = dismissAlert({}, contact, true, 1000);
  assert.deepEqual(settings, { alert_snoozed: [], alert_ignored: [{ kind: "contact_unavailable", entity: contact.entity }] });
  assert.deepEqual(shownAlerts([contact, rain], settings), [rain]);
  // a snooze of the same warning is replaced, not kept beside it
  const both = dismissAlert(dismissAlert({}, contact, false, 5), contact, true, 6);
  assert.deepEqual(both.alert_snoozed, []);
  assert.equal(both.alert_ignored?.length, 1);
  // undo from the settings
  const restored = restoreAlert(settings.alert_ignored, contact);
  assert.deepEqual(restored, []);
  assert.deepEqual(shownAlerts([contact], { alert_ignored: restored }), [contact]);
});

test("a safety warning is dismissed for now even when asked for good, and an ignored entry for one never hides it", () => {
  const settings = dismissAlert({}, smoke, true, 1000);
  assert.deepEqual(settings.alert_ignored, []);
  assert.deepEqual(settings.alert_snoozed, [{ kind: "smoke", entity: smoke.entity, at: 1000 }]);
  // a plan edited by hand: smoke and the alarm still warn
  const forged: AlertRef[] = [{ kind: "smoke", entity: smoke.entity }, { kind: "alarm", entity: alarm.entity }];
  assert.deepEqual(shownAlerts([smoke, alarm], { alert_ignored: forged }), [smoke, alarm]);
});

test("for now ends when the warning clears: the snooze is spent and the warning fires again next time", () => {
  const snoozed: AlertSnooze[] = [{ kind: "contact_unavailable", entity: contact.entity, at: 1000 }];
  // still standing: nothing to tidy
  assert.deepEqual(clearedSnoozes(snoozed, [contact], hassWith({ [contact.entity]: "unavailable" })), []);
  // cleared (the contact reports again): the snooze goes
  assert.deepEqual(clearedSnoozes(snoozed, [], hassWith({ [contact.entity]: "off" })), snoozed);
  // back again later: a viewer that saw it clear shows it although the plan still holds the snooze (no editor wrote yet)
  const spent = new Set(snoozed.map(snoozeKey));
  assert.deepEqual(shownAlerts([contact], { alert_snoozed: snoozed }, spent), [contact]);
  assert.deepEqual(shownAlerts([contact], { alert_snoozed: snoozed }), []);
  // a later dismissal of the same warning is a new snooze, not the spent one
  const again = dismissAlert({ alert_snoozed: snoozed }, contact, false, 2000);
  assert.deepEqual(shownAlerts([contact], again, spent), []);
});

test("a warning whose entity Home Assistant cannot tell right now has not cleared (a restart)", () => {
  const snoozed: AlertSnooze[] = [
    { kind: "contact_unavailable", entity: contact.entity, at: 1 },
    { kind: "smoke", entity: smoke.entity, at: 2 },
    { kind: "window_rain", entity: "binary_sensor.sample_gone", at: 3 },
  ];
  // the contact is still unavailable but its warning waits 10 minutes after a restart; smoke is unknown; one is gone
  const hass = hassWith({ [contact.entity]: "unavailable", [smoke.entity]: "unknown" });
  assert.deepEqual(clearedSnoozes(snoozed, [], hass), []);
  assert.deepEqual(clearedSnoozes(undefined, [], hass), []);
});
