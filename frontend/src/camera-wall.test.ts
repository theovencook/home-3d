import { test } from "node:test";
import assert from "node:assert/strict";
import { dockFromPoint, parseDock, wallLayout } from "./camera-wall.ts";

test("the camera wall fits every tile without overlap (#217)", () => {
  for (const n of [1, 2, 4, 9, 13, 22]) {
    const { cols, tile } = wallLayout(n, 1200, 620);
    const rows = Math.ceil(n / cols);
    assert.ok(cols * tile + (cols - 1) * 12 <= 1200 + 1, `width n=${n}`);
    assert.ok(rows * (tile * 9) / 16 + (rows - 1) * 12 <= 620 + 1, `height n=${n}`);
  }
  // 22 cameras on a wide wall: five columns of five rows give the largest tiles
  assert.equal(wallLayout(22, 1200, 620).cols, 5);
  // one camera fills the height
  assert.equal(wallLayout(1, 1200, 620).cols, 1);
});

test("too many cameras for a small wall: the smallest tile, the wall scrolls", () => {
  const { cols, tile } = wallLayout(40, 600, 300);
  assert.equal(tile, 180);
  assert.equal(cols, 3);
});

test("the wall docks to the edge nearest where it is let go, and keeps a stored edge only when valid (#266)", () => {
  assert.equal(dockFromPoint(500, 20, 1000, 600), "top");
  assert.equal(dockFromPoint(500, 590, 1000, 600), "bottom");
  assert.equal(dockFromPoint(30, 300, 1000, 600), "left");
  assert.equal(dockFromPoint(980, 300, 1000, 600), "right");
  assert.equal(parseDock("left"), "left");
  assert.equal(parseDock("middle"), "bottom");
  assert.equal(parseDock(null), "bottom");
});
