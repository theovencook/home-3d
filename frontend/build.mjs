// Builds the bundles into custom_components/home_3d/frontend and checks the size budgets.
// `node build.mjs --report` also lists the 15 biggest inputs of each bundle (#179), so growth is put down to a module.

import { build, context } from "esbuild";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { shrinkThreeShaders } from "./src/glsl-shrink.ts";
import { borrowEnglish } from "./src/borrow-english.ts";

const out = "../custom_components/home_3d/frontend";
const watch = process.argv.includes("--watch");
const report = process.argv.includes("--report");

// three.js keeps its shaders as readable text (indented, with comments): about 117 KB of the 3D bundle. They are
// shrunk as they are bundled (#179, src/glsl-shrink.ts); the shaders compile the same.
const shrinkShaders = {
  name: "shrink-three-shaders",
  setup(b) {
    b.onLoad({ filter: /[\\/]three[\\/]build[\\/]three\.module\.js$/ }, (args) => ({ contents: shrinkThreeShaders(readFileSync(args.path, "utf8")).code, loader: "js" }));
  },
};

const common = {
  bundle: true,
  format: "esm",
  // older iPads stay on iOS 15/16: Safari 15 is the oldest with WebGL 2 (three.js needs it); newer syntax such as
  // static class blocks (Safari 16.4) is turned into older code, otherwise the 3D view fails to load there
  target: ["safari15", "chrome94", "firefox93", "edge94"],
  minify: !watch,
  sourcemap: false,
  legalComments: "none",
  logLevel: "info",
  metafile: true,
  // every bundle but the main one loads from the main bundle, which holds the English table: they borrow it (#196)
  plugins: [shrinkShaders, borrowEnglish],
};

const viewerConfig = { ...common, entryPoints: ["src/viewer/viewer3d.ts"], outfile: `${out}/home-3d-3d.js` };
// the card's visual editor only loads in the dashboard's card dialog
// the language files (lang/*.json) are fetched with a hash of their content, so a new text is never stale
const LANGS = ["fr", "es", "nl", "it", "hu", "da", "sv", "nb", "nn", "fi", "cs", "pl", "ro", "sl", "zh", "pt"];
// German is a language pack that ships with Home 3D (#196: bundled_languages/theovencook.lang-de, sent by Home
// Assistant like an installed language pack); no bundle carries it (#134), the check below makes sure
const de = JSON.parse(readFileSync("../custom_components/home_3d/bundled_languages/theovencook.lang-de/strings.json", "utf8"));
const langHash = createHash("sha256")
  .update(LANGS.map((l) => (existsSync(`lang/${l}.json`) ? readFileSync(`lang/${l}.json`) : "")).join("\n"))
  .digest("hex")
  .slice(0, 12);
