import assert from "node:assert/strict";
import { test } from "node:test";
import { HassWatch } from "./hass-watch.ts";
import type { HomeAssistant } from "./types.ts";

const st = (state: string) => ({ state, attributes: {} });
const base = () =>
  ({ states: { "light.a": st("on"), "light.b": st("off"), "sensor.t": st("20") }, entities: {}, areas: {}, language: "en" }) as unknown as HomeAssistant;
const withState = (h: HomeAssistant, id: string, state: string) => ({ ...h, states: { ...h.states, [id]: st(state) } }) as HomeAssistant;

/** A "render" that reads the given entities through the watched hass. */
function render(watch: HassWatch, hass: HomeAssistant, read: (h: HomeAssistant) => void) {
  watch.begin();
  try {
    read(watch.wrap(hass));
  } finally {
    watch.end();
  }
}

test("a state change of an entity the last render read matters; one it did not read does not (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  render(watch, hass, (h) => void h.states["light.a"]?.state);
  assert.equal(watch.matters(hass, withState(hass, "light.a", "off")), true);
  assert.equal(watch.matters(hass, withState(hass, "sensor.t", "21")), false);
});

test("anything besides the states (registry, areas, language, user) always matters (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  render(watch, hass, () => {});
  assert.equal(watch.matters(hass, { ...hass, entities: {} } as HomeAssistant), true);
  assert.equal(watch.matters(hass, { ...hass, language: "de" } as HomeAssistant), true);
  assert.equal(watch.matters(hass, { ...hass } as HomeAssistant), false);
});

test("an entity that came or went matters (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  render(watch, hass, () => {});
  assert.equal(watch.matters(hass, withState(hass, "switch.new", "on")), true);
  const { "sensor.t": _gone, ...rest } = hass.states;
  assert.equal(watch.matters(hass, { ...hass, states: rest } as HomeAssistant), true);
});

test("a render that went through all states (a list of them) watches every state (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  render(watch, hass, (h) => void Object.keys(h.states).length);
  assert.equal(watch.matters(hass, withState(hass, "sensor.t", "21")), true);
  // asking whether an entity exists watches it too
  render(watch, hass, (h) => void ("light.b" in h.states));
  assert.equal(watch.matters(hass, withState(hass, "light.b", "on")), true);
  assert.equal(watch.matters(hass, withState(hass, "sensor.t", "22")), false);
});

test("reads while paused are not watched, and each render starts afresh (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  render(watch, hass, (h) => watch.pause(() => Object.keys(h.states).forEach((id) => h.states[id])));
  assert.equal(watch.matters(hass, withState(hass, "sensor.t", "21")), false);
  render(watch, hass, (h) => void h.states["sensor.t"]);
  render(watch, hass, () => {});
  assert.equal(watch.matters(hass, withState(hass, "sensor.t", "21")), false);
});

test("outside a render the wrapped hass reads like the real one and records nothing; it is the same object per hass (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  const wrapped = watch.wrap(hass);
  assert.equal(wrapped, watch.wrap(hass));
  assert.equal(wrapped.states["light.a"].state, "on");
  assert.deepEqual(Object.keys(wrapped.states), ["light.a", "light.b", "sensor.t"]);
  render(watch, hass, () => {});
  void wrapped.states["light.a"];
  assert.equal(watch.matters(hass, withState(hass, "light.a", "off")), false);
});

test("no render yet, or no hass before: it matters (#130)", () => {
  const watch = new HassWatch();
  const hass = base();
  assert.equal(watch.matters(hass, withState(hass, "sensor.t", "21")), true);
  render(watch, hass, () => {});
  assert.equal(watch.matters(undefined, hass), true);
});
