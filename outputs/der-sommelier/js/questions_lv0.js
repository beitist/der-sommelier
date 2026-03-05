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
        { wineId: 'imiglykos', correct: true, favorite: true, explanation: 'Perfekt! Imiglykos passt hervorragend zur griechischen Küche – süffig und unkompliziert zum deftigen Gyros.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling wäre zu säurebetont für das herzhafte Gyros mit Tsatsiki.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco passt eher zur italienischen Küche. Zum Gyros lieber was Griechisches!' },
      ]
    },
    {
      id: 'fp_0_2', guestId: 'studenten', mood: '🎉',
      scenario: 'Eine Truppe Studenten stürmt den Laden – es ist WG-Party-Abend. "Digga, drei große Pizzen! Margherita, Salami, Quattro Formaggi. Und Wein, aber günstig, ja?" Sie legen zusammen und zählen Münzen.',
      question: 'Was schlägst du vor?',
      options: [
        { wineId: 'lambrusco', correct: true, favorite: true, explanation: 'Richtig! Lambrusco zur Pizza ist ein Klassiker – leicht, spritzig, italienisch, und bezahlbar.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina schmeckt nach Harz – bei Pizza würde das eher irritieren.' },
        { wineId: 'dornfelder', correct: true, explanation: 'Geht auch! Dornfelder ist günstig und unkompliziert – allerdings ist Lambrusco DER Klassiker zu Pizza.' },
      ]
    },
    {
      id: 'fp_0_3', guestId: 'das_paerchen', mood: '💑',
      scenario: 'Ein junges Paar kommt schüchtern rein, offensichtlich erstes Date. Sie kichert, er ist nervös. Bestellen Putenspieße mit Salat und fragen leise: "Haben Sie... etwas Leichtes zum Trinken?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist leicht und frisch, aber den haben wir erst ab Level 2 im Keller. Müller-Thurgau ist die bessere Wahl!' },
        { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Genau! Müller-Thurgau ist mild, blumig und leicht – perfekt zu Geflügel mit Salat. Und zum ersten Date passt die sanfte Art.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – nicht das, was man unter "leicht" versteht.' },
      ]
    },
    {
      id: 'fp_0_4', guestId: 'der_eilige', mood: '⚡',
      scenario: 'Ein Geschäftsmann im zerknitterten Anzug stürmt rein, Handy am Ohr. "Currywurst-Pommes zum Mitnehmen, schnell! Und packen Sie noch ne Flasche Roten ein – egal welchen, Hauptsache rot!" Er wedelt ungeduldig mit dem Geldbeutel.',
      question: 'Was gibst du ihm mit?',
      options: [
        { wineId: 'dornfelder', correct: true, favorite: true, explanation: 'Dornfelder – der unkomplizierte Rote für den eiligen Gast. Fruchtig, passt zu Deftigem.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Er wollte ausdrücklich ROT – Müller-Thurgau ist ein Weißwein!' },
        { wineId: 'riesling', correct: false, explanation: 'Auch ein Weißer! Der Gast war deutlich: "Hauptsache rot."' },
      ]
    },
    {
      id: 'fp_0_5', guestId: 'frau_mueller', mood: '🤔',
      scenario: 'Frau Müller, 72, kommt mit ihrer Handtasche unterm Arm. Sie studiert die Karte durch ihre Lesebrille und seufzt: "Ich möchte etwas Süßes, junger Mann. Aber bitte keinen Weißwein, davon bekomme ich immer Kopfschmerzen."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'imiglykos', correct: true, favorite: true, explanation: 'Richtig! Imiglykos ist lieblich und rot – genau was Frau Müller sucht.' },
        { wineId: 'lambrusco', correct: true, explanation: 'Gute Wahl! Lambrusco ist rot und fruchtig-süß. Aber Imiglykos ist noch lieblicher und runder – genau der sanfte, süße Stil, den Frau Müller sucht.' },
        { wineId: 'riesling', correct: false, explanation: 'Sie sagte ausdrücklich keinen Weißwein – Riesling fällt also raus.' },
      ]
    },
    {
      id: 'fp_0_6', guestId: 'die_sportlerin', mood: '💪',
      scenario: 'Eine durchtrainierte junge Frau im Sport-Outfit betritt den Laden. "Hi! Einen gemischten Salat mit gegrillter Hähnchenbrust bitte – und dazu etwas Erfrischendes. Aber bitte nichts Schweres, ich hab gerade 10km hinter mir."',
      question: 'Was schlägst du vor?',
      options: [
        { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Perfekt! Müller-Thurgau ist mild, blumig und erfrischend – leicht genug nach dem Sport.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – zum leichten Salat nach dem Sport nicht ideal.' },
        { wineId: 'retsina', correct: false, explanation: 'Erfrischend ja, aber der Harzgeschmack passt nicht zu "nichts Schweres".' },
      ]
    },
    {
      id: 'fp_0_7', guestId: 'onkel_werner', mood: '🍖',
      scenario: 'Onkel Werner kommt mit Sauerkrautflecken auf dem Hemd und bestellt: "Mädel, Leberkäse mit Spiegelei und Kartoffelsalat! Und bring mir nen ordentlichen Weißen – aber keinen von dem neumodischen Kram. Was Bodenständiges!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling', correct: true, favorite: true, explanation: 'Riesling zum Leberkäse – ein ehrlicher deutscher Wein zum ehrlichen deutschen Essen. Die Säure schneidet schön durch das Fett!' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist für Werner definitiv "neumodischer Kram" – griechischer Harzwein zum Leberkäse? Da dreht er sich um.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Ein lieblicher Grieche zum Leberkäse? Onkel Werner will was Bodenständiges, nicht was Süßes.' },
      ]
    },
    {
      id: 'fp_0_8', guestId: 'stavros', mood: '🥳',
      scenario: 'Stavros schmeißt heute eine kleine Feier – sein Neffe hat die Ausbildung bestanden! Auf der Theke stehen Schalen mit Oliven, Feta und gegrillten Sardinen. "Heute wird gefeiert, Freund! Bring mir was Griechisches – die ganze Platte muss begleitet werden!"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'retsina', correct: true, favorite: true, explanation: 'Perfekt! Retsina ist DER Wein zu griechischen Meze – der harzige Charakter harmoniert wunderbar mit salzigem Feta, Oliven und Meeresfrüchten.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist zu mild und blumig – gegen Oliven und Sardinen geht er geschmacklich unter.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Rotwein zu Sardinen und Feta? Das wird bitter und metallisch. Hier passt ein frischer Weißer besser.' },
      ]
    },
    {
      id: 'fp_0_9', guestId: 'die_touristen', mood: '🍝',
      scenario: 'Die Touristen sind wieder da! Diesmal haben sie im Reiseführer gelesen, dass man in Deutschland auch gute Pasta bekommt. Sie bestellen Spaghetti Bolognese und fragen: "Wine... for Pasta? Red, yes?"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'dornfelder', correct: true, favorite: true, explanation: 'Richtig! Dornfelder mit seinem fruchtigen Körper passt gut zur kräftigen Tomaten-Fleischsauce der Bolognese.' },
        { wineId: 'lambrusco', correct: true, explanation: 'Auch eine gute Wahl! Lambrusco ist der klassische italienische Begleiter zu Pasta. Aber Dornfelder hat mehr Körper und Frucht – genau richtig für die kräftige Fleisch-Tomatensauce der Bolognese.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling-Säure und kräftige Bolognese-Sauce beißen sich. Zur Tomatensauce lieber einen Roten!' },
      ]
    },
    {
      id: 'fp_0_10', guestId: 'frau_mueller', mood: '🐟',
      scenario: 'Frau Müller ist heute mit ihrer Enkelin da. "Die Kleine hat Geburtstag und wollte unbedingt hierher – stell dir vor!" Sie bestellen Backfisch mit Kartoffelsalat. "Und für die Oma ein Gläschen Wein, bitte. Was passt denn zum Fisch?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling', correct: true, favorite: true, explanation: 'Klassiker! Riesling und Fisch ist eine Traumkombination – die lebendige Säure schneidet durch die Panade und erfrischt den Gaumen.' },
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Auch gut! Müller-Thurgau ist mild und passt zu leichten Fischgerichten. Riesling hat hier aber die Nase vorn mit seiner knackigen Säure.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Lieblicher Rotwein zum Backfisch? Das passt überhaupt nicht – der Zucker und die roten Fruchtaromen übertönen den feinen Fischgeschmack.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_0_1', guestId: 'die_touristen', mood: '📸',
      scenario: 'Ein japanisches Touristenpaar steht staunend vor der Karte. Er hat eine Kamera um den Hals, sie blättert im Reiseführer. Sie zeigt auf die Weinkarte und sagt in vorsichtigem Deutsch: "Wir... kennen uns nicht aus. Süß und rot wäre nett? Zum Probieren?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'imiglykos', correct: true, favorite: true, explanation: 'Perfekt für Einsteiger! Imiglykos ist lieblich, fruchtig und rot – ideal zum Kennenlernen.' },
        { wineId: 'lambrusco', correct: true, explanation: 'Lambrusco wäre auch eine gute Wahl – lieblich und rot. Aber Imiglykos ist etwas fruchtiger für Einsteiger.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist weiß und schmeckt nach Harz – nichts für unsichere Einsteiger.' },
      ]
    },
    {
      id: 'pref_0_2', guestId: 'bergmann', mood: '😌',
      scenario: 'Herr Bergmann, ein gemütlicher Stammgast in Arbeitskluft, lässt sich auf seinen Stammplatz fallen. "So, Feierabend! Heute mal nen Wein statt Bier. Aber bitte was Trockenes, Weißes. Nix Kompliziertes – ich bin Handwerker, kein Sommelier." Er grinst breit.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling', correct: true, favorite: true, explanation: 'Genau! Einfacher trockener Riesling – klar, frisch, unkompliziert. Wie bestellt.' },
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Auch gut! Müller-Thurgau ist mild und unkompliziert. Nur etwas weniger trocken als bestellt.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist rot UND lieblich – das Gegenteil von trocken und weiß!' },
      ]
    },
    {
      id: 'pref_0_3', guestId: 'das_paerchen', mood: '🌞',
      scenario: '"Oh, haben Sie Rosé?" Eine Frau mit großer Sonnenbrille lehnt sich an die Theke. "Meine Freundin hat mir erzählt, Rosé ist gerade total in. Aber nicht zu trocken – ich mag\'s lieber lieblich." Sie lächelt erwartungsvoll.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'lambrusco', correct: true, favorite: true, explanation: 'Wir haben keinen Rosé im Keller, aber Lambrusco hat eine fruchtige Süße und rötliche Farbe – eine gute Alternative!' },
        { wineId: 'imiglykos', correct: true, explanation: 'Imiglykos ist auch lieblich und rot – aber Lambrusco kommt mit seiner spritzigen Art einem Rosé am nächsten.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist weiß und hat einen starken Eigengeschmack – nichts für Rosé-Fans.' },
      ]
    },
    {
      id: 'pref_0_4', guestId: 'die_sportlerin', mood: '🏃',
      scenario: 'Die Sportlerin ist diesmal nach dem Yoga da und deutlich entspannter. "Heute gönn ich mir was! Aber bitte trocken und weiß – ich mag keine süßen Weine. Und nichts über 12% Alkohol, morgen ist Halbmarathon."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling', correct: true, favorite: true, explanation: 'Trockener Riesling hat oft nur 11-12% Alkohol und ist erfrischend trocken – perfekt für die disziplinierte Sportlerin!' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist lieblich – sie wollte ausdrücklich trocken!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist rot, nicht weiß. Zuhören ist die halbe Miete!' },
      ]
    },
    {
      id: 'pref_0_5', guestId: 'onkel_werner', mood: '🍺',
      scenario: 'Onkel Werner kommt diesmal mit seinen Kegelbrüdern. "Also Jungs, heute trinken wir mal Wein statt Bier!" Die Truppe schaut skeptisch. Werner bestellt für alle: "Aber bitte was, das auch Biertrinker mögen – nichts Saures und nichts Süßes. Einfach süffig!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'dornfelder', correct: true, favorite: true, explanation: 'Genau richtig! Dornfelder ist fruchtig, weich und unkompliziert – der perfekte Einstiegswein für Biertrinker. Kein Säureschock, keine komplizierte Süße.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling hat eine kräftige Säure – für Biertrinker, die "nichts Saures" wollen, der falsche Start.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina mit Harzgeschmack für Biertrinker? Die kommen nie wieder!' },
      ]
    },
    {
      id: 'pref_0_6', guestId: 'studenten', mood: '🎓',
      scenario: 'Diesmal kommt nur eine Studentin alleine rein. Sie lernt für eine Gastro-Prüfung und hat ihr Lehrbuch dabei. "Hey, ich will mal einen richtig typisch deutschen Weißwein probieren – also DEN Klassiker. Was Deutschland berühmt gemacht hat!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling', correct: true, favorite: true, explanation: 'Natürlich Riesling! Er ist DER deutsche Wein schlechthin – weltweit berühmt für seine Eleganz und Vielseitigkeit. Damit besteht sie auch jede Prüfung!' },
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Auch ein deutscher Klassiker! Müller-Thurgau ist sogar mengenmäßig weit verbreitet. Aber Riesling ist international DAS Aushängeschild Deutschlands.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist italienisch – nicht gerade der deutsche Klassiker, den sie sucht.' },
      ]
    },
    {
      id: 'pref_0_7', guestId: 'bergmann', mood: '🎄',
      scenario: 'Herr Bergmann kommt aufgeregt rein: "Du, ich brauch deinen Rat! Meine Schwiegermutter kommt morgen zum Abendessen. Die trinkt nur Weißwein, aber bitte nicht zu trocken – sie mag es lieber etwas milder. Was nehm ich mit?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Perfekte Wahl! Müller-Thurgau ist mild, blumig und halbtrocken – nicht zu trocken, nicht zu süß. Da kann die Schwiegermutter nicht meckern!' },
        { wineId: 'riesling', correct: false, explanation: 'Der Riesling hier ist trocken – die Schwiegermutter will es milder. Damit riskierst du Bergmanns Familienfrieden!' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist rot und lieblich – sie will ausdrücklich Weißwein, und "milder" ist nicht gleich "lieblich".' },
      ]
    },
    {
      id: 'pref_0_8', guestId: 'der_eilige', mood: '🎁',
      scenario: 'Der Geschäftsmann ist diesmal nicht ganz so gehetzt. Er lehnt sich an die Theke: "Ich brauch ein Geschenk für meine Sekretärin – die ist Italienerin, total heimwehkrank. Irgendwas Italienisches, das sie an Zuhause erinnert?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'lambrusco', correct: true, favorite: true, explanation: 'Volltreffer! Lambrusco aus der Emilia-Romagna – ein Stück Italien in der Flasche. Spritzig, fruchtig, und die perfekte Erinnerung an die Heimat.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist deutsch – nicht gerade das, was eine heimwehkranke Italienerin an Zuhause erinnert.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist griechisch – falsche Mittelmeerküste! Für Italien muss Lambrusco her.' },
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
    {
      id: 'bw_0_7', guestId: 'studenten', mood: '🍕',
      statement: 'Ein Student hält die Lambrusco-Flasche hoch: "Ey Leute, das ist doch kein echter Wein – Lambrusco ist alkoholfreie Limo aus Italien, oder?"',
      isCorrect: false,
      correction: 'Lambrusco ist ein vollwertiger Wein mit ca. 7-11% Alkohol! Er ist leicht perlend (frizzante) und oft etwas süßer, aber definitiv kein Softdrink. In der Emilia-Romagna hat er eine jahrhundertealte Tradition.'
    },
    {
      id: 'bw_0_8', guestId: 'die_sportlerin', mood: '💧',
      statement: 'Die Sportlerin schaut nachdenklich auf ihr Glas Müller-Thurgau: "Weißwein hat doch generell weniger Kalorien als Rotwein, oder? Deswegen trinke ich lieber Weißen."',
      isCorrect: false,
      correction: 'Nicht unbedingt! Die Kalorien kommen hauptsächlich vom Alkohol- und Zuckergehalt, nicht von der Farbe. Ein trockener Rotwein mit 12% hat ähnlich viele Kalorien wie ein trockener Weißer. Ein lieblicher Weißwein kann sogar mehr haben!'
    },
    {
      id: 'bw_0_9', guestId: 'frau_mueller', mood: '🤓',
      statement: 'Frau Müller riecht an ihrem Glas und sagt: "Wissen Sie, ein Korken kann den Wein komplett verderben. Meine Freundin hatte neulich so eine Flasche – hat nach feuchter Pappe gerochen!"',
      isCorrect: true,
      correction: 'Stimmt! Der sogenannte "Korkfehler" wird durch den Stoff TCA (Trichloranisol) verursacht, der sich im Naturkorken bilden kann. Er gibt dem Wein einen muffigen Geruch nach feuchtem Karton. Etwa 3-5% aller Flaschen mit Naturkorken sind betroffen!'
    },
    {
      id: 'bw_0_10', guestId: 'das_paerchen', mood: '🤓',
      statement: 'Er will vor ihr angeben und sagt: "Weißt du, Roséwein wird tatsächlich aus roten Trauben gemacht. Die Schale bleibt nur kurz im Most, darum ist er nicht so dunkel."',
      isCorrect: true,
      correction: 'Genau richtig! Bei Rosé werden rote Trauben nur kurz auf der Schale belassen (wenige Stunden statt Tage wie bei Rotwein). Die kurze Kontaktzeit gibt dem Wein seine hellrosa Farbe. Man nennt das "Direktpressung" oder "Saignée-Methode".'
    },
    {
      id: 'bw_0_11', guestId: 'bergmann', mood: '🤓',
      statement: 'Herr Bergmann nimmt einen Schluck Riesling und sagt: "Weißt du, meine Frau sagt, man kann auch aus roten Trauben Weißwein machen. Klingt verrückt, aber sie ist ja die Schlaue bei uns."',
      isCorrect: true,
      correction: 'Frau Bergmann hat recht! Da der Saft fast aller Trauben hell ist, kann man durch sofortiges Abpressen roter Trauben Weißwein gewinnen. Das bekannteste Beispiel ist "Blanc de Noirs" – weißer Champagner aus roten Pinot-Noir-Trauben!'
    },
    {
      id: 'bw_0_12', guestId: 'stavros', mood: '🤓',
      statement: 'Stavros zeigt stolz auf den Imiglykos: "Weißt du, in Griechenland wird seit über 6.000 Jahren Wein angebaut! Wir Griechen haben das quasi erfunden – lange vor den Franzosen!"',
      isCorrect: true,
      correction: 'Stimmt! Griechenland gehört zu den ältesten Weinbaukulturen der Welt. Archäologische Funde belegen Weinbau seit mindestens 4.500 v. Chr. Die alten Griechen hatten sogar einen eigenen Gott des Weins – Dionysos!'
    },
    {
      id: 'bw_0_13', guestId: 'onkel_werner', mood: '🤓',
      statement: 'Onkel Werner riecht am Glas und meint: "Man kann einen Wein am Geruch erkennen, bevor man ihn trinkt. Die Nase verrät mehr als der Gaumen!"',
      isCorrect: true,
      correction: 'Da hat Werner ausnahmsweise recht! Die menschliche Nase kann über 10.000 verschiedene Gerüche unterscheiden. Beim Wein nehmen wir 70-80% des Geschmacks über die Nase wahr. Profis verbringen mehr Zeit mit Riechen als mit Trinken!'
    },
    {
      id: 'bw_0_14', guestId: 'studenten', mood: '🤓',
      statement: 'Eine Studentin schaut auf die Flasche und sagt: "Ey, das Etikett sagt 11,5% Alkohol. Das ist doch weniger als die meisten Biere... oder? Nee, warte – Wein hat ja MEHR Alkohol als Bier!"',
      isCorrect: true,
      correction: 'Richtig erkannt! Bier hat typischerweise 4-6% Alkohol, Wein dagegen 9-15%. Selbst ein leichter Wein wie Müller-Thurgau mit 11% hat gut doppelt so viel Alkohol wie ein normales Pils. Darum trinkt man Wein auch in kleineren Mengen!'
    },
    {
      id: 'bw_0_15', guestId: 'die_sportlerin', mood: '🤓',
      statement: '"Ich hab gelesen," sagt die Sportlerin, "dass man eine angebrochene Flasche Weißwein im Kühlschrank aufbewahren sollte. Stimmt das?"',
      isCorrect: true,
      correction: 'Absolut richtig! Kälte verlangsamt die Oxidation, die den Wein nach dem Öffnen verderben lässt. Angebrochener Weißwein hält im Kühlschrank 2-3 Tage. Bei Rotwein reicht ein kühler Ort – aber auch er sollte nicht tagelang offen stehen!'
    },
    {
      id: 'bw_0_16', guestId: 'die_touristen', mood: '🤓',
      statement: 'Die japanische Touristin liest im Reiseführer und sagt zu ihrem Mann: "Hier steht, dass Deutschland eines der nördlichsten Weinbauländer der Welt ist. Deswegen gibt es hier vor allem Weißwein!"',
      isCorrect: true,
      correction: 'Stimmt! Deutschland liegt am Rand der Weinbauzone, was kühleres Klima bedeutet. Daher dominieren weiße Rebsorten (ca. 65%), die mit weniger Wärme reifen können. Riesling liebt diese kühlen Bedingungen – sie geben ihm seine berühmte Säure!'
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
    {
      id: 'ww_0_6', guestId: 'die_sportlerin', mood: '🏋️',
      question: 'Die Sportlerin studiert die Karte und fragt: "Sag mal, was bedeutet eigentlich \'lieblich\' bei Wein? Heißt das einfach nur süß?"',
      options: [
        { text: 'Deutlich süß – zwischen halbtrocken und süß', correct: true },
        { text: 'Besonders mild und magenfreundlich', correct: false },
        { text: 'Ein Wein mit wenig Alkohol', correct: false },
      ],
      explanation: '"Lieblich" bedeutet deutlich spürbarer Restzucker (18-45 g/l). Es ist süßer als halbtrocken, aber noch nicht so süß wie "süß". Imiglykos und Lambrusco sind typisch liebliche Weine.'
    },
    {
      id: 'ww_0_7', guestId: 'das_paerchen', mood: '💕',
      question: 'Er will vor ihr angeben und fragt dich leise: "Was ist eigentlich der Unterschied zwischen Weißwein und Rotwein – nur die Traubenfarbe, oder steckt da mehr dahinter?"',
      options: [
        { text: 'Die Schale gibt die Farbe – bei Rotwein gärt sie mit', correct: true },
        { text: 'Es sind komplett andere Pflanzenarten', correct: false },
        { text: 'Der Unterschied ist nur die zugesetzte Farbe', correct: false },
      ],
      explanation: 'Der Saft fast aller Trauben ist hell! Die Farbe kommt von der Schale: Bei Rotwein bleibt die Schale beim Gären dabei (Maischegärung), bei Weißwein wird sie vorher entfernt. Daher auch die Tannine im Rotwein!'
    },
    {
      id: 'ww_0_8', guestId: 'lisa', mood: '📋',
      question: 'Lisa sortiert die Weinkarte und fragt: "Hier steht bei manchen Weinen \'halbtrocken\'. Was genau heißt das eigentlich? Ist das halb so trocken wie trocken?"',
      options: [
        { text: 'Ein Wein mit etwas Restzucker – zwischen trocken und lieblich', correct: true },
        { text: 'Ein Wein, der nur halb so lange gelagert wurde', correct: false },
        { text: 'Ein Wein aus halb reifen Trauben', correct: false },
      ],
      explanation: '"Halbtrocken" bedeutet, dass der Wein leicht spürbare Süße hat (bis 18 g/l Restzucker). Er schmeckt milder als trockener Wein, aber deutlich weniger süß als lieblicher. Dornfelder und Müller-Thurgau sind bei uns halbtrocken!'
    },
    {
      id: 'ww_0_9', guestId: 'bergmann', mood: '🤨',
      question: 'Herr Bergmann dreht die Flasche Müller-Thurgau in der Hand und liest das Etikett: "Sag mal, ist Müller-Thurgau ein Familienname oder was? Haben die Müller und der Thurgau den zusammen erfunden?"',
      options: [
        { text: 'Benannt nach Professor Hermann Müller aus dem Schweizer Kanton Thurgau', correct: true },
        { text: 'Eine Kreuzung aus den Rebsorten Müller und Thurgau', correct: false },
        { text: 'Benannt nach dem Weingut Müller im Ort Thurgau', correct: false },
      ],
      explanation: 'Die Rebsorte ist nach dem Schweizer Botaniker Professor Hermann Müller benannt, der aus dem Kanton Thurgau stammte. Er züchtete sie 1882 in Geisenheim als Kreuzung aus Riesling und Madeleine Royale. In Österreich heißt sie übrigens "Rivaner"!'
    },
    {
      id: 'ww_0_10', guestId: 'onkel_werner', mood: '🍇',
      question: 'Onkel Werner kneift die Augen zusammen und testet dich: "So, Lehrling – eine Grundfrage: Was braucht eine Traube, um reif zu werden und guten Wein zu machen? Was ist der wichtigste Faktor?"',
      options: [
        { text: 'Sonne – sie bringt den Zucker in die Trauben', correct: true },
        { text: 'Viel Regen – Trauben brauchen ständig Wasser', correct: false },
        { text: 'Kälte – je kälter, desto besser der Wein', correct: false },
      ],
      explanation: 'Sonne ist der Schlüssel! Durch die Photosynthese entsteht in den Trauben Zucker, der später zu Alkohol vergoren wird. Mehr Sonne = mehr Zucker = potenziell mehr Alkohol. Deshalb sind Weinberge oft an Südhängen angelegt, wo sie maximale Sonneneinstrahlung bekommen.'
    },
  ],
};