const cardEditorConfig = { ...common, entryPoints: ["src/card-editor.ts"], outfile: `${out}/home-3d-card-editor.js`, define: { __FP3D_LANG_HASH__: JSON.stringify(langHash) } };
// the editor is only needed by admins who open it, so it is a bundle of its own as well
// (it draws furniture previews with the 3D bundle, so it knows that bundle's hash too)
const editorConfig = (viewerHash, locateHash, itemsHash) => ({
  ...common,
  entryPoints: ["src/components/editor.ts"],
  outfile: `${out}/home-3d-editor.js`,
  define: { __FP3D_VIEWER_HASH__: JSON.stringify(viewerHash), __FP3D_LANG_HASH__: JSON.stringify(langHash), __FP3D_LOCATE_HASH__: JSON.stringify(locateHash), __FP3D_ITEMS_HASH__: JSON.stringify(itemsHash) },
});
// the item editor (#13) only loads when an editor opens it; it draws its live picture with the 3D bundle
const itemsConfig = (viewerHash) => ({ ...common, entryPoints: ["src/items/entry.ts"], outfile: `${out}/home-3d-items.js`, define: { __FP3D_VIEWER_HASH__: JSON.stringify(viewerHash) } });
// the time travel (Pro) only loads when it starts; its texts come from the main bundle
const timeTravelConfig = { ...common, entryPoints: ["src/timetravel/entry.ts"], outfile: `${out}/home-3d-timetravel.js` };
// the fun packs (pets …) only load when one is unlocked and switched on; three.js is lent by the 3D bundle
const funConfig = { ...common, entryPoints: ["src/fun/entry.ts"], outfile: `${out}/home-3d-fun.js` };
// the read-only 2D plan (#41) loads instead of the 3D bundle when a view shows the plan flat
const plan2dConfig = { ...common, entryPoints: ["src/plan2d/entry.ts"], outfile: `${out}/home-3d-2d.js` };
// voice (the microphone probe for now) only loads when it is asked for
const voiceConfig = { ...common, entryPoints: ["src/voice/entry.ts"], outfile: `${out}/home-3d-voice.js` };
// the locating setup assistant only loads when an admin opens it
const locateConfig = { ...common, entryPoints: ["src/locate/entry.ts"], outfile: `${out}/home-3d-locate.js` };
// the Settings page (#139) only loads when someone opens its tab; its labels come from the main bundle (`t`)
const settingsConfig = { ...common, entryPoints: ["src/settings/entry.ts"], outfile: `${out}/home-3d-settings.js` };
// The main bundle loads the 3D bundle with a hash of its content in the URL, so a new 3D bundle is
// never taken from the browser cache (the integration version only changes after a restart).
// the frontend knows its own version, to notice a backend that still runs an older one
const version = JSON.parse(readFileSync("../custom_components/home_3d/manifest.json", "utf8")).version;
// Which build this is (#60): a hash of everything the bundles are made from. The main bundle knows it, and build.json
// next to the bundles tells the backend, which reports it; an open page whose id differs runs older JavaScript than is
// served now (also when the version stayed the same) and offers a reload.
const inputs = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? inputs(`${dir}/${e.name}`) : [`${dir}/${e.name}`])).sort();
const buildId = (() => {
  const h = createHash("sha256").update(version);
  for (const file of [...inputs("src"), ...inputs("lang"), "package-lock.json", "build.mjs"]) if (existsSync(file)) h.update(file).update(readFileSync(file));
  return h.digest("hex").slice(0, 12);
})();
// `hashes`: the content hash of each bundle it loads, by name (viewer, editor, cardEditor, timeTravel, fun, voice, locate, plan2d, settings)
// Home Assistant loads the main bundle on every page (the card must be known on any dashboard), so the 3D view element
// (components/view3d.ts, the biggest part) is a chunk of its own (#179): it loads where the panel or a card shows.
// Chunks share the main bundle's modules (one pack registry, one language table: modules several of them use are in
// shared chunks, home-3d-chunk-<hash>.js); a chunk's name carries its content hash, so it is never taken stale.
const CHUNK = /^home-3d-[\w]+-[A-Z0-9]{8}\.js$/;
const mainConfig = (hashes) => ({
  ...common,
  // the one bundle with the English table (its chunks share it)
  plugins: [shrinkShaders],
  entryPoints: { "home-3d": "src/main.ts" },
  outdir: out,
  splitting: true,
  chunkNames: "home-3d-[name]-[hash]",
  define: {
    __FP3D_VIEWER_HASH__: JSON.stringify(hashes.viewer),
    __FP3D_EDITOR_HASH__: JSON.stringify(hashes.editor),
    __FP3D_CARD_EDITOR_HASH__: JSON.stringify(hashes.cardEditor),
    __FP3D_TIMETRAVEL_HASH__: JSON.stringify(hashes.timeTravel),
    __FP3D_FUN_HASH__: JSON.stringify(hashes.fun),
    __FP3D_VOICE_HASH__: JSON.stringify(hashes.voice),
    __FP3D_LOCATE_HASH__: JSON.stringify(hashes.locate),
    __FP3D_PLAN2D_HASH__: JSON.stringify(hashes.plan2d),
    __FP3D_SETTINGS_HASH__: JSON.stringify(hashes.settings),
    __FP3D_VERSION__: JSON.stringify(version),
    __FP3D_BUILD__: JSON.stringify(buildId),
    __FP3D_LANG_HASH__: JSON.stringify(langHash),
  },
});
// the bundles the main bundle loads by hash (the keys of mainConfig's `hashes`)
const HASHED = ["viewer", "editor", "cardEditor", "timeTravel", "fun", "voice", "locate", "plan2d", "settings"];
const hashOf = (file) => createHash("sha256").update(readFileSync(file)).digest("hex").slice(0, 12);

