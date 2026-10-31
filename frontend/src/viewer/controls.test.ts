import assert from "node:assert/strict";
import { test } from "node:test";
import { stale } from "./controls.ts";

test("input that waited out a busy moment is dropped, not replayed (#712)", () => {
  assert.equal(stale({ timeStamp: 1000 }, 1100), false);
  assert.equal(stale({ timeStamp: 1000 }, 1600), false); // a slow tablet's frame
  assert.equal(stale({ timeStamp: 1000 }, 2500), true);
  // a timestamp on another clock (very old browsers: epoch milliseconds) is never taken as stale
  assert.equal(stale({ timeStamp: 1_700_000_000_000 }, 5000), false);
  assert.equal(stale({ timeStamp: 1000 }, 1000 + 120_000), false);
});

test("a second finger neither moves nor drops a furniture drag (#174)", async () => {
  const { OrbitControls } = await import("./controls.ts");
  const handlers: Record<string, (e: unknown) => void> = {};
  const el = {
    addEventListener: (t: string, fn: (e: unknown) => void) => (handlers[t] = fn),
    removeEventListener: () => {},
    setPointerCapture: () => {},
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 }),
    clientHeight: 100,
  };
  const log: string[] = [];
  const events = {
    tap: () => log.push("tap"),
    doubleTap: () => log.push("dtap"),
    hold: () => log.push("hold"),
    change: () => {},
    grab: () => true,
    drag: (x: number) => log.push(`drag${x}`),
    drop: () => log.push("drop"),
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new OrbitControls(el as any, {} as any, events as any);
  const ev = (id: number, x: number) => ({ pointerId: id, button: 0, clientX: x, clientY: 5, pointerType: "touch", timeStamp: performance.now(), altKey: false, shiftKey: false });
  handlers.pointerdown(ev(1, 10));
  handlers.pointerdown(ev(2, 50)); // second finger lands
  handlers.pointermove(ev(2, 60)); // and wanders
  handlers.pointermove(ev(1, 20));
  handlers.pointerup(ev(2, 60)); // and lifts
  assert.deepEqual(log, ["drag20"], "only the first finger drags; the second does not drop");
  handlers.pointerup(ev(1, 20));
  assert.deepEqual(log, ["drag20", "drop"]);
});
