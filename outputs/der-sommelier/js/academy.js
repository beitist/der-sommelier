// ============================================================
// DER SOMMELIER — Akademie (Madame Céline Duvin), Chef-Weinvorstellungen,
// Schichtplan und Wein-Tags für Wissensfragen
// ------------------------------------------------------------
// ACADEMY[levelId]        = ein Akademie-Tag vor jedem Restaurant (4 Lektionen)
//   exercise.type 'choice' = Frage mit Optionen
//   exercise.type 'label'  = Frage zu einem (fiktiven) Etikett
// CHEF_WINE_INTROS[wineId] = der Chef stellt den Wein vor (vor Schicht 1–3)
// SHIFT_PLAN[levelId]      = welche Weine vor Schicht 1/2/3 vorgestellt werden
// CHEF_SHIFT_LINES[levelId]= Spruch des Chefs zum Schichtbeginn 1/2/3
// FACT_WINE_TAGS[qId]      = Wissensfrage gehört zu diesem Wein (erst nach Vorstellung)
// Alle Erzeuger, Lagen und Weinnamen auf den Etiketten sind frei erfunden.
// ============================================================

const ACADEMY = {
  // ---------------------------------------------------------- TAG 1
  imbiss: {
    title: 'Akademie-Tag 1: Was ist eine Empfehlung?',
    intro: 'Bonjour! Ich bin Madame Céline Duvin, und ich mache Sommeliers aus Ihnen – ob Sie wollen oder nicht. Morgen stehen Sie bei Kostas im Imbiss "Zum Goldenen Gyros". Dort lernen Sie das Wichtigste überhaupt: zuhören. Alors, setzen Sie sich.',
    lessons: [
      {
        id: 'ak_0_1', title: 'Was eine Empfehlung ist',
        text: 'Alors, eine wahre Geschichte. Ein Gast bestellt sechs Austern mit Zitrone und fragt: "Welcher Wein passt dazu?" Der junge Kellner strahlt und empfiehlt einen Amarone – 16 %, Rosinen, Schokolade, Pflaume. "Das ist mein Lieblingswein! Und der Chef hat noch drei Kisten im Keller." … Die Austern haben geweint. Der Gast auch.<br><br><strong>Sie empfehlen nicht, was SIE mögen – und auch nicht, was weg muss. Sie empfehlen, was DIESER Gast zu DIESEM Gericht braucht.</strong>',
        exercise: {
          type: 'choice',
          question: 'Was hätte der junge Kellner zu den Austern empfehlen sollen?',
          options: [
            { text: 'Einen frischen, trockenen Weißwein – zum Beispiel einen Riesling trocken', correct: true,
              feedback: 'Bien. Austern sind zart, salzig, nach Meer. Sie brauchen Frische und Säure – wie der Spritzer Zitrone. Keinen Schokoladenkuchen im Glas.' },
            { text: 'Trotzdem den Amarone – wenn er von Herzen kommt, schmeckt der Gast das', correct: false,
              feedback: 'Non, non, non. Begeisterung ist schön, aber der Gast trinkt den Wein, nicht Ihr Herz. 16 % und Rosinen erschlagen jede Auster.' },
            { text: 'Den Wein, von dem am meisten im Keller liegt', correct: false,
              feedback: 'Dann sind Sie Lagerverwalter, nicht Sommelier. Der Keller ist nicht Ihr Problem – der Gast ist es.' },
            { text: 'Den teuersten Wein der Karte – teuer ist nie falsch', correct: false,
              feedback: 'Teuer ist nur teuer. Ein Wein für 200 € kann zum Gericht genauso falsch sein wie einer für 8 €.' },
          ]
        }
      },
      {
        id: 'ak_0_2', title: 'Rot, Weiß, Rosé',
        text: 'Die Farbe steckt in der <strong>Schale</strong>, nicht im Saft – auch rote Trauben haben fast immer hellen Saft. <strong>Rotwein</strong> gärt tagelang mit den Schalen: Farbe, Tannin, Kraft. <strong>Weißwein</strong> wird sofort abgepresst – darum kann man ihn sogar aus roten Trauben machen. Und <strong>Rosé</strong>? Rote Trauben, nur kurzer Schalenkontakt, oft nur einige Stunden. Gemischt wird er nicht: Rot und Weiß zusammenkippen ist bei Stillwein in der EU verboten – Ausnahme Schaumwein, etwa Rosé-Champagner.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast behauptet: "Rosé ist doch nur Rotwein, den man mit Weißwein verdünnt hat." Was antworten Sie?',
          options: [
            { text: '"Rosé entsteht aus roten Trauben mit kurzem Schalenkontakt – mischen ist bei Stillwein in der EU sogar verboten."', correct: true,
              feedback: 'Bien. Kurz, höflich, richtig. Und lächeln Sie dabei – der Gast soll etwas lernen, nicht sich schämen.' },
            { text: '"Stimmt, deshalb ist Rosé auch immer billiger."', correct: false,
              feedback: 'Non. Erstens falsch, zweitens gibt es Rosés, die mehr kosten als Ihr Fahrrad.' },
            { text: '"Nein, Rosé wird aus rosa Trauben gemacht."', correct: false,
              feedback: 'Rosa Trauben? Charmant – aber nein. Es sind rote Trauben, die nur kurz mit ihrer Schale in Berührung kommen.' },
            { text: '"Nein, da kommt Rote-Bete-Saft rein."', correct: false,
              feedback: 'Mon Dieu. Bitte sagen Sie das niemals laut in einem Restaurant.' },
          ]
        }
      },
      {
        id: 'ak_0_3', title: 'Trocken bis süß',
        text: '"Trocken" hat nichts mit Alkohol zu tun – und nichts mit dem Gefühl im Mund. Es geht um <strong>Restzucker</strong>: den Zucker, den die Hefe nicht vergoren hat. Vereinfacht gesagt: <strong>trocken</strong> bis 4 g/l (mit genug Säure bis 9 g/l), <strong>halbtrocken</strong> bis 12 g/l (bzw. 18 g/l), <strong>lieblich</strong> bis 45 g/l, darüber <strong>süß</strong>. Und das Schöne: Meistens steht es auf dem Etikett. Lesen Sie es!',
        exercise: {
          type: 'label',
          label: { producer: 'Weingut Rebenhain', wine: 'Müller-Thurgau', region: 'Rheinhessen', quality: 'Qualitätswein', vintage: '2024', sweetness: 'lieblich', alcohol: '10,0 % vol' },
          question: 'Ein Gast sagt: "Bloß nichts Süßes!" Passt dieser Wein?',
          options: [
            { text: 'Ja – Müller-Thurgau ist immer trocken', correct: false,
              feedback: 'Non. Die Rebsorte sagt nicht, wie süß ein Wein ausgebaut ist. Das Etikett schon.' },
            { text: 'Nein – "lieblich" bedeutet deutlich spürbare Süße', correct: true,
              feedback: 'Bien. Sie haben gelesen, statt zu raten. Genau so.' },
            { text: 'Ja – 10 % Alkohol ist wenig, also ist er nicht süß', correct: false,
              feedback: 'Umgekehrt wird ein Schuh draus: Wenig Alkohol heißt oft, dass Zucker übrig geblieben ist.' },
            { text: 'Das kann man ohne Probieren nicht wissen', correct: false,
              feedback: 'Doch, kann man. Es steht da – schwarz auf weiß. Ein Sommelier liest.' },
          ]
        }
      },
      {
        id: 'ak_0_4', title: 'Die erste Pairing-Regel',
        text: 'Stellen Sie sich eine Waage vor: auf der einen Seite das Essen, auf der anderen der Wein. <strong>Leicht zu leicht, kräftig zu kräftig.</strong> Ein zarter Salat verschwindet unter einem schweren Rotwein. Ein fettes Grillsteak macht aus einem zarten Weißwein Wasser. Erst danach fragen Sie: Was mag der Gast? Voilà – das ist schon die halbe Miete.',
        exercise: {
          type: 'choice',
          question: 'Ein Bauarbeiter bestellt den XXL-Gyrosteller mit Pommes und doppelt Tzatziki. Welcher Weinstil hält da mit?',
          options: [
            { text: 'Ein ganz leichter, blumiger Weißwein', correct: false,
              feedback: 'Der wird von diesem Teller einfach überrollt. Zu leicht für so viel Kraft.' },
            { text: 'Ein fruchtiger Rotwein mit etwas Körper', correct: true,
              feedback: 'Bien. Kräftiger Teller, Wein mit Substanz – die Waage stimmt.' },
            { text: 'Ein edelsüßer Dessertwein', correct: false,
              feedback: 'Zum Gyros? Non. Den heben Sie sich für den Nachtisch auf.' },
            { text: 'Egal – im Imbiss passt jeder Wein', correct: false,
              feedback: 'Non, non, non. Auch der Gast im Imbiss verdient eine echte Empfehlung. Gerade der.' },
          ]
        }
      },
    ],
    outro: 'Voilà, genug Theorie. Kostas wartet mit seinem Gyros – und mit Gästen, die Ihnen vertrauen werden. Hören Sie zu, bevor Sie empfehlen.'
  },

  // ---------------------------------------------------------- TAG 2
  steakhaus: {
    title: 'Akademie-Tag 2: Rebsorten & Charakter',
    intro: 'Bonjour, mes élèves! Kostas hat angerufen – er ist zufrieden, und das will etwas heißen. Als Nächstes geht es ins Steakhaus "Black Angus" zu Mike. Dort wollen die Gäste wissen, WARUM ein Wein zum Steak passt. Also lernen wir heute, woher ein Wein seinen Charakter hat.',
    lessons: [
      {
        id: 'ak_1_1', title: 'Rebsorte = DNA',
        text: 'Jede Rebsorte hat einen Charakter, wie ein Mensch. <strong>Riesling</strong>: viel Säure, Zitrus, Apfel. <strong>Primitivo</strong>: dunkle Frucht, warm, kräftig. <strong>Pinot Noir</strong>: hell, elegant, Kirsche. Das Verwirrende: Viele Trauben tragen mehrere Namen. <strong>Spätburgunder = Pinot Noir = Pinot Nero = Blauburgunder.</strong> Grauburgunder = Pinot Grigio = Pinot Gris, Primitivo = Zinfandel. Wer die Synonyme kennt, findet sich auf jeder Karte zurecht.',
        exercise: {
          type: 'choice',
          question: 'Auf einer Karte steht "Pinot Nero, Südtirol". Der Gast fragt, was das ist. Was sagen Sie?',
          options: [
            { text: '"Das ist dieselbe Traube wie unser Spätburgunder – eher elegant, mit roter Frucht."', correct: true,
              feedback: 'Bien. Name übersetzt, Charakter erklärt. Der Gast weiß jetzt, was ihn erwartet.' },
            { text: '"Ein schwarzer, sehr schwerer Wein – nero heißt ja schwarz."', correct: false,
              feedback: 'Charmant, aber falsch. "Nero" meint die Farbe der Traube, nicht das Gewicht. Pinot ist eher zart.' },
            { text: '"Eine Mischung aus Pinot Grigio und Rotwein."', correct: false,
              feedback: 'Non. Pinot Nero ist eine eigene Rebsorte – genau die, die bei uns Spätburgunder heißt.' },
            { text: '"Keine Ahnung, irgendeine italienische Spezialität."', correct: false,
              feedback: 'Ehrlich ist gut – aber diese hier müssen Sie kennen. Pinot Nero = Pinot Noir = Spätburgunder.' },
          ]
        }
      },
      {
        id: 'ak_1_2', title: 'Klima: kühl oder warm',
        text: 'Sonne macht Zucker, Zucker macht Alkohol. Darum: <strong>Kühles Klima</strong> – Mosel, Loire, Burgund – gibt mehr Säure, weniger Alkohol, schlankere Weine. <strong>Warmes Klima</strong> – Apulien, Mendoza, Südspanien – gibt reife, dunkle Frucht, mehr Alkohol, mehr Körper und weniger Säure. Ein Pinot Noir aus Baden ist zarter als einer aus Kalifornien. Die Traube ist die DNA – das Klima ist die Erziehung. Fragen Sie also immer: Woher kommt der Wein?',
        exercise: {
          type: 'choice',
          question: 'Zwei Chardonnays: einer aus einem kühlen Tal, einer aus einer heißen Gegend. Was erwarten Sie vom Wein aus dem warmen Klima?',
          options: [
            { text: 'Mehr Alkohol, reifere Frucht, weniger Säure', correct: true,
              feedback: 'Bien. Mehr Sonne, mehr Zucker in der Traube – mehr Alkohol im Glas.' },
            { text: 'Mehr Säure und weniger Alkohol', correct: false,
              feedback: 'Genau umgekehrt. Säure ist das Geschenk der Kühle.' },
            { text: 'Kein Unterschied – Chardonnay ist Chardonnay', correct: false,
              feedback: 'Non, non, non. Gleiche DNA, andere Erziehung – das schmeckt man.' },
            { text: 'Er wird automatisch süß', correct: false,
              feedback: 'Nicht automatisch. Der Zucker wird vergoren – meistens zu Alkohol, nicht zu Süße im Glas.' },
          ]
        }
      },
      {
        id: 'ak_1_3', title: 'Körper & Tannin',
        text: '<strong>Körper</strong> ist das Gewicht im Mund: Magermilch, Vollmilch, Sahne – leicht, mittel, voll. Mehr Alkohol und mehr Extrakt bedeuten mehr Körper. <strong>Tannin</strong> ist etwas anderes: dieses pelzige, trocknende Gefühl am Zahnfleisch, wie bei zu lange gezogenem schwarzem Tee. Es kommt aus Schalen, Kernen und Stielen – darum hat vor allem Rotwein Tannin. Und das Schöne beim Steak: Fett und Eiweiß machen Tannine weicher. Darum lieben Steaks kräftige Rote.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast sagt: "Der Wein macht meinen Mund ganz trocken und pelzig." Was spürt er?',
          options: [
            { text: 'Tannin', correct: true,
              feedback: 'Bien. Tannin ist ein Gefühl, kein Geschmack. Gut erkannt.' },
            { text: 'Säure', correct: false,
              feedback: 'Säure lässt das Wasser im Mund zusammenlaufen – das Gegenteil von trocken. Pelzig ist Tannin.' },
            { text: 'Wenig Restzucker – der Wein ist eben "trocken"', correct: false,
              feedback: 'Ah, die berühmte Verwechslung! "Trocken" auf dem Etikett heißt wenig Zucker. Das pelzige Gefühl ist Tannin.' },
            { text: 'Zu viel Alkohol', correct: false,
              feedback: 'Alkohol wärmt, vielleicht brennt er sogar – aber pelzig macht er nicht. Das ist Tannin.' },
          ]
        }
      },
      {
        id: 'ak_1_4', title: 'Etikett lesen I',
        text: 'Ein Etikett ist ein Steckbrief, kein Kunstwerk. Suchen Sie vier Dinge: <strong>Rebsorte</strong> (DNA), <strong>Herkunft</strong> (Klima), <strong>Alkohol</strong> und <strong>Süße</strong>. Für den Alkohol gibt es eine Faustregel – wirklich nur eine Faustregel: unter 11,5 % eher leicht, 12–13,5 % mittel, <strong>über 13,5 % meist kräftiger Körper</strong>. Ausnahme süße Weine: Da gibt der Zucker den Körper. Steht "trocken" oder "halbtrocken" drauf, lesen Sie es mit. Fehlt die Angabe, etwa bei vielen Weinen aus Italien, Frankreich oder Spanien, ist der Wein meistens trocken.',
        exercise: {
          type: 'label',
          label: { producer: 'Masseria Collefosco', wine: 'Primitivo', region: 'Apulien, Italien', vintage: '2021', alcohol: '14,5 % vol' },
          question: 'Was erwarten Sie: Welchen Körper hat dieser Wein?',
          options: [
            { text: 'Leicht und spritzig – ein Sommerwein', correct: false,
              feedback: 'Mit 14,5 % aus dem heißen Süden? Non. Das ist kein Sommerwein, das ist ein Schwergewicht.' },
            { text: 'Mittel – genauer kann man das nicht sagen', correct: false,
              feedback: 'Doch, man kann. Rebsorte, Klima und Alkohol zeigen alle in dieselbe Richtung.' },
            { text: 'Voll und kräftig – Primitivo, warmes Klima, 14,5 %', correct: true,
              feedback: 'Bien. Drei Hinweise, eine Antwort. Das ist ein Wein für Steak.' },
            { text: 'Süß – weil so viel Alkohol drin ist', correct: false,
              feedback: 'Viel Alkohol heißt: Der Zucker wurde vergoren. Süß wird der Wein dadurch nicht.' },
          ]
        }
      },
    ],
    outro: 'Bien. Jetzt wissen Sie, warum ein Wein schmeckt, wie er schmeckt. Mike wirft schon den Grill an – zeigen Sie ihm, dass zum Steak nicht einfach "irgendein Roter" gehört.'
  },

  // ---------------------------------------------------------- TAG 3
  gutbuergerlich: {
    title: 'Akademie-Tag 3: Wein & Essen',
    intro: 'Bonjour! Heute wird gekocht – zumindest im Kopf. Im Gasthaus "Zur Linde" bei Frau Lindner gibt es Schnitzel, Braten, Spargel und Vesper. Wer dort besteht, kann Wein und Essen verheiraten. Und ein Gespräch führen.',
    lessons: [
      {
        id: 'ak_2_1', title: 'Ergänzen, Kontrastieren, Regional',
        text: 'Drei Wege führen zum Glück. <strong>Ergänzen</strong>: Gleiches zu Gleichem – ein cremiger Wein zur cremigen Sauce. <strong>Kontrastieren</strong>: Gegensätze – frische Säure gegen das fette Schnitzel, ein süßer Wein zum salzigen Blauschimmelkäse. <strong>Regional</strong>: Was zusammen wächst, passt zusammen – Chianti zur Tomatenpasta, Grüner Veltliner zum Wiener Schnitzel. Keiner dieser Wege ist der einzig richtige. Aber Sie sollten immer wissen, welchen Sie gerade gehen.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt Roquefort, und Sie empfehlen einen edelsüßen Wein dazu. Welchen Weg gehen Sie?',
          options: [
            { text: 'Kontrast – süß gegen salzig', correct: true,
              feedback: 'Bien. Salz und Süße sind ein altes Liebespaar.' },
            { text: 'Ergänzen – beide sind süß', correct: false,
              feedback: 'Roquefort und süß? Probieren Sie ihn mal. Der Käse ist salzig und würzig – die Süße ist sein Gegenpol.' },
            { text: 'Regional – das ist ja beides französisch', correct: false,
              feedback: 'Französisch ist halb Europa auf der Karte. Was hier wirkt, ist der Gegensatz: Salz trifft Süße.' },
            { text: 'Gar keinen – Käse und Wein passen nie', correct: false,
              feedback: 'Non, non, non. Käse und Wein ist eines der schönsten Kapitel. Man muss es nur richtig lesen.' },
          ]
        }
      },
      {
        id: 'ak_2_2', title: 'Gewicht, Fett, Säure, Schärfe, Salz',
        text: 'Fünf Dinge im Essen prüfen Sie sofort. <strong>Gewicht</strong>: leicht zu leicht, schwer zu schwer. <strong>Fett</strong>: braucht Säure, die schneidet – oder Tannin. <strong>Säure</strong> im Essen (Zitrone, Tomate, Essig): Der Wein braucht mindestens genauso viel, sonst wirkt er flach. <strong>Schärfe</strong>: Alkohol und Tannin machen sie heißer – Restsüße und wenig Alkohol löschen. <strong>Salz</strong>: liebt Frische, Süße und Bläschen.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt ein scharfes Thai-Curry. Welcher Wein macht es NICHT schlimmer?',
          options: [
            { text: 'Ein halbtrockener, aromatischer Weißwein mit moderatem Alkohol', correct: true,
              feedback: 'Bien. Die Restsüße kühlt, die Aromen tanzen mit dem Curry. Der Gewürztraminer lässt grüßen.' },
            { text: 'Ein kraftvoller Rotwein mit 15 % Alkohol', correct: false,
              feedback: 'Dann brennt der Gast. Alkohol ist Öl ins Feuer der Schärfe.' },
            { text: 'Ein junger, tanninreicher Rotwein', correct: false,
              feedback: 'Tannin und Chili zusammen – das wird bitter und heiß. Dieser Gast fragt Sie nie wieder.' },
            { text: 'Ein Weißwein mit viel Barrique-Holz', correct: false,
              feedback: 'Holz und Schärfe machen sich gegenseitig laut. Bei Chili lieber frisch, fruchtig, ein wenig süß.' },
          ]
        }
      },
      {
        id: 'ak_2_3', title: 'Die richtigen Fragen stellen',
        text: 'Ein guter Sommelier redet weniger, als Sie denken. Er fragt. Zuerst: <strong>Was essen Sie?</strong> Dann: <strong>Was trinken Sie gern</strong> – rot oder weiß, eher frisch oder eher kräftig? Und: <strong>Was ist der Anlass?</strong> Ein Geschäftsessen ist kein Hochzeitstag. Den Preis fragen Sie nicht als Erstes – zeigen Sie lieber diskret auf zwei, drei Weine in verschiedenen Preislagen und lassen Sie den Gast wählen. Voilà: Niemand muss sich schämen.',
        exercise: {
          type: 'choice',
          question: 'Ein älteres Paar setzt sich und bittet Sie um Rat beim Wein. Was ist Ihre erste Frage?',
          options: [
            { text: '"Was darf es denn heute bei Ihnen zu essen sein?"', correct: true,
              feedback: 'Bien. Erst das Gericht, dann der Wein. Immer in dieser Reihenfolge.' },
            { text: '"Wie viel möchten Sie ausgeben?"', correct: false,
              feedback: 'Non. So beginnt ein Verkaufsgespräch, keine Beratung. Den Preis klären Sie später – und diskret.' },
            { text: '"Ich empfehle Ihnen unseren Rioja – das ist mein Favorit."', correct: false,
              feedback: 'Ah, der Amarone-Kellner ist zurück! Erst fragen, dann empfehlen.' },
            { text: '"Möchten Sie nicht lieber ein Bier?"', correct: false,
              feedback: 'Sie geben auf, bevor Sie angefangen haben? Non, non, non.' },
          ]
        }
      },
      {
        id: 'ak_2_4', title: 'Die kleine Karte',
        text: 'Jetzt die Wahrheit: Die meisten Restaurants haben keine 300 Weine. Sie haben sechs. Meistens die, die der Chef günstig bekommen hat – oder selbst gern trinkt. Ein Riesling, ein Grauburgunder, ein Rosé, ein Dornfelder, ein Primitivo, ein Sekt. <strong>Ihre Kunst ist, aus diesen sechs das Beste zu machen.</strong> Nicht der perfekte Wein der Welt – der beste Wein auf DIESER Karte für DIESEN Gast.',
        exercise: {
          type: 'choice',
          question: 'Die Karte: Riesling trocken · Grauburgunder · Rosé trocken · Dornfelder halbtrocken · Primitivo · Sekt. Ein Gast bestellt ein scharfes Chili con Carne. Was nehmen Sie?',
          options: [
            { text: 'Dornfelder halbtrocken', correct: true,
              feedback: 'Bien. Genug Frucht und Körper für Fleisch und Bohnen, ein Hauch Süße gegen die Schärfe, moderater Alkohol. Perfekt? Vielleicht nicht. Aber das Beste auf dieser Karte.' },
            { text: 'Primitivo', correct: false,
              feedback: 'Kräftig zu kräftig – gut gedacht. Aber 14 % und mehr auf Chili? Das brennt. Hier verliert die Regel gegen die Schärfe.' },
            { text: 'Riesling trocken', correct: false,
              feedback: 'Zu schlank für diesen kräftigen Topf. Hackfleisch, Bohnen und Chili überrollen ihn.' },
            { text: 'Sekt', correct: false,
              feedback: 'Die Bläschen kitzeln die Schärfe nur noch mehr – und gegen Hackfleisch und Bohnen ist er zu zart.' },
          ]
        }
      },
    ],
    outro: 'Bien. Sie können jetzt fragen, abwägen und aus wenig viel machen. Frau Lindner hat einen vollen Saal – und einen Stammtisch, der alles besser weiß. Bonne chance!'
  },

  // ---------------------------------------------------------- TAG 4
  gehoben: {
    title: 'Akademie-Tag 4: Terroir & Weinbereitung',
    intro: 'Bonjour. Heute wird es ernst. Im "Le Vignoble" bei Monsieur Laurent sitzen Gäste, die ein Etikett schneller lesen als Sie. Also lernen wir, was hinter einem Wein steckt: Boden, Keller, Etikett – und eine Methode für den Tag, an dem Sie einen Wein noch nie gesehen haben.',
    lessons: [
      {
        id: 'ak_3_1', title: 'Terroir',
        text: '<strong>Terroir</strong> – das Wort, mit dem wir Franzosen sehr viel erklären. Es meint das Zusammenspiel von <strong>Boden, Klima und Lage</strong> – und dem Menschen, der dort arbeitet. Ein steiler Südhang an der Mosel fängt mehr Sonne als der Nordhang gegenüber. Kalkboden gibt oft straffe, mineralische Weine, wie in Chablis. Dieselbe Traube, drei Kilometer weiter – ein anderer Wein. Darum kosten manche Lagen ein Vermögen.',
        exercise: {
          type: 'choice',
          question: 'Welche Aussage über Terroir stimmt?',
          options: [
            { text: 'Boden, Klima, Lage und Mensch prägen gemeinsam den Charakter eines Weins', correct: true,
              feedback: 'Bien. Terroir ist ein Zusammenspiel, kein einzelner Faktor.' },
            { text: 'Terroir ist einfach der Bodentyp', correct: false,
              feedback: 'Der Boden ist wichtig – aber ohne Klima und Lage erzählt er nur die halbe Geschichte.' },
            { text: 'Terroir ist das französische Wort für Barrique', correct: false,
              feedback: 'Non. Das Fass gehört in den Keller. Terroir ist draußen im Weinberg.' },
            { text: 'Terroir gibt es nur in Frankreich', correct: false,
              feedback: 'Das Wort ist französisch, die Idee nicht. Mosel, Wachau, Mendoza – überall gibt es Terroir.' },
          ]
        }
      },
      {
        id: 'ak_3_2', title: 'Ausbau: Stahl, Holz, Reife',
        text: 'Nach der Gärung entscheidet der Winzer: Wohin mit dem Wein? Im <strong>Edelstahltank</strong> bleibt er frisch, klar, fruchtig – pure Traube. Im <strong>Holzfass</strong>, besonders im kleinen, neuen <strong>Barrique</strong> (225 Liter), bekommt er Vanille, Toast, Rauch – und durch etwas Sauerstoff weichere Tannine. Dazu die <strong>Malolaktik</strong>: Herbe Apfelsäure wird zu milder Milchsäure, der Wein wird runder, manchmal leicht buttrig – auch Chablis macht sie meistens, ganz ohne Holz. Und die <strong>Reife</strong>: Manche Weine wollen jung getrunken werden, andere brauchen Jahre.',
        exercise: {
          type: 'choice',
          question: 'Ein Weißwein duftet nach Vanille, Toast und ein wenig Butter. Was ist wahrscheinlich im Keller passiert?',
          options: [
            { text: 'Ausbau im Barrique, dazu Malolaktik', correct: true,
              feedback: 'Bien. Vanille und Toast vom Holz, Butter von der Malolaktik. Sie lesen den Keller.' },
            { text: 'Ausbau im Edelstahltank – der macht cremig', correct: false,
              feedback: 'Der Stahltank fügt nichts hinzu – genau das ist sein Sinn. Vanille kommt vom Holz.' },
            { text: 'Es wurden Vanilleschoten zugegeben', correct: false,
              feedback: 'Mon Dieu, non! Das wäre verboten. Das Aroma stammt aus dem getoasteten Eichenholz.' },
            { text: 'Die Trauben hatten besonders viel Sonne', correct: false,
              feedback: 'Sonne gibt reife Frucht und Alkohol. Vanille und Toast stammen aus dem Keller.' },
          ]
        }
      },
      {
        id: 'ak_3_3', title: 'Etikett lesen II',
        text: 'In Deutschland gibt es eine Treppe: <strong>Deutscher Wein → Landwein → Qualitätswein → Prädikatswein.</strong> Oben die Prädikate: <strong>Kabinett, Spätlese, Auslese, Beerenauslese, Trockenbeerenauslese</strong> – und der <strong>Eiswein</strong>, gefroren gelesen und gefroren gekeltert. Wichtig: Das Prädikat sagt, wie <strong>reif</strong> die Trauben bei der Lese waren – nicht automatisch, wie süß der Wein ist. Eine Spätlese kann trocken sein! Dazu Lage und Jahrgang. Und Vorsicht bei <strong>Grand Cru</strong>: Im Burgund ist das die höchste Lage, in Saint-Émilion eine Appellation mit strengeren Regeln – die Châteaux werden dort noch einmal extra klassifiziert.',
        exercise: {
          type: 'label',
          label: { producer: 'Weingut Kranzberger', wine: 'Riesling Auslese', region: 'Mosel · Wehlsteiner Himmelsleiter', quality: 'Prädikatswein', vintage: '2019', alcohol: '8,0 % vol' },
          question: 'Kein Wort von "süß" auf dem Etikett. Was erwarten Sie?',
          options: [
            { text: 'Sehr reif gelesene Trauben – und bei nur 8 % Alkohol eine deutliche Restsüße', correct: true,
              feedback: 'Bien. "Auslese" sagt: sehr reif gelesen. 8 % sagen: Viel Zucker wurde nicht vergoren. Zwei Hinweise, ein Bild.' },
            { text: 'Trocken – sonst stünde "süß" drauf', correct: false,
              feedback: 'Bei Prädikatsweinen fehlt die Angabe oft. Lesen Sie den Alkohol: 8 % – da ist viel Zucker übrig.' },
            { text: '"Auslese" heißt: Der Winzer hat seine besten Fässer ausgewählt', correct: false,
              feedback: 'Ausgelesen wird im Weinberg, nicht im Keller – nämlich besonders reife Trauben.' },
            { text: 'Ein kräftiger, alkoholreicher Wein', correct: false,
              feedback: '8 % sind leicht wie eine Feder. Die Fülle kommt hier vom Zucker, nicht vom Alkohol.' },
          ]
        }
      },
      {
        id: 'ak_3_4', title: 'Unbekannter Wein? Die Einordnungs-Methode',
        text: 'In drei Jahren stehen Sie vor einer Karte voller Weine, die Sie nie gesehen haben. Das ist normal. Sie müssen nicht alle Weine kennen – Sie müssen jeden <strong>einordnen</strong> können. Dafür der Steckbrief mit fünf Achsen: <strong>Farbe · Süße · Körper · Säure · Tannin</strong>, dazu eine <strong>Aromafamilie</strong> (zitrisch-frisch, rote Frucht, dunkle Frucht, würzig, Holz & Reife …). Die Rebsorte liefert die DNA, die Herkunft das Klima, das Etikett Alkohol und Süße. Voilà – plötzlich kennen Sie einen Wein, den Sie nie probiert haben.',
        exercise: {
          type: 'label',
          label: { producer: 'Weingut Ebnerhof', wine: 'Blaufränkisch', region: 'Burgenland, Österreich', quality: 'Qualitätswein', vintage: '2021', sweetness: 'trocken', alcohol: '13,0 % vol' },
          question: 'Blaufränkisch kennen Sie nicht. Aber Sie wissen: Er ist ein Elternteil des Zweigelt. Welcher Steckbrief passt am besten?',
          options: [
            { text: 'Rot · trocken · mittel bis kräftig · frische Säure · spürbares Tannin · dunkle Beeren & Pfeffer', correct: true,
              feedback: 'Bien. Trocken, 13 %, mitteleuropäisches Klima, ein dunklerer, strafferer Verwandter des Zweigelt. Genau so ordnet man ein.' },
            { text: 'Rot · lieblich · leicht · wenig Säure · kaum Tannin · Erdbeere', correct: false,
              feedback: 'Da steht "trocken". Und 13 % sind kein Leichtgewicht.' },
            { text: 'Rot · trocken · sehr wuchtig · kaum Säure · Rosinen & Schokolade', correct: false,
              feedback: 'Das wäre ein Wein aus getrockneten Trauben oder aus der Hitze, mit 15 % und mehr. Hier: 13 %, mitteleuropäisches Klima – die Säure bleibt.' },
            { text: 'Ohne Probieren kann man gar nichts sagen', correct: false,
              feedback: 'Exakt nicht – aber gut genug, um zu beraten. Genau dafür ist die Methode da.' },
          ]
        }
      },
    ],
    outro: 'Bien. Sie wissen jetzt, wie man einen fremden Wein liest. Monsieur Laurent ist ein alter Kollege von mir – er wird Sie nicht schonen. Gut so.'
  },

  // ---------------------------------------------------------- TAG 5
  sterne: {
    title: 'Akademie-Tag 5: Verkostung & Haltung',
    intro: 'Bonjour, mes chers. Der letzte Akademie-Tag. Morgen stehen Sie in der "Étoile" bei Chef Beaumont – zwei Sterne, null Geduld. Heute schärfen wir Ihre Sinne, Ihre Sprache und Ihren Kopf. Und am Ende reden wir. Nur wir.',
    lessons: [
      {
        id: 'ak_4_1', title: 'Auge, Nase, Gaumen',
        text: 'Zuerst das <strong>Auge</strong>: Farbe, Klarheit, Rand. Junger Rotwein leuchtet violett, alter wird ziegelrot. Dann die <strong>Nase</strong>, Ihr wichtigstes Werkzeug. Sortieren Sie die Aromen in drei Schubladen: <strong>primär</strong> aus der Traube (Frucht, Blüten, Kräuter), <strong>sekundär</strong> aus Gärung und Ausbau (Hefe, Brioche, Butter – und Vanille aus dem Holz), <strong>tertiär</strong> aus der Reife (Leder, Tabak, Pilze, Nüsse, Honig). Erst dann der <strong>Gaumen</strong>: Süße, Säure, Tannin, Alkohol, Körper.',
        exercise: {
          type: 'choice',
          question: 'Ein Rotwein duftet nach Kirsche, Vanille und Leder. Welche Zuordnung stimmt?',
          options: [
            { text: 'Kirsche primär · Vanille sekundär · Leder tertiär', correct: true,
              feedback: 'Bien. Traube, Keller, Zeit. Drei Schubladen, sauber sortiert.' },
            { text: 'Kirsche primär · Vanille primär · Leder sekundär', correct: false,
              feedback: 'Vanille wächst nicht an der Rebe. Sie kommt aus dem Holz – also sekundär. Und Leder braucht Zeit – tertiär.' },
            { text: 'Alles primär – es steckt ja alles in der Traube', correct: false,
              feedback: 'Non. Die Traube bringt die Frucht. Holz und Zeit schreiben den Rest.' },
            { text: 'Kirsche tertiär · Vanille sekundär · Leder primär', correct: false,
              feedback: 'Genau verkehrt herum. Frische Frucht ist jung, Leder ist alt.' },
          ]
        }
      },
      {
        id: 'ak_4_2', title: 'Weinsprache',
        text: 'Profis beschreiben einen Wein in einer festen Reihenfolge. <strong>Antrunk</strong>: der erste Eindruck – frisch, weich, spritzig? <strong>Mittelteil</strong>: Körper und Textur. <strong>Abgang</strong>: Wie lange bleibt der Geschmack? Lang ist ein Qualitätszeichen. <strong>Struktur</strong> ist das Gerüst aus Säure, Tannin und Alkohol – ist alles im Gleichgewicht, nennen wir den Wein <strong>harmonisch</strong>. Aber Achtung: Am Tisch sprechen Sie die Sprache des Gastes. Fachsprache ist für Kollegen, nicht zum Angeben.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast ohne Vorkenntnisse fragt nach dem Riesling. Welche Beschreibung ist am besten?',
          options: [
            { text: '"Er ist frisch und saftig, schmeckt nach Zitrone und grünem Apfel – und der Geschmack bleibt lange."', correct: true,
              feedback: 'Bien. Antrunk, Aromen, Abgang – in Worten, die jeder versteht.' },
            { text: '"Straffe Säurestruktur, primäre Zitrusaromatik, mineralischer Mittelteil, langer Abgang."', correct: false,
              feedback: 'Richtig – und völlig nutzlos für diesen Gast. Sie wollen beraten, nicht beeindrucken.' },
            { text: '"Der ist gut."', correct: false,
              feedback: 'Gut? Das sagt der Gast selbst, nachdem er probiert hat. Von Ihnen erwartet er mehr.' },
            { text: '"Ein sehr eleganter Wein mit großer Tiefe und Seele."', correct: false,
              feedback: 'Schöne Worte, kein Inhalt. Wonach schmeckt er? Wie fühlt er sich an?' },
          ]
        }
      },
      {
        id: 'ak_4_3', title: 'Die fremde Weinkarte',
        text: 'Neues Haus, 40 Positionen, der Gast wartet – Sie haben zwei Minuten. Keine Panik. Sortieren Sie im Kopf: erst <strong>Farbe</strong>, dann <strong>Stil</strong> (Schaum, frisch, kräftig, süß), dann <strong>Körper</strong>. Suchen Sie <strong>Ankerweine</strong> – Namen, die Sie kennen und an denen Sie die anderen messen. Und die Unbekannten? Steckbrief aus dem Etikett, wie gelernt. Niemand kennt alle Weine – aber ein guter Sommelier findet in zwei Minuten den richtigen.',
        exercise: {
          type: 'label',
          label: { producer: 'Domaine de la Grange-Neuve', wine: 'Muscadet Sèvre et Maine sur lie · Melon de Bourgogne', region: 'Loire, nahe der Atlantikküste', vintage: '2023', sweetness: 'trocken', alcohol: '12,0 % vol' },
          question: 'Diesen Wein kennen Sie nicht. Am Tisch: sechs Austern mit Zitrone. Was tun Sie?',
          options: [
            { text: 'Ihn empfehlen: kühles Küstenklima, trocken, 12 % – leicht, frisch, salzig-mineralisch. Ideal zu Austern.', correct: true,
              feedback: 'Bien. Und diesmal weinen die Austern nicht. Sie haben einen fremden Wein gelesen wie einen alten Freund.' },
            { text: 'Lieber den Amarone von der Karte nehmen – den kenne ich wenigstens', correct: false,
              feedback: 'Non, non, non! Sie kennen ihn – und gerade deshalb wissen Sie, dass er falsch ist.' },
            { text: 'Den Gast bitten, selbst etwas auszusuchen', correct: false,
              feedback: 'Er hat Sie gefragt, weil Sie es wissen sollten. Und hier können Sie es wissen.' },
            { text: 'Finger weg – "Melon" klingt nach Melone, also süß', correct: false,
              feedback: 'Ein Name ist kein Geschmack. "Trocken" steht drauf, 12 %, Atlantikküste. Lesen, nicht raten.' },
          ]
        }
      },
      {
        id: 'ak_4_4', title: 'Abschluss-Gespräch',
        text: 'Alors … legen Sie die Stifte weg. Sie werden Gäste treffen, die mehr wissen als Sie. Und Weine, die Sie nie gesehen haben. Dann erfinden Sie nichts. Sie sagen: <strong>"Ich weiß es nicht – aber ich finde es heraus."</strong> Ehrlichkeit kostet Sie nichts, eine Lüge kostet Sie den Gast. Und vergessen Sie nie: <strong>Nicht was SIE mögen, nicht was weg muss – sondern was DIESER Gast zu DIESEM Gericht braucht.</strong>',
        exercise: {
          type: 'choice',
          question: 'Ein Gast fragt nach einem Wein von einem Weingut, das Sie noch nie gehört haben. Was antworten Sie?',
          options: [
            { text: '"Den kenne ich noch nicht – darf ich kurz nachsehen? Ich bin gleich wieder bei Ihnen."', correct: true,
              feedback: 'Bien. (Sie lächelt.) Genau dafür habe ich Sie ausgebildet.' },
            { text: 'Irgendetwas Überzeugendes erzählen – Hauptsache, ich wirke kompetent', correct: false,
              feedback: 'Non. Ein Gast vergisst eine falsche Antwort nie – und Ihr Gesicht dazu auch nicht.' },
            { text: '"Den kennt eh keiner – nehmen Sie lieber unseren Hauswein, der muss sowieso weg."', correct: false,
              feedback: 'Und schon wieder: Sie empfehlen, was weg muss. Non, non, non.' },
            { text: '"Das ist nicht mein Bereich, da müssen Sie den Chef fragen."', correct: false,
              feedback: 'Doch, das ist genau Ihr Bereich. Sie sind der Sommelier.' },
          ]
        }
      },
    ],
    outro: 'Voilà. Mehr kann ich Ihnen nicht beibringen – den Rest lehrt Sie jeder Gast, jeden Abend. Ich bin sehr stolz auf Sie. Gehen Sie zu Chef Beaumont … und wenn jemand Austern bestellt, denken Sie an mich. Bien.'
  },
};

