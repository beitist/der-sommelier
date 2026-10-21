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
        { wineId: 'saint_emilion', correct: true, favorite: true, explanation: 'Saint-Émilion Grand Cru – eleganter Bordeaux mit Tiefe und Komplexität. Die Merlot-dominante Cuvée harmoniert wunderbar mit Trüffel und Rindfleisch.' },
        { wineId: 'barolo', correct: false, explanation: 'Barolo passt geschmacklich zu Trüffel und Rindfleisch – aber er kommt aus dem Piemont, nicht aus Bordeaux! Der Bankier hat explizit nach Bordeaux gefragt.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist leicht und spritzig – dem kräftigen Gericht in keiner Weise gewachsen.' },
        { wineId: 'malbec', acceptable: true, explanation: 'Malbec hat die nötige Kraft für Rinderfilet – aber der Bankier hat explizit nach Bordeaux gefragt, und Malbec kommt aus Argentinien. Außerdem fehlt ihm die Finesse für den schwarzen Trüffel, die Saint-Émilion mitbringt.' },
      ]
    },
    {
      id: 'fp_3_2', guestId: 'madame_dupont', mood: '🇫🇷',
      scenario: 'Madame Dupont bestellt mit ihrem typisch kritischen Blick: "Coq au Vin – heute in der Variante mit Weißwein. Und bitte keinen Riesling, den bekomme ich in Deutschland überall. Etwas Burgundisches!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chablis_premier_cru', correct: true, favorite: true, explanation: 'Chablis Premier Cru – mineralischer Chardonnay aus dem Burgund, ohne Holz. Elegant genug für Madame und perfekt zum Coq au Vin!' },
        { wineId: 'riesling_spaetlese', acceptable: true, explanation: 'Gar nicht so dumm: Die reife, restsüße Spätlese ist etwas ganz anderes als ein trockener, spritziger Riesling, und sie hat genug Substanz für den Coq au Vin. Aber Riesling bleibt Riesling – Madame hat ausdrücklich keinen gewollt, und etwas Burgundisches ist es auch nicht.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zum Hauptgang? Das wäre ein Affront für eine französische Feinschmeckerin.' },
      ]
    },
    {
      id: 'fp_3_3', guestId: 'diplomatenpaar', mood: '🌐',
      scenario: 'Das Diplomatenpaar bestellt japanisches Wagyu-Beef – zart, marmoriert, perfekt gegart. "Ein Wein mit Tiefe und Struktur bitte – der diesem außergewöhnlichen Fleisch ebenbürtig ist."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, favorite: true, explanation: 'Barolo – der "König der Weine". Seine Tannine und Komplexität stehen dem edlen Wagyu in nichts nach. Eine würdige Paarung!' },
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion bringt Struktur und Eleganz mit – ein solider Begleiter zum Wagyu, aber der Barolo ist hier die Königsklasse.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé zum Wagyu? Zu leicht, zu unambitioniert für dieses Premium-Fleisch.' },
        { wineId: 'malbec', acceptable: true, explanation: 'Malbec ist ein kraftvoller Steakwein – gar nicht verkehrt! Aber dem edlen, marmorierten Wagyu fehlt bei ihm die Komplexität und Struktur, die der Barolo mitbringt.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist leicht, lieblich und perlend – dem Premium-Wagyu im gehobenen Restaurant nicht ebenbürtig. Die Diplomaten wären pikiert.' },
      ]
    },
    {
      id: 'fp_3_4', guestId: 'die_professorin', mood: '🧀',
      scenario: 'Die Professorin bestellt eine Käseplatte mit gereiftem Comté, Roquefort und Époisses. "Ich hätte gerne etwas, das den Käse nicht erschlägt – elegant, restsüß, mit guter Säure als Gegengewicht."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling_spaetlese', correct: true, favorite: true, explanation: 'Riesling Spätlese – die Restsüße und die lebendige Säure bilden einen perfekten Kontrast zu kräftigem Käse. Klassische Pairing-Regel!' },
        { wineId: 'malbec', correct: false, explanation: 'Malbec ist kräftig und trocken – er würde mit dem intensiven Roquefort konkurrieren statt harmonieren.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist zu neutral und leicht für eine so kraftvolle Käseauswahl.' },
        { wineId: 'gewuerztraminer', acceptable: true, explanation: 'Gewürztraminer bringt etwas Restsüße und passt gern zu Käse – aber ihm fehlt die lebendige Säure als Gegengewicht, die die Professorin ausdrücklich will. Die Riesling Spätlese hat beides.' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist leicht und mild – gegen Roquefort und Époisses verschwindet er sang- und klanglos.' },
      ]
    },
    {
      id: 'fp_3_5', guestId: 'herr_tanaka', mood: '🥩',
      scenario: 'Herr Tanaka bestellt mit ruhiger Stimme: "Ein argentinisches Steak, medium – wie ich es in Buenos Aires kennengelernt habe. Und den passenden Wein dazu, bitte. Ich vertraue Ihrem Urteil."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'malbec', correct: true, favorite: true, explanation: 'Malbec – DER argentinische Steak-Wein! Kraftvoll, fruchtig, mit weichen Tanninen. Herr Tanaka wird sich an Buenos Aires erinnert fühlen.' },
        { wineId: 'pinotage', correct: true, explanation: 'Pinotage ist kräftig und rauchig – ein guter Steak-Begleiter. Aber Herr Tanaka erinnert sich an Buenos Aires, da gehört Malbec dazu!' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zum Steak wäre eine Stilbruch – Herr Tanakas Vertrauen wäre enttäuscht.' },
        { wineId: 'barolo', acceptable: true, explanation: 'Barolo ist ein großartiger Steak-Wein mit Tiefe und Struktur – aber Herr Tanaka erinnert sich an Buenos Aires, und da gehört ein argentinischer Malbec einfach dazu. Barolo ist Piemont, nicht Pampa.' },
      ]
    },
    {
      id: 'fp_3_6', guestId: 'influencerin', mood: '📸',
      scenario: 'Die Influencerin filmt schon den Tisch: "OMG, ich mache heute einen Reel über \'Wine & Dine\'! Ich hab das Thunfisch-Tatar bestellt – jetzt brauche ich einen Weißen, der fotogen UND lecker ist. Meine Community erwartet Content!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chablis_premier_cru', correct: true, favorite: true, explanation: 'Chablis Premier Cru – mineralisch, elegant, goldschimmernd im Glas. Perfekt zum Thunfisch-Tatar und garantiert Instagram-tauglich!' },
        { wineId: 'riesling_spaetlese', correct: true, explanation: 'Riesling Spätlese ist frisch und fotogen – die Restsüße kontrastiert den rohen Fisch schön. Aber Chablis ist die klassischere Wahl zum Thunfisch-Tatar und bringt die mineralische Eleganz mit, die hier den Unterschied macht.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist ein Rotwein – zum rohen Thunfisch ein geschmackliches No-Go und auch kein guter Content.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco zum Thunfisch-Tatar im gehobenen Restaurant? Ihre Follower würden sie auslachen.' },
        { wineId: 'pinot_grigio', acceptable: true, explanation: 'Pinot Grigio ist leicht und dezent und passt zum rohen Fisch – solide! Aber ihm fehlt die mineralische Eleganz des Chablis, die das Tatar (und den Reel) erst besonders macht.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum Thunfisch-Tatar im Le Vignoble? Das Harzaroma überdeckt den feinen Fisch – daraus wird höchstens ein Fail-Video.' },
      ]
    },
    {
      id: 'fp_3_7', guestId: 'weinhaendler', mood: '🍖',
      scenario: 'Der Weinhändler studiert die Karte mit dem Auge des Profis: "Springbok-Carpaccio mit Rooibos-Jus und gerösteten Macadamias – das klingt nach Kapstadt. Geben Sie mir etwas vom gleichen Kontinent, das die rauchige Sauce unterstreicht."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'pinotage', correct: true, favorite: true, explanation: 'Pinotage aus Südafrika – gleicher Kontinent, und die Rauch- und Kaffeenoten greifen den Rooibos-Jus perfekt auf. Terroir-Harmonie vom Kap!' },
        { wineId: 'malbec', correct: false, explanation: 'Malbec ist kraftvoll, aber aus Argentinien – der Weinhändler wollte explizit etwas vom selben Kontinent wie das Springbok.' },
        { wineId: 'saint_emilion', correct: false, explanation: 'Saint-Émilion ist ein eleganter Bordeaux, aber weder afrikanisch noch rauchig genug für dieses Gericht.' },
      ]
    },
    {
      id: 'fp_3_8', guestId: 'diplomatenpaar', mood: '🦪',
      scenario: 'Das Diplomatenpaar kommt gerade von einer Konferenz in Genf. Die Diplomatin bestellt: "Frische Austern mit Zitrone und Meersalz – ganz klassisch. Dazu einen Wein, der nach Meer schmeckt. Kennen Sie das Konzept?"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'chablis_premier_cru', correct: true, favorite: true, explanation: 'Chablis Premier Cru! Der Kimmeridge-Kalkboden enthält fossile Austernschalen – der Wein hat buchstäblich Meeresmineralik. Die klassischste Austern-Begleitung überhaupt.' },
        { wineId: 'riesling_spaetlese', correct: false, explanation: 'Riesling Spätlese hat zu viel Restsüße für die puristischen Austern – die salzige Frische geht verloren.' },
        { wineId: 'barolo', correct: false, explanation: 'Barolo zu Austern wäre ein Fauxpas der Extraklasse – die mächtigen Tannine erschlagen die zarten Schalentiere.' },
        { wineId: 'vinho_verde', acceptable: true, explanation: 'Vinho Verde ist frisch, mineralisch und mag Meeresfrüchte – zu Austern kein Fehler! Aber kein Wein schmeckt so nach Meer wie Chablis mit den fossilen Austernschalen im Boden.' },
        { wineId: 'gewuerztraminer', correct: false, explanation: 'Gewürztraminer mit Litschi, Rose und Restsüße zu puristischen Austern? Das Parfum überdeckt das Meer komplett.' },
      ]
    },
    {
      id: 'fp_3_9', guestId: 'der_komponist', mood: '🎼',
      scenario: 'Der Komponist bestellt mit geschlossenen Augen: "Gebratene Entenbrust mit Kirschsauce und Trüffelpüree. Ich brauche einen Wein, der dieses Crescendo mitmacht – etwas Italienisches, mit Rosenduft und Tiefe."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, favorite: true, explanation: 'Barolo – mit seinen Aromen von Rose, Kirsche und Teer das perfekte Crescendo zur Entenbrust! Die Tannine schneiden durch das Fett, die Kirschnoten umarmen die Sauce.' },
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion hat die nötige Struktur für die Ente – aber der Komponist bat ausdrücklich um etwas Italienisches mit Rosenduft. Da ist Barolo die einzig wahre Antwort.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist ein Weißwein – zur kräftigen Entenbrust mit Kirschsauce fehlt ihm schlicht die Substanz.' },
        { wineId: 'chianti', acceptable: true, explanation: 'Chianti ist italienisch und bringt Kirschfrucht zur Kirschsauce – nicht schlecht! Aber für Rosenduft und das große Crescendo mit Trüffel fehlt ihm die Tiefe des Barolo.' },
        { wineId: 'pinotage', correct: false, explanation: 'Pinotage ist rauchig und südafrikanisch – weder italienisch noch mit Rosenduft. Der Komponist wollte eine Arie, keinen Lagerfeuer-Song.' },
      ]
    },
    {
      id: 'fp_3_10', guestId: 'lisa', mood: '🍽️',
      scenario: 'Lisa, deine Kollegin, bittet dich leise um Rat: "Am Tisch 7 sitzt ein Stammgast mit Foie Gras und Feigensenf. Er will keinen Sauternes, er will \'etwas Deutsches mit Süße und Säure\'. Ich bin unsicher – was würdest du sagen?"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'riesling_spaetlese', correct: true, favorite: true, explanation: 'Riesling Spätlese – die Restsüße umschmeichelt die Foie Gras, die lebendige Säure schneidet durch das Fett, und die Honig-Pfirsich-Aromen ergänzen den Feigensenf. Ein Klassiker!' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist trocken und französisch – der Gast wollte ausdrücklich etwas Deutsches mit Süße.' },
        { wineId: 'pinotage', correct: false, explanation: 'Pinotage zur Foie Gras? Die rauchigen Noten würden die zarte Gänseleber überfordern.' },
        { wineId: 'gewuerztraminer', acceptable: true, explanation: 'Gewürztraminer ist deutsch und halbtrocken – zur Foie Gras gar kein schlechter Gedanke! Aber ihm fehlt die lebendige Säure der Riesling Spätlese, die durch das Fett schneidet.' },
        { wineId: 'riesling', correct: false, explanation: 'Deutsch und säurebetont – zwei von drei Wünschen! Aber der trockene Riesling hat keine Süße, und genau die braucht die Foie Gras mit Feigensenf.' },
      ]
    },
    {
      id: 'fp_3_11', guestId: 'kuenstler', mood: '🍄',
      scenario: 'Der Künstler bestellt Steinpilzrisotto mit Trüffelöl und geriebenem Parmesan. "Das Risotto ist wie ein Gemälde – erdige Töne, cremige Textur. Ich brauche einen Wein, der dieses Kunstwerk ergänzt, nicht übermalt."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, favorite: true, explanation: 'Barolo – seine Aromen von Teer, Rosen und getrockneten Kräutern sind wie ein Meisterwerk zum Meisterwerk. Die eleganten Tannine rahmen das Risotto ein, ohne es zu überdecken.' },
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion bringt Eleganz und Struktur mit – ein guter Begleiter zum Risotto. Aber Barolo mit seinen erdigen Noten und der piemontesischen Trüffel-Verwandtschaft ist die perfekte Harmonie.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist mineralisch und schlank – dem cremigen, erdigen Steinpilzrisotto fehlt hier der passende Partner in Gewicht und Charakter.' },
        { wineId: 'malbec', acceptable: true, explanation: 'Malbec hat genug Kraft für das Risotto und überrollt es nicht – aber ihm fehlen die erdigen, trüffeligen Noten, die den Barolo als piemontesischen Bruder des Risottos zum perfekten Partner machen.' },
      ]
    },
    {
      id: 'fp_3_12', guestId: 'food_bloggerin', mood: '📱',
      scenario: 'Die Food-Bloggerin fotografiert schon den Teller: "Geschmorter Ochsenschwanz mit Rotwein-Jus und Wurzelgemüse – das muss auf meinen Blog! Und der Wein dazu soll genauso beeindruckend sein. Etwas Französisches mit Tiefgang."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'saint_emilion', correct: true, favorite: true, explanation: 'Saint-Émilion Grand Cru – ein Bordeaux mit Tiefgang und Eleganz, der die Rotwein-Jus des Ochsenschwanzes spiegelt. Blog-Content mit Substanz!' },
        { wineId: 'barolo', correct: true, explanation: 'Barolo hat die Kraft und Komplexität für den Ochsenschwanz – aber die Bloggerin wollte explizit etwas Französisches, und da ist Saint-Émilion die erste Adresse.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis zum geschmorten Ochsenschwanz? Der mineralische Weißwein hat nicht annähernd genug Gewicht für das kräftige Schmorgericht.' },
        { wineId: 'rioja_crianza', acceptable: true, explanation: 'Rioja Crianza liebt Schmorgerichte – zum Ochsenschwanz eine runde Sache! Aber die Bloggerin wollte etwas Französisches, und da führt kein Weg am Saint-Émilion vorbei.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist fruchtig und unkompliziert – weder französisch noch mit Tiefgang. Für den Blog-Ochsenschwanz zu brav.' },
      ]
    },
    {
      id: 'fp_3_13', guestId: 'weinclub', mood: '🧀',
      scenario: 'Der Weinclub-Vorsitzende bestellt eine Platte mit gereiftem Bergkäse, Walnüssen und Feigensenf. "Eine Blindverkostung für den Club – welcher Wein hält dem kräftigen Bergkäse stand, ohne ihn zu überrollen? Ich erwarte eine fundierte Empfehlung."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'riesling_spaetlese', correct: true, favorite: true, explanation: 'Riesling Spätlese – die perfekte Balance aus Restsüße und Säure kontrastiert den salzigen Bergkäse brillant, und die Honigaromen ergänzen den Feigensenf. Fundiert genug für jeden Weinclub!' },
        { wineId: 'barolo', correct: true, explanation: 'Barolo hat die Struktur für kräftigen Käse – aber die Tannine und der Käse können sich beißen. Die Riesling Spätlese löst das eleganter durch Süße-Säure-Kontrast.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist trocken und mineralisch – dem kräftigen Bergkäse mit Feigensenf hat er nicht genug entgegenzusetzen.' },
        { wineId: 'gewuerztraminer', acceptable: true, explanation: 'Gewürztraminer mit leichter Restsüße und Würze ist ein beliebter Käsebegleiter – aber ihm fehlt die lebendige Säure, die den salzigen Bergkäse so brillant kontrastiert.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist leicht und spritzig – gegen gereiften Bergkäse und Feigensenf geht er sang- und klanglos unter. Nicht fundiert genug für den Club.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_3_1', guestId: 'der_komponist', mood: '🎵',
      scenario: 'Der Komponist starrt verträumt in die Ferne: "Ich suche einen Wein, der wie eine Symphonie ist – komplex, mit vielen Schichten, der sich im Glas entwickelt. Etwas zum Nachdenken."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, favorite: true, explanation: 'Barolo – eine Symphonie im Glas! Teer, Rosen, Kirschen, Lakritz – er braucht Zeit und belohnt Geduld. Genau der Nachdenkwein.' },
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion hat durchaus Tiefe und Schichten – ein guter Bordeaux entwickelt sich wunderbar im Glas. Aber an die orchestrale Wucht eines Barolo kommt er nicht heran.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist fröhlich und einfach – die Tiefe, die der Komponist sucht, fehlt.' },
      ]
    },
    {
      id: 'pref_3_2', guestId: 'influencerin', mood: '📱',
      scenario: '"Ich suche einen kräftigen Roten aus der Neuen Welt," sagt die Influencerin und hält das Handy bereit. "Etwas Exotisches für meine Follower – \'Wine Wednesday\' hat 50k Views letzte Woche!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'malbec', correct: true, favorite: true, explanation: 'Malbec aus Argentinien – exotisch, kraftvoll und Instagram-tauglich! Die Influencerin wird begeistert sein.' },
        { wineId: 'pinotage', correct: true, explanation: 'Pinotage aus Südafrika ist definitiv exotisch und Neue Welt – aber Malbec hat den besseren "Wow-Faktor" für Social Media und ist der bekanntere Neue-Welt-Star.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist ein weißer Burgunder – weder Neue Welt noch kräftiger Roter.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist kräftig und fruchtig – aber aus Apulien, also tiefste Alte Welt. Für "exotisch, Neue Welt" verfehlt das Thema.' },
        { wineId: 'barolo', correct: false, explanation: 'Barolo ist kräftig und berühmt – aber Piemont ist Alte Welt pur. Die Follower wollten Neue Welt sehen!' },
      ]
    },
    {
      id: 'pref_3_3', guestId: 'weinhaendler', mood: '🍷',
      scenario: 'Der Weinhändler schaut kritisch in die Karte: "Haben Sie etwas Ungewöhnliches? Einen Roten mit Rauch, Erde, etwas das man nicht jeden Tag trinkt? Überraschen Sie mich!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'pinotage', correct: true, favorite: true, explanation: 'Pinotage aus Südafrika – rauchig, erdig, einzigartig! Die eigene Rebsorte des Kaps. Genau die Überraschung, die der Weinhändler sucht.' },
        { wineId: 'malbec', correct: true, explanation: 'Malbec hat dunkle, erdige Noten und ist durchaus ungewöhnlich – aber für echten Rauch und Lagerfeuer-Charakter ist Pinotage die unschlagbare Wahl.' },
        { wineId: 'cremant', correct: false, explanation: 'Crémant ist elegant, aber nicht der rauchig-erdige Rote, den er sucht.' },
        { wineId: 'barolo', acceptable: true, explanation: 'Barolo mit Teer- und Rosennoten hat durchaus Ecken und Kanten – aber Rauch hat er nicht, und als "König der Weine" ist er für einen Weinhändler keine Überraschung.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist fruchtig und unkompliziert – weder rauchig noch ungewöhnlich. Den kennt der Weinhändler im Schlaf.' },
      ]
    },
    {
      id: 'pref_3_4', guestId: 'die_professorin', mood: '🔬',
      scenario: 'Die Professorin nimmt ihre Brille ab und reibt sich die Schläfen: "Ich habe gerade eine dreistündige Vorlesung über Geomorphologie gehalten. Ich brauche etwas Mineralisches, Klares – einen Wein, den man schmecken UND analysieren kann. Kein Fruchtbomber."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chablis_premier_cru', correct: true, favorite: true, explanation: 'Chablis Premier Cru – mineralisch, klar, analytisch! Die Kreide- und Feuersteinnoten sind ein Geologen-Traum im Glas. Perfekt für die Professorin.' },
        { wineId: 'riesling_spaetlese', correct: false, explanation: 'Riesling Spätlese hat zwar Mineralik, aber die Restsüße und Fruchtnoten sind genau das, was die Professorin heute NICHT möchte – sie will klar und analytisch, keinen Fruchtbomber.' },
        { wineId: 'malbec', correct: false, explanation: 'Malbec ist ein üppiger Fruchtbomber – das Gegenteil von dem, was die Professorin sucht.' },
        { wineId: 'riesling', acceptable: true, explanation: 'Trockener Riesling ist klar und mineralisch – eine gute Idee! Aber als leichter Riesling hat er weniger Tiefe zum Analysieren als ein Chablis Premier Cru mit Feuerstein-Noten.' },
        { wineId: 'gewuerztraminer', correct: false, explanation: 'Gewürztraminer ist das Paradebeispiel für aromatische Fülle – Litschi und Rosen statt Mineralik. Genau das, was die Professorin heute nicht will.' },
      ]
    },
    {
      id: 'pref_3_5', guestId: 'herr_tanaka', mood: '🧘',
      scenario: 'Herr Tanaka faltet nachdenklich seine Serviette: "In Japan sagen wir \'Wabi-Sabi\' – die Schönheit des Unvollkommenen. Ich suche einen Wein mit Charakter, Ecken und Kanten. Nicht glatt, nicht gefällig – ehrlich und authentisch."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, favorite: true, explanation: 'Barolo ist Wabi-Sabi im Glas! Tannine wie raue Seide, Aromen von Teer und verwelkten Rosen – nicht sofort gefällig, aber von überwältigender Ehrlichkeit und Tiefe.' },
        { wineId: 'pinotage', correct: true, explanation: 'Pinotage hat definitiv Ecken und Kanten – Rauch, Erde, Wildheit. Aber Barolo vereint die Spannung zwischen Rauheit und Eleganz auf einem noch höheren Niveau.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist elegant und klar, aber eher "Zen-Garten" als "Wabi-Sabi" – zu geschliffen für das, was Herr Tanaka sucht.' },
        { wineId: 'chianti', acceptable: true, explanation: 'Chianti hat mit Kräutern und Leder durchaus Kanten und ist ehrlich-toskanisch – aber Barolo vereint Rauheit und Tiefe auf einem noch höheren Niveau.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist lieblich, perlend und süffig – also genau "glatt und gefällig". Herr Tanaka würde höflich lächeln und das Glas stehen lassen.' },
      ]
    },
    {
      id: 'pref_3_6', guestId: 'bergmann', mood: '👔',
      scenario: 'Herr Bergmann, inzwischen im Maßanzug statt Bergmannskluft, grinst verlegen: "Mensch, als ich das erste Mal hier war, hab ich noch nach Radler gefragt. Heute will ich einen Roten, der zeigt, dass sich die Reise gelohnt hat. Etwas aus Frankreich – das Beste vom Besten."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'saint_emilion', correct: true, favorite: true, explanation: 'Saint-Émilion Grand Cru – der krönende Beweis für Bergmanns Weinreise! Von der Imbissbude zum Bordeaux-Genießer. Chapeau, Herr Bergmann!' },
        { wineId: 'barolo', correct: false, explanation: 'Barolo ist großartig, aber aus Italien – Herr Bergmann wollte ausdrücklich Frankreich. Seine Weinreise hat ihn gelehrt, präzise zu bestellen!' },
        { wineId: 'malbec', correct: false, explanation: 'Malbec ist Argentinien, nicht Frankreich. Bergmanns Geschmack hat sich entwickelt, aber die Geografie muss stimmen.' },
      ]
    },
    {
      id: 'pref_3_7', guestId: 'madame_dupont', mood: '🌙',
      scenario: 'Madame Dupont lehnt sich zurück und seufzt ungewohnt sanft: "Heute Abend kein Duell, keine Kritik. Ich möchte einen Wein, der mich an die Sonntagnachmittage meiner Kindheit in der Dordogne erinnert – fruchtig-süß, golden, duftend nach reifen Früchten."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling_spaetlese', correct: true, favorite: true, explanation: 'Riesling Spätlese – golden, duftend nach Pfirsich und Honig, fruchtig-süß. Die sanfte Süße weckt Kindheitserinnerungen, die Säure hält die Nostalgie lebendig.' },
        { wineId: 'chablis_premier_cru', correct: false, explanation: 'Chablis ist trocken und mineralisch – zu streng für Madame Duponts seltenen sentimentalen Moment.' },
        { wineId: 'pinotage', correct: false, explanation: 'Ein rauchiger südafrikanischer Rotwein passt nicht zu goldenen Kindheitserinnerungen in der Dordogne.' },
        { wineId: 'gewuerztraminer', acceptable: true, explanation: 'Gewürztraminer ist halbtrocken und herrlich duftend – fast ein Treffer! Aber sein Duft geht eher Richtung Rosen und Litschi als reife Pfirsiche und Aprikosen; die Riesling Spätlese trifft die goldene Erinnerung genauer.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist trocken, leicht und dezent – keine Spur von golden und reifer Frucht. Für Madames sentimentalen Moment zu nüchtern.' },
      ]
    },
    {
      id: 'pref_3_8', guestId: 'der_bankier', mood: '🏦',
      scenario: 'Der Bankier telefoniert hektisch, legt auf und sagt: "Deal geplatzt. Ich brauche jetzt einen Wein, der nach Gewinner schmeckt – vollmundig, trocken, aus einer Region die für Exzellenz steht. Und zwar sofort."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'saint_emilion', correct: true, favorite: true, explanation: 'Saint-Émilion Grand Cru – Bordeaux ist die Benchmark für Prestige-Wein weltweit. Vollmundig, komplex, ein Statement. Der Bankier wird den nächsten Deal mit neuem Selbstbewusstsein angehen.' },
        { wineId: 'barolo', correct: true, explanation: 'Barolo ist der "König der Weine" und steht absolut für Exzellenz – aber wenn ein Bankier nach Prestige verlangt, ist Bordeaux die Währung, die jeder kennt.' },
        { wineId: 'riesling_spaetlese', correct: false, explanation: 'Restsüß und mittelschwer – nicht das Powerstatement, das der Bankier gerade braucht.' },
        { wineId: 'malbec', acceptable: true, explanation: 'Malbec ist vollmundig und trocken – die Basics stimmen! Aber als Prestige-Statement kann er der Bordeaux-Benchmark nicht das Wasser reichen.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist halbtrocken und unkompliziert – das schmeckt nach Feierabend, nicht nach Gewinner.' },
      ]
    },
    {
      id: 'pref_3_9', guestId: 'kuenstler', mood: '🎨',
      scenario: 'Der Künstler schaut in sein leeres Glas wie in eine Leinwand: "Ich male gerade eine Serie in Schwarz und Dunkelrot. Ich brauche Inspiration – den dunkelsten, intensivsten Rotwein, den Sie haben. Farbe ist Emotion!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'malbec', correct: true, favorite: true, explanation: 'Malbec – tintenschwarz, fast opak, mit Aromen von dunklen Beeren und Schokolade. Eine der dunkelsten Farben aller Rotweine, perfekte Inspiration für die Leinwand!' },
        { wineId: 'pinotage', correct: true, explanation: 'Pinotage ist dunkel und intensiv mit rauchigen Noten – ein starker Charakter. Aber für pure Farbintensität ist Malbec mit seiner fast schwarzen Robe unschlagbar.' },
        { wineId: 'riesling_spaetlese', correct: false, explanation: 'Ein goldgelber Weißwein? Der Künstler malt in Schwarz und Dunkelrot – da braucht er Inspiration im Glas, nicht auf der Palette.' },
        { wineId: 'primitivo', acceptable: true, explanation: 'Primitivo ist dunkel und vollmundig, mit Pflaume und Schokolade – starke Inspiration! Aber für die fast schwarze, tintige Farbe ist Malbec unschlagbar.' },
        { wineId: 'spaetburgunder', correct: false, explanation: 'Spätburgunder ist ein heller, eleganter Roter – eher Aquarell als Schwarz und Dunkelrot. Für diese Serie die falsche Palette.' },
      ]
    },
    {
      id: 'pref_3_10', guestId: 'startup_gruender', mood: '🚀',
      scenario: 'Der Startup-Gründer tippt auf seinem Laptop und bestellt nebenbei: "Ich brauch einen Wein, der disruptiv ist – kein Mainstream, kein Bordeaux, kein Burgund. Etwas, das die Industrie aufgemischt hat. Innovation im Glas!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'pinotage', correct: true, favorite: true, explanation: 'Pinotage – eine im Labor gezüchtete Kreuzung aus Pinot Noir und Cinsault, 1925 in Südafrika erschaffen. Buchstäblich ein Startup unter den Rebsorten: Innovation, die eine ganze Weinnation definiert hat!' },
        { wineId: 'malbec', correct: true, explanation: 'Malbec hat Argentinien auf die Wein-Weltkarte gebracht – ein Game Changer. Aber Pinotage ist noch disruptiver: eine komplett neue Rebsorte, erschaffen durch Kreuzung. Das ist echte Innovation!' },
        { wineId: 'barolo', correct: false, explanation: 'Barolo ist ein jahrhundertealter Klassiker aus dem Piemont – großartig, aber das Gegenteil von disruptiv.' },
      ]
    },
    {
      id: 'pref_3_11', guestId: 'food_bloggerin', mood: '🧀',
      scenario: 'Die Food-Bloggerin plant ihren nächsten Post: "Ich mache eine \'Wine & Cheese Night\' für meinen Blog – mit gereiftem Comté und Roquefort. Ich brauch einen Wein, der beide Käse kann. Was ist Ihr Geheimtipp?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'riesling_spaetlese', correct: true, favorite: true, explanation: 'Riesling Spätlese – die Restsüße umschmeichelt den salzigen Roquefort, die lebendige Säure kontrastiert den nussigen Comté. Ein Geheimtipp, der die Community begeistern wird!' },
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion ist ein eleganter Begleiter zu Käse – aber die Kombination Restsüße + Säure der Riesling Spätlese ist die harmonischere Brücke zwischen den zwei sehr unterschiedlichen Käsesorten.' },
        { wineId: 'pinotage', correct: false, explanation: 'Pinotage mit seinen rauchigen Noten zum feinen Käse? Die Lagerfeuer-Aromatik würde den Roquefort dominieren statt ergänzen.' },
        { wineId: 'gewuerztraminer', acceptable: true, explanation: 'Gewürztraminer mit leichter Restsüße ist ein beliebter Käsebegleiter – aber ihm fehlt die lebendige Säure, die den nussigen Comté kontrastiert. Die Riesling Spätlese kann beide Käse.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist leicht und spritzig – gegen salzigen Roquefort hat er keine Chance. Kein Geheimtipp, eher ein Geheimflop.' },
      ]
    },
    {
      id: 'pref_3_12', guestId: 'weinclub', mood: '🏰',
      scenario: 'Der Weinclub-Vorsitzende richtet sich auf: "Wir veranstalten nächsten Monat einen Themenabend: \'Die großen Rotweine Europas\'. Ich suche den krönenden Abschluss – den König aller europäischen Rotweine. Was sagen Sie?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'barolo', correct: true, favorite: true, explanation: 'Barolo – der "König der Weine und Wein der Könige"! Nebbiolo aus dem Piemont mit enormer Alterungsfähigkeit und Komplexität. Der perfekte krönende Abschluss!' },
        { wineId: 'saint_emilion', correct: true, explanation: 'Saint-Émilion Grand Cru ist zweifellos ein großer europäischer Rotwein – aber als krönenden Abschluss hat Barolo den historischen Titel: "König der Weine" seit dem 19. Jahrhundert.' },
        { wineId: 'malbec', correct: false, explanation: 'Malbec ist ein großartiger Wein, stammt aber in seiner bekanntesten Form aus Argentinien – nicht Europa. Für einen Themenabend "Große Rotweine Europas" keine passende Wahl.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_3_1', guestId: 'der_bankier', mood: '💎',
      statement: 'Der Bankier belehrt seinen Tischnachbarn: "Grand Cru bedeutet, dass der Wein besonders alt ist. Je älter, desto Grand Cru – so einfach ist das."',
      isCorrect: false,
      correction: 'Grand Cru beschreibt die Herkunft, nicht das Alter! Im Burgund und im Elsass ist es die höchste Einstufung eines Weinbergs – Boden und Mikroklima bestimmen den Status, nicht die Reifezeit. In der Champagne werden sogar ganze Gemeinden als Grand Cru eingestuft. (Und in Saint-Émilion ist "Grand Cru" eine eigene Appellation mit strengeren Regeln.)'
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
      correction: 'Malbec stammt ursprünglich aus Cahors in Südwest-Frankreich! Erst im 19. Jahrhundert wurde die Rebe nach Argentinien gebracht – und dort zum Nationalwein. Viele finden heute sogar, dass Argentinien den besseren Malbec macht: In Mendoza stehen die Reben hoch oben am Fuß der Anden – viel Sonne, kühle Nächte, das gibt samtige, tiefdunkle Weine. Die Fans aus Cahors sehen das natürlich anders!'
    },
    {
      id: 'bw_3_4', guestId: 'herr_tanaka', mood: '🪵',
      statement: 'Herr Tanaka nickt bedächtig: "Je mehr Eichenfass-Reifung ein Wein bekommt, desto besser wird er. Mehr Holz ist immer besser."',
      isCorrect: false,
      correction: 'Zu viel Holz überdeckt den Eigencharakter des Weins! Balance ist entscheidend. Ein Chablis z.B. wird bewusst ohne Holz ausgebaut – die Mineralität wäre sonst verloren. "Mehr" ist nicht immer "besser".'
    },
    {
      id: 'bw_3_5', guestId: 'diplomatenpaar', mood: '🌍',
      statement: 'Die Diplomatin wendet sich an ihren Mann: "Schatz, Saint-Émilion ist doch ein reiner Cabernet-Sauvignon-Wein. Das Rechte Ufer von Bordeaux ist berühmt dafür."',
      isCorrect: false,
      correction: 'Umgekehrt! Am Rechten Ufer (Rive Droite) von Bordeaux – wozu Saint-Émilion gehört – dominiert Merlot, nicht Cabernet Sauvignon. Cabernet Sauvignon ist die Hauptrebsorte am Linken Ufer (Médoc, Graves). Ein feiner, aber wichtiger Unterschied!'
    },
    {
      id: 'bw_3_6', guestId: 'weinclub', mood: '🤓',
      statement: 'Der Weinclub-Vorsitzende hebt sein Glas: "Champagner darf nur aus der Champagne kommen – das ist streng geschützt. Alles andere ist Schaumwein, egal wie gut es ist."',
      isCorrect: true,
      correction: 'Absolut korrekt! Die Appellation d\'Origine Contrôlée (AOC) schützt den Namen "Champagner" streng. Nur Schaumwein aus der Region Champagne, hergestellt nach der Méthode Champenoise mit zugelassenen Rebsorten, darf sich so nennen. Selbst identisch hergestellter Schaumwein aus anderen Regionen ist "nur" Crémant oder Sekt.'
    },
    {
      id: 'bw_3_7', guestId: 'die_professorin', mood: '🤓',
      statement: 'Die Professorin schwenkt ihren Wein und sagt: "Wussten Sie, dass Barrique-Fässer dem Wein Vanille-Aromen verleihen? Das kommt vom Toasten des Holzes bei der Fassherstellung."',
      isCorrect: true,
      correction: 'Wissenschaftlich korrekt! Beim Toasten (Erhitzen) der Eichenfässer entsteht der Aromastoff Vanillin – das gleiche Molekül, das auch in der Vanilleschote vorkommt. Je stärker das Toasting, desto intensiver die Vanille-, Karamell- und Röstnoten im Wein. Neues Holz gibt mehr Aromen ab als gebrauchtes.'
    },
    {
      id: 'bw_3_8', guestId: 'kuenstler', mood: '🤓',
      statement: 'Der Künstler betrachtet die Farbe im Glas und philosophiert: "Alte Reben sollen konzentrierteren Wein produzieren. Je älter der Weinstock, desto weniger Trauben, aber desto intensiver der Geschmack."',
      isCorrect: true,
      correction: 'Eine Wahrheit, die Winzer weltweit schätzen! Alte Reben (Vieilles Vignes, ab ca. 30-40 Jahren) haben tiefere Wurzeln und tragen weniger Trauben. Die geringere Menge bedeutet mehr Konzentration von Aromen und Mineralstoffen pro Beere. Manche Reben in der Barossa Valley in Australien sind über 170 Jahre alt!'
    },
    {
      id: 'bw_3_9', guestId: 'startup_gruender', mood: '🤓',
      statement: 'Der Startup-Gründer zeigt auf die Weinkarte und sagt: "Ich hab mal recherchiert: Ein Chablis wird ohne Holzfass-Reifung hergestellt. Deswegen schmeckt er so mineralisch und klar – kein Vanille-Gedöns."',
      isCorrect: true,
      correction: 'Gut recherchiert! Klassischer Chablis wird im Edelstahltank ausgebaut, um die reine Mineralität des Kimmeridge-Kalkbodens zu bewahren. Nur einige Premier und Grand Cru Chablis sehen Eichenfässer – aber auch dann dezent. Der mineralische, "stahlige" Charakter ist das Markenzeichen!'
    },
    {
      id: 'bw_3_10', guestId: 'food_bloggerin', mood: '🤓',
      statement: 'Die Food-Bloggerin tippt auf ihr Handy und erklärt: "Für meinen Blog: In Bordeaux werden fast alle Weine als Cuvée hergestellt – also ein Verschnitt aus mehreren Rebsorten. Reinsortige Bordeaux-Weine sind extrem selten."',
      isCorrect: true,
      correction: 'Das gibt Content! In Bordeaux ist die Assemblage (Verschnitt) tatsächlich die Regel. Am Linken Ufer dominiert Cabernet Sauvignon, ergänzt durch Merlot und Cabernet Franc. Am Rechten Ufer führt Merlot, begleitet von Cabernet Franc. Reinsortige Bordeaux-Weine sind absolute Ausnahmen – die Kunst liegt im Blend!'
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
      question: 'Die Professorin testet dich: "Im Burgund gibt es Grand Cru und Premier Cru – was ist höher eingestuft?"',
      options: [
        { text: 'Grand Cru ist die höchste Stufe', correct: true },
        { text: 'Premier Cru ist höher', correct: false },
        { text: 'Beide sind gleichwertig', correct: false },
        { text: 'Kommt auf den Jahrgang an', correct: false },
      ],
      explanation: 'Grand Cru = "Großes Gewächs" = höchste Stufe! Premier Cru = "Erstes Gewächs" = zweithöchste. Im Burgund gibt es nur 33 Grand Cru Lagen – die besten Weinberge der Welt. Vorsicht: In Bordeaux gelten andere Regeln – dort ist z.B. "Premier Grand Cru Classé" die Spitze.'
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
      explanation: 'Pinotage wurde 1925 an der Universität Stellenbosch in Südafrika gezüchtet – eine Kreuzung aus Pinot Noir und Cinsault. Sie ist bis heute Südafrikas Signature-Rebsorte!'
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
    {
      id: 'ww_3_6', guestId: 'influencerin', mood: '📱',
      question: 'Die Influencerin will ein Quiz für ihre Story machen: "Okay, schnelle Frage für meine Follower – was bedeutet \'Spätlese\' bei deutschem Wein? Ist das spät am Tag gelesen?"',
      options: [
        { text: 'Spät im Herbst geerntete, besonders reife Trauben', correct: true },
        { text: 'Trauben die spät am Tag, bei Sonnenuntergang, gelesen werden', correct: false },
        { text: 'Wein der erst spät, nach Jahren, getrunken werden sollte', correct: false },
        { text: 'Eine Methode bei der die Lese besonders langsam erfolgt', correct: false },
      ],
      explanation: '"Spätlese" bedeutet: Die Trauben werden später als normal geerntet – sie sind dadurch reifer und konzentrierter. Das Mostgewicht – also der Zuckergehalt der Trauben, gemessen in Grad Oechsle – muss dafür einen Mindestwert erreichen, der je nach Anbaugebiet etwas unterschiedlich ist. Der Wein kann trocken oder restsüß sein!'
    },
    {
      id: 'ww_3_7', guestId: 'weinhaendler', mood: '🪵',
      question: 'Der Weinhändler klopft auf den Tisch: "Mein Lieferant bietet mir Barrique-Fässer an – 225 Liter. Was ist der Unterschied zwischen neuem und gebrauchtem Barrique für den Wein?"',
      options: [
        { text: 'Neues Holz gibt mehr Vanille und Röstaromen ab, gebrauchtes ist dezenter', correct: true },
        { text: 'Gebrauchtes Holz macht den Wein süßer als neues', correct: false },
        { text: 'Es gibt keinen geschmacklichen Unterschied', correct: false },
        { text: 'Neues Holz macht den Wein säuerlicher', correct: false },
      ],
      explanation: 'Neues Barrique gibt starke Vanille-, Toast- und Karamellaromen an den Wein ab. Mit jeder Benutzung nehmen diese Aromen ab – ein "3rd fill" Fass ist quasi neutral und dient nur noch der Mikro-Oxidation. Viele Top-Winzer nutzen bewusst eine Mischung aus neuem und gebrauchtem Holz!'
    },
    {
      id: 'ww_3_8', guestId: 'der_komponist', mood: '🧪',
      question: 'Der Komponist betrachtet die Tränen am Glasrand: "Diese Schlieren – manche Weine haben dicke, langsam laufende Tropfen, andere dünne. Was sagt mir das über den Wein?"',
      options: [
        { text: 'Dickere, langsamere Tränen deuten auf höheren Alkohol- oder Zuckergehalt hin', correct: true },
        { text: 'Schnelle Tränen bedeuten höhere Qualität', correct: false },
        { text: 'Die Tränen zeigen das Alter des Weins an', correct: false },
        { text: 'Es ist nur ein optischer Effekt ohne Bedeutung', correct: false },
      ],
      explanation: 'Die "Kirchenfenster" oder "Tränen" entstehen durch den Marangoni-Effekt: Alkohol verdunstet am Glasrand schneller als Wasser, die Oberflächenspannung ändert sich und der Wein fließt in Tropfen zurück. Dickere, langsamere Tränen = mehr Alkohol oder Restzucker. Kein Qualitätsmerkmal, aber ein physikalisches Schauspiel!'
    },
    {
      id: 'ww_3_9', guestId: 'madame_dupont', mood: '🏰',
      question: 'Madame Dupont hebt eine Augenbraue: "Sie haben Chablis auf der Karte. Können Sie mir sagen, was den Boden in Chablis so besonders macht? Ich teste Ihre geologischen Kenntnisse."',
      options: [
        { text: 'Kimmeridge-Kalk mit fossilen Austernschalen aus dem Jura-Zeitalter', correct: true },
        { text: 'Vulkangestein aus dem Tertiär', correct: false },
        { text: 'Roter Sandstein wie in Bordeaux', correct: false },
        { text: 'Schieferböden wie an der Mosel', correct: false },
      ],
      explanation: 'Der Boden in Chablis besteht aus Kimmeridge-Kalkstein – benannt nach Kimmeridge Bay in England. Er entstand im Jura-Zeitalter und enthält fossile Austernschalen, die über 150 Millionen Jahre alt sind. Diese einzigartige Geologie gibt dem Chablis seine berühmte Mineralität und den Hauch von Salz!'
    },
    {
      id: 'ww_3_10', guestId: 'die_professorin', mood: '📊',
      question: 'Die Professorin zückt ihren Notizblock: "Malolaktische Gärung – können Sie mir erklären, was da passiert und warum man das bei manchen Weinen bewusst macht?"',
      options: [
        { text: 'Apfelsäure wird in mildere Milchsäure umgewandelt – macht den Wein weicher', correct: true },
        { text: 'Der Alkohol wird in Zucker zurückverwandelt', correct: false },
        { text: 'Es werden Tannine abgebaut, um den Wein fruchtiger zu machen', correct: false },
        { text: 'Es ist eine zweite alkoholische Gärung zur Erhöhung des Alkoholgehalts', correct: false },
      ],
      explanation: 'Bei der malolaktischen Gärung (auch "biologischer Säureabbau") wandeln Milchsäurebakterien die scharfe Apfelsäure in mildere Milchsäure um. Das macht den Wein weicher und cremiger. Bei Rotweinen fast immer erwünscht, bei Weißweinen situationsabhängig – viele deutsche Rieslinge werden z.B. bewusst OHNE Malo ausgebaut, um die knackige Säure zu bewahren!'
    },
    {
      id: 'ww_3_11', guestId: 'startup_gruender', mood: '🧬',
      question: 'Der Startup-Gründer ist fasziniert: "Moment, Pinotage ist eine Kreuzung? Wie ein Merger zweier Unternehmen! Welche beiden Rebsorten wurden da zusammengebracht?"',
      options: [
        { text: 'Pinot Noir und Cinsault (Hermitage)', correct: true },
        { text: 'Pinot Noir und Cabernet Sauvignon', correct: false },
        { text: 'Syrah und Grenache', correct: false },
        { text: 'Merlot und Cabernet Franc', correct: false },
      ],
      explanation: 'Professor Abraham Izak Perold kreuzte 1925 an der Uni Stellenbosch Pinot Noir mit Cinsault (damals in Südafrika "Hermitage" genannt). Pinot + Hermitage = Pinotage! Das Ergebnis: eine einzigartige Rebsorte mit Rauch, Kaffee und Beerenaromen – ein echter Startup-Erfolg.'
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
        { wineId: 'malbec', correct: true, favorite: true },
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
        { wineId: 'chablis_premier_cru', correct: true, favorite: true },
        { wineId: 'lambrusco', correct: false },
        { wineId: 'primitivo', correct: false },
        { wineId: 'imiglykos', correct: false },
      ],
      explanation: 'Feuerstein + Mineralik + Kreide ohne Holz = Chablis! Die fossilen Austernschalen im Boden (Kimmeridge-Kalk) geben dem Wein seine einzigartige mineralisch-salzige Note.'
    },
    {
      id: 'bt_3_3', guestId: 'weinhaendler', mood: '🔥',
      clues: {
        appearance: 'Kräftiges, dichtes Rubinrot',
        nose: 'Rauch, Kaffee, rote Beeren und ein erdiger, fast rustikaler Unterton',
        palate: 'Mittelschwer, leicht erdig, mit einem typischen "Lagerfeuer"-Charakter'
      },
      options: [
        { wineId: 'pinotage', correct: true, favorite: true },
        { wineId: 'saint_emilion', correct: false },
        { wineId: 'gruener_veltliner', correct: false },
        { wineId: 'chianti', correct: false },
      ],
      explanation: 'Rauch + Kaffee + Erde + "Lagerfeuer" = Pinotage aus Südafrika! Diese Aromen sind typisch für die Rebsorte und machen sie unverwechselbar.'
    },
    {
      id: 'bt_3_4', guestId: 'madame_dupont', mood: '👃',
      clues: {
        appearance: 'Intensives Granatrot mit orangefarbenem Rand – deutet auf Reife und Alterungspotential hin',
        nose: 'Verwelkte Rosen, Teer, dunkle Kirschen, ein Hauch Lakritz und getrocknete Kräuter',
        palate: 'Straffe, körnige Tannine, voller Körper, enorme Länge im Abgang mit Noten von Tabak und Leder'
      },
      options: [
        { wineId: 'barolo', correct: true, favorite: true },
        { wineId: 'saint_emilion', correct: false },
        { wineId: 'malbec', correct: false },
        { wineId: 'pinotage', correct: false },
      ],
      explanation: 'Verwelkte Rosen + Teer + körnige Tannine + orangefarbener Rand = der unverkennbare Barolo! Nebbiolo hat trotz heller Farbe (Granat statt Tiefschwarz) enorme Tanninkraft. Die Rose-Teer-Kombination ist sein Fingerabdruck. "König der Weine, Wein der Könige"!'
    },
    {
      id: 'bt_3_5', guestId: 'der_bankier', mood: '🔍',
      clues: {
        appearance: 'Leuchtendes Strohgold mit leichtem Grünschimmer, erstaunlich viskos für einen Weißwein',
        nose: 'Reifer Pfirsich, Akazienhonig, etwas Quitte und ein feiner mineralischer Unterton',
        palate: 'Fruchtsüß mit lebendiger Säure, mittlerer Körper, langer Abgang mit Honig- und Steinobstnoten'
      },
      options: [
        { wineId: 'riesling_spaetlese', correct: true, favorite: true },
        { wineId: 'chablis_premier_cru', correct: false },
        { wineId: 'barolo', correct: false },
        { wineId: 'pinotage', correct: false },
      ],
      explanation: 'Pfirsich + Honig + Restsüße + lebendige Säure = Riesling Spätlese! Das Zusammenspiel von Restsüße und rassiger Säure ist das Markenzeichen deutscher Spätlese-Rieslinge. Der Chablis wäre trocken und mineralischer, ohne die Honignoten.'
    },
  ],

  beratung: [
    {
      id: 'ber_3_1',
      guestId: 'herr_tanaka',
      mood: '🎎',
      intro: 'Herr Tanaka verbeugt sich leicht und senkt die Stimme. "Meine Frau kommt heute Abend aus Kyoto. Wir feiern 25 Jahre Ehe. Ich habe den Steinbutt vorbestellt. Nun fehlt nur noch der Wein – und ich möchte, dass er dem Abend gerecht wird."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Wie wird der Steinbutt zubereitet?"', good: true, bonusTip: 2, guestResponse: '"Nur in Butter gebraten, mit etwas Zitrone und Meersalz. Meine Frau sagt: Ein gutes Produkt braucht keine Verkleidung. Ich habe nach 25 Jahren gelernt, ihr zuzustimmen."' },
            { text: '"Japaner trinken doch eigentlich lieber Sake, oder?"', good: false, bonusTip: 0, guestResponse: 'Er lächelt geduldig. "In Japan sagt man: Der Frosch im Brunnen kennt das große Meer nicht. Ich bin hier, um Wein zu trinken."' },
            { text: '"Trinkt Ihre Frau lieber trocken oder mit etwas Süße?"', good: true, bonusTip: 1, guestResponse: '"Trocken. Klar wie das Wasser im Kamo-Fluss im Winter. Süße bei Wein findet sie... unaufrichtig."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Mögen Sie Weine aus dem Holzfass – mit Vanille und Toast – oder lieber pur aus dem Stahltank?"', good: true, bonusTip: 2, guestResponse: '"Kein Holz. In unserem Garten liegt ein Stein, seit 400 Jahren am selben Platz. So soll der Wein schmecken: nach Stein und nach Zeit. Nicht nach Möbeln."' },
            { text: '"Soll ich Ihnen einfach unseren Hauswein bringen?"', good: false, bonusTip: 0, guestResponse: '"Am 25. Hochzeitstag?" Er schweigt einen Moment. "Ich glaube, dann bleibt meine Frau lieber gleich in Kyoto."' },
            { text: '"Soll der Wein eher schlank sein oder etwas mehr Tiefe haben?"', good: true, bonusTip: 1, guestResponse: '"Tiefe, bitte. Aber leise Tiefe – wie eine Teezeremonie, nicht wie ein Feuerwerk. Und er soll das Meer kennen."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'chablis_premier_cru', correct: true, favorite: true, explanation: 'Vollendet! Chablis Premier Cru ist Chardonnay ohne Holz – reine Frucht, Zitrus, Feuerstein und Mineralik. Die Kalkböden von Chablis stecken voller fossiler Austernschalen: ein Wein, der "das Meer kennt". Trocken, klar, mit leiser Tiefe – zu Steinbutt in Butter ideal. Herr Tanaka verbeugt sich tiefer als sonst.' },
            { wineId: 'riesling', correct: true, explanation: 'Trockener Riesling ist klar, mineralisch und ohne Holz – ein schöner Fischbegleiter. Für die Silberhochzeit fehlt ihm aber etwas von der "leisen Tiefe" einer Premier-Cru-Lage, und die Meeres-Geschichte erzählt der Chablis besser.' },
            { wineId: 'pinot_grigio', acceptable: true, explanation: 'Pinot Grigio ist leicht, trocken und passt zu Fisch – aber er ist eher schlicht und unkompliziert. Die gewünschte Tiefe und das Terroir-Gefühl "nach Stein und Zeit" bietet er kaum.' },
            { wineId: 'gewuerztraminer', correct: false, explanation: 'Gewürztraminer duftet intensiv nach Litschi und Rosen und ist halbtrocken – "ein Feuerwerk", nicht die Teezeremonie. Er überdeckt den zarten Steinbutt, und Frau Tanaka wollte trocken.' },
            { wineId: 'rioja_crianza', correct: false, explanation: 'Rioja Crianza reift im Holzfass – Vanille und Holz sind genau die "Möbel", die Herr Tanaka nicht schmecken will. Dazu ein Rotwein zu zartem Fisch in Butter: Das passt nicht.' },
          ],
        },
      ],
      summary: 'Holz oder Stahl macht einen riesigen Unterschied: Ohne Holzfass zeigt ein Wein pur, was Rebsorte und Boden mitbringen. Chablis ist das Paradebeispiel – Chardonnay auf Kalkstein, mineralisch statt vanillig. So schmeckt Terroir.',
    },
    {
      id: 'ber_3_2',
      guestId: 'madame_dupont',
      mood: '🎂',
      intro: 'Madame Dupont erscheint ungewohnt nervös, in Begleitung einer zierlichen alten Dame mit Perlenkette. "Darf ich vorstellen: Maman. Sie wird heute neunzig. Und bevor Sie fragen – ja, sie ist noch strenger als ich. Ich verlasse mich auf Sie. Enttäuschen Sie uns nicht."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was haben die Damen denn bestellt?"', good: true, bonusTip: 2, guestResponse: '"Rinderfilet, rosa, mit Trüffeljus und Kartoffelgratin. Maman sagt, mit neunzig darf man sich Trüffel gönnen. Mit achtzig übrigens auch. Und mit siebzig."' },
            { text: '"Ist ein kräftiger Wein in Ihrem Alter nicht etwas schwer?"', good: false, bonusTip: 0, guestResponse: '"PARDON?!" Madame Dupont erstarrt. Maman lacht trocken: "Junger Mann, ich trinke seit siebzig Jahren jeden Abend mein Glas Rotwein. Ich habe drei Ärzte überlebt."' },
            { text: '"Woher stammt Ihre Familie denn ursprünglich?"', good: true, bonusTip: 1, guestResponse: '"Maman ist in der Gironde aufgewachsen, zwischen Weinbergen und alten Kirchtürmen. Bei ihr zu Hause stand nie etwas anderes als Bordeaux auf dem Tisch."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein aus einer einzigen Rebsorte sein – oder eine Cuvée?"', good: true, bonusTip: 2, guestResponse: '"Eine Assemblage, natürlich!" Maman nickt. "Ein Wein aus einer Traube ist ein Solo. Eine Cuvée ist ein Orchester. Und Merlot muss dabei sein – ich liebe seine Weichheit."' },
            { text: '"Wie wäre es zur Abwechslung mit etwas aus der Neuen Welt?"', good: false, bonusTip: 0, guestResponse: '"Neue Welt? Für Maman?" Madame Dupont schüttelt den Kopf. "Sie hält schon Paris für Neue Welt."' },
            { text: '"Soll der Wein jung und fruchtig sein oder gereift und vielschichtig?"', good: true, bonusTip: 1, guestResponse: '"Vielschichtig", sagt Maman. "Zeder, Tabak, dunkle Beeren – wie das Arbeitszimmer meines Vaters. Ich will mich erinnern, nicht überrascht werden."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'saint_emilion', correct: true, favorite: true, explanation: 'Magnifique! Saint-Émilion Grand Cru vom rechten Bordeaux-Ufer ist eine Cuvée aus Merlot und Cabernet Franc – das "Orchester" mit Mamans geliebter Merlot-Weichheit. Cassis, Zeder und Tabak, ein Klassiker zu Rinderfilet und Trüffel. Und ein Stück Heimat aus der Gironde. Maman hebt das Glas: "Enfin – jemand, der zuhört."' },
            { wineId: 'barolo', correct: true, explanation: 'Barolo und Trüffel – ein großes Paar, und kräftig genug fürs Filet. Aber Barolo ist reinsortiger Nebbiolo mit straffen Tanninen, ein "Solo" statt eines Orchesters, und dazu Italiener. Maman wollte Merlot-Weichheit und Bordeaux-Heimat.' },
            { wineId: 'malbec', acceptable: true, explanation: 'Interessanter Gedanke: Malbec stammt ursprünglich aus Cahors in Südwestfrankreich und passt gut zu Rind. Aber dieser hier kommt aus Argentinien, ist reinsortig und eher fruchtbetont – "Neue Welt" und kein Orchester. Maman runzelt die Stirn.' },
            { wineId: 'riesling_spaetlese', correct: false, explanation: 'Eine restsüße Riesling Spätlese zu Rinderfilet mit Trüffeljus? Die Süße beißt sich mit dem Fleisch, und die Bordeaux-Tochter aus der Gironde wollte ganz sicher keinen Weißwein. Maman bestellt demonstrativ Wasser.' },
          ],
        },
      ],
      summary: 'Eine Cuvée vereint mehrere Rebsorten, die sich ergänzen – in Saint-Émilion meist Merlot und Cabernet Franc. Wer Herkunft, gewünschten Stil und Gericht zusammenbringt, findet nicht nur einen passenden Wein, sondern ein Stück Heimat im Glas.',
    },
    {
      id: 'ber_3_3',
      guestId: 'die_professorin',
      mood: '🪨',
      intro: 'Die Professorin legt einen Ordner mit der Aufschrift "Emeritierung Hartmann" auf den Tisch. "Mein Kollege geht nach 40 Jahren in den Ruhestand. Ich organisiere das Abschiedsessen für zwölf Personen. Er ist Geologe – und der kritischste Weintrinker, den ich kenne. Ich brauche eine wissenschaftlich fundierte Empfehlung."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was steht denn auf dem Menü?"', good: true, bonusTip: 2, guestResponse: '"Wildschweinragout, sechs Stunden geschmort, mit Pappardelle und Steinpilzen. Kräftig, dunkel, erdig. Sein Leibgericht."' },
            { text: '"Ein Geologe? Dann schenken Sie ihm doch einfach einen schönen Stein, haha."', good: false, bonusTip: 0, guestResponse: '"Sehr witzig. Er hat bereits 3.000 Steine. Katalogisiert." Sie rückt ihre Brille zurecht. "Konzentrieren wir uns bitte auf den Wein."' },
            { text: '"Erzählen Sie mir ein bisschen von Ihrem Kollegen?"', good: true, bonusTip: 1, guestResponse: '"Professor Hartmann hat in den Achtzigern die Mergelböden der Langhe im Piemont kartiert. Seitdem spricht er bei jeder Gelegenheit davon. Wirklich bei JEDER."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein zeigen, was lange Reifung bewirkt?"', good: true, bonusTip: 2, guestResponse: '"Exakt! 40 Jahre Forschung – da will ich keinen Wein, der letzten Sommer noch Traube war. Jahre im Fass und in der Flasche. Teer, Leder, getrocknete Rosen. Zeit im Glas."' },
            { text: '"Darf ich Ihnen einfach unseren meistverkauften Wein bringen?"', good: false, bonusTip: 0, guestResponse: '"Popularität ist kein wissenschaftliches Kriterium. Bitte argumentieren Sie – Sie sind doch der Experte."' },
            { text: '"Mag Ihr Kollege kräftige Tannine?"', good: true, bonusTip: 1, guestResponse: '"Er sagt immer: Tannin ist wie Gestein. Am Anfang hart, aber mit der Zeit schleift es sich ab. Also ja – er mag Struktur."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'barolo', correct: true, favorite: true, explanation: 'Q.e.d.! Barolo aus Nebbiolo wächst genau auf den Böden der Langhe, die Professor Hartmann kartiert hat. Er muss mindestens 38 Monate reifen, davon 18 im Holzfass – Teer, Rosen, Kirsche, Lakritz und kräftige Tannine. Zu Wildragout mit Steinpilzen ein Klassiker. Hartmann wird den ganzen Abend über Mergel reden. Mit Begeisterung.' },
            { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza ist eine gute, begründbare Wahl: mindestens 24 Monate gereift, davon 12 im Fass, Vanille und Kirsche, passt zu Wild und Schmorgerichten. Aber die Reife ist kürzer als beim Barolo – und mit den Böden der Langhe hat er nichts zu tun.' },
            { wineId: 'primitivo', correct: true, explanation: 'Primitivo passt zu Wild: vollmundig, Pflaume und Gewürze. Aber er setzt auf reife Frucht aus warmem Klima statt auf Struktur und Reifearomen wie Teer und Leder. Für den Mergel-Experten fehlt die Geschichte.' },
            { wineId: 'spaetburgunder', acceptable: true, explanation: 'Spätburgunder ist elegant, erdig und passt zu Pilzen. Aber zu sechs Stunden geschmortem Wildschwein ist er eher zart, und kräftige Tannine sowie lange Reife – das, was Hartmann sucht – bringt er kaum mit.' },
            { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist das Gegenteil von "Zeit im Glas": Er wird jung und frisch getrunken. Ein leichter, spritziger Weißwein zu Wildragout? Die Professorin notiert: "Hypothese verworfen."' },
          ],
        },
      ],
      summary: 'Terroir und Weinbereitung erzählen gemeinsam die Geschichte eines Weins: Barolo verbindet die Böden der Langhe mit langer Reifung im Fass und in der Flasche. Manche Weine brauchen Jahre – andere, wie Vinho Verde, trinkt man jung.',
    },
    {
      id: 'ber_3_4',
      guestId: 'lisa',
      mood: '🍛',
      intro: 'Lisa hat heute frei und sitzt ausnahmsweise auf der Gästeseite. Sie grinst etwas verlegen. "Chef, ich bräuchte mal deinen Rat – privat. Ich koche Samstag für meine Eltern. Zum ersten Mal, seit ich hier arbeite. Die erwarten jetzt natürlich, dass ich ein Weinprofi bin..."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was kochst du denn?"', good: true, bonusTip: 2, guestResponse: '"Rotes Thai-Curry mit Garnelen, Kokosmilch und Thai-Basilikum. Das hab ich im Urlaub in Bangkok gelernt. Ziemlich scharf – Papa will Feuer."' },
            { text: '"Zu Curry? Da trinkt man doch eh Bier oder Mango-Lassi."', good: false, bonusTip: 0, guestResponse: '"Danke, Chef. Und wofür hab ich dann die ganzen Lektionen über Terroir gepaukt?" Sie verschränkt die Arme. "Komm schon, hilf mir."' },
            { text: '"Wie scharf wird es denn?"', good: true, bonusTip: 1, guestResponse: '"Für Papa nie scharf genug. Mama trinkt allerdings schon bei Paprikachips ein Glas Wasser. Der Wein muss also irgendwie beide retten."' },
          ],
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Darf der Wein etwas Restsüße haben – gegen die Schärfe?"', good: true, bonusTip: 2, guestResponse: '"Ohhh – stimmt ja! Restsüße zähmt Schärfe." Sie schlägt sich an die Stirn. "Ja, bitte! Aber mit Säure, sonst wird es klebrig. Mama hasst klebrig."' },
            { text: '"Nimm einfach den teuersten, dann sind deine Eltern beeindruckt."', good: false, bonusTip: 0, guestResponse: '"Das wäre dann wohl der Barolo. Zum Thai-Curry." Sie hebt eine Augenbraue. "Chef. Ernsthaft?"' },
            { text: '"Mögen deine Eltern eher fruchtige oder eher blumige Aromen?"', good: true, bonusTip: 1, guestResponse: '"Fruchtig! Pfirsich, Aprikose... Mama kocht jeden Sommer Aprikosenmarmelade. Blumig mag sie eher bei Seife."' },
          ],
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'riesling_spaetlese', correct: true, favorite: true, explanation: 'Genau das! Die Riesling Spätlese ist restsüß – das zähmt die Schärfe – und hat die typische Riesling-Säure, damit nichts klebt. Pfirsich, Aprikose, Honig: Mamas Marmeladen-Aromen im Glas. Und Lisa kann erzählen, dass "Spätlese" eine Prädikatsstufe ist – die Trauben hängen länger am Stock und werden reifer.' },
            { wineId: 'gewuerztraminer', correct: true, explanation: 'Gewürztraminer ist ein Klassiker zur asiatischen Küche – halbtrocken, intensiv, kommt gut mit Würze klar. Aber seine Aromen sind Litschi und Rosenblüte, also eher blumig – und blumig mag Mama "eher bei Seife". Die Spätlese trifft den Geschmack der Eltern besser.' },
            { wineId: 'pinot_grigio', acceptable: true, explanation: 'Pinot Grigio ist leicht und passt zu Garnelen. Aber er ist trocken – ohne Restsüße brennt das Curry bei Mama weiter, und gegen die kräftigen Aromen bleibt er recht blass.' },
            { wineId: 'barolo', correct: false, explanation: 'Kräftige Tannine plus Alkohol plus Chili – das verstärkt die Schärfe, und das Feuer brennt doppelt. Dazu erschlägt der mächtige Barolo die zarten Garnelen. Lisa hatte recht: Chef, ernsthaft?' },
          ],
        },
      ],
      summary: 'Bei scharfem Essen hilft Restsüße, Tannin und Alkohol machen es schlimmer. Deutsche Prädikate wie die Spätlese sagen dir, wie reif die Trauben bei der Lese waren – reifere Trauben bringen mehr Aroma und oft mehr Süße.',
    },
  ],
};
