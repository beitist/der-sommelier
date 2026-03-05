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
        { wineId: 'champagner', correct: true, favorite: true, explanation: 'Champagner zum Hummer – die Königsklasse des Food Pairing! Die feine Perlage und Brioche-Noten harmonieren perfekt mit der Beurre Blanc.' },
        { wineId: 'cremant', correct: true, explanation: 'Crémant ist solide – gleiche Methode, französisch, passt zum Hummer. Aber der Michelin-Tester erwartet Champagner, nicht die Budget-Alternative.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zum Hummer im Sterne-Restaurant? Das wäre das Ende Ihrer Karriere als Sommelier.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos zum Hummer? Der Michelin-Tester würde den Stern sofort aberkennen.' },
      ]
    },
    {
      id: 'fp_4_2', guestId: 'opernsaengerin', mood: '🎭',
      scenario: 'Die Opernsängerin schwebt nach der Premiere herein, Abendkleid und Pelzstola. "Darling, ich brauche Foie Gras – und dazu etwas Süßes, Opulentes. Der Abend war ein Triumph, da gönne ich mir das Beste!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Eiswein zur Foie Gras – eine legendäre Kombination! Die konzentrierte Süße und brillante Säure umschmeicheln die cremige Gänseleber.' },
        { wineId: 'riesling_spaetlese', correct: true, explanation: 'Riesling Spätlese zur Foie Gras funktioniert – die Restsüße schmeichelt, aber für "das Beste" fehlt die Opulenz eines Eisweins.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist trocken und tanninreich – er würde die Foie Gras überfordern statt umschmeicheln.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zur Foie Gras im Sterne-Restaurant? Die Opernsängerin würde eine Arie der Entrüstung singen.' },
      ]
    },
    {
      id: 'fp_4_3', guestId: 'prof_weinstein', mood: '🧙',
      scenario: 'Prof. Weinstein, Legende der Weinwelt, bestellt Ossobuco alla Milanese. Er schließt die Augen und riecht an einem leeren Glas: "Etwas Italienisches. Etwas Großes. Sie wissen schon."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'amarone', correct: true, favorite: true, explanation: 'Amarone della Valpolicella – opulent, komplex, ein Monument italienischer Weinkunst. Die Rosinen-Konzentration passt perfekt zum geschmorten Ossobuco.' },
        { wineId: 'barolo', correct: true, explanation: 'Barolo ist ebenfalls ein großer Italiener mit der nötigen Struktur für Ossobuco. Aber Amarone mit seinen konzentrierten Rosinenaromen spiegelt die Schmorküche noch intensiver wider – und genau diese Opulenz erwartet Prof. Weinstein.' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre ist ein französischer Weißer – weder italienisch noch kräftig genug für Ossobuco.' },
        { wineId: 'sekt', correct: false, explanation: 'Deutscher Sekt zum Ossobuco? Prof. Weinstein würde Sie nie mehr ernst nehmen.' },
        { wineId: 'chateauneuf', acceptable: true, explanation: 'Châteauneuf hat die Kraft und Tiefe für Ossobuco – keine Frage. Aber der Professor wollte "etwas Italienisches", und ein französischer Südrhône ist nicht die Antwort, die er erwartet. Auf diesem Niveau ignoriert man den Herkunftswunsch nicht.' },
      ]
    },
    {
      id: 'fp_4_4', guestId: 'promi_paar', mood: '🌟',
      scenario: 'Das Promi-Paar will inkognito bleiben, Sonnenbrillen auch beim Dinner. Sie flüstern: "Wir starten mit dem 7-Gänge-Menü. Zum Auftakt brauchen wir etwas Prickelndes, das den Abend einläutet."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, favorite: true, explanation: 'Champagner als Aperitif zum 7-Gänge-Menü – der perfekte Auftakt! Elegant, festlich, setzt den Standard für den Rest des Abends.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder als Aperitif im Étoile? Das wäre wie Turnschuhe zur Gala.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum 7-Gänge-Menü im Sterne-Restaurant? Die Promis wären schockiert.' },
      ]
    },
    {
      id: 'fp_4_5', guestId: 'kunstsammlerin', mood: '🎨',
      scenario: 'Die Kunstsammlerin bestellt Lammkarree mit Kräuterkruste und Rosmarin-Jus. "Kunst braucht einen passenden Rahmen – und gutes Essen einen großen Wein. Etwas aus dem Rhône-Tal vielleicht?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chateauneuf', correct: true, favorite: true, explanation: 'Châteauneuf-du-Pape – mächtig, kräuterig, mit Tiefe. Die Grenache-Wärme und der Garrigue-Charakter passen perfekt zum Lamm mit Rosmarin!' },
        { wineId: 'tempranillo_gran_reserva', correct: true, explanation: 'Tempranillo Gran Reserva hat die Kraft und Würze fürs Lamm – Leder, Vanille und dunkle Frucht passen gut. Aber die Kunstsammlerin fragte nach dem Rhône-Tal, und da ist Châteauneuf die unangefochtene Antwort.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde zum kräftigen Lamm? Wie ein Aquarell neben einem Ölgemälde – zu zart.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau zum Lammkarree? Das Fleisch würde den Wein komplett überdecken.' },
        { wineId: 'amarone', acceptable: true, explanation: 'Amarone hat die Power fürs Lamm – aber seine Rosinen-Opulenz erschlägt die feine Kräuterkruste. Und "Rhône-Tal" war der ausdrückliche Wunsch. Châteauneuf-du-Pape trifft Gericht UND Herkunft.' },
      ]
    },
    {
      id: 'fp_4_6', guestId: 'botschafterin', mood: '🌐',
      scenario: 'Die Botschafterin gibt ein intimes Dinner für drei befreundete Diplomaten. "Wir starten mit Ziegenkäse-Salat und Walnüssen. Etwas Französisches, Elegantes – ein Weißwein, der zeigt, dass ich Geschmack habe."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sancerre', correct: true, favorite: true, explanation: 'Sancerre – ein eleganter Sauvignon Blanc von der Loire. Ziegenkäse und Sancerre ist eine der berühmtesten Paarungen Frankreichs. Die Botschafterin beweist damit wahren Geschmack!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zum Ziegenkäse-Salat beim Diplomaten-Dinner? Das wäre ein diplomatischer Fauxpas.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist lieblich und griechisch – weder elegant noch französisch, wie die Botschafterin es wünscht.' },
      ]
    },
    {
      id: 'fp_4_7', guestId: 'sternekoch', mood: '👨‍🍳',
      scenario: 'Der Sternekoch hat gerade sein eigenes Signature Dish bestellt – ein 48-Stunden-Schmorgericht vom Ibérico-Schwein mit Pimentón-Jus und karamellisierten Feigen. Er lehnt sich zurück: "Ich will sehen, ob Ihr Sommelier-Team mithalten kann. Etwas Spanisches. Etwas Großes. Zeigen Sie mir, was Sie draufhaben."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'tempranillo_gran_reserva', correct: true, favorite: true, explanation: 'Tempranillo Gran Reserva – die perfekte Antwort! Die Leder- und Vanillenoten harmonieren mit dem Ibérico, die getrockneten Früchte spiegeln die karamellisierten Feigen, und die spanische Herkunft rundet die Kombination ab. Der Sternekoch nickt anerkennend: "Endlich jemand, der mein Gericht versteht."' },
        { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza ist spanisch und passt zum Ibérico – solide Wahl! Aber für "etwas Großes" fehlt der Crianza die Reifekomplexität der Gran Reserva. Der Sternekoch hebt eine Augenbraue: "Nett, aber da geht mehr."' },
        { wineId: 'champagner', correct: false, explanation: 'Champagner zu einem 48-Stunden-Schmorbraten? Die feine Perlage geht in der Wucht des Gerichts komplett unter. Der Sternekoch verdreht die Augen.' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre – ein leichter Loire-Weißer zu einem opulenten Schmorgericht mit Pimentón? Das wäre, als würde man eine Geige gegen ein Orchester antreten lassen.' },
      ]
    },
    {
      id: 'fp_4_8', guestId: 'bergmann', mood: '🎩',
      scenario: 'Herr Bergmann, heute im maßgeschneiderten Smoking, studiert die Karte mit der Routine eines Stammgasts. "Ich nehme den Blauschimmelkäse – Roquefort, mit Walnüssen und Feigensenf. Und dazu..." Er schaut dich erwartungsvoll an. "Überraschen Sie mich. Aber elegant, bitte."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Eiswein zum Roquefort – ein Meisterpairing! Die konzentrierte Süße und die brillante Säure balancieren die salzige Intensität des Blauschimmelkäses perfekt. Herr Bergmann nimmt einen Schluck, dann einen Bissen, und schließt die Augen: "DAS ist der Grund, warum ich immer wiederkomme."' },
        { wineId: 'riesling_spaetlese', correct: true, explanation: 'Riesling Spätlese ist eine gute Wahl – die Restsüße kontrastiert die Salzigkeit des Roquefort schön. Aber Eiswein ist hier die Königsklasse: die höhere Konzentration und brillantere Säure machen den Unterschied beim Blauschimmelkäse.' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre zum Roquefort? Ein trockener, mineralischer Weißer wird von der Salzigkeit und Cremigkeit des Blauschimmelkäses überrollt. Herr Bergmann hätte mehr erwartet.' },
        { wineId: 'chateauneuf', correct: false, explanation: 'Châteauneuf-du-Pape – kräftig und würzig, aber die Tannine beißen sich mit der Salzigkeit des Roquefort. Das Ergebnis ist ein metallischer Nachgeschmack, der keinen überzeugt.' },
      ]
    },
    {
      id: 'fp_4_9', guestId: 'der_scheich', mood: '💎',
      scenario: 'Der Scheich empfängt heute Abend Geschäftspartner aus dem Golf. Kaviar wird auf zerstoßenem Eis serviert, dazu Blinis und Crème fraîche. Er winkt dich diskret heran: "Das Beste, was Sie haben. Meine Gäste kennen Luxus – überraschen ist schwer, enttäuschen unverzeihlich."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, favorite: true, explanation: 'Champagner zum Kaviar – das ultimative Luxus-Pairing! Die Mineralität und feine Perlage reinigen den Gaumen zwischen jedem Bissen, die Brioche-Noten ergänzen die Blinis. Der Scheich nickt zufrieden: "Meine Gäste sind beeindruckt. Sie haben Ihren Job verstanden."' },
        { wineId: 'amarone', correct: false, explanation: 'Amarone zum Kaviar? Ein schwerer, rosiniger Rotwein würde die subtilen Nuancen des Störrogens komplett erschlagen. Der Scheich wäre diplomatisch – aber innerlich entsetzt.' },
        { wineId: 'tempranillo_gran_reserva', correct: false, explanation: 'Gran Reserva zum Kaviar servieren? Leder- und Vanillenoten auf zartem Störrogen – das ist wie ein Vorschlaghammer auf ein Uhrwerk.' },
      ]
    },
    {
      id: 'fp_4_10', guestId: 'lisa', mood: '📝',
      scenario: 'Lisa, deine ehemalige Schützlingin und jetzt fast fertige Sommelière, sitzt nach Feierabend an der Bar. Sie übt für ihre Abschlussprüfung: "Stell dir vor: Ein Gast bestellt Wildragout mit Wacholderbeeren und Preiselbeeren. Dunkles Fleisch, kräftige Sauce. Was würdest du empfehlen – und warum?"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'chateauneuf', correct: true, favorite: true, explanation: 'Châteauneuf-du-Pape – die Referenzwahl zum Wild! Die dunklen Beerenaromen spiegeln die Preiselbeeren, der Lavendel und die Garrigue-Noten harmonieren mit dem Wacholder, und die Struktur hält dem kräftigen Ragout stand. Lisa notiert begeistert: "Perfekt – genau die Argumentation, die ich für die Prüfung brauche!"' },
        { wineId: 'tempranillo_gran_reserva', correct: true, explanation: 'Tempranillo Gran Reserva hat die Kraft und dunkle Frucht für Wild – Leder und Gewürze passen zum Wacholder. Aber Châteauneuf bringt mit seinen Garrigue-Kräutern die perfekte aromatische Brücke zum Wacholder, die den Unterschied macht. Lisa notiert: "Guter Gedanke, aber beim Wacholder-Argument hat Châteauneuf die Nase vorn."' },
        { wineId: 'eiswein', correct: false, explanation: 'Eiswein zum Wildragout? Die Süße kollidiert frontal mit den herben Wacholderbeeren und der kräftigen Sauce. Lisa schüttelt den Kopf: "Das hätte ich in der Prüfung nicht geschrieben."' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre – leicht, mineralisch, frisch – gegen ein dunkles Wildragout? Der Wein geht unter wie ein Ruderboot im Sturm. Lisa kichert: "Den Fehler hätte ich im ersten Lehrjahr gemacht."' },
        { wineId: 'amarone', acceptable: true, explanation: 'Amarone hält dem Wild stand – dunkle Frucht und Kraft passen. Aber die Rosinensüße kollidiert mit dem herben Wacholder, und die Garrigue-Kräuter des Châteauneuf bilden die deutlich elegantere aromatische Brücke. Lisa notiert: "Nicht falsch, aber auch nicht die Prüfungsantwort."' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_4_1', guestId: 'der_scheich', mood: '👑',
      scenario: 'Der Scheich lächelt wissend: "Ich bin viel gereist und habe vieles verkostet. Heute möchte ich den absoluten Höhepunkt – den besten Schaumwein der Welt. Geld ist kein Thema."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, favorite: true, explanation: 'Champagner – unangefochtener König der Schaumweine. Jahrhunderte Tradition, strengste Qualitätsregeln, einzigartiges Terroir.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt ist solide, aber "der Beste der Welt"? Dafür muss es Champagner sein.' },
        { wineId: 'cremant', correct: false, explanation: 'Crémant ist ein tolles Preis-Leistungs-Produkt, aber nicht "der Beste der Welt".' },
      ]
    },
    {
      id: 'pref_4_2', guestId: 'botschafterin', mood: '🍰',
      scenario: 'Die Botschafterin strahlt: "Das Dessert war göttlich! Haben Sie noch etwas Süßes – einen Dessertwein, der den Abend krönt? Nicht zu plump, mit Eleganz."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Eiswein – konzentrierte Süße mit brillanter Säure als Gegengewicht. Nie plump, immer elegant. Die Krönung eines jeden Menüs.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist weder süß noch besonders elegant als Dessertbegleitung.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist trocken und tanninreich – kein Dessertwein.' },
      ]
    },
    {
      id: 'pref_4_3', guestId: 'sternekoch', mood: '🏅',
      scenario: 'Der Sternekoch-Kollege lehnt sich vor: "Ich suche einen spanischen Roten – lang gereift, komplex, mit Geschichte. Etwas, das man meditativ trinkt, nicht einfach runterschluckt."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'tempranillo_gran_reserva', correct: true, favorite: true, explanation: 'Tempranillo Gran Reserva – 60+ Monate gereift, nur in großen Jahrgängen. Leder, Tabak, reife Kirschen. Ein meditativer Tropfen mit Geschichte.' },
        { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza ist spanisch und hat schon erste Reifenoten – aber erst 12 Monate im Fass statt 60+ bei der Gran Reserva. Für "lang gereift und komplex" fehlt hier noch die Tiefe, die jahrelange Fassreifung bringt.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist jung und spritzig – das Gegenteil von meditativ und gereift.' },
      ]
    },
    {
      id: 'pref_4_4', guestId: 'opernsaengerin', mood: '🌹',
      scenario: 'Die Opernsängerin lehnt sich verträumt zurück: "Ich singe morgen die Traviata – eine Tragödie in drei Akten. Heute Abend brauche ich einen Wein, der nach Leidenschaft schmeckt. Üppig, dramatisch, mit Tiefe. Ein Wein, der ein ganzes Libretto erzählt."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'amarone', correct: true, favorite: true, explanation: 'Amarone – Drama im Glas! Die Rosinen- und Schokoladennoten erzählen von Konzentration und Opferung (die Trauben verlieren 40% ihres Gewichts!), die Samtrigkeit umschmeichelt, und der endlose Abgang klingt nach wie der letzte Vorhang. Die Opernsängerin seufzt: "Dieser Wein IST die Traviata."' },
        { wineId: 'chateauneuf', correct: true, explanation: 'Châteauneuf-du-Pape hat durchaus Leidenschaft – warme Frucht, Würze und Kraft! Aber Amarone erzählt die dramatischere Geschichte: getrocknete Trauben, Konzentration, Opfer – ein ganzes Libretto in einer Flasche.' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre – frisch, mineralisch, elegant. Aber dramatisch? Leidenschaftlich? Die Opernsängerin braucht ein Fortissimo, keinen Kammerton A.' },
        { wineId: 'champagner', correct: false, explanation: 'Champagner ist festlich und prickelnd – aber Leidenschaft und Tragödie verlangt nach Tiefe, nicht nach Bläschen.' },
      ]
    },
    {
      id: 'pref_4_5', guestId: 'michelin_tester', mood: '📋',
      scenario: 'Der Michelin-Tester klappt sein Notizbuch zu und bestellt zum ersten Mal etwas für sich, nicht für die Bewertung. "Der Service ist vorbei. Jetzt bin ich Privatperson. Ich möchte einen Wein, der mich an die Provence erinnert – Lavendel, Kräuter, warme Abende. Können Sie das?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chateauneuf', correct: true, favorite: true, explanation: 'Châteauneuf-du-Pape – ein Stück Provence im Glas! Die Garrigue-Noten (Lavendel, Thymian, Rosmarin), die warmen Beerenfrucht und die sonnenverwöhnte Fülle malen ein perfektes Bild der südfranzösischen Abende. Der Michelin-Tester lächelt zum ersten Mal: "Genau das."' },
        { wineId: 'tempranillo_gran_reserva', correct: false, explanation: 'Gran Reserva – großer Wein, aber spanisch. Die Leder- und Vanillenoten erinnern an die Rioja, nicht an die Provence. Der Michelin-Tester schüttelt den Kopf: "Falsches Land, falsches Gefühl."' },
        { wineId: 'eiswein', correct: false, explanation: 'Eiswein – deutsch, süß, konzentriert. Wunderschön, aber das Gegenteil von warmen Provenceabenden. Der Michelin-Tester ist enttäuscht.' },
      ]
    },
    {
      id: 'pref_4_6', guestId: 'kunstsammlerin', mood: '🏛️',
      scenario: 'Die Kunstsammlerin kommt gerade von einer Vernissage, sichtlich inspiriert. "Ich habe heute einen Monet gesehen – diese Lichtspiele auf dem Wasser! Jetzt möchte ich einen Wein, der wie ein Impressionismus-Gemälde ist: vielschichtig, mit Nuancen, die man erst beim zweiten und dritten Schluck entdeckt."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'champagner', correct: true, favorite: true, explanation: 'Champagner – vielschichtig wie ein Monet! Erst die Zitrusnoten, dann die Brioche, dann die Mandeln, und im Abgang die Kreide-Mineralität. Jeder Schluck enthüllt eine neue Schicht, genau wie ein impressionistisches Gemälde bei wechselndem Licht. Die Kunstsammlerin ist verzaubert: "Genau – dieser Wein hat Tiefenschärfe!"' },
        { wineId: 'amarone', correct: false, explanation: 'Amarone ist eher Expressionismus als Impressionismus – wuchtig, direkt, überwältigend. Schön, aber ohne die subtilen Nuancen, die sie sucht.' },
        { wineId: 'chateauneuf', correct: false, explanation: 'Châteauneuf-du-Pape ist ein großes Gemälde, aber eher ein Cézanne – erdverbunden und strukturiert. Für impressionistische Finesse fehlt die Leichtigkeit.' },
      ]
    },
    {
      id: 'pref_4_7', guestId: 'promi_paar', mood: '🌙',
      scenario: 'Das Promi-Paar hat die Sonnenbrillen endlich abgelegt. Er flüstert: "Wir feiern heute unseren Jahrestag. Inkognito. Kein Fotograf, kein Social Media. Nur wir zwei. Bringen Sie uns etwas Besonderes – etwas, das man nur zu zweit trinkt. Intim, nicht protzig."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Eiswein – die intimste Wahl! Die kleine 375ml-Flasche ist wie gemacht für zwei Personen, die konzentrierte Süße symbolisiert die Essenz einer Beziehung, und die goldene Farbe taucht den Tisch in warmes Licht. Er flüstert ihr zu: "Dieser Sommelier versteht uns."' },
        { wineId: 'tempranillo_gran_reserva', correct: false, explanation: 'Gran Reserva – ein meditativer Wein, aber die ledrigen, kraftvollen Noten passen eher zu einem Herrenabend als zu einem romantischen Jahrestag.' },
        { wineId: 'chateauneuf', correct: false, explanation: 'Châteauneuf-du-Pape – mächtig und kräuterig. Für einen intimen Jahrestag zu dominant. Sie suchen Zärtlichkeit, nicht Kraft.' },
      ]
    },
    {
      id: 'pref_4_8', guestId: 'bergmann', mood: '🥃',
      scenario: 'Herr Bergmann wartet auf seinen Geschäftspartner, der sich verspätet. Er trommelt nachdenklich auf den Tisch. "Wissen Sie was, schenken Sie mir schon mal etwas ein. Etwas Kräftiges, Komplexes, das ich in Ruhe studieren kann. Ein Wein mit Geschichte – etwas, worüber man reden kann, wenn der Gesprächsstoff knapp wird."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'tempranillo_gran_reserva', correct: true, favorite: true, explanation: 'Tempranillo Gran Reserva – ein Wein mit eingebauter Konversation! Über 60 Monate Reifung, nur in großen Jahrgängen, mit einer Geschichte, die von Rioja bis zum Mittelalter reicht. Die Leder- und Vanillenoten entwickeln sich im Glas weiter. Herr Bergmann schwenkt, riecht, nickt: "Jetzt kann der Partner ruhig noch zehn Minuten brauchen."' },
        { wineId: 'sancerre', correct: false, explanation: 'Sancerre ist unkompliziert und frisch – perfekt als Aperitif, aber nicht der komplexe Gesprächswein, den Herr Bergmann sucht.' },
        { wineId: 'champagner', correct: false, explanation: 'Champagner alleine am Tisch? Das wirkt weniger nach Studium als nach einsamer Feier. Herr Bergmann braucht einen Wein zum Nachdenken, nicht zum Anstoßen.' },
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
    {
      id: 'bw_4_6', guestId: 'michelin_tester', mood: '🤓',
      statement: 'Der Michelin-Tester bemerkt beiläufig: "Eiswein muss bei mindestens minus sieben Grad Celsius gelesen werden. Die Trauben müssen am Stock gefroren sein – das ist gesetzlich vorgeschrieben."',
      isCorrect: true,
      correction: 'Exakt richtig! Laut deutschem Weingesetz müssen die Trauben bei mindestens -7°C gefroren am Stock hängen und in gefrorenem Zustand gelesen und gepresst werden. Das Wasser bleibt als Eis in der Traube zurück, nur der hochkonzentrierte Saft wird gewonnen – daher die extreme Süße und Intensität.'
    },
    {
      id: 'bw_4_7', guestId: 'kunstsammlerin', mood: '🤓',
      statement: 'Die Kunstsammlerin hebt den Châteauneuf-du-Pape und sagt: "Wussten Sie, dass in Châteauneuf-du-Pape 13 verschiedene Rebsorten zugelassen sind? Das ist einzigartig in der Weinwelt."',
      isCorrect: true,
      correction: 'Perfekt! Die Appellation Châteauneuf-du-Pape erlaubt tatsächlich 13 Rebsorten: Grenache, Syrah, Mourvèdre, Cinsault, Muscardin, Counoise, Clairette, Bourboulenc, Roussanne, Picpoul, Picardan, Vaccarèse und Terret Noir. Die meisten Winzer nutzen 3-5 davon, manche verwenden tatsächlich alle 13!'
    },
    {
      id: 'bw_4_8', guestId: 'sternekoch', mood: '🤓',
      statement: 'Der Sternekoch lehnt sich vor und sagt: "Beim Appassimento-Verfahren für Amarone werden die Trauben vor der Kelterung monatelang getrocknet. Sie verlieren dabei fast die Hälfte ihres Gewichts."',
      isCorrect: true,
      correction: 'Kulinarisch präzise! Beim Appassimento werden die Trauben (hauptsächlich Corvina, Rondinella, Molinara) nach der Ernte 3-4 Monate auf Bambusmatten oder Holzgestellen (Arele) getrocknet. Sie verlieren etwa 40% ihres Gewichts – Zucker und Aromen konzentrieren sich enorm. Das Ergebnis ist ein Wein mit 15-17% Alkohol und unglaublicher Dichte.'
    },
    {
      id: 'bw_4_9', guestId: 'der_scheich', mood: '🤓',
      statement: 'Der Scheich lächelt wissend: "Man sagt, die besten Champagner lagern mindestens drei Jahre auf der Hefe, manche sogar sieben oder zehn. Das gibt ihnen diese unvergleichlichen Brioche-Noten."',
      isCorrect: true,
      correction: 'Sehr kenntnisreich! Gesetzlich sind mindestens 15 Monate Hefelager für Non-Vintage und 36 Monate für Vintage-Champagner vorgeschrieben. Aber Prestige-Cuvées wie Dom Pérignon lagern 7-10 Jahre auf der Hefe! Die Autolyse (Auflösung der Hefezellen) gibt dem Champagner seine komplexen Brioche-, Mandel- und Biskuit-Aromen.'
    },
    {
      id: 'bw_4_10', guestId: 'botschafterin', mood: '🤓',
      statement: 'Die Botschafterin erklärt ihren Gästen: "Der Sancerre von der Loire und der neuseeländische Sauvignon Blanc – das ist dieselbe Rebsorte, aber das Terroir macht einen gewaltigen Unterschied. Loire-Sauvignon ist mineralisch, Neuseeland explosiv-fruchtig."',
      isCorrect: true,
      correction: 'Diplomatisch und vinologisch brillant! Sauvignon Blanc aus dem Loire-Tal (Sancerre, Pouilly-Fumé) zeigt Feuerstein, Kräuter und kühle Mineralität. Aus Marlborough in Neuseeland explodiert die gleiche Traube mit Passionsfrucht, Stachelbeere und tropischen Aromen. Ein perfektes Beispiel dafür, wie Terroir und Klima den Charakter einer Rebsorte grundlegend verändern können.'
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
    {
      id: 'ww_4_7', guestId: 'michelin_tester', mood: '🧪',
      question: 'Der Michelin-Tester hebt sein Champagnerglas und fragt: "Die Méthode Champenoise – was unterscheidet sie grundlegend von der Tankgärung, die bei einfachem Sekt verwendet wird?"',
      options: [
        { text: 'Die zweite Gärung findet in der Flasche statt, nicht im Tank', correct: true },
        { text: 'Es werden ausschließlich rote Trauben verwendet', correct: false },
        { text: 'Die Trauben werden vor der Gärung eingefroren', correct: false },
      ],
      explanation: 'Bei der Méthode Champenoise (traditionelle Flaschengärung) findet die zweite Gärung IN der Flasche statt – mit Zucker und Hefe (Liqueur de Tirage). Durch die lange Hefelagerung entstehen die komplexen Brioche- und Hefearomen. Bei der Tankgärung (Charmat-Methode) geschieht dies in großen Drucktanks – schneller und günstiger, aber mit weniger Komplexität.'
    },
    {
      id: 'ww_4_8', guestId: 'botschafterin', mood: '🌍',
      question: 'Die Botschafterin nippt am Amarone und fragt: "Was bedeutet die Klassifizierung DOCG bei italienischen Weinen? Ich höre den Begriff ständig bei Staatsdinners."',
      options: [
        { text: 'Denominazione di Origine Controllata e Garantita – die höchste Qualitätsstufe', correct: true },
        { text: 'Ein Gütesiegel für biologischen Anbau in Italien', correct: false },
        { text: 'Die Altersangabe – mindestens 10 Jahre gereift', correct: false },
      ],
      explanation: 'DOCG steht für "Denominazione di Origine Controllata e Garantita" – die höchste Qualitätsstufe im italienischen Weinrecht. Neben strengen Produktionsvorschriften (wie bei DOC) wird jeder Jahrgang von einer Kommission verkostet und muss eine staatliche Banderole tragen. Amarone della Valpolicella trägt seit 2010 diese Auszeichnung.'
    },
    {
      id: 'ww_4_9', guestId: 'der_scheich', mood: '🏆',
      question: 'Der Scheich schwenkt seinen Châteauneuf-du-Pape nachdenklich: "Ich habe gehört, man soll schwere Rotweine dekantieren. Was genau bewirkt das Dekantieren?"',
      options: [
        { text: 'Es belüftet den Wein und trennt ihn vom Depot (Bodensatz)', correct: true },
        { text: 'Es kühlt den Wein auf die perfekte Trinktemperatur', correct: false },
        { text: 'Es filtert den Alkohol teilweise heraus und macht den Wein milder', correct: false },
      ],
      explanation: 'Dekantieren hat zwei Funktionen: Erstens wird der Wein vom Depot (Ablagerungen aus Tanninen und Farbstoffen) getrennt, die sich bei älteren Rotweinen bilden. Zweitens belüftet es den Wein – der Kontakt mit Sauerstoff lässt verschlossene Aromen sich entfalten. Bei jungen, tanninreichen Weinen kann stundenlanges Dekantieren Wunder wirken, bei sehr alten, fragilen Weinen sollte man vorsichtig sein.'
    },
    {
      id: 'ww_4_10', guestId: 'lisa', mood: '🎓',
      question: 'Lisa blättert in ihrem Prüfungsordner und fragt: "Letzte Frage für heute: Was versteht man unter dem Begriff \'Grand Cru\' im Burgund?"',
      options: [
        { text: 'Die höchste Lageklassifizierung – die besten Einzellagen', correct: true },
        { text: 'Weine, die mindestens 5 Jahre im Eichenfass gereift sind', correct: false },
        { text: 'Eine Auszeichnung für besonders große Ernten', correct: false },
      ],
      explanation: 'Im Burgund bezeichnet "Grand Cru" die höchste Stufe der Lagenhierarchie: Grand Cru → Premier Cru → Village → Régionale. Nur 33 Lagen (ca. 1,5% der Rebfläche) tragen diesen Titel – darunter legendäre Namen wie Romanée-Conti, Chambertin und Montrachet. Der Name der Lage steht ALLEIN auf dem Etikett – die Gemeinde wird nicht mehr genannt, weil die Lage für sich spricht.'
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
        { wineId: 'champagner', correct: true, favorite: true },
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
        { wineId: 'amarone', correct: true, favorite: true },
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
        { wineId: 'eiswein', correct: true, favorite: true },
        { wineId: 'champagner', correct: false },
        { wineId: 'sancerre', correct: false },
        { wineId: 'mueller_thurgau', correct: false },
      ],
      explanation: 'Bernsteingold + Honig + extreme Süße mit Säure-Balance = Eiswein! Die gefrorenen Trauben geben konzentriertesten Most – wenige Tropfen pro Traube. Daher auch die kleine Flasche (375ml) und der hohe Preis.'
    },
    {
      id: 'bt_4_4', guestId: 'prof_weinstein', mood: '👃',
      clues: {
        appearance: 'Tiefes Granatrot mit leichten ziegelroten Reflexen am Rand – Zeichen von Reife',
        nose: 'Getrocknete Kirschen, Leder, Vanille, ein Hauch Tabakblatt und Zedernholz',
        palate: 'Elegant strukturiert, seidige Tannine, Noten von getrockneten Früchten und Gewürzen, extrem langer Abgang mit Lakritz-Finale'
      },
      options: [
        { wineId: 'tempranillo_gran_reserva', correct: true, favorite: true },
        { wineId: 'chateauneuf', correct: false },
        { wineId: 'amarone', correct: false },
        { wineId: 'champagner', correct: false },
      ],
      explanation: 'Leder + Vanille + Tabak + ziegelrote Reflexe + seidige Tannine = Tempranillo Gran Reserva! Die jahrelange Fassreifung (mind. 60 Monate) bringt die Leder-, Vanille- und Tabaknotenkomplexität. Die ziegelroten Reflexe zeigen die reife Entwicklung. Châteauneuf hätte mehr Garrigue und Kräuter gezeigt, Amarone mehr Rosinen und Schokolade.'
    },
    {
      id: 'bt_4_5', guestId: 'sternekoch', mood: '👃',
      clues: {
        appearance: 'Blasses Strohgelb mit grünlichen Reflexen, kristallklar',
        nose: 'Stachelbeere, frisch geschnittenes Gras, Feuerstein und ein mineralischer Hauch wie nasser Kiesel',
        palate: 'Knackig trocken, lebendige Säure, Kräuternoten im Mittelgaumen, der Abgang schmeckt nach Flintstein und grünem Apfel'
      },
      options: [
        { wineId: 'sancerre', correct: true, favorite: true },
        { wineId: 'eiswein', correct: false },
        { wineId: 'champagner', correct: false },
        { wineId: 'chateauneuf', correct: false },
      ],
      explanation: 'Stachelbeere + Feuerstein + grünliche Reflexe + knackige Säure = Sancerre! Der Sauvignon Blanc von der Loire ist berühmt für seine Feuerstein-Mineralität (frz. "silex"), die von den Kalkstein- und Feuersteinböden rund um Sancerre stammt. Kein anderer Wein auf der Karte vereint Stachelbeere, Gras und Feuersteinmineralität so charakteristisch.'
    },
  ],

  beratung: [
    // ber_4_1 — Michelin-Tester: Lammkarree mit Kräuterkruste
    {
      id: 'ber_4_1',
      guestId: 'michelin_tester',
      mood: '🔍',
      intro: 'Der Michelin-Tester sitzt allein am Ecktisch, Notizbuch aufgeklappt, Blick wie ein Skalpell. Er hat das Lammkarree mit Kräuterkruste bestellt – und wartet nun auf deine Weinbegleitung. Kein Lächeln, kein Small Talk. Das hier ist eine Prüfung.',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Wie wird das Lamm zubereitet – rosa gebraten, geschmort, oder mit welcher Kerntemperatur?"', good: true, bonusTip: 2, guestResponse: '"Rosa gebraten, 56 Grad Kerntemperatur. Die Kräuterkruste besteht aus Rosmarin, Thymian und Dijon-Senf. Gut, dass Sie fragen – die meisten greifen blind ins Regal."' },
            { text: '"Möchten Sie lieber Rot oder Weiß?"', good: false, bonusTip: 0, guestResponse: '"Wenn ich das selbst wüsste, bräuchte ich keinen Sommelier. Überraschen Sie mich – aber mit Verstand, nicht mit Raten."' },
            { text: '"Darf ich fragen, welche Saucen dazu gereicht werden?"', good: true, bonusTip: 1, guestResponse: '"Ein klassischer Rosmarin-Jus mit etwas Knoblauch. Keine Sahne, keine Spielereien. Konzentrierter Fond."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Haben Sie eine Präferenz – eher Alte Welt mit Terroir-Charakter oder Neue Welt mit Fruchtpower?"', good: true, bonusTip: 2, guestResponse: '"Alte Welt. Ich will Herkunft schmecken, nicht Kellerkunst. Zeigen Sie mir, dass Europa noch was zu bieten hat." Er notiert etwas in sein Buch.' },
            { text: '"Trinken Sie gerne kräftige Weine?"', good: false, bonusTip: 0, guestResponse: '"Kräftig ist keine Kategorie für einen Sommelier. Struktur, Tannin, Körper – seien Sie präzise." Er runzelt die Stirn.' },
            { text: '"Soll der Wein das Lamm begleiten oder einen Kontrast setzen?"', good: true, bonusTip: 1, guestResponse: '"Begleiten. Harmonie, nicht Provokation. Der Wein soll das Gericht vollenden, nicht überspielen."' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'chateauneuf', correct: true, favorite: true, explanation: 'Châteauneuf-du-Pape – eine brillante Wahl. Die Grenache-dominierte Cuvée bringt Wärme und Kräuternoten mit, die den Rosmarin und Thymian der Kruste spiegeln. Der Garrigue-Charakter des südlichen Rhônetals ist wie gemacht für dieses Lamm. Der Tester nickt fast unmerklich – das höchste Lob.' },
            { wineId: 'tempranillo_gran_reserva', correct: true, explanation: 'Tempranillo Gran Reserva ist eine solide Wahl – kräftig genug für das Lamm, mit reifen Tanninen und Komplexität. Aber die Kräuter-Synergie eines Châteauneuf wäre hier das i-Tüpfelchen gewesen. Der Tester notiert: "Akzeptabel."' },
            { wineId: 'sancerre', correct: false, explanation: 'Sancerre zum Lammkarree? Ein mineralischer Sauvignon Blanc zu rosa gebratenem Lamm mit Kräuterkruste und konzentriertem Jus – das ist ein Sommelier-Foul. Der Tester schüttelt den Kopf und schreibt etwas Längeres in sein Notizbuch. Das ist kein gutes Zeichen.' },
          ]
        }
      ],
      summary: 'Bei kräftigen Fleischgerichten mit Kräutern lohnt es sich, die Zubereitungsdetails zu kennen. Rosa gebratenes Lamm mit mediterranen Kräutern verlangt nach einem Wein, der diese Aromen spiegelt – Châteauneuf-du-Pape mit seinem Garrigue-Charakter ist hier die Referenz.'
    },

    // ber_4_2 — Opernsängerin: Premierenfeier für 20 Personen
    {
      id: 'ber_4_2',
      guestId: 'opernsaengerin',
      mood: '🎭',
      intro: 'Die Opernsängerin rauscht herein wie ein dritter Akt – Abendkleid, wehender Schal, strahlendes Lächeln. "Darling! Die Premiere war ein TRIUMPH! Morgen steht es in allen Zeitungen. Und jetzt feiern wir – zwanzig Leute kommen, und ich brauche IHREN besten Rat!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was für eine Stimmung soll der Abend haben – intim und besinnlich, oder triumphale Feier?"', good: true, bonusTip: 2, guestResponse: '"TRIUMPHALE FEIER, Darling! Standing Ovations! Drei Vorhänge! Die Kritiker haben geweint – VOR FREUDE! Es muss prickeln, es muss glänzen, es muss unvergesslich sein!"' },
            { text: '"Haben Sie ein Budget pro Kopf?"', good: false, bonusTip: 0, guestResponse: '"Budget? BUDGET?! Nach so einer Premiere fragt man nicht nach Budgets, man fragt nach GRANDEZZA!" Sie wedelt theatralisch mit dem Schal.' },
            { text: '"Wird es ein Menü geben oder eher Fingerfood und Canapés?"', good: true, bonusTip: 1, guestResponse: '"Leichte Canapés – Lachs-Blinis, Trüffel-Crostini, ein paar Austern. Nichts Schweres, die Leute sollen tanzen und toasten, nicht in Essenskoma fallen!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein auch fotogen sein? Zwanzig Gäste bedeuten zwanzig Handykameras."', good: true, bonusTip: 2, guestResponse: '"NATÜRLICH muss es fotogen sein! Stellen Sie sich vor: goldene Gläser, aufsteigende Perlen, Instagram-Stories... Der Moment muss IKONISCH sein. Wie mein Schlussakkord!"' },
            { text: '"Möchten Sie lieber etwas Rotes oder Weißes?"', good: false, bonusTip: 0, guestResponse: '"Sie fragen mich nach der Farbe? Ich frage Sie nach dem GEFÜHL! Nach Emotion! Nach Drama!" Sie seufzt theatralisch.' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'champagner', correct: true, favorite: true, explanation: 'Champagner – die einzig würdige Wahl für eine Premierenfeier! Aufsteigende Perlen für die Fotos, festlicher Klang beim Anstoßen, perfekt zu leichten Canapés. Die Opernsängerin strahlt: "BRAVISSIMO! Genau SO feiert man einen Triumph!" Zwanzig Gläser golden perlend – ein ikonischer Moment.' },
            { wineId: 'sancerre', correct: true, explanation: 'Sancerre ist eine elegante, durchdachte Alternative – frisch, mineralisch, perfekt zu Lachs-Blinis und Austern. Aber für eine triumphale Premierenfeier fehlt das Prickeln, das Drama, das Ikonische. Die Opernsängerin nickt: "Hübsch – aber wo bleibt das Fortissimo?"' },
            { wineId: 'amarone', correct: false, explanation: 'Amarone zu einer Premierenfeier mit leichten Canapés? Ein 15-prozentiger Schwergewichts-Rotwein, der nach Rosinen und Schokolade schmeckt, zu Lachs-Blinis und Austern – die Gäste fallen nach dem zweiten Glas um. Die Opernsängerin ist entsetzt: "Das ist kein Fest, das ist eine TRAGÖDIE!"' },
          ]
        }
      ],
      summary: 'Bei Feierlichkeiten zählt nicht nur der Geschmack, sondern auch die Inszenierung. Champagner ist bei triumphalen Anlässen mit leichten Speisen unersetzlich – er vereint Geschmack, Optik und emotionale Wirkung wie kein anderer Wein.'
    },

    // ber_4_3 — Prof. Weinstein: New-World-Fan überzeugen
    {
      id: 'ber_4_3',
      guestId: 'prof_weinstein',
      mood: '🧙',
      intro: 'Prof. Weinstein winkt dich mit einer gewissen Dringlichkeit heran. "Ich habe ein Problem. Morgen kommt ein Kollege zum Dinner – brillanter Kopf, aber weinmäßig ein hoffnungsloser Fall. Trinkt NUR Neue Welt. Napa Valley, Barossa, Marlborough. Ich muss ihn bekehren."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was genau schätzt Ihr Kollege an Neue-Welt-Weinen – die Frucht, die Kraft, den Stil?"', good: true, bonusTip: 2, guestResponse: '"Frucht und Kraft. Er liebt diese wuchtigen, fruchtbetonten Cabernet Sauvignons aus Napa – viel Holz, viel Extrakt, viel Allem. Subtilität ist nicht sein Vokabular." Der Professor seufzt.' },
            { text: '"Soll ich einfach einen richtig teuren europäischen Wein empfehlen?"', good: false, bonusTip: 0, guestResponse: '"Teuer macht einen Neue-Welt-Trinker nicht zum Europa-Liebhaber. Man muss strategisch denken!" Er tippt sich bedeutungsvoll an die Stirn.' },
            { text: '"Was wird morgen Abend serviert?"', good: true, bonusTip: 1, guestResponse: '"Rinderfilet, medium rare, mit Trüffel-Jus und geröstetem Wurzelgemüse. Klassisch, kräftig – das Gericht soll den Wein nicht in den Schatten stellen."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Wollen Sie ihn sanft überführen – also ein Wein, der Neue-Welt-Qualitäten hat, aber europäisch ist? Oder ein bewusster Kulturschock?"', good: true, bonusTip: 2, guestResponse: '"Sanfte Überführung! Verführen, nicht verschrecken. Der Wein muss Kraft und Frucht haben, damit er sich zu Hause fühlt – aber dann diese Tiefe, diese Komplexität, die nur Alter und Terroir bringen. DANN hat er ihn."' },
            { text: '"Mag Ihr Kollege auch Weißwein?"', good: false, bonusTip: 0, guestResponse: '"Weißwein? Für einen Cabernet-Sauvignon-Fetischisten zum Rinderfilet? Sie scherzen." Der Professor schaut über seine Brille hinweg – vernichtend.' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'tempranillo_gran_reserva', correct: true, favorite: true, explanation: 'Tempranillo Gran Reserva – die perfekte Brücke! Kräftig genug, um einen Napa-Cab-Trinker nicht zu langweilen, mit konzentrierter Frucht und reifem Holz. Aber dann die ledrigen Noten, der Tabak, die Komplexität von 60+ Monaten Reife – das ist unverkennbar Alte Welt. Prof. Weinstein strahlt: "EXZELLENT! Er wird nie wieder nur Napa trinken!"' },
            { wineId: 'chateauneuf', correct: true, explanation: 'Châteauneuf-du-Pape hat Kraft und Fülle – ein respektabler Versuch, den Neue-Welt-Fan zu gewinnen. Aber die erdigen, kräuterigen Garrigue-Noten könnten für einen Napa-Trinker zu fremd sein. Prof. Weinstein nickt: "Interessant – aber vielleicht zu schnell zu weit weg von seiner Komfortzone."' },
            { wineId: 'eiswein', correct: false, explanation: 'Eiswein – süß, konzentriert, deutsch – zum Rinderfilet, für einen Mann, der Cabernet Sauvignon aus Napa liebt? Das ist keine Bekehrung, das ist Sabotage. Prof. Weinstein starrt dich an: "Mein Kollege würde nie wieder mit mir essen gehen."' },
          ]
        }
      ],
      summary: 'Um Weinskeptiker zu überzeugen, muss man ihre Vorlieben verstehen und eine geschmackliche Brücke bauen. Ein Tempranillo Gran Reserva verbindet die Kraft der Neuen Welt mit der Komplexität und Reife der Alten – perfekt für die sanfte Konvertierung.'
    },

    // ber_4_4 — Botschafterin: Diplomatisches Weingeschenk
    {
      id: 'ber_4_4',
      guestId: 'botschafterin',
      mood: '🌐',
      intro: 'Die Botschafterin bittet dich diskret an ihren Tisch. "Ich benötige Ihre Expertise für eine heikle Angelegenheit. Ich suche einen einzelnen Wein als Gastgeschenk – er soll die Exzellenz europäischer Weinkultur repräsentieren. Es geht um mehr als Geschmack, es geht um Diplomatie."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"An wen ist das Geschenk gerichtet – aus welchem Kulturkreis kommt der Empfänger?"', good: true, bonusTip: 2, guestResponse: '"Der japanische Botschafter. Ein Mann von enormer Kultiviertheit, feinem Geschmack und Wertschätzung für Handwerkskunst und Seltenheit. In Japan zählt die Geste ebenso viel wie der Inhalt."' },
            { text: '"Wollen Sie einfach den teuersten Wein, den wir haben?"', good: false, bonusTip: 0, guestResponse: '"Diplomatie ist nicht die Kunst des Teuersten, sondern des Bedeutsamsten. Der Preis allein drückt keine Botschaft aus." Ihr Blick wird kühl.' },
            { text: '"Welche Botschaft soll der Wein vermitteln?"', good: true, bonusTip: 1, guestResponse: '"Exzellenz. Einzigartigkeit. Etwas, das es nur in Europa gibt – eine Geschichte, die man beim Überreichen erzählen kann. Es soll zeigen, dass wir uns Gedanken gemacht haben."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Spielt der Preis eine Rolle, oder geht es ausschließlich um die Wirkung?"', good: true, bonusTip: 2, guestResponse: '"Preis ist irrelevant. Was zählt, ist die Besonderheit. Etwas, das selbst ein Kenner nicht jeden Tag sieht – das bei einem japanischen Diplomaten echtes Staunen auslöst. Seltenheit ist die höchste Form der Wertschätzung."' },
            { text: '"Soll es ein Rotwein sein?"', good: false, bonusTip: 0, guestResponse: '"Sie schränken die Optionen ein, bevor Sie die Anforderungen verstanden haben. Denken Sie breiter." Die Botschafterin legt die Fingerspitzen aneinander.' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Eiswein – ein Meisterstück der Empfehlung! Einzigartig deutsch, unglaublich selten (nur in wenigen Jahrgängen möglich), mit einer faszinierenden Entstehungsgeschichte: bei -7°C geerntete gefrorene Trauben, wenige Tropfen pro Beere. In Japan wird Eiswein verehrt – die Verbindung von Naturgewalt und Handwerkskunst spricht die japanische Ästhetik direkt an. Die Botschafterin lächelt: "Perfekt. Eine Geschichte, die es wert ist, erzählt zu werden."' },
            { wineId: 'champagner', correct: true, explanation: 'Champagner ist universelles Prestige – ein sicherer, respektabler Griff. Aber als Einzelgeschenk für einen kultivierten japanischen Diplomaten fehlt das Überraschungsmoment. Champagner kennt jeder. Die Botschafterin nickt: "Solide – aber nicht außergewöhnlich genug für diesen Anlass."' },
            { wineId: 'tempranillo_gran_reserva', correct: false, explanation: 'Tempranillo Gran Reserva ist ein großartiger Wein – aber als diplomatisches Geschenk fehlt ihm das Alleinstellungsmerkmal. Spanische Gran Reserva gibt es viele. Die Botschafterin schüttelt den Kopf: "Respektabel, aber nicht einzigartig genug. Ein Geschenk muss eine Geschichte erzählen, die nur dieser Wein erzählen kann."' },
          ]
        }
      ],
      summary: 'Bei Weingeschenken auf höchstem Niveau zählt die Geschichte hinter dem Wein oft mehr als der Geschmack allein. Eiswein vereint Seltenheit, eine faszinierende Entstehung und kulturelle Brückenbau-Qualität – besonders für Empfänger aus Japan, wo Handwerkskunst und Naturphänomene höchste Wertschätzung genießen.'
    },

    // ber_4_5 — Der Scheich: Exklusives Dinner ohne Alkohol... oder doch?
    {
      id: 'ber_4_5',
      guestId: 'der_scheich',
      mood: '💎',
      intro: 'Der Scheich lässt dich diskret an seinen Tisch bitten. Sein Assistent flüstert: "Seine Exzellenz trinkt keinen Alkohol. Aber er gibt morgen ein privates Dinner für europäische Geschäftspartner – und die erwarten eine erstklassige Weinbegleitung. Der Scheich möchte SIE um Rat bitten, welchen Wein er seinen Gästen anbieten soll."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was wird beim Dinner serviert?"', good: true, bonusTip: 2, guestResponse: 'Der Assistent konsultiert ein ledernes Notizbuch: "Der Hauptgang ist Lammkarree mit orientalischen Gewürzen – Safran, Kreuzkümmel, Rosenwasser-Jus. Seine Exzellenz legt Wert darauf, dass der Wein die Aromen des Gerichts ergänzt, nicht überdeckt."' },
            { text: '"Soll es der teuerste Wein auf der Karte sein?"', good: false, bonusTip: 0, guestResponse: 'Der Scheich hebt eine Augenbraue. Der Assistent übersetzt: "Seine Exzellenz kauft keine Preisschilder. Er kauft Qualität und Angemessenheit. Beraten Sie ihn nach Geschmack, nicht nach Preis."' },
            { text: '"Wer genau sind die Gäste – was für Weinkenner?"', good: true, bonusTip: 1, guestResponse: '"Drei deutsche Industrielle und ein französischer Bankier. Alle trinken regelmäßig Wein – der Franzose hat einen eigenen Weinkeller in Bordeaux. Es muss ein Wein sein, der selbst ihn beeindruckt."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein zum Lamm oder als eigenständiges Statement wirken?"', good: true, bonusTip: 2, guestResponse: '"Beides. Seine Exzellenz sagt: Ein großer Wein ist wie ein kluger Diplomat – er unterstützt das Gericht und zeigt gleichzeitig eigene Größe. Die Gewürze im Lamm sind intensiv – der Wein muss mithalten können, ohne zu dominieren."' },
            { text: '"Rot oder weiß?"', good: false, bonusTip: 0, guestResponse: 'Der Assistent schaut etwas irritiert: "Zum Lammkarree? Rot, selbstverständlich. Bitte konzentrieren Sie sich auf die feineren Nuancen der Auswahl."' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'chateauneuf', correct: true, favorite: true, explanation: 'Meisterhaft! Châteauneuf-du-Pape ist die perfekte Brücke zwischen Orient und Okzident: Die Garrigue-Kräuter und der Lavendel des Rhône-Tals harmonieren wie komponiert mit Safran und Kreuzkümmel. Die konzentrierte Frucht hält dem intensiven Lamm stand, und der Name allein – "Neues Schloss des Papstes" – lässt selbst den Bordeaux-Sammler respektvoll nicken. Der Scheich lächelt zufrieden: "Ein Wein mit Geschichte und Diplomatie."' },
            { wineId: 'tempranillo_gran_reserva', correct: true, explanation: 'Tempranillo Gran Reserva ist eine respektable Wahl – die ledrigen, reifen Aromen passen durchaus zum Lamm. Aber die orientalischen Gewürze des Gerichts verlangen nach einem Wein mit kräuterigen Nuancen, nicht nach Vanille und Tabak. Der Scheich nickt höflich: "Gut, aber nicht perfekt."' },
            { wineId: 'sancerre', correct: false, explanation: 'Sancerre – ein frischer Loire-Weißwein – zum gewürzintensiven Lammkarree für einen Scheich, der einen Bordeaux-Sammler beeindrucken will? Das wäre ein diplomatischer Fauxpas. Die Stachelbeere geht im Kreuzkümmel unter. Der Assistent hustet diskret: "Seine Exzellenz... ist nicht amüsiert."' },
          ]
        }
      ],
      summary: 'Bei internationalen Gästen mit kulinarischen Brücken arbeiten: Châteauneuf-du-Pape verbindet mit seinen mediterranen Kräuteraromen die europäische Weinkultur mit orientalischer Gewürzküche – wahre Weindiplomatie.'
    },

    // ber_4_6 — Kunstsammlerin: Wein für die Vernissage
    {
      id: 'ber_4_6',
      guestId: 'kunstsammlerin',
      mood: '🎨',
      intro: 'Die Kunstsammlerin gleitet an deinen Tisch mit einer Einladungskarte in der Hand. "Nächste Woche eröffne ich meine neue Galerie – zeitgenössische Kunst, sehr avantgardistisch. 40 Gäste, alles Sammler und Kritiker. Der Wein muss so sprechen wie die Kunst: überraschend, provokant und unvergesslich. Kein Mainstream!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Welche Stimmung wollen Sie erzeugen – elegant-gedämpft oder lebhaft-aufregend?"', good: true, bonusTip: 2, guestResponse: '"Aufregend! Kunst ist kein Museumsflüstern. Ich will, dass die Leute den ersten Schluck nehmen und sagen: Was ist DAS? Genauso wie vor einem Bild, das einen nicht sofort loslässt. Der Wein soll Gesprächsstoff sein!"' },
            { text: '"Wie hoch ist Ihr Budget?"', good: false, bonusTip: 0, guestResponse: '"Budget? Darling, ich kaufe gerade zwei Gerhard-Richter-Originale. Der Wein ist der günstigste Posten des Abends. Beraten Sie mich nach Wirkung, nicht nach Preis!"' },
            { text: '"Gibt es Essen oder nur Getränke?"', good: true, bonusTip: 1, guestResponse: '"Nur kleine, kunstvolle Canapés – Foie-Gras-Pralinés, Ziegenkäse-Feigen-Törtchen, dunkle Schokolade mit Fleur de Sel. Alles vom besten Caterer der Stadt. Der Wein muss dieses Niveau halten!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein selbst ein Kunstwerk sein – etwas mit unerwarteten Aromen?"', good: true, bonusTip: 2, guestResponse: '"JA! Genau das. Kein Wein, den jeder kennt. Kein Cabernet, den jeder trinkt. Etwas mit Charakter, Ecken und Kanten – wie ein Bild, das man erst beim zweiten Blick versteht. Etwas, das polarisiert!"' },
            { text: '"Rot oder weiß?"', good: false, bonusTip: 0, guestResponse: '"Sie denken zu binär! Rot ODER weiß ist wie schwarz ODER weiß – in der Kunst gibt es auch dazwischen. Aber gut, wenn ich muss: etwas Dunkles, Mysteriöses."' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'amarone', correct: true, favorite: true, explanation: 'Ein Meisterstück! Amarone della Valpolicella ist selbst ein Kunstwerk: aus getrockneten Trauben (Appassimento), Monate auf Rosinenbetten gereift, mit Aromen von dunkler Schokolade, Kaffee und Rosinen. Intensiv, unkonventionell, polarisierend – genau wie avantgardistische Kunst. Die Kunstsammlerin hebt das Glas ans Licht: "Dieser Wein ist ein Caravaggio – dunkel, dramatisch, unvergesslich. PERFEKT."' },
            { wineId: 'champagner', correct: true, explanation: 'Champagner bei einer Vernissage ist klassisch und sicher – das Prickeln sorgt für Stimmung. Aber für eine Kunstsammlerin, die "keine Mainstream-Weine" will, ist Champagner zu erwartbar. Es ist wie ein Monet in einer Galerie für zeitgenössische Kunst – schön, aber nicht überraschend.' },
            { wineId: 'sancerre', correct: false, explanation: 'Sancerre – frisch, leicht, unkompliziert – zu einer avantgardistischen Vernissage mit Foie-Gras-Pralinés und dunkler Schokolade? Das ist wie ein Aquarell neben einer Skulptur von Jeff Koons. Zu brav, zu leise. Die Kunstsammlerin würde den Sommelier aus der Galerie werfen.' },
          ]
        }
      ],
      summary: 'Wein und Kunst teilen eine Sprache: Beide leben von Überraschung, Handwerk und Provokation. Amarone – aus einem einzigartigen Herstellungsprozess geboren – ist der perfekte Wein für Anlässe, die nach dem Außergewöhnlichen verlangen.'
    },

    // ber_4_7 — Sternekoch: Dessert-Pairing für den neuen Nachtisch
    {
      id: 'ber_4_7',
      guestId: 'sternekoch',
      mood: '👨‍🍳',
      intro: 'Der Sternekoch kommt ausnahmsweise als Gast. Er setzt sich, bestellt nichts und legt ein Foto auf den Tisch – ein kunstvoll angerichtetes Dessert. "Mein neues Signature-Dessert: Tarte Tatin mit karamellisierten Äpfeln, Calvados-Sabayon und Bourbon-Vanilleeis. Ich brauche den perfekten Dessertwein dazu. Und mit perfekt meine ich: PERFEKT."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Welche Aromen dominieren – das Karamell, der Apfel oder der Calvados?"', good: true, bonusTip: 2, guestResponse: '"Alle drei – aber in Wellen. Zuerst trifft dich das warme Karamell, dann kommen frische Apfelsäure und Butter der Tarte, und zum Schluss wärmt der Calvados nach. Der Dessertwein muss diese Wellen mitschwimmen, nicht dagegen."' },
            { text: '"Soll der Wein süßer sein als das Dessert?"', good: true, bonusTip: 1, guestResponse: '"Mindestens genauso süß – eher etwas süßer. Ein Dessertwein, der weniger süß ist als das Gericht, schmeckt dünn und sauer. Das ist Regel Nummer eins im Pairing: Der Wein muss das Dessert umarmen, nicht ablehnen."' },
            { text: '"Wie viel soll das Glas kosten?"', good: false, bonusTip: 0, guestResponse: 'Der Sternekoch starrt dich an. "Ich habe drei Michelin-Sterne. Mein Dessert ist ein Kunstwerk. Und Sie fragen nach dem Preis? Fragen Sie mich nach AROMEN!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein Frucht betonen oder eher Honig und Karamell ergänzen?"', good: true, bonusTip: 2, guestResponse: '"Frucht! Aprikose, Pfirsich – etwas, das die Apfelnoten der Tarte spiegelt und gleichzeitig Honig mitbringt. Karamell haben wir genug im Dessert. Ich brauche einen Kontrapunkt aus Frucht und Süße, der die Komplexität hebt, nicht verdoppelt."' },
            { text: '"Wollen Sie einen Klassiker oder etwas Experimentelles?"', good: false, bonusTip: 0, guestResponse: '"Bei drei Sternen experimentiere ich nicht beim Pairing. Ich will den BESTEN Wein für dieses Dessert. Punkt. Der muss seit Generationen funktionieren, nicht seit letztem Dienstag."' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'eiswein', correct: true, favorite: true, explanation: 'Perfekt! Eiswein ist der Traum-Partner zur Tarte Tatin: konzentrierte Aprikose und Honig spiegeln den karamellisierten Apfel, die messerscharfe Säure schneidet durch die Butter der Tarte, und die tropischen Früchte heben den Calvados-Sabayon. Süß genug, um das Dessert zu umarmen, frisch genug, um es nicht zu erschlagen. Der Sternekoch nickt: "ENDLICH jemand, der Pairing versteht. Sie kommen auf meine Karte."' },
            { wineId: 'champagner', correct: false, explanation: 'Champagner zum Dessert? Trockener Schaumwein zu einer süßen Tarte Tatin – die Kohlensäure betont die Süße unangenehm, und der Wein schmeckt neben dem Karamell sauer und metallisch. Der Sternekoch schließt die Augen: "Sie haben gerade bewiesen, dass Sie Dessert-Pairing nicht verstehen."' },
            { wineId: 'sancerre', correct: false, explanation: 'Sancerre – trocken, Stachelbeere, Kräuter – zu karamellisiertem Apfel mit Vanilleeis und Calvados-Sabayon? Der Wein würde bitter und sauer schmecken neben der üppigen Süße. Der Sternekoch steht auf: "Ich gehe. Und ich komme wieder, wenn Sie einen Dessertwein-Kurs belegt haben."' },
          ]
        }
      ],
      summary: 'Beim Dessert-Pairing gilt die goldene Regel: Der Wein muss mindestens so süß sein wie das Gericht. Eiswein mit seiner konzentrierten Frucht und balancierenden Säure ist der perfekte Partner für warme, karamellisierte Desserts.'
    },

    // ber_4_8 — Promi-Paar: Heimlicher Heiratsantrag
    {
      id: 'ber_4_8',
      guestId: 'promi_paar',
      mood: '💍',
      intro: 'Er kommt allein, nervös, und flüstert: "Ich brauche Ihre Hilfe. Heute Abend mache ich meiner Freundin einen Antrag – hier, an Tisch sieben. Ich habe den Ring, ich habe die Worte geübt... aber der Wein muss PERFEKT sein. Das wird der wichtigste Schluck ihres Lebens."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"In welchem Moment wollen Sie die Frage stellen – beim Anstoßen, beim Hauptgang oder beim Dessert?"', good: true, bonusTip: 2, guestResponse: '"Beim Anstoßen! Ich will, dass wir die Gläser heben, ich den Toast spreche, und wenn sie trinkt, sieht sie den Ring am Stiel des Glases. Also der Wein muss im GLAS großartig sein – Farbe, Perlage, alles. Es ist ein visueller Moment!"' },
            { text: '"Wie viel wollen Sie ausgeben?"', good: false, bonusTip: 0, guestResponse: '"Geld spielt keine Rolle! Ich kaufe gerade einen Ring für fünfstellig – da feilsche ich nicht beim Wein! Bitte – helfen Sie mir, den perfekten Moment zu kreieren!"' },
            { text: '"Was trinkt Ihre Freundin normalerweise?"', good: true, bonusTip: 1, guestResponse: '"Sie liebt alles, was elegant ist. Kein Fan von schwerem Rotwein – sie mag es prickelnd, festlich, mit ein bisschen Magie. Bei unserem ersten Date haben wir Sekt getrunken, und sie hat gesagt: \'Irgendwann trinken wir Champagner.\'"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein eine Botschaft transportieren – etwas Symbolisches?"', good: true, bonusTip: 2, guestResponse: '"Ja! Sie ist Romantikerin. Wenn der Wein eine Geschichte hat – etwas über Liebe, Beständigkeit, oder einen besonderen Moment – dann wird sie weinen. Und ich meine die guten Tränen. Der Wein muss sagen: Das hier ist der Anfang von etwas Großem."' },
            { text: '"Bestellen Sie auch Essen?"', good: false, bonusTip: 0, guestResponse: '"Natürlich, aber das kommt später! Erst der Antrag, dann das Dinner. Konzentrieren wir uns auf DEN Moment – den Rest besprechen wir danach. Falls sie ja sagt." Er schluckt nervös.' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'champagner', correct: true, favorite: true, explanation: 'Es gibt keinen anderen Wein für diesen Moment. Champagner ist nicht nur ein Getränk – es ist ein Versprechen. Die goldene Farbe, die aufsteigenden Perlen wie kleine Glücksmomente, der erste Schluck, der auf der Zunge tanzt... und dann sieht sie den Ring. Er erzählt ihr die Geschichte: "Beim ersten Date sagtest du: Irgendwann Champagner. Heute ist irgendwann." Sie weint. Er weint. Du weinst. Sogar der Koch weint. DAS ist Sommelier-Kunst auf höchstem Niveau.' },
            { wineId: 'eiswein', correct: false, explanation: 'Eiswein ist süß, konzentriert und besonders – aber für einen Heiratsantrag beim Anstoßen fehlen die Perlen, die goldene Farbe im Glas, das festliche Prickeln. Eiswein trinkt man in kleinen Schlucken zum Dessert, nicht beim großen Geste-Moment. Er flüstert enttäuscht: "Das fühlt sich nicht nach \'Ich will dich für immer\' an."' },
            { wineId: 'sancerre', correct: false, explanation: 'Sancerre – ein trockener, stiller Weißwein für den wichtigsten Moment seines Lebens? Keine Perlen, keine Magie, keine Geschichte. Das ist, als würde man den Ring in einer Plastiktüte überreichen. Er schaut dich an: "Das ist... nett. Aber ich brauche mehr als nett. Ich brauche unvergesslich."' },
          ]
        }
      ],
      summary: 'Manche Momente verlangen nach dem einzig richtigen Wein. Champagner ist mehr als ein Getränk – er ist ein Symbol für Feier, Versprechen und besondere Augenblicke. Für einen Heiratsantrag gibt es keine Alternative.'
    },
  ],
};
