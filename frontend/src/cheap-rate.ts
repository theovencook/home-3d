// The cheap rate (#29): an entity that says "cheap now", or a daily window, both set up per plan. Nothing set: no badge.
// With existing sensors (#323) it is Home Assistant's own tariff entity instead: a utility meter's tariff select, a
// peak/off-peak sensor, or anything that is on while the cheap rate runs; the window is not asked for then.

import type { EnergySettings } from "./model.ts";
import { HHMM, hhmm, inTimes } from "./show-when.ts";
import type { HassEntity } from "./types.ts";

/** Whether the plan takes its rates and costs from Home Assistant's sensors (#323); a plan without the field sets them up itself. */
export function ratesFromSensors(energy: Pick<EnergySettings, "rates_from">): boolean {
  return energy.rates_from === "sensors";
}

/** Entities that are "on" while the cheap rate runs. */
export const ON_OFF_RATE = /^(binary_sensor|schedule|input_boolean|switch)\./;

/** Whether a tariff state (a select option, a sensor's state) reads like the cheap rate: off-peak, night, economy 7 … */
export function looksCheap(state: string): boolean {
  return /off[\s_-]?peak|night|cheap|low|economy|e7|nacht|niedrig/i.test(state);
}

/** The states a tariff entity can take: a select's or enum sensor's options, else its current state. */
export function tariffStates(entity: HassEntity | undefined): string[] {
  if (!entity) return [];
  const options = entity.attributes.options;
  if (Array.isArray(options)) return options.filter((o): o is string => typeof o === "string");
  return entity.state && entity.state !== "unavailable" && entity.state !== "unknown" ? [entity.state] : [];
}

/** Whether Home Assistant's tariff entity says the cheap rate runs now (#323); unavailable or unknown is not cheap. */
function cheapFromSensor(energy: EnergySettings, entity: HassEntity | undefined, id: string): boolean {
  if (ON_OFF_RATE.test(id)) return entity?.state === "on";
  const state = entity?.state;
  if (!state || state === "unavailable" || state === "unknown") return false;
  const picked = energy.cheap_states ?? [];
  if (picked.length) return picked.some((s) => s.toLowerCase() === state.toLowerCase());
  return looksCheap(state);
}

/**
 * Whether the cheap rate runs now: true or false, null when the plan sets none up. The entity wins (it is "on" while
 * the rate runs; unavailable counts as not cheap); else the daily window, start and end both set. With existing
 * sensors (#323) only Home Assistant's tariff entity counts.
 */
export function cheapRate(energy: EnergySettings, states: Record<string, HassEntity>, now: Date): boolean | null {
  if (ratesFromSensors(energy)) {
    const rate = energy.rate_entity;
    return rate && rate !== "none" ? cheapFromSensor(energy, states[rate], rate) : null;
  }
  const id = energy.cheap_rate;
  if (id && id !== "none") return states[id]?.state === "on";
  const from = energy.cheap_from;
  const to = energy.cheap_to;
  if (!from || !to || !HHMM.test(from) || !HHMM.test(to)) return null;
  return inTimes(hhmm(now), from, to);
}
