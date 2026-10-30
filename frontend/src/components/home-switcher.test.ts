// The home switcher (#57): its list names the home the view has actually loaded, the header chip says whether that
// home is the one on the displays, and picking the shown home again reloads it. Names and deletes are asked in the
// app's own dialog, not with prompt()/confirm() (#59).

import assert from "node:assert/strict";
import { test } from "node:test";
import { setAskHost, type AskAnswer, type AskRequest } from "../ask.ts";
import type { HomeAssistant } from "../types.ts";
import { Fp3dHomeSwitcher, homeActions, homeChip, homeOptionLabel, menuKey, menuRows } from "./home-switcher.ts";

const HOMES = [
  { id: "home", name: "Home", revision: 1, floors: 1, rooms: 3, furniture: 10 },
  { id: "flat", name: "Flat", revision: 1, floors: 1, rooms: 0, furniture: 0 },
];

function backend() {
  const state = { active: "home", sent: [] as Record<string, unknown>[] };
  const hass = {
    language: "en",
    callWS: async (msg: Record<string, unknown> & { type: string }) => {
      state.sent.push(msg);
      if (msg.type === "home_3d/homes/set_active") state.active = msg.home_id as string;
      if (msg.type === "home_3d/homes/create" || msg.type === "home_3d/homes/duplicate") {
        const home = { id: "new", name: msg.name as string, revision: 0, floors: 0, rooms: 0, furniture: 0 };
        return { homes: [...HOMES, home], active: state.active, home };
      }
      return { homes: HOMES, active: state.active };
    },
  } as unknown as HomeAssistant;
  return { hass, state };
}

const tick = () => new Promise((r) => setTimeout(r, 0));

/** A switcher showing `home`, with its list loaded; `select.value = x; el.chosen(...)` picks x from its menu. */
async function switcher(hass: HomeAssistant, home: string) {
  const el = new Fp3dHomeSwitcher() as unknown as Record<string, any>;
  el.hass = hass;
  el.home = home;
  el.willUpdate(new Map());
  await tick();
  const select = { value: home };
  el.chosen = (e: { target: { value: string } }) => el.pick(e.target.value);
  return { el, select };
}

/** Every string and value of a lit template, flattened into one text. */
function flat(v: unknown): string {
  if (v == null || typeof v === "symbol" || typeof v === "function") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  if (typeof v === "object" && "strings" in (v as object)) {
    const t = v as { strings: readonly string[]; values: unknown[] };
    return t.strings.map((s, i) => s + (i < t.values.length ? flat(t.values[i]) : "")).join("");
  }
  return String(v);
}

test("after a switch the menu button names the home the view loaded, not the one picked before (#57)", async () => {
  const { hass } = backend();
  const { el, select } = await switcher(hass, "home");
  select.value = "flat";
  el.chosen({ target: select });
  await tick();
  // the view is still loading: the button keeps naming the loaded home
  assert.match(flat(el.render()), /class="pick"[^>]*>\s*Home · /);
  // the view has loaded the other home
  el.home = "flat";
  assert.match(flat(el.render()), /class="pick"[^>]*>\s*Flat/);
});

const key = (k: string) => ({ key: k, preventDefault() {} });

test("the home menu works from the keyboard: arrows move without switching, Enter picks, Esc closes (#132)", async () => {
  const { hass } = backend();
  const { el } = await switcher(hass, "home");
  const opened = heard(el, "home-open");
  // a native select switched home on every arrow press (Chrome, Edge on Windows); here Down only opens the menu
  el.onKey(key("ArrowDown"));
  assert.equal(el._open, true);
  assert.equal(el.rows()[el._cursor].value, "home", "the menu opens on the shown home");
  el.onKey(key("ArrowDown"));
  assert.equal(el.rows()[el._cursor].value, "flat");
  assert.deepEqual(opened, [], "moving through the menu opens nothing");
  el.onKey(key("Enter"));
  assert.equal(el._open, false);
  assert.deepEqual(opened, [{ home: "flat" }]);
  el.onKey(key("Enter"));
  assert.equal(el._open, true, "Enter on the closed button opens the menu");
  el.onKey(key("Escape"));
  assert.equal(el._open, false);
  assert.equal(opened.length, 1);
});

test("arrow keys skip the separator and stop at both ends of the menu (#132)", () => {
  const t = (k: string) => k;
  const rows = menuRows(HOMES, "home", "home", t);
  assert.deepEqual(
    rows.map((r) => r.kind),
    ["home", "home", "sep", "action", "action", "action", "action", "action"],
  );
  assert.deepEqual(menuKey({ open: true, cursor: 1 }, rows, "ArrowDown"), { open: true, cursor: 3 });
  assert.deepEqual(menuKey({ open: true, cursor: 3 }, rows, "ArrowUp"), { open: true, cursor: 1 });
  assert.deepEqual(menuKey({ open: true, cursor: 0 }, rows, "ArrowUp"), { open: true, cursor: 0 });
  assert.deepEqual(menuKey({ open: true, cursor: 7 }, rows, "End"), { open: true, cursor: 7 });
  assert.deepEqual(menuKey({ open: true, cursor: 3 }, rows, "Home"), { open: true, cursor: 0 });
  assert.deepEqual(menuKey({ open: true, cursor: 3 }, rows, " "), { open: false, cursor: 3, pick: "new" });
  assert.deepEqual(menuKey({ open: true, cursor: 3 }, rows, "Tab"), { open: false, cursor: 3 });
  assert.equal(menuKey({ open: false, cursor: 0 }, rows, "x"), null, "other keys are not the menu's");
});

