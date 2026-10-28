import assert from "node:assert/strict";
import { test } from "node:test";
import { BUILT_IN, hasFeature, unlockedFeatures } from "./features.ts";

test("every feature whose code is here is on without a pack; the pool stays off", () => {
  assert.deepEqual([...unlockedFeatures([])].sort(), [...BUILT_IN].sort());
  for (const f of ["camera_cockpit", "weather", "screens", "energy_pro", "sound", "auto_pro", "time_travel", "household", "fridge_smart", "fun_pets", "fun_halloween"] as const) {
    assert.equal(hasFeature(f, []), true, f);
  }
  assert.equal(hasFeature("pool", []), false);
  // a pack listing a feature still counts (older pack files), unknown names are ignored
  assert.equal(hasFeature("pool", [{ features: ["pool"] }]), true);
  assert.equal(unlockedFeatures([{ features: ["teleport"] }]).has("teleport" as never), false);
});

test("an unreleased add-on shows only to whoever has its pack", async () => {
  const { released, UNRELEASED } = await import("./features.ts");
  const { setPacks } = await import("./packs.ts");
  assert.ok(!UNRELEASED.includes("diagnostics"));
  setPacks([]);
  assert.equal(released("diagnostics"), true);
  assert.equal(released("auto_pro"), true);
  // the pool is not released: hidden, unless a pack lists it
  assert.equal(released("pool"), false);
  setPacks([{ id: "test.pool", name: "Pool", items: [], features: ["pool"] } as never]);
  assert.equal(released("pool"), true);
  setPacks([]);
});
