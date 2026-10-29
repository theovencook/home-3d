import assert from "node:assert/strict";
import { test } from "node:test";
import { AdditiveBlending, BufferGeometry, Group, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, MeshLambertMaterial, Scene } from "three";
import { makeFoldable } from "./fold.ts";
import { Realism } from "./realism.ts";
import { themed } from "./theme.ts";

function house() {
  const uniform = { value: 0 };
  const masks = { standing: { value: 0xffff }, glass: { value: 0 } };
  const wallMat = themed(makeFoldable(new MeshBasicMaterial({ vertexColors: true }), masks, "solid"), uniform);
  const wall = new Mesh(new BufferGeometry(), wallMat);
  const lineMat = themed(new LineBasicMaterial({ vertexColors: true }), uniform, true);
  const lines = new LineSegments(new BufferGeometry(), lineMat);
  const glowMat = new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending });
  const glow = new Mesh(new BufferGeometry(), glowMat);
  const root = new Group();
  root.add(wall, lines, glow);
  const scene = new Scene();
  scene.add(root);
  return { scene, root, wall, wallMat, lines, lineMat, glow, glowMat };
}

test("the realistic look lights the surfaces and gives neon its own materials back", () => {
  const h = house();
  const r = new Realism();
  r.enable(h.scene, true);
  r.realize(h.root, true);
  assert.ok(h.wall.material instanceof MeshLambertMaterial);
  assert.ok(h.wall.castShadow && h.wall.receiveShadow);
  // lines and additive glow are not surfaces
  assert.equal(h.lines.material, h.lineMat);
  assert.equal(h.glow.material, h.glowMat);
  // the twin follows its neon material (a floor fading out): it no longer casts a shadow
  h.wallMat.transparent = true;
  h.wallMat.opacity = 0.3;
  r.realize(h.root, true);
  assert.equal((h.wall.material as MeshLambertMaterial).opacity, 0.3);
  assert.equal(h.wall.castShadow, false);
  // a cut wall leaves out its cut parts in the shadow too
  assert.ok(h.wall.customDepthMaterial);
  r.enable(h.scene, false);
  assert.equal(h.wall.material, h.wallMat);
  assert.equal(h.wall.castShadow, false);
  assert.equal(h.wall.customDepthMaterial, undefined);
  assert.ok(!h.scene.children.includes(r.group));
});

test("without shadows (phones) the surfaces are lit but cast none", () => {
  const h = house();
  const r = new Realism();
  r.enable(h.scene, true);
  r.realize(h.root, false);
  assert.ok(h.wall.material instanceof MeshLambertMaterial);
  assert.equal(h.wall.castShadow, false);
  assert.equal(h.wall.receiveShadow, false);
});
