import assert from "node:assert/strict";
import { test } from "node:test";
import { fitDistance, refitOnResize, startViewRadius } from "./fit.ts";

const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-3, `${a} ≈ ${b}`);

test("the house fits the narrower side of the screen: height on a wide one, width on a phone (#93)", () => {
  // a ball of 5 m under a 60° view: 5 / sin 30° on a wide screen
  near(fitDistance(5, 60, 2), 10);
  // on a portrait phone the width decides: tan(h/2) = tan 30° · 0.5
  near(fitDistance(5, 60, 0.5), 18.028);
});

test("the bars over the view are left out when the house is fitted (#93)", () => {
  // a quarter of the height kept free at the top and at the bottom: half the height is left,
  // so a wide screen needs the distance a 0.5-wide portrait screen needs without margins
  near(fitDistance(5, 60, 2, { x: 0, y: 0.25 }), 18.028);
  // side margins narrow the width the same way
  near(fitDistance(5, 60, 1, { x: 0.25, y: 0 }), 18.028);
});

test("a view nobody has moved is fitted again when the screen changes shape, a moved one stays (#93)", () => {
  const fitted = { radius: 30, theta: -0.6, phi: 0.85, target: { x: 4.5, y: 3, z: 3.5 } };
  // the phone turned, or the bars above the view folded away: the house is framed again
  assert.equal(refitOnResize(fitted, { ...fitted, target: { ...fitted.target } }, 0.6, 0.75), true);
  // a few pixels' difference is no reason to move the camera
  assert.equal(refitOnResize(fitted, fitted, 0.6, 0.605), false);
  // the user turned or zoomed the view: it is left alone
  assert.equal(refitOnResize(fitted, { ...fitted, radius: 22 }, 0.6, 1.6), false);
  assert.equal(refitOnResize(fitted, { ...fitted, theta: 0.4 }, 0.6, 1.6), false);
  assert.equal(refitOnResize(fitted, { ...fitted, target: { x: 1, y: 3, z: 3.5 } }, 0.6, 1.6), false);
  // nothing fitted yet
  assert.equal(refitOnResize(null, fitted, 0.6, 1.6), false);
});

test("a start view saved on a wide screen keeps its width on a portrait phone (#93)", () => {
  // wide and square screens: as saved
  near(startViewRadius(10, 60, 16 / 9), 10);
  near(startViewRadius(10, 60, 1), 10);
  // a 0.5-wide phone stands back until what was wide on the big screen fits across (18.028 / 10 from above)
  near(startViewRadius(10, 60, 0.5), 18.028);
});
