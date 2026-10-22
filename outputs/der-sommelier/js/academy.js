// ============================================================
// DER SOMMELIER — Akademie (Madame Céline Duvin), Chef-Weinvorstellungen,
// Schichtplan und Wein-Tags für Wissensfragen
// ------------------------------------------------------------
// ACADEMY[levelId]        = ein Akademie-Tag vor jedem Restaurant (4–6 Lektionen)
//   lesson.extra           = Zusatzübung (gleiches Thema, neuer Inhalt), nur wenn die Übung zweimal verfehlt wurde
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
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast bestellt eine Pizza Margherita: "Gern einen Roten – aber bitte nichts Schweres." Im Keller stapeln sich Kisten Weißwein, die dringend weg müssen. Ihr Lieblingswein ist ein wuchtiger Rotwein mit 15 %. Was empfehlen Sie?',
          options: [
            { text: 'Einen leichten, fruchtigen Rotwein', correct: true,
              feedback: 'Bien. Rot, wie er es will, leicht, wie er es will – und zur Pizza passt es auch. Der Gast hat Ihnen alles gesagt, Sie mussten nur zuhören.' },
            { text: 'Den Weißwein – der muss ja weg', correct: false,
              feedback: 'Non. Er hat "Roten" gesagt. Was weg muss, ist das Problem des Kellers, nicht das des Gastes.' },
            { text: 'Ihren wuchtigen Lieblingswein mit 15 % – der überzeugt jeden', correct: false,
              feedback: 'Ah, der Amarone-Kellner lebt! Er wollte ausdrücklich nichts Schweres. Ihr Geschmack sitzt nicht mit am Tisch.' },
            { text: 'Die Flasche mit dem schönsten Etikett', correct: false,
              feedback: 'Ein schönes Etikett ist schön. Mehr nicht. Der Gast trinkt den Wein, nicht das Papier.' },
          ]
        }
      },
      {
        id: 'ak_0_2', title: 'Rot, Weiß, Rosé',
        text: 'Die Farbe steckt in der <strong>Schale</strong>, nicht im Saft – auch rote Trauben haben fast immer hellen Saft. <strong>Rotwein</strong> gärt tagelang mit den Schalen: Farbe, Tannin, Kraft. <strong>Weißwein</strong> wird sofort abgepresst – darum kann man ihn sogar aus roten Trauben machen. Und <strong>Rosé</strong>? Rote Trauben, nur kurzer Schalenkontakt, oft nur einige Stunden. Gemischt wird er nicht: Rot und Weiß zusammenkippen ist bei Stillwein – also Wein ohne Kohlensäure – in der EU verboten. Ausnahme Schaumwein, etwa Rosé-Champagner.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast behauptet: "Rosé ist doch nur Rotwein, den man mit Weißwein verdünnt hat." Was antworten Sie?',
          options: [
            { text: '"Rosé entsteht aus roten Trauben mit kurzem Schalenkontakt – mischen ist bei Wein ohne Kohlensäure in der EU sogar verboten."', correct: true,
              feedback: 'Bien. Kurz, höflich, richtig. Und lächeln Sie dabei – der Gast soll etwas lernen, nicht sich schämen.' },
            { text: '"Stimmt, deshalb ist Rosé auch immer billiger."', correct: false,
              feedback: 'Non. Erstens falsch, zweitens gibt es Rosés, die mehr kosten als Ihr Fahrrad.' },
            { text: '"Nein, Rosé wird aus rosa Trauben gemacht."', correct: false,
              feedback: 'Rosa Trauben? Charmant – aber nein. Es sind rote Trauben, die nur kurz mit ihrer Schale in Berührung kommen.' },
            { text: '"Nein, da kommt Rote-Bete-Saft rein."', correct: false,
              feedback: 'Mon Dieu. Bitte sagen Sie das niemals laut in einem Restaurant.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Auf der Karte steht ein "Blanc de Noirs" – ein Weißwein aus roten Trauben. Ein Gast lacht: "Weißwein aus roten Trauben? Das geht doch gar nicht!" Was antworten Sie?',
          options: [
            { text: '"Doch: Der Saft ist hell, die Farbe steckt in der Schale. Presst man die roten Trauben sofort ab, bleibt der Wein hell."', correct: true,
              feedback: 'Bien. Schale = Farbe. Wer das verstanden hat, versteht Rot, Weiß und Rosé auf einmal.' },
            { text: '"Man filtert die rote Farbe nach der Gärung wieder heraus."', correct: false,
              feedback: 'Non. Da muss nichts herausgefiltert werden – die Farbe kommt gar nicht erst hinein, wenn die Schalen sofort weg sind.' },
            { text: '"Man mischt ein wenig Rotwein mit viel Weißwein."', correct: false,
              feedback: 'Dann wäre er rosa – und bei Wein ohne Kohlensäure wäre das in der EU sogar verboten. Non.' },
            { text: '"Die Trauben werden vorher in der Sonne gebleicht."', correct: false,
              feedback: 'Gebleichte Trauben? Mon Dieu. Nein – sofort abpressen, die Schale weglassen, voilà.' },
          ]
        }
      },
      {
        id: 'ak_0_3', title: 'Trocken bis süß',
        text: '"Trocken" hat nichts mit Alkohol zu tun: Es geht um <strong>Restzucker</strong> – den Zucker, den die Hefe nicht zu Alkohol vergoren hat. Woher kommt der Zucker? Von der Sonne: Je mehr Sonne die Traube bekommt, desto mehr Zucker steckt in ihr, und desto mehr Alkohol kann daraus werden. Vereinfacht: <strong>trocken</strong> bis 4 g/l (mit genug Säure bis 9 g/l), <strong>halbtrocken</strong> bis 12 g/l (bzw. 18 g/l), <strong>lieblich</strong> bis 45 g/l, darüber <strong>süß</strong>. Steht die Süße auf dem Etikett – im Supermarkt üblich, bei anderen Weinen immer öfter –, dann lesen Sie sie! Oft fehlt sie aber, und dann schließen Sie aus <strong>Alkohol und Weinart</strong>: Nur 7–10 % bei einem Riesling von der Mosel oder einem Moscato d\'Asti heißt, dass Zucker übrig geblieben ist – wahrscheinlich lieblich; 12,5–14 % bei einem gewöhnlichen Weiß- oder Rotwein heißt meist: durchgegoren, also trocken. Manche Weinarten verraten es auch: Ein Lambrusco "amabile" ist lieblich, eine deutsche Spätlese oft fruchtsüß. Alors – das sind Faustregeln, keine Gesetze, aber sie bringen Sie oft ans Ziel.',
        exercise: {
          type: 'label',
          label: { producer: 'Weingut Uferhaus', color: 'Weißwein', wine: 'Riesling', region: 'Mosel', quality: 'Qualitätswein', vintage: '2023', alcohol: '8,5 % vol' },
          question: 'Ein Gast sagt: "Bloß nichts Süßes!" Zur Süße steht nichts auf dem Etikett. Passt dieser Wein?',
          options: [
            { text: 'Eher nicht – nur 8,5 % bei einem Mosel-Riesling: Da ist wahrscheinlich viel Zucker übrig geblieben', correct: true,
              feedback: 'Bien. Wenig Alkohol heißt: Die Hefe hat nicht allen Zucker vergoren. Sie haben geschlossen, statt zu raten. Genau so.' },
            { text: 'Ja – steht nichts drauf, ist er trocken', correct: false,
              feedback: 'Non. Oft steht einfach nichts drauf – auch bei süßen Weinen. Dann fragen Sie den Alkohol.' },
            { text: 'Ja – 8,5 % ist wenig Alkohol, also ist er nicht süß', correct: false,
              feedback: 'Umgekehrt wird ein Schuh draus: Wenig Alkohol heißt, dass Zucker übrig geblieben ist.' },
            { text: 'Das kann man ohne Probieren überhaupt nicht einschätzen', correct: false,
              feedback: 'Sicher wissen nicht – aber gut einschätzen, oui! Alkohol und Herkunft verraten eine Menge. Ein Sommelier liest und schließt.' },
          ]
        },
        extra: {
          type: 'label',
          label: { producer: 'Weingut Sonnenbühl', color: 'Weißwein', wine: 'Grauburgunder', region: 'Baden', quality: 'Qualitätswein', vintage: '2023', alcohol: '13,5 % vol' },
          question: 'Wieder sagt ein Gast: "Bloß nichts Süßes!" Auch hier steht nichts zur Süße. Was schätzen Sie?',
          options: [
            { text: 'Wahrscheinlich trocken – 13,5 % bei einem gewöhnlichen Weißwein heißt: Der Zucker ist durchgegoren', correct: true,
              feedback: 'Bien. Viel Alkohol, kein Hinweis auf Süße – der Zucker steckt im Alkohol, nicht mehr im Glas. Eine Faustregel, aber eine gute.' },
            { text: 'Wahrscheinlich süß – 13,5 % ist viel, also ist viel Zucker drin', correct: false,
              feedback: 'Non. Der Zucker ist zu Alkohol GEWORDEN. Viel Alkohol heißt meist: wenig Zucker übrig.' },
            { text: 'Süß – Wein ohne Süße-Angabe ist immer lieblich', correct: false,
              feedback: 'Weder immer trocken noch immer lieblich. Ohne Angabe fragen Sie den Alkohol und die Weinart.' },
            { text: 'Das hängt nur vom Jahrgang ab', correct: false,
              feedback: 'Der Jahrgang sagt Ihnen, wann gelesen wurde – nicht, wie süß der Wein ist. Schauen Sie auf den Alkohol.' },
          ]
        }
      },
      {
        id: 'ak_0_4', title: 'Die erste Pairing-Regel',
        text: 'Stellen Sie sich eine Waage vor: auf der einen Seite das Essen, auf der anderen der Wein. <strong>Leicht zu leicht, kräftig zu kräftig.</strong> Ein zarter Salat verschwindet unter einem schweren Rotwein. Ein fettes Grillsteak macht aus einem zarten Weißwein Wasser. Erst wenn Sie wissen, was serviert wird, fragen Sie, was der Gast mag. Voilà – das ist schon die halbe Miete. Und noch ein Tipp für fettes Essen wie Leberkäse, Backfisch oder Schnitzel: Säure im Wein macht den Mund wieder frisch, wie ein Spritzer Zitrone. Ein säurebetonter Weißwein schneidet durch das Fett; ein milder verschwindet darunter.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt den XXL-Gyrosteller mit Pommes und doppelt Tzatziki. Welcher Weinstil hält da mit?',
          options: [
            { text: 'Ein ganz leichter, blumiger Weißwein', correct: false,
              feedback: 'Der wird von diesem Teller einfach überrollt. Zu leicht für so viel Kraft.' },
            { text: 'Ein fruchtiger Rotwein mit etwas Körper', correct: true,
              feedback: 'Bien. Kräftiger Teller, Wein mit Substanz – die Waage stimmt.' },
            { text: 'Ein süßer Dessertwein', correct: false,
              feedback: 'Zum Gyros? Non. Den heben Sie sich für den Nachtisch auf.' },
            { text: 'Egal – im Imbiss passt jeder Wein', correct: false,
              feedback: 'Non, non, non. Auch der Gast im Imbiss verdient eine echte Empfehlung. Gerade der.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast bestellt einen kleinen Gurkensalat und ein Stück gedämpften Fisch mit Zitrone. Welcher Weinstil passt auf die Waage?',
          options: [
            { text: 'Ein leichter, frischer Weißwein', correct: true,
              feedback: 'Bien. Zarter Teller, zarter Wein. Die Waage steht gerade.' },
            { text: 'Ein schwerer, kräftiger Rotwein', correct: false,
              feedback: 'Der setzt sich auf den Fisch wie ein Elefant aufs Sofa. Zu schwer.' },
            { text: 'Der kräftigste Wein der Karte – damit man überhaupt etwas schmeckt', correct: false,
              feedback: 'Non. Dann schmeckt man NUR noch den Wein. Leicht zu leicht.' },
            { text: 'Ein süßer Dessertwein', correct: false,
              feedback: 'Zu Fisch mit Zitrone? Die Süße erschlägt alles. Den heben Sie sich für den Nachtisch auf.' },
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
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast aus Kalifornien fragt: "Habt ihr Zinfandel?" Auf Ihrer Karte steht nur ein Primitivo. Was sagen Sie?',
          options: [
            { text: '"Unser Primitivo ist genau diese Traube – dunkle Frucht, warm und kräftig. Bei Ihnen heißt sie Zinfandel."', correct: true,
              feedback: 'Bien. Der Gast bekommt seine Traube – nur mit italienischem Pass.' },
            { text: '"Leider nein – Zinfandel gibt es nur in Kalifornien."', correct: false,
              feedback: 'Den Namen vielleicht. Die Traube steht direkt vor Ihnen: Primitivo = Zinfandel.' },
            { text: '"Nehmen Sie den Pinot Noir, das ist fast dasselbe."', correct: false,
              feedback: 'Non. Pinot ist hell und elegant, Zinfandel dunkel und kräftig. Ganz andere DNA.' },
            { text: '"Zinfandel ist doch ein Weißwein – nehmen Sie den Riesling."', correct: false,
              feedback: 'Non, non, non. Zinfandel ist eine rote Traube – dieselbe wie unser Primitivo.' },
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
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast möchte einen Rotwein "mit frischer Säure, nicht zu schwer, nicht so viel Alkohol". Sie haben zwei Pinot Noirs: einen aus Baden und einen aus dem sonnigen Kalifornien. Welchen empfehlen Sie?',
          options: [
            { text: 'Den aus Baden – kühleres Klima, mehr Säure, weniger Alkohol', correct: true,
              feedback: 'Bien. Gleiche Traube, aber die Kühle hält ihn schlank und frisch. Genau das wollte der Gast.' },
            { text: 'Den aus Kalifornien – mehr Sonne, mehr Frische', correct: false,
              feedback: 'Non. Mehr Sonne heißt mehr Zucker, mehr Alkohol, weniger Säure. Das Gegenteil des Wunsches.' },
            { text: 'Egal – es ist dieselbe Traube', correct: false,
              feedback: 'Dieselbe DNA, andere Erziehung. Das Klima macht den Unterschied.' },
            { text: 'Keinen von beiden – Pinot Noir hat nie Säure', correct: false,
              feedback: 'Doch! Gerade aus kühlem Klima ist er frisch und elegant.' },
          ]
        }
      },
      {
        id: 'ak_1_3', title: 'Körper & Tannin',
        text: '<strong>Körper</strong> ist das Gewicht im Mund: Magermilch, Vollmilch, Sahne – leicht, mittel, voll. Mehr Alkohol und mehr Extrakt bedeuten mehr Körper. <strong>Tannin</strong> ist etwas anderes: dieses pelzige, trocknende Gefühl am Zahnfleisch, wie bei zu lange gezogenem schwarzem Tee. Es kommt aus Schalen, Kernen und Stielen – darum hat vor allem Rotwein Tannin. Und das Schöne beim Steak: Fett und Eiweiß machen Tannine weicher – darum lieben Steaks kräftige Rote. Aber Vorsicht: Die Farbe verrät den Körper nicht zuverlässig – es gibt helle Kraftpakete und tiefdunkle, weiche Weine.',
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
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast nimmt einen Schluck und sagt: "Der liegt im Mund wie Sahne – schwer, rund, richtig füllig." Was beschreibt er?',
          options: [
            { text: 'Einen vollen Körper', correct: true,
              feedback: 'Bien. Magermilch, Vollmilch, Sahne – er hat Sahne im Glas. Voller Körper.' },
            { text: 'Viel Tannin', correct: false,
              feedback: 'Tannin ist pelzig und trocknend, nicht rund und füllig. Das hier ist Körper.' },
            { text: 'Wenig Alkohol', correct: false,
              feedback: 'Umgekehrt: Mehr Alkohol gibt eher MEHR Körper. Ein Leichtgewicht fühlt sich nicht wie Sahne an.' },
            { text: 'Einen leichten Körper', correct: false,
              feedback: 'Sahne ist nicht leicht, mon ami. Leicht wäre Magermilch.' },
          ]
        }
      },
      {
        id: 'ak_1_4', title: 'Etikett lesen I',
        text: 'Ein Etikett ist ein Steckbrief, kein Kunstwerk. Suchen Sie vier Dinge: <strong>Rebsorte</strong> (DNA), <strong>Herkunft</strong> (Klima), <strong>Alkohol</strong> und <strong>Süße</strong>. Für den Alkohol gibt es eine Faustregel – wirklich nur eine Faustregel: unter 11,5 % eher leicht, 12–13,5 % mittel, <strong>über 13,5 % meist kräftiger Körper</strong>. Ausnahme süße Weine: Da gibt der Zucker den Körper. Fehlt die Süße-Angabe, denken Sie an Tag 1: Ein Rotwein mit 13,5 % und mehr ist fast immer durchgegoren, also trocken – wenig Alkohol bei einem Mosel-Riesling deutet dagegen auf Restsüße. Und schwenken Sie das Glas: Dicke, langsam laufende <strong>Tränen</strong> an der Glaswand zeigen viel Alkohol (bei süßen Weinen auch Zucker) und damit mehr Körper – über die Qualität sagen sie nichts.',
        exercise: {
          type: 'label',
          label: { producer: 'Masseria Collefosco', color: 'Rotwein', wine: 'Primitivo', region: 'Apulien, Italien', vintage: '2021', alcohol: '14,5 % vol' },
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
        },
        extra: {
          type: 'label',
          label: { producer: 'Domaine des Coteaux Frais', color: 'Weißwein', wine: 'Sauvignon Blanc', region: 'Loire, Frankreich', vintage: '2023', alcohol: '11,5 % vol' },
          question: 'Die Rebsorte kennen Sie noch nicht. Was erwarten Sie trotzdem: Welchen Körper hat dieser Wein?',
          options: [
            { text: 'Eher leicht und frisch – kühle Loire, nur 11,5 %', correct: true,
              feedback: 'Bien. Kühles Klima und wenig Alkohol zeigen in dieselbe Richtung. Sie brauchen die Traube nicht, um das zu lesen.' },
            { text: 'Voll und wuchtig – Weine aus Frankreich sind immer schwer', correct: false,
              feedback: 'Non. Frankreich hat kühle und warme Ecken. Die Loire ist kühl – und 11,5 % sind kein Schwergewicht.' },
            { text: 'Süß und schwer – Sauvignon klingt nach Dessert', correct: false,
              feedback: 'Ein Name ist kein Geschmack. Lesen Sie, was da steht: kühle Herkunft, 11,5 %.' },
            { text: 'Ohne die Rebsorte zu kennen, kann man nichts sagen', correct: false,
              feedback: 'Doch. Herkunft und Alkohol sind zwei von vier Hinweisen – das reicht für eine gute Einschätzung.' },
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
        id: 'ak_2_1', title: 'Gewicht, Fett, Säure, Schärfe, Salz',
        text: 'Fünf Dinge im Essen prüfen Sie sofort. <strong>Gewicht</strong>: leicht zu leicht, schwer zu schwer. <strong>Fett</strong>: braucht Säure, die schneidet – oder Tannin. <strong>Säure</strong> im Essen (Zitrone, Tomate, Essig): Der Wein braucht mindestens genauso viel, sonst wirkt er flach. <strong>Schärfe</strong>: Alkohol und Tannin machen sie heißer – Restsüße und wenig Alkohol löschen. <strong>Salz</strong>: liebt Frische, Süße und Bläschen.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt ein scharfes Thai-Curry. Welcher Wein macht es NICHT schlimmer?',
          options: [
            { text: 'Ein halbtrockener, aromatischer Weißwein mit moderatem Alkohol', correct: true,
              feedback: 'Bien. Die Restsüße kühlt, die Aromen tanzen mit dem Curry. Genau so.' },
            { text: 'Ein kraftvoller Rotwein mit 15 % Alkohol', correct: false,
              feedback: 'Dann brennt der Gast. Alkohol ist Öl ins Feuer der Schärfe.' },
            { text: 'Ein junger, tanninreicher Rotwein', correct: false,
              feedback: 'Tannin und Chili zusammen – das wird bitter und heiß. Dieser Gast fragt Sie nie wieder.' },
            { text: 'Ein trockener Weißwein mit 14,5 % Alkohol', correct: false,
              feedback: 'Weiß allein rettet ihn nicht: 14,5 % Alkohol heizen die Schärfe an. Lieber wenig Alkohol und ein Hauch Süße.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast bestellt einen Salat mit kräftigem Essig-Zitronen-Dressing. Welcher Wein wirkt daneben NICHT flach?',
          options: [
            { text: 'Ein trockener Weißwein mit viel frischer Säure', correct: true,
              feedback: 'Bien. Säure im Teller braucht mindestens so viel Säure im Glas. Dann bleibt der Wein lebendig.' },
            { text: 'Ein milder Weißwein mit wenig Säure', correct: false,
              feedback: 'Neben dem Essig schmeckt der wie Wasser. Flach, flach, flach.' },
            { text: 'Ein schwerer, tanninreicher Rotwein', correct: false,
              feedback: 'Zu schwer für einen Salat – und Essig mit viel Tannin schmeckt metallisch. Non.' },
            { text: 'Ein süßer Dessertwein', correct: false,
              feedback: 'Zum Salat? Der Dessertwein gehört zum Nachtisch, nicht zum Essig.' },
          ]
        }
      },
      {
        id: 'ak_2_2', title: 'Erster Weg: Ergänzen',
        text: 'Es gibt drei Wege zum perfekten Paar – heute lernen Sie alle drei. Der erste: <strong>Ergänzen</strong> – Gleiches zu Gleichem. Ein weicher, cremiger Weißwein zur Rahmsauce, ein würziger Roter zum Pfefferbraten, ein süßer Wein zum Dessert. Wein und Gericht sprechen dieselbe Sprache und verstärken sich. Beim Dessert gilt: Der Wein muss <strong>mindestens so süß</strong> sein wie der Teller, sonst schmeckt er plötzlich sauer und dünn.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt Hähnchen in Rahmsauce mit Champignons. Sie möchten ergänzen. Welcher Wein?',
          options: [
            { text: 'Ein weicher, runder Weißwein mit mittlerem bis vollem Körper', correct: true,
              feedback: 'Bien. Cremig zu cremig – die Sauce und der Wein umarmen sich.' },
            { text: 'Ein sehr leichter, spritziger Weißwein mit viel Säure', correct: false,
              feedback: 'Das kann man machen – aber dann gehen Sie den Weg des Gegensatzes, nicht der Ergänzung. Den lernen Sie gleich.' },
            { text: 'Ein junger, tanninreicher Rotwein', correct: false,
              feedback: 'Tannin und Sahne? Das wird kratzig. Nichts daran ist "Gleiches zu Gleichem".' },
            { text: 'Ein süßer Dessertwein', correct: false,
              feedback: 'Die Sauce ist cremig, nicht süß. Ergänzen heißt: dieselbe Sprache sprechen.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast bestellt Apfelstrudel mit Vanillesoße und möchte ein Glas Wein dazu. Sie wollen ergänzen. Was gilt?',
          options: [
            { text: 'Ein süßer Wein – mindestens so süß wie der Strudel', correct: true,
              feedback: 'Bien. Süß zu süß, und der Wein darf nicht schwächer sein als der Teller. Voilà.' },
            { text: 'Ein knochentrockener Weißwein – der bringt Frische', correct: false,
              feedback: 'Neben dem süßen Strudel schmeckt er plötzlich sauer und dünn. Beim Dessert muss der Wein mindestens so süß sein.' },
            { text: 'Ein kräftiger, trockener Rotwein', correct: false,
              feedback: 'Tannin und Vanillesoße – nein, das tun wir dem Gast nicht an.' },
            { text: 'Egal – zum Dessert trinkt man keinen Wein', correct: false,
              feedback: 'Doch! Und zwar einen süßen. Das ist eines der schönsten Kapitel.' },
          ]
        }
      },
      {
        id: 'ak_2_3', title: 'Zweiter Weg: Kontrastieren',
        text: 'Der zweite Weg: <strong>Kontrastieren</strong> – Gegensätze ziehen sich an. Frische <strong>Säure gegen Fett</strong>: Sie schneidet durch das panierte Schnitzel und macht den Mund wieder frisch. <strong>Süße gegen Salz</strong>: ein süßer Dessertwein zum salzigen Blauschimmelkäse wie Roquefort – ein altes Liebespaar. <strong>Süße gegen Schärfe</strong>: Ein halbtrockener Weißer kühlt das Chili. Der Kontrast funktioniert, wenn der Wein dem Gericht genau das gibt, was ihm fehlt.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt Roquefort, und Sie empfehlen einen süßen Dessertwein dazu. Welchen Weg gehen Sie?',
          options: [
            { text: 'Kontrast – süß gegen salzig', correct: true,
              feedback: 'Bien. Salz und Süße sind ein altes Liebespaar.' },
            { text: 'Ergänzen – beide sind süß', correct: false,
              feedback: 'Roquefort und süß? Probieren Sie ihn mal. Der Käse ist salzig und würzig – die Süße ist sein Gegenpol.' },
            { text: 'Ergänzen – beide sind leicht', correct: false,
              feedback: 'Roquefort ist alles, nur nicht leicht. Und darum geht es hier auch nicht: Salz trifft Süße.' },
            { text: 'Gar keinen – Käse und Wein passen nie', correct: false,
              feedback: 'Non, non, non. Käse und Wein ist eines der schönsten Kapitel. Man muss es nur richtig lesen.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast bestellt knusprigen, fetten Schweinebauch. Sie empfehlen einen trockenen Weißwein mit viel Säure. Welchen Weg gehen Sie?',
          options: [
            { text: 'Kontrast – die Säure schneidet durch das Fett', correct: true,
              feedback: 'Bien. Das Fett macht den Mund schwer, die Säure macht ihn wieder frisch. Jeder Bissen schmeckt wie der erste.' },
            { text: 'Ergänzen – beide sind fett', correct: false,
              feedback: 'Ein säurereicher Weißwein ist nicht fett, mon ami. Er ist das Gegenteil – darum funktioniert es.' },
            { text: 'Kontrast – süß gegen salzig', correct: false,
              feedback: 'Der Wein ist trocken. Hier arbeitet die Säure gegen das Fett, nicht die Süße gegen das Salz.' },
            { text: 'Gar keinen – zu Schweinefleisch gehört immer Rotwein', correct: false,
              feedback: '"Immer" ist ein gefährliches Wort. Gegen Fett hilft Säure – und die hat dieser Weiße reichlich.' },
          ]
        }
      },
      {
        id: 'ak_2_4', title: 'Dritter Weg: Regional – und wann welcher Weg?',
        text: 'Der dritte Weg: <strong>Regional</strong> – was zusammen wächst, passt zusammen: Chianti zur Tomatenpasta, Grüner Veltliner zum Wiener Schnitzel, Retsina zu Feta. Und wann welcher Weg? Suchen Sie das <strong>Stärkste auf dem Teller</strong>. Ist es <strong>Fett, Salz oder Schärfe</strong>, dann <strong>kontrastieren</strong> Sie – mit Säure, Süße oder Bläschen. Ist es eine <strong>Sauce, ein Aroma, eine Süße</strong> – cremig, würzig, fruchtig –, dann <strong>ergänzen</strong> Sie. Kommt das Gericht klar aus einer Weinregion, ist der <strong>regionale</strong> Wein oft der sicherste Treffer – aber prüfen Sie trotzdem die Waage.',
        exercise: {
          type: 'choice',
          question: 'Ein Gast bestellt ein Wiener Schnitzel – paniert, in Butterschmalz gebraten, mit Zitrone. Auf der Karte: Grüner Veltliner, ein schwerer Primitivo, ein lieblicher Lambrusco. Was empfehlen Sie?',
          options: [
            { text: 'Grüner Veltliner – regional, und seine frische Säure schneidet durchs Fett', correct: true,
              feedback: 'Bien. Zwei Wege, ein Ziel: Er kommt aus derselben Gegend wie das Schnitzel, und er bringt den Kontrast zum Fett.' },
            { text: 'Primitivo – Fleisch ist Fleisch, also kräftiger Rotwein', correct: false,
              feedback: 'Ein Kalbsschnitzel ist kein Ribeye. Der Primitivo erschlägt es – die Waage kippt.' },
            { text: 'Lambrusco – Süße gegen das Salz der Panade', correct: false,
              feedback: 'Das Stärkste auf dem Teller ist hier das Fett, nicht das Salz. Und dagegen hilft Säure, nicht Süße.' },
            { text: 'Egal – zu Schnitzel passt alles', correct: false,
              feedback: 'Non. Gerade beim Klassiker gibt es eine klassische Antwort. Und die steht auf der Karte.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast bestellt einen griechischen Bauernsalat mit viel Feta, Oliven und Zitrone – salzig und frisch. Welcher Weg führt zum Ziel?',
          options: [
            { text: 'Ein trockener, frischer Weißwein, zum Beispiel ein Retsina – regional, und Frische gegen das Salz', correct: true,
              feedback: 'Bien. Er kommt aus der Heimat des Feta, und seine Frische antwortet dem Salz. Die Waage stimmt auch: leicht zu leicht.' },
            { text: 'Ein süßer Dessertwein – süß gegen salzig, wie beim Roquefort', correct: false,
              feedback: 'Gut gedacht – aber prüfen Sie die Waage! Ein leichter Salat wird vom schweren Dessertwein erschlagen. Beim kräftigen Blauschimmel ist das etwas anderes.' },
            { text: 'Ein schwerer, kräftiger Rotwein – der ergänzt die Oliven', correct: false,
              feedback: 'Das Stärkste auf diesem Teller ist Salz und Frische, nicht Wucht. Der Rote überrollt den Salat.' },
            { text: 'Egal – zu Salat braucht man keinen Wein', correct: false,
              feedback: 'Der Gast hat gefragt. Also bekommt er eine Antwort – und zwar eine gute.' },
          ]
        }
      },
      {
        id: 'ak_2_5', title: 'Die richtigen Fragen stellen',
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
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast sagt: "Wir feiern heute unseren Hochzeitstag – ich nehme den Rinderbraten, meine Frau auch." Was fragen Sie als Nächstes?',
          options: [
            { text: '"Wunderbar! Trinken Sie lieber Rot oder Weiß – und eher frisch oder eher kräftig?"', correct: true,
              feedback: 'Bien. Gericht und Anlass kennen Sie schon – jetzt fehlt nur noch der Geschmack der beiden.' },
            { text: '"Wie viel darf die Flasche denn kosten?"', correct: false,
              feedback: 'Non. Nicht am Hochzeitstag, nicht als Frage. Zeigen Sie lieber diskret zwei, drei Preislagen.' },
            { text: '"Dann bringe ich Ihnen meinen Lieblingswein."', correct: false,
              feedback: 'Ihr Lieblingswein feiert keinen Hochzeitstag. Die beiden schon. Fragen Sie sie.' },
            { text: '"Was essen Sie denn?"', correct: false,
              feedback: 'Das hat er Ihnen gerade gesagt, mon ami. Zuhören! Jetzt kommt die Frage nach dem Geschmack.' },
          ]
        }
      },
      {
        id: 'ak_2_6', title: 'Die kleine Karte',
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
        },
        extra: {
          type: 'choice',
          question: 'Dieselbe Karte: Riesling trocken · Grauburgunder · Rosé trocken · Dornfelder halbtrocken · Primitivo · Sekt. Ein Gast bestellt gebratenen Zander mit Zitronenbutter: "Gern etwas Weißes, Trockenes mit viel Frische – aber ohne Bläschen." Was nehmen Sie?',
          options: [
            { text: 'Riesling trocken', correct: true,
              feedback: 'Bien. Weiß, trocken, viel Säure – die Zitrone im Teller findet ihre Schwester im Glas.' },
            { text: 'Sekt', correct: false,
              feedback: 'Frisch und trocken, oui – aber er hat ausdrücklich "ohne Bläschen" gesagt. Zuhören!' },
            { text: 'Dornfelder halbtrocken', correct: false,
              feedback: 'Rot und halbtrocken – zweimal am Wunsch vorbei. Und der zarte Zander verschwindet.' },
            { text: 'Primitivo', correct: false,
              feedback: 'Ein Schwergewicht zum zarten Fisch? Die Waage kippt, bevor der Gast die Gabel hebt.' },
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
        text: '<strong>Terroir</strong> – das Wort, mit dem wir Franzosen sehr viel erklären. Es meint das Zusammenspiel von <strong>Boden, Klima und Lage</strong> – und dem Menschen, der dort arbeitet. Ein steiler Südhang an der Mosel fängt mehr Sonne als der Nordhang gegenüber. Kalkboden gibt oft straffe, mineralische Weine, wie in Chablis. Dieselbe Traube, drei Kilometer weiter – ein anderer Wein. Darum kosten manche Lagen ein Vermögen. Noch zwei Wörter, die Sie oft hören werden: <strong>Alte Welt</strong> und <strong>Neue Welt</strong>. Alte Welt, das sind die klassischen Weinländer Europas. Neue Welt ist alles, was später dazukam: Argentinien, Südafrika, Kalifornien, Australien, Neuseeland. Dort ist es meist wärmer, die Weine sind fruchtiger und kräftiger; in der Alten Welt zählt mehr das Terroir.',
        exercise: {
          type: 'choice',
          question: 'Welche Aussage über Terroir stimmt?',
          options: [
            { text: 'Boden, Klima, Lage und Mensch prägen gemeinsam den Charakter eines Weins', correct: true,
              feedback: 'Bien. Terroir ist ein Zusammenspiel, kein einzelner Faktor.' },
            { text: 'Terroir ist einfach der Bodentyp', correct: false,
              feedback: 'Der Boden ist wichtig – aber ohne Klima und Lage erzählt er nur die halbe Geschichte.' },
            { text: 'Terroir ist das französische Wort für Weinkeller', correct: false,
              feedback: 'Non. Der Keller kommt erst danach. Terroir ist draußen im Weinberg.' },
            { text: 'Terroir gibt es nur in Frankreich', correct: false,
              feedback: 'Das Wort ist französisch, die Idee nicht. Mosel, Wachau, Mendoza – überall gibt es Terroir.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast probiert zwei Rieslinge: gleicher Winzer, gleicher Jahrgang, gleiche Arbeit im Keller. Einer stammt vom steilen Südhang, einer vom flachen Nordhang gegenüber. "Warum schmecken die so verschieden?"',
          options: [
            { text: '"Das ist Terroir: andere Lage, andere Sonne, oft auch ein anderer Boden."', correct: true,
              feedback: 'Bien. Gleiche Traube, gleicher Mensch – und trotzdem zwei Weine. Das ist Terroir.' },
            { text: '"Das bilden Sie sich ein – gleiche Traube, gleicher Wein."', correct: false,
              feedback: 'Non. Und sagen Sie einem Gast nie, dass er sich etwas einbildet. Die Lage macht den Unterschied.' },
            { text: '"Der vom Nordhang hatte mehr Sonne und ist darum reifer."', correct: false,
              feedback: 'Umgekehrt. Der Südhang fängt die Sonne – der Nordhang liegt im Schatten.' },
            { text: '"Das liegt nur an den unterschiedlichen Etiketten."', correct: false,
              feedback: 'Mon Dieu. Das Etikett schmeckt man nicht. Die Lage schon.' },
          ]
        }
      },
      {
        id: 'ak_3_2', title: 'Ausbau: Stahl, Holz, Reife',
        text: 'Nach der Gärung entscheidet der Winzer: Wohin mit dem Wein? Im <strong>Edelstahltank</strong> bleibt er frisch, klar, fruchtig – pure Traube. Im <strong>Holzfass</strong>, besonders im kleinen, neuen <strong>Barrique</strong> (225 Liter), bekommt er Vanille, Toast, Rauch – und durch ein wenig Sauerstoff weichere Tannine. Großes, altes Holz gibt kaum Aroma, nur Ruhe und Rundung. Und die <strong>Reife</strong>: Frische Weißweine wollen jung getrunken werden; kräftige Rote mit viel Tannin brauchen oft Jahre – dabei werden sie weicher und bekommen Noten wie Leder und Tabak.',
        exercise: {
          type: 'choice',
          question: 'Zwei Chardonnays vom selben Winzer: Der eine duftet nach Zitrone und grünem Apfel, der andere nach Vanille und Toast. Was ist der wahrscheinlichste Unterschied?',
          options: [
            { text: 'Der erste reifte im Edelstahltank, der zweite im Barrique', correct: true,
              feedback: 'Bien. Pure Traube aus dem Stahl, Vanille und Toast aus dem Holz. Sie lesen den Keller.' },
            { text: 'Der zweite stammt aus einem wärmeren Klima', correct: false,
              feedback: 'Wärme gibt reifere Frucht und mehr Alkohol – aber keine Vanille. Die kommt aus dem Fass.' },
            { text: 'Dem zweiten wurde Vanille zugesetzt', correct: false,
              feedback: 'Mon Dieu, non! Das wäre verboten. Das Aroma stammt aus dem getoasteten Eichenholz.' },
            { text: 'Der erste ist einfach älter', correct: false,
              feedback: 'Zeit bringt Noten wie Nuss oder Honig – keine frische Zitrone. Die Frische kommt aus dem Stahltank.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast möchte einen Weißwein "ohne Holzgeschmack – ganz pur, frisch und fruchtig". Worauf achten Sie?',
          options: [
            { text: 'Auf einen Ausbau im Edelstahltank', correct: true,
              feedback: 'Bien. Der Stahltank fügt nichts hinzu – genau das ist sein Sinn.' },
            { text: 'Auf einen Ausbau im neuen Barrique', correct: false,
              feedback: 'Genau das Gegenteil: Neues Barrique bringt Vanille, Toast, Rauch. Das ist Holzgeschmack.' },
            { text: 'Auf einen möglichst alten, lange gereiften Wein', correct: false,
              feedback: 'Lange Reife bringt andere Noten, nicht mehr Frische. Frische Weißweine trinkt man jung.' },
            { text: 'Auf möglichst viel Tannin', correct: false,
              feedback: 'Tannin ist pelzig und kommt vor allem bei Rotwein vor. Mit "pur und frisch" hat das nichts zu tun.' },
          ]
        }
      },
      {
        id: 'ak_3_3', title: 'Malolaktik: Woher kommt die Butter?',
        text: 'Ein Wort, das auf jeder Weinprobe fällt: <strong>Malolaktik</strong>, auf Deutsch auch biologischer Säureabbau. Nach der Gärung wandeln <strong>Milchsäurebakterien</strong> die herbe <strong>Apfelsäure</strong> – wie im grünen Apfel – in die mildere <strong>Milchsäure</strong> um – wie im Joghurt. Der Wein wird weicher und runder; dabei kann <strong>Diacetyl</strong> entstehen, und das riecht nach Butter. Bei Rotwein passiert das fast immer, bei Weißwein ist es eine Stilentscheidung: Wer knackige Frische will, verhindert sie, wer Cremigkeit will, lässt sie zu. Chablis macht sie übrigens meistens – ganz ohne Holz: Malolaktik und Barrique sind zwei verschiedene Dinge.',
        exercise: {
          type: 'choice',
          question: 'Ein Weißwein duftet nach Vanille, Toast und ein wenig Butter. Was ist wahrscheinlich im Keller passiert?',
          options: [
            { text: 'Ausbau im Barrique, dazu Malolaktik', correct: true,
              feedback: 'Bien. Vanille und Toast vom Holz, Butter von der Malolaktik. Zwei Dinge, sauber getrennt.' },
            { text: 'Ausbau im Edelstahltank – der macht cremig', correct: false,
              feedback: 'Der Stahltank fügt nichts hinzu – genau das ist sein Sinn. Vanille kommt vom Holz, Butter von den Bakterien.' },
            { text: 'Es wurde etwas Butter zugegeben', correct: false,
              feedback: 'Mon Dieu, non! Die Butternote entsteht von selbst – durch das Diacetyl aus der Malolaktik.' },
            { text: 'Die Trauben hatten besonders viel Sonne', correct: false,
              feedback: 'Sonne gibt reife Frucht und Alkohol. Vanille, Toast und Butter stammen aus dem Keller.' },
          ]
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast fragt neugierig: "Auf der Karte steht bei einem Weißwein ,mit Malolaktik\'. Was passiert da eigentlich?"',
          options: [
            { text: '"Bakterien wandeln die herbe Apfelsäure in mildere Milchsäure um – der Wein wird runder, manchmal leicht buttrig."', correct: true,
              feedback: 'Bien. Ein Satz, alles drin. Der Gast versteht es – und Sie auch.' },
            { text: '"Man gibt etwas Milch in den Wein, damit er weicher wird."', correct: false,
              feedback: 'Mon Dieu! Milchsäure, nicht Milch. Und hinzugefügt wird gar nichts – das machen die Bakterien selbst.' },
            { text: '"Der Wein reift in Fässern aus Apfelholz."', correct: false,
              feedback: 'Charmant, aber nein. "Malo" kommt von der Apfelsäure, nicht vom Apfelbaum. Und mit Holz hat das nichts zu tun.' },
            { text: '"Eine zweite Gärung in der Flasche, damit Bläschen entstehen."', correct: false,
              feedback: 'Non, das wäre die Flaschengärung für Schaumwein. Bei der Malolaktik geht es um die Säure, nicht um Bläschen.' },
          ]
        }
      },
      {
        id: 'ak_3_4', title: 'Etikett lesen II',
        text: 'Auf deutschen Etiketten finden Sie oft das Wort <strong>Prädikatswein</strong> – die oberste Qualitätsstufe. Dazu kommt ein Prädikat, und das sagt, wie <strong>reif</strong>, also wie zuckerreich, die Trauben bei der Lese waren: <strong>Kabinett</strong> (reif), <strong>Spätlese</strong> (später gelesen, reifer), <strong>Auslese</strong> (besonders reife, ausgewählte Trauben) – und darüber nur noch süße Raritäten. Gemessen wird diese Reife als <strong>Mostgewicht</strong>, also als Zuckergehalt des Traubensafts, in Grad Oechsle. Wichtig: Das Prädikat sagt nicht automatisch, wie süß der Wein ist – eine Spätlese kann auch trocken sein! Die Süße verrät Ihnen das Etikett oder, wenn sie fehlt, der Alkohol, wie an Tag 1. Und <strong>Grand Cru</strong> oder <strong>Premier Cru</strong> auf französischen Etiketten heißt: offiziell als besonders gut eingestuft – im Burgund und in Chablis sind das Lagen, Grand Cru die höchste Stufe, Premier Cru die zweithöchste; Bordeaux hat eigene Regeln.',
        exercise: {
          type: 'label',
          label: { producer: 'Weingut Kranzberger', color: 'Weißwein', wine: 'Riesling Auslese', region: 'Mosel · Wehlsteiner Himmelsleiter', quality: 'Prädikatswein', vintage: '2019', alcohol: '8,0 % vol' },
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
        },
        extra: {
          type: 'label',
          label: { producer: 'Weingut Steinreuther', color: 'Weißwein', wine: 'Riesling Spätlese', region: 'Pfalz', quality: 'Prädikatswein', vintage: '2022', sweetness: 'trocken', alcohol: '13,0 % vol' },
          question: 'Ein Gast winkt ab: "Spätlese? Nein danke, die ist doch immer süß!" Was sagen Sie?',
          options: [
            { text: '"Diese nicht: Spätlese heißt nur, dass die Trauben reifer gelesen wurden. Hier steht trocken – und 13 % zeigen, dass der Zucker vergoren ist."', correct: true,
              feedback: 'Bien. Prädikat = Reife, nicht Süße. Und Sie haben zwei Beweise auf dem Etikett gefunden.' },
            { text: '"Stimmt, Spätlesen sind immer süß – ich bringe Ihnen etwas anderes."', correct: false,
              feedback: 'Non. Sie geben auf, und der Gast lernt etwas Falsches. Lesen Sie das Etikett: "trocken".' },
            { text: '"Spätlese heißt, dass der Wein spät im Jahr abgefüllt wurde."', correct: false,
              feedback: 'Gelesen, nicht abgefüllt. Es geht um die Reife der Trauben bei der Lese.' },
            { text: '"13 % bedeutet besonders viel Zucker – er ist also extra süß."', correct: false,
              feedback: 'Umgekehrt! Viel Alkohol heißt: Der Zucker ist zu Alkohol geworden. Und "trocken" steht ja auch da.' },
          ]
        }
      },
      {
        id: 'ak_3_5', title: 'Unbekannter Wein? Die Einordnungs-Methode',
        text: 'In drei Jahren stehen Sie vor einer Karte voller Weine, die Sie nie gesehen haben. Das ist normal. Sie müssen nicht alle Weine kennen – Sie müssen jeden <strong>einordnen</strong> können. Dafür der Steckbrief mit fünf Achsen: <strong>Farbe · Süße · Körper · Säure · Tannin</strong>, dazu eine <strong>Aromafamilie</strong> (zitrisch-frisch, rote Frucht, dunkle Frucht, würzig, Holz & Reife …). Die Rebsorte liefert die DNA, die Herkunft das Klima, das Etikett Alkohol und Süße. Voilà – plötzlich kennen Sie einen Wein, den Sie nie probiert haben.',
        exercise: {
          type: 'label',
          label: { producer: 'Weingut Ebnerhof', color: 'Rotwein', wine: 'Blaufränkisch', region: 'Burgenland, Österreich', quality: 'Qualitätswein', vintage: '2021', sweetness: 'trocken', alcohol: '13,0 % vol' },
          question: 'Blaufränkisch kennen Sie nicht. Aber Frau Lindner hat es Ihnen verraten: Er ist ein Elternteil des Zweigelt. Welcher Steckbrief passt am besten?',
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
        },
        extra: {
          type: 'label',
          label: { producer: 'Tenuta Pietrarossa', color: 'Rotwein', wine: 'Nero d\'Avola', region: 'Sizilien, Italien', vintage: '2021', sweetness: 'trocken', alcohol: '14,5 % vol' },
          question: 'Nero d\'Avola kennen Sie nicht. Sie wissen nur: Sizilien ist heiß und sonnig. Welcher Steckbrief passt am besten?',
          options: [
            { text: 'Rot · trocken · voll · eher wenig Säure · spürbares Tannin · reife dunkle Frucht & Gewürze', correct: true,
              feedback: 'Bien. Heißes Klima, 14,5 %, trocken – reif, dunkel, kräftig. Sie haben einen Wein gelesen, den Sie nie getrunken haben.' },
            { text: 'Rot · trocken · leicht · sehr viel Säure · kaum Tannin · Johannisbeere', correct: false,
              feedback: 'Das wäre ein Wein aus kühlem Klima mit wenig Alkohol. Hier: Sizilien und 14,5 %.' },
            { text: 'Rot · süß · voll · Rosinen & Honig', correct: false,
              feedback: 'Da steht "trocken". Die 14,5 % kommen vom vergorenen Zucker, nicht vom übrig gebliebenen.' },
            { text: 'Ohne die Rebsorte zu kennen, sagt das Etikett nichts', correct: false,
              feedback: 'Herkunft, Alkohol, Süße – drei von fünf Achsen stehen schon da. Das reicht für eine gute Empfehlung.' },
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
        },
        extra: {
          type: 'choice',
          question: 'Ein gereifter Weißwein duftet nach Zitrone, Brioche und Walnuss. Welche Zuordnung stimmt?',
          options: [
            { text: 'Zitrone primär · Brioche sekundär · Walnuss tertiär', correct: true,
              feedback: 'Bien. Frucht aus der Traube, Brioche aus der Hefe, Nuss aus den Jahren. Sauber sortiert.' },
            { text: 'Zitrone sekundär · Brioche primär · Walnuss tertiär', correct: false,
              feedback: 'Brioche wächst nicht am Rebstock. Sie kommt von der Hefe – sekundär. Die Zitrone ist Traube – primär.' },
            { text: 'Alles tertiär – der Wein ist ja gereift', correct: false,
              feedback: 'Auch ein alter Wein behält seine Frucht und seine Hefenoten. Drei Schubladen, nicht eine.' },
            { text: 'Zitrone primär · Brioche tertiär · Walnuss sekundär', correct: false,
              feedback: 'Fast. Aber Brioche kommt aus der Hefe, also aus der Gärung – sekundär. Nüsse brauchen Zeit – tertiär.' },
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
        },
        extra: {
          type: 'choice',
          question: 'Ein Gast fragt: "Mein Schwager sagt immer, ein Wein hat einen ,langen Abgang\'. Was soll das heißen?"',
          options: [
            { text: '"Dass der Geschmack nach dem Schlucken noch lange im Mund bleibt – ein Zeichen für Qualität."', correct: true,
              feedback: 'Bien. Klar, kurz, in seiner Sprache. Und jetzt kann er seinen Schwager beeindrucken.' },
            { text: '"Dass der Wein besonders lange im Fass gelegen hat."', correct: false,
              feedback: 'Non. Der Abgang passiert in Ihrem Mund, nicht im Keller.' },
            { text: '"Dass man ihn langsam trinken soll."', correct: false,
              feedback: 'Langsam trinken ist immer eine gute Idee – aber das meint "Abgang" nicht.' },
            { text: '"Dass er viel Alkohol hat."', correct: false,
              feedback: 'Alkohol gehört zur Struktur. Der Abgang ist, wie lange der Geschmack bleibt.' },
          ]
        }
      },
      {
        id: 'ak_4_3', title: 'Die fremde Weinkarte',
        text: 'Neues Haus, 40 Positionen, der Gast wartet – Sie haben zwei Minuten. Keine Panik. Sortieren Sie im Kopf: erst <strong>Farbe</strong>, dann <strong>Stil</strong> (Schaum, frisch, kräftig, süß), dann <strong>Körper</strong>. Suchen Sie <strong>Ankerweine</strong> – Namen, die Sie kennen und an denen Sie die anderen messen. Und die Unbekannten? Steckbrief aus dem Etikett, wie gelernt. Niemand kennt alle Weine – aber ein guter Sommelier findet in zwei Minuten den richtigen.',
        exercise: {
          type: 'label',
          label: { producer: 'Domaine de la Grange-Neuve', color: 'Weißwein', wine: 'Muscadet Sèvre et Maine sur lie · Melon de Bourgogne', region: 'Loire, nahe der Atlantikküste', vintage: '2023', sweetness: 'trocken', alcohol: '12,0 % vol' },
          question: 'Diesen Wein kennen Sie nicht. Am Tisch: ein Gast mit sechs Austern und Zitrone. Was tun Sie?',
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
        },
        extra: {
          type: 'label',
          label: { producer: 'Bodegas Altamesa', color: 'Rotwein', wine: 'Monastrell', region: 'Jumilla, Südostspanien', vintage: '2020', sweetness: 'trocken', alcohol: '15,0 % vol' },
          question: 'Auch diesen Wein kennen Sie nicht. Am Tisch: ein Gast mit geschmorter Lammschulter und Rosmarin, der "etwas Kräftiges, Rotes" möchte. Was tun Sie?',
          options: [
            { text: 'Ihn empfehlen: Südspanien, heiß, trocken, 15 % – voll, reif und kräftig. Genau richtig zum Schmorgericht.', correct: true,
              feedback: 'Bien. Warmes Klima, viel Alkohol, trocken – der Steckbrief schreibt sich von selbst. Und das Lamm freut sich.' },
            { text: 'Lieber den leichten Riesling nehmen – den kenne ich wenigstens', correct: false,
              feedback: 'Bekannt ist nicht gleich passend. Er wollte rot und kräftig – der Riesling ist weder das eine noch das andere.' },
            { text: 'Finger weg – "Monastrell" klingt nach Kloster, also ein süßer Messwein', correct: false,
              feedback: 'Ein Name ist kein Geschmack. "Trocken" steht drauf. Lesen, nicht raten.' },
            { text: 'Dem Gast sagen, dass Sie ihn nicht kennen, und einen anderen Kellner holen', correct: false,
              feedback: 'Ehrlichkeit ist gut – aber hier können Sie es selbst herausfinden. Das Etikett hat Ihnen alles gesagt.' },
          ]
        }
      },
      {
        id: 'ak_4_4', title: 'Abschluss-Gespräch',
        text: 'Alors … legen Sie die Stifte weg. Sie sind jetzt Sommelier: der Weinfachmann im Haus. Sie beraten, kaufen ein, pflegen die Karte und servieren. Sie werden Gäste treffen, die mehr wissen als Sie. Und Weine, die Sie nie gesehen haben. Dann erfinden Sie nichts. Sie sagen: <strong>"Ich weiß es nicht – aber ich finde es heraus."</strong> Ehrlichkeit kostet Sie nichts, eine Lüge kostet Sie den Gast. Und vergessen Sie nie: <strong>Nicht was SIE mögen, nicht was weg muss – sondern was DIESER Gast zu DIESEM Gericht braucht.</strong>',
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
        },
        extra: {
          type: 'choice',
          question: 'Der Chef flüstert Ihnen zu: "Verkauf den schweren Roten mit 15 %, davon haben wir viel zu viel." Am Tisch sitzt ein Gast mit gedämpftem Zander und Zitronenbutter, der "etwas Leichtes, Weißes" möchte. Was tun Sie?',
          options: [
            { text: 'Ihm einen leichten, frischen Weißwein empfehlen – und dem Chef später erklären, warum', correct: true,
              feedback: 'Bien. (Sie nickt langsam.) Der Gast vertraut Ihnen. Das ist mehr wert als jede Kiste im Keller.' },
            { text: 'Den schweren Roten – der Chef ist der Chef', correct: false,
              feedback: 'Und der Gast? Er hat "leicht und weiß" gesagt. Was weg muss, darf nie wichtiger sein als das, was er braucht.' },
            { text: 'Den schweren Roten, aber mit einem kleinen Rabatt', correct: false,
              feedback: 'Ein falscher Wein wird durch Rabatt nicht richtig. Nur billiger falsch.' },
            { text: 'Ihren eigenen Lieblingswein – dann ist wenigstens einer zufrieden', correct: false,
              feedback: 'Non, non, non. Weder Ihr Geschmack noch der Keller – DIESER Gast, DIESES Gericht.' },
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
  riesling: 'Malaka, schau – Riesling trocken, aus Deutschland! Deutschland ist kühl, fast das nördlichste Weinland überhaupt. Rote Trauben werden da nur in den warmen Ecken richtig reif, deswegen wächst vor allem Weißwein – und der Riesling ist der berühmteste Weiße von allen. Frisch, sauer wie eine Zitrone, Apfel, ein bisschen wie nasser Stein, und leicht: meistens nur elf, zwölf Prozent Alkohol. Zu Fisch, Hähnchen, Spargel – die Deutschen sind verrückt nach Spargel. Immer schön kalt servieren, so acht bis zwölf Grad, ja? Und bleibt eine Flasche offen: Deckel drauf, ab in den Kühlschrank, dann hält sie noch zwei, drei Tage. Und Schraubverschluss heißt nicht billig: Viele Top-Winzer nehmen ihn, weil ein schlechter Korken den Wein muffig machen kann – dann riecht er wie nasse Pappe.',
  dornfelder: 'Das ist Dornfelder, eine deutsche rote Rebsorte. Kirsche, Brombeere, halbtrocken – unkompliziert wie mein Cousin Jannis. Passt zu Gyros, Pizza, Grillwurst, zu allem Deftigen. Wenn einer sagt "Hauptsache rot" – nimm den! Aber nicht bei Zimmertemperatur, Malaka: Leichte Rote wollen 14 bis 16 Grad, kräftige 16 bis 18 – sonst schmeckt er wie warme Suppe. Und immer erst riechen, dann trinken: Die Nase merkt mehr als die Zunge.',
  mueller_thurgau: 'Müller-Thurgau! Klingt wie ein Steuerberater, oder? Ist aber ein milder, blumiger Weißer – Apfel, ein bisschen Muskat, halbtrocken und leicht wie eine Feder. Der Name kommt von Professor Hermann Müller aus dem Schweizer Kanton Thurgau, der die Traube gezüchtet hat. Perfekt zu Salat, leichtem Fisch und Hähnchen. Und merk dir: Viele Trauben haben mehrere Namen – Grauburgunder und Pinot Grigio sind dieselbe!',
  lambrusco: 'Lambrusco aus Italien – rot, und er prickelt ein bisschen! Erdbeere, Kirsche, lieblich und leicht. Die Studenten lieben den zur Pizza. Gut gekühlt servieren, dann schmeckt er wie Sommer, Malaka. Und wenn einer sagt, vom Wein kriegt er Kopfweh wegen der Sulfite: Quatsch – in Trockenobst steckt viel mehr davon, Kopfweh macht meistens die dritte Flasche.',
  imiglykos: 'Ahhh, Imiglykos – aus meiner Heimat! Das heißt "halbsüß", gemacht aus der Agiorgitiko-Traube. Ein Roter – Kirsche, Pflaume, schön lieblich und leicht. Zu Gyros, Souvlaki, Moussaka – wie bei meiner Yiayia auf Kreta. Und Kalorien kommen vom Alkohol und vom Zucker, nicht von der Farbe – so ein Süßer hat mehr als ein trockener Weißer. Opa!',
  retsina: 'Und das hier ist Retsina. Riech mal – Kiefer! Wein machen wir Griechen schon seit über 6000 Jahren, und Harz geben wir seit über 2000 Jahren dazu. Trockener Weißer, Zitrus, Harz – zu Feta, Oliven, Meeresfrüchten und Gyros. Aber nicht jeder mag das, also erst fragen!',

  // --- Mike, Steakhaus ---
  gruener_veltliner: 'Okay Bro, Grüner Veltliner – Österreichs Nummer eins in Weiß, und er wächst fast nur dort: quasi deren Nationalwein. Trocken, Apfel, Kräuter und so ein pfeffriger Kick hinten am Gaumen. Zum Wiener Schnitzel ein absolutes Dream Team – und zu Fisch und Spargel easy. Auch zu Hähnchen, Salat oder Ziegenkäse bringt der richtig Charakter ins Glas.',
  spaetburgunder: 'Spätburgunder, Dude – international heißt der Pinot Noir. Gleiche Traube, deutscher Pass. Trocken, mittlerer Körper, Kirsche, Himbeere, was Erdiges. Nicht der Wein fürs fette Ribeye – eher zu magerem Rind wie Filet, zu Braten, Geflügel, Pilzen, sogar zu Lachs. Elegant, Bro.',
  primitivo: 'Und jetzt: The Beast. Primitivo di Manduria aus Apulien – voll, trocken, Pflaume, Schokolade, Gewürze. Der steht dem Steak auf Augenhöhe gegenüber, Lamm und Wild auch. Der Name heißt übrigens "der Frühe" – die Traube reift als eine der ersten, mit primitiv hat das null zu tun. Fun Fact: In Kalifornien heißt der Zinfandel – gleiche DNA! Und gönn ihm ne Karaffe, Bro: Dekantieren lässt ihn atmen, dann gehen die Aromen auf.',
  chianti: 'Chianti aus der Toskana – die Rebsorte ist Sangiovese, Chianti ist die Region, merk dir das! Kirsche, Kräuter, ein bisschen Leder, schön frische Säure. Zu Steak, Tomatenpasta und Hartkäse – Marco bestellt nix anderes. Und siehst du das DOCG auf der Flasche? Das ist Italiens höchste Qualitätsstufe, Bro.',
  sekt: 'Deutscher Sekt, Bro – Bubbles! Trocken, Apfel, Hefe, ein bisschen Brioche. Perfekt als Aperitif oder wenn einer was zu feiern hat. Und nein, das ist kein Champagner: Der Name ist geschützt und darf nur aus der Champagne in Frankreich kommen – Sekt machen wir hier. Und ja: Wir Deutschen trinken weltweit am meisten Sekt. Cheers!',
  rose_provence: 'Rosé de Provence – hellrosa, trocken, leicht. Erdbeere, Pfirsich, Kräuter. Summer Vibes zum Grillen, zu Salat oder Fisch. Und wenn einer sagt, Rosé ist gemischt: nope – rote Trauben, kurzer Schalenkontakt. Let’s go.',
  weissherbst: 'Spätburgunder Weißherbst aus Baden. Klingt nach Weißwein – ist aber ein Rosé, aus nur einer roten Rebsorte. Erdbeere, Himbeere, halbtrocken und leicht. Zu Flammkuchen und Grillgemüse ein Hit, Bro.',

  // --- Frau Lindner, Gasthaus ---
  zweigelt: 'Grüß Gott, Kindchen – das ist der Zweigelt aus Österreich. Professor Zweigelt hat ihn 1922 gekreuzt – aus Blaufränkisch und St. Laurent. Ein Roter mit viel Kirsche und Beeren, die Tannine schön weich. Zum Sonntagsbraten, zum Rind und zum Wild, da sagt sogar der Stammtisch nichts mehr. Leicht gekühlt servieren, so um die 16 Grad – den Weißen trinkt man kälter, weil Kälte die Frische betont, aber beim Roten macht sie die Tannine hart.',
  gewuerztraminer: 'Jetzt riech mal, Kindchen – Litschi, Rosen, Gewürze! Und das ist alles die Traube selbst, da kommt keine einzige Rose ins Fass. Das ist der Gewürztraminer, halbtrocken und unverwechselbar; "Gewürz" steht für den würzigen Duft, und "Traminer" kommt vom Dörfchen Tramin in Südtirol. Zur Vesperplatte, zum Käse und – das hätte meine Mutter nie geglaubt – zur asiatischen Küche. Den liebt man, oder man lässt ihn stehen.',
  rioja_crianza: 'Das hier ist ein Spanier, der Rioja Crianza – und Spanien hat mehr Weinberge als jedes andere Land der Welt, sogar mehr als Frankreich. Tempranillo, mindestens zwei Jahre gereift, eins davon im Holzfass – drum schmeckt man Kirsche und ein bisschen Vanille. Durch das Holz kommt ganz langsam ein bisschen Luft an den Wein; das macht ihn rund und die Tannine weicher. Reift er noch länger, heißt er Reserva, und ganz lange Gran Reserva. Zu Lamm, Wild, Käse und allem Geschmorten. Mein Gulasch mag ihn auch.',
  cremant: 'Crémant aus dem Elsass, Kindchen – ein Schaumwein mit Flaschengärung, gemacht wie Champagner, aber zum halben Preis. Apfel, Birne, Blüten, schön trocken. Zum Aperitif, zum Fisch und bei Hochzeiten – das Brautpaar von nebenan hat schon gefragt.',
  vinho_verde: 'Vinho Verde aus Portugal. "Grüner Wein" heißt das – nicht wegen der Farbe, sondern weil man ihn jung trinkt. Zitronig, leicht und ein bisschen spritzig. Zu Fisch und Meeresfrüchten, und im Sommer im Biergarten ein Gedicht.',
  pinot_grigio: 'Und das ist der Pinot Grigio aus Norditalien – bei uns heißt die gleiche Traube Grauburgunder. Leicht, trocken, Birne, Zitrus, ein Hauch Mandel. Zu Fisch, Salat und Meeresfrüchten. Ein braver Wein, der niemandem wehtut.',

  // --- Monsieur Laurent, Le Vignoble ---
  barolo: 'Voilà, der Barolo. Nebbiolo aus dem Piemont – man nennt ihn den König der Weine. Teer und Rosen, Kirschen, Lakritz, mächtiges Tannin, mindestens 38 Monate Reife, davon 18 im Holz. Zu Trüffel, Risotto, Wild und edlem, marmoriertem Rind – sein Tannin gibt Struktur, das Fett macht es weich. Die besten stammen oft von alten Reben: weniger Trauben, aber konzentrierter. Und bitte dekantieren Sie ihn – er möchte atmen.',
  malbec: 'Malbec aus Mendoza, Argentinien. Geboren in Cahors in Südwestfrankreich, erwachsen geworden in der Neuen Welt, also außerhalb Europas, am Fuß der Anden. Voll, trocken, Pflaume, Brombeere, ein Hauch Schokolade – und im Glas tiefes Violett, fast schwarz. Zum Steak vom Grill ist er unschlagbar – die Argentinier wissen, warum.',
  riesling_spaetlese: 'Eine Riesling Spätlese, ein deutscher Prädikatswein. Spät gelesene, reife Trauben – Pfirsich, Aprikose, Honig und eine feine Restsüße, getragen von der Säure. Zu Foie Gras, zur asiatischen Küche und zu Käse, vom milden bis zum kräftig gereiften. Magnifique.',
  saint_emilion: 'Saint-Émilion Grand Cru, vom rechten Ufer von Bordeaux. Grand Cru ist hier keine Lage wie im Burgund, sondern eine eigene Appellation mit strengeren Regeln. Eine Cuvée aus Merlot und Cabernet Franc – Cuvée heißt verschnitten aus mehreren Rebsorten, und in Bordeaux ist das die Regel. Cassis, Zedernholz, Tabak; voll, elegant, komplex. Zum Rinderfilet, zu Trüffel und Hartkäse. Erzählen Sie ruhig, dass die ganze Weinlandschaft UNESCO-Welterbe ist.',
  chablis_premier_cru: 'Chablis Premier Cru – Chardonnay aus dem nördlichsten Burgund. Zitrus, Feuerstein, Mineralik, klassischerweise ohne Holzgeschmack. Im Boden liegen fossile Austernschalen – also, was servieren wir dazu? Austern, Fisch, Meeresfrüchte. Très bien.',
  pinotage: 'Pinotage, Südafrikas eigene Rebsorte – 1925 in Stellenbosch aus Pinot Noir und Cinsault gekreuzt. Rauchig, Beeren, ein Hauch Kaffee. Zum BBQ, zu Wild und würzigen Gerichten. Ein Wein mit Persönlichkeit: Manche lieben ihn, manche nicht.',

  // --- Chef Beaumont, Étoile ---
  champagner: 'Champagner. Nur aus der Champagne, mindestens 15 Monate Reife, davon 12 auf der Hefe – die großen drei Jahre und länger, manche sieben bis zehn. Brioche, Zitrus, weiße Blüten, vielschichtig. Die Reben stehen auf Kreide; das schmeckt man als kühle, kreidige Mineralik im Abgang, dazu geröstete Mandeln von der langen Hefelagerung. Daran erkennt man ihn neben einem Sekt. Zu Kaviar, Hummer, als Aperitif. Bei 8 bis 10 Grad – und der Korken seufzt leise, er knallt nicht.',
  chateauneuf: 'Châteauneuf-du-Pape. Südliche Rhône, bis zu 13 Rebsorten erlaubt, Grenache vorneweg. Voll, Beeren, Gewürze, Leder – und Kräuter der Garrigue, Thymian, Lavendel: Die Provence liegt nebenan. Zu Lamm, Wild, Schmorgerichten. Benannt nach dem Sommersitz der Päpste – benehmen Sie sich entsprechend.',
  eiswein: 'Eiswein. Die Trauben werden gefroren gelesen und gefroren gekeltert – in der Praxis bei minus sieben Grad oder kälter. Das schaffen nur wenige Winter: bei uns, in Österreich und vor allem in Kanada. Honig, Aprikose, Mango, Karamell: sehr süß, aber frisch durch die Säure. Zum Dessert, zu Foie Gras, zu Blauschimmelkäse. Kleine Gläser, meist halbe Flaschen – genug für zwei, denn er ist kostbar.',
  tempranillo_gran_reserva: 'Tempranillo Gran Reserva. In der Rioja heißt das: mindestens 60 Monate gereift, davon 24 im Fass. Leder, Tabak, reife Kirschen, Vanille. Zu Lamm, gereiftem Käse, zum Festmenü. Ein Wein, der Geduld verlangt – wie dieser Beruf.',
  amarone: 'Amarone della Valpolicella. Die Trauben trocknen monatelang, bevor sie gekeltert werden – Appassimento; dabei verlieren sie ein Drittel bis fast die Hälfte ihres Gewichts. Rosinen, Schokolade, Süßkirsche, Mokka: trocken ausgebaut, aber wuchtig. Zu Ossobuco, Wildbraten, reifem Käse. Wer ihn zu Austern empfiehlt, ist entlassen.',
  sancerre: 'Sancerre. Sauvignon Blanc von der Loire, der Maßstab für diese Rebsorte – in Neuseeland wird dieselbe Traube explosiv-fruchtig, hier bleibt sie mineralisch. Stachelbeere, frisches Gras, Mineralik. Zu Ziegenkäse – der kommt aus derselben Gegend –, zu Fisch und Salat. Präzise. So erwarte ich auch Ihren Service.',
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
  bw_0_4: 'mueller_thurgau', bw_0_5: 'retsina', bw_0_6: 'lambrusco', bw_0_7: 'lambrusco', bw_0_8: 'imiglykos', bw_0_12: 'retsina',
  ww_0_1: 'riesling', ww_0_2: 'retsina', ww_0_4: 'lambrusco', ww_0_5: 'dornfelder', ww_0_9: 'mueller_thurgau',
  // Steakhaus
  bw_1_1: 'chianti', bw_1_2: 'spaetburgunder', bw_1_3: 'sekt', bw_1_5: 'primitivo', bw_1_7: 'primitivo', bw_1_10: 'gruener_veltliner', bw_1_11: 'weissherbst',
  ww_1_1: 'spaetburgunder', ww_1_2: 'chianti', ww_1_3: 'sekt', ww_1_4: 'primitivo', ww_1_6: 'primitivo', ww_1_9: 'chianti', ww_1_11: 'weissherbst',
  // Gasthaus
  bw_2_1: 'gewuerztraminer', bw_2_2: 'cremant', bw_2_3: 'vinho_verde', bw_2_4: 'zweigelt', bw_2_5: 'gewuerztraminer', bw_2_8: 'gewuerztraminer', bw_2_10: 'rioja_crianza',
  ww_2_1: 'cremant', ww_2_2: 'rioja_crianza', ww_2_4: 'rioja_crianza', ww_2_9: 'rioja_crianza', ww_2_5: 'vinho_verde', ww_2_6: 'gewuerztraminer',
  // Le Vignoble
  bw_3_2: 'barolo', bw_3_3: 'malbec', bw_3_5: 'saint_emilion', bw_3_9: 'chablis_premier_cru', bw_3_10: 'saint_emilion',
  ww_3_2: 'barolo', ww_3_4: 'pinotage', ww_3_5: 'saint_emilion', ww_3_6: 'riesling_spaetlese', ww_3_9: 'chablis_premier_cru', ww_3_11: 'pinotage',
  // Étoile
  bw_4_1: 'champagner', bw_4_2: 'amarone', bw_4_3: 'chateauneuf', bw_4_4: 'eiswein', bw_4_5: 'sancerre', bw_4_6: 'eiswein',
  bw_4_7: 'chateauneuf', bw_4_8: 'amarone', bw_4_9: 'champagner', bw_4_10: 'sancerre',
  ww_4_1: 'amarone', ww_4_2: 'chateauneuf', ww_4_3: 'eiswein', ww_4_7: 'champagner',
};
