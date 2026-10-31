// The page side of the browser check (#178): mounts the shipped panel (home-3d.js from the built bundles) with the
// fake hass and offers the measures the Node script calls through `window.check`.

import { makeFakeHass } from "./fake-hass.js";

const longFrames = [];
try {
  new PerformanceObserver((list) => {
    for (const e of list.getEntries()) longFrames.push({ at: e.startTime, ms: e.duration, blocking: e.blockingDuration ?? 0 });
  }).observe({ type: "long-animation-frame", buffered: true });
} catch {
  // an older browser without long animation frames: the counts stay empty
}

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length ? s[Math.floor((s.length - 1) / 2)] : 0;
};
const stats = (xs) => ({ median: +median(xs).toFixed(1), worst: +Math.max(0, ...xs).toFixed(1), n: xs.length });

/** Counts and times every Lit update of the elements named (performUpdate covers willUpdate, render and updated). */
const counters = {};
function countUpdates(tag) {
  const cls = customElements.get(tag);
  if (!cls || cls.prototype.__checkWrapped) return;
  const c = (counters[tag] = { updates: 0, renders: 0, ms: 0 });
  const perform = cls.prototype.performUpdate;
  cls.prototype.performUpdate = function (...args) {
    const t0 = performance.now();
    try {
      return perform.apply(this, args);
    } finally {
      c.updates++;
      c.ms += performance.now() - t0;
    }
  };
  const render = cls.prototype.render;
  cls.prototype.render = function (...args) {
    c.renders++;
    return render.apply(this, args);
  };
  cls.prototype.__checkWrapped = true;
}
const snapshot = () => Object.fromEntries(Object.entries(counters).map(([k, v]) => [k, { ...v }]));

async function waitFor(fn, timeout = 60000, what = "condition") {
  const t0 = performance.now();
  for (;;) {
    const v = fn();
    if (v) return v;
    if (performance.now() - t0 > timeout) throw new Error(`timed out waiting for ${what}`);
    await sleep(20);
  }
}

let fake;
let panel;

