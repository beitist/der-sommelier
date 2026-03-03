// ============================================================
// DER SOMMELIER — Fragen Level 3: Restaurant "Le Vignoble"
// Thema: Terroir & Weinbereitung (Grand Cru, Reifung, Blindverkostung)
// ============================================================

QUESTIONS.gehoben = {
  food_pairing: [
    {
      id: 'fp_3_1', guestId: 'der_bankier', mood: '💰',
      scenario: 'Der Bankier legt seine Goldmanschettenknöpfe zurecht und bestellt Rinderfilet mit schwarzem Trüffel. "Nur das Beste. Preis spielt keine Rolle – aber die Qualität muss stimmen. Was haben Sie aus Bordeaux?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion Grand Cru – eleganter Bordeaux mit Tiefe und Komplexität. Die Merlot-dominante Cuvée harmoniert wunderbar mit Trüffel und Rindfleisch.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos zum Trüffel-Rinderfilet? Das wäre ein schwerer diplomatischer Fehler im Le Vignoble.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist leicht und spritzig – dem kräftigen Gericht in keiner Weise gewachsen.' },
      ]
    },
    {
      id: 'fp_3_2', guestId: 'madame_dupont', mood: '🇫🇷',
      scenario: 'Madame Dupont bestellt mit ihrem typisch kritischen Blick: "Coq au Vin – und bitte einen Weißwein dazu, der beweist, dass Deutschland mehr kann als Riesling. Etwas Burgundisches vielleicht?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chablis_premier_cru', correct: true, explanation: 'Chablis Premier Cru – mineralischer Chardonnay aus dem Burgund, ohne Holz. Elegant genug für Madame und perfekt zum Coq au Vin!' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco zur gehobenen französischen Küche? Madame Dupont würde die Augenbraue bis zum Haaransatz heben.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zum Hauptgang? Das wäre ein Affront für eine französische Feinschmeckerin.' },
      ]
    },
    {
      id: 'fp_3_3', guestId: 'diplomatenpaar', mood: '🌐',
      scenario: 'Das Diplomatenpaar bestellt japanisches Wagyu-Beef – zart, marmoriert, perfekt gegart. "Ein Wein mit Tiefe und Struktur bitte – der diesem außergewöhnlichen Fleisch ebenbürtig ist."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, explanation: 'Barolo – der "König der Weine". Seine Tannine und Komplexität stehen dem edlen Wagyu in nichts nach. Eine würdige Paarung!' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist ein einfacher Weißer – dem Wagyu in keiner Weise gewachsen.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé zum Wagyu? Zu leicht, zu unambitioniert für dieses Premium-Fleisch.' },
      ]
    },
    {
      id: 'fp_3_4', guestId: 'die_professorin', mood: '🧀',
      scenario: 'Die Professorin bestellt eine Käseplatte mit gereiftem Comté, Roquefort und Époisses. "Ich hätte gerne etwas, das den Käse nicht erschlägt – elegant, restsüß, mit guter Säure als Gegengewicht."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling_spaetlese', correct: true, explanation: 'Riesling Spätlese – die Restsüße und die lebendige Säure bilden einen perfekten Kontrast zu kräftigem Käse. Klassische Pairing-Regel!' },
        { wineId: 'malbec', correct: false, explanation: 'Malbec ist kräftig und trocken – er würde mit dem intensiven Roquefort konkurrieren statt harmonieren.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist zu neutral und leicht für eine so kraftvolle Käseauswahl.' },
      ]
    },
    {
      id: 'fp_3_5', guestId: 'herr_tanaka', mood: '🥩',
      scenario: 'Herr Tanaka bestellt mit ruhiger Stimme: "Ein argentinisches Steak, medium – wie ich es in Buenos Aires kennengelernt habe. Und den passenden Wein dazu, bitte. Ich vertraue Ihrem Urteil."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'malbec', correct: true, explanation: 'Malbec – DER argentinische Steak-Wein! Kraftvoll, fruchtig, mit weichen Tanninen. Herr Tanaka wird sich an Buenos Aires erinnert fühlen.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum argentinischen Steak? Eine sehr unorthodoxe Kombination, die nicht funktioniert.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zum Steak wäre eine Stilbruch – Herr Tanakas Vertrauen wäre enttäuscht.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_3_1', guestId: 'der_komponist', mood: '🎵',
      scenario: 'Der Komponist starrt verträumt in die Ferne: "Ich suche einen Wein, der wie eine Symphonie ist – komplex, mit vielen Schichten, der sich im Glas entwickelt. Etwas zum Nachdenken."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, explanation: 'Barolo – eine Symphonie im Glas! Teer, Rosen, Kirschen, Lakritz – er braucht Zeit und belohnt Geduld. Genau der Nachdenkwein.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist unkompliziert – eher ein Pop-Song als eine Symphonie.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist fröhlich und einfach – die Tiefe, die der Komponist sucht, fehlt.' },
      ]
    },
    {
      id: 'pref_3_2', guestId: 'influencerin', mood: '📱',
      scenario: '"Ich suche einen kräftigen Roten aus der Neuen Welt," sagt die Influencerin und hält das Handy bereit. "Etwas Exotisches für meine Follower – \'Wine Wednesday\' hat 50k Views letzte Woche!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'malbec', correct: true, explanation: 'Malbec aus Argentinien – exotisch, kraftvoll und Instagram-tauglich! Die Influencerin wird begeistert sein.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist italienisch – Alte Welt, nicht Neue Welt.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist ein weißer Burgunder – weder Neue Welt noch kräftiger Roter.' },
      ]
    },
    {
      id: 'pref_3_3', guestId: 'weinhaendler', mood: '🍷',
      scenario: 'Der Weinhändler schaut kritisch in die Karte: "Haben Sie etwas Ungewöhnliches? Einen Roten mit Rauch, Erde, etwas das man nicht jeden Tag trinkt? Überraschen Sie mich!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'pinotage', correct: true, explanation: 'Pinotage aus Südafrika – rauchig, erdig, einzigartig! Die eigene Rebsorte des Kaps. Genau die Überraschung, die der Weinhändler sucht.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist mild und alltäglich – das Gegenteil einer Überraschung.' },
        { wineId: 'cremant', correct: false, explanation: 'Crémant ist elegant, aber nicht der rauchig-erdige Rote, den er sucht.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_3_1', guestId: 'der_bankier', mood: '💎',
      statement: 'Der Bankier belehrt seinen Tischnachbarn: "Grand Cru bedeutet, dass der Wein besonders alt ist. Je älter, desto Grand Cru – so einfach ist das."',
      isCorrect: false,
      correction: 'Grand Cru beschreibt die Lage, nicht das Alter! Es ist die höchste Klassifikation eines Weinbergs – der Boden und das Mikroklima bestimmen den Status, nicht die Reifezeit.'
    },
    {
      id: 'bw_3_2', guestId: 'die_professorin', mood: '📚',
      statement: 'Die Professorin sagt beiläufig: "Barolo wird aus Nebbiolo-Trauben gemacht – eine der langlebigsten Rebsorten der Welt."',
      isCorrect: true,
      correction: 'Absolut richtig! Barolo besteht zu 100% aus Nebbiolo. Der Name kommt von "nebbia" (Nebel) – weil die Trauben erst spät im nebligen Herbst reifen. Große Barolos können 30+ Jahre altern!'
    },
    {
      id: 'bw_3_3', guestId: 'influencerin', mood: '🌎',
      statement: '"Malbec ist doch eine argentinische Rebsorte, oder?" fragt die Influencerin. "Die haben die in Südamerika erfunden!"',
      isCorrect: false,
      correction: 'Malbec stammt ursprünglich aus Cahors in Südwest-Frankreich! Erst im 19. Jahrhundert wurde die Rebe nach Argentinien gebracht – und dort zum Nationalwein. Heute macht Argentinien den besseren Malbec als Frankreich!'
    },
    {
      id: 'bw_3_4', guestId: 'herr_tanaka', mood: '🪵',
      statement: 'Herr Tanaka nickt bedächtig: "Je mehr Eichenfass-Reifung ein Wein bekommt, desto besser wird er. Mehr Holz ist immer besser."',
      isCorrect: false,
      correction: 'Zu viel Holz überdeckt den Eigencharakter des Weins! Balance ist entscheidend. Ein Chablis z.B. wird bewusst ohne Holz ausgebaut – die Mineralität wäre sonst verloren. "Mehr" ist nicht immer "besser".'
    },
  ],

  weinwissen: [
    {
      id: 'ww_3_1', guestId: 'madame_dupont', mood: '🌍',
      question: 'Madame Dupont fragt prüfend: "Können Sie mir erklären, was \'Terroir\' bedeutet? Das ist für mich der Schlüssel zum Wein."',
      options: [
        { text: 'Zusammenspiel von Boden, Klima und Lage', correct: true },
        { text: 'Nur der Bodentyp des Weinbergs', correct: false },
        { text: 'Die Kellertechnik des Winzers', correct: false },
        { text: 'Die verwendete Rebsorte', correct: false },
      ],
      explanation: 'Terroir = das Zusammenspiel von Boden, Klima, Topografie und menschlichem Einfluss. Deshalb schmeckt ein Riesling von der Mosel anders als einer aus der Pfalz – obwohl es die gleiche Traube ist!'
    },
    {
      id: 'ww_3_2', guestId: 'der_komponist', mood: '🍇',
      question: 'Der Komponist riecht am Barolo und fragt: "Welche Rebsorte steckt in diesem majestätischen Wein?"',
      options: [
        { text: 'Nebbiolo', correct: true },
        { text: 'Sangiovese', correct: false },
        { text: 'Barbera', correct: false },
        { text: 'Primitivo', correct: false },
      ],
      explanation: 'Barolo besteht zu 100% aus Nebbiolo. Der Name kommt von "nebbia" (Nebel) – die Trauben reifen spät, wenn der Herbstnebel über dem Piemont liegt.'
    },
    {
      id: 'ww_3_3', guestId: 'die_professorin', mood: '🏆',
      question: 'Die Professorin testet dich: "Grand Cru und Premier Cru – was ist höher eingestuft?"',
      options: [
        { text: 'Grand Cru ist die höchste Stufe', correct: true },
        { text: 'Premier Cru ist höher', correct: false },
        { text: 'Beide sind gleichwertig', correct: false },
        { text: 'Kommt auf die Region an', correct: false },
      ],
      explanation: 'Grand Cru = "Großes Gewächs" = höchste Stufe! Premier Cru = "Erstes Gewächs" = zweithöchste. Im Burgund gibt es nur 33 Grand Cru Lagen – die besten Weinberge der Welt.'
    },
    {
      id: 'ww_3_4', guestId: 'weinhaendler', mood: '🇿🇦',
      question: 'Der Weinhändler hält die Pinotage-Flasche hoch: "Aus welchem Land kommt diese einzigartige Rebsorte?"',
      options: [
        { text: 'Südafrika', correct: true },
        { text: 'Australien', correct: false },
        { text: 'Chile', correct: false },
        { text: 'Neuseeland', correct: false },
      ],
      explanation: 'Pinotage wurde 1925 an der Universität Stellenbosch in Südafrika gezüchtet – eine Kreuzung aus Pinot Noir und Cinsault. Es gibt sie nur dort!'
    },
    {
      id: 'ww_3_5', guestId: 'diplomatenpaar', mood: '🍷',
      question: 'Das Diplomatenpaar fragt beim Bordeaux: "Was ist eigentlich eine Cuvée?"',
      options: [
        { text: 'Ein Verschnitt aus mehreren Rebsorten', correct: true },
        { text: 'Ein Wein aus einer einzigen Lage', correct: false },
        { text: 'Ein bestimmter Fasstyp', correct: false },
        { text: 'Eine Gärungsmethode', correct: false },
      ],
      explanation: 'Cuvée = Verschnitt/Assemblage aus mehreren Rebsorten. Saint-Émilion z.B. kombiniert meist Merlot + Cabernet Franc. Der Winzer sucht die beste Balance – wie ein Komponist!'
    },
  ],

  blindtasting: [
    {
      id: 'bt_3_1', guestId: 'die_professorin', mood: '🔬',
      clues: {
        appearance: 'Tiefrotes Rubinrot mit violettem Schimmer',
        nose: 'Intensive Aromen von dunklen Beeren, Pflaume, Tabak und ein Hauch Schokolade',
        palate: 'Kraftvoll und vollmundig, mit markanten Tanninen und langem, warmem Abgang'
      },
      options: [
        { wineId: 'malbec', correct: true },
        { wineId: 'riesling_spaetlese', correct: false },
        { wineId: 'vinho_verde', correct: false },
        { wineId: 'rose_provence', correct: false },
      ],
      explanation: 'Die Kombination aus tiefer Farbe, dunklen Beeren und Schokolade bei vollem Körper = typisch Malbec aus Argentinien! Die Höhenlage in Mendoza gibt ihm diese intensive Frucht.'
    },
    {
      id: 'bt_3_2', guestId: 'herr_tanaka', mood: '👃',
      clues: {
        appearance: 'Goldgelb mit grünlichen Reflexen',
        nose: 'Zitrus, Feuerstein und ein Hauch Kreide – fast wie Meeresluft',
        palate: 'Straff und mineralisch, lebendige Säure, eleganter trockener Abgang mit salziger Note'
      },
      options: [
        { wineId: 'chablis_premier_cru', correct: true },
        { wineId: 'lambrusco', correct: false },
        { wineId: 'primitivo', correct: false },
        { wineId: 'imiglykos', correct: false },
      ],
      explanation: 'Feuerstein + Mineralik + Kreide ohne Holz = Chablis! Die fossilen Austernschalen im Boden (Kimmeridge-Kalk) geben dem Wein seine einzigartige mineralisch-salzige Note.'
    },
    {
      id: 'bt_3_3', guestId: 'weinhaendler', mood: '🔥',
      clues: {
        appearance: 'Rubinrot mit bräunlichem Rand',
        nose: 'Rauch, Kaffee, rote Beeren und ein erdiger, fast rustikaler Unterton',
        palate: 'Mittelschwer, leicht erdig, mit einem typischen "Lagerfeuer"-Charakter'
      },
      options: [
        { wineId: 'pinotage', correct: true },
        { wineId: 'champagner', correct: false },
        { wineId: 'gruener_veltliner', correct: false },
        { wineId: 'chianti', correct: false },
      ],
      explanation: 'Rauch + Kaffee + Erde + "Lagerfeuer" = Pinotage aus Südafrika! Diese Aromen sind typisch für die Rebsorte und machen sie unverwechselbar.'
    },
  ],
};
