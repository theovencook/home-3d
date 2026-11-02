// The dates of a holiday on the Extensions page (#287): the days it is on, shown as text, with an editor (from and to,
// month and day) and a way back to the usual dates. The usual dates are worked out (seasons.ts); a house only stores
// what it changed (settings.season_dates). Pure functions and a template: the page keeps the open row.

import { html, nothing, type TemplateResult } from "lit";
import { monthDayText, parseMonthDay, seasonRange, type MonthDay, type SeasonDates, type SeasonDatesMap, type SeasonId } from "../seasons.ts";

const DAYS_IN = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/** A day as short text in the viewer's language ("31 Oct"); the year is a leap one so 29 February exists. */
export function dayText([m, d]: MonthDay, lang?: string): string {
  return new Date(2024, m - 1, d).toLocaleDateString(lang, { day: "numeric", month: "short" });
}

/** The days of a holiday as text: one day, or "27 Dec – 31 Dec". */
export function rangeText(id: SeasonId, year: number, dates: SeasonDatesMap, lang?: string): string {
  const { from, to } = seasonRange(id, year, dates);
  return from[0] === to[0] && from[1] === to[1] ? dayText(from, lang) : `${dayText(from, lang)} – ${dayText(to, lang)}`;
}

/** The dates to store after one end of a holiday's days was changed: both ends are kept (a one day holiday moves as a whole). */
export function changedDates(id: SeasonId, year: number, dates: SeasonDatesMap, end: "from" | "to", month: number, day: number): SeasonDates {
  const range = seasonRange(id, year, dates);
  const clamped: MonthDay = [month, Math.min(Math.max(1, day), DAYS_IN[month - 1]!)];
  const single = range.from[0] === range.to[0] && range.from[1] === range.to[1];
  const from = end === "from" ? clamped : range.from;
  const to = end === "to" ? clamped : single ? clamped : range.to;
  return { from: monthDayText(from), to: monthDayText(to) };
}

export interface SeasonDatesView {
  id: SeasonId;
  year: number;
  lang: string | undefined;
  dates: SeasonDatesMap;
  /** The editor is open for this holiday. */
  open: boolean;
  /** Editors only; the dates stay readable for everyone. */
  editable: boolean;
  t: (key: string) => string;
  toggle: () => void;
  /** Store these dates; null: back to the usual dates. */
  set: (dates: SeasonDates | null) => void;
}

/** One holiday's dates line: the days, a Dates button, and when open the From and To fields and the way back. */
export function seasonDates(v: SeasonDatesView): TemplateResult {
  const range = seasonRange(v.id, v.year, v.dates);
  const months = Array.from({ length: 12 }, (_, i) => new Date(2024, i, 1).toLocaleDateString(v.lang, { month: "long" }));
  const field = (end: "from" | "to", at: MonthDay) => html`<span class="fp3d-ext-dates-field"
    ><span>${v.t(end === "from" ? "season_dates_from" : "season_dates_to")}</span>
    <select aria-label=${`${v.t(end === "from" ? "season_dates_from" : "season_dates_to")}: ${v.t("season_dates_month")}`} @change=${(e: Event) => v.set(changedDates(v.id, v.year, v.dates, end, Number((e.target as HTMLSelectElement).value), at[1]))}>
      ${months.map((name, i) => html`<option value=${i + 1} ?selected=${at[0] === i + 1}>${name}</option>`)}
    </select>
    <input
      type="number"
      min="1"
      max="31"
      .value=${String(at[1])}
      aria-label=${`${v.t(end === "from" ? "season_dates_from" : "season_dates_to")}: ${v.t("season_dates_day")}`}
      @change=${(e: Event) => v.set(changedDates(v.id, v.year, v.dates, end, at[0], Number((e.target as HTMLInputElement).value) || at[1]))}
    /></span>`;
  return html`<div class="fp3d-ext-dates">
    <span class="fp3d-sub">${rangeText(v.id, v.year, v.dates, v.lang)}${range.custom ? ` · ${v.t("season_dates_changed")}` : ""}</span>
    ${v.editable
      ? html`<button type="button" class="fp3d-link" aria-expanded=${v.open} @click=${v.toggle}>${v.t("season_dates")} ${v.open ? "▴" : "▾"}</button>`
      : nothing}
    ${v.open && v.editable
      ? html`<div class="fp3d-ext-dates-edit">
          ${field("from", range.from)} ${field("to", range.to)}
          ${range.custom ? html`<button type="button" class="fp3d-btn" @click=${() => v.set(null)}>${v.t("season_dates_reset")}</button>` : nothing}
        </div>`
      : nothing}
  </div>`;
}

/** The dates map after one holiday's dates were stored (null: removed), for the plan's settings; undefined when none are left. */
export function withSeasonDates(dates: SeasonDatesMap, id: SeasonId, next: SeasonDates | null): Record<string, SeasonDates> | undefined {
  const out: Record<string, SeasonDates> = {};
  for (const [k, v] of Object.entries(dates ?? {})) if (v && k !== id && parseMonthDay(v.from)) out[k] = v;
  if (next) out[id] = next;
  return Object.keys(out).length ? out : undefined;
}
