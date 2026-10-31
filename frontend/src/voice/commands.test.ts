import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room } from "../model.ts";
import { findPlace, normalize, showCommand } from "./commands.ts";

const room = (id: string, name: string): Room => ({ id, name, area_id: null, points: [], floor_material: "wood" });
const building = {
  ...emptyBuilding(),
  floors: [
    { ...newFloor("eg", "Erdgeschoss", 0), rooms: [room("wz", "Wohnzimmer"), room("wc", "WC"), room("gwc", "Gäste-WC")] },
    { ...newFloor("og", "Obergeschoss", 2.8), rooms: [room("kz", "Kinderzimmer")] },
  ],
};

test("normalize: lower case, no accents or punctuation", () => {
  assert.equal(normalize("Gäste-WC!"), "gaste wc");
  assert.equal(normalize("  Straße "), "strasse");
});

test("a sentence names a room, a floor or the house", () => {
  assert.deepEqual(findPlace("Zeig mir das Wohnzimmer", building), { kind: "room", floorId: "eg", roomId: "wz", name: "Wohnzimmer" });
  assert.equal(findPlace("geh ins Gäste-WC", building)?.name, "Gäste-WC");
  assert.equal(findPlace("WC bitte", building)?.name, "WC");
  assert.deepEqual(findPlace("Obergeschoss", building), { kind: "floor", floorId: "og", name: "Obergeschoss" });
  assert.equal(findPlace("zeig das ganze Haus", building)?.kind, "house");
  assert.equal(findPlace("mach das Licht an", building), null);
  assert.equal(findPlace("", building), null);
});

test("a command to show: a show word or a bare place name – not a sentence that only names the room", () => {
  assert.equal(showCommand("Zeig das Wohnzimmer", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("Wohnzimmer", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("das Obergeschoss bitte", building)?.name, "Obergeschoss");
  assert.equal(showCommand("show the whole house", building)?.kind, "house");
  assert.equal(showCommand("Licht im Wohnzimmer an", building), null);
  assert.equal(showCommand("Wie warm ist es im Kinderzimmer", building), null);
  // the Home Assistant area's own name counts too
  assert.equal(showCommand("geh in die Stube", building, (r) => (r.id === "wz" ? "Stube" : null))?.name, "Wohnzimmer");
});

test("switch and open claim a sentence only when it names nothing but a place (#161)", () => {
  // switching and opening commands that happen to name a room are for Assist
  for (const s of ["switch off the lights in the Wohnzimmer", "switch the Wohnzimmer light on", "open the blinds in the Wohnzimmer", "oeffne die Rollos im Wohnzimmer", "Öffne das Fenster im Kinderzimmer", "apri la tapparella del Wohnzimmer"]) {
    assert.equal(showCommand(s, building), null, s);
  }
  // asking to see the place with them still works
  assert.equal(showCommand("switch to the Wohnzimmer", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("open the Wohnzimmer", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("öffne das Wohnzimmer bitte", building)?.name, "Wohnzimmer");
  assert.equal(showCommand("show the Wohnzimmer", building)?.name, "Wohnzimmer");
});

test("room names in other scripts and with undecomposable letters can be addressed (#199)", () => {
  assert.equal(normalize("Кухня"), "кухня");
  assert.equal(normalize("Σαλόνι"), "σαλονι");
  assert.notEqual(normalize("リビング"), "");
  assert.notEqual(normalize("거실"), "");
  assert.equal(normalize("Łazienka"), "lazienka");
  assert.equal(normalize("Køkken"), "kokken");
  assert.equal(normalize("Phòng đọc"), normalize("Phong doc"));
  const b = {
    ...emptyBuilding(),
    floors: [{ ...newFloor("eg", "EG", 0), rooms: [room("k", "Кухня"), room("l", "Łazienka"), room("r", "リビング")] }],
  };
  assert.equal(findPlace("покажи Кухня", b)?.name, "Кухня");
  assert.equal(findPlace("show lazienka", b)?.name, "Łazienka");
  assert.equal(findPlace("リビング を 表示", b)?.name, "リビング");
});
