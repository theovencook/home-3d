import assert from "node:assert/strict";
import { test } from "node:test";
import { AskQueue, askConfirm, askText, setAskHost, tell, type AskRequest } from "./ask.ts";

const confirmQ = (text: string): AskRequest => ({ text, ok: "Delete", cancel: "Cancel", danger: true });

test("the dialog shows one question at a time; the next waits until the first is answered (#59)", async () => {
  const q = new AskQueue();
  const first = q.ask(confirmQ("Delete the floor?"));
  const second = q.ask(confirmQ("Delete the room?"));
  assert.equal(q.current?.text, "Delete the floor?");
  q.answer(true);
  assert.deepEqual(await first, { ok: true, value: "" });
  assert.equal(q.current?.text, "Delete the room?");
  q.answer(false);
  assert.deepEqual(await second, { ok: false, value: "" });
  assert.equal(q.current, null);
});

test("a question with a text field answers with what was typed (#59)", async () => {
  const q = new AskQueue();
  const named = q.ask({ text: "Name of the home", ok: "OK", cancel: "Cancel", input: "New home" });
  assert.equal(q.current?.input, "New home");
  q.answer(true, "Holiday flat");
  assert.deepEqual(await named, { ok: true, value: "Holiday flat" });
});

test("listeners hear every change of the open question (#59)", async () => {
  const q = new AskQueue();
  const seen: (string | null)[] = [];
  q.onChange = () => seen.push(q.current?.text ?? null);
  const a = q.ask(confirmQ("A?"));
  q.answer(false);
  await a;
  assert.deepEqual(seen, ["A?", null]);
});

test("askConfirm, askText and tell go through the page's one dialog (#59)", async () => {
  const asked: AskRequest[] = [];
  const answers = [
    { ok: true, value: "" },
    { ok: false, value: "" },
    { ok: true, value: "  Flat  " },
    { ok: true, value: "   " },
    { ok: false, value: "typed, then cancelled" },
    { ok: true, value: "" },
  ];
  setAskHost({ ask: async (req) => (asked.push(req), answers.shift()!) });
  try {
    assert.equal(await askConfirm("Delete?", { ok: "Delete", cancel: "Cancel", danger: true }), true);
    assert.equal(await askConfirm("Delete?", { ok: "Delete", cancel: "Cancel" }), false);
    assert.equal(await askText("Name", "New home", { ok: "OK", cancel: "Cancel" }), "Flat");
    assert.equal(await askText("Name", "x", { ok: "OK", cancel: "Cancel" }), null, "an empty name is no name");
    assert.equal(await askText("Name", "x", { ok: "OK", cancel: "Cancel" }), null);
    await tell("It did not work", { ok: "OK" });
    assert.equal(asked[0].danger, true);
    assert.equal(asked[2].input, "New home");
    assert.equal(asked[5].cancel, undefined, "a message has only the OK button");
  } finally {
    setAskHost(null);
  }
});

test("without a page to show the dialog on, a question is answered no and nothing breaks (#59)", async () => {
  setAskHost(null);
  assert.equal(await askConfirm("Delete?", { ok: "Delete", cancel: "Cancel" }), false);
  assert.equal(await askText("Name", "x", { ok: "OK", cancel: "Cancel" }), null);
  await tell("note", { ok: "OK" });
});
