// A backup import never destroys what the file leaves out, and is checked whole before anything is written (#153).

import assert from "node:assert/strict";
import { test } from "node:test";
import { makeEditor, square } from "./editor-harness.ts";

const plan = (room: string) => ({
  version: 1,
  settings: {},
  floors: [{ id: "f", name: "F", elevation: 0, height: 2.5, rooms: [{ ...square("r", 0, 0, 4, 4), name: room }], walls: [], openings: [], placements: [], furniture: [], outdoor: [] }],
});

/** An editor whose backend records every backup message; `fail` names a home whose restore fails. */
async function importing(file: unknown, fail?: string) {
  const ed = await makeEditor([square("r", 0, 0, 4, 4)]);
  const sent: Record<string, any>[] = [];
  const told: string[] = [];
  ed.hass = {
    ...ed.hass,
    callWS: async (msg: Record<string, any>) => {
      sent.push(msg);
      if (msg.type === "home_3d/backup/import") {
        if (msg.check_only) return { checked: true, skipped: [] };
        if (fail && msg.homes?.[0]?.id === fail) throw { code: "restore_failed", message: "disk full; everything was put back as it was" };
        const building = msg.homes?.[0]?.building ?? msg.building;
        return { revision: 2, building, home_id: msg.homes?.[0]?.id ?? "home", packs: msg.packs?.length ?? 0, skipped: [] };
      }
      if (msg.type === "home_3d/image/set") return null;
      throw new Error(`unexpected ${msg.type}`);
    },
  };
  ed.ask = async () => true;
  ed.tell = async (text: string) => void told.push(text);
  ed.dispatchEvent = () => true;
  ed.fit = () => undefined;
  const input = { files: [{ text: async () => JSON.stringify(file) }], value: "x" };
  await ed.importBackup({ target: input });
  return { ed, sent, told, imports: sent.filter((m) => m.type === "home_3d/backup/import") };
}

const twoHomes = {
  format: "home3d-backup",
  version: 1,
  building: plan("A"),
  homes: [
    { id: "home", name: "Home", building: plan("A") },
    { id: "flat", name: "Flat", building: plan("B") },
  ],
  active: "home",
  packs: [{ id: "some.pack" }],
  items: [{ id: "own" }],
};

test("an older backup without packs sends none, so the installed packs stay (#153)", async () => {
  const { imports } = await importing({ format: "home3d-backup", version: 1, building: plan("Old") });
  assert.equal(imports.length, 2);
  for (const msg of imports) {
    assert.ok(!("packs" in msg), "no packs key: the backend leaves the installed ones");
    assert.ok(!("items" in msg));
  }
});

test("every part of the file is checked before the first home is restored; packs and items come last (#153)", async () => {
  const { imports } = await importing(twoHomes);
  assert.deepEqual(
    imports.map((m) => [m.check_only === true, m.homes?.[0]?.id, "packs" in m, "items" in m]),
    [
      [true, "home", false, false],
      [true, "flat", true, true],
      [false, "home", false, false],
      [false, "flat", true, true],
    ],
  );
});

test("a backup whose second home fails says which homes were restored before it (#153)", async () => {
  const { told, imports } = await importing(twoHomes, "flat");
  assert.equal(imports.filter((m) => !m.check_only).length, 2);
  assert.equal(told.length, 1);
  assert.match(told[0], /Flat/);
  assert.match(told[0], /Restored before it: Home/);
  assert.match(told[0], /disk full/);
});

test("a backup that fails the check restores nothing (#153)", async () => {
  const ed = await makeEditor([square("r", 0, 0, 4, 4)]);
  const sent: Record<string, any>[] = [];
  ed.hass = {
    ...ed.hass,
    callWS: async (msg: Record<string, any>) => {
      sent.push(msg);
      if (msg.check_only && msg.homes?.[0]?.id === "flat") throw { code: "invalid_format", message: "bad plan" };
      if (msg.check_only) return { checked: true, skipped: [] };
      throw new Error("restored although the check failed");
    },
  };
  const told: string[] = [];
  ed.ask = async () => true;
  ed.tell = async (text: string) => void told.push(text);
  await ed.importBackup({ target: { files: [{ text: async () => JSON.stringify(twoHomes) }], value: "x" } });
  assert.equal(sent.filter((m) => !m.check_only).length, 0);
  assert.match(told[0], /bad plan/);
});
