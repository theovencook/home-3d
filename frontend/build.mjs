// Builds the two bundles into custom_components/home_3d/frontend and checks the size budgets.

import { build, context } from "esbuild";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

const out = "../custom_components/home_3d/frontend";
const watch = process.argv.includes("--watch");

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
};

const viewerConfig = { ...common, entryPoints: ["src/viewer/viewer3d.ts"], outfile: `${out}/home-3d-3d.js` };
// the card's visual editor only loads in the dashboard's card dialog
// the language files (lang/*.json) are fetched with a hash of their content, so a new text is never stale
const LANGS = ["fr", "es", "nl", "it", "hu", "da", "sv", "nb", "nn", "fi", "cs", "pl", "ro", "sl", "zh", "pt"];
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
// `hashes`: the content hash of each bundle it loads, by name (viewer, editor, cardEditor, timeTravel, fun, voice, locate, plan2d)
const mainConfig = (hashes) => ({
  ...common,
  entryPoints: ["src/main.ts"],
  outfile: `${out}/home-3d.js`,
  define: {
    __FP3D_VIEWER_HASH__: JSON.stringify(hashes.viewer),
    __FP3D_EDITOR_HASH__: JSON.stringify(hashes.editor),
    __FP3D_CARD_EDITOR_HASH__: JSON.stringify(hashes.cardEditor),
    __FP3D_TIMETRAVEL_HASH__: JSON.stringify(hashes.timeTravel),
    __FP3D_FUN_HASH__: JSON.stringify(hashes.fun),
    __FP3D_VOICE_HASH__: JSON.stringify(hashes.voice),
    __FP3D_LOCATE_HASH__: JSON.stringify(hashes.locate),
    __FP3D_PLAN2D_HASH__: JSON.stringify(hashes.plan2d),
    __FP3D_VERSION__: JSON.stringify(version),
    __FP3D_BUILD__: JSON.stringify(buildId),
    __FP3D_LANG_HASH__: JSON.stringify(langHash),
  },
});
// the bundles the main bundle loads by hash (the keys of mainConfig's `hashes`)
const HASHED = ["viewer", "editor", "cardEditor", "timeTravel", "fun", "voice", "locate", "plan2d"];
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
  for (const [pkg, file, name] of FONTS) {
    const dir = `node_modules/@fontsource-variable/${pkg}`;
    copyFileSync(`${dir}/files/${file}`, `${out}/fonts/${name}`);
    copyFileSync(`${dir}/LICENSE`, `${out}/fonts/${pkg}-LICENSE.txt`);
  }
}

// size budgets of the bundles (kept small for old wall tablets; the items bundle loads only for editors opening the
// item editor: 72 KB since #84 added list import, the brief dialog and the light preview; the editor bundle loads only
// for editors and reached 1024.8 KB with run 2's editor tickets (#59-#96), so 1100 KB; the card editor carries the
// whole de/en string table from i18n.ts and grows with it: 300 KB)
// home-3d.js: 780 -> 820 KB for #119 (rack links: LED status, gear details in the view, strings). The string table
// (i18n.ts) is the main growth; splitting it is a follow-up ticket (RUN-2-NOTES).
const BUDGET = { "home-3d.js": 820 * 1024, "home-3d-fun.js": 40 * 1024, "home-3d-voice.js": 60 * 1024, "home-3d-locate.js": 160 * 1024, "home-3d-timetravel.js": 120 * 1024, "home-3d-3d.js": 900 * 1024, "home-3d-editor.js": 1100 * 1024, "home-3d-card-editor.js": 300 * 1024, "home-3d-items.js": 72 * 1024, "home-3d-2d.js": 72 * 1024 };

copyFonts();
if (watch) {
  // in watch mode the hash is not tracked; a dev reload fetches the bundle anyway
  for (const c of [viewerConfig, itemsConfig("dev"), editorConfig("dev", "dev", "dev"), cardEditorConfig, timeTravelConfig, funConfig, voiceConfig, locateConfig, plan2dConfig, mainConfig(Object.fromEntries(HASHED.map((name) => [name, "dev"])))]) await (await context(c)).watch();
} else {
  await build(viewerConfig);
  await build(locateConfig);
  const items = itemsConfig(hashOf(viewerConfig.outfile));
  await build(items);
  const editor = editorConfig(hashOf(viewerConfig.outfile), hashOf(locateConfig.outfile), hashOf(items.outfile));
  await build(editor);
  await build(cardEditorConfig);
  await build(timeTravelConfig);
  await build(funConfig);
  await build(voiceConfig);
  await build(plan2dConfig);
  await build(
    mainConfig({
      viewer: hashOf(viewerConfig.outfile),
      editor: hashOf(editor.outfile),
      cardEditor: hashOf(cardEditorConfig.outfile),
      timeTravel: hashOf(timeTravelConfig.outfile),
      fun: hashOf(funConfig.outfile),
      voice: hashOf(voiceConfig.outfile),
      locate: hashOf(locateConfig.outfile),
      plan2d: hashOf(plan2dConfig.outfile),
    }),
  );
  writeFileSync(`${out}/build.json`, `${JSON.stringify({ build: buildId, version })}
`);
  let over = false;
  // old Fire-tablet WebViews (Chrome before 91, e.g. Fully Kiosk on a Fire 7) throw on an optional call with spread
  // arguments, `a?.b(...x)` – the roof failed there; lowering the target for it would cost ~11 KB, so it is banned
  for (const file of Object.keys(BUDGET)) {
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
  for (const [file, limit] of Object.entries(BUDGET)) {
    const size = statSync(`${out}/${file}`).size;
    const ok = size <= limit;
    over ||= !ok;
    console.log(`${ok ? "ok  " : "OVER"} ${file}: ${(size / 1024).toFixed(1)} KB (budget ${limit / 1024} KB)`);
  }
  if (over) process.exit(1);
}
