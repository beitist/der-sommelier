// ============================================================
// DER SOMMELIER — Abschlussprüfung: Der Michelin-Tester (Tisch 7, Étoile)
// 7-Gänge-Menü = 7 Fragen quer durch die Karriere.
// Pool je Level (Thema = Thema des Restaurants):
//   0 Imbiss "Basics & Weinstile" (4) · 1 Steakhaus "Rebsorten & Charakter" (4)
//   2 Gasthaus "Wein & Essen" (4) · 3 Le Vignoble "Terroir & Weinbereitung" (7)
//   4 Étoile "Verkostung & Weinsprache" (7)
// Gezogen werden: je 1 aus Level 0, 1, 2 und je 2 aus Level 3 und 4.
// Jede Frage hat zusätzlich `type` (Fragetyp) und `course` (Name des Gangs).
// ============================================================

const EXAM_QUESTIONS = {
  // ===== LEVEL 0: Basics & Weinstile =====
  0: [
    {
      type: 'weinwissen', course: 'Amuse-Bouche',
      id: 'exam_0_1', guestId: 'michelin_tester', mood: '🔍',
      question: 'Der Michelin-Tester betrachtet die Rote-Bete-Praline auf seinem Löffel, dann sein leeres Rotweinglas. "Bevor wir anfangen: eine Frage, die ich jedem Sommelier stelle. Woher hat ein Rotwein seine Farbe?" Er öffnet sein schwarzes Büchlein.',
      options: [
        { text: 'Aus dem Saft – rote Trauben haben roten Saft', correct: false },
        { text: 'Aus den Schalen – der Most gärt mit ihnen zusammen', correct: true },
        { text: 'Aus dem Eichenfass, das Farbe abgibt', correct: false },
        { text: 'Aus einem kleinen Anteil Rotwein-Konzentrat', correct: false },
      ],
      explanation: 'Der Saft fast aller roten Trauben ist hell – die Farbe steckt in den Schalen. Beim Rotwein gärt der Most mit den Schalen (Maischegärung), dabei lösen sich Farbe und Tannine. Deshalb kann man aus roten Trauben auch Weißwein machen, wenn man sie sofort abpresst. Der Tester macht einen kleinen Haken: "Gut. Die Basis sitzt. Das ist seltener, als Sie denken."'
    },
    {
      type: 'besserwisser', course: 'Brot & Butter',
      id: 'exam_0_2', guestId: 'michelin_tester', mood: '🧈',
      statement: 'Der Tester bricht ein Stück Brot und sagt beiläufig, ohne aufzusehen: "Ich nehme heute nur trockene Weine. Trocken heißt ja: weniger Alkohol. Ich muss morgen früh fahren."',
      isCorrect: false,
      correction: 'Trocken hat nichts mit Alkohol zu tun! "Trocken" beschreibt den Restzucker – vereinfacht bis 9 g/l, der Wein schmeckt also nicht süß. Ein trockener Châteauneuf-du-Pape hat oft 14,5 % Alkohol und mehr, ein lieblicher Lambrusco eher um die 8–10 %. Der Tester hebt den Blick, fast amüsiert: "Richtig. Ich wollte nur sehen, ob Sie einem Gast widersprechen, wenn es nötig ist. Ich fahre übrigens Bahn."'
    },
    {
      type: 'food_pairing', course: 'Vorspeise',
      id: 'exam_0_3', guestId: 'michelin_tester', mood: '🐟',
      scenario: 'Die Vorspeise: Saibling, auf der Haut gebraten, mit Zitronenbutter und jungem Lauch. Der Tester legt die Gabel parallel zum Tellerrand. "Leichter Fisch, frische Säure im Teller. Ich hätte gern einen trockenen Weißwein, der genauso frisch ist. Nichts, was dominiert."',
      question: 'Welchen Wein schenkst du ein?',
      options: [
        { wineId: 'riesling', correct: true, favorite: true, explanation: 'Riesling trocken – leicht, säurebetont, Zitrus und Apfel. Er greift die Zitronenbutter auf und lässt den zarten Saibling glänzen. Leichtes Essen, leichter Wein: die erste Regel, sauber umgesetzt. Der Tester nickt einmal, knapp: "Präzise."' },
        { wineId: 'mueller_thurgau', acceptable: true, explanation: 'Müller-Thurgau ist leicht und passt grundsätzlich zu leichtem Fisch – aber er ist halbtrocken und hat wenig Säure. Gewünscht war ein trockener, frischer Wein. Der Tester notiert: "Zuhören. Trocken hieß trocken."' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist zwar trocken, aber das Kiefernharz überdeckt den feinen Saibling komplett – genau das "Dominieren", das er nicht wollte. Zu Feta und Oliven großartig, hier zu laut. Der Tester riecht am Glas und schiebt es zur Seite.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Ein Rotwein mit Brombeerfrucht zum zarten Saibling mit Zitronenbutter? Der Fisch verschwindet, und er wollte ausdrücklich einen Weißwein. Der Tester schreibt etwas Längeres in sein Büchlein.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Lieblich und rot – zweimal am Wunsch vorbei. Süße und Kirschfrucht erschlagen den feinen Fisch. Der Tester sagt nur: "Nein."' },
      ]
    },
    {
      type: 'preference', course: 'Zwischengang',
      id: 'exam_0_4', guestId: 'michelin_tester', mood: '🍕',
      scenario: 'Der Zwischengang ist ein Augenzwinkern der Küche: eine Mini-Pizza mit Mortadella und Pistazie. Der Tester senkt die Stimme. "Was ich jetzt sage, steht nicht im Bericht. Zu so etwas mag ich es rot, leicht, ein wenig süß – und es soll prickeln. Bitte keine Belehrung."',
      question: 'Was schenkst du ihm ein?',
      options: [
        { wineId: 'lambrusco', correct: true, favorite: true, explanation: 'Lambrusco – rot, leicht, lieblich und perlend. Alle vier Wünsche getroffen, und regional passt es auch: Mortadella und Lambrusco kommen beide aus der Emilia-Romagna. Der Tester trinkt, und für einen Moment zuckt sein Mundwinkel. "Das haben Sie nicht gesehen."' },
        { wineId: 'imiglykos', acceptable: true, explanation: 'Imiglykos ist rot, leicht und lieblich – drei von vier. Aber er perlt nicht, und das Prickeln war ausdrücklich gewünscht. Der Tester: "Fast. Fast ist in meinem Beruf ein Wort mit Folgen."' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist halbtrocken, mittelkräftig und still – weder richtig süß noch prickelnd. Der Tester blättert eine Seite weiter.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt prickelt – aber er ist weiß und trocken. Ein Wunsch von vier erfüllt. Der Tester: "Ich sagte rot."' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist vollmundig, kräftig und trocken – das Gegenteil von leicht, süß und prickelnd. Der Tester seufzt kaum hörbar.' },
      ]
    },
  ],

  // ===== LEVEL 1: Rebsorten & Charakter =====
  1: [
    {
      type: 'weinwissen', course: 'Vorspeise',
      id: 'exam_1_1', guestId: 'michelin_tester', mood: '🍇',
      question: 'Zur Entenleber-Terrine steht ein deutscher Spätburgunder auf der Begleitkarte. Der Tester tippt mit dem Stift darauf. "Mein französischer Kollege würde diese Rebsorte nicht erkennen. Wie nennt er sie?"',
      options: [
        { text: 'Pinot Gris', correct: false },
        { text: 'Gamay', correct: false },
        { text: 'Pinot Noir', correct: true },
        { text: 'Pinot Blanc', correct: false },
      ],
      explanation: 'Spätburgunder = Pinot Noir (in Italien: Pinot Nero). Gleiche Traube, deutscher Name. Pinot Gris ist der Grauburgunder, Pinot Blanc der Weißburgunder – Verwandte, aber andere Sorten. Gamay ist die Traube des Beaujolais. Der Tester: "Korrekt. Und mein Kollege würde trotzdem behaupten, der französische sei besser."'
    },
    {
      type: 'besserwisser', course: 'Zwischengang',
      id: 'exam_1_2', guestId: 'michelin_tester', mood: '🇺🇸',
      statement: 'Der Tester dreht das Glas mit dem Primitivo zwischen den Fingern: "In Kalifornien hat man mir neulich einen Zinfandel als einzigartige amerikanische Rebsorte verkauft. Dabei ist das genetisch dieselbe Traube wie dieser Primitivo hier."',
      isCorrect: true,
      correction: 'Stimmt! Primitivo und Zinfandel sind genetisch identisch – beide stammen ursprünglich aus Kroatien (Crljenak Kaštelanski bzw. Tribidrag). In Apulien wird daraus ein kraftvoller, pflaumiger Roter, in Kalifornien oft ein noch üppigerer. Der Tester nickt: "Schön, dass Sie mir nicht aus Höflichkeit widersprechen. Das tun die meisten."'
    },
    {
      type: 'food_pairing', course: 'Hauptgang',
      id: 'exam_1_3', guestId: 'michelin_tester', mood: '🥩',
      scenario: 'Der Hauptgang: Rib-Eye vom Dry-Aged-Rind, mit Pfefferjus und gerösteten Schalotten. Ein Gruß an das Steakhaus, in dem Sie angefangen haben, sagt der Chef. Der Tester schneidet ein Stück ab. "Viel Fett, viel Röstaroma. Welche Rebsorte hat den Körper dafür?"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'primitivo', correct: true, favorite: true, explanation: 'Primitivo – voller Körper, reife Pflaume, Schokolade und Gewürze. Kräftiges Essen braucht kräftigen Wein: Er hält dem Fett und den Röstaromen stand, ohne unterzugehen. Der Tester kaut, trinkt, kaut. "Das trägt."' },
        { wineId: 'chianti', acceptable: true, explanation: 'Chianti passt zum Steak – Säure und Tannin schneiden durchs Fett. Aber Sangiovese hat nur mittleren Körper; bei diesem fetten Dry-Aged-Stück und Pfefferjus fehlt ihm etwas Wucht. Der Tester notiert: "Solide. Nicht mutig."' },
        { wineId: 'spaetburgunder', correct: false, explanation: 'Spätburgunder ist elegant und fein – wunderbar zu Geflügel oder Pilzen, aber dieses Rib-Eye mit Pfefferjus walzt ihn platt. Gefragt war Körper. Der Tester: "Ein Ballettschuh beim Holzhacken."' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist fruchtig, halbtrocken und mittelkräftig – zum Gyros prima, aber gegen Dry-Aged-Rind und Pfeffer fehlt ihm Struktur, und die Restsüße stört. Der Tester schreibt kommentarlos.' },
        { wineId: 'gruener_veltliner', correct: false, explanation: 'Grüner Veltliner bringt zwar Pfeffer mit – allerdings nur im Aroma –, aber ein mittelkräftiger Weißwein ist gegen ein fettes Rib-Eye chancenlos. Der Tester: "Das Pfefferl reicht nicht für den Pfefferjus."' },
      ]
    },
    {
      type: 'blindtasting', course: 'Fischgang',
      id: 'exam_1_4', guestId: 'michelin_tester', mood: '🥃',
      scenario: 'Zum Zander mit Kartoffelschaum stellt der Tester ein schwarzes Glas vor dich. "Blind. Welche Rebsorte?"',
      clues: {
        appearance: 'Hellgelb mit grünlichen Reflexen, klar und funkelnd',
        nose: 'Grüner Apfel, frische Kräuter und eine deutliche Note von weißem Pfeffer',
        palate: 'Trocken, mittlerer Körper, lebendige Säure, würzig-pfeffriger Abgang'
      },
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true },
        { wineId: 'riesling', correct: false },
        { wineId: 'sancerre', correct: false },
        { wineId: 'mueller_thurgau', correct: false },
        { wineId: 'pinot_grigio', correct: false },
      ],
      explanation: 'Weißer Pfeffer ist die Visitenkarte des Grünen Veltliners – in Österreich liebevoll "Pfefferl" genannt. Dazu grüner Apfel und Kräuter: eindeutig. Riesling wäre zitroniger und mineralischer, Sancerre hätte Stachelbeere und Gras, Müller-Thurgau wäre milder mit Muskat, Pinot Grigio neutraler mit Birne. Der Tester dreht das Glas um: "Rebsorten erkennen ist Handwerk. Sie haben es gelernt."'
    },
  ],

  // ===== LEVEL 2: Wein & Essen =====
  2: [
    {
      type: 'food_pairing', course: 'Vorspeise',
      id: 'exam_2_1', guestId: 'michelin_tester', mood: '🌶️',
      scenario: 'Die Küche wagt etwas: Garnelen in rotem Thai-Curry mit Zitronengras und Kaffirlimette – ordentlich scharf. Der Tester tupft sich die Stirn, ganz leicht. "Interessant. Und jetzt retten Sie mich."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'gewuerztraminer', correct: true, favorite: true, explanation: 'Gewürztraminer – die Restsüße des halbtrockenen Weins zähmt die Schärfe, und Litschi, Rose und Gewürze spiegeln die exotischen Aromen von Zitronengras und Kaffirlimette. Kontrast UND Ergänzung in einem Glas. Der Tester atmet aus. "Gerettet. Ich vermerke es."' },
        { wineId: 'riesling_spaetlese', correct: true, explanation: 'Riesling Spätlese funktioniert sehr gut – Restsüße gegen Schärfe, Säure für Frische. Ein Klassiker zur Asia-Küche! Der Gewürztraminer trifft die exotische Aromatik nur noch einen Tick genauer. Der Tester: "Gut. Nicht ganz die Antwort, die ich erwartet hatte – aber eine gute."' },
        { wineId: 'vinho_verde', acceptable: true, explanation: 'Vinho Verde ist leicht, frisch und hat wenig Alkohol – das macht die Schärfe nicht schlimmer. Aber ohne Restsüße löscht er das Feuer auch nicht, und gegen die Aromenwucht wirkt er dünn. Der Tester: "Kein Fehler. Aber keine Rettung."' },
        { wineId: 'primitivo', correct: false, explanation: 'Alkohol und Tannine verstärken Schärfe – ein kräftiger Primitivo gießt Öl ins Feuer. Der Tester greift wortlos zum Wasserglas.' },
        { wineId: 'tempranillo_gran_reserva', correct: false, explanation: 'Ein gereifter, holzbetonter Rotwein zum scharfen Curry? Die Tannine brennen, die feinen Tertiäraromen gehen im Chili unter. Schade um den Wein – und um die Garnelen.' },
      ]
    },
    {
      type: 'weinwissen', course: 'Zwischengang',
      id: 'exam_2_2', guestId: 'michelin_tester', mood: '🧈',
      question: 'Kalbsbries, in brauner Butter gebraten. Dazu hast du einen säurebetonten Weißwein vorgeschlagen. Der Tester hebt den Stift: "Begründen Sie das. Warum funktioniert Säure zu so viel Fett?"',
      options: [
        { text: 'Die Säure löst das Fett chemisch auf', correct: false },
        { text: 'Die Säure bildet einen Kontrast und erfrischt den Gaumen nach jedem Bissen', correct: true },
        { text: 'Säure verstärkt den Buttergeschmack, das ist Ergänzung', correct: false },
        { text: 'Weißwein hat mehr Tannine als Rotwein und bindet das Fett', correct: false },
      ],
      explanation: 'Kontrastieren: Die Säure "schneidet" durch das Fett – sie wirkt wie ein Spritzer Zitrone, macht den Gaumen wieder frisch und Lust auf den nächsten Bissen. Chemisch aufgelöst wird dabei nichts, und Tannine kommen aus Schalen und Holz – Weißwein hat davon kaum welche. Das gleiche Prinzip wie Riesling oder Grüner Veltliner zum Schnitzel. Der Tester: "Endlich jemand, der nicht \'passt halt\' sagt."'
    },
    {
      type: 'besserwisser', course: 'Fischgang',
      id: 'exam_2_3', guestId: 'michelin_tester', mood: '🐠',
      statement: 'Der Fischgang kommt: Lachs mit Linsen und Rotweinbutter. Der Tester betrachtet die Weinkarte und murmelt: "Zum Fisch niemals Rotwein. Das ist keine Geschmacksfrage, das ist eine Regel."',
      isCorrect: false,
      correction: 'Keine feste Regel! Kräftiger Fisch wie Lachs oder Thunfisch – und erst recht mit Rotweinbutter und Linsen – verträgt einen leichten, tanninarmen Rotwein wie Spätburgunder hervorragend. Vorsicht nur bei viel Tannin: Das kann mit Fischöl metallisch schmecken. Gewicht gegen Gewicht schlägt Farbe gegen Farbe. Der Tester klappt die Karte zu: "Gut. Wer Regeln auswendig lernt, ist Kellner. Wer sie versteht, ist Sommelier."'
    },
    {
      type: 'blindtasting', course: 'Käse',
      id: 'exam_2_4', guestId: 'michelin_tester', mood: '🧀',
      scenario: 'Zum gereiften Manchego mit Quittenbrot reicht der Tester ein verdecktes Glas. "Ein Wein, den man gern zu diesem Käse trinkt. Woher?"',
      clues: {
        appearance: 'Kräftiges Rubinrot, am Rand noch kaum Reifetöne',
        nose: 'Rote Kirsche, deutliche Vanille und etwas Holz, dahinter frische Frucht',
        palate: 'Trocken, mittlerer Körper, weiche Tannine, die Frucht noch lebendig, Vanille im Abgang'
      },
      options: [
        { wineId: 'rioja_crianza', correct: true, favorite: true },
        { wineId: 'tempranillo_gran_reserva', correct: false },
        { wineId: 'zweigelt', correct: false },
        { wineId: 'chianti', correct: false },
        { wineId: 'primitivo', correct: false },
      ],
      explanation: 'Kirsche + Vanille + Holz bei noch frischer Frucht = Rioja Crianza! Tempranillo mit mindestens einem Jahr im Eichenfass – die Vanille kommt vom Holz. Eine Gran Reserva wäre am Rand schon ziegelrot und hätte Leder und Tabak (Tertiäraromen). Zweigelt hätte kaum Holz, Chianti mehr Säure und Kräuter, Primitivo mehr Pflaume und Wucht. Und Manchego mit Rioja: Was zusammen wächst, passt zusammen. Der Tester: "Spanien. Richtig. Der Käse hat es Ihnen verraten – oder Sie ihm?"'
    },
  ],

  // ===== LEVEL 3: Terroir & Weinbereitung =====
  3: [
    {
      type: 'food_pairing', course: 'Austern',
      id: 'exam_3_1', guestId: 'michelin_tester', mood: '🦪',
      scenario: 'Drei bretonische Austern auf Eis, ein Spritzer Schalotten-Vinaigrette. Der Tester lehnt sich zurück. "Ich möchte keinen Wein, der nur passt. Ich möchte einen, dessen Boden mit diesem Teller verwandt ist. Sie wissen, was ich meine."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'chablis_premier_cru', correct: true, favorite: true, explanation: 'Chablis Premier Cru – Chardonnay vom Kimmeridge-Kalk, einem Boden voller fossiler Austernschalen aus einem urzeitlichen Meer. Die Austern liegen sozusagen auf ihren Vorfahren. Dazu Zitrus, Feuerstein und straffe Säure: Terroir, das man schmeckt. Der Tester schluckt, schweigt, und schreibt dann sehr lange.' },
        { wineId: 'champagner', acceptable: true, explanation: 'Champagner zu Austern ist ein großer Klassiker – Kreideboden, Perlage, Frische. Ein guter Griff! Aber er wollte die Bodengeschichte, und die Austernschalen im Kimmeridge-Kalk von Chablis erzählen sie wörtlich. Der Tester: "Elegant. Aber nicht die Geschichte, nach der ich gefragt habe."' },
        { wineId: 'sancerre', acceptable: true, explanation: 'Sancerre wächst ebenfalls zum Teil auf Kimmeridge-Mergel und ist frisch und mineralisch – zu Austern durchaus stimmig. Aber die berühmte Verwandtschaft "Austern im Boden, Austern auf dem Teller" gehört Chablis. Der Tester: "Nah dran. Eine Region zu weit westlich."' },
        { wineId: 'riesling_spaetlese', correct: false, explanation: 'Restsüße, Pfirsich und Honig zur salzigen Auster? Die Süße kollidiert mit dem Jod und der Vinaigrette. Der Tester legt die Austerngabel ab.' },
        { wineId: 'saint_emilion', correct: false, explanation: 'Ein tanninreicher Bordeaux zu rohen Austern – Tannin und Meeresfrüchte ergeben einen metallischen Ton. Großer Wein, falscher Teller. Der Tester: "Nein. Einfach nein."' },
      ]
    },
    {
      type: 'weinwissen', course: 'Fleischgang',
      id: 'exam_3_2', guestId: 'michelin_tester', mood: '🏆',
      question: 'Zum Rinderfilet mit Trüffel liegt ein Saint-Émilion Grand Cru bereit. Der Tester sieht auf das Etikett. "Grand Cru. Im Burgund und in Saint-Émilion steht dasselbe Wort auf der Flasche. Bedeutet es auch dasselbe?"',
      options: [
        { text: 'Ja – in beiden Fällen die höchste Lagenklassifikation eines Weinbergs', correct: false },
        { text: 'Ja – in beiden Fällen ein besonders alter Jahrgang', correct: false },
        { text: 'Nein – Burgund klassifiziert Weingüter, Saint-Émilion einzelne Weinberge', correct: false },
        { text: 'Nein – im Burgund ist es die Spitzenlage, in Saint-Émilion eine Appellation mit strengeren Regeln', correct: true },
      ],
      explanation: 'Im Burgund ist Grand Cru eine Lage: die besten Weinberge, über Premier Cru und Village. In Saint-Émilion ist "Grand Cru" dagegen eine eigene Appellation mit strengeren Vorgaben (z. B. Ertrag, Reife) – die eigentliche Rangliste der Châteaux heißt dort "Grand Cru Classé" bzw. "Premier Grand Cru Classé" und wird regelmäßig neu bewertet. Gleiches Wort, andere Logik. Der Tester unterstreicht etwas zweimal: "Das wissen nicht einmal alle, die solche Flaschen verkaufen."'
    },
    {
      type: 'besserwisser', course: 'Zwischengang',
      id: 'exam_3_3', guestId: 'michelin_tester', mood: '🥂',
      statement: 'Der Tester riecht am Chablis und doziert, mehr zu sich selbst: "Chablis wird ohne Holz ausgebaut, also auch ohne malolaktische Gärung. Daher diese messerscharfe Säure."',
      isCorrect: false,
      correction: 'Zwei Fehler in einem Satz! Erstens hat das Holz mit der malolaktischen Gärung nichts zu tun – sie findet auch im Stahltank statt. Zweitens durchlaufen die allermeisten Chablis sie sogar: Milchsäurebakterien wandeln die spitze Apfelsäure in mildere Milchsäure um. Die Frische kommt vom kühlen Klima und dem Kalkboden. Und ganz ohne Holz? Auch nicht immer – manche Premier- und Grand-Cru-Winzer nutzen (meist ältere) Fässer. Der Tester schließt das Büchlein für einen Moment: "Ich habe Ihnen eine Falle gestellt. Sie sind nicht hineingetreten."'
    },
    {
      type: 'blindtasting', course: 'Risotto',
      id: 'exam_3_4', guestId: 'michelin_tester', mood: '🍄',
      scenario: 'Zum Risotto mit weißem Trüffel aus Alba stellt der Tester ein verdecktes Glas hin. "Der Wein kommt aus derselben Gegend wie der Trüffel. Mehr verrate ich nicht."',
      clues: {
        appearance: 'Überraschend hell: helles Granatrot mit orangefarbenem Rand – fast durchscheinend',
        nose: 'Teer und Rosen, dazu getrocknete Kirschen, Lakritz und ein Hauch Waldboden',
        palate: 'Trocken, kraftvoll, sehr feste Tannine und hohe Säure – trotz der hellen Farbe ein Riese, langer Abgang'
      },
      options: [
        { wineId: 'barolo', correct: true, favorite: true },
        { wineId: 'chianti', correct: false },
        { wineId: 'saint_emilion', correct: false },
        { wineId: 'amarone', correct: false },
        { wineId: 'malbec', correct: false },
      ],
      explanation: '"Teer und Rosen" ist die klassische Beschreibung für Nebbiolo – und Nebbiolo aus dem Piemont heißt Barolo. Die helle Farbe täuscht: Nebbiolo hat dünne Schalen und wenig Farbstoff, aber enorme Tannine und Säure. Mindestens 38 Monate Reife, davon 18 im Holz, bringen die orangefarbenen Reflexe. Alba-Trüffel und Barolo – Terroir auf dem Teller und im Glas. Chianti wäre ähnlich säurebetont, aber kräuteriger und weniger tanninstark; Malbec und Amarone wären tiefdunkel. Der Tester: "Die Farbe hat schon viele getäuscht. Sie nicht."'
    },
    {
      type: 'weinwissen', course: 'Vorspeise',
      id: 'exam_3_5', guestId: 'michelin_tester', mood: '🍑',
      question: 'Zur Gänseleber mit Pfirsich-Chutney schenkst du eine Riesling Spätlese ein. Der Tester liest das Etikett. "Spätlese. Was garantiert mir dieses Wort laut deutschem Weingesetz?"',
      options: [
        { text: 'Dass der Wein süß ist', correct: false },
        { text: 'Ein Mindestmostgewicht – also besonders reife, zuckerreiche Trauben bei der Lese', correct: true },
        { text: 'Dass die Trauben erst nach dem 1. November gelesen wurden', correct: false },
        { text: 'Mindestens zwei Jahre Reife im Holzfass', correct: false },
      ],
      explanation: 'Das deutsche Prädikat richtet sich nach dem Zuckergehalt im Most (Mostgewicht in Grad Oechsle) – die Spätlese braucht reifere Trauben als der Kabinett. Ein fester Lesetermin ist nicht vorgeschrieben, und süß muss sie auch nicht sein: Es gibt "Spätlese trocken"! Die Riesling Spätlese im Glas ist lieblich ausgebaut – perfekt zur Gänseleber. Der Tester: "Die Hälfte meiner Kollegen hätte \'süß\' gesagt. Ich notiere, dass Sie nicht zur Hälfte gehören."'
    },
    {
      type: 'food_pairing', course: 'Hauptgang',
      id: 'exam_3_6', guestId: 'michelin_tester', mood: '🔥',
      scenario: 'Der Hauptgang: argentinische Rinderhüfte vom Holzkohlegrill mit Chimichurri. Der Tester betrachtet die Kruste. "Das Fleisch kommt vom Fuß der Anden. Ich möchte, dass der Wein dieselbe Adresse hat – und erklären können Sie mir dann, warum er trotz der Hitze dort nicht marmeladig schmeckt."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'malbec', correct: true, favorite: true, explanation: 'Malbec aus Mendoza – kraftvoll, Pflaume, Brombeere, Schokolade, ideal zu Gegrilltem. Und die Antwort auf seine Frage: Die Weinberge liegen hoch an den Anden, oft auf 1.000 Metern und mehr. Kalte Nächte erhalten die Säure, die intensive Sonne gibt Farbe und Frucht. Terroir erklärt den Wein. Der Tester: "Herkunft, Gericht und Begründung. Alle drei."' },
        { wineId: 'pinotage', acceptable: true, explanation: 'Pinotage mit seinen Rauch- und Kaffeenoten ist zum Grillfleisch gar nicht schlecht – in Südafrika trinkt man ihn zum Braai. Aber er wollte "dieselbe Adresse": Anden, nicht Kap. Der Tester: "Richtige Glut, falscher Kontinent."' },
        { wineId: 'primitivo', acceptable: true, explanation: 'Primitivo hat Kraft und Frucht für das Rind – geschmacklich ein solider Begleiter. Aber Apulien ist nicht Mendoza, und die Herkunft war ausdrücklich gewünscht. Der Tester: "Passt zum Teller. Nicht zur Frage."' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Ein mineralischer Chablis zu Holzkohle-Rind mit Chimichurri? Feine Mineralik gegen Röstaromen – der Wein verschwindet. Und aus den Anden kommt er auch nicht.' },
        { wineId: 'riesling_spaetlese', correct: false, explanation: 'Restsüßer Riesling zum gegrillten Rind? Süße und Röstaromen streiten, und mit Argentinien hat er nichts zu tun. Der Tester schreibt kurz und hart.' },
      ]
    },
    {
      type: 'besserwisser', course: 'Pré-Dessert',
      id: 'exam_3_7', guestId: 'michelin_tester', mood: '🪵',
      statement: 'Zwischen den Gängen fragt der Tester nach dem Keller. Er hört zu und sagt dann: "Ein neues Barrique gibt einem Wein deutlich mehr Vanille- und Röstaromen als ein Fass, das schon zum dritten Mal belegt ist."',
      isCorrect: true,
      correction: 'Richtig! Ein Barrique (225 Liter, meist französische oder amerikanische Eiche) gibt beim ersten Mal am meisten Aromen ab: Vanille, Toast, Gewürze, dazu Holztannine. Mit jeder Belegung wird es "neutraler" – ältere Fässer bringen vor allem sanften Sauerstoffkontakt statt Holzgeschmack. Deshalb mischen viele Winzer neue und gebrauchte Fässer. Der Tester: "Gut. Und gut, dass Sie nicht dachten, mehr Holz sei immer besser. Das Gegenteil trinke ich zu oft."'
    },
  ],

  // ===== LEVEL 4: Verkostung & Weinsprache =====
  4: [
    {
      type: 'blindtasting', course: 'Vorspeise',
      id: 'exam_4_1', guestId: 'michelin_tester', mood: '🐐',
      scenario: 'Zum warmen Ziegenkäse auf Rucola schiebt der Tester ein schwarzes Glas über den Tisch. "Sie kennen das Spiel. Beschreiben muss ich nichts mehr – das steht ja auf Ihrem Zettel."',
      clues: {
        appearance: 'Blasses Strohgelb mit grünlichem Schimmer',
        nose: 'Stachelbeere, frisch geschnittenes Gras, Holunderblüte und ein rauchiger Hauch von Feuerstein',
        palate: 'Trocken, mittlerer Körper, knackige Säure, mineralisch-kühler, langer Abgang'
      },
      options: [
        { wineId: 'sancerre', correct: true, favorite: true },
        { wineId: 'chablis_premier_cru', correct: false },
        { wineId: 'gruener_veltliner', correct: false },
        { wineId: 'riesling', correct: false },
        { wineId: 'mueller_thurgau', correct: false },
      ],
      explanation: 'Stachelbeere + Gras + Holunder = Sauvignon Blanc – und mit dem Feuerstein und der kühlen Mineralik: Sancerre von der Loire. Der Chablis hätte ebenfalls Feuerstein, aber Zitrus statt Stachelbeere und Gras. Grüner Veltliner wäre pfeffrig, Riesling hätte Zitrus und Apfel, Müller-Thurgau wäre milder mit Muskat. Ziegenkäse und Sancerre: Der berühmte Crottin de Chavignol stammt aus einem Dorf mitten in der Appellation Sancerre. Der Tester: "Primäraromen sauber gelesen. Weiter."'
    },
    {
      type: 'weinwissen', course: 'Suppe',
      id: 'exam_4_2', guestId: 'michelin_tester', mood: '🍂',
      question: 'Zur Waldpilz-Consommé riecht der Tester an einem alten Rotwein. "Leder. Tabak. Waldboden. In Ihrer Verkostungssprache – welche Aromen sind das, und woher stammen sie?"',
      options: [
        { text: 'Primäraromen – sie kommen direkt aus der Traube', correct: false },
        { text: 'Sekundäraromen – sie entstehen bei der Gärung', correct: false },
        { text: 'Tertiäraromen – sie entstehen durch Reifung über Jahre', correct: true },
        { text: 'Fehltöne – der Wein ist verdorben', correct: false },
      ],
      explanation: 'Leder, Tabak, Pilze, Waldboden, Nüsse – das sind Tertiäraromen, die erst durch lange Reifung in Fass und Flasche entstehen. Primäraromen stammen aus der Traube (Frucht, Blüten), Sekundäraromen aus Gärung und Ausbau (Hefe, Brioche, Butter, Vanille vom Holz). Ein Fehlton wäre z. B. der muffige Korkschmecker (TCA). Der Tester: "Und Pilzsuppe zum Pilzaroma – Ergänzung. Der Chef hat mitgedacht. Sie auch."'
    },
    {
      type: 'besserwisser', course: 'Amuse-Bouche',
      id: 'exam_4_3', guestId: 'michelin_tester', mood: '🪟',
      statement: 'Der Tester schwenkt sein Glas und beobachtet die langsam herablaufenden Schlieren. "Sehen Sie diese Kirchenfenster? Je dicker die Tränen, desto höher die Qualität. Das ist der schnellste Qualitätstest überhaupt."',
      isCorrect: false,
      correction: 'Die Tränen (Kirchenfenster) zeigen vor allem Alkohol und Restzucker – nicht die Qualität! Sie entstehen, weil Alkohol schneller verdunstet als Wasser und die Oberflächenspannung am Glasrand verändert. Ein billiger, alkoholstarker Wein kann dicke Tränen haben, ein großer leichter Riesling kaum welche. Qualität erkennt man an Balance, Komplexität und Länge des Abgangs. Der Tester lässt das Glas sinken: "Ich höre diesen Satz jede Woche. Von Sommeliers. Sie werden ihn nicht sagen."'
    },
    {
      type: 'food_pairing', course: 'Dessert',
      id: 'exam_4_4', guestId: 'michelin_tester', mood: '🍮',
      scenario: 'Das Dessert: Crème brûlée mit karamellisierten Aprikosen. Der Tester bricht die Zuckerkruste mit dem Löffelrücken. "Die alte Regel beim Dessert. Sie kennen sie. Zeigen Sie sie mir im Glas."',
      question: 'Welchen Wein schenkst du ein?',
      options: [
        { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Eiswein! Die Regel lautet: Der Wein muss mindestens so süß sein wie das Dessert. Eiswein ist hochkonzentriert süß, hat aber brillante Säure – und Aprikose, Honig und Karamell spiegeln das Dessert perfekt. Gelesen und gepresst werden die Trauben gefroren; das Eis bleibt in der Presse, nur der konzentrierte Saft läuft ab. Der Tester lässt den Wein lange im Mund. Dann, kaum hörbar: "Ja."' },
        { wineId: 'riesling_spaetlese', acceptable: true, explanation: 'Riesling Spätlese hat Aprikose und Honig – aromatisch nah dran. Aber sie ist "nur" lieblich, und gegen Karamellzucker und Crème wirkt sie neben dem Dessert schnell dünn und säuerlich. Der Tester: "Die Richtung stimmt. Die Süße nicht."' },
        { wineId: 'gewuerztraminer', correct: false, explanation: 'Gewürztraminer ist halbtrocken – viel zu wenig Süße für eine Crème brûlée. Das Dessert macht den Wein bitter und schal. Der Tester: "Die Regel, bitte."' },
        { wineId: 'champagner', correct: false, explanation: 'Ein trockener Champagner zum süßen Dessert ist ein beliebter Fehler: Neben dem Zucker schmeckt er plötzlich sauer und hart. Der Tester: "Champagner zum Dessert ist Feierlaune, keine Weinbegleitung."' },
        { wineId: 'amarone', correct: false, explanation: 'Amarone duftet nach Rosinen und Schokolade – ist aber trocken ausgebaut! Ein schwerer, tanninreicher Rotwein gegen Crème und Aprikose geht schief. Der Tester: "Die Nase lügt manchmal. Der Gaumen nie."' },
      ]
    },
    {
      type: 'weinwissen', course: 'Aperitif',
      id: 'exam_4_5', guestId: 'michelin_tester', mood: '🍾',
      question: 'Der Tester hebt das Glas mit dem Champagner ohne Jahrgangsangabe gegen das Licht und beobachtet die Perlage. "Wie lange muss so ein Champagner mindestens reifen, bevor er verkauft werden darf?"',
      options: [
        { text: '9 Monate auf der Hefe – wie Crémant', correct: false },
        { text: '15 Monate insgesamt, davon mindestens 12 auf der Hefe', correct: true },
        { text: '36 Monate insgesamt, das gilt für jeden Champagner', correct: false },
        { text: 'Gar nicht – die Perlage entsteht durch zugesetzte Kohlensäure', correct: false },
      ],
      explanation: 'Champagner ohne Jahrgang (Non-Vintage): mindestens 15 Monate Reife insgesamt, davon mindestens 12 Monate auf der Hefe in der Flasche. Erst Jahrgangs-Champagner muss mindestens 3 Jahre reifen – und viele Häuser lagern ohnehin deutlich länger. Crémant braucht mindestens 9 Monate auf der Hefe. Die Kohlensäure entsteht bei beiden durch die zweite Gärung in der Flasche – reingepumpt wird nichts. Die lange Hefelagerung gibt die Brioche-Noten. Der Tester: "Und deshalb kostet er, was er kostet."'
    },
    {
      type: 'blindtasting', course: 'Hauptgang',
      id: 'exam_4_6', guestId: 'michelin_tester', mood: '🐑',
      scenario: 'Zum Milchlamm aus dem Ofen stellt der Tester das letzte schwarze Glas vor dich. "Ein gereifter Wein. Lesen Sie ihn."',
      clues: {
        appearance: 'Granatrot mit deutlich ziegelrotem Rand – sichtbar gereift',
        nose: 'Leder, Tabak und getrocknete Kirschen, darunter warme Vanille und ein Hauch Kokos',
        palate: 'Trocken, voller Körper, seidig abgeschliffene Tannine, Frucht und Holz verschmolzen, sehr langer Abgang'
      },
      options: [
        { wineId: 'tempranillo_gran_reserva', correct: true, favorite: true },
        { wineId: 'rioja_crianza', correct: false },
        { wineId: 'barolo', correct: false },
        { wineId: 'chateauneuf', correct: false },
        { wineId: 'amarone', correct: false },
      ],
      explanation: 'Tertiäraromen (Leder, Tabak, getrocknete Frucht) + ziegelroter Rand = lange Reife. Vanille und Kokos verraten amerikanische Eiche – typisch für klassisches Rioja. Das ist eine Tempranillo Gran Reserva: mindestens 60 Monate gereift, davon 24 im Fass. Die Crianza wäre jünger, frischer, ohne Leder und Tabak. Barolo hätte Teer, Rosen und kantige Tannine, Châteauneuf Garrigue-Kräuter und Gewürze, Amarone Rosinen und Mokka. Der Tester legt den Stift hin: "Ein Wein, der Zeit hatte. Und ein Sommelier, der sie sich genommen hat."'
    },
    {
      type: 'preference', course: 'Hauptgang',
      id: 'exam_4_7', guestId: 'michelin_tester', mood: '📖',
      scenario: 'Zur sieben Stunden geschmorten Lammschulter bestellt der Tester – in seiner Sprache: "Ich möchte Wärme. Reife dunkle Beeren, Garrigue, Thymian, ein Hauch Leder. Voller Körper, hoher Alkohol, aber kein Holzparfüm. Südfrankreich, wenn es geht." Er sieht dich an, ohne eine Miene zu verziehen.',
      question: 'Welcher Wein passt zu seiner Beschreibung?',
      options: [
        { wineId: 'chateauneuf', correct: true, favorite: true, explanation: 'Châteauneuf-du-Pape – Grenache-dominiert, warm, alkoholstark, mit dunklen Beeren, Leder und den Kräutern der Garrigue (der wilden Buschlandschaft der Südrhône). Jedes Wort seiner Beschreibung findet sich im Glas. Und zum geschmorten Lamm ein Klassiker. Der Tester liest seine eigene Notiz, dann das Etikett. "Sie verstehen meine Sprache."' },
        { wineId: 'tempranillo_gran_reserva', acceptable: true, explanation: 'Gran Reserva passt zum Lamm und hat Leder – aber auch deutlich Vanille und Kokos aus dem Fass, genau das "Holzparfüm", das er nicht wollte. Und Spanien ist nicht Südfrankreich. Der Tester: "Ein schöner Wein. Nicht meine Beschreibung."' },
        { wineId: 'amarone', correct: false, explanation: 'Amarone ist warm und voll, aber Rosinen, Mokka und Schokolade sind etwas anderes als Garrigue und Thymian – und er kommt aus Venetien. Der Tester: "Sie haben \'warm\' gehört und den Rest überhört."' },
        { wineId: 'rose_provence', correct: false, explanation: 'Grenache und Provence-Kräuter – zwei Stichworte getroffen, aber ein leichter Rosé hat weder vollen Körper noch Wärme, und Leder schon gar nicht. Zur Lammschulter zu zart. Der Tester: "Südfrankreich, ja. Juli, nein."' },
        { wineId: 'pinotage', correct: false, explanation: 'Pinotage bringt Rauch und Kaffee, mittleren Körper und kommt aus Südafrika – das ist eine ganz andere Beschreibung. Der Tester: "Rauch habe ich nicht bestellt."' },
      ]
    },
  ],
};
