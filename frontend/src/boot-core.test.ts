// #357: the start file (home-3d.js) asks which build is served and imports that build's app.
import { test } from "node:test";
import assert from "node:assert/strict";
import { appUrl, bootBase, currentBuild } from "./boot-core.ts";

const BASE = "https://ha.example/api/home_3d/static/";
const answer = (body: unknown, ok = true) => async () => ({ ok, json: async () => body });

test("a page that names the previous build's entry or loader imports the current build's app", async () => {
  // the start file as a cached page names it (an old ?v=), through the loader's retry, or on the path before #218
  for (const here of [`${BASE}home-3d.js?v=ffffffffffff`, `${BASE}home-3d.js?retry=2`, "https://ha.example/home_3d_static/home-3d.js?v=1"]) {
    const base = bootBase(here);
    assert.equal(base, BASE);
    const asked: string[] = [];
    const build = await currentBuild(base, async (url, init) => {
      asked.push(url);
      assert.equal(init.cache, "no-store");
      return { ok: true, json: async () => ({ build: "0123456789ab", version: "1.0.0" }) };
    }, 42);
    // build.json at a URL no cache has seen, so neither the browser nor a proxy answers with an old one
    assert.deepEqual(asked, [`${BASE}build.json?t=42`]);
    assert.equal(appUrl(base, build), `${BASE}home-3d-app.js?v=0123456789ab`);
  }
});

test("two copies of the start file (cached page and panel) import the same app URL: one copy of the app", async () => {
  const urls = await Promise.all(
    ["https://ha.example/home_3d_static/home-3d.js", `${BASE}home-3d.js`].map(async (here) => appUrl(bootBase(here), await currentBuild(bootBase(here), answer({ build: "abc" })))),
  );
  assert.equal(urls[0], urls[1]);
});

test("without an answer in time the plain app URL is taken (checked on each load)", async () => {
  assert.equal(await currentBuild(BASE, answer({}, false)), null);
  assert.equal(await currentBuild(BASE, answer({ build: 7 })), null);
  assert.equal(await currentBuild(BASE, answer({ build: "../x" })), null);
  assert.equal(await currentBuild(BASE, async () => Promise.reject(new Error("offline"))), null);
  assert.equal(await currentBuild(BASE, () => new Promise(() => undefined), 1, 10), null);
  assert.equal(appUrl(BASE, null), `${BASE}home-3d-app.js`);
});

test("another folder (the browser check's /static/) keeps its own", () => {
  assert.equal(bootBase("http://127.0.0.1:9/static/home-3d.js"), "http://127.0.0.1:9/static/");
});
