import assert from "node:assert/strict";
import { test } from "node:test";
import type { FurnitureLinks, OpeningEntities } from "./devices.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { watchedEntities } from "./watched.ts";

function setup() {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  const hass = {
    language: "de",
    areas: { kueche: { area_id: "kueche", name: "Küche" } },
    entities: {
      "light.kueche": { entity_id: "light.kueche", area_id: "kueche" },
      "sensor.kueche_temp": { entity_id: "sensor.kueche_temp", area_id: "kueche" },
      "binary_sensor.kueche_bewegung": { entity_id: "binary_sensor.kueche_bewegung", area_id: "kueche" },
    },
    states: {
      "light.kueche": st("light.kueche", "on"),
      "light.placed": st("light.placed", "off"),
      "sensor.kueche_temp": st("sensor.kueche_temp", "21.5", { device_class: "temperature" }),
      "binary_sensor.kueche_bewegung": st("binary_sensor.kueche_bewegung", "off", { device_class: "motion" }),
      "binary_sensor.fenster": st("binary_sensor.fenster", "off", { device_class: "window" }),
      "weather.b": st("weather.b", "sunny"),
      "weather.a": st("weather.a", "rainy"),
    },
  } as unknown as HomeAssistant;
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id: "k", name: "Küche", area_id: "kueche", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "tiles" }];
  floor.placements = [{ entity_id: "light.placed", x: 1, z: 1, y: null }];
  b.floors = [floor];
  const openings = new Map<string, OpeningEntities>([["w", { cover: null, contact: "binary_sensor.fenster", tilt: null }]]);
  const furniture = new Map<string, FurnitureLinks>();
  return { hass, b, openings, furniture };
}

test("the watched entities: placed devices, openings, lights of the rooms, motion, weather and the sun, each once", () => {
  const { hass, b, openings, furniture } = setup();
  const ids = watchedEntities(hass, b, { openings, furniture, heat: false, warnings: ["binary_sensor.fenster"], weatherEntityId: null });
  assert.deepEqual(ids, ["light.placed", "binary_sensor.fenster", "light.kueche", "binary_sensor.kueche_bewegung", "weather.a", "sun.sun"]);
});

test("the room sensors are only watched for the heatmap or the room values; a chosen weather entity wins", () => {
  const { hass, b, openings, furniture } = setup();
  const ids = watchedEntities(hass, b, { openings, furniture, heat: true, warnings: [], weatherEntityId: "weather.b" });
  assert.ok(ids.includes("sensor.kueche_temp"));
  assert.ok(ids.includes("weather.b"));
  assert.ok(!ids.includes("weather.a"));
});

test("the entity an item follows is watched, so it hides or comes back when that entity does (#15)", () => {
  const { hass, b, openings, furniture } = setup();
  b.floors[0].furniture = [{ id: "tree", type: "plant", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 2, variant: null, show_when: { entity: "switch.tree_lights" } }];
  const ids = watchedEntities(hass, b, { openings, furniture, heat: false, warnings: [], weatherEntityId: null });
  assert.ok(ids.includes("switch.tree_lights"));
});

test("a 3D printer's progress, chamber light and camera are watched, found on its linked entity's device (#11)", () => {
  const { hass, b, openings, furniture } = setup();
  const reg = hass.entities as Record<string, unknown>;
  const states = hass.states as Record<string, unknown>;
  for (const [id, attributes] of [["sensor.p_status", { device_class: "enum" }], ["sensor.p_progress", { unit_of_measurement: "%" }], ["light.p_chamber", {}], ["camera.p_cam", {}]] as const) {
    reg[id] = { entity_id: id, device_id: "printer" };
    states[id] = { entity_id: id, state: "on", attributes };
  }
  b.floors[0].furniture = [{ id: "p", type: "pack:theovencook.makers:3d_printer", x: 1, z: 1, rotation: 0, w: 0.4, d: 0.4, h: 0.5, variant: null }];
  furniture.set("p", { entity: "sensor.p_status", power: null });
  const ids = watchedEntities(hass, b, { openings, furniture, heat: false, warnings: [], weatherEntityId: null });
  for (const id of ["sensor.p_status", "sensor.p_progress", "light.p_chamber", "camera.p_cam"]) assert.ok(ids.includes(id), id);
});

test("a room's chosen motion sensor and a radiator's temperature are watched for the live effects (#10)", () => {
  const { hass, b, openings, furniture } = setup();
  const states = hass.states as Record<string, unknown>;
  states["binary_sensor.hall_pir"] = { entity_id: "binary_sensor.hall_pir", state: "off", attributes: { device_class: "motion" } };
  states["sensor.rad_temp"] = { entity_id: "sensor.rad_temp", state: "30", attributes: { device_class: "temperature" } };
  b.floors[0].rooms[0].live = { motion: "binary_sensor.hall_pir" };
  b.floors[0].furniture = [{ id: "rad", type: "radiator", x: 1, z: 1, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null, temp_sensor: "sensor.rad_temp" }];
  const ids = watchedEntities(hass, b, { openings, furniture, heat: false, warnings: [], weatherEntityId: null });
  assert.ok(ids.includes("binary_sensor.hall_pir"));
  assert.ok(ids.includes("sensor.rad_temp"));
});

test("rack gear's linked entities are watched, so its status LEDs follow them (#119)", () => {
  const { hass, b, openings, furniture } = setup();
  b.floors[0].furniture = [
    { id: "r", type: "pack:t:rack", x: 1, z: 1, rotation: 0, w: 0.6, d: 0.45, h: 0.5, variant: null, rack: { slots: [{ id: "a", type: "pack:t:sw", u: 1, entity: "binary_sensor.switch_status", links: ["sensor.switch_temperature"] }] } },
  ];
  const ids = watchedEntities(hass, b, { openings, furniture, heat: false, warnings: [], weatherEntityId: null });
  assert.ok(ids.includes("binary_sensor.switch_status"));
  assert.ok(ids.includes("sensor.switch_temperature"));
});
