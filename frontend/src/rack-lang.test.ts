import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import { translate } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

// The rack strings (#122) in the English table, read from the source.
const src = readFileSync(new URL("./i18n.ts", import.meta.url), "utf8");
const en: Record<string, string> = {};
for (const m of src.slice(src.indexOf("const en")).matchAll(/^ {2}([a-z0-9_]+): ("(?:[^"\\]|\\.)*"),?$/gm)) en[m[1]!] = JSON.parse(m[2]!);
const keys = Object.keys(en).filter((k) => /^(rack_|voice_rack_|card_rack_)/.test(k));
const holes = (s: string) => (s.match(/\{[a-z]+\}/g) ?? []).sort().join();

test("every language file has the rack strings with the same placeholders", () => {
  assert.ok(keys.length > 60);
  for (const f of readdirSync(new URL("../lang/", import.meta.url))) {
    const table = JSON.parse(readFileSync(new URL(`../lang/${f}`, import.meta.url), "utf8")) as Record<string, string>;
    for (const k of keys) {
      assert.equal(typeof table[k], "string", `${f}: ${k} missing`);
      assert.equal(holes(table[k]!), holes(en[k]!), `${f}: ${k} placeholders`);
    }
  }
});

test("a language without the strings falls back to English, not to a key", () => {
  const hass = { language: "xx" } as unknown as HomeAssistant;
  assert.equal(translate(hass, "rack_edit"), "Edit rack");
  assert.equal(translate(hass, "voice_rack_online", { name: "Rack", on: 2, total: 3 }), "Rack: 2 of 3 devices are online.");
});
