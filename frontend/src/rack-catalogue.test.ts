// The bundled empty racks (#112): the files in the IT & network pack are what tools/rack-frames.ts writes from the
// catalogue, and each is a rack by the rules.

import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import type { PackItem } from "./packs.ts";
import { RACKS, rackItem, rackItemFile } from "./rack-catalogue.ts";
import { rackLayout, readRackFrame } from "./rack-frame.ts";

const NETWORK = new URL("../../custom_components/home_3d/bundled_packs/theovencook.it/network/", import.meta.url);

test("the IT pack has the three starter racks: a 10-inch 6U mini rack, a 9U glass wall cabinet and a 42U floor cabinet (#112)", () => {
  const frames = RACKS.map((r) => r.rack_frame);
  assert.ok(frames.some((f) => f.width === 10 && f.u === 6));
  assert.ok(frames.some((f) => f.form === "wall_cabinet" && f.u === 9 && f.door === "glass"));
  assert.ok(frames.some((f) => f.form === "cabinet" && f.u === 42));
});

test("every catalogue rack is in the pack as the tool writes it, and reads as a rack (#112)", () => {
  for (const entry of RACKS) {
    const file = new URL(`${entry.id}.json`, NETWORK);
    assert.ok(existsSync(file), `${entry.id}.json: run node tools/rack-frames.ts`);
    const text = readFileSync(file, "utf8").replace(/\r\n/g, "\n");
    assert.equal(text, rackItemFile(rackItem(entry)), `${entry.id}.json is out of date: run node tools/rack-frames.ts`);
    const item = JSON.parse(text) as PackItem;
    const frame = readRackFrame(item);
    assert.ok(frame, entry.id);
    // its U space fits inside, as the real rack's does
    const at = rackLayout(frame, ...item.size);
    assert.ok(at.top <= item.size[2] && Math.abs(at.unit - 0.04445) < 1e-9, entry.id);
  }
});
