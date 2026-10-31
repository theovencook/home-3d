// Home Assistant loads the main bundle on every page (#179): the 3D view and walking through the house are chunks that
// load only where the house shows, and walking is not in the 3D bundle. Built here as build.mjs builds them.

import assert from "node:assert/strict";
import { test } from "node:test";
import { build, type Metafile } from "esbuild";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const hashes = Object.fromEntries(["VIEWER", "EDITOR", "CARD_EDITOR", "TIMETRAVEL", "FUN", "VOICE", "LOCATE", "PLAN2D", "SETTINGS", "LANG"].map((k) => [`__FP3D_${k}_HASH__`, '"test"']));

async function meta(entry: string, splitting: boolean): Promise<Metafile> {
  const res = await build({
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