// Self-hosted fonts (SIL OFL): latin subset of the variable weight axis, shipped with their licences.
const FONTS = [
  ["figtree", "figtree-latin-wght-normal.woff2", "figtree.woff2"],
  ["bricolage-grotesque", "bricolage-grotesque-latin-wght-normal.woff2", "bricolage-grotesque.woff2"],
];
function copyFonts() {
  mkdirSync(`${out}/fonts`, { recursive: true });
  // further languages, fetched by the bundles only when Home Assistant runs in them
  mkdirSync(`${out}/lang`, { recursive: true });
  for (const l of LANGS) if (existsSync(`lang/${l}.json`)) copyFileSync(`lang/${l}.json`, `${out}/lang/${l}.json`);
  // German came from here before #196: it is a language pack now
  rmSync(`${out}/lang/de.json`, { force: true });
  for (const [pkg, file, name] of FONTS) {
    const dir = `node_modules/@fontsource-variable/${pkg}`;
    copyFileSync(`${dir}/files/${file}`, `${out}/fonts/${name}`);
    copyFileSync(`${dir}/LICENSE`, `${out}/fonts/${pkg}-LICENSE.txt`);
  }
}

// size budgets of the bundles (kept small for old wall tablets; the items bundle loads only for editors opening the
// item editor: 72 KB since #84 added list import, the brief dialog and the light preview; the editor bundle loads only
// for editors). #134 moved the German table out of the bundles into lang/de.json; the main, editor and card-editor
// budgets were then set just above their new sizes (668.3 / 961.8 / 154.2 KB) so growth shows again: raise one only
// with a reason in this comment, and keep new strings' growth in the bundle that uses them.
// #139: home-3d.js was already at 683.7 KB on integration (over its 680 KB) before the Settings tab; raised to 695 KB
// for the tab, its loader and the "All settings" links (the page itself and its texts are a bundle of their own).
// #179: the 3D view and walking through the house are chunks of the main bundle, named here without the hash in their
// file name (home-3d-view3d-<hash>.js); shared chunks are counted in the paths below. home-3d.js went from 693 KB to
// 130 KB, and every Home Assistant page loads 386 KB (with its shared chunks) instead of 693 KB. three.js's shaders
// are shrunk and walking left the 3D bundle (895 -> 876 KB). No budget went up. GZIP_BUDGET: as sent, for the files a
// wall tablet waits for.
// #196: only the main bundle carries the English table; every other bundle borrows it from the page (borrow-english.ts).
// The editor went from 971 to 847 KB and the card editor from 157 to 33 KB; their budgets were set just above (975 ->
// 860 KB, 160 -> 40 KB) so growth shows again.
const BUDGET = { "home-3d.js": 145 * 1024, "home-3d-view3d.js": 335 * 1024, "home-3d-walk.js": 16 * 1024, "home-3d-fun.js": 40 * 1024, "home-3d-voice.js": 60 * 1024, "home-3d-locate.js": 160 * 1024, "home-3d-timetravel.js": 120 * 1024, "home-3d-3d.js": 900 * 1024, "home-3d-editor.js": 860 * 1024, "home-3d-card-editor.js": 40 * 1024, "home-3d-items.js": 72 * 1024, "home-3d-2d.js": 72 * 1024, "home-3d-settings.js": 120 * 1024 };
const GZIP_BUDGET = { "home-3d.js": 45 * 1024, "home-3d-view3d.js": 100 * 1024, "home-3d-3d.js": 280 * 1024 };

// What is loaded before something shows, raw and as sent (gzip), with everything those files import (#179): a module
// moved from one bundle to another does not slip through. Every page of Home Assistant loads the main bundle; a wall
// tablet showing the house (the panel or a card) loads the 3D view and the 3D bundle on top.
const PATHS = {
  "every page": { files: ["home-3d.js"], raw: 410 * 1024, gzip: 140 * 1024 },
  "wall tablet": { files: ["home-3d.js", "home-3d-view3d.js", "home-3d-3d.js"], raw: 1630 * 1024, gzip: 500 * 1024 },
};

