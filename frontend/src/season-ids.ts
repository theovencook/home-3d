// The ids of the seasonal themes (#239), apart from the calendar (seasons.ts) so the pages that only list them stay small.

/** The holidays, in the order they are tried when one day is two of them (31 December: New Year's Eve, then Twixmas). */
export const SEASON_IDS = [
  "nye",
  "new_year",
  "christmas_eve",
  "christmas",
  "boxing_day",
  "twixmas",
  "advent",
  "bonfire",
  "remembrance",
  "valentines",
  "pancake_day",
  "mothers_day",
  "easter",
  "fathers_day",
] as const;
export type SeasonId = (typeof SEASON_IDS)[number];
