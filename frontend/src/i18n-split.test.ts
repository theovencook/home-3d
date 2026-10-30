import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import { de } from "./i18n-de.ts";
import { englishTable, languageCode, languageReady, loadLanguage, translate, useLanguage } from "./i18n.ts";
import { ITEMS_DE, ITEMS_EN } from "./items/texts.ts";
import type { HomeAssistant } from "./types.ts";

// #134: the German table is no longer built into the bundles; it is fetched like the other 16 languages.

// The English table (the bundles carry only this one) and the source, to check no German is left in it.
const src = readFileSync(new URL("./i18n.ts", import.meta.url), "utf8");
const en: Record<string, string> = englishTable();
const holes = (s: string) => (s.match(/\{[a-z_]+\}/g) ?? []).sort().join();
const DE = { language: "de" } as unknown as HomeAssistant;

test("German is a language that is fetched, not one the bundles carry (#134)", async () => {
  assert.equal(languageCode("de"), "de");
  assert.equal(languageCode("de-AT"), "de");
  assert.equal(languageCode("en-GB"), null);
  assert.equal(languageReady("de"), false);
  // before its file is there, German reads English rather than a key
  assert.equal(translate(DE, "rack_edit"), "Edit rack");
  assert.ok(!/"Rack bearbeiten"|"Ein Plan|Noch kein Plan/.test(src), "no German text left in i18n.ts");

  const fetched: string[] = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = (async (url: string) => {
    fetched.push(String(url));
    return { ok: true, json: async () => de };
  }) as unknown as typeof fetch;
  try {
    await loadLanguage("de-DE");
  } finally {
    globalThis.fetch = realFetch;
  }
  assert.equal(fetched.length, 1);
  assert.match(fetched[0]!, /\/lang\/de\.json\?v=/);
  assert.equal(languageReady("de"), true);
  assert.equal(translate(DE, "rack_edit"), de.rack_edit);
  assert.notEqual(translate(DE, "rack_edit"), "Edit rack");
});

test("useLanguage puts a table in place without fetching (tests, preloaded pages)", () => {
  useLanguage("fr", { view: "Vue 3D" });
  assert.equal(translate({ language: "fr" } as unknown as HomeAssistant, "view"), "Vue 3D");
  // a key the table lacks falls back to English
  assert.equal(translate({ language: "fr" } as unknown as HomeAssistant, "rack_edit"), "Edit rack");
});

test("the German table has every English key, no others, with the same placeholders", () => {
  assert.ok(Object.keys(en).length > 2000);
  const deTable = de as Record<string, string>;
  for (const k of Object.keys(en)) {
    assert.equal(typeof deTable[k], "string", `de: ${k} missing`);
    assert.equal(holes(deTable[k]!), holes(en[k]!), `de: ${k} placeholders`);
  }
  for (const k of Object.keys(deTable)) assert.ok(k in en, `de: ${k} is not an English key`);
});

test("every language file holds only known keys and no unknown placeholders; the rest falls back to English", () => {
  for (const f of readdirSync(new URL("../lang/", import.meta.url))) {
    const table = JSON.parse(readFileSync(new URL(`../lang/${f}`, import.meta.url), "utf8")) as Record<string, string>;
    for (const [k, v] of Object.entries(table)) {
      assert.ok(k in en, `${f}: ${k} is not an English key`);
      assert.equal(typeof v, "string", `${f}: ${k}`);
      // a placeholder English does not have would show as "{x}"
      for (const h of v.match(/\{[a-z_]+\}/g) ?? []) assert.ok(en[k]!.includes(h), `${f}: ${k} has ${h}`);
    }
    const code = f.replace(".json", "");
    useLanguage(code, table);
    const hass = { language: code } as unknown as HomeAssistant;
    for (const k of Object.keys(en)) assert.notEqual(translate(hass, k as never), k, `${code}: ${k} shows as a raw key`);
  }
});

// Every key the code names literally, by the table it is read from.
const sources = (dir: URL): URL[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? sources(new URL(`${e.name}/`, dir)) : e.name.endsWith(".ts") && !e.name.endsWith(".test.ts") && e.name !== "i18n.ts" && e.name !== "i18n-de.ts" ? [new URL(e.name, dir)] : [],
  );
const CALL = /\b(?:this\.t|t|tr|translate)\(\s*(?:[\w.?]+\s*,\s*)?"([a-z][a-z0-9_]*)"/g;

test("every key the code names exists in English and German (main, editor, card editor, 2D, 3D, voice …)", () => {
  const missing: string[] = [];
  let seen = 0;
  for (const file of sources(new URL("./", import.meta.url))) {
    const text = readFileSync(file, "utf8");
    if (!/\bi18n\.ts"|\bI18nKey\b|translate\(/.test(text)) continue;
    for (const m of text.matchAll(CALL)) {
      const key = m[1]!;
      if (key.startsWith("ie_")) continue; // the item editor's own table, below
      seen++;
      if (!(key in en) || !(key in de)) missing.push(`${file.pathname.split("/src/")[1]}: ${key}`);
    }
  }
  assert.ok(seen > 1500, `found ${seen} keys`);
  assert.deepEqual(missing, []);
});

test("the item editor bundle resolves its own keys in English and German", () => {
  const text = readdirSync(new URL("./items/", import.meta.url))
    .filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts"))
    .map((f) => readFileSync(new URL(`./items/${f}`, import.meta.url), "utf8"))
    .join("\n");
  const keys = [...text.matchAll(/"(ie_[a-z0-9_]+)"/g)].map((m) => m[1]!);
  assert.ok(keys.length > 20);
  for (const k of keys) {
    assert.equal(typeof ITEMS_EN[k], "string", `en: ${k}`);
    assert.equal(typeof ITEMS_DE[k], "string", `de: ${k}`);
  }
});

test("a language fetched by one bundle is at hand in the others (the editor bundle has its own copy of i18n.ts)", async () => {
  // a second copy of the module, as the editor and card-editor bundles carry one
  const second = "./i18n.ts?second-bundle";
  const copy = (await import(second)) as typeof import("./i18n.ts");
  useLanguage("sv", { view: "Vy" });
  assert.equal(copy.languageReady("sv"), true);
  assert.equal(copy.translate({ language: "sv" } as unknown as HomeAssistant, "view"), "Vy");
});
