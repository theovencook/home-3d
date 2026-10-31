// Times of day for the settings (#225): "HH:MM" text, the bins' hours (a number, 14.5 = 14:30) and whether Home
// Assistant's profile shows 12 or 24 hours. Pure functions: the time field and the Settings page share them.

/** Home Assistant's `hass.locale` (the profile's language and time format). */
export interface HassLocale {
  language?: string;
  time_format?: string;
}

/**
 * Whether times show with am/pm: the profile's time format ("12" or "24"; "am_pm" and "twenty_four" are the older
 * names), else what the profile's language (or, with "system", the browser) uses.
 */
export function uses12Hours(locale: HassLocale | undefined, language?: string): boolean {
  const f = locale?.time_format;
  if (f === "12" || f === "am_pm") return true;
  if (f === "24" || f === "twenty_four") return false;
  try {
    const lang = f === "system" ? undefined : (locale?.language || language || undefined)?.replace("_", "-");
    return new Intl.DateTimeFormat(lang, { hour: "numeric" }).resolvedOptions().hourCycle?.startsWith("h12") ?? false;
  } catch {
    return false;
  }
}

/** "HH:MM" (also "H:MM", "HH:MM:SS") as minutes after midnight, null when it is not a time. */
export function minutesOf(time: string | null | undefined): number | null {
  const m = /^(\d{1,2}):(\d{2})(?::\d{2})?$/.exec((time ?? "").trim());
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  return h < 24 && min < 60 ? h * 60 + min : null;
}

/** Minutes after midnight as "HH:MM" (wraps at 24 hours). */
export function timeOf(minutes: number): string {
  const t = ((Math.round(minutes) % 1440) + 1440) % 1440;
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}

/** A time of day stored as hours (the bins' glow: 14, 6.5) as "HH:MM"; 24 reads as midnight. */
export function hoursToTime(hours: number | null | undefined): string {
  return typeof hours === "number" && Number.isFinite(hours) ? timeOf(hours * 60) : "";
}

/** "HH:MM" as hours (stored as before, in half hours and finer: 14:30 -> 14.5); null when it is no time. */
export function timeToHours(time: string | null | undefined): number | null {
  const m = minutesOf(time);
  return m === null ? null : m / 60;
}
