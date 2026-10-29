// Seasonal and conditional items (#15): an item shows while an entity is available and/or inside one of its intervals.

import type { Building, Furniture, ShowInterval } from "./model.ts";
import type { HassEntity } from "./types.ts";

const two = (n: number) => String(n).padStart(2, "0");

/** "MM-DD" days compare as text; a first day after the last runs over the new year. */
function inDays(day: string, from: string, to: string): boolean {
  return from <= to ? day >= from && day <= to : day >= from || day <= to;
}

/** "HH:MM" times compare as text: from the start up to (not including) the end; a start after the end runs over midnight. */
export function inTimes(time: string, start: string, end: string): boolean {
  return start <= end ? time >= start && time < end : time >= start || time < end;
}

/** Whether the moment lies in the interval (the parts left empty always fit). */
function inside(iv: ShowInterval, now: Date): boolean {
  const day = `${two(now.getMonth() + 1)}-${two(now.getDate())}`;
  if (iv.from && iv.to && !inDays(day, iv.from, iv.to)) return false;
  return !iv.start || !iv.end || inTimes(`${two(now.getHours())}:${two(now.getMinutes())}`, iv.start, iv.end);
}

/** Whether the item shows now. */
export function itemShown(f: Furniture, states: Record<string, HassEntity>, now: Date): boolean {
  const rule = f.show_when;
  if (!rule) return true;
  const e = rule.entity;
  if (e && e !== "none" && (states[e]?.state ?? "unavailable") === "unavailable") return false;
  const intervals = rule.intervals ?? [];
  return !intervals.length || intervals.some((iv) => inside(iv, now));
}

/** The ids of the items hidden now. */
export function hiddenItems(b: Building, states: Record<string, HassEntity>, now: Date): string[] {
  return b.floors.flatMap((fl) => fl.furniture.filter((f) => !itemShown(f, states, now)).map((f) => f.id));
}

/** The plan as the 3D view shows it: without the items hidden now (the very same plan when none is). */
export function shownBuilding(b: Building, states: Record<string, HassEntity>, now: Date): Building {
  const hidden = new Set(hiddenItems(b, states, now));
  if (!hidden.size) return b;
  return { ...b, floors: b.floors.map((fl) => ({ ...fl, furniture: fl.furniture.filter((f) => !hidden.has(f.id)) })) };
}

/** Some item shows by the calendar or the clock: the 3D view looks again every minute. */
export function hasTimedRules(b: Building): boolean {
  return b.floors.some((fl) => fl.furniture.some((f) => !!f.show_when?.intervals?.length));
}
