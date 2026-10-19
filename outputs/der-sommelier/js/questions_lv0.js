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
        { wineId: 'retsina', correct: true, explanation: 'Retsina zum Gyros ist ein Klassiker! Der harzige Charakter passt super zu gegrilltem Fleisch und Tsatsiki. Aber Stavros mag es lieber süffig – da ist Imiglykos seine erste Wahl.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling wäre zu säurebetont für das herzhafte Gyros mit Tsatsiki.' },
        { wineId: 'dornfelder', acceptable: true, explanation: 'Dornfelder passt mit seiner Kirschfrucht durchaus zum deftigen Gyros – kein schlechter Griff! Aber Stavros ist Grieche durch und durch, und der süffige Imiglykos aus der Heimat ist für ihn unschlagbar.' },
        { wineId: 'lambrusco', acceptable: true, explanation: 'Lambrusco ist süffig und fruchtig, das geht zum Gyros. Aber er ist eher der Pizza-Kumpel aus Italien – zum griechischen Teller gehört für Stavros der griechische Imiglykos.' },
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
        { wineId: 'imiglykos', acceptable: true, explanation: 'Imiglykos ist süffig und bezahlbar – die Studenten würden nicht meckern. Aber er ist eher der Gyros-Begleiter; zur Pizza ist der spritzige Lambrusco DER Klassiker.' },
      ]
    },
    {
      id: 'fp_0_3', guestId: 'das_paerchen', mood: '💑',
      scenario: 'Ein junges Paar kommt schüchtern rein, offensichtlich erstes Date. Sie kichert, er ist nervös. Bestellen Putenspieße mit Salat und fragen leise: "Haben Sie... etwas Leichtes zum Trinken?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist zwar leicht, aber lieblich und rot – zu Putenspießen mit Salat passt ein milder Weißer besser. Müller-Thurgau ist die bessere Wahl!' },
        { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Genau! Müller-Thurgau ist mild, blumig und leicht – perfekt zu Geflügel mit Salat. Und zum ersten Date passt die sanfte Art.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – nicht das, was man unter "leicht" versteht.' },
        { wineId: 'riesling', acceptable: true, explanation: 'Riesling geht zum Geflügel, klar – aber die kräftige Säure ist nicht gerade das "Leichte", das sich das nervöse Pärchen wünscht. Müller-Thurgau ist sanfter und passender fürs erste Date.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina hat mit seinem Harzaroma und mittleren Körper viel zu viel Eigencharakter – fürs nervöse erste Date mit Putenspießen braucht es etwas Sanftes wie Müller-Thurgau.' },
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
        { wineId: 'lambrusco', acceptable: true, explanation: 'Rot ist er, und die spritzige Frucht verträgt sich sogar mit der Currysauce. Aber der leichte, liebliche Lambrusco ist eher Pizza-Wein – zur deftigen Currywurst hat Dornfelder mehr Substanz.' },
        { wineId: 'imiglykos', acceptable: true, explanation: 'Erfüllt das "Hauptsache rot" – aber der liebliche Grieche ist zur Currywurst etwas zu süß und zu leicht. Dornfelder ist der robustere Allrounder für Deftiges.' },
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
        { wineId: 'dornfelder', acceptable: true, explanation: 'Dornfelder ist rot und halbtrocken, also immerhin nicht knochentrocken. Für Frau Müllers Wunsch nach "etwas Süßem" ist er aber nicht süß genug – Imiglykos ist richtig schön lieblich.' },
      ]
    },
    {
      id: 'fp_0_6', guestId: 'die_sportlerin', mood: '💪',
      scenario: 'Eine durchtrainierte junge Frau im Sport-Outfit betritt den Laden. "Hi! Einen gemischten Salat mit gegrillter Hähnchenbrust bitte – und dazu etwas Erfrischendes. Aber bitte nichts Schweres, ich hab gerade 10km hinter mir."',
      question: 'Was schlägst du vor?',
      options: [
        { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Perfekt! Müller-Thurgau ist mild, blumig und erfrischend – leicht genug nach dem Sport.' },
        { wineId: 'riesling', correct: true, explanation: 'Riesling trocken ist eine richtig gute Wahl – frisch, leicht, mit knackiger Säure zum Salat. Der milde Müller-Thurgau ist nach dem Lauf nur noch etwas sanfter und unkomplizierter.' },
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
        { wineId: 'mueller_thurgau', acceptable: true, explanation: 'Müller-Thurgau ist weiß und bodenständig – passt vom Stil. Aber zum fetten Leberkäse fehlt ihm die Säure, die das Fett aufbricht. Riesling macht das deutlich besser!' },
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
        { wineId: 'riesling', acceptable: true, explanation: 'Riesling bringt Frische und Säure zu Sardinen und Feta – keine schlechte Idee! Aber Stavros will was Griechisches, und Retsina ist der Meze-Wein schlechthin.' },
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
        { wineId: 'imiglykos', acceptable: true, explanation: 'Rot ist er – aber der liebliche, leichte Imiglykos ist zur kräftigen Fleisch-Tomatensauce etwas zu süß und zu dünn. Dornfelder hat den Körper, den die Bolognese braucht.' },
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
        { wineId: 'retsina', acceptable: true, explanation: 'Retsina mag Fisch und Meeresfrüchte, das stimmt – aber sein Harzaroma ist für Omas Backfisch recht eigenwillig. Riesling ist der elegantere Fischpartner, der durch die Panade schneidet.' },
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
        { wineId: 'dornfelder', acceptable: true, explanation: 'Dornfelder ist rot und fruchtig, aber nur halbtrocken – "süß" ist was anderes. Für Einsteiger, die es süß mögen, ist Imiglykos die sichere Wahl.' },
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
        { wineId: 'retsina', acceptable: true, explanation: 'Trocken und weiß – formal erfüllt! Aber der harzige Retsina ist alles andere als unkompliziert. Für Bergmanns Feierabend ist der klare Riesling die sichere Bank.' },
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
        { wineId: 'dornfelder', acceptable: true, explanation: 'Dornfelder ist halbtrocken, also immerhin nicht zu trocken – aber mit mittlerem Körper und dunkler Kirschfrucht ist er weit weg vom leichten Rosé-Gefühl. Lambrusco ist spritziger und lieblicher.' },
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
        { wineId: 'mueller_thurgau', acceptable: true, explanation: 'Müller-Thurgau ist weiß und leicht – aber halbtrocken. Für jemanden, der ausdrücklich "trocken" bestellt und keine süßen Weine mag, nicht ganz das Richtige.' },
        { wineId: 'retsina', acceptable: true, explanation: 'Weiß und trocken – passt formal! Aber der harzige Retsina ist sehr speziell und hat mehr Körper. Der leichte, frische Riesling ist genau richtig vor dem Halbmarathon.' },
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
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist süffig, keine Frage – aber lieblich, und Werner hat "nichts Süßes" bestellt. Dornfelder ist fruchtig und weich, ohne lieblich zu sein.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist lieblich – genau das wollte Werner nicht. Die Kegelbrüder bestellen sonst ganz schnell wieder Bier!' },
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
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist ein Grieche durch und durch – der harzige Weiße hat mit dem deutschen Klassiker nichts zu tun. Für die Prüfung heißt die Antwort Riesling!' },
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
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist trocken und mit seinem Harzaroma eine echte Geschmacksprobe – für eine Schwiegermutter, die es mild mag, ein Risiko. Müller-Thurgau ist die friedliche Lösung.' },
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
      correction: 'Stimmt! Griechenland gehört zu den ältesten Weinbaukulturen der Welt. Archäologische Funde belegen Weinbau seit mindestens 4.500 v. Chr. Die alten Griechen hatten sogar einen eigenen Gott des Weins – Dionysos! Erfunden hat ihn aber wohl der Kaukasus – in Georgien wird seit rund 8.000 Jahren Wein gemacht!'
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
      explanation: '"Trocken" bedeutet wenig Restzucker (vereinfacht: bis 9 g/l). Der Wein schmeckt nicht süß. Das Gegenteil wäre "lieblich" oder "süß".'
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
      explanation: '"Halbtrocken" bedeutet, dass der Wein leicht spürbare Süße hat (vereinfacht: bis 18 g/l Restzucker). Er schmeckt milder als trockener Wein, aber deutlich weniger süß als lieblicher. Dornfelder und Müller-Thurgau sind bei uns halbtrocken!'
    },
    {
      id: 'ww_0_9', guestId: 'bergmann', mood: '🤨',
      question: 'Herr Bergmann dreht die Flasche Müller-Thurgau in der Hand und liest das Etikett: "Sag mal, ist Müller-Thurgau ein Familienname oder was? Haben die Müller und der Thurgau den zusammen erfunden?"',
      options: [
        { text: 'Benannt nach Professor Hermann Müller aus dem Schweizer Kanton Thurgau', correct: true },
        { text: 'Eine Kreuzung aus den Rebsorten Müller und Thurgau', correct: false },
        { text: 'Benannt nach dem Weingut Müller im Ort Thurgau', correct: false },
      ],
      explanation: 'Die Rebsorte ist nach dem Schweizer Botaniker Professor Hermann Müller benannt, der aus dem Kanton Thurgau stammte. Er züchtete sie 1882 in Geisenheim als Kreuzung aus Riesling und Madeleine Royale. In Luxemburg und oft auch bei uns heißt sie übrigens "Rivaner"!'
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

  beratung: [
    {
      id: 'ber_0_1',
      guestId: 'frau_mueller',
      mood: '🃏',
      intro: 'Frau Müller stellt ihre Handtasche auf die Theke und rückt die Lesebrille zurecht. "Junger Mann, morgen ist Rommé-Abend bei mir. Die Hilde, die Inge und die Erika kommen. Letztes Mal hat die Inge den Wein mitgebracht – seitdem redet keiner mehr mit ihr. Diesmal mach ich das. Und es muss sitzen!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was gibt es denn bei Ihnen zum Knabbern, Frau Müller?"', good: true, bonusTip: 2, guestResponse: '"Ich hol mir bei euch zwei Bleche Mini-Pizzen – die mit Salami mag die Erika so. Und Salzstangen. Beim Kartenspielen braucht man was für die Hand, sonst schummelt die Hilde."' },
            { text: '"Wie viel möchten Sie denn ausgeben?"', good: false, bonusTip: 0, guestResponse: '"Über Geld spricht man nicht, junger Mann. Das hat schon mein Gerhard gesagt – Gott hab ihn selig. Fragen Sie mich lieber, was uns schmeckt!"' },
            { text: '"Mögen Ihre Freundinnen es eher süß oder eher trocken?"', good: true, bonusTip: 1, guestResponse: '"Süß natürlich! Trocken ist was für Leute, die zum Lachen in den Keller gehen. Und Rotwein – vom Weißen krieg ich Kopfweh, das wissen Sie doch."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein ganz ruhig sein, oder darf er ein bisschen prickeln?"', good: true, bonusTip: 2, guestResponse: '"Prickeln! Wie früher beim Tanztee im Kurhaus..." Sie seufzt verträumt. "Aber Sekt ist uns zu sauer. Ein bisschen Perlen, ein bisschen süß, das wär\'s."' },
            { text: '"Nehmen Sie doch einfach Eierlikör, das trinken die Damen doch so gern."', good: false, bonusTip: 0, guestResponse: '"Eierlikör?! Wir sind doch nicht auf einer Kaffeefahrt! Ich will einen ordentlichen Wein, junger Mann."' },
            { text: '"Soll es eher ein leichter Wein sein oder ein schwerer?"', good: true, bonusTip: 1, guestResponse: '"Leicht, bitte. Wir spielen bis Mitternacht – und die Erika muss noch mit dem Rollator heim."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'lambrusco', correct: true, favorite: true, explanation: 'Volltreffer! Lambrusco ist rot, lieblich, leicht – und perlt ganz fein. Das Tanztee-Prickeln ohne die Säure vom Sekt. Und zu Mini-Pizzen ist er sowieso ein Klassiker. Frau Müller strahlt: "Da wird die Inge grün vor Neid!"' },
            { wineId: 'imiglykos', correct: true, explanation: 'Gute Wahl! Imiglykos ist rot, lieblich und leicht – das passt zu den Damen. Nur prickelt er nicht. Für das Tanztee-Gefühl, das sich Frau Müller wünscht, hat Lambrusco die Nase vorn.' },
            { wineId: 'dornfelder', acceptable: true, explanation: 'Dornfelder ist rot und fruchtig und passt gut zu Pizza. Aber er ist nur halbtrocken statt lieblich, etwas kräftiger – und ohne Perlen. Den Damen wäre er wohl nicht süß genug.' },
            { wineId: 'riesling', correct: false, explanation: 'Weiß, trocken und mit kräftiger Säure – das genaue Gegenteil von dem, was Frau Müller will. Damit landest du auf der Liste neben der Inge!' },
          ],
        },
      ],
      summary: 'Gute Beratung heißt: Stil-Wünsche herausfinden. Rot oder weiß? Süß oder trocken? Still oder perlend? Wer lieblich, leicht und ein bisschen Prickeln möchte, ist mit einem Lambrusco bestens bedient – und der passt auch noch zur Pizza.',
    },
    {
      id: 'ber_0_2',
      guestId: 'stavros',
      mood: '🐙',
      intro: 'Stavros kommt rein, diesmal ohne Gyros-Hunger, dafür mit Schweißperlen auf der Stirn. "Malaka, Notfall! Meine Mama kommt am Sonntag aus Thessaloniki. Ich koche für sie – zum ersten Mal! Wenn der Wein nicht passt, erzählt sie das dem ganzen Dorf. Und meinen Tanten. Und dem Popen!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was kochst du denn für deine Mama?"', good: true, bonusTip: 2, guestResponse: '"Gegrillte Kalamari, Sardinen mit Zitrone, dazu Feta, Oliven und Bauernsalat. Wie bei uns am Hafen! Mama sagt immer: Am Sonntag gibt es Meer, nicht Fleisch."' },
            { text: '"Schenk ihr doch lieber Blumen statt Wein."', good: false, bonusTip: 0, guestResponse: '"Blumen? Die hat einen Garten so groß wie ein Fußballfeld – mit Zitronenbäumen! Malaka, hilf mir mit dem Wein, nicht mit dem Gemüse!"' },
            { text: '"Trinkt deine Mama lieber Rot- oder Weißwein?"', good: true, bonusTip: 1, guestResponse: '"Weiß, immer! Rotwein gibt es bei uns nur an Ostern zum Lamm. Ansonsten sagt Mama: Rot ist für Männer, die zu viel reden."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein nach Heimat schmecken – nach Griechenland?"', good: true, bonusTip: 2, guestResponse: '"NE! Genau! Wie im Dorf bei der Yiayia – nach Kiefernwald und Sommer. Mama riecht ein griechisches Glas aus drei Metern Entfernung, ich schwör!"' },
            { text: '"Was darf der Wein denn kosten?"', good: false, bonusTip: 0, guestResponse: '"Für meine Mama? Ich hab extra das Bad neu gefliest, weil sie kommt! Frag mich was Gescheites, nicht nach Geld!"' },
            { text: '"Mag sie es trocken oder lieber süß?"', good: true, bonusTip: 1, guestResponse: '"Trocken. Süß trinkt sie nur ihren Kaffee – mit drei Löffeln Zucker. Beim Wein ist sie streng."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'retsina', correct: true, favorite: true, explanation: 'Perfekt! Retsina ist ein trockener griechischer Weißwein mit Kiefernharz – genau das Kiefernwald-Aroma, das Mama an die Heimat erinnert. Zu gegrillten Kalamari, Feta und Oliven ein echter Klassiker. Mama wird weinen. Vor Freude.' },
            { wineId: 'riesling', correct: true, explanation: 'Trockener Riesling zum gegrillten Fisch ist eine richtig gute Kombination – frisch, mit Zitrus und Säure. Nur schmeckt er nach Rhein statt nach Heimat. Für Mama aus Thessaloniki ist Retsina die herzlichere Wahl.' },
            { wineId: 'mueller_thurgau', acceptable: true, explanation: 'Müller-Thurgau passt zu leichtem Fisch und Salat, keine Frage. Aber er ist halbtrocken und mild – Mama wollte trocken. Und griechisch ist er auch nicht.' },
            { wineId: 'imiglykos', correct: false, explanation: 'Griechisch – ja. Aber lieblich und rot! Mama trinkt trocken und weiß, und zu Sardinen mit Zitrone passt ein süßer Roter nicht. Imiglykos ist eher was für den Gyrosteller.' },
          ],
        },
      ],
      summary: 'Erst das Essen, dann die Vorlieben, dann die Herkunft: Zu Fisch und Meeresfrüchten passt meist ein trockener Weißwein. Und wer Heimat im Glas sucht, bekommt Retsina – seit über 2000 Jahren mit Kiefernharz, weil die alten Griechen ihre Amphoren damit abgedichtet haben.',
    },
    {
      id: 'ber_0_3',
      guestId: 'das_paerchen',
      mood: '🧺',
      intro: 'Das Pärchen vom ersten Date ist wieder da – inzwischen Händchen haltend. Während sie die Karte studiert, lehnt er sich zu dir und flüstert: "Wir machen am Samstag unser erstes Picknick. Ich soll den Wein besorgen. Bitte... lass mich nicht hängen!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was kommt denn in den Picknickkorb?"', good: true, bonusTip: 2, guestResponse: '"Putenwraps, Tomate-Mozzarella-Spieße und Erdbeeren. Lena hat dafür drei Stunden Pinterest geguckt. Alles ganz leicht und sommerlich."' },
            { text: '"Wie lange seid ihr eigentlich schon zusammen?"', good: false, bonusTip: 0, guestResponse: '"Ähm... drei Monate. Morgen." Er wird knallrot. "Aber das hat doch nichts mit dem Wein zu tun, oder?!"' },
            { text: '"Wo soll das Picknick stattfinden?"', good: true, bonusTip: 1, guestResponse: '"Am Baggersee. Auf Lenas neuer Picknickdecke. Die ist... schneeweiß." Er schluckt hörbar. "Die hat sie extra gekauft."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Mag Lena es eher süß, eher trocken – oder irgendwo dazwischen?"', good: true, bonusTip: 2, guestResponse: '"Dazwischen! Bei Zitronenwasser verzieht sie schon das Gesicht – nicht zu sauer also. Aber Limo will sie auch nicht. So mild und blumig, hat sie mal gesagt."' },
            { text: '"Nehmt doch einfach Dosenbier mit, das ist praktischer."', good: false, bonusTip: 0, guestResponse: '"Dosenbier?! Zum ersten Picknick? Da kann ich ihr gleich eine Bratwurst statt einer Rose schenken!"' },
            { text: '"Soll der Wein eher leicht sein oder kräftig?"', good: true, bonusTip: 1, guestResponse: '"Leicht! Es sollen 30 Grad werden. Ich will nicht nach zwei Gläsern unterm Baum einschlafen – das wäre kein guter Eindruck."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Perfekt! Müller-Thurgau ist leicht, halbtrocken und blumig – nicht zu sauer, nicht zu süß, genau "mild und blumig", wie Lena es mag. Er passt zu Putenwraps und Salat. Und als Weißwein bleibt die weiße Decke weiß. Gut gekühlt in der Kühltasche – fertig ist das Traum-Picknick!' },
            { wineId: 'riesling', correct: true, explanation: 'Weiß, leicht und ein Klassiker zu Geflügel – passt! Aber der trockene Riesling hat eine kräftige Säure. Für Lena, die schon bei Zitronenwasser das Gesicht verzieht, ist der mildere Müller-Thurgau die sicherere Wahl.' },
            { wineId: 'retsina', acceptable: true, explanation: 'Retsina ist weiß und trocken und passt zu Tomate-Mozzarella. Aber der Harzgeschmack ist sehr eigen – manche lieben ihn, manche gar nicht. Beim ersten Picknick ein Risiko, und mild ist er auch nicht.' },
            { wineId: 'dornfelder', correct: false, explanation: 'Rotwein auf der schneeweißen Picknickdecke? Mutig! Dazu ist Dornfelder kräftiger als gewünscht. Bei 30 Grad zu Putenwraps lieber einen leichten Weißen.' },
          ],
        },
      ],
      summary: 'Beim Draußen-Trinken zählen Wetter und Anlass mit: Bei Hitze und leichtem Essen ist ein leichter Weißwein ideal – gut gekühlt bei 8–12 °C. Und wer "nicht zu sauer, nicht zu süß" sucht, landet bei halbtrocken.',
    },
    {
      id: 'ber_0_4',
      guestId: 'studenten',
      mood: '🌶️',
      intro: 'Die Studenten-Truppe drängelt sich an die Theke, einer hält einen Topfdeckel wie ein Schild. "Digga, wir brauchen Hilfe! Heute ist WG-Kochabend, zehn Leute, und wir wollen mal Wein statt Mate. Aber wir haben null Ahnung – und ungefähr 12 Euro."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was kocht ihr denn?"', good: true, bonusTip: 2, guestResponse: '"Chili con Carne, Riesentopf! Hack, Kidneybohnen, Tomaten – und Jonas hat die ganzen Jalapeños reingekippt. Ziemlich scharf jetzt. Und ziemlich deftig."' },
            { text: '"Bei dem Budget nehmt ihr am besten Wein aus dem Tetrapak."', good: false, bonusTip: 0, guestResponse: '"Ey! Wir sind pleite, aber nicht ohne Würde! Wir wollen einen echten Wein, mit Flasche und so."' },
            { text: '"Trinkt ihr lieber Rot oder Weiß?"', good: true, bonusTip: 1, guestResponse: '"Rot! Mia sagt, zu Chili gehört was Rotes. Ist wohl so eine Farbsache. Und alle anderen haben genickt."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Mögt ihr es eher süß oder eher trocken?"', good: true, bonusTip: 2, guestResponse: '"Puh, da streiten wir. Jonas findet süßen Wein \'Saft für Kinder\'. Mia sagt, trockener Wein schmeckt wie \'an einer Batterie lecken\'. Gibt\'s was dazwischen?"' },
            { text: '"Habt ihr in der WG überhaupt Weingläser?"', good: false, bonusTip: 0, guestResponse: '"Äh... Senfgläser zählen, oder?" Sie schauen sich an. "Okay, das klären wir später. Was ist jetzt mit dem Wein?"' },
            { text: '"Soll der Wein eher leicht sein oder was aushalten können?"', good: true, bonusTip: 1, guestResponse: '"Der muss was aushalten! Das Chili hat ordentlich Bumms. Da will keiner was, das schmeckt wie Saftschorle."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'dornfelder', correct: true, favorite: true, explanation: 'Treffer! Dornfelder ist halbtrocken – genau das "Dazwischen" für Jonas und Mia. Fruchtig nach Kirsche und Brombeere, mittelkräftig, also stark genug fürs deftige Chili. Und ein Hauch Restsüße mildert die Jalapeño-Schärfe. Günstig ist er auch – die WG ist gerettet.' },
            { wineId: 'lambrusco', correct: true, explanation: 'Nicht schlecht! Lambrusco ist fruchtig, die Süße zähmt die Schärfe, und die feinen Perlen erfrischen. Aber er ist lieblich und leicht – Jonas meckert über "Kindersaft", und gegen das deftige Chili ist er etwas zart.' },
            { wineId: 'imiglykos', acceptable: true, explanation: 'Imiglykos ist rot und fruchtig, die Süße hilft gegen die Schärfe. Aber er ist lieblich und leicht – für Jonas zu süß, und das kräftige Chili deckt ihn zu.' },
            { wineId: 'riesling', correct: false, explanation: 'Weiß, trocken und mit viel Säure – Mia ruft "Batterie!", und die Gruppe wollte Rot. Dazu kommt: Säure macht scharfes Essen gefühlt noch schärfer. Autsch.' },
          ],
        },
      ],
      summary: 'Wenn sich zwei Geschmäcker streiten, ist "halbtrocken" oft der perfekte Kompromiss. Und zu scharfem Essen gilt: Ein bisschen Restsüße mildert die Schärfe, viel Säure macht sie stärker.',
    },
  ],
};
