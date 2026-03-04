// ============================================================
// DER SOMMELIER — Fragen Level 4: Sterne-Restaurant "Étoile"
// Thema: Verkostung & Weinsprache (Aromarad, Professionelle Beschreibungen)
// ============================================================

QUESTIONS.sterne = {
  food_pairing: [
    {
      id: 'fp_4_1', guestId: 'michelin_tester', mood: '🔍',
      scenario: 'Ein unauffälliger Gast bestellt Hummer mit Beurre Blanc – und du erkennst den Michelin-Tester. Alles muss perfekt sein. Er blickt ruhig hoch: "Ihr bester Schaumwein zum Hummer, bitte."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, explanation: 'Champagner zum Hummer – die Königsklasse des Food Pairing! Die feine Perlage und Brioche-Noten harmonieren perfekt mit der Beurre Blanc.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zum Hummer im Sterne-Restaurant? Das wäre das Ende Ihrer Karriere als Sommelier.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos zum Hummer? Der Michelin-Tester würde den Stern sofort aberkennen.' },
      ]
    },
    {
      id: 'fp_4_2', guestId: 'opernsaengerin', mood: '🎭',
      scenario: 'Die Opernsängerin schwebt nach der Premiere herein, Abendkleid und Pelzstola. "Darling, ich brauche Foie Gras – und dazu etwas Süßes, Opulentes. Der Abend war ein Triumph, da gönne ich mir das Beste!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'eiswein', correct: true, explanation: 'Eiswein zur Foie Gras – eine legendäre Kombination! Die konzentrierte Süße und brillante Säure umschmeicheln die cremige Gänseleber.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist trocken und tanninreich – er würde die Foie Gras überfordern statt umschmeicheln.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zur Foie Gras im Sterne-Restaurant? Die Opernsängerin würde eine Arie der Entrüstung singen.' },
      ]
    },
    {
      id: 'fp_4_3', guestId: 'prof_weinstein', mood: '🧙',
      scenario: 'Prof. Weinstein, Legende der Weinwelt, bestellt Ossobuco alla Milanese. Er schließt die Augen und riecht an einem leeren Glas: "Etwas Italienisches. Etwas Großes. Sie wissen schon."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'amarone', correct: true, explanation: 'Amarone della Valpolicella – opulent, komplex, ein Monument italienischer Weinkunst. Die Rosinen-Konzentration passt perfekt zum geschmorten Ossobuco.' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre ist ein französischer Weißer – weder italienisch noch kräftig genug für Ossobuco.' },
        { wineId: 'sekt', correct: false, explanation: 'Deutscher Sekt zum Ossobuco? Prof. Weinstein würde Sie nie mehr ernst nehmen.' },
      ]
    },
    {
      id: 'fp_4_4', guestId: 'promi_paar', mood: '🌟',
      scenario: 'Das Promi-Paar will inkognito bleiben, Sonnenbrillen auch beim Dinner. Sie flüstern: "Wir starten mit dem 7-Gänge-Menü. Zum Auftakt brauchen wir etwas Prickelndes, das den Abend einläutet."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, explanation: 'Champagner als Aperitif zum 7-Gänge-Menü – der perfekte Auftakt! Elegant, festlich, setzt den Standard für den Rest des Abends.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder als Aperitif im Étoile? Das wäre wie Turnschuhe zur Gala.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum 7-Gänge-Menü im Sterne-Restaurant? Die Promis wären schockiert.' },
      ]
    },
    {
      id: 'fp_4_5', guestId: 'kunstsammlerin', mood: '🎨',
      scenario: 'Die Kunstsammlerin bestellt Lammkarree mit Kräuterkruste und Rosmarin-Jus. "Kunst braucht einen passenden Rahmen – und gutes Essen einen großen Wein. Etwas aus dem Rhône-Tal vielleicht?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chateauneuf', correct: true, explanation: 'Châteauneuf-du-Pape – mächtig, kräuterig, mit Tiefe. Die Grenache-Wärme und der Garrigue-Charakter passen perfekt zum Lamm mit Rosmarin!' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde zum kräftigen Lamm? Wie ein Aquarell neben einem Ölgemälde – zu zart.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau zum Lammkarree? Das Fleisch würde den Wein komplett überdecken.' },
      ]
    },
    {
      id: 'fp_4_6', guestId: 'botschafterin', mood: '🌐',
      scenario: 'Die Botschafterin gibt ein intimes Dinner für drei befreundete Diplomaten. "Wir starten mit Ziegenkäse-Salat und Walnüssen. Etwas Französisches, Elegantes – ein Weißwein, der zeigt, dass ich Geschmack habe."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sancerre', correct: true, explanation: 'Sancerre – ein eleganter Sauvignon Blanc von der Loire. Ziegenkäse und Sancerre ist eine der berühmtesten Paarungen Frankreichs. Die Botschafterin beweist damit wahren Geschmack!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zum Ziegenkäse-Salat beim Diplomaten-Dinner? Das wäre ein diplomatischer Fauxpas.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist lieblich und griechisch – weder elegant noch französisch, wie die Botschafterin es wünscht.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_4_1', guestId: 'der_scheich', mood: '👑',
      scenario: 'Der Scheich lächelt wissend: "Ich bin viel gereist und habe vieles verkostet. Heute möchte ich den absoluten Höhepunkt – den besten Schaumwein der Welt. Geld ist kein Thema."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, explanation: 'Champagner – unangefochtener König der Schaumweine. Jahrhunderte Tradition, strengste Qualitätsregeln, einzigartiges Terroir.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt ist solide, aber "der Beste der Welt"? Dafür muss es Champagner sein.' },
        { wineId: 'cremant', correct: false, explanation: 'Crémant ist ein tolles Preis-Leistungs-Produkt, aber nicht "der Beste der Welt".' },
      ]
    },
    {
      id: 'pref_4_2', guestId: 'botschafterin', mood: '🍰',
      scenario: 'Die Botschafterin strahlt: "Das Dessert war göttlich! Haben Sie noch etwas Süßes – einen Dessertwein, der den Abend krönt? Nicht zu plump, mit Eleganz."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'eiswein', correct: true, explanation: 'Eiswein – konzentrierte Süße mit brillanter Säure als Gegengewicht. Nie plump, immer elegant. Die Krönung eines jeden Menüs.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist weder süß noch besonders elegant als Dessertbegleitung.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist trocken und tanninreich – kein Dessertwein.' },
      ]
    },
    {
      id: 'pref_4_3', guestId: 'sternekoch', mood: '🏅',
      scenario: 'Der Sternekoch-Kollege lehnt sich vor: "Ich suche einen spanischen Roten – lang gereift, komplex, mit Geschichte. Etwas, das man meditativ trinkt, nicht einfach runterschluckt."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'tempranillo_gran_reserva', correct: true, explanation: 'Tempranillo Gran Reserva – 60+ Monate gereift, nur in großen Jahrgängen. Leder, Tabak, reife Kirschen. Ein meditativer Tropfen mit Geschichte.' },
        { wineId: 'rioja_crianza', correct: false, explanation: 'Crianza ist erst die Einstiegsstufe der Reifung – für "lang gereift und komplex" braucht es die Gran Reserva.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist jung und spritzig – das Gegenteil von meditativ und gereift.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_4_1', guestId: 'promi_paar', mood: '🥂',
      statement: 'Er flüstert seiner Partnerin zu (laut genug, dass du es hörst): "Champagner ist im Grunde einfach nur teurer Sekt. Die Franzosen verlangen halt mehr wegen des Namens."',
      isCorrect: false,
      correction: 'Champagner darf NUR aus der Region Champagne kommen – mit den strengsten Produktionsregeln der Weinwelt! Kreideböden, spezielle Rebsorten, mindestens 15 Monate Hefelager. Der Preis hat seinen Grund.'
    },
    {
      id: 'bw_4_2', guestId: 'prof_weinstein', mood: '🍇',
      statement: 'Prof. Weinstein doziert am Nebentisch: "Wussten Sie, dass Amarone aus getrockneten Trauben gemacht wird? Appassimento nennt man das – die Trauben trocknen monatelang auf Holzgestellen."',
      isCorrect: true,
      correction: 'Korrekt! Beim Appassimento-Verfahren werden die Trauben (Corvina, Rondinella, Molinara) 3-4 Monate auf Bambusmatten getrocknet. Sie verlieren 40% ihres Gewichts – der Zucker und die Aromen konzentrieren sich enorm.'
    },
    {
      id: 'bw_4_3', guestId: 'kunstsammlerin', mood: '🍷',
      statement: 'Die Kunstsammlerin behauptet: "Châteauneuf-du-Pape muss immer aus Grenache bestehen. Das ist die einzige zugelassene Rebsorte."',
      isCorrect: false,
      correction: 'Ganz im Gegenteil! Bis zu 13 verschiedene Rebsorten sind erlaubt – Grenache dominiert zwar, aber auch Syrah, Mourvèdre, Cinsault und andere dürfen hinein. Diese Vielfalt macht die Weine so komplex!'
    },
    {
      id: 'bw_4_4', guestId: 'botschafterin', mood: '🧊',
      statement: '"Eiswein kann nur in Deutschland hergestellt werden," erklärt die Botschafterin. "Das ist ein rein deutsches Phänomen – nirgendwo sonst wird es kalt genug."',
      isCorrect: false,
      correction: 'Auch in Kanada wird hervorragender Eiswein (Icewine) produziert – sogar in größeren Mengen als in Deutschland! Auch Österreich kennt Eiswein. In Deutschland ist es aber eine besonders lange Tradition.'
    },
    {
      id: 'bw_4_5', guestId: 'opernsaengerin', mood: '🎶',
      statement: 'Die Opernsängerin nippt am Sancerre und verkündet dramatisch: "Sancerre wird aus Chardonnay gemacht – wie fast alle großen französischen Weißweine. Das ist einfach die beste weiße Traube!"',
      isCorrect: false,
      correction: 'Sancerre wird aus Sauvignon Blanc gemacht, nicht aus Chardonnay! Der Sauvignon Blanc gibt dem Sancerre seine typische Frische, Stachelbeere und das Feuerstein-Aroma. Chardonnay findet man eher im Burgund und in Chablis.'
    },
  ],

  weinwissen: [
    {
      id: 'ww_4_1', guestId: 'sternekoch', mood: '🍇',
      question: 'Der Sternekoch testet dich: "Was genau passiert beim Appassimento-Verfahren, das den Amarone so besonders macht?"',
      options: [
        { text: 'Die Trauben werden 3-4 Monate angetrocknet', correct: true },
        { text: 'Doppelte Gärung in speziellen Fässern', correct: false },
        { text: 'Kalte Maischung bei Minusgraden', correct: false },
        { text: 'Besonders lange Holzfass-Reifung', correct: false },
      ],
      explanation: 'Appassimento = Trocknung der Trauben auf Bambusmatten (Arele). Sie verlieren ca. 40% ihres Gewichts. Der Zucker und alle Aromen konzentrieren sich – daher der intensive, fast rosinenhafte Charakter.'
    },
    {
      id: 'ww_4_2', guestId: 'der_scheich', mood: '🍷',
      question: '"Eine Wissensfrage," lächelt der Scheich. "Wie viele Rebsorten dürfen in einem Châteauneuf-du-Pape verwendet werden?"',
      options: [
        { text: '13', correct: true },
        { text: '3', correct: false },
        { text: '7', correct: false },
        { text: '20', correct: false },
      ],
      explanation: '13 Rebsorten sind offiziell zugelassen! Grenache, Syrah, Mourvèdre, Cinsault, Counoise, Muscardin, Vaccarèse, Terret Noir, Clairette, Bourboulenc, Roussanne, Picardan und Picpoul.'
    },
    {
      id: 'ww_4_3', guestId: 'michelin_tester', mood: '🧊',
      question: 'Der Michelin-Tester fragt beiläufig: "Bei welcher Temperatur müssen Eiswein-Trauben gelesen werden?"',
      options: [
        { text: 'Mindestens minus 7°C', correct: true },
        { text: 'Bei 0°C', correct: false },
        { text: 'Mindestens minus 15°C', correct: false },
        { text: 'Die Temperatur ist egal', correct: false },
      ],
      explanation: 'Gesetzlich vorgeschrieben: mindestens -7°C bei der Lese! Die Trauben müssen am Stock gefrieren. Dadurch wird das Wasser als Eis zurückgehalten und nur der konzentrierte Saft wird gepresst.'
    },
    {
      id: 'ww_4_4', guestId: 'lisa', mood: '🎓',
      question: 'Lisa, inzwischen fast Kollegin, fragt philosophisch: "Was sind wir eigentlich? Was ist ein Sommelier – offiziell?"',
      options: [
        { text: 'Weinberater und -experte im Restaurant', correct: true },
        { text: 'Ein Winzer, der eigenen Wein macht', correct: false },
        { text: 'Ein Weinhändler mit eigenem Laden', correct: false },
        { text: 'Ein Kellermeister in der Produktion', correct: false },
      ],
      explanation: 'Ein Sommelier ist der Wein-Fachmann im Restaurant – verantwortlich für Weinkarte, Beratung, Einkauf und Service. Das Wort kommt aus dem Französischen: "sommier" = Lasttier, das den Wein trug!'
    },
    {
      id: 'ww_4_5', guestId: 'prof_weinstein', mood: '👅',
      question: 'Prof. Weinstein schließt die Augen nach einem Schluck und murmelt: "Langer Abgang..." Dann schaut er dich an: "Was beschreibt der Begriff \'Abgang\' bei einer Weinverkostung?"',
      options: [
        { text: 'Wie lange der Geschmack nach dem Schlucken nachwirkt', correct: true },
        { text: 'Der Moment des Schluckens', correct: false },
        { text: 'Die letzte Flasche einer Verkostung', correct: false },
        { text: 'Das Ende der Gärung', correct: false },
      ],
      explanation: 'Der "Abgang" (frz. "finale") beschreibt, wie lange und intensiv der Geschmack im Mund nachwirkt. Bei großen Weinen kann der Abgang über 60 Sekunden dauern – das Zeichen wahrer Qualität!'
    },
    {
      id: 'ww_4_6', guestId: 'kunstsammlerin', mood: '🖼️',
      question: 'Die Kunstsammlerin betrachtet die Schlieren am Glas wie ein Gemälde: "Diese Tränen am Glas – manche sagen, je mehr Schlieren, desto besser der Wein. Was sagen sie wirklich aus?"',
      options: [
        { text: 'Den Alkohol- und Glyceringehalt des Weins', correct: true },
        { text: 'Die Qualitätsstufe und den Preis', correct: false },
        { text: 'Ob der Wein biologisch angebaut wurde', correct: false },
        { text: 'Das Alter des Weins in Jahren', correct: false },
      ],
      explanation: 'Die "Kirchenfenster" oder "Tränen" (frz. "larmes") entstehen durch den Marangoni-Effekt: Alkohol verdunstet am Glasrand schneller als Wasser, was zu Schlieren führt. Mehr Schlieren = mehr Alkohol und Glycerin – aber nicht automatisch mehr Qualität!'
    },
  ],

  blindtasting: [
    {
      id: 'bt_4_1', guestId: 'prof_weinstein', mood: '🥂',
      clues: {
        appearance: 'Blass goldgelb mit feiner, anhaltender Perlage',
        nose: 'Brioche, Zitrus, weiße Blüten und ein Hauch geröstete Mandeln',
        palate: 'Cremig mit feiner Mousse, elegant trocken, mineralischer Abgang mit Kreide-Note'
      },
      options: [
        { wineId: 'champagner', correct: true },
        { wineId: 'sekt', correct: false },
        { wineId: 'vinho_verde', correct: false },
        { wineId: 'eiswein', correct: false },
      ],
      explanation: 'Brioche + Mandeln + Kreide + feine Perlage = Champagner! Die lange Hefelagerung (min. 15 Monate, oft 3+ Jahre) gibt die typischen Brioche- und Hefenoten. Die Kreide kommt vom Kreideboden der Champagne.'
    },
    {
      id: 'bt_4_2', guestId: 'sternekoch', mood: '🍷',
      clues: {
        appearance: 'Dunkel rubinrot, fast schwarz, dickflüssige Schlieren am Glas',
        nose: 'Rosinen, Bitterschokolade, Süßkirsche und getrocknete Kräuter',
        palate: 'Üppig und vollmundig, samtig-weich, mit Noten von Mokka und einem warmen, endlos langen Abgang'
      },
      options: [
        { wineId: 'amarone', correct: true },
        { wineId: 'dornfelder', correct: false },
        { wineId: 'malbec', correct: false },
        { wineId: 'rioja_crianza', correct: false },
      ],
      explanation: 'Rosinen + Schokolade + üppig + dickflüssig = Amarone! Das Appassimento (Traubentrocknung) gibt ihm die Rosinennoten und die unglaubliche Konzentration. Ein Wein wie ein Dessert.'
    },
    {
      id: 'bt_4_3', guestId: 'michelin_tester', mood: '🍯',
      clues: {
        appearance: 'Intensives Bernsteingold, ölig-viskos',
        nose: 'Konzentrierter Honig, Aprikose, Mango und kandierte Orange',
        palate: 'Üppig süß aber mit brillanter Säure als Gegengewicht, endlos langer Abgang mit Karamell-Note'
      },
      options: [
        { wineId: 'eiswein', correct: true },
        { wineId: 'champagner', correct: false },
        { wineId: 'sancerre', correct: false },
        { wineId: 'mueller_thurgau', correct: false },
      ],
      explanation: 'Bernsteingold + Honig + extreme Süße mit Säure-Balance = Eiswein! Die gefrorenen Trauben geben konzentriertesten Most – wenige Tropfen pro Traube. Daher auch die kleine Flasche (375ml) und der hohe Preis.'
    },
  ],
};
