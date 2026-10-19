# Inhaltskorrekturen – zur Freigabe

So geht's: Alles mit `[x]` setze ich so um. Wenn du etwas **nicht** willst, mach daraus `[ ]`. Willst du eine andere Formulierung, schreib sie einfach unter den Punkt. Die Zeilennummern sind ungefähre Angaben, ersetzt wird anhand des Textes.

⚠️ = bitte selbst gegenprüfen, da bin ich mir nicht 100 % sicher.

---

## A. Eindeutig falsch

**1. [x] Imiglykos: Übersetzung** – `data.js:89-90`
- vorher: `Die "Mädchentraube" – lieblich, süffig, griechisch.` / `"Imiglykos" heißt wörtlich "halbtrocken" – obwohl er eher lieblich schmeckt!`
- nachher: `Lieblich, süffig, griechisch – aus der Agiorgitiko-Traube.` / `"Imiglykos" heißt wörtlich "halbsüß" – und genau so schmeckt er auch!`

**2. [x] Crémant: nicht überall in Frankreich** – `data.js:202`
- vorher: `Crémant darf überall in Frankreich produziert werden – nur nicht in der Champagne!`
- nachher: `Crémant gibt es aus 8 französischen Regionen – z.B. Elsass, Burgund, Loire – aber nie aus der Champagne!`

**3. [x] Chablis macht fast immer Malo** – `questions_lv3.js:439`
- vorher: `ein Chablis wird z.B. bewusst OHNE Malo ausgebaut, um die knackige Säure zu bewahren!`
- nachher: `viele deutsche Rieslinge werden z.B. bewusst OHNE Malo ausgebaut, um die knackige Säure zu bewahren!`

**4. [x] ww_3_3: „Kommt auf die Region an“ wäre eigentlich richtig** – `questions_lv3.js:356-362`
- Frage nachher: `Die Professorin testet dich: "Im Burgund gibt es Grand Cru und Premier Cru – was ist höher eingestuft?"`
- Option 4 nachher: `Kommt auf den Jahrgang an` (statt „Kommt auf die Region an“)
- Erklärung ergänzt um: ` Vorsicht: In Bordeaux gelten andere Regeln – dort ist z.B. "Premier Grand Cru Classé" die Spitze.`

**5. [x] Grand Cru gilt nicht überall** – `questions_lv3.js:272` (bw_3_1)
- vorher: `Es ist die höchste Klassifikation eines Weinbergs – der Boden und das Mikroklima bestimmen den Status, nicht die Reifezeit.`
- nachher: `Im Burgund, Elsass und in der Champagne ist es die höchste Klassifikation eines Weinbergs – Boden und Mikroklima bestimmen den Status, nicht die Reifezeit. (In Saint-Émilion ist "Grand Cru" dagegen eine breitere Qualitätsstufe.)`

**6. [x] ⚠️ Eiswein: −7 °C steht so nicht im deutschen Gesetz**
- Das Gesetz verlangt nur, dass die Trauben gefroren gelesen und gekeltert werden. −7 °C ist die Praxis-Faustregel. Kanada schreibt −8 °C gesetzlich vor.
- **bw_4_6** (`questions_lv4.js:236-238`) – Aussage nachher: `Der Michelin-Tester bemerkt beiläufig: "Eiswein-Trauben müssen gefroren am Stock hängen und gefroren gelesen werden – in der Praxis braucht es dafür minus sieben Grad oder kälter."` (bleibt `isCorrect: true`)
  - Korrektur nachher: `Exakt richtig! Gesetzlich vorgeschrieben ist, dass die Trauben gefroren gelesen und gepresst werden – dafür braucht es in der Praxis etwa -7°C oder kälter. Das Wasser bleibt als Eis in der Traube zurück, nur der hochkonzentrierte Saft wird gewonnen – daher die extreme Süße und Intensität.`
- **ww_4_3** (`questions_lv4.js:291-299`) – Frage nachher: `"Bei welcher Temperatur werden Eiswein-Trauben in der Praxis gelesen?"`, richtige Option: `Bei etwa minus 7°C oder kälter`
  - Erklärung nachher: `In der Praxis bei etwa -7°C oder kälter! Gesetzlich vorgeschrieben ist, dass die Trauben gefroren gelesen und gepresst werden (Kanada schreibt sogar -8°C vor). Das Wasser bleibt als Eis zurück, nur der konzentrierte Saft wird gepresst.`
- **funFact** (`data.js:305`) nachher: `Die Trauben müssen am Stock gefrieren – meist erst bei -7°C oder kälter. Ein riskantes Warten!`

