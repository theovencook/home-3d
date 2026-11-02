// Seasonal themes (#239): the main UK holidays, Halloween and Chinese New Year (#287); every holiday's dates can be changed. On its day a house gets a greeting, a soft colour glow and a light
// falling or floating effect (fun/season.ts, a lazy bundle). This file is only the calendar: which holiday a day is.
// Moving dates are worked out (Easter by the computus, the others from Easter or as the n-th Sunday of a month).

import { SEASON_IDS, type SeasonId } from "./season-ids.ts";

export { SEASON_IDS, type SeasonId };

/** The effects the overlay can draw. */
export type SeasonEffect = "halloween" | "lanterns" | "fireworks" | "sparkles" | "confetti" | "snow" | "snow_light" | "snow_sleigh" | "poppies" | "hearts" | "pancakes" | "flowers" | "easter" | "stars";

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

/** A day as [month 1-12, day]. */
export type MonthDay = readonly [number, number];
/** A holiday's days: from the first to the last, both included (from after to: over the turn of the year). */
export interface DayRange {
  from: MonthDay;
  to: MonthDay;
}
/** What a house stores to change a holiday's dates (#287): "MM-DD" text, no year (it repeats every year). */
export interface SeasonDates {
  from: string;
  to?: string;
}
export type SeasonDatesMap = Readonly<Record<string, SeasonDates | undefined>> | null | undefined;

/** Chinese New Year's Day of the years to come (2025-2035), as the Hong Kong Observatory lists them. */
const CNY_TABLE: Record<number, MonthDay> = {
  2025: [1, 29],
  2026: [2, 17],
  2027: [2, 6],
  2028: [1, 26],
  2029: [2, 13],
  2030: [2, 3],
  2031: [1, 23],
  2032: [2, 11],
  2033: [1, 31],
  2034: [2, 19],
  2035: [2, 8],
};

/** Chinese New Year's Day from the browser's Chinese calendar; null where it has none. It can be a day out when the new moon is minutes from midnight in China. */
export function calendarChineseNewYear(year: number): MonthDay | null {
  try {
    const f = new Intl.DateTimeFormat("en-u-ca-chinese", { month: "numeric", day: "numeric", timeZone: "Asia/Shanghai" });
    if (f.resolvedOptions().calendar !== "chinese") return null;
    for (let n = 0; n < 33; n++) {
      const day = new Date(Date.UTC(year, 0, 19 + n, 4)); // noon in China, where the calendar is kept
      const parts = f.formatToParts(day);
      if (parts.find((p) => p.type === "month")?.value === "1" && parts.find((p) => p.type === "day")?.value === "1") return [day.getUTCMonth() + 1, day.getUTCDate()];
    }
  } catch {
    // no Chinese calendar here
  }
  return null;
}

/** Chinese New Year's Day (between 21 January and 20 February): the table for the years it knows, else the Chinese calendar. */
export function chineseNewYear(year: number): MonthDay {
  return CNY_TABLE[year] ?? calendarChineseNewYear(year) ?? CNY_TABLE[2026]!;
}

/** The days a holiday is on in a year, as worked out (the dates before anyone changes them). */
export function defaultRange(id: SeasonId, y: number): DayRange {
  const day = (m: number, d: number): DayRange => ({ from: [m, d], to: [m, d] });
  const one = (md: MonthDay): DayRange => ({ from: md, to: md });
  switch (id) {
    case "nye":
      return day(12, 31);
    case "new_year":
      return day(1, 1);
    case "christmas_eve":
      return day(12, 24);
    case "christmas":
      return day(12, 25);
    case "boxing_day":
      return day(12, 26);
    case "twixmas":
      return { from: [12, 27], to: [12, 31] };
    case "advent":
      return { from: [12, 1], to: [12, 23] };
    case "bonfire":
      return day(11, 5);
    case "remembrance":
      return one(remembranceSunday(y));
    case "valentines":
      return day(2, 14);
    case "pancake_day":
      return one(pancakeDay(y));
    case "mothers_day":
      return one(mothersDay(y));
    case "easter":
      // Good Friday to Easter Monday
      return { from: beforeEaster(y, 2), to: beforeEaster(y, -1) };
    case "fathers_day":
      return one(fathersDay(y));
    case "halloween":
      return day(10, 31);
    case "chinese_new_year":
      return one(chineseNewYear(y));
  }
}

