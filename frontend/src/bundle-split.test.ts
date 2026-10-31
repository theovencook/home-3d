// Home Assistant loads the main bundle on every page (#179): the 3D view and walking through the house are chunks that
// load only where the house shows, and walking is not in the 3D bundle. Built here as build.mjs builds them.

import assert from "node:assert/strict";
import { test } from "node:test";
import { build, type Metafile, type Plugin } from "esbuild";
import { borrowEnglish } from "./borrow-english.ts";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const hashes = Object.fromEntries(["VIEWER", "EDITOR", "CARD_EDITOR", "TIMETRAVEL", "FUN", "VOICE", "LOCATE", "PLAN2D", "SETTINGS", "LANG"].map((k) => [`__FP3D_${k}_HASH__`, '"test"']));

async function meta(entry: string, splitting: boolean, plugins: Plugin[] = []): Promise<Metafile> {
  const res = await build({
    plugins,
    absWorkingDir: root,
    entryPoints: { out: entry },
    bundle: true,
    format: "esm",
    splitting,
    outdir: "out",
    write: false,
    metafile: true,
    logLevel: "silent",
    define: { ...hashes, __FP3D_VERSION__: '"test"', __FP3D_BUILD__: '"test"' },
  });
  return res.metafile;
}

/** The inputs of the entry output and of every file it imports statically. */
function staticInputs(m: Metafile): Set<string> {
  const entry = Object.keys(m.outputs).find((o) => m.outputs[o]!.entryPoint)!;
  const seen = new Set<string>();
  const inputs = new Set<string>();
  const visit = (o: string) => {
    if (seen.has(o)) return;
    seen.add(o);
    for (const i of Object.keys(m.outputs[o]!.inputs)) inputs.add(i);
    for (const imp of m.outputs[o]!.imports) if (imp.kind === "import-statement") visit(imp.path);
  };
  visit(entry);
  return inputs;
}

test("the main bundle and what it imports carry neither the 3D view nor walking; they are lazy chunks (#179)", async () => {
  const m = await meta("src/main.ts", true);
  const loaded = staticInputs(m);
  assert.ok(loaded.has("src/panel.ts") && loaded.has("src/card.ts"));
  assert.ok(!loaded.has("src/components/view3d.ts"), "components/view3d.ts is loaded on every page");
  assert.ok(!loaded.has("src/viewer/walk.ts"), "viewer/walk.ts is loaded on every page");
  const all = new Set(Object.values(m.outputs).flatMap((o) => Object.keys(o.inputs)));
  assert.ok(all.has("src/components/view3d.ts") && all.has("src/viewer/walk.ts"), "the lazy chunks are built");
});

test("the 3D bundle does not carry walking through the house (#179)", async () => {
  const m = await meta("src/viewer/viewer3d.ts", false);
  const inputs = new Set(Object.values(m.outputs).flatMap((o) => Object.keys(o.inputs)));
  assert.ok(inputs.has("src/viewer/build.ts"));
  assert.ok(!inputs.has("src/viewer/walk.ts"));
});

test("only the main bundle carries the English table; the editor and the card editor borrow it (#196)", async () => {
  const inputsOf = (m: Metafile) => new Set(Object.values(m.outputs).flatMap((o) => Object.keys(o.inputs)));
  assert.ok(staticInputs(await meta("src/main.ts", true)).has("src/i18n.ts"), "the main bundle loads the table on every page");
  for (const entry of ["src/components/editor.ts", "src/card-editor.ts"]) {
    const inputs = inputsOf(await meta(entry, false, [borrowEnglish]));
    assert.ok(!inputs.has("src/i18n.ts"), `${entry}: carries the English table`);
    assert.ok(inputs.has("src/i18n-borrowed.ts") && inputs.has("src/i18n-core.ts"), `${entry}: borrows it`);
  }
});

test("a bundle that borrows the table reads the page's English and shares its languages (#196)", async () => {
  const main = await import("./i18n.ts");
  const borrowed = await import("./i18n-borrowed.ts");
  const hass = { language: "en" } as never;
  assert.equal(borrowed.translate(hass, "rack_edit"), "Edit rack");
  assert.equal(borrowed.englishTable(), main.englishTable());
  main.useLanguage("da", { view: "Visning" });
  assert.equal(borrowed.translate({ language: "da" } as never, "view"), "Visning");
  // the core module holds no texts of its own
  const { readFileSync } = await import("node:fs");
  for (const f of ["./i18n-core.ts", "./i18n-borrowed.ts"]) assert.ok(!readFileSync(new URL(f, import.meta.url), "utf8").includes("Edit rack"), f);
});