**7. [x] Champagner: 15 Monate gesamt, davon 12 auf der Hefe**
- `questions_lv4.js:209` und `data.js:792`: `mindestens 15 Monate Hefelager` → `mindestens 15 Monate Reife (davon 12 auf der Hefe)`
- `questions_lv4.js:257`: `Gesetzlich sind mindestens 15 Monate Hefelager für Non-Vintage und 36 Monate für Vintage-Champagner vorgeschrieben.` → `Gesetzlich sind mindestens 15 Monate Reife für Non-Vintage (davon 12 auf der Hefe) und 3 Jahre für Vintage-Champagner vorgeschrieben.`
- `questions_lv4.js:390`: `(min. 15 Monate, oft 3+ Jahre)` → `(min. 12 Monate, oft 3+ Jahre)`

**8. [x] Rioja: Fass- vs. Gesamtreife**
- `questions_lv4.js:147`: `aber erst 12 Monate im Fass statt 60+ bei der Gran Reserva.` → `aber nur 12 Monate im Fass – die Gran Reserva hat 24 Monate Fass und 60 Monate Gesamtreife.`
- `questions_lv2.js:255`: `Gran Reserva = mind. 60 Monate (18 im Fass)` → `Gran Reserva = mind. 60 Monate (in Rioja 24 im Fass)`

**9. [x] Prädikate: Trockenbeerenauslese fehlt / Tafelwein** – `data.js:337, 339`
- `Tafelwein → Landwein → QbA → Prädikatswein` → `Deutscher Wein → Landwein → Qualitätswein (QbA) → Prädikatswein`
- `Kabinett, Spätlese, Auslese, Beerenauslese, Eiswein` → `Kabinett, Spätlese, Auslese, Beerenauslese, Trockenbeerenauslese, Eiswein`

**10. [x] Mendoza liegt nicht auf 3.000 m** – `data.js:419, 764`
- `in den Höhenlagen von Mendoza auf bis zu 3.000 Metern` → `in den Höhenlagen von Mendoza auf bis zu 2.000 Metern`
- `Weinberge auf bis zu 3.000m Höhe!` → `Weinberge auf bis zu 2.000m Höhe – im Norden (Salta) sogar über 3.000m!`
- Der Key-Fact „Höchste Weinberge der Welt (bis 3.000m)“ für Argentinien **bleibt**, denn das stimmt dank Salta.

**11. [x] Pinotage gibt es nicht „nur“ in Südafrika** – `data.js:431, 764`, `questions_lv3.js:373`
- `eine Rebsorte, die es nur hier gibt` → `eine Rebsorte, die hier erfunden wurde`
- `Das gibt es nur hier!` → `Südafrikas ganz eigene Rebsorte!`
- `Es gibt sie nur dort!` → `Sie ist bis heute Südafrikas Signature-Rebsorte!`

**12. [x] Eiswein „einzigartig deutsch“** – `questions_lv4.js:583`
- `Einzigartig deutsch, unglaublich selten` → `Eine große deutsche Tradition, unglaublich selten`
- `bei -7°C geerntete gefrorene Trauben` → `bei -7°C oder kälter geerntete gefrorene Trauben`

**13. [x] Eiswein ist golden** – `questions_lv4.js:720`
- `fehlen die Perlen, die goldene Farbe im Glas, das festliche Prickeln.` → `fehlen die Perlen und das festliche Prickeln.`

**14. [x] fp_3_2: Szenario widerspricht sich** – `questions_lv3.js:21, 25`
- Szenario nachher: `Madame Dupont bestellt mit ihrem typisch kritischen Blick: "Coq au Vin – heute in der Variante mit Weißwein. Und bitte keinen Riesling, den bekomme ich in Deutschland überall. Etwas Burgundisches!"`
- Option Spätlese: `kein Deutscher Wein.` → `keinen deutschen Wein.`

**15. [x] Riesling Spätlese ist lieblich, nicht halbtrocken** (so steht es auch in WINES)
- `questions_lv3.js:210`: `golden, duftend nach Pfirsich und Honig, halbtrocken.` → `golden, duftend nach Pfirsich und Honig, fruchtig-süß.`
- `questions_lv3.js:223`: `Halbtrocken und mittelschwer` → `Restsüß und mittelschwer`
- `questions_lv3.js:520`: `Halbtrocken mit lebendiger Säure` → `Fruchtsüß mit lebendiger Säure`
- `questions_lv3.js:528`: `Pfirsich + Honig + halbtrocken + lebendige Säure` → `Pfirsich + Honig + Restsüße + lebendige Säure`