/** The file a budget name stands for: a chunk's is found by its name without the hash. */
function shippedFile(name) {
  if (existsSync(`${out}/${name}`)) return name;
  const stem = name.replace(/\.js$/, "-");
  return readdirSync(out).find((f) => CHUNK.test(f) && f.startsWith(stem)) ?? name;
}

/** `files` and every file they import (not the lazy imports), by esbuild's metafiles. */
function withImports(metafiles, files) {
  const outputs = Object.fromEntries(metafiles.flatMap((m) => Object.entries(m.outputs)).map(([path, o]) => [path.split("/").pop(), o]));
  const seen = new Set();
  const visit = (file) => {
    if (seen.has(file)) return;
    seen.add(file);
    for (const i of outputs[file]?.imports ?? []) if (i.kind === "import-statement") visit(i.path.split("/").pop());
  };
  files.forEach(visit);
  return [...seen];
}

/** The biggest inputs of a bundle, from esbuild's metafile. */
function topInputs(metafile, file, n = 15) {
  const output = Object.entries(metafile.outputs).find(([path]) => path.endsWith(`/${file}`))?.[1];
  if (!output) return [];
  return Object.entries(output.inputs)
    .map(([path, v]) => [path, v.bytesInOutput])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}

copyFonts();
if (watch) {
  // in watch mode the hash is not tracked; a dev reload fetches the bundle anyway
  for (const c of [viewerConfig, itemsConfig("dev"), editorConfig("dev", "dev", "dev"), cardEditorConfig, timeTravelConfig, funConfig, voiceConfig, locateConfig, plan2dConfig, settingsConfig, mainConfig(Object.fromEntries(HASHED.map((name) => [name, "dev"])))]) await (await context(c)).watch();
} else {
  // the main bundle's chunks of an earlier build go (their names change with their content)
  for (const f of readdirSync(out)) if (CHUNK.test(f)) rmSync(`${out}/${f}`);
  const metafiles = [];
  const run = async (config) => metafiles.push((await build(config)).metafile);
  await run(viewerConfig);
  await run(locateConfig);
  const items = itemsConfig(hashOf(viewerConfig.outfile));
  await run(items);
  const editor = editorConfig(hashOf(viewerConfig.outfile), hashOf(locateConfig.outfile), hashOf(items.outfile));
  await run(editor);
  await run(cardEditorConfig);
  await run(timeTravelConfig);
  await run(funConfig);
  await run(voiceConfig);
  await run(plan2dConfig);
  await run(settingsConfig);
  await run(
    mainConfig({
      viewer: hashOf(viewerConfig.outfile),
      editor: hashOf(editor.outfile),
      cardEditor: hashOf(cardEditorConfig.outfile),
      timeTravel: hashOf(timeTravelConfig.outfile),
      fun: hashOf(funConfig.outfile),
      voice: hashOf(voiceConfig.outfile),
      locate: hashOf(locateConfig.outfile),
      plan2d: hashOf(plan2dConfig.outfile),
      settings: hashOf(settingsConfig.outfile),
    }),
  );
  writeFileSync(`${out}/build.json`, `${JSON.stringify({ build: buildId, version })}
`);
  let over = false;
  // old Fire-tablet WebViews (Chrome before 91, e.g. Fully Kiosk on a Fire 7) throw on an optional call with spread
  // arguments, `a?.b(...x)` – the roof failed there; lowering the target for it would cost ~11 KB, so it is banned
  // every bundle and chunk shipped, shared chunks too
  const shipped = readdirSync(out).filter((f) => f.endsWith(".js"));
  for (const file of shipped) {
    const hit = readFileSync(`${out}/${file}`, "utf8").match(/\?\.(?:[\w$]+)?\(\.\.\./);
    if (hit) {
      over = true;
      console.log(`OLD-WEBVIEW ${file}: "${hit[0]}" breaks Chrome < 91 – write it as "if (a.b) a.b(...x)"`);
    }
  }
  // the same WebViews lack newer functions (Object.hasOwn and findLast from Chrome 93/97, the toSorted family from 110)
  // and dvh (108): our own sources may not use them, and dvh only inside @supports – a dvh line with var() is not
  // dropped by an old browser, it loses the whole height (the Fire 7 showed an empty panel; idea: CasaNeon)
  const NEWER = /\bObject\.hasOwn\(|\.findLast(?:Index)?\(|\.to(?:Sorted|Reversed|Spliced)\(/;
  const sources = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? sources(`${dir}/${e.name}`) : e.name.endsWith(".ts") && !e.name.endsWith(".test.ts") ? [`${dir}/${e.name}`] : []));
  for (const file of sources("src")) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      const newer = line.match(NEWER);
      const dvh = /\d+dvh\b/.test(line) && !line.includes("@supports") && !lines.slice(Math.max(0, i - 3), i).some((l) => l.includes("@supports"));
      if (newer || dvh) {
        over = true;
        console.log(`OLD-WEBVIEW ${file}:${i + 1}: ${newer ? `"${newer[0]}" is missing in old WebViews` : "dvh outside @supports (height: 100dvh)"}`);
      }
    });
  }
  // German is fetched (lang/de.json, #134): a bundle that imports the German table again carries it for everyone
  const german = [de.no_building_admin, de.no_persons, de.phone_hint];
  for (const file of shipped) {
    const text = readFileSync(`${out}/${file}`, "utf8");
    if (german.some((s) => text.includes(JSON.stringify(s).slice(1, -1)))) {
      over = true;
      console.log(`GERMAN ${file}: holds the German table – German comes from its language pack, never from a bundle`);
    }
  }
  // the Settings page borrows the main bundle's texts (#139), the editor and the card editor its English table (#196):
  // a bundle of these that holds the table carries the whole English table a second time
  {
    const { englishTable } = await import("./src/i18n.ts");
    for (const file of ["home-3d-settings.js", "home-3d-editor.js", "home-3d-card-editor.js"]) {
      const text = readFileSync(`${out}/${file}`, "utf8");
      if (text.includes(JSON.stringify(englishTable().no_building_admin).slice(1, -1))) {
        over = true;
        console.log(`ENGLISH ${file}: holds the main texts – ${file === "home-3d-settings.js" ? "take them from the panel (t), never import i18n.ts" : "the borrow-english plugin must swap i18n.ts for i18n-borrowed.ts"}`);
      }
    }
  }
  // a lazy import gets a budget of its own; a shared chunk (modules two of them use) is counted in the paths
  for (const f of readdirSync(out)) {
    if (CHUNK.test(f) && !f.startsWith("home-3d-chunk-") && !Object.keys(BUDGET).some((name) => shippedFile(name) === f)) {
      over = true;
      console.log(`CHUNK ${f}: a lazy import without a budget`);
    }
  }
  const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
  const gz = (file) => gzipSync(readFileSync(`${out}/${file}`), { level: 9 }).length;
  for (const [name, limit] of Object.entries(BUDGET)) {
    const file = shippedFile(name);
    const size = statSync(`${out}/${file}`).size;
    const gzip = gz(file);
    const gzipLimit = GZIP_BUDGET[name];
    const ok = size <= limit && (gzipLimit === undefined || gzip <= gzipLimit);
    over ||= !ok;
    console.log(`${ok ? "ok  " : "OVER"} ${file}: ${kb(size)} (budget ${limit / 1024} KB), gzip ${kb(gzip)}${gzipLimit ? ` (budget ${gzipLimit / 1024} KB)` : ""}`);
  }
  for (const [path, { files, raw, gzip }] of Object.entries(PATHS)) {
    const all = withImports(metafiles, files.map(shippedFile));
    const size = all.reduce((n, f) => n + statSync(`${out}/${f}`).size, 0);
    const zipped = all.reduce((n, f) => n + gz(f), 0);
    const ok = size <= raw && zipped <= gzip;
    over ||= !ok;
    console.log(`${ok ? "ok  " : "OVER"} ${path} (${all.join(" + ")}): ${kb(size)} (budget ${raw / 1024} KB), gzip ${kb(zipped)} (budget ${gzip / 1024} KB)`);
  }
  if (report) {
    for (const name of Object.keys(BUDGET)) {
      const file = shippedFile(name);
      const meta = metafiles.find((m) => Object.keys(m.outputs).some((o) => o.endsWith(`/${file}`)));
      if (!meta) continue;
      console.log(`\n${file}, the 15 biggest inputs:`);
      for (const [path, bytes] of topInputs(meta, file)) console.log(`  ${kb(bytes).padStart(9)}  ${path}`);
    }
  }
  if (over) process.exit(1);
}