const check = {
  /** Mount the panel; resolves when the 3D view has built the plan. Times in ms from mounting the panel. */
  async start() {
    const [plan, build] = await Promise.all([fetch("/plan.json").then((r) => r.json()), fetch("/static/build.json").then((r) => r.json())]);
    fake = makeFakeHass(plan, build);
    await import("/static/home-3d.js");
    countUpdates("home-3d-panel");
    // the 3D view is a chunk of its own (#179): it is counted once its code is there
    void customElements.whenDefined("fp3d-view3d").then(() => countUpdates("fp3d-view3d"));
    const t0 = performance.now();
    panel = document.createElement("home-3d-panel");
    panel.narrow = false;
    panel.panel = { config: {} };
    panel.hass = fake.hass;
    document.body.append(panel);
    const view = await waitFor(() => panel.shadowRoot?.querySelector("fp3d-view3d"), 60000, "the 3D view element");
    await waitFor(() => view.viewer && view.shadowRoot?.querySelector("canvas"), 60000, "the 3D viewer");
    // the plan is built floor by floor and its shaders compile in the background (#131): ready once the viewer is not
    // busy any more and a frame went by
    await waitFor(() => view.viewer.busy && !view.viewer.busy(), 60000, "the 3D view to finish building");
    await nextFrame();
    const ready = performance.now() - t0;
    // long animation frames are reported a little later
    await sleep(300);
    const during = longFrames.filter((f) => f.at + f.ms >= t0 && f.at <= t0 + ready);
    return {
      ready: +ready.toFixed(0),
      longestTask: +Math.max(0, ...during.map((f) => f.ms)).toFixed(0),
      blocking: +during.reduce((s, f) => s + f.blocking, 0).toFixed(0),
      entities: Object.keys(fake.hass.states).length,
      items: plan.floors.reduce((n, f) => n + (f.furniture?.length ?? 0), 0),
    };
  },

  /**
   * Background load while nothing happens (#177): `rate` hass updates a second for `seconds`, each a filler sensor no
   * plan links; every `watchedEvery`-th one changes a state the plan shows instead (0: never).
   */
  async idle({ seconds = 5, rate = 5, watchedEvery = 0 } = {}) {
    await nextFrame();
    const before = snapshot();
    const lf0 = longFrames.length;
    const t0 = performance.now();
    const shown = fake.linked.filter((id) => id.startsWith("sensor.") || id.startsWith("light."));
    for (let i = 1; i <= seconds * rate; i++) {
      const id = watchedEvery && i % watchedEvery === 0 ? shown[i % shown.length] : undefined;
      panel.hass = fake.tick(id);
      await sleep(1000 / rate);
    }
    await nextFrame();
    const secs = (performance.now() - t0) / 1000;
    const after = snapshot();
    const per = {};
    for (const [tag, c] of Object.entries(after)) {
      const b = before[tag] ?? { updates: 0, renders: 0, ms: 0 };
      per[tag] = { updatesPerS: +((c.updates - b.updates) / secs).toFixed(1), rendersPerS: +((c.renders - b.renders) / secs).toFixed(1), msPerS: +((c.ms - b.ms) / secs).toFixed(1) };
    }
    const lf = longFrames.slice(lf0);
    return { ...per, longFramesPerS: +(lf.length / secs).toFixed(2), longFrameMsPerS: +(lf.reduce((s, f) => s + f.ms, 0) / secs).toFixed(1) };
  },

  /** Walk through the house and back (#179: walking is a chunk of its own that loads now). */
  async walk() {
    const view = panel.shadowRoot.querySelector("fp3d-view3d");
    await view.startWalk();
    await waitFor(() => view.walker, 30000, "walking to start");
    await nextFrame();
    view.stopWalk();
    await view.updateComplete;
    return true;
  },

  /** Click a mode button of the panel by its position (0 View, 1 Editor, 2 Extensions; a group of pressed buttons since
   * #180) or the Settings button. */
  async tab(which) {
    const root = panel.shadowRoot;
    const button = which === "settings" ? root.querySelector(".fp3d-tab-settings") : root.querySelectorAll("header .fp3d-seg > button:not(.fp3d-tab-settings)")[which];
    if (!button) throw new Error(`no tab ${which}`);
    button.click();
    await panel.updateComplete;
    await nextFrame();
  },

  /** Open the editor and wait for its plan. */
  async editor() {
    await check.tab(1);
    const ed = await waitFor(() => panel.shadowRoot.querySelector("fp3d-editor"), 60000, "the editor");
    countUpdates("fp3d-editor");
    await waitFor(() => ed.shadowRoot?.querySelector("svg.fp3d-plan"), 60000, "the editor's plan");
    await ed.updateComplete;
    await sleep(300);
    return ed;
  },

  /**
   * Editor selection (as #97/#130): press an item in the plan, timed to the updated panel painted. Alternates a
   * linked item and a plain one, `n` presses each.
   */
  async select({ n = 10 } = {}) {
    const ed = panel.shadowRoot.querySelector("fp3d-editor") ?? (await check.editor());
    const svg = ed.shadowRoot.querySelector("svg.fp3d-plan");
    const floor = ed.floor;
    const items = floor?.furniture ?? [];
    const isLinked = (f) => !!(f.entity || f.power || f.state_entity);
    const linked = items.find((f) => isLinked(f) && f.w > 0.3 && f.d > 0.3);
    const plain = items.find((f) => !isLinked(f) && f.w > 0.4 && f.d > 0.4 && f !== linked);
    if (!linked || !plain) throw new Error("the plan's first floor needs a linked and a plain item");
    const press = async (f) => {
      // the editor's own view keeps its zoom: ask it where the item is now
      // (another item drawn over this one would take the press: the check below says so)
      const [sx, sy] = ed.toScreen([f.x, f.z]);
      const rect = svg.getBoundingClientRect();
      const opts = { bubbles: true, composed: true, pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0, buttons: 1, clientX: rect.left + sx, clientY: rect.top + sy };
      const target = ed.shadowRoot.elementFromPoint(opts.clientX, opts.clientY) ?? svg;
      const t0 = performance.now();
      target.dispatchEvent(new PointerEvent("pointerdown", opts));
      target.dispatchEvent(new PointerEvent("pointerup", { ...opts, buttons: 0 }));
      await ed.updateComplete;
      await nextFrame();
      const ms = performance.now() - t0;
      if (ed._furnitureId !== f.id) throw new Error(`a press on ${f.id} selected ${ed._furnitureId ?? "nothing"}`);
      return ms;
    };
    const times = { linked: [], plain: [] };
    // one press each first: the entity lists are built once (#130), later selections reuse them
    await press(linked);
    await press(plain);
    for (let i = 0; i < n; i++) {
      times.linked.push(await press(linked));
      await sleep(60);
      times.plain.push(await press(plain));
      await sleep(60);
    }
    return { linked: stats(times.linked), plain: stats(times.plain) };
  },

  /** The 3D view's renderer counters after load. */
  renderInfo() {
    const view = panel.shadowRoot.querySelector("fp3d-view3d");
    const info = view?.viewer?.renderer?.info;
    return info ? { calls: info.render.calls, triangles: info.render.triangles, geometries: info.memory.geometries, textures: info.memory.textures } : null;
  },

  /**
   * Time the renderer's `render` the way a hand-written live speed check did (#213): wrap it, draw `n` frames, then
   * "restore" it with `delete`. three.js gives each renderer its own `render` (none on the prototype), so before #213
   * the delete left the renderer without one and every later frame and floor picture threw "this.renderer.render is
   * not a function". Then a frame and the floor pictures are drawn; a page error fails the check. `quality`: switch
   * to it first, so the renderer a quality change swaps in (#131) is tried as well.
   */
  async renderTrap({ n = 10, quality } = {}) {
    const view = panel.shadowRoot.querySelector("fp3d-view3d");
    if (quality) {
      panel.setQuality(quality);
      await panel.updateComplete;
      await waitFor(() => !view.viewer.busy(), 60000, `the ${quality} quality`);
      await nextFrame();
    }
    const viewer = view.viewer;
    const rd = viewer.renderer;
    const orig = rd.render;
    const times = [];
    rd.render = function (...a) {
      const t0 = performance.now();
      try {
        return orig.apply(this, a);
      } finally {
        times.push(performance.now() - t0);
      }
    };
    for (let i = 0; i < n; i++) {
      viewer.invalidate();
      await nextFrame();
    }
    // a sloppy script's delete; a strict one would throw now that render cannot be deleted
    const removed = Reflect.deleteProperty(rd, "render");
    const after = typeof rd.render;
    viewer.invalidate();
    await nextFrame();
    const thumbs = viewer.floorThumbnails(150, 112).length;
    if (quality) {
      panel.setQuality("auto");
      await panel.updateComplete;
      await waitFor(() => !view.viewer.busy(), 60000, "the auto quality");
    }
    return { frames: stats(times), removed, after, thumbs };
  },

  /**
   * Every look once (their shaders compile: a broken one logs an error), then back to the first; and the read-only 2D
   * plan, which is a bundle of its own.
   */
  async looks() {
    const view = panel.shadowRoot.querySelector("fp3d-view3d");
    const first = panel._theme;
    for (const look of ["day", "realistic", "blueprint", first]) {
      panel._theme = look;
      await panel.updateComplete;
      await view.updateComplete;
      await waitFor(() => !view.viewer.busy(), 60000, `the ${look} look`);
      await nextFrame();
    }
    // the "2D or 3D" switch beside the View menu
    const button = (label) => [...panel.shadowRoot.querySelectorAll('.fp3d-seg[aria-label="2D or 3D"] button')].find((b) => b.textContent.trim() === label);
    const flat = button("2D");
    if (!flat) throw new Error("no 2D button");
    // the panel may draw another view element for the plan: ask for it each time
    const shown = () => panel.shadowRoot.querySelector("fp3d-view3d");
    flat.click();
    await waitFor(() => shown()?.plan2d, 10000, "the 2D plan");
    // its bundle loads now: a failed download shows as a failed request or a console error
    await sleep(1500);
    button("3D").click();
    await waitFor(() => shown()?.viewer?.busy && !shown().plan2d && !shown().viewer.busy(), 60000, "the 3D view back");
    await sleep(500);
    return true;
  },

  /** The item editor (a bundle of its own, opened from the Extensions tab), opened and closed again. */
  async itemEditor() {
    await check.tab(2);
    const ext = await waitFor(() => panel.shadowRoot.querySelector("fp3d-extensions"), 60000, "the Extensions tab");
    await ext.updateComplete;
    await ext.openItemEditor();
    const dialog = await waitFor(() => document.querySelector("fp3d-item-editor"), 30000, "the item editor");
    await dialog.updateComplete;
    await sleep(500);
    dialog.remove();
    return true;
  },

  /**
   * The editor's help overlay (#196), opened from its "?" button: whether it took the focus, and (`step: "where"`)
   * whether the focus is still inside it, or (`step: "closed"`) back on the button. The Node script presses the keys.
   */
  async helpDialog({ step }) {
    const ed = panel.shadowRoot.querySelector("fp3d-editor") ?? (await check.editor());
    const root = ed.shadowRoot;
    const box = () => root.querySelector(".fp3d-help-overlay");
    if (step === "open") {
      const button = root.querySelector(".fp3d-help-btn");
      if (!button) throw new Error("no help button");
      button.focus();
      button.click();
      await ed.updateComplete;
      await waitFor(() => box() && root.activeElement && box().contains(root.activeElement), 5000, "the help overlay to take the focus");
      return { modal: box().getAttribute("aria-modal"), lang: panel.getAttribute("lang") };
    }
    if (step === "where") return { inside: !!box() && box().contains(root.activeElement), on: root.activeElement?.className ?? root.activeElement?.tagName };
    await ed.updateComplete;
    await nextFrame();
    return { open: !!box(), back: root.activeElement?.textContent?.trim() ?? null };
  },

  /** The page's announcements so far (#196): the live region's text. */
  announced: () => document.getElementById("fp3d-announce")?.textContent ?? null,

  /** What the fake backend was asked that it has no answer for. */
  unknownCalls: () => [...(fake?.unknown ?? [])],
};

window.check = check;
