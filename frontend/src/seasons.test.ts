import assert from "node:assert/strict";
import { test } from "node:test";
import { SEASON_IDS, beforeEaster, easterSunday, fathersDay, mothersDay, nthSunday, pancakeDay, remembranceSunday, seasonAt } from "./seasons.ts";

const at = (y: number, m: number, d: number, h = 12, min = 0) => new Date(y, m - 1, d, h, min);
const id = (y: number, m: number, d: number, off?: Record<string, boolean>, h = 12) => seasonAt(at(y, m, d, h), off)?.id ?? null;

test("Easter Sunday follows the computus across years (#239)", () => {
  const known: Record<number, [number, number]> = {
    2019: [4, 21],
    2020: [4, 12],
    2021: [4, 4],
    2022: [4, 17],
    2023: [4, 9],
    2024: [3, 31],
    2025: [4, 20],
    2026: [4, 5],
    2027: [3, 28],
    2028: [4, 16],
    2029: [4, 1],
    2030: [4, 21],
    2038: [4, 25],
  };
  for (const [y, md] of Object.entries(known)) assert.deepEqual(easterSunday(Number(y)), md, y);
});

test("Pancake Day is 47 days before Easter (#239)", () => {
  const known: Record<number, [number, number]> = { 2023: [2, 21], 2024: [2, 13], 2025: [3, 4], 2026: [2, 17], 2027: [2, 9], 2028: [2, 29], 2029: [2, 13], 2030: [3, 5] };
  for (const [y, md] of Object.entries(known)) assert.deepEqual(pancakeDay(Number(y)), md, y);
  assert.equal(beforeEaster(2024, 47)[0], 2);
});

test("Mother's Day (UK) is Easter minus 21 days, always a Sunday (#239)", () => {
  const known: Record<number, [number, number]> = { 2023: [3, 19], 2024: [3, 10], 2025: [3, 30], 2026: [3, 15], 2027: [3, 7], 2028: [3, 26], 2029: [3, 11], 2030: [3, 31] };
  for (const [y, md] of Object.entries(known)) {
    assert.deepEqual(mothersDay(Number(y)), md, y);
    assert.equal(new Date(Number(y), md[0] - 1, md[1]).getDay(), 0, `${y} is a Sunday`);
  }
});

test("Father's Day is the third Sunday of June (#239)", () => {
  const known: Record<number, number> = { 2023: 18, 2024: 16, 2025: 15, 2026: 21, 2027: 20, 2028: 18, 2029: 17, 2030: 16 };
  for (const [y, d] of Object.entries(known)) assert.deepEqual(fathersDay(Number(y)), [6, d], y);
});

test("Remembrance Sunday is the second Sunday of November (#239)", () => {
  const known: Record<number, number> = { 2023: 12, 2024: 10, 2025: 9, 2026: 8, 2027: 14, 2028: 12, 2029: 11, 2030: 10 };
  for (const [y, d] of Object.entries(known)) assert.deepEqual(remembranceSunday(Number(y)), [11, d], y);
});

test("nthSunday handles a month that starts on a Sunday (#239)", () => {
  // 1 June 2025 is a Sunday: the third is the 15th; 1 Feb 2026 too
  assert.equal(nthSunday(2025, 6, 3), 15);
  assert.equal(nthSunday(2026, 2, 1), 1);
});

test("each moving holiday shows on its day and not the day before or after (#239)", () => {
  assert.equal(id(2026, 2, 17), "pancake_day");
  assert.equal(id(2026, 2, 16), null);
  assert.equal(id(2026, 2, 18), null);
  assert.equal(id(2026, 3, 15), "mothers_day");
  assert.equal(id(2026, 3, 22), null);
  assert.equal(id(2026, 6, 21), "fathers_day");
  assert.equal(id(2026, 6, 14), null);
  assert.equal(id(2026, 11, 8), "remembrance");
  assert.equal(id(2026, 11, 15), null);
  // 2027: Easter on 28 March, Mothering Sunday on the 7th
  assert.equal(id(2027, 3, 7), "mothers_day");
  assert.equal(id(2027, 11, 14), "remembrance");
});

