// Loads the shipped bundles in a headless browser (#178): the panel from custom_components/home_3d/frontend (as
// built by `npm run build`) with a fake Home Assistant and a plan. It shows the house, walks through it, switches
// every look and the 2D plan, times the renderer's render and deletes the timing wrapper again (#213), opens the
// Extensions tab with the item editor, the Settings tab and the editor, and fails on any console error, page error
// or failed request. It also measures, as in docs/performance.md: load, background load in view mode (5 hass updates
// a second), the renderer's render and editor selection; with --speed it fails when a measure is past its limit.
//
//   npm run smoke                     the CI check (SwiftShader, no GPU needed)
//   npm run speed                     the speed check at 1x
//   npm run speed -- --throttle 4     with DevTools CPU throttling (about a budget wall tablet)
//   options: --plan <file.json>  --bundles <dir>  --browser <path>  --gpu / --swiftshader (the GPU, or WebGL on the
//   CPU)  --json (one line of JSON instead of the table)
//
// The browser is found at HOME3D_BROWSER, else the usual Chrome, Chromium or Edge paths. Nothing here talks to a real
// Home Assistant.

import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
// another build's bundles (a before/after comparison): --bundles <its custom_components/home_3d/frontend>
const bundles = resolve(opt("bundles", resolve(here, "../../custom_components/home_3d/frontend")));
const flag = (name) => args.includes(`--${name}`);
const speed = flag("speed");
const throttle = Number(opt("throttle", "1"));
// the smoke check draws with SwiftShader (CI has no GPU); the speed check uses the machine's GPU, as the numbers in
// docs/performance.md do (SwiftShader draws every 3D frame on the CPU, which swamps the measures)
const gpu = speed ? !flag("swiftshader") : flag("gpu");
const planFile = resolve(opt("plan", resolve(here, "../../custom_components/home_3d/sample/sample-home.json")));

// Thresholds. The smoke check (CI, SwiftShader: every 3D frame is drawn on the CPU) gates what is the same on every
// machine: no errors, and no render of the panel or the 3D view for a state they do not show (#177); its load limit
// only catches a hang. The speed check's limits are about 3x the times in docs/performance.md (#178, sample home,
// desktop GPU), so they catch a regression of the kind #130/#131/#177 fixed (a render on every update, a selection
// twice as slow), not noise. Times in ms, background load in ms per second.
const SPEED_LIMITS = {
  1: { ready: 5000, selectLinked: 50, selectPlain: 35, viewMsPerS: 5, panelMsPerS: 5 },
  4: { ready: 15000, selectLinked: 300, selectPlain: 200, viewMsPerS: 20, panelMsPerS: 20 },
};
const limits = { rendersPerS: 0.5, ...(speed ? (SPEED_LIMITS[throttle] ?? {}) : { ready: 60000 }) };

function findBrowser() {
  const given = opt("browser", process.env.HOME3D_BROWSER);
  if (given) return given;
  const known = [
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/microsoft-edge",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ];
  const hit = known.find((p) => existsSync(p));
  if (!hit) throw new Error("no Chrome, Chromium or Edge found: set HOME3D_BROWSER");
  return hit;
}

const TYPES = { ".js": "text/javascript", ".json": "application/json", ".html": "text/html", ".woff2": "font/woff2", ".txt": "text/plain" };
const PAGE = `<!doctype html><html><head><meta charset="utf-8"><title>Home 3D browser check</title>
<style>html,body{margin:0;height:100%;background:#101418}home-3d-panel{display:block;height:100vh}</style></head>
<body><script type="module" src="/check/harness.js"></script></body></html>`;

/** Serves the bundles at /static/ (the lazy bundles load next to the main one), the harness and the plan. */
function serve() {
  const plan = readFileSync(planFile);
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const send = (status, body, type = "text/plain") => {
      res.writeHead(status, { "content-type": type, "cache-control": "no-store" });
      res.end(body);
    };
    if (path === "/") return send(200, PAGE, "text/html");
    if (path === "/favicon.ico") return send(204, "");
    if (path === "/plan.json") return send(200, plan, "application/json");
    const [root, rest] = path.startsWith("/static/") ? [bundles, path.slice(8)] : path.startsWith("/check/") ? [join(here, "browser-check"), path.slice(7)] : [null, ""];
    const file = root && resolve(root, rest);
    if (!file || !file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) return send(404, "not found");
    send(200, readFileSync(file), TYPES[extname(file)] ?? "application/octet-stream");
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok(server)));
}

const problems = [];
const results = {};

