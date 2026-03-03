// ============================================================
// DER SOMMELIER — Fragen Level 0: Imbiss "Zum Goldenen Gyros"
// Thema: Basics & Weinstile (Rot/Weiß/Rosé, trocken/süß)
// ============================================================

QUESTIONS.imbiss = {
  food_pairing: [
    {
      id: 'fp_0_1', guestId: 'stavros', mood: '😊',
      scenario: 'Stavros kommt wie jeden Freitagabend rein, klopft dir auf die Schulter und ruft: "Malaka! Heute den großen Gyrosteller mit extra Tsatsiki und Pommes – und bring mir was Schönes zu trinken, ne?"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'imiglykos', correct: true, explanation: 'Perfekt! Imiglykos passt hervorragend zur griechischen Küche – süffig und unkompliziert zum deftigen Gyros.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling wäre zu säurebetont für das herzhafte Gyros mit Tsatsiki.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco passt eher zur italienischen Küche. Zum Gyros lieber was Griechisches!' },
      ]
    },
    {
      id: 'fp_0_2', guestId: 'studenten', mood: '🎉',
      scenario: 'Eine Truppe Studenten stürmt den Laden – es ist WG-Party-Abend. "Digga, drei große Pizzen! Margherita, Salami, Quattro Formaggi. Und Wein, aber günstig, ja?" Sie legen zusammen und zählen Münzen.',
      question: 'Was schlägst du vor?',
      options: [
        { wineId: 'lambrusco', correct: true, explanation: 'Richtig! Lambrusco zur Pizza ist ein Klassiker – leicht, spritzig, italienisch, und bezahlbar.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina schmeckt nach Harz – bei Pizza würde das eher irritieren.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Geht, aber Lambrusco ist DER Klassiker zu Pizza – die prickelnde Frische passt perfekt zum Käse.' },
      ]
    },
    {
      id: 'fp_0_3', guestId: 'das_paerchen', mood: '💑',
      scenario: 'Ein junges Paar kommt schüchtern rein, offensichtlich erstes Date. Sie kichert, er ist nervös. Bestellen Putenspieße mit Salat und fragen leise: "Haben Sie... etwas Leichtes zum Trinken?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist leicht und frisch, aber den haben wir erst ab Level 2 im Keller. Müller-Thurgau ist die bessere Wahl!' },
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Genau! Müller-Thurgau ist mild, blumig und leicht – perfekt zu Geflügel mit Salat. Und zum ersten Date passt die sanfte Art.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – nicht das, was man unter "leicht" versteht.' },
      ]
    },
    {
      id: 'fp_0_4', guestId: 'der_eilige', mood: '⚡',
      scenario: 'Ein Geschäftsmann im zerknitterten Anzug stürmt rein, Handy am Ohr. "Currywurst-Pommes zum Mitnehmen, schnell! Und packen Sie noch ne Flasche Roten ein – egal welchen, Hauptsache rot!" Er wedelt ungeduldig mit dem Geldbeutel.',
      question: 'Was gibst du ihm mit?',
      options: [
        { wineId: 'dornfelder', correct: true, explanation: 'Dornfelder – der unkomplizierte Rote für den eiligen Gast. Fruchtig, passt zu Deftigem.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Er wollte ausdrücklich ROT – Müller-Thurgau ist ein Weißwein!' },
        { wineId: 'riesling', correct: false, explanation: 'Auch ein Weißer! Der Gast war deutlich: "Hauptsache rot."' },
      ]
    },
    {
      id: 'fp_0_5', guestId: 'frau_mueller', mood: '🤔',
      scenario: 'Frau Müller, 72, kommt mit ihrer Handtasche unterm Arm. Sie studiert die Karte durch ihre Lesebrille und seufzt: "Ich möchte etwas Süßes, junger Mann. Aber bitte keinen Weißwein, davon bekomme ich immer Kopfschmerzen."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'imiglykos', correct: true, explanation: 'Richtig! Imiglykos ist lieblich und rot – genau was Frau Müller sucht.' },
        { wineId: 'lambrusco', correct: true, explanation: 'Gute Wahl! Lambrusco hat eine fruchtige Süße und ist rot. Passt perfekt!' },
        { wineId: 'riesling', correct: false, explanation: 'Sie sagte ausdrücklich keinen Weißwein – Riesling fällt also raus.' },
      ]
    },
    {
      id: 'fp_0_6', guestId: 'die_sportlerin', mood: '💪',
      scenario: 'Eine durchtrainierte junge Frau im Sport-Outfit betritt den Laden. "Hi! Einen gemischten Salat mit gegrillter Hähnchenbrust bitte – und dazu etwas Erfrischendes. Aber bitte nichts Schweres, ich hab gerade 10km hinter mir."',
      question: 'Was schlägst du vor?',
      options: [
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Perfekt! Müller-Thurgau ist mild, blumig und erfrischend – leicht genug nach dem Sport.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – zum leichten Salat nach dem Sport nicht ideal.' },
        { wineId: 'retsina', correct: false, explanation: 'Erfrischend ja, aber der Harzgeschmack passt nicht zu "nichts Schweres".' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_0_1', guestId: 'die_touristen', mood: '📸',
      scenario: 'Ein japanisches Touristenpaar steht staunend vor der Karte. Er hat eine Kamera um den Hals, sie blättert im Reiseführer. Sie zeigt auf die Weinkarte und sagt in vorsichtigem Deutsch: "Wir... kennen uns nicht aus. Süß und rot wäre nett? Zum Probieren?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'imiglykos', correct: true, explanation: 'Perfekt für Einsteiger! Imiglykos ist lieblich, fruchtig und rot – ideal zum Kennenlernen.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling ist weiß und trocken – das Gegenteil von dem was die Gäste suchen!' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist weiß und schmeckt nach Harz – nichts für unsichere Einsteiger.' },
      ]
    },
    {
      id: 'pref_0_2', guestId: 'bergmann', mood: '😌',
      scenario: 'Herr Bergmann, ein gemütlicher Stammgast in Arbeitskluft, lässt sich auf seinen Stammplatz fallen. "So, Feierabend! Heute mal nen Wein statt Bier. Aber bitte was Trockenes, Weißes. Nix Kompliziertes – ich bin Handwerker, kein Sommelier." Er grinst breit.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling', correct: true, explanation: 'Genau! Einfacher trockener Riesling – klar, frisch, unkompliziert. Wie bestellt.' },
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Auch gut! Müller-Thurgau ist mild und unkompliziert. Nur etwas weniger trocken als bestellt.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist rot UND lieblich – das Gegenteil von trocken und weiß!' },
      ]
    },
    {
      id: 'pref_0_3', guestId: 'das_paerchen', mood: '🌞',
      scenario: '"Oh, haben Sie Rosé?" Eine Frau mit großer Sonnenbrille lehnt sich an die Theke. "Meine Freundin hat mir erzählt, Rosé ist gerade total in. Aber nicht zu trocken – ich mag\'s lieber lieblich." Sie lächelt erwartungsvoll.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'lambrusco', correct: true, explanation: 'Wir haben keinen Rosé im Keller, aber Lambrusco hat eine fruchtige Süße und rötliche Farbe – eine gute Alternative!' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling ist weiß und trocken – nicht was die Gästin sucht.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist weiß und hat einen starken Eigengeschmack – nichts für Rosé-Fans.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_0_1', guestId: 'onkel_werner', mood: '☝️',
      statement: 'Onkel Werner hebt den Zeigefinger: "Also, junger Mann, ich sag dir eins: Rosé wird doch einfach aus Rotwein und Weißwein zusammengekippt! Das weiß doch jeder."',
      isCorrect: false,
      correction: 'Nicht ganz, Onkel Werner! Rosé entsteht durch kurzen Hautkontakt roter Trauben. Mischen ist in der EU sogar verboten – außer bei Champagner!'
    },
    {
      id: 'bw_0_2', guestId: 'der_eilige', mood: '🧐',
      statement: 'Der Geschäftsmann tippt auf den Schraubverschluss der Flasche: "Sehen Sie – Schraubverschluss! Das ist immer billiger Wein. Guter Wein hat Korken."',
      isCorrect: false,
      correction: 'Stimmt nicht! Viele Top-Weingüter nutzen Schraubverschluss – er schützt sogar besser vor Korkfehler (TCA). In Australien und Neuseeland ist er Standard.'
    },
    {
      id: 'bw_0_3', guestId: 'onkel_werner', mood: '👴',
      statement: 'Werner lehnt sich zurück: "Rotwein trinkt man bei Zimmertemperatur. Das war schon bei meinem Opa so, und der kannte sich aus!"',
      isCorrect: false,
      correction: '"Zimmertemperatur" war mal 16-18°C – in Omas Stube! Bei heutigen 22-24°C wird Rotwein zu warm. Ideal: leichte Rote bei 14-16°C, kräftige bei 16-18°C.'
    },
    {
      id: 'bw_0_4', guestId: 'frau_mueller', mood: '🤓',
      statement: 'Frau Müller rückt ihre Brille zurecht: "Wissen Sie, Pinot Grigio und Grauburgunder – das sind doch ganz verschiedene Trauben aus verschiedenen Ländern."',
      isCorrect: false,
      correction: 'Gleiche Traube! Pinot Grigio (IT), Grauburgunder (DE), Pinot Gris (FR) – alles derselbe Wein, nur anders benannt.'
    },
    {
      id: 'bw_0_5', guestId: 'die_touristen', mood: '🤨',
      statement: 'Der japanische Tourist kostet vorsichtig am Retsina und fragt seine Frau: "Schmeckt nach Harz... die kippen doch nicht wirklich Harz in den Wein, oder?"',
      isCorrect: true,
      correction: 'Stimmt tatsächlich! Kiefernharz wird während der Gärung zugegeben – eine Tradition seit der griechischen Antike, als Amphoren damit versiegelt wurden.'
    },
    {
      id: 'bw_0_6', guestId: 'die_sportlerin', mood: '🥗',
      statement: '"Ich trinke nur selten Wein," sagt die Sportlerin, "weil von den Sulfiten im Wein kriegt man doch Kopfschmerzen. Das steht überall im Netz."',
      isCorrect: false,
      correction: 'Stark vereinfacht! Kopfschmerzen kommen eher von Histaminen, Tanninen – oder zu viel Alkohol. Sulfite sind in Trockenfrüchten in viel höherer Konzentration und machen da keine Probleme!'
    },
  ],

  weinwissen: [
    {
      id: 'ww_0_1', guestId: 'lisa', mood: '🤔',
      question: 'Lisa, die neue Aushilfe, fragt dich in der Pause: "Sag mal, welche Farbe hat eigentlich Riesling? Ich trau mich nicht, den Chef zu fragen..."',
      options: [
        { text: 'Weiß', correct: true },
        { text: 'Rot', correct: false },
        { text: 'Rosé', correct: false },
      ],
      explanation: 'Riesling ist eine weiße Rebsorte – Deutschlands berühmtester Exportwein! Erkennbar an Zitrus-Aromen und lebendiger Säure.'
    },
    {
      id: 'ww_0_2', guestId: 'stavros', mood: '🇬🇷',
      question: 'Stavros grinst stolz: "Na, weißt du überhaupt, aus welchem Land Retsina kommt? Rate mal!"',
      options: [
        { text: 'Griechenland', correct: true },
        { text: 'Italien', correct: false },
        { text: 'Türkei', correct: false },
      ],
      explanation: 'Retsina ist DER griechische Wein schlechthin! Mit Kiefernharz versetzt – eine Tradition seit der Antike.'
    },
    {
      id: 'ww_0_3', guestId: 'bergmann', mood: '🍷',
      question: 'Herr Bergmann studiert die Karte: "Hier steht überall \'trocken\'. Was heißt das eigentlich bei Wein – wenig Alkohol, oder was?"',
      options: [
        { text: 'Wenig Restzucker', correct: true },
        { text: 'Wenig Alkohol', correct: false },
        { text: 'Kurze Reifezeit', correct: false },
      ],
      explanation: '"Trocken" bedeutet wenig Restzucker (unter 9g/l). Der Wein schmeckt nicht süß. Das Gegenteil wäre "lieblich" oder "süß".'
    },
    {
      id: 'ww_0_4', guestId: 'studenten', mood: '🤷',
      question: 'Einer der Studenten zeigt auf die Flasche: "Ey, Lambrusco – ist das überhaupt ein richtiger Wein? Schmeckt ja wie Limo!" Aus welchem Land kommt er?',
      options: [
        { text: 'Italien', correct: true },
        { text: 'Spanien', correct: false },
        { text: 'Deutschland', correct: false },
      ],
      explanation: 'Lambrusco kommt aus der Emilia-Romagna in Italien. Er ist leicht perlend (frizzante) und oft etwas süßer – aber definitiv ein richtiger Wein!'
    },
    {
      id: 'ww_0_5', guestId: 'onkel_werner', mood: '🧐',
      question: 'Onkel Werner testet dich: "Na Kleiner, mal sehen ob du was lernst hier. Was ist Dornfelder – ein Weingut, eine Rebsorte, oder eine Region?"',
      options: [
        { text: 'Eine rote Rebsorte', correct: true },
        { text: 'Ein Weingut in der Pfalz', correct: false },
        { text: 'Eine Weinregion', correct: false },
      ],
      explanation: 'Dornfelder ist eine rote Rebsorte! 1955 an der Weinbauschule Weinsberg gezüchtet. Benannt nach dem Gründer der Schule, Immanuel Dornfeld.'
    },
  ],
};