test("Easter runs from Good Friday to Easter Monday, also over a month end (#239)", () => {
  // 2026: Sunday 5 April
  assert.deepEqual([2, 3, 4, 5, 6, 7, 8].map((d) => id(2026, 4, d)), [null, "easter", "easter", "easter", "easter", null, null]);
  // 2024: Sunday 31 March, Monday 1 April
  assert.deepEqual([28, 29, 30, 31].map((d) => id(2024, 3, d)), [null, "easter", "easter", "easter"]);
  assert.equal(id(2024, 3, 29), "easter");
  assert.equal(id(2024, 4, 1), "easter");
  assert.equal(id(2024, 4, 2), null);
  assert.equal(id(2024, 3, 27), null);
});

test("the fixed holidays are on their dates (#239)", () => {
  assert.equal(id(2026, 1, 1), "new_year");
  assert.equal(id(2026, 2, 14), "valentines");
  assert.equal(id(2026, 11, 5), "bonfire");
  assert.equal(id(2026, 12, 24), "christmas_eve");
  assert.equal(id(2026, 12, 25), "christmas");
  assert.equal(id(2026, 12, 26), "boxing_day");
  assert.equal(id(2026, 12, 27), "twixmas");
  assert.equal(id(2026, 12, 30), "twixmas");
  assert.equal(id(2026, 12, 31), "nye");
  assert.equal(id(2026, 7, 15), null);
  assert.equal(id(2026, 10, 31), null, "Halloween is its own pack, not part of the calendar");
});

test("Advent counts the sleeps to Christmas from 1 December (#239)", () => {
  assert.equal(id(2026, 11, 30), null);
  const first = seasonAt(at(2026, 12, 1));
  assert.equal(first?.id, "advent");
  assert.deepEqual([first?.key, first?.vars.n], ["season_advent", 24]);
  assert.equal(seasonAt(at(2026, 12, 22))?.vars.n, 3);
  assert.equal(seasonAt(at(2026, 12, 23))?.vars.n, 2, "the last day before Christmas Eve");
});

test("New Year's Eve counts down the hours, then the minutes, and fireworks come in the evening (#239)", () => {
  const eve = (h: number, m: number) => seasonAt(at(2026, 12, 31, h, m))!;
  assert.deepEqual([eve(18, 0).key, eve(18, 0).vars], ["season_nye_hours", { n: 6, year: 2027 }]);
  assert.equal(eve(18, 30).vars.n, 6, "5.5 hours left rounds up");
  assert.deepEqual([eve(23, 0).key, eve(23, 0).vars.n], ["season_nye_minutes", 60]);
  assert.deepEqual([eve(23, 35).key, eve(23, 35).vars.n], ["season_nye_minutes", 25]);
  assert.deepEqual([eve(23, 59).key, eve(23, 59).vars.n], ["season_nye_minute", 1]);
  assert.equal(eve(12, 0).effect, "sparkles");
  assert.equal(eve(20, 0).effect, "fireworks");
  assert.equal(seasonAt(at(2027, 1, 1))?.vars.year, 2027);
});

test("a holiday switched off is skipped; the other holiday of the day shows instead (#239)", () => {
  assert.equal(id(2026, 12, 25, { christmas: false }), null);
  assert.equal(id(2026, 12, 25, { boxing_day: false }), "christmas");
  assert.equal(id(2026, 12, 31, { nye: false }), "twixmas");
  assert.equal(id(2026, 12, 31, { nye: false, twixmas: false }), null);
  assert.equal(id(2026, 4, 3, { easter: false }), null);
  assert.equal(id(2026, 4, 3, { easter: true }), "easter");
  // a Pancake Day on Valentine's Day (Easter on 1 April): Valentine's wins, and switched off Pancake Day shows
  assert.deepEqual(pancakeDay(2040), [2, 14]);
  assert.equal(id(2040, 2, 14), "valentines");
  assert.equal(id(2040, 2, 14, { valentines: false }), "pancake_day");
});

test("every holiday has a day it shows on in a normal year (#239)", () => {
  const seen = new Set<string>();
  for (let t = new Date(2026, 0, 1); t.getFullYear() === 2026; t.setDate(t.getDate() + 1)) {
    const s = seasonAt(new Date(t.getFullYear(), t.getMonth(), t.getDate(), 12));
    if (s) seen.add(s.id);
  }
  assert.deepEqual([...seen].sort(), [...SEASON_IDS].sort());
});
