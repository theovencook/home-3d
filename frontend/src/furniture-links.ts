/**
 * Which entities an item's main link ("Device") offers: a lamp its light, a TV its media player, a radiator its
 * thermostat, a camera its camera … (the editor's Device dropdown, #81).
 */
import { isStatusSensor } from "./devices.ts";
import { isLamp } from "./model.ts";
import { isCameraItem, isEntityMarker, isPackHeater, isPackSensor, isPackType, isRobotVacuum, isThermostatItem, packDisplay, packMotion } from "./packs.ts";
import { isPrinter } from "./printer.ts";
import { isMediaFurniture } from "./devices.ts";
import type { HomeAssistant } from "./types.ts";

export { isCameraItem, isThermostatItem };

const ALARM_CLASSES = new Set(["smoke", "gas", "carbon_monoxide", "heat", "moisture", "safety", "sound", "problem"]);

/** A TV-like item: a media item with a real screen (a pack item with only a status light links like any device). */
export function isTvLike(type: string): boolean {
  return isMediaFurniture(type) && (!isPackType(type) || packDisplay(type));
}

/** Whether the item's main link may be this entity. */
export function mainLinkAccepts(hass: HomeAssistant, type: string, id: string): boolean {
  // a generic sensor or switch marker stands for any device: any entity (#79)
  if (isEntityMarker(type)) return true;
  // a lamp can follow a light or a plain switch (e.g. a relay that switches the ceiling light)
  if (isLamp(type)) return /^(light|switch|input_boolean)\./.test(id);
  // a media player, or the smart plug an older TV is switched with; a roll-down screen also its motor's cover (#511)
  if (isTvLike(type)) return /^(media_player|switch|input_boolean|light)\./.test(id) || (packMotion(type) === "screen" && id.startsWith("cover."));
  if (type === "awning") return id.startsWith("cover.");
  // a motorised curtain or a roof window's blind: its motor's cover (or a switch that drives it, #511, #24)
  const motion = packMotion(type);
  if (motion === "curtain" || motion === "blind") return /^(cover|switch|input_boolean)\./.test(id);
  // a radiator (built-in, a pack's radiator with a TRV, a smart valve) and an air conditioner: their thermostat (#81)
  if (type === "ac_unit" || isThermostatItem(type)) return id.startsWith("climate.");
  if (isRobotVacuum(type)) return id.startsWith("vacuum.");
  return (
    // a camera (a doorbell camera too): its camera entity, besides the switches and sensors of its device (#81)
    (isCameraItem(type) && id.startsWith("camera.")) ||
    // or a status sensor (a 3D printer's print status: running, idle, finish …)
    /^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(id) ||
    // a pack's heat pump indoor unit, boiler or buffer tank: its water_heater entity (#645)
    (isPackHeater(type) && id.startsWith("water_heater.")) ||
    // a pack's sensor model (motion, presence, contact, leak …): any sensor, with or without a class (#810)
    // a 3D printer (#11): any of its sensors (OctoPrint reports printing as a binary sensor)
    ((isPackSensor(type) || isPrinter(type)) && /^(binary_sensor|sensor)\./.test(id)) ||
    isStatusSensor(hass.states[id]) ||
    // alarms that report as binary sensors (binary_sensor.…_smoke, #490); a smoke detector takes any
    (id.startsWith("binary_sensor.") && (type.endsWith("smoke_detector") || ALARM_CLASSES.has(String(hass.states[id]?.attributes.device_class ?? ""))))
  );
}

/** The main link's filter for an entity dropdown. */
export function linkFilter(hass: HomeAssistant, type: string): (id: string) => boolean {
  return (id) => mainLinkAccepts(hass, type, id);
}