test("picking the home that is already shown reloads it (#57)", async () => {
  const { hass, state } = backend();
  const { el, select } = await switcher(hass, "home");
  const asked: unknown[] = [];
  (el as unknown as EventTarget).addEventListener("home-reload", (e) => asked.push((e as CustomEvent).detail));
  select.value = "home";
  el.chosen({ target: select });
  await tick();
  assert.deepEqual(asked, [{ home: "home" }]);
  assert.equal(state.sent.filter((m) => m.type === "home_3d/homes/set_active").length, 0);
});

test("the chip names the shown home and says when it is not the one on the displays (#57)", () => {
  assert.deepEqual(homeChip(HOMES, "home", "home"), { name: "Home", onDisplays: true });
  assert.deepEqual(homeChip(HOMES, "home", "flat"), { name: "Flat", onDisplays: false });
  assert.equal(homeChip(HOMES, "home", "gone"), null);
});

test("the active home is badged in the home menu (#57)", () => {
  const t = (key: string) => (key === "home_active_badge" ? "Active on displays" : key);
  assert.equal(homeOptionLabel(HOMES[0], "home", t), "Home · Active on displays");
  assert.equal(homeOptionLabel(HOMES[1], "home", t), "Flat");
});

/** The events a switcher sends to its view, by type. */
function heard(el: unknown, type: string): unknown[] {
  const got: unknown[] = [];
  (el as EventTarget).addEventListener(type, (e) => got.push((e as CustomEvent).detail));
  return got;
}

const setActive = (sent: Record<string, unknown>[]) => sent.filter((m) => m.type === "home_3d/homes/set_active");

for (const action of ["new", "duplicate"]) {
  test(`a ${action === "new" ? "new" : "duplicated"} home stays off the displays and opens in this view only (#58)`, async () => {
    const { hass, state } = backend();
    const { el, select } = await switcher(hass, "home");
    const opened = heard(el, "home-open");
    setAskHost({ ask: async () => ({ ok: true, value: "Experiment" }) });
    try {
      select.value = action;
      el.chosen({ target: select });
      await tick();
      await tick();
      await tick();
    } finally {
      setAskHost(null);
    }
    assert.equal(state.active, "home");
    assert.equal(setActive(state.sent).length, 0);
    assert.deepEqual(opened, [{ home: "new" }]);
  });
}

test("picking another home opens it in this view only; the active one is followed again (#58)", async () => {
  const { hass, state } = backend();
  const { el, select } = await switcher(hass, "home");
  const opened = heard(el, "home-open");
  select.value = "flat";
  el.chosen({ target: select });
  el.home = "flat";
  select.value = "home";
  el.chosen({ target: select });
  await tick();
  assert.equal(setActive(state.sent).length, 0);
  assert.deepEqual(opened, [{ home: "flat" }, { home: null }]);
});

test("'Show on displays' makes the open home the active one without asking (#58)", async () => {
  const { hass, state } = backend();
  const { el, select } = await switcher(hass, "flat");
  const opened = heard(el, "home-open");
  setAskHost({ ask: async () => assert.fail("no confirmation") });
  try {
    select.value = "show";
    el.chosen({ target: select });
    await tick();
  } finally {
    setAskHost(null);
  }
  assert.equal(state.active, "flat");
  assert.deepEqual(opened, [{ home: null }]);
});

test("'Show on displays' is offered only while the open home is not the active one (#58)", () => {
  assert.deepEqual(homeActions(HOMES, "home", "flat"), ["show", "new", "sample", "rename", "duplicate", "delete"]);
  assert.deepEqual(homeActions(HOMES, "home", "home"), ["new", "sample", "rename", "duplicate", "delete"]);
  assert.deepEqual(homeActions(HOMES.slice(0, 1), "home", "home"), ["new", "sample", "rename", "duplicate"]);
});

/** A switcher showing "home" whose dialog answers with `answers`, one per question. */
function asking(answers: AskAnswer[]) {
  const { hass, state } = backend();
  const asked: AskRequest[] = [];
  setAskHost({ ask: async (req) => (asked.push(req), answers.shift() ?? { ok: false, value: "" }) });
  const el = new Fp3dHomeSwitcher() as unknown as Record<string, any>;
  el.hass = hass;
  el.home = "home";
  el._homes = HOMES;
  return { el, state, asked };
}

test("a new home is named in the app's dialog and created, not made active (#59, #58)", async () => {
  const { el, state, asked } = asking([{ ok: true, value: " Holiday flat " }]);
  try {
    await el.act("new");
    assert.equal(asked.length, 1);
    assert.equal(asked[0].input, "New home", "the dialog suggests a name");
    assert.deepEqual(
      state.sent.map((m) => m.type),
      ["home_3d/homes/create"],
    );
    assert.equal(state.sent[0].name, "Holiday flat");
  } finally {
    setAskHost(null);
  }
});

test("cancelling the name dialog creates nothing (#59)", async () => {
  const { el, state } = asking([{ ok: false, value: "typed" }]);
  try {
    await el.act("new");
    assert.deepEqual(state.sent, []);
  } finally {
    setAskHost(null);
  }
});

test("deleting a home asks first in a warning dialog and deletes only on yes (#59)", async () => {
  const { el, state, asked } = asking([{ ok: false, value: "" }, { ok: true, value: "" }]);
  try {
    await el.act("delete");
    assert.deepEqual(state.sent, [], "no means nothing is deleted");
    await el.act("delete");
    assert.equal(asked[1].danger, true);
    assert.deepEqual(state.sent, [{ type: "home_3d/homes/delete", home_id: "home" }]);
  } finally {
    setAskHost(null);
  }
});
