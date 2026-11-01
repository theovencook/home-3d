// Run 4 UX pass, viewing (#257-#260): the time bar on a phone, notices, the phone 3D view and the Day look.
import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";

const g = globalThis as Record<string, unknown>;
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR", "SETTINGS"]) g[`__FP3D_${k}_HASH__`] = "test";
g.__FP3D_VERSION__ = "0";
g.window ??= {};
Object.assign(g.window as object, { addEventListener: () => undefined, removeEventListener: () => undefined });
g.location = { search: "", hash: "", pathname: "/home_3d" };
g.history = { state: null, replaceState: () => undefined };

type Styled = { styles: unknown };
const text = (s: unknown): string => (Array.isArray(s) ? s.map(text).join("\n") : ((s as { cssText?: string })?.cssText ?? ""));
const src = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");
function flat(v: unknown): string {
  if (v === null || v === undefined || typeof v === "symbol" || typeof v === "boolean" || typeof v === "function") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  if (typeof v === "object" && "strings" in (v as object)) {
    const r = v as { strings: readonly string[]; values: unknown[] };
    return r.strings.map((s, i) => s + (i < r.values.length ? flat(r.values[i]) : "")).join("");
  }
  return String(v);
}
/** The body of the first block that starts with `head` (a selector or an at-rule). */
function block(css: string, head: string, from = 0): string {
  const at = css.indexOf(head, from);
  assert.ok(at >= 0, `${head} not found`);
  let i = css.indexOf("{", at) + 1;
  const start = i;
  let depth = 1;
  while (depth && i < css.length) depth += css[i] === "{" ? 1 : css[i] === "}" ? -1 : 0, i++;
  return css.slice(start, i - 1);
}

const { Fp3dTimeBar, tickLabelFits, TICK_LABEL_ROOM } = await import("./components/time-bar.ts");
const { englishTable } = await import("./i18n.ts");
const en = englishTable() as Record<string, string>;

// ---- #257: time travel on a phone ----

const barCss = text((Fp3dTimeBar as unknown as Styled).styles);
const narrow = block(barCss, "@container fp3dtt");

test("#257 V01: on a phone the time bar grows upwards from the bottom edge, inside the safe area", () => {
  const bar = block(narrow, ".bar");
  assert.match(bar, /height:\s*auto/);
  assert.match(bar, /bottom:\s*calc\(8px \+ env\(safe-area-inset-bottom/);
});

test("#257 V01: the way back to the present shares the top row with the track, the buttons wrap below it", () => {
  // the track first, then Live, then a full-width break, then the buttons
  assert.match(block(narrow, ".track"), /order:\s*-2/);
  assert.match(block(narrow, ".live"), /order:\s*-1/);
  const brk = block(narrow, ".bar::after");
  assert.match(brk, /order:\s*-1/);
  assert.match(brk, /flex:\s*1 0 100%/);
  // the row of buttons fits a 390 px phone with 44 px targets: prev, play, next, the list (44 each), 24 h and the speed
  const row = 4 * 44 + 47 + 60 + 5 * 6;
  assert.ok(row <= 390 - 16 - 16 - 2, `${row}px`);
});

test("#257 V01: the panel reserves the two-row bar's real height and keeps the time travel chip on a phone", () => {
  const css = src("./panel.ts");
  const phone = css.slice(css.indexOf("/* phones: the time bar takes two rows"));
  assert.match(phone, /--fp3d-tt-h: calc\(120px \+ env\(safe-area-inset-bottom/);
  assert.match(phone, /@media \(pointer: coarse\)\s*\{\s*\.fp3d-tt > \*\s*\{\s*--fp3d-tt-h: calc\(138px/);
  // the two-row bar on a touch screen: padding 6 + label room 14 + track 44 + 6 + buttons 44 + padding 6 + border 2, and 16 below
  assert.ok(6 + 14 + 44 + 6 + 44 + 6 + 2 + 8 <= 138);
  // the switches (and with them the time travel chip) are no longer hidden while time travel is open
  assert.doesNotMatch(phone.slice(0, 600), /\.fp3d-tt \.fp3d-overlay \{\s*display: none/);
  assert.match(src("./card.ts"), /--fp3d-tt-h: calc\(138px/);
});

function session(over: Record<string, unknown> = {}) {
  return {
    t: (k: string, v?: Record<string, unknown>) => (en[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => String(v?.[n] ?? "")),
    state: "loading",
    progress: 0.5,
    playback: null,
    error: null,
    start: 0,
    end: 24 * 3600000,
    range: "24h",
    maxDays: 7,
    atNow: false,
    ...over,
  };
}

test("#257 V21: the Demo tag sits inside the clock card beside the title, and the panel's own Demo chip steps aside", () => {
  const bar = new Fp3dTimeBar() as unknown as { session: unknown; demo: boolean; render(): unknown };
  bar.session = session();
  bar.demo = true;
  const out = flat(bar.render());
  const badge = out.slice(out.indexOf('class="badge"'), out.indexOf("</span>", out.indexOf('class="badge"')));
  assert.match(badge, /class="demo"/);
  assert.ok(badge.includes(en.demo_chip));
  bar.demo = false;
  assert.doesNotMatch(flat(bar.render()), /class="demo"/);
  const panel = src("./panel.ts");
  assert.match(panel, /<fp3d-time-bar \.session=\$\{this\.tt\.session\} \?demo=\$\{showsDemo\(hass\)\}>/);
  assert.match(panel, /showsDemo\(hass\) && !this\.tt\.session \? html`<div class="fp3d-demo-chip"/);
});

test("#257 V22: a timeline label too near the end of the track is left out, and the track keeps a gutter before the chips", () => {
  assert.equal(tickLabelFits(1034, 998), false);
  assert.equal(tickLabelFits(1034, 1034 - TICK_LABEL_ROOM), true);
  assert.equal(tickLabelFits(288, 280), false);
  assert.match(block(barCss, ".track {"), /margin:\s*0 12px 0 4px/);
});
