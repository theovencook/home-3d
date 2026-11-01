// Seasonal themes (#239): the main UK holidays. On its day a house gets a greeting, a soft colour glow and a light
// falling or floating effect (fun/season.ts, a lazy bundle). This file is only the calendar: which holiday a day is.
// Moving dates are worked out (Easter by the computus, the others from Easter or as the n-th Sunday of a month).

import { SEASON_IDS, type SeasonId } from "./season-ids.ts";

export { SEASON_IDS, type SeasonId };

/** The effects the overlay can draw. */
export type SeasonEffect = "fireworks" | "sparkles" | "confetti" | "snow" | "snow_light" | "snow_sleigh" | "poppies" | "hearts" | "pancakes" | "flowers" | "easter" | "stars";

export interface Season {
  id: SeasonId;
  effect: SeasonEffect;
  /** The glow laid over the view, as a CSS colour. */
  tint: string;
  /** The greeting: its text key and variables (the Advent count, the New Year's Eve countdown, the year). */
  key: string;
  vars: Record<string, number>;
}

/** 0xAARRGGBB to a CSS colour. */
function argb(v: number): string {
  return `rgba(${(v >> 16) & 255}, ${(v >> 8) & 255}, ${v & 255}, ${(((v >>> 24) & 255) / 255).toFixed(2)})`;
}
const RED = argb(0x55c8102e);
const GOLD = argb(0x4dffc94d);
const BLUE = argb(0x3384a9ff);

/** Easter Sunday of a year (Gregorian, the anonymous computus): [month 1-12, day]. */
export function easterSunday(year: number): [number, number] {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const n = h + l - 7 * m + 114;
  return [Math.floor(n / 31), (n % 31) + 1];
}

/** The day `back` days before Easter Sunday (negative: after) as [month, day]. */
export function beforeEaster(year: number, back: number): [number, number] {
  const [m, d] = easterSunday(year);
  const x = new Date(Date.UTC(year, m - 1, d - back));
  return [x.getUTCMonth() + 1, x.getUTCDate()];
}

/** The day of the month of the n-th Sunday of a month (month 1-12). */
export function nthSunday(year: number, month: number, n: number): number {
  const first = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  return 1 + ((7 - first) % 7) + (n - 1) * 7;
}

/** Pancake Day (Shrove Tuesday): 47 days before Easter. */
export const pancakeDay = (year: number) => beforeEaster(year, 47);
/** Mother's Day in the UK (Mothering Sunday): 21 days before Easter. */
export const mothersDay = (year: number) => beforeEaster(year, 21);
/** Father's Day: the third Sunday of June. */
export const fathersDay = (year: number): [number, number] => [6, nthSunday(year, 6, 3)];
/** Remembrance Sunday: the second Sunday of November. */
export const remembranceSunday = (year: number): [number, number] => [11, nthSunday(year, 11, 2)];

const is = (m: number, d: number, [em, ed]: [number, number]) => m === em && d === ed;

/** Whether a day (month 1-12) is the holiday. */
function matches(id: SeasonId, y: number, m: number, d: number): boolean {
  switch (id) {
    case "nye":
      return m === 12 && d === 31;
    case "new_year":
      return m === 1 && d === 1;
    case "christmas_eve":
      return m === 12 && d === 24;
    case "christmas":
      return m === 12 && d === 25;
    case "boxing_day":
      return m === 12 && d === 26;
    case "twixmas":
      return m === 12 && d >= 27;
    case "advent":
      return m === 12 && d <= 23;
    case "bonfire":
      return m === 11 && d === 5;
    case "remembrance":
      return is(m, d, remembranceSunday(y));
    case "valentines":
      return m === 2 && d === 14;
    case "pancake_day":
      return is(m, d, pancakeDay(y));
    case "mothers_day":
      return is(m, d, mothersDay(y));
    case "easter": {
      // Good Friday to Easter Monday
      const [em, ed] = easterSunday(y);
      const t = Date.UTC(y, m - 1, d);
      const e = Date.UTC(y, em - 1, ed);
      return t >= e - 2 * 864e5 && t <= e + 864e5;
    }
    case "fathers_day":
      return is(m, d, fathersDay(y));
  }
}

/** The hours to midnight on New Year's Eve, then the minutes in the last hour. */
function countdown(y: number, hour: number, minute: number): Pick<Season, "key" | "vars"> {
  const left = 24 * 60 - (hour * 60 + minute);
  if (left > 60) return { key: "season_nye_hours", vars: { n: Math.ceil(left / 60), year: y + 1 } };
  return { key: left === 1 ? "season_nye_minute" : "season_nye_minutes", vars: { n: left, year: y + 1 } };
}

function describe(id: SeasonId, y: number, hour: number, minute: number, day: number): Season {
  const plain = (effect: SeasonEffect, tint: string): Season => ({ id, effect, tint, key: `season_${id}`, vars: {} });
  switch (id) {
    case "nye":
      return { ...plain(hour >= 20 ? "fireworks" : "sparkles", GOLD), ...countdown(y, hour, minute) };
    case "new_year":
      return { ...plain("confetti", GOLD), vars: { year: y } };
    case "christmas_eve":
    case "christmas":
      return plain("snow_sleigh", RED);
    case "boxing_day":
      return plain("snow", RED);
    case "twixmas":
      return plain("snow_light", BLUE);
    case "advent": {
      // 24 December is Christmas Eve, so there are always two sleeps or more
      return { ...plain("snow", RED), vars: { n: 25 - day } };
    }
    case "bonfire":
      return plain("fireworks", argb(0x4dff7a1a));
    case "remembrance":
      return plain("poppies", argb(0x40b00020));
    case "valentines":
      return plain("hearts", argb(0x4dff3366));
    case "pancake_day":
      return plain("pancakes", argb(0x4df5b041));
    case "mothers_day":
      return plain("flowers", argb(0x4dff8fc7));
    case "easter":
      return plain("easter", argb(0x4db5e48c));
    case "fathers_day":
      return plain("stars", argb(0x4d4fc3f7));
  }
}

/** Holidays switched off, by id (false = off; a missing one is on). */
export type SeasonsOff = Readonly<Record<string, boolean | undefined>> | null | undefined;

/**
 * The holiday of a moment (local time), or null on a plain day. A holiday switched off is skipped, so on 31 December
 * with New Year's Eve off the day is Twixmas.
 */
export function seasonAt(now: Date, off?: SeasonsOff): Season | null {
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  for (const id of SEASON_IDS) {
    if (off?.[id] === false || !matches(id, y, m, d)) continue;
    return describe(id, y, now.getHours(), now.getMinutes(), d);
  }
  return null;
}

/** "?fp3d_season=christmas" in the address bar shows that holiday on any day (to look at it). */
export function seasonPreview(): SeasonId | null {
  try {
    const v = new URLSearchParams(location.search).get("fp3d_season");
    return (SEASON_IDS as readonly string[]).includes(v ?? "") ? (v as SeasonId) : null;
  } catch {
    return null;
  }
}

/** The holiday to show now: the previewed one (unless switched off), else today's. */
export function seasonNow(off?: SeasonsOff, now = new Date()): Season | null {
  const p = seasonPreview();
  if (!p) return seasonAt(now, off);
  return off?.[p] === false ? null : describe(p, now.getFullYear(), now.getHours(), now.getMinutes(), 12);
}