// ===== CHEF STELLT DIE WEINE VOR (vor Schicht 1–3) =====
const CHEF_WINE_INTROS = {
  // --- Kostas, Imbiss ---
  riesling: 'Malaka, schau – Riesling trocken, aus Deutschland! Frisch, sauer wie eine Zitrone, Apfel, ein bisschen wie nasser Stein. Zu Fisch, Hähnchen, Spargel – die Deutschen sind verrückt nach Spargel. Und immer schön kalt servieren, ja?',
  dornfelder: 'Das ist Dornfelder, ein deutscher Roter. Kirsche, Brombeere, halbtrocken – unkompliziert wie mein Cousin Jannis. Passt zu Gyros, Pizza, Grillwurst, zu allem Deftigen. Wenn einer sagt "Hauptsache rot" – nimm den!',
  mueller_thurgau: 'Müller-Thurgau! Klingt wie ein Steuerberater, oder? Ist aber ein milder, blumiger Weißer – Apfel, ein bisschen Muskat, halbtrocken und leicht wie eine Feder. Perfekt zu Salat, leichtem Fisch und Hähnchen.',
  lambrusco: 'Lambrusco aus Italien – rot, und er prickelt ein bisschen! Erdbeere, Kirsche, lieblich und leicht. Die Studenten lieben den zur Pizza. Gut gekühlt servieren, dann schmeckt er wie Sommer, Malaka.',
  imiglykos: 'Ahhh, Imiglykos – aus meiner Heimat! Das heißt "halbsüß", gemacht aus der Agiorgitiko-Traube. Kirsche, Pflaume, schön lieblich und leicht. Zu Gyros, Souvlaki, Moussaka – wie bei meiner Yiayia auf Kreta. Opa!',
  retsina: 'Und das hier ist Retsina. Riech mal – Kiefer! Wir Griechen geben seit über 2000 Jahren Harz an den Wein. Trockener Weißer, Zitrus, Harz – zu Feta, Oliven, Meeresfrüchten und Gyros. Aber nicht jeder mag das, also erst fragen!',

  // --- Mike, Steakhaus ---
  gruener_veltliner: 'Okay Bro, Grüner Veltliner – Österreichs Nummer eins in Weiß. Trocken, Apfel, Kräuter und so ein pfeffriger Kick hinten am Gaumen. Zum Wiener Schnitzel ein absolutes Dream Team – und zu Fisch und Spargel easy.',
  spaetburgunder: 'Spätburgunder, Dude – international heißt der Pinot Noir. Gleiche Traube, deutscher Pass. Trocken, mittlerer Körper, Kirsche, Himbeere, was Erdiges. Nicht der Wein fürs fette Ribeye – eher zu Braten, Geflügel, Pilzen, sogar zu Lachs. Elegant, Bro.',
  primitivo: 'Und jetzt: The Beast. Primitivo di Manduria aus Apulien – voll, trocken, Pflaume, Schokolade, Gewürze. Der steht dem Steak auf Augenhöhe gegenüber, Lamm und Wild auch. Fun Fact: In Kalifornien heißt der Zinfandel – gleiche DNA!',
  chianti: 'Chianti aus der Toskana – die Rebsorte ist Sangiovese, Chianti ist die Region, merk dir das! Kirsche, Kräuter, ein bisschen Leder, schön frische Säure. Zu Steak, Tomatenpasta und Hartkäse – Marco bestellt nix anderes.',
  sekt: 'Deutscher Sekt, Bro – Bubbles! Trocken, Apfel, Hefe, ein bisschen Brioche. Perfekt als Aperitif oder wenn einer was zu feiern hat. Und ja: Wir Deutschen trinken weltweit am meisten Sekt. Cheers!',
  rose_provence: 'Rosé de Provence – hellrosa, trocken, leicht. Erdbeere, Pfirsich, Kräuter. Summer Vibes zum Grillen, zu Salat oder Fisch. Und wenn einer sagt, Rosé ist gemischt: nope – rote Trauben, kurzer Schalenkontakt. Let’s go.',
  weissherbst: 'Spätburgunder Weißherbst aus Baden. Klingt nach Weißwein – ist aber ein Rosé, aus nur einer roten Rebsorte. Erdbeere, Himbeere, halbtrocken und leicht. Zu Flammkuchen und Grillgemüse ein Hit, Bro.',

  // --- Frau Lindner, Gasthaus ---
  zweigelt: 'Grüß Gott, Kindchen – das ist der Zweigelt aus Österreich. Ein Roter mit viel Kirsche und Beeren, die Tannine schön weich. Zum Sonntagsbraten, zum Rind und zum Wild, da sagt sogar der Stammtisch nichts mehr. Leicht gekühlt servieren, so um die 16 Grad.',
  gewuerztraminer: 'Jetzt riech mal, Kindchen – Litschi, Rosen, Gewürze! Das ist der Gewürztraminer, halbtrocken und unverwechselbar. Zur Vesperplatte, zum Käse und – das hätte meine Mutter nie geglaubt – zur asiatischen Küche. Den liebt man, oder man lässt ihn stehen.',
  rioja_crianza: 'Das hier ist ein Spanier, der Rioja Crianza. Tempranillo, mindestens zwei Jahre gereift, eins davon im Holzfass – drum schmeckt man Kirsche und ein bisschen Vanille. Zu Lamm, Wild, Käse und allem Geschmorten. Mein Gulasch mag ihn auch.',
  cremant: 'Crémant aus dem Elsass, Kindchen – ein Schaumwein mit Flaschengärung, gemacht wie Champagner, aber zum halben Preis. Apfel, Birne, Blüten, schön trocken. Zum Aperitif, zum Fisch und bei Hochzeiten – das Brautpaar von nebenan hat schon gefragt.',
  vinho_verde: 'Vinho Verde aus Portugal. "Grüner Wein" heißt das – nicht wegen der Farbe, sondern weil man ihn jung trinkt. Zitronig, leicht und ein bisschen spritzig. Zu Fisch und Meeresfrüchten, und im Sommer im Biergarten ein Gedicht.',
  pinot_grigio: 'Und das ist der Pinot Grigio aus Norditalien – bei uns heißt die gleiche Traube Grauburgunder. Leicht, trocken, Birne, Zitrus, ein Hauch Mandel. Zu Fisch, Salat und Meeresfrüchten. Ein braver Wein, der niemandem wehtut.',

  // --- Monsieur Laurent, Le Vignoble ---
  barolo: 'Voilà, der Barolo. Nebbiolo aus dem Piemont – man nennt ihn den König der Weine. Teer und Rosen, Kirschen, Lakritz, mächtiges Tannin, mindestens 38 Monate Reife, davon 18 im Holz. Zu Trüffel, Risotto und Wild. Und bitte dekantieren Sie ihn – er möchte atmen.',
  malbec: 'Malbec aus Mendoza, Argentinien. Geboren in Cahors, erwachsen geworden am Fuß der Anden. Voll, trocken, Pflaume, Brombeere, ein Hauch Schokolade. Zum Steak vom Grill ist er unschlagbar – die Argentinier wissen, warum.',
  riesling_spaetlese: 'Eine Riesling Spätlese, ein deutscher Prädikatswein. Spät gelesene, reife Trauben – Pfirsich, Aprikose, Honig und eine feine Restsüße, getragen von der Säure. Zu Foie Gras, zur asiatischen Küche, zu milden Käsen. Magnifique.',
  saint_emilion: 'Saint-Émilion Grand Cru, vom rechten Ufer von Bordeaux. Eine Cuvée aus Merlot und Cabernet Franc – Cassis, Zedernholz, Tabak; voll, elegant, komplex. Zum Rinderfilet, zu Trüffel und Hartkäse. Erzählen Sie ruhig, dass die ganze Weinlandschaft UNESCO-Welterbe ist.',
  chablis_premier_cru: 'Chablis Premier Cru – Chardonnay aus dem nördlichsten Burgund. Zitrus, Feuerstein, Mineralik, klassischerweise ohne Holzgeschmack. Im Boden liegen fossile Austernschalen – also, was servieren wir dazu? Austern, Fisch, Meeresfrüchte. Très bien.',
  pinotage: 'Pinotage, Südafrikas eigene Rebsorte – 1925 in Stellenbosch aus Pinot Noir und Cinsault gekreuzt. Rauchig, Beeren, ein Hauch Kaffee. Zum BBQ, zu Wild und würzigen Gerichten. Ein Wein mit Persönlichkeit: Manche lieben ihn, manche nicht.',

  // --- Chef Beaumont, Étoile ---
  champagner: 'Champagner. Nur aus der Champagne, mindestens 15 Monate Reife, davon 12 auf der Hefe. Brioche, Zitrus, weiße Blüten. Zu Kaviar, Hummer, als Aperitif. Bei 8 bis 10 Grad – und der Korken seufzt leise, er knallt nicht.',
  chateauneuf: 'Châteauneuf-du-Pape. Südliche Rhône, bis zu 13 Rebsorten erlaubt, Grenache vorneweg. Voll, Beeren, Kräuter, Gewürze, Leder. Zu Lamm, Wild, Schmorgerichten. Benannt nach dem Sommersitz der Päpste – benehmen Sie sich entsprechend.',
  eiswein: 'Eiswein. Die Trauben werden gefroren gelesen und gefroren gekeltert – in der Praxis bei minus sieben Grad oder kälter. Honig, Aprikose, Mango, Karamell: sehr süß, aber frisch durch die Säure. Zum Dessert, zu Foie Gras, zu Blauschimmelkäse. Kleine Gläser. Er ist kostbar.',
  tempranillo_gran_reserva: 'Tempranillo Gran Reserva. Mindestens 60 Monate gereift, davon 24 im Fass. Leder, Tabak, reife Kirschen, Vanille. Zu Lamm, gereiftem Käse, zum Festmenü. Ein Wein, der Geduld verlangt – wie dieser Beruf.',
  amarone: 'Amarone della Valpolicella. Die Trauben trocknen monatelang, bevor sie gekeltert werden – Appassimento. Rosinen, Schokolade, Süßkirsche, Mokka: trocken ausgebaut, aber wuchtig. Zu Ossobuco, Wildbraten, reifem Käse. Wer ihn zu Austern empfiehlt, ist entlassen.',
  sancerre: 'Sancerre. Sauvignon Blanc von der Loire, der Maßstab für diese Rebsorte. Stachelbeere, frisches Gras, Mineralik. Zu Ziegenkäse – der kommt aus derselben Gegend –, zu Fisch und Salat. Präzise. So erwarte ich auch Ihren Service.',
};

