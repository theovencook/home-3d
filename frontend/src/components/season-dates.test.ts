// The holidays' dates on the Extensions page (#287): shown as text, changed from either end, reset to the usual ones.
import assert from "node:assert/strict";
import { test } from "node:test";
import { changedDates, dayText, rangeText, withSeasonDates } from "./season-dates.ts";

test("a holiday's days read as text, one day or a range, in the viewer's language", () => {
  assert.equal(dayText([10, 31], "en-GB"), "31 Oct");
  assert.equal(rangeText("halloween", 2026, undefined, "en-GB"), "31 Oct");
  assert.equal(rangeText("twixmas", 2026, undefined, "en-GB"), "27 Dec – 31 Dec");
  assert.equal(rangeText("halloween", 2026, { halloween: { from: "10-29", to: "11-01" } }, "en-GB"), "29 Oct – 1 Nov");
});

test("changing one end keeps the other; a one day holiday moves as a whole; the day is kept inside the month", () => {
  assert.deepEqual(changedDates("halloween", 2026, undefined, "from", 10, 29), { from: "10-29", to: "10-29" });
  assert.deepEqual(changedDates("halloween", 2026, { halloween: { from: "10-29", to: "10-29" } }, "to", 11, 1), { from: "10-29", to: "11-01" });
  assert.deepEqual(changedDates("twixmas", 2026, undefined, "to", 1, 3), { from: "12-27", to: "01-03" });
  assert.deepEqual(changedDates("bonfire", 2026, undefined, "from", 2, 31), { from: "02-29", to: "02-29" });
  assert.deepEqual(changedDates("bonfire", 2026, undefined, "from", 11, 0), { from: "11-01", to: "11-01" });
});

test("storing and resetting dates: reset removes the holiday's entry, the last one removes the map", () => {
  const one = withSeasonDates(undefined, "halloween", { from: "10-29", to: "11-01" });
  assert.deepEqual(one, { halloween: { from: "10-29", to: "11-01" } });
  const two = withSeasonDates(one, "easter", { from: "04-01", to: "04-02" });
  assert.deepEqual(Object.keys(two!).sort(), ["easter", "halloween"]);
  assert.deepEqual(withSeasonDates(two, "easter", null), one);
  assert.equal(withSeasonDates(one, "halloween", null), undefined);
  // an entry that is not a date is dropped on the way
  assert.deepEqual(withSeasonDates({ easter: { from: "nope" } }, "halloween", { from: "10-30" }), { halloween: { from: "10-30" } });
});
