import assert from "node:assert/strict";
import { test } from "node:test";
import { setPacks, type PackPart } from "../packs.ts";
import { furnitureSymbol } from "./furniture2d.ts";

/** The SVG elements of a pack item's plan symbol (no symbol of its own: its parts seen from above), as tag and attributes. */
function symbol(parts: PackPart[], w = 1, d = 0.5): { tag: string; attrs: Record<string, number> }[] {
  setPacks([{ id: "t.shapes", name: "Shapes", publisher: "t", items: [{ id: "it", name: { en: "It" }, size: [w, d, 1], parts }] }]);
  const out = furnitureSymbol("pack:t.shapes:it", w, d);
  assert.ok(Array.isArray(out));
  return out.map((t) => {
    const tag = /<(\w+)/.exec(t.strings[0])![1];
    const names = t.strings.slice(0, -1).map((s) => /(\w+)=$/.exec(s.trim())![1]);
    const attrs: Record<string, number> = {};
    names.forEach((n, i) => {
      if (typeof t.values[i] === "number") attrs[n] = t.values[i] as number;
    });
    return { tag, attrs };
  });
}

const BASE = { x: 0.1, z: 0, w: 0.6, d: 0.8, y: 0, h: 1, color: "pot" } as const;

test("in the plan a sphere and a lathe show as an ellipse as wide as they reach, a rounded box as a rounded rectangle (#4)", () => {
  const [ball] = symbol([{ shape: "sphere", ...BASE }]);
  assert.deepEqual(ball, { tag: "ellipse", attrs: { cx: 0.1, cy: 0, rx: 0.3, ry: 0.2 } });
  // a lathe reaches as far as the widest point of its profile
  const [vase] = symbol([{ shape: "lathe", ...BASE, profile: [[0, 0], [0.5, 0], [0.8, 0.5], [0.2, 1]] }]);
  assert.equal(vase.tag, "ellipse");
  assert.ok(Math.abs(vase.attrs.rx - 0.24) < 1e-9 && Math.abs(vase.attrs.ry - 0.16) < 1e-9, JSON.stringify(vase));
  // a rounded box: its corners rounded like the box (0.2 of its shortest side by default, here of 0.4 m)
  const [soft] = symbol([{ shape: "rbox", ...BASE }]);
  assert.equal(soft.tag, "rect");
  assert.ok(Math.abs(soft.attrs.width - 0.6) < 1e-9 && Math.abs(soft.attrs.height - 0.4) < 1e-9 && Math.abs(soft.attrs.rx - 0.08) < 1e-9, JSON.stringify(soft));
});