// ===== SCHICHTPLAN: welche Weine vor Schicht 1 / 2 / 3 vorgestellt werden =====
// (Zahl = wie viele Gast-Fragen den Wein als Favorit haben)
const SHIFT_PLAN = {
  imbiss:         [['riesling', 'dornfelder'], ['mueller_thurgau', 'lambrusco'], ['imiglykos', 'retsina']],          // 9 / 8 / 5
  steakhaus:      [['gruener_veltliner', 'spaetburgunder'], ['primitivo', 'chianti'], ['sekt', 'rose_provence', 'weissherbst']], // 13 / 9 / 8
  gutbuergerlich: [['zweigelt', 'gewuerztraminer'], ['rioja_crianza', 'vinho_verde'], ['cremant', 'pinot_grigio']], // 12 / 9 / 7
  gehoben:        [['barolo', 'malbec'], ['riesling_spaetlese', 'saint_emilion'], ['chablis_premier_cru', 'pinotage']], // 12 / 12 / 10
  sterne:         [['champagner', 'chateauneuf'], ['eiswein', 'tempranillo_gran_reserva'], ['amarone', 'sancerre']], // 13 / 12 / 6
};

// ===== SPRUCH DES CHEFS ZUM SCHICHTBEGINN =====
const CHEF_SHIFT_LINES = {
  imbiss: [
    'Malaka, die Tür geht auf! Erste Schicht – lächeln und zuhören!',
    'Zweite Schicht! Der Grill ist heiß, die Leute sind hungrig – los, los!',
    'Letzte Runde vor Feierabend! Zeig mir, was du gelernt hast. Opa!',
  ],
  steakhaus: [
    'Alright, Bro – Grill ist an, Laden ist offen. Let’s go!',
    'Schicht zwei, Dude! Jetzt kommen die Steak-Profis.',
    'Last Round, Bro! Mach mich stolz – und keinen Leichtwein zum Tomahawk, okay?',
  ],
  gutbuergerlich: [
    'Grüß Gott, Kindchen! Die ersten Gäste sitzen schon – frisch ans Werk!',
    'Mittagsschicht! Der Stammtisch hat schon zweimal nach dir gefragt.',
    'Abendschicht, Kindchen. Jetzt kommen die Feinschmecker – du schaffst das!',
  ],
  gehoben: [
    'Messieurs-dames, le service commence. Haltung, bitte.',
    'Der zweite Service. Unsere Gäste lesen Etiketten wie die Zeitung – seien Sie bereit.',
    'Der letzte Service. Vertrauen Sie Ihrer Nase. Allez.',
  ],
  sterne: [
    'Service. Kein Wort zu viel. Kein Fehler.',
    'Zweiter Service. Der Michelin-Tester könnte heute hier sein. Er könnte immer hier sein.',
    'Letzter Service. Zeigen Sie mir, warum Sie hier stehen.',
  ],
};