**16. [x] ber_2_4: Gewürztraminer „aus dem Elsass“, im Spiel ist er aber deutsch** – `questions_lv2.js:548, 554`
- `Der Gewürztraminer aus dem Elsass hat die ideale Geschichte: Eine Rebsorte, die ihren Ursprung in Südtirol hat, im Elsass – der Grenzregion zwischen Deutschland und Frankreich – ihre Heimat fand.` → `Ein Pfälzer Gewürztraminer hat die ideale Geschichte: Der Name verweist auf Tramin in Südtirol, berühmt wurde die Rebsorte im Elsass – und die Pfalz liegt direkt an dieser Grenze zwischen Deutschland und Frankreich.`
- Summary: `Gewürztraminer aus dem Elsass verbindet` → `Ein Pfälzer Gewürztraminer – direkt an der Grenze zum Elsass – verbindet`

**17. [x] Primitivo ist trocken** – `questions_lv1.js:434, 442` (bt_1_1)
- `weiche Tannine und eine leichte Restsüße.` → `weiche Tannine und reife, fast süß wirkende Frucht.`
- `voller Körper und leichte Restsüße` → `voller Körper und fast marmeladige Frucht`

**18. [x] Körper-Liste passt nicht zu WINES** – `data.js:716`
- `wie Milch (leicht) vs. Sahne (voll)` → `wie Magermilch (leicht), Vollmilch (mittel) und Sahne (voll)`
- `<strong>Leicht</strong>: Müller-Thurgau, Vinho Verde, Lambrusco<br><strong>Mittel</strong>: Riesling, Chianti, Rosé` → `<strong>Leicht</strong>: Müller-Thurgau, Riesling, Lambrusco, Rosé<br><strong>Mittel</strong>: Chianti, Spätburgunder, Grüner Veltliner`
- Dazu passend `questions_lv1.js:373`: `von leicht (wie Wasser) bis voll/schwer (wie Milch)` → `von leicht (wie Magermilch) bis voll (wie Sahne)`

**19. [x] fp_1_8: Gast will „trocken“, Favorit ist halbtrocken** – `questions_lv1.js:82`
- `Und dazu einen Weißwein – trocken, nicht zu viel Alkohol.` → `Und dazu einen Weißwein – leicht und nicht zu viel Alkohol.`

**20. [x] fp_2_5: Gewürztraminer ist kein „leichter“ Weißwein** – `questions_lv2.js:52`
- `Sie wollen einen leichten Weißwein, der zum Vesper passt.` → `Sie wollen einen aromatischen Weißwein, der zum Vesper passt.`

---

## B. Irreführend oder widersprüchlich

**21. [x] Griechenland: 4.000 oder 6.000 Jahre?** – `data.js:358, 361`, `questions_lv0.js:266`
- Funde belegen Weinbau seit etwa 4.500 v. Chr., also mehr als 6.000 Jahre. Die Region-Texte auf `6.000` ändern.
- bw_0_12, Korrektur ergänzt um: ` Erfunden hat ihn aber wohl der Kaukasus – in Georgien wird seit rund 8.000 Jahren Wein gemacht!`

**22. [x] Gran Reserva „nur in großen Jahrgängen“ ist Tradition, kein Gesetz** – `data.js:323`
- `Gran Reserva wird nur in herausragenden Jahrgängen produziert!` → `Gran Reserva wird traditionell nur in herausragenden Jahrgängen produziert!`
- `questions_lv4.js:146, 197`: `nur in großen Jahrgängen` → `traditionell nur in großen Jahrgängen`

**23. [x] Châteauneuf: 13 Sorten sind nicht „einzigartig“** – `questions_lv4.js:243`
- `Das ist einzigartig in der Weinwelt."` → `Das ist für eine französische Appellation ungewöhnlich viel."`

**24. [x] Vinho Verde: Die Spritzigkeit ist heute meist zugesetzt** – `questions_lv2.js:313`
- `Die leichte Spritzigkeit kommt von natürlicher CO₂-Restgärung.` → `Die leichte Spritzigkeit kam früher von einer Nachgärung – heute wird meist etwas Kohlensäure zugesetzt.`

**25. [x] Sekt: Formulierung** – `questions_lv1.js:273`, `data.js:792`
- `Nein! Sekt ist ein deutsches Produkt und darf überall hergestellt werden.` → `Nein! "Sekt" ist keine geschützte Herkunft – Sekt darf auch außerhalb Deutschlands hergestellt werden (nur "Deutscher Sekt" muss aus deutschen Trauben sein).`
- `Sekt ist der deutsche Oberbegriff für Schaumwein.` → `Sekt ist die deutsche Bezeichnung für Qualitätsschaumwein.`

