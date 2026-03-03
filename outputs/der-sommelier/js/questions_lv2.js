// ============================================================
// DER SOMMELIER — Fragen Level 2: Gasthaus "Zur Linde"
// Thema: Wein & Essen (Food Pairing, regionale Küche)
// ============================================================

QUESTIONS.gutbuergerlich = {
  food_pairing: [
    {
      id: 'fp_2_1', guestId: 'oma_hildegard', mood: '👵',
      scenario: 'Oma Hildegard sitzt auf ihrem Stammplatz und bestellt wie immer: "Kindchen, ein Wiener Schnitzel mit Kartoffelsalat bitte. Und einen passenden Wein – aber nix Modernes!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Die Klassiker-Paarung! Grüner Veltliner mit seiner Pfeffrigkeit und Frische schneidet durch das knusprige Schnitzel perfekt.' },
        { wineId: 'barolo', correct: false, explanation: 'Barolo zum Schnitzel? Viel zu schwer und zu teuer – das wäre Kanonen auf Spatzen!' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist süßlich – zum panierten Schnitzel mit Zitrone passt eher ein trockener Weißer.' },
      ]
    },
    {
      id: 'fp_2_2', guestId: 'der_jaeger', mood: '🦌',
      scenario: 'Der Jäger legt seinen Hut an die Garderobe und sagt: "Heute gibt\'s Rehbraten mit Preiselbeeren und Knödeln – hab das Reh selbst erlegt! Dazu brauch ich einen kräftigen Roten aus der Region."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'zweigelt', correct: true, explanation: 'Zweigelt – kirschfruchtig mit weichen Tanninen. Aus Österreich, passt wunderbar zu Wild mit Preiselbeeren!' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist ein leichter, spritziger Weißer – viel zu zart für kräftigen Rehbraten.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist zu leicht für Wild. Zum Reh braucht es einen Roten mit Substanz.' },
      ]
    },
    {
      id: 'fp_2_3', guestId: 'brautpaar', mood: '💒',
      scenario: 'Das Brautpaar probt ihr Hochzeitsmenü. "Als Vorspeise nehmen wir Lachs auf Blattspinat," sagt sie aufgeregt. "Dazu brauchen wir etwas Elegantes – es soll ja perfekt werden für den großen Tag!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'cremant', correct: true, explanation: 'Crémant d\'Alsace – elegant, prickelnd und erschwinglich. Perfekt zur festlichen Vorspeise und zum Budget einer Hochzeit!' },
        { wineId: 'rioja_crianza', correct: false, explanation: 'Rioja Crianza ist ein Rotwein – zu Lachs passt ein eleganter Weißer oder Schaumwein besser.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zum Hochzeitsmenü? Etwas Eleganteres muss schon sein!' },
      ]
    },
    {
      id: 'fp_2_4', guestId: 'der_pfarrer', mood: '⛪',
      scenario: 'Der Pfarrer lässt sich nieder und bestellt Sauerbraten mit Klößen. Er lächelt wissend: "Frau Lindner macht den besten Sauerbraten im Ort. Dazu bräuchte ich einen guten Roten – nicht zu jung, mit etwas Reife."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza – mit Vanillenoten vom Eichenfass und reifen Kirscharomen. Genau die Reife, die zum Sauerbraten passt!' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist jung und leicht – das Gegenteil von "gereift" zum Sauerbraten.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum Sauerbraten? Der Harzgeschmack würde alles erschlagen.' },
      ]
    },
    {
      id: 'fp_2_5', guestId: 'wandergruppe', mood: '🥾',
      scenario: 'Die Wandergruppe kommt herein, die Wangen rot vom Wind. "Eine große Vesperplatte für alle bitte! Schinken, Käse, Essiggurken, Bauernbrot." Sie wollen einen leichten Weißwein, der zum Vesper passt.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gewuerztraminer', correct: true, explanation: 'Gewürztraminer – aromatisch, leicht halbtrocken, passt großartig zu Schinken und Käse. Ein Klassiker zum Vesper!' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist ein kräftiger Roter – zu schwer für eine leichte Vesperplatte.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist gut, aber die Gruppe wollte ausdrücklich einen Weißen.' },
      ]
    },
    {
      id: 'fp_2_6', guestId: 'austauschschuelerin', mood: '🇫🇷',
      scenario: 'Die französische Austauschschülerin seufzt nostalgisch: "In Frankreich essen wir immer Fisch mit Wein... Haben Sie Wolfsbarsch? Und etwas Leichtes, Frisches dazu – wie zu Hause am Meer?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'vinho_verde', correct: true, explanation: 'Vinho Verde – leicht, frisch, mit einer Spur Spritzigkeit. Wie eine Meeresbrise zum Wolfsbarsch! Die Austauschschülerin wäre begeistert.' },
        { wineId: 'zweigelt', correct: false, explanation: 'Zweigelt ist ein Rotwein – zum zarten Wolfsbarsch viel zu kräftig.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist süßlich – zur Meeresküche passt ein trockener, frischer Weißer besser.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_2_1', guestId: 'frau_doktor', mood: '🥂',
      scenario: 'Frau Doktor feiert eine erfolgreiche OP. "Ich hätte gern etwas Spritziges zum Aperitif – aber nicht zu teuer. Es soll festlich sein, aber ich bin ja nicht aus Geld gemacht!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'cremant', correct: true, explanation: 'Crémant – gleiche Methode wie Champagner, halber Preis! Festlich, elegant, bezahlbar.' },
        { wineId: 'rioja_crianza', correct: false, explanation: 'Rioja Crianza ist still und rot – nicht das Prickelnde, das sie sucht.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist weder prickelnd noch festlich genug für diesen Anlass.' },
      ]
    },
    {
      id: 'pref_2_2', guestId: 'oma_hildegard', mood: '🌸',
      scenario: 'Oma Hildegard möchte mal was Neues probieren: "Kindchen, ich hab gehört, es gibt Weißweine, die richtig nach Blumen und Gewürzen duften. Haben Sie sowas? Darf auch halbtrocken sein."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gewuerztraminer', correct: true, explanation: 'Gewürztraminer – der duftintensivste Weißwein überhaupt! Litschi, Rosenblüte, Gewürze. Genau was Oma Hildegard sucht.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling ist frisch und zitrusbetont, aber nicht der blumig-aromatische Typ, den sie meint.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist eher neutral und dezent – wenig Duft und Blume.' },
      ]
    },
    {
      id: 'pref_2_3', guestId: 'brautpaar', mood: '💍',
      scenario: '"Wir feiern unsere Silberhochzeit!" Das Paar strahlt. "25 Jahre zusammen – da muss etwas Besonderes her. Etwas Edles zum Anstoßen, aber es muss nicht Champagner sein."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'cremant', correct: true, explanation: 'Crémant – edle Flaschengärung, festliche Perlage. Champagner-Qualität zum vernünftigen Preis für den besonderen Anlass!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zur Silberhochzeit? Da fehlt das Festliche.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos zum Jubiläum? Da muss schon etwas mehr Eleganz her.' },
      ]
    },
    {
      id: 'pref_2_4', guestId: 'buergermeister', mood: '🏛️',
      scenario: 'Der Bürgermeister empfängt den Partnerstadtrat aus Spanien. "Wir brauchen einen kräftigen Roten, der auch zum Käse passt. Etwas, das unseren spanischen Gästen Respekt zeigt!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza – ein spanischer Klassiker! Das zeigt Respekt vor den Gästen und passt hervorragend zu Käse.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist portugiesisch und leicht – weder kräftig noch eine Ehrerbietung an Spanien.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Ein französischer Rosé für spanische Gäste? Da gibt es bessere diplomatische Optionen.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_2_1', guestId: 'der_pfarrer', mood: '🍷',
      statement: 'Der Pfarrer doziert am Tisch: "Gewürztraminer heißt so, weil er nach Gewürzen schmeckt – Nelke, Zimt und so weiter. Das ist ja wie Glühwein!"',
      isCorrect: true,
      correction: 'Stimmt im Kern! Der Name kommt zwar vom Ort Tramin in Südtirol, aber die Rebsorte ist tatsächlich für ihre intensiven Gewürzaromen bekannt: Litschi, Rosenblüte, Gewürznelke.'
    },
    {
      id: 'bw_2_2', guestId: 'wandergruppe', mood: '🧐',
      statement: 'Einer der Wanderer meint: "Crémant und Champagner – die werden doch völlig unterschiedlich hergestellt. Champagner ist viel aufwendiger!"',
      isCorrect: false,
      correction: 'Beide werden in der "Méthode Traditionnelle" hergestellt – gleiche Flaschengärung! Der Hauptunterschied ist die Herkunft: Champagner nur aus der Champagne, Crémant aus anderen französischen Regionen.'
    },
    {
      id: 'bw_2_3', guestId: 'austauschschuelerin', mood: '🇵🇹',
      statement: '"In Portugal trinkt man eigentlich nur Portwein," erzählt die Austauschschülerin. "Andere Weine gibt es da kaum."',
      isCorrect: false,
      correction: 'Ganz falsch! Portugal hat über 250 einheimische Rebsorten und produziert exzellente Stillweine. Vinho Verde ist sogar einer der beliebtesten Exportweine Europas!'
    },
    {
      id: 'bw_2_4', guestId: 'buergermeister', mood: '🏔️',
      statement: 'Der Bürgermeister erzählt stolz: "Zweigelt – das ist eine Rebsorte aus der Schweiz! Hab ich bei einer Delegationsreise gelernt."',
      isCorrect: false,
      correction: 'Zweigelt kommt aus Österreich! Gezüchtet 1922 von Prof. Friedrich Zweigelt an der Höheren Bundeslehranstalt Klosterneuburg aus Blaufränkisch × St. Laurent.'
    },
  ],

  weinwissen: [
    {
      id: 'ww_2_1', guestId: 'brautpaar', mood: '🥂',
      question: 'Das Brautpaar fragt beim Probieren: "Was macht den Crémant eigentlich zum Schaumwein? Wird da einfach CO₂ reingepumpt?"',
      options: [
        { text: 'Flaschengärung (zweite Gärung in der Flasche)', correct: true },
        { text: 'Kohlensäure wird nachträglich zugesetzt', correct: false },
        { text: 'Tankgärung unter Hochdruck', correct: false },
        { text: 'Natürliche Kohlensäure aus der Quelle', correct: false },
      ],
      explanation: 'Crémant entsteht durch Flaschengärung (Méthode Traditionnelle) – die gleiche Methode wie Champagner! CO₂ entsteht natürlich durch die zweite Gärung direkt in der Flasche.'
    },
    {
      id: 'ww_2_2', guestId: 'der_pfarrer', mood: '🇪🇸',
      question: 'Der Pfarrer studiert die Rioja-Flasche: "Da steht Crianza drauf. Was bedeutet das bei spanischem Wein?"',
      options: [
        { text: 'Mind. 24 Monate Reifung, davon 12 im Fass', correct: true },
        { text: 'Der Name der Rebsorte', correct: false },
        { text: 'Ein besonders trockener Ausbau', correct: false },
        { text: 'Wein aus der ersten Ernte des Jahres', correct: false },
      ],
      explanation: 'Crianza = mind. 24 Monate Gesamtreifung, davon mind. 12 im Eichenfass. Danach kommt Reserva (36 Mon.) und Gran Reserva (60 Mon.).'
    },
    {
      id: 'ww_2_3', guestId: 'oma_hildegard', mood: '🤔',
      question: 'Oma Hildegard will verstehen: "Warum empfehlen alle Grüner Veltliner zum Schnitzel? Was macht die Kombination so besonders?"',
      options: [
        { text: 'Die Säure und Pfeffrigkeit schneiden durch das Fett', correct: true },
        { text: 'Die Süße gleicht die Panade aus', correct: false },
        { text: 'Der schwere Körper hält dem Fleisch stand', correct: false },
        { text: 'Die Farbe passt zum goldenen Schnitzel', correct: false },
      ],
      explanation: 'Die lebendige Säure und das pfeffrige Aroma des Grüner Veltliner schneiden perfekt durch das Fett der Panade – wie ein Spritzer Zitrone. Food Pairing at its best!'
    },
    {
      id: 'ww_2_4', guestId: 'lisa', mood: '🌍',
      question: 'Lisa blättert im Atlas: "Welches Land hat eigentlich die größte Rebfläche der Welt? Frankreich bestimmt, oder?"',
      options: [
        { text: 'Spanien', correct: true },
        { text: 'Frankreich', correct: false },
        { text: 'Italien', correct: false },
        { text: 'USA', correct: false },
      ],
      explanation: 'Spanien hat mit über 950.000 Hektar die größte Rebfläche der Welt! Frankreich und Italien produzieren aber mehr Wein, da Spaniens Erträge niedriger sind.'
    },
    {
      id: 'ww_2_5', guestId: 'austauschschuelerin', mood: '🇵🇹',
      question: 'Die Austauschschülerin möchte den Vinho Verde verstehen: "\'Grüner Wein\' – heißt das, die Trauben sind grün? Oder ist der Wein grün?"',
      options: [
        { text: '"Grün" = jung – er wird jung getrunken', correct: true },
        { text: 'Die Trauben sind unreif/grün', correct: false },
        { text: 'Der Wein hat eine grüne Farbe', correct: false },
        { text: 'Er wächst nur auf grünen Hügeln', correct: false },
      ],
      explanation: '"Verde" (grün) steht für jung/frisch – der Wein wird im Jahr nach der Ernte getrunken. Die leichte Spritzigkeit kommt von natürlicher CO₂-Restgärung.'
    },
  ],
};
