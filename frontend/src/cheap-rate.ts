// The cheap rate (#29): an entity that says "cheap now", or a daily window, both set up per plan. Nothing set: no badge.

import type { EnergySettings } from "./model.ts";
import { HHMM, hhmm, inTimes } from "./show-when.ts";
import type { HassEntity } from "./types.ts";

/**
 * Whether the cheap rate runs now: true or false, null when the plan sets none up. The entity wins (it is "on" while
 * the rate runs; unavailable counts as not cheap); else the daily window, start and end both set.
 */
export function cheapRate(energy: EnergySettings, states: Record<string, HassEntity>, now: Date): boolean | null {
  const id = energy.cheap_rate;
  if (id && id !== "none") return states[id]?.state === "on";
  const from = energy.cheap_from;
  const to = energy.cheap_to;
  if (!from || !to || !HHMM.test(from) || !HHMM.test(to)) return null;
  return inTimes(hhmm(now), from, to);
}