**26. [x] Gewürztraminer: Tramin ist Namensgeber, die Herkunft der Rebe ist umstritten**
- `data.js:166`: `dem Ursprungsort der Rebsorte.` → `– ob die Rebsorte wirklich dort entstanden ist, ist bis heute umstritten.`
- `questions_lv2.js:243`: `Von dort hat sich die Rebsorte über das Elsass, Deutschland und die ganze Welt verbreitet.` → `Ob die Rebsorte selbst dort entstanden ist, ist umstritten – berühmt wurde sie vor allem im Elsass und in Deutschland.`
- `questions_lv2.js:324`: `aber die Wiege liegt in Südtirol.` → `– der Name stammt aus Südtirol.`

**27. [x] bw_2_1: „Gewürz“ heißt nicht „Zimt/Glühwein“** – `questions_lv2.js:200-201`. Das dreht die Antwort von „stimmt“ auf „falsch“:
- `isCorrect: true` → `isCorrect: false`
- Korrektur nachher: `Nicht ganz! "Gewürz-" bedeutete früher "duftig, aromatisch" – typisch sind Litschi, Rosenblüte und höchstens ein Hauch Nelke. Mit Zimt und Glühwein hat er nichts zu tun. Und "Traminer" verweist auf den Ort Tramin in Südtirol.`

**28. [x] Chardonnay „meistangebaute weiße Rebsorte“** – `questions_lv1.js:309`
- `Chardonnay ist die meistangebaute weiße Rebsorte weltweit` → `Chardonnay ist eine der meistangebauten weißen Rebsorten weltweit (nur die spanische Airén kommt auf ähnlich viel Fläche)`

**29. [x] Tränen am Glas: vor allem Alkohol, Glycerin spielt kaum eine Rolle**
- `questions_lv1.js:404`: `Je mehr Alkohol und Glycerin im Wein` → `Je mehr Alkohol (und Restzucker) im Wein`
- `questions_lv4.js:327` (richtige Option): `Den Alkohol- und Glyceringehalt des Weins` → `Vor allem den Alkoholgehalt des Weins`
- `questions_lv4.js:332`: `Mehr Schlieren = mehr Alkohol und Glycerin` → `Mehr Schlieren = mehr Alkohol (oder Restzucker)`

**30. [x] Vanille ist ein Sekundäraroma (aus dem Holz), kein Tertiäraroma** – `data.js:784`
- `Von der Gärung – Hefe, Butter, Brioche` → `Von Gärung und Ausbau – Hefe, Butter, Brioche, Vanille (Holzfass)`
- `Von der Reifung – Leder, Tabak, Nüsse, Vanille` → `Von der Reifung – Leder, Tabak, Nüsse, Pilze`

**31. [x] Amarone: einheitlich formulieren**
- `data.js:296`: `auf Strohmatten getrocknet` → `auf Schilf- oder Bambusgestellen (Arele) getrocknet`
- `questions_lv4.js:651`: `Monate auf Rosinenbetten gereift` → `monatelang getrocknet, bevor sie gepresst werden`
- Die übrigen Stellen mit „Bambusmatten (Arele)“ passen und bleiben.

**32. [x] Malbec ist „eine der dunkelsten“, nicht „die dunkelste“** – `questions_lv3.js:230`
- `Die dunkelste Farbe aller Rotweine` → `Eine der dunkelsten Farben aller Rotweine`

**33. [x] Rivaner ist nicht der österreichische Name** – `questions_lv0.js:383`
- `In Österreich heißt sie übrigens "Rivaner"!` → `In Luxemburg und oft auch bei uns heißt sie übrigens "Rivaner"!`

**34. [x] Zweigelt stammt nicht aus dem Burgenland** – `data.js:375`
- `Burgenland: Heimat von Zweigelt und Blaufränkisch` → `Burgenland: Rotwein-Hochburg mit Blaufränkisch und Zweigelt`

**35. [x] Restzucker-Grenzen als „vereinfacht“ kennzeichnen** – `data.js:682`, `questions_lv0.js:323, 373`, `questions_lv2.js:334`
- jeweils `(unter 9 g/l)` → `(vereinfacht: bis 9 g/l)` und `(bis 18 g/l)` → `(vereinfacht: bis 18 g/l)`. Die genauen EU-Regeln hängen von der Säure ab und wären zu kompliziert fürs Spiel.

---

## Aus dem Fact-Check gestrichen (stimmt so)
- **Argentinien „Höchste Weinberge der Welt (bis 3.000 m)“:** Das stimmt, und zwar wegen der Weinberge in Salta.
- **Amarone „Bambusmatten (Arele)“:** Arele sind tatsächlich traditionelle Trockengestelle aus Schilf bzw. Bambus.