const DAYS_IN = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/** "MM-DD" as [month, day]; null when it is not a day of the calendar (29 February is one). */
export function parseMonthDay(text: string | undefined): MonthDay | null {
  const m = /^(\d\d)-(\d\d)$/.exec(text ?? "");
  if (!m) return null;
  const month = Number(m[1]);
  const day = Number(m[2]);
  return month >= 1 && month <= 12 && day >= 1 && day <= DAYS_IN[month - 1]! ? [month, day] : null;
}

/** [month, day] as "MM-DD". */
export function monthDayText([m, d]: MonthDay): string {
  return `${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

/** The days a holiday is on in a year: the house's own dates when it set valid ones, else the worked out ones. */
export function seasonRange(id: SeasonId, y: number, dates?: SeasonDatesMap): DayRange & { custom: boolean } {
  const own = dates?.[id];
  const from = parseMonthDay(own?.from);
  if (own && from) return { from, to: parseMonthDay(own.to) ?? from, custom: true };
  return { ...defaultRange(id, y), custom: false };
}

const key = ([m, d]: MonthDay) => m * 100 + d;

/** Whether a day (month 1-12) is within the holiday's days. */
function matches(id: SeasonId, y: number, m: number, d: number, dates?: SeasonDatesMap): boolean {
  const { from, to } = seasonRange(id, y, dates);
  const x = m * 100 + d;
  return key(from) <= key(to) ? x >= key(from) && x <= key(to) : x >= key(from) || x <= key(to);
}

/** The hours to midnight on New Year's Eve, then the minutes in the last hour. */
function countdown(y: number, hour: number, minute: number): Pick<Season, "key" | "vars"> {
  const left = 24 * 60 - (hour * 60 + minute);
  if (left > 60) return { key: "season_nye_hours", vars: { n: Math.ceil(left / 60), year: y + 1 } };
  return { key: left === 1 ? "season_nye_minute" : "season_nye_minutes", vars: { n: left, year: y + 1 } };
}

function describe(id: SeasonId, y: number, hour: number, minute: number, month: number, day: number): Season {
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
      // the sleeps to Christmas Day (24 December is Christmas Eve, so there are two or more with the usual dates)
      return { ...plain("snow", RED), vars: { n: Math.max(1, Math.round((Date.UTC(y, 11, 25) - Date.UTC(y, month - 1, day)) / 864e5)) } };
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
    case "halloween":
      return plain("halloween", argb(0x40ff7a00));
    case "chinese_new_year":
      return plain("lanterns", argb(0x40d4202f));
  }
}

/** Holidays switched off, by id (false = off; a missing one is on). */
export type SeasonsOff = Readonly<Record<string, boolean | undefined>> | null | undefined;

/**
 * The holiday of a moment (local time), or null on a plain day. A holiday switched off is skipped, so on 31 December
 * with New Year's Eve off the day is Twixmas.
 */
export function seasonAt(now: Date, off?: SeasonsOff, dates?: SeasonDatesMap): Season | null {
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  for (const id of SEASON_IDS) {
    if (off?.[id] === false || !matches(id, y, m, d, dates)) continue;
    return describe(id, y, now.getHours(), now.getMinutes(), m, d);
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
export function seasonNow(off?: SeasonsOff, now = new Date(), dates?: SeasonDatesMap): Season | null {
  const p = seasonPreview();
  if (!p) return seasonAt(now, off, dates);
  return off?.[p] === false ? null : describe(p, now.getFullYear(), now.getHours(), now.getMinutes(), 12, 12);
}