// ===== WISSENSFRAGEN, DIE ZU EINEM BESTIMMTEN WEIN GEHÖREN =====
// Frage erscheint erst, wenn dieser Wein vorgestellt wurde. Allgemeine Fragen: ohne Tag.
const FACT_WINE_TAGS = {
  // Imbiss
  bw_0_5: 'retsina', bw_0_7: 'lambrusco',
  ww_0_1: 'riesling', ww_0_2: 'retsina', ww_0_4: 'lambrusco', ww_0_5: 'dornfelder', ww_0_9: 'mueller_thurgau',
  // Steakhaus
  bw_1_1: 'chianti', bw_1_2: 'spaetburgunder', bw_1_3: 'sekt', bw_1_5: 'primitivo', bw_1_10: 'gruener_veltliner', bw_1_11: 'weissherbst',
  ww_1_1: 'spaetburgunder', ww_1_2: 'chianti', ww_1_3: 'sekt', ww_1_4: 'primitivo', ww_1_6: 'primitivo', ww_1_9: 'chianti', ww_1_11: 'weissherbst',
  // Gasthaus
  bw_2_1: 'gewuerztraminer', bw_2_2: 'cremant', bw_2_3: 'vinho_verde', bw_2_4: 'zweigelt', bw_2_5: 'gewuerztraminer', bw_2_8: 'gewuerztraminer', bw_2_10: 'rioja_crianza',
  ww_2_1: 'cremant', ww_2_2: 'rioja_crianza', ww_2_5: 'vinho_verde', ww_2_6: 'gewuerztraminer',
  // Le Vignoble
  bw_3_2: 'barolo', bw_3_3: 'malbec', bw_3_5: 'saint_emilion', bw_3_9: 'chablis_premier_cru',
  ww_3_2: 'barolo', ww_3_4: 'pinotage', ww_3_6: 'riesling_spaetlese', ww_3_9: 'chablis_premier_cru', ww_3_11: 'pinotage',
  // Étoile
  bw_4_1: 'champagner', bw_4_2: 'amarone', bw_4_3: 'chateauneuf', bw_4_4: 'eiswein', bw_4_5: 'sancerre', bw_4_6: 'eiswein',
  bw_4_7: 'chateauneuf', bw_4_8: 'amarone', bw_4_9: 'champagner', bw_4_10: 'sancerre',
  ww_4_1: 'amarone', ww_4_2: 'chateauneuf', ww_4_3: 'eiswein', ww_4_7: 'champagner',
};