const server = await serve();
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({
  executablePath: findBrowser(),
  headless: true,
  args: [
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1280,800",
    // CI has no GPU: SwiftShader draws WebGL 2 on the CPU
    ...(gpu ? ["--ignore-gpu-blocklist"] : ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"]),
    ...(process.env.CI ? ["--no-sandbox"] : []),
  ],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  page.on("console", (m) => {
    if (m.type() === "error") problems.push(`console: ${m.text()}`);
  });
  page.on("pageerror", (e) => problems.push(`page error: ${flag("stack") ? e.stack : e.message}`));
  page.on("requestfailed", (r) => problems.push(`request failed: ${r.url()} (${r.failure()?.errorText})`));
  page.on("response", (r) => {
    if (r.status() >= 400) problems.push(`HTTP ${r.status()}: ${r.url()}`);
  });
  const cdp = await page.createCDPSession();
  if (throttle > 1) await cdp.send("Emulation.setCPUThrottlingRate", { rate: throttle });

  await page.goto(origin, { waitUntil: "load" });
  await page.waitForFunction(() => !!window.check, { timeout: 30000 });
  const run = (name, arg) => page.evaluate((n, a) => window.check[n](a), name, arg);

  results.load = await run("start");
  results.render = await run("renderInfo");
  if (!results.render) problems.push("the 3D view has no renderer");
  if (speed) {
    results.idleView = await run("idle", { seconds: 6, rate: 5 });
    results.idleWatched = await run("idle", { seconds: 6, rate: 5, watchedEvery: 5 });
  } else {
    results.idleView = await run("idle", { seconds: 2, rate: 5 });
  }
  // every lazy part once: a bundle or chunk that fails to load shows as a failed request or a console error, a
  // shader that does not compile as a console error
  await run("walk");
  await run("looks");
  // #213: a timing wrapper around the renderer's render, "restored" with delete, on the first renderer and on the one
  // a quality change swaps in; a renderer left without render throws on the next frame (a page error)
  results.renderTrap = [await run("renderTrap", { n: 10 }), await run("renderTrap", { n: 10, quality: "low" })];
  for (const [i, r] of results.renderTrap.entries()) if (r.after !== "function") problems.push(`renderer ${i + 1} lost its render after a timing wrapper was deleted (#213)`);
  await run("itemEditor");
  await run("tab", "settings");
  await new Promise((r) => setTimeout(r, 500));
  await run("editor");
  results.select = await run("select", { n: speed ? 15 : 3 });
  await run("tab", 0);
  results.unknownCalls = await run("unknownCalls");
} catch (err) {
  problems.push(`check failed: ${err.message}`);
} finally {
  await browser.close();
  server.close();
}

const over = [];
const gate = (name, value, limit) => {
  if (value !== undefined && limit !== undefined && value > limit) over.push(`${name}: ${value} (limit ${limit})`);
};
gate("load ready ms", results.load?.ready, limits.ready);
// #177: a state the view does not show renders neither the panel nor the 3D view (counts, so the same on every machine)
gate("view mode, fp3d-view3d renders/s on unwatched states", results.idleView?.["fp3d-view3d"]?.rendersPerS ?? Infinity, limits.rendersPerS);
gate("view mode, home-3d-panel renders/s on unwatched states", results.idleView?.["home-3d-panel"]?.rendersPerS ?? Infinity, limits.rendersPerS);
if (speed) {
  gate("view mode, fp3d-view3d ms/s", results.idleView?.["fp3d-view3d"]?.msPerS, limits.viewMsPerS);
  gate("view mode, home-3d-panel ms/s", results.idleView?.["home-3d-panel"]?.msPerS, limits.panelMsPerS);
  gate("editor selection, linked item median ms", results.select?.linked.median, limits.selectLinked);
  gate("editor selection, plain item median ms", results.select?.plain.median, limits.selectPlain);
}

if (flag("json")) console.log(JSON.stringify({ throttle, plan: planFile, ...results, problems, over }));
else {
  const l = results.load ?? {};
  const row = (name, v) => console.log(`| ${name} | ${v} |`);
  console.log(`\nHome 3D browser check: ${speed ? "speed" : "smoke"}, CPU ${throttle}x, ${gpu ? "GPU" : "SwiftShader"}, ${l.items ?? "?"} items, ${l.entities ?? "?"} states\n`);
  console.log("| Measure | Value |\n|---|---|");
  row("Load: ready / longest task / total blocking", `${l.ready} / ${l.longestTask} / ${l.blocking} ms`);
  if (results.render) row("3D: draw calls / triangles", `${results.render.calls} / ${results.render.triangles}`);
  for (const [key, label] of [["idleView", "unwatched states"], ["idleWatched", "1 in 5 watched"]]) {
    const r = results[key];
    if (!r) continue;
    for (const tag of ["home-3d-panel", "fp3d-view3d"]) if (r[tag]) row(`View mode, 5 updates/s (${label}): ${tag}`, `${r[tag].rendersPerS} renders/s (${r[tag].updatesPerS} updates), ${r[tag].msPerS} ms/s`);
    row(`View mode (${label}): long frames`, `${r.longFramesPerS}/s, ${r.longFrameMsPerS} ms/s`);
  }
  if (results.renderTrap) row("3D: renderer.render, auto / low quality (median / worst)", results.renderTrap.map((r) => `${r.frames.median} / ${r.frames.worst} ms`).join(", "));
  if (results.select) row("Editor selection, linked / plain (median / worst)", `${results.select.linked.median} / ${results.select.linked.worst} ms, ${results.select.plain.median} / ${results.select.plain.worst} ms`);
  if (results.unknownCalls?.length) console.log(`\nCalls the fake backend has no answer for: ${results.unknownCalls.join(", ")}`);
  for (const p of problems) console.log(`PROBLEM ${p}`);
  for (const o of over) console.log(`OVER ${o}`);
  console.log(problems.length || over.length ? "\nFAILED" : "\nok");
}
process.exit(problems.length || over.length ? 1 : 0);
