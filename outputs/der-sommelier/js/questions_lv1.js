// ============================================================
// DER SOMMELIER — Fragen Level 1: Steakhaus "Black Angus"
// Thema: Rebsorten & Charakter
// ============================================================

QUESTIONS.steakhaus = {
  food_pairing: [
    {
      id: 'fp_1_1', guestId: 'grillmeister', mood: '🔥',
      scenario: 'Der Grillmeister kommt rein, noch Rauch in den Haaren. "Alter, ich hab heute ein T-Bone auf dem Grill gehabt – perfekt medium rare. Jetzt brauch ich nen Wein, der da mithalten kann. Kein Weichei-Wein!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chianti', correct: true, explanation: 'Chianti mit seiner Kirsche und den Tanninen hält dem saftigen T-Bone stand – ein Klassiker zu Steak!' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist ein leichter Weißer – zum T-Bone viel zu zart.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé zum Steak? Zu leicht. Der Grillmeister will Wumms.' },
      ]
    },
    {
      id: 'fp_1_2', guestId: 'der_amerikaner', mood: '🤠',
      scenario: '"Hey buddy!" Der Amerikaner in Baseball-Cap strahlt über sein Texas-Grinsen. "Ich hab das Mega-Rumpsteak bestellt, well done – und dazu den kräftigsten Roten, den ihr habt. Go big or go home!"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'primitivo', correct: true, explanation: 'Primitivo di Manduria – kraftvoll, fruchtig, vollmundig. Genau der Wumms, den ein Steak-Fan braucht!' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zum well-done Steak? Das wäre ein kultureller Fehltritt.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling ist leicht und säurebetont – passt nicht zum kräftigen Steak.' },
      ]
    },
    {
      id: 'fp_1_3', guestId: 'fitnesstrainerin', mood: '💪',
      scenario: 'Die Fitnesstrainerin bestellt gegrillte Hähnchenbrust mit Avocado-Salat. "Wenig Kohlenhydrate, viel Protein. Und ein Glas Wein darf schon sein – aber bitte was Frisches, Leichtes."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Grüner Veltliner – pfeffrig, frisch und leicht. Perfekt zur gesunden Hähnchenbrust!' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist voll und schwer – nicht die "leichte" Empfehlung, die sie sucht.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Lieblicher Roter zum Fitness-Salat? Das passt geschmacklich nicht zusammen.' },
      ]
    },
    {
      id: 'fp_1_4', guestId: 'marco', mood: '🇮🇹',
      scenario: 'Marco, der italienische Austauschstudent, bestellt mit breitem Lächeln: "Spaghetti Bolognese, per favore! Come a casa." Er küsst seine Fingerspitzen. "Und einen richtigen italienischen Wein dazu – keinen deutschen!" Er zwinkert.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chianti', correct: true, explanation: 'Chianti zur Bolognese – wie von Marcos Mamma gemacht! Sangiovese und Tomate sind ein Traumpaar.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist griechisch, nicht italienisch. Marco wäre beleidigt!' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zur Bolognese? In Italien würde man dich auslachen.' },
      ]
    },
    {
      id: 'fp_1_5', guestId: 'ehepaar_koch', mood: '🥂',
      scenario: 'Ehepaar Koch kommt festlich gekleidet: Heute ist ihr 30. Hochzeitstag! "Wir wollen erst mal mit etwas Prickelndem anstoßen, bevor das Essen kommt. Haben Sie etwas Festliches?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sekt', correct: true, explanation: 'Deutscher Sekt – prickelnd, festlich und genau richtig für einen Toast auf 30 Jahre Liebe!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist ein stiller Rotwein – zum Anstoßen braucht es was Prickelndes!' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum Hochzeitstag? Das wäre eine mutige Wahl – und nicht unbedingt festlich.' },
      ]
    },
    {
      id: 'fp_1_6', guestId: 'business_duo', mood: '💼',
      scenario: 'Zwei Geschäftsleute im Anzug sitzen beim Arbeitsessen. Der Ältere bestellt Rinderfilet mit Pfeffersoße. "Dazu einen eleganten Roten bitte – aber nicht zu laut. Wir müssen noch über Zahlen reden."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder – elegant, geschmeidig, nicht zu dominant. Der diplomatische Rotwein fürs Geschäftsessen.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist süßlich und prickelnd – beim seriösen Geschäftsessen eher unpassend.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist kräftig – fast zu "laut" fürs diskrete Geschäftsessen.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_1_1', guestId: 'stammgast_jens', mood: '💪',
      scenario: 'Stammgast Jens, ehemaliger Handballspieler, lässt sich auf seinen Platz fallen. "So, heute will ich mal was anderes als Bier. Richtig kräftigen Roten! Vollmundig, fruchtig – nix für Weicheier!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'primitivo', correct: true, explanation: 'Primitivo – kräftig, fruchtig, vollmundig. Genau der Powerwein für die Siegerfeier!' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Ein milder Weißer für Rugby-Spieler nach dem Sieg? Eher nicht.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé ist zu leicht für drei durstige Rugby-Sieger.' },
      ]
    },
    {
      id: 'pref_1_2', guestId: 'ehepaar_koch', mood: '🥂',
      scenario: '"Wir haben schon angestoßen," strahlt Frau Koch, "aber jetzt wollen wir noch was Prickelndes zur Vorspeise. Festlich soll es sein – aber muss ja nicht gleich Champagner sein!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sekt', correct: true, explanation: 'Sekt – prickelnd, festlich und preislich vernünftig. Champagner-Feeling ohne Champagner-Preis!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist still – ohne Prickeln keine Feststimmung.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist nicht prickelnd und geschmacklich sehr speziell.' },
      ]
    },
    {
      id: 'pref_1_3', guestId: 'die_veganerin', mood: '🌿',
      scenario: 'Die Veganerin hat den Steak-Laden eher skeptisch betreten, sich aber für den Gemüseteller entschieden. "Haben Sie einen trockenen Rosé? Irgendwas nicht zu Süßes, nicht zu Schweres."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rose_provence', correct: true, explanation: 'Rosé de Provence – trocken, leicht, fruchtig. Perfekt zum Gemüseteller und zur Einstellung.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist lieblich und rot – das Gegenteil von "trocken und nicht zu schwer".' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist süßlich – sie wollte ausdrücklich nichts Süßes.' },
      ]
    },
    {
      id: 'pref_1_4', guestId: 'marco', mood: '🍷',
      scenario: 'Marco lehnt sich zurück und sagt: "Weißt du, ich vermisse Italien. Gibt es hier einen leichten, eleganten Rotwein? Nicht so schwer – eher wie ein Burgunder, weißt du? Etwas mit Finesse."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder = Pinot Noir – genau die Finesse und Eleganz, die Marco sucht. Fast wie Burgund!' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist kraftvoll und schwer – das Gegenteil von der gewünschten Eleganz.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist OK, aber nicht die elegante Finesse, die Marco meint.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_1_1', guestId: 'der_amerikaner', mood: '🤠',
      statement: 'Der Amerikaner zeigt auf die Weinkarte: "Chianti – das ist aus dem Veneto, richtig? War ich mal im Urlaub, super Gegend."',
      isCorrect: false,
      correction: 'Knapp daneben! Chianti kommt aus der Toskana, nicht dem Veneto. Im Veneto gibt es dafür Prosecco, Soave und Valpolicella.'
    },
    {
      id: 'bw_1_2', guestId: 'fitnesstrainerin', mood: '🤓',
      statement: '"Ich hab mal gelesen," sagt die Fitnesstrainerin, "dass Spätburgunder und Pinot Noir die gleiche Rebsorte sind. Stimmt das wirklich?"',
      isCorrect: true,
      correction: 'Stimmt! Spätburgunder (DE) = Pinot Noir (FR) = Blauburgunder (AT). Gleiche Traube, verschiedene Namen in verschiedenen Ländern.'
    },
    {
      id: 'bw_1_3', guestId: 'grillmeister', mood: '🍺',
      statement: 'Der Grillmeister prostet mit seinem Sekt: "Weißt du, Sekt ist eigentlich ein französisches Produkt – wird doch alles in der Champagne gemacht, oder?"',
      isCorrect: false,
      correction: 'Nein! Sekt ist ein deutsches Produkt und darf überall hergestellt werden. Nur "Champagner" darf ausschließlich aus der Champagne kommen – streng geschützte Herkunft!'
    },
    {
      id: 'bw_1_4', guestId: 'business_duo', mood: '🧐',
      statement: 'Der ältere Geschäftsmann schwenkt sein Glas: "Merken Sie sich, junger Mann: Je dunkler der Rotwein, desto schwerer ist er. Das ist ein Naturgesetz."',
      isCorrect: false,
      correction: 'Nicht immer! Nebbiolo (Barolo) ist relativ hell aber sehr kraftvoll. Und ein junger Malbec kann tiefschwarz, aber fruchtig-weich sein. Farbe ≠ Gewicht!'
    },
  ],

  weinwissen: [
    {
      id: 'ww_1_1', guestId: 'lisa', mood: '📝',
      question: 'Lisa lernt fleißig mit: "Ich hab gehört, Spätburgunder hat noch einen anderen Namen? Welche berühmte Rebsorte steckt dahinter?"',
      options: [
        { text: 'Pinot Noir', correct: true },
        { text: 'Cabernet Sauvignon', correct: false },
        { text: 'Merlot', correct: false },
        { text: 'Tempranillo', correct: false },
      ],
      explanation: 'Spätburgunder = Pinot Noir! Eine der edelsten roten Rebsorten der Welt, berühmt aus dem Burgund.'
    },
    {
      id: 'ww_1_2', guestId: 'marco', mood: '🇮🇹',
      question: 'Marco will dich testen: "Sag mal, aus welcher Region kommt Chianti? Ich wette, du weißt es nicht!"',
      options: [
        { text: 'Toskana', correct: true },
        { text: 'Piemont', correct: false },
        { text: 'Venetien', correct: false },
        { text: 'Sizilien', correct: false },
      ],
      explanation: 'Chianti kommt aus der Toskana in Mittelitalien. Die Hauptrebsorte ist Sangiovese.'
    },
    {
      id: 'ww_1_3', guestId: 'bergmann', mood: '🤔',
      question: 'Herr Bergmann grübelt beim Sekt: "Was ist eigentlich der Unterschied zwischen Sekt und Champagner? Schmeckt doch beides gleich..."',
      options: [
        { text: 'Die Herkunft – Champagner nur aus der Champagne', correct: true },
        { text: 'Die Rebsorte ist komplett anders', correct: false },
        { text: 'Sekt ist immer süßer', correct: false },
        { text: 'Es gibt keinen Unterschied', correct: false },
      ],
      explanation: 'Champagner darf NUR aus der Region Champagne (FR) kommen – streng geschützte Herkunftsbezeichnung. Methode und Rebsorten können ähnlich sein!'
    },
    {
      id: 'ww_1_4', guestId: 'die_veganerin', mood: '🌍',
      question: '"Primitivo di Manduria – das klingt so exotisch," sagt die Veganerin. "Aus welchem Land kommt der eigentlich?"',
      options: [
        { text: 'Italien (Apulien)', correct: true },
        { text: 'Spanien', correct: false },
        { text: 'Argentinien', correct: false },
        { text: 'Portugal', correct: false },
      ],
      explanation: 'Primitivo kommt aus Apulien (Puglia) im Süden Italiens. Fun Fact: Er ist genetisch identisch mit dem kalifornischen Zinfandel!'
    },
    {
      id: 'ww_1_5', guestId: 'grillmeister', mood: '🥩',
      question: 'Der Grillmeister fragt beim Steak: "Alle reden immer vom Körper beim Wein. Was meint man damit eigentlich?"',
      options: [
        { text: 'Das Mundgefühl – leicht bis schwer', correct: true },
        { text: 'Die Farbe des Weins', correct: false },
        { text: 'Den Alkoholgehalt allein', correct: false },
        { text: 'Die Flaschenform', correct: false },
      ],
      explanation: '"Körper" beschreibt das Mundgefühl: von leicht (wie Wasser) bis voll/schwer (wie Milch). Beeinflusst durch Alkohol, Tannine, Extrakt und Glycerin.'
    },
  ],
};
