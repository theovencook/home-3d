# Möbel-Packs

Möbel-Packs bringen zusätzliche Möbel in NeonPlan 3D. Sie werden wie die eingebauten Möbel aus
Quadern und Zylindern gebaut und laufen deshalb genauso flüssig auf schwachen Tablets.

Packs werden nicht signiert: Beim Import prüft Home Assistant nur den Inhalt gegen das Schema in
`custom_components/neonplan3d/packs.py`. Eine Pack-Datei ist `{"payload": {…}}` oder direkt das
Payload-Objekt; ein `signature`-Block älterer Dateien wird ignoriert.

## Ablauf

1. Pack-Quelle schreiben (JSON, Format unten), z. B. `private/packs/kueche.json`
   (`private/` wird von Git ignoriert).
2. Prüfen: `python tools/fp3dpack.py validate private/packs/kueche.json`
3. Optional verpacken: `python tools/fp3dpack.py build private/packs/kueche.json` schreibt
   `kueche.fp3dpack` (`{"payload": …}`).
4. Import in Home Assistant: **Erweiterungen** → **Möbel-Pack importieren …**

## Format

```json
{
  "format": "fp3dpack",
  "version": 1,
  "id": "home3d.kueche",
  "name": "Küchen-Pack",
  "publisher": "Home 3D",
  "description": "optional",
  "items": [
    {
      "id": "retro_fridge",
      "name": { "de": "Retro-Kühlschrank", "en": "Retro fridge" },
      "size": [0.6, 0.65, 1.5],
      "electric": true,
      "parts": [{ "shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "white", "edges": true }],
      "symbol": [{ "shape": "rect", "x": 0, "z": 0, "w": 1, "d": 1 }]
    }
  ]
}
```

- `size`: Standardgröße in Metern (Breite, Tiefe, Höhe). Im Plan lässt sich jedes Möbel danach frei
  skalieren; alle Teile wachsen mit – außer denen mit `fix`.
- `fix` an einem Teil (ab NeonPlan 1.23, Mindestversion setzen): welche Maße das Teil beim Skalieren
  **behält** – `"w"`, `"d"`, `"h"` oder mehrere (`"wdh"`). Beine, Armlehnen, Platten und Griffe
  behalten so ihre Größe und ihren Abstand zur Kante des Möbels, die Teile dazwischen (Sitzfläche,
  Korpus) strecken sich. Je Achse gibt es damit eine feste Zone an jedem Ende und eine Mitte, die
  wächst; ein festes Teil in der Mitte bleibt mittig. Reicht der Platz für die festen Teile nicht
  (ein sehr schmales Möbel), skaliert alles wie früher.
- `parts` (max. 60): `box`, `cyl` oder `loft`. Alle Maße sind **Anteile der Möbelgröße**: `x`/`z`
  Mitte (−0,5 … 0,5, vorne ist +z), `w`/`d` Breite/Tiefe (0 … 1), `y` Unterkante und `h` Höhe (0 … 1
  der Höhe). Ein Zylinder hat den kleineren Wert von `w` und `d` als Durchmesser; mit `axis: "x"` oder
  `"z"` liegt er (Räder, Rollen – die Länge ist die Ausdehnung entlang der Achse, der Durchmesser der
  kleinere Wert aus Querausdehnung und `h`). Ein `loft` ist ein Quader, dessen Oberseite ein anderes
  Rechteck ist (`tx`/`tz` Mitte, `tw`/`td` Größe; Standard wie unten) – für schräge Flächen wie
  Motorhauben, Windschutzscheiben oder Lampenschirme.
  Ein Teil mit `rot` (Grad) ist um seine eigene Mitte um die Hochachse gedreht – für Wendeltreppen
  oder diagonale Streben; ein schmaler `loft` mit versetzter Oberseite ergibt eine schräge Stange
  (Handlauf).
- `color`: `#rrggbb` oder eine Rolle der eingebauten Palette (`body`, `fabric`, `cushion`, `wood`,
  `white`, `metal`, `dark`, `glass`, `plant`, `pot`, `accent`) – Rollen passen zum Look. `top` setzt
  eine eigene Farbe für die Oberseite, `edges` zeichnet leuchtende Kanten (`true`: dezent blau,
  `"glow"`: cyan wie die Wände, `"faint"`: sehr zart).
- `symbol` (optional, max. 40): Draufsicht im Plan aus `rect` (`fill` für gefüllt), `circle` (`r` als
  Anteil der kleineren Seite) und `line` (`x1`, `z1`, `x2`, `z2`). Ohne Symbol zeichnet der Plan die
  Teile von oben.
- `electric`: das Möbel lässt sich mit einem Schalter und Leistungssensor verknüpfen.
- `mount`: wo das Möbel sitzt – `floor` (Standard), `surface` (auf dem Möbel darunter, z. B.
  Kaffeemaschine auf der Arbeitsplatte), `wall` (Unterkante bei `wall_y` Metern, z. B. Wallbox) oder
  `ceiling` (hängt von der Decke, z. B. Dunstabzug, Pendelleuchten).
- `surface`: die Oberseite trägt andere Möbel (Tisch, Kücheninsel, Werkbank).
- `hole`: eine Treppe – reicht sie bis zur Etage darüber, schneidet sie dort die Treppenöffnung in den
  Boden (wie die eingebaute Treppe); die Stufen steigen von der Vorderkante (+z) nach hinten an.
- `light`: das Möbel ist eine Leuchte und wird mit einem Licht (oder Schalter) verknüpft. Der Wert sagt,
  wie das Licht den Raum ausleuchtet (`ceiling`, `pendant`, `floor`, `table`, `wall`, `spot`, `garden` …).
  Teile mit `"glow": true` leuchten in Farbe und Helligkeit des Lichts.
- `screen`: ein Teil mit `"screen": true` ist ein Bildschirm (Fernseher, Monitor). Das Möbel lässt sich
  dann mit einem Media Player verknüpfen; die Vorderseite (+z) zeigt die Farbe der laufenden App und
  ihr Bild, wie die eingebauten Fernseher.
- **Bibliothek** (optional, ab NeonPlan 1.23 – ältere Versionen lehnen Packs mit diesen Feldern ab,
  also die Mindestversion setzen): `group` sagt, was das Möbel ist (`sofa`, `seating`, `table`,
  `storage`, `bed`, `kitchen`, `appliance`, `bath`, `lamp`, `media`, `office`, `tech`, `heating`,
  `energy`, `household`, `deco`, `plant`, `outdoor`, `kids`, `sport`, `pets`, `vehicle`, `stairs`,
  `architecture`), `room` die Räume, für die es gedacht ist (`living`, `dining`, `kitchen`,
  `bedroom`, `kids`, `bath`, `office`, `hall`, `utility`, `garage`, `garden`, `hobby`; leer = überall),
  `tags` weitere Suchwörter. `family` fasst Varianten eines Möbels (ein Tisch in drei Längen) zu
  einer Karte zusammen, `variant` (Text je Sprache wie `name`) beschriftet den Chip der Variante.
  Ohne diese Felder ordnet NeonPlan das Möbel nach seinen Wörtern und dem Pack ein; Varianten
  erkennt es an der Größe am Ende der ID (`table_160`) und an den Zahlen im Namen.

## Feature-Namen

Ein Pack darf `features` tragen (z. B. `"features": ["weather"]`), wie ältere Pack-Dateien es tun. Das
schaltet nichts frei: Alle Funktionen, deren Code in diesem Repository liegt, sind ohnehin an.
