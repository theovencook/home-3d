// The home switcher asks for names and confirms deletes in the app's own dialog, not with prompt()/confirm() (#59).

import assert from "node:assert/strict";
import { test } from "node:test";
import { setAskHost, type AskAnswer, type AskRequest } from "../ask.ts";
import type { HomeAssistant } from "../types.ts";
import { Fp3dHomeSwitcher } from "./home-switcher.ts";

const homes = [
  { id: "home", name: "Home", revision: 1, floors: 1, rooms: 2, furniture: 0 },
  { id: "flat", name: "Flat", revision: 1, floors: 1, rooms: 1, furniture: 0 },
];

function switcher(answers: AskAnswer[]) {
  const sent: Record<string, unknown>[] = [];
  const asked: AskRequest[] = [];
  setAskHost({ ask: async (req) => (asked.push(req), answers.shift() ?? { ok: false, value: "" }) });
  const hass = {
    language: "en",
    callWS: async (msg: Record<string, unknown>) => {
      sent.push(msg);
      if (msg.type === "home_3d/homes/create") return { homes, active: "home", home: { ...homes[0], id: "new1", name: msg.name } };
      return { homes, active: "home" };
    },
  } as unknown as HomeAssistant;
  const el = new Fp3dHomeSwitcher() as unknown as { hass: HomeAssistant; home: string; _homes: unknown; act(a: string): Promise<void> };
  el.hass = hass;
  el.home = "home";
  el._homes = homes;
  return { el, sent, asked };
}

test("a new home is named in the app's dialog, created and made active (#59)", async () => {
  const { el, sent, asked } = switcher([{ ok: true, value: " Holiday flat " }]);
  try {
    await el.act("new");
    assert.equal(asked.length, 1);
    assert.equal(asked[0].input, "New home", "the dialog suggests a name");
    assert.deepEqual(
      sent.map((m) => m.type),
      ["home_3d/homes/create", "home_3d/homes/set_active"],
    );
    assert.equal(sent[0].name, "Holiday flat");
  } finally {
    setAskHost(null);
  }
});

test("cancelling the name dialog creates nothing (#59)", async () => {
  const { el, sent } = switcher([{ ok: false, value: "typed" }]);
  try {
    await el.act("new");
    assert.deepEqual(sent, []);
  } finally {
    setAskHost(null);
  }
});

test("deleting a home asks first in a warning dialog and deletes only on yes (#59)", async () => {
  const { el, sent, asked } = switcher([{ ok: false, value: "" }, { ok: true, value: "" }]);
  try {
    await el.act("delete");
    assert.deepEqual(sent, [], "no means nothing is deleted");
    await el.act("delete");
    assert.equal(asked[1].danger, true);
    assert.deepEqual(sent, [{ type: "home_3d/homes/delete", home_id: "home" }]);
  } finally {
    setAskHost(null);
  }
});
