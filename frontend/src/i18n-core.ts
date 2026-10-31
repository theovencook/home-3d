// How texts are looked up and loaded (#196): the language a page shows, its texts from language packs and lang/*.json,
// English as the fallback. No table here: i18n.ts holds the English one and registers it, so the editor and card
// editor bundles can share it (i18n-borrowed.ts) instead of carrying a copy each.

import type { I18nKey } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

declare const __FP3D_LANG_HASH__: string;

/**
 * English is built in; every other language is loaded once when Home Assistant runs in it (#196), so wall tablets
 * never load texts they do not need. Its texts come from two places, and a key neither has shows in English:
 *
 * - language packs, from Home Assistant (`home_3d/languages/get`): the ones that come with Home 3D (German) and the
 *   ones installed from a folder or GitHub, like furniture packs. A key in a pack wins.
 * - the older partial tables in lang/<code>.json next to the bundles, for the languages below.
 */
// "zh" is Simplified Chinese (zh-Hans; zh-Hant reads it too until it has its own), "pt" Portuguese for Portugal and Brazil
export const STATIC_LANGUAGES = ["fr", "es", "nl", "it", "hu", "da", "sv", "nb", "nn", "fi", "cs", "pl", "ro", "sl", "zh", "pt"] as const;
type Table = Record<string, string>;
// shared on the page: every bundle that names texts carries its own copy of this module, and a language one of them
// loaded is at hand in the others at once (no English flash, no second fetch). The English table is the main bundle's
// (i18n.ts registers it); the editor and card-editor bundles borrow it (#196, i18n-borrowed.ts).
interface Shared {
  extra: Map<string, Table>;
  pending: Map<string, Promise<void>>;
  en?: Table;
}
const shared: Shared = ((globalThis as { __fp3dLanguages?: Shared }).__fp3dLanguages ??= { extra: new Map(), pending: new Map() });
const { extra, pending } = shared;

/** Make `table` the page's English texts (i18n.ts, in the main bundle). */
export function registerEnglish(table: Table): void {
  shared.en = table;
}

/** The page's English texts (empty until the main bundle registered them). */
export function english(): Table {
  return shared.en ?? {};
}

/** The language a Home Assistant language reads (its base code, "de" of "de-AT"); null: English, built in. */
export function languageCode(lang: string | undefined): string | null {
  const raw = (lang ?? navigator.language ?? "en").toLowerCase();
  // plain "no" (Norwegian) reads as Bokmål
  const code = raw.startsWith("no") ? "nb" : raw.split(/[-_]/)[0]!;
  return code === "en" || !/^[a-z]{2,3}$/.test(code) ? null : code;
}

/** Whether the texts for a language are at hand (English, or already loaded). */
export function languageReady(lang: string | undefined): boolean {
  const code = languageCode(lang);
  return !code || extra.has(code);
}

/** Put a language's texts in place without loading them (tests); a key the table lacks still falls back to English. */
export function useLanguage(code: string, table: Table): void {
  extra.set(code, table);
}

/** What `languages/get` answers (#196). */
interface LanguageAnswer {
  hash: string;
  strings?: Table;
}

/** Something that reaches Home Assistant (a hass). */
type Caller = { callWS<T>(msg: Record<string, unknown>): Promise<T> };

const CACHE = "home3d.lang.";

/** The pack texts this browser kept for a language, by their hash (a wall tablet does not fetch them again). */
function cached(code: string): { hash: string; strings: Table } | null {
  try {
    const kept = JSON.parse(localStorage.getItem(CACHE + code) ?? "null") as { hash?: unknown; strings?: unknown } | null;
    return kept && typeof kept.hash === "string" && kept.strings && typeof kept.strings === "object" ? (kept as { hash: string; strings: Table }) : null;
  } catch {
    return null;
  }
}

function keep(code: string, hash: string, strings: Table): void {
  try {
    if (Object.keys(strings).length) localStorage.setItem(CACHE + code, JSON.stringify({ hash, strings }));
    else localStorage.removeItem(CACHE + code);
  } catch {
    // a private window or a full storage: they are fetched again next time
  }
}

/** A language's texts from its packs in Home Assistant; none (an older backend, no connection): empty. */
async function packTexts(code: string, hass: Caller | undefined): Promise<Table> {
  if (!hass?.callWS) return {};
  const had = cached(code);
  try {
    const res = await hass.callWS<LanguageAnswer>({ type: "home_3d/languages/get", language: code, ...(had ? { hash: had.hash } : {}) });
    if (res.strings && typeof res.strings === "object") {
      keep(code, res.hash, res.strings);
      return res.strings;
    }
    return had && res.hash === had.hash ? had.strings : {};
  } catch {
    return had?.strings ?? {};
  }
}

/** A language's older table in lang/<code>.json; none or broken: empty. */
async function fileTexts(code: string): Promise<Table> {
  if (!(STATIC_LANGUAGES as readonly string[]).includes(code)) return {};
  try {
    const url = new URL(`./lang/${code}.json?v=${typeof __FP3D_LANG_HASH__ === "string" ? __FP3D_LANG_HASH__ : "0"}`, import.meta.url).href;
    const r = await fetch(url);
    const table = r.ok ? ((await r.json()) as Table) : {};
    return table && typeof table === "object" ? table : {};
  } catch {
    return {};
  }
}

/**
 * Load a language's texts (once): its packs from Home Assistant and its file, the pack's keys over the file's. Nothing
 * found leaves English in place. `again`: load anew (a language pack was installed or removed); the texts shown stay
 * until the new ones are there.
 */
export function loadLanguage(lang: string | undefined, hass?: Caller, again = false): Promise<void> {
  const code = languageCode(lang);
  if (!code || (extra.has(code) && !again)) return Promise.resolve();
  let p = pending.get(code);
  if (!p) {
    p = Promise.all([fileTexts(code), packTexts(code, hass)])
      .then(([file, pack]) => void extra.set(code, { ...file, ...pack }))
      .finally(() => pending.delete(code));
    pending.set(code, p);
  }
  return p;
}

/**
 * The language the texts are shown in, for the `lang` attribute (#196: a screen reader picks its voice by it): Home
 * Assistant's language when texts for it are at hand, else English (the texts fall back to it).
 */
export function uiLanguage(hass: HomeAssistant | undefined): string {
  const lang = hass?.language ?? navigator.language ?? "en";
  const code = languageCode(lang);
  if (!code) return /^en(?:-|$)/i.test(lang) ? lang : "en";
  const table = extra.get(code);
  for (const _ in table) return lang;
  return "en";
}

export function translate(hass: HomeAssistant | undefined, key: I18nKey, vars: Record<string, string | number> = {}): string {
  const code = languageCode(hass?.language ?? navigator.language);
  const table = code ? extra.get(code) : undefined;
  let s: string = table?.[key] ?? shared.en?.[key] ?? key;
  for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
}

export function formatNumber(hass: HomeAssistant | undefined, value: number, digits = 2): string {
  return value.toLocaleString(hass?.language ?? undefined, { maximumFractionDigits: digits });
}
