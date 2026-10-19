# Musik für Der Sommelier – das Radio

Jede Szene hat ihren eigenen „Radiosender“:
- **Gemischt:** Die Lieder einer Szene laufen in zufälliger Reihenfolge nacheinander. Ist die Liste durch, wird neu gemischt.
- **Weiterspielen wie im Radio:** Wechselst du die Szene und kommst zurück, läuft der Sender an der Stelle weiter, an der du warst.
- **Gestreamt:** Die Lieder werden nicht komplett in den Speicher geladen, daher sind auch lange Listen kein Problem.
- **Anzeige:** In der unteren Leiste steht „♪ Titel – Künstler (Lizenz)“. Damit ist auch die Namensnennung für CC-BY-Musik erfüllt.
- **Platzhalter:** Solange die Liste einer Szene leer ist, läuft dort der Chiptune-Platzhalter aus `js/audio.js`.

## So fügst du Lieder hinzu

1. Leg die MP3s mitsamt den Pixabay-Lizenzzertifikaten (`*-license.txt`) und den Infodateien (`*.rtf`, „Music by … from Pixabay“) in den passenden Ordner von `audio-inbox/`:
   `titel`, `level1` (Imbiss) … `level5` (Étoile), `game` (Minispiel) und `sounds` (Effekte).
2. Starte `.venv/bin/python tools/import_audio.py`. Das Skript macht Folgendes:
   - Es wandelt alles nach M4A um (96 kbit/s, gleiche Lautheit).
   - Es liest Titel und Künstler aus den Lizenz- und Infodateien.
   - Es kopiert die Lizenzen nach `licenses/`.
   - Es schreibt [`playlist.js`](playlist.js) neu.
3. Stimmt ein Name nicht, trag ihn in `ID_OVERRIDES` bzw. `UPLOADER_NAMES` im Skript ein und starte es noch einmal. Bereits umgewandelte Dateien werden dabei übersprungen.

`audio-inbox/`, `music/` und `sfx/` sind nicht im Repo (siehe Lizenzen unten). `playlist.js` und `licenses/` sind im Repo.

| Szene in `playlist.js` | Wo sie läuft | Stil-Idee |
|---|---|---|
| `title` | Titelbildschirm | ruhig, warm |
| `imbiss` | Imbiss „Zum Goldenen Gyros“ | griechisch, Bouzouki |
| `steakhaus` | Steakhaus „Black Angus“ | Country, Saloon, Americana |
| `gutbuergerlich` | Gasthaus „Zur Linde“ | Akkordeon, Volksmusik, Walzer |
| `gehoben` | Restaurant „Le Vignoble“ | Musette, Gypsy-Jazz, Chanson (instrumental) |
| `sterne` | Sterne-Restaurant „Étoile“ | Klassik, Streicher, Piano |
| `minigame` | Minispiel (Wein-Cowboy) | schneller Western, Chiptune |

## Format und Größe

- **`.m4a` (AAC) mit 96 kbit/s** reicht für Hintergrundmusik und läuft auf dem iPad am besten. Umwandeln auf dem Mac geht z. B. mit `afconvert -f m4af -d aac -b 96000 lied.wav lied.m4a`. `.mp3` geht auch.
- **Rechnung:** 25 Minuten pro Szene × 7 Szenen ≈ 125 MB in der App. Das ist in Ordnung, Apple warnt erst ab 200 MB beim Laden über Mobilfunk.
- **Lautstärke:** Normalisiere die Lieder auf etwa dieselbe Lautheit, sonst springt das Radio zwischen laut und leise.
- **Gesang:** Instrumentalstücke stören beim Lesen der Fragen weniger als Lieder mit Text.

## Lizenzen

- **CC0 und CC BY** sind problemlos. Bei CC BY gehört der Name in `artist` und die Lizenz in `license`, das Radio zeigt beides an. Trag die Lieder zusätzlich in die Credits der README und der App-Infos ein.
- **CC BY-NC** ist für die kostenlose App in Ordnung. Diese Lieder fallen dann aber **nicht** unter die CC-BY-Lizenz des Spiels. Das muss in der README stehen.
- **Ohne klare Lizenz** bitte nichts verwenden. Dazu zählt Musik von YouTube, aus „Royalty free“-Paketen, bei denen die App-Nutzung nicht geklärt ist, und KI-Musik aus kostenlosen Tarifen.

> **Testen:** Wenn du `index.html` direkt als Datei öffnest (`file://`), läuft die Musik zwar, aber das Einblenden geht nicht. Am besten testest du mit einem lokalen Server: `npx serve outputs/der-sommelier`. In der iPad-App funktioniert alles direkt.
