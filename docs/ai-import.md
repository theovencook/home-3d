# Let an AI write your plan

*Deutsch weiter unten.*

> **Home 3D note:** the hosted import page of the original project is not part of Home 3D. The converters for these formats are in `frontend/src/import/` but are not wired into the editor yet; this page is kept as the format reference.

Many people already ask ChatGPT, Claude or Gemini to turn their floor plan into Home 3D. This works best with the template below: the AI writes the simple [import format](plan-format.md), and the **import page** checks it, places doors and windows on their walls, fixes small mistakes and gives you the Home 3D file for **Editor → Backup → Import …**.

Tip: for a Sweet Home 3D file, a CAD drawing, an iPhone scan or a 3D model you do not need an AI – drop the file on the import page directly.

## Template (copy it into the chat, then attach your plan)

```text
You convert floor plans into the "home3d-import" JSON format of Home 3D.

Output ONLY one JSON object, no explanation, in this structure:
{
  "format": "home3d-import",
  "units": "m",
  "rooms_at": "centre",
  "floors": [
    {
      "name": "<floor name>",
      "elevation": <metres above the ground floor, ground floor 0>,
      "height": <storey height in metres, usually 2.5>,
      "rooms": [ { "name": "<room>", "points": [[x, z], ...] } ],
      "doors": [ { "at": [x, z], "width": 0.9 } ],
      "windows": [ { "at": [x, z], "width": 1.2, "height": 1.3, "sill": 0.9 } ],
      "furniture": [ { "type": "<kind>", "at": [x, z], "width": w, "depth": d, "rotation": 0 } ]
    }
  ]
}

Rules:
- Metres. x runs to the right, z runs DOWN the plan (top of the drawing = small z). Put the top-left corner of the house at [0, 0].
- Room outlines follow the MIDDLE of the walls; neighbouring rooms use exactly the same corner coordinates where they meet. List the corners in order around the room, do not repeat the first one.
- Use the measurements written in the plan. If only inside dimensions are given, add half the wall thickness (inner walls 0.12 m, outer walls 0.3 m unless stated).
- Doors and windows: "at" is the middle of the opening ON the wall line (a point on a room edge). A door between two rooms is listed once.
- Furniture "type" is one of: sofa, sofa_l, armchair, coffee_table, tv_board, sideboard, shelf, plant, rug, table, table_round, chair, bench, kitchen, kitchen_wall, kitchen_tall, island, sink, stove, dishwasher, fridge, bed, bunk_bed, nightstand, wardrobe, dresser, bathtub, shower, wc, washbasin, washer, dryer, desk, office_chair, tall_cabinet, stairs, radiator. "rotation" in degrees clockwise; 0 = the front faces down the plan, 180 = up.
- One entry in "floors" per storey, lowest first (a cellar has a negative elevation).
- If something is unreadable, leave it out rather than guessing wildly.

Here is my floor plan:
```

Then save the AI's answer as a `.json` file and drop it on the import page. Check the preview: rooms, doors and windows should sit where they are in your plan. If something is off, tell the AI what to change ("the kitchen is 4.2 m wide, not 3.8") and try again.

---

# Den Plan von einer KI schreiben lassen

> **Hinweis zu Home 3D:** Die gehostete Import-Seite des Originalprojekts gehört nicht zu Home 3D. Die Konverter liegen in `frontend/src/import/`, sind aber noch nicht im Editor eingebunden; diese Seite bleibt als Formatbeschreibung.

Viele lassen sich ihren Grundriss schon von ChatGPT, Claude oder Gemini für Home 3D umbauen. Am besten klappt das mit der Vorlage unten: Die KI schreibt das einfache [Importformat](plan-format.md), und die **Import-Seite** prüft es, setzt Türen und Fenster auf ihre Wände, repariert kleine Fehler und gibt dir die Home 3D-Datei für **Editor → Sicherung → Importieren …**.

Tipp: Für eine Sweet-Home-3D-Datei, eine CAD-Zeichnung, einen iPhone-Scan oder ein 3D-Modell brauchst du keine KI – die Datei einfach direkt auf die Import-Seite ziehen.

## Vorlage (in den Chat kopieren, dann den Grundriss anhängen)

```text
Du wandelst Grundrisse in das JSON-Format "home3d-import" von Home 3D um.

Gib NUR ein JSON-Objekt aus, ohne Erklärung, in diesem Aufbau:
{
  "format": "home3d-import",
  "units": "m",
  "rooms_at": "centre",
  "floors": [
    {
      "name": "<Etagenname>",
      "elevation": <Meter über dem Erdgeschoss, Erdgeschoss 0>,
      "height": <Geschosshöhe in Metern, meist 2.5>,
      "rooms": [ { "name": "<Raum>", "points": [[x, z], ...] } ],
      "doors": [ { "at": [x, z], "width": 0.9 } ],
      "windows": [ { "at": [x, z], "width": 1.2, "height": 1.3, "sill": 0.9 } ],
      "furniture": [ { "type": "<Art>", "at": [x, z], "width": b, "depth": t, "rotation": 0 } ]
    }
  ]
}

Regeln:
- Meter. x nach rechts, z im Plan nach UNTEN (oben in der Zeichnung = kleines z). Die linke obere Hausecke liegt bei [0, 0].
- Raumumrisse laufen auf der MITTE der Wände; Nachbarräume nutzen dort, wo sie sich treffen, genau dieselben Eckkoordinaten. Ecken der Reihe nach um den Raum, die erste nicht wiederholen.
- Die Maße aus dem Plan verwenden. Stehen nur Innenmaße da, die halbe Wanddicke dazurechnen (Innenwände 0,12 m, Außenwände 0,3 m, wenn nichts anderes angegeben ist).
- Türen und Fenster: "at" ist die Mitte der Öffnung AUF der Wandlinie (ein Punkt auf einer Raumkante). Eine Tür zwischen zwei Räumen nur einmal angeben.
- Möbel-"type" ist eins von: sofa, sofa_l, armchair, coffee_table, tv_board, sideboard, shelf, plant, rug, table, table_round, chair, bench, kitchen, kitchen_wall, kitchen_tall, island, sink, stove, dishwasher, fridge, bed, bunk_bed, nightstand, wardrobe, dresser, bathtub, shower, wc, washbasin, washer, dryer, desk, office_chair, tall_cabinet, stairs, radiator. "rotation" in Grad im Uhrzeigersinn; 0 = Vorderseite zeigt im Plan nach unten, 180 = nach oben.
- Pro Geschoss ein Eintrag in "floors", das unterste zuerst (Keller mit negativer elevation).
- Was unleserlich ist, lieber weglassen als wild raten.

Hier ist mein Grundriss:
```

Die Antwort der KI als `.json`-Datei speichern und auf die Import-Seite ziehen. In der Vorschau prüfen: Räume, Türen und Fenster sollten so sitzen wie in deinem Plan. Passt etwas nicht, der KI sagen, was sie ändern soll („die Küche ist 4,2 m breit, nicht 3,8“), und noch einmal versuchen.
