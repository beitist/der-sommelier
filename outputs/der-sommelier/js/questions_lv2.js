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
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Die Klassiker-Paarung! Grüner Veltliner mit seiner Pfeffrigkeit und Frische schneidet durch das knusprige Schnitzel perfekt.' },
        { wineId: 'riesling', correct: true, explanation: 'Riesling funktioniert auch – die knackige Säure schneidet durch die Panade. Nicht ganz so klassisch wie Veltliner, aber solide!' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist süßlich – zum panierten Schnitzel mit Zitrone passt eher ein trockener Weißer.' },
      ]
    },
    {
      id: 'fp_2_2', guestId: 'der_jaeger', mood: '🦌',
      scenario: 'Der Jäger legt seinen Hut an die Garderobe und sagt: "Heute gibt\'s Rehbraten mit Preiselbeeren und Knödeln – hab das Reh selbst erlegt! Dazu brauch ich einen kräftigen Roten aus der Region."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'zweigelt', correct: true, favorite: true, explanation: 'Zweigelt – kirschfruchtig mit weichen Tanninen. Aus Österreich, passt wunderbar zu Wild mit Preiselbeeren!' },
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder zum Reh ist ein Klassiker – die feinen Beerenaromen ergänzen das Wild elegant. Nicht ganz so regional wie Zweigelt, aber ein Profi-Pairing!' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist zu leicht für Wild. Zum Reh braucht es einen Roten mit Substanz.' },
        { wineId: 'rioja_crianza', acceptable: true, explanation: 'Rioja hat die Kraft fürs Wild, keine Frage – aber der Jäger wollte "aus der Region". Ein spanischer Crianza ist nicht gerade die Nachbarschaft. Der Zweigelt aus Österreich trifft den Wunsch besser.' },
      ]
    },
    {
      id: 'fp_2_3', guestId: 'brautpaar', mood: '💒',
      scenario: 'Das Brautpaar probt ihr Hochzeitsmenü. "Als Vorspeise nehmen wir Lachs auf Blattspinat," sagt sie aufgeregt. "Dazu brauchen wir etwas Elegantes – es soll ja perfekt werden für den großen Tag!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'cremant', correct: true, favorite: true, explanation: 'Crémant d\'Alsace – elegant, prickelnd und erschwinglich. Perfekt zur festlichen Vorspeise und zum Budget einer Hochzeit!' },
        { wineId: 'pinot_grigio', correct: true, explanation: 'Pinot Grigio zum Lachs ist solide – leicht und trocken, ergänzt den Fisch gut. Aber für eine Hochzeit fehlt das gewisse Prickeln!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder zum Hochzeitsmenü? Etwas Eleganteres muss schon sein!' },
      ]
    },
    {
      id: 'fp_2_4', guestId: 'der_pfarrer', mood: '⛪',
      scenario: 'Der Pfarrer lässt sich nieder und bestellt Sauerbraten mit Klößen. Er lächelt wissend: "Frau Lindner macht den besten Sauerbraten im Ort. Dazu bräuchte ich einen guten Roten – nicht zu jung, mit etwas Reife."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rioja_crianza', correct: true, favorite: true, explanation: 'Rioja Crianza – mit Vanillenoten vom Eichenfass und reifen Kirscharomen. Genau die Reife, die zum Sauerbraten passt!' },
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder zum Sauerbraten – ein bewährtes deutsches Pairing! Die Frucht harmoniert mit der Soße, aber ihm fehlt die Fassreife, die der Pfarrer sich wünscht.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum Sauerbraten? Der Harzgeschmack würde alles erschlagen.' },
        { wineId: 'zweigelt', acceptable: true, explanation: 'Zweigelt ist ein solider Roter zum Braten – kirschfruchtig und saftig. Aber dem Pfarrer fehlt die Fassreife: Vanille, Eiche, die Patina eines gereiften Weins. Da hat der Rioja Crianza die Nase vorn.' },
      ]
    },
    {
      id: 'fp_2_5', guestId: 'wandergruppe', mood: '🥾',
      scenario: 'Die Wandergruppe kommt herein, die Wangen rot vom Wind. "Eine große Vesperplatte für alle bitte! Schinken, Käse, Essiggurken, Bauernbrot." Sie wollen einen leichten Weißwein, der zum Vesper passt.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gewuerztraminer', correct: true, favorite: true, explanation: 'Gewürztraminer – aromatisch, leicht halbtrocken, passt großartig zu Schinken und Käse. Ein Klassiker zum Vesper!' },
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Grüner Veltliner zur Vesperplatte ist eine gute Wahl – pfeffrig und frisch zu Schinken und Käse. Aber der Gewürztraminer hat mehr Aromenschmelz zum Vesper!' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist gut, aber die Gruppe wollte ausdrücklich einen Weißen.' },
      ]
    },
    {
      id: 'fp_2_6', guestId: 'austauschschuelerin', mood: '🇫🇷',
      scenario: 'Die französische Austauschschülerin seufzt nostalgisch: "In Frankreich essen wir immer Fisch mit Wein... Haben Sie Wolfsbarsch? Und etwas Leichtes, Frisches dazu – wie zu Hause am Meer?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'vinho_verde', correct: true, favorite: true, explanation: 'Vinho Verde – leicht, frisch, mit einer Spur Spritzigkeit. Wie eine Meeresbrise zum Wolfsbarsch! Die Austauschschülerin wäre begeistert.' },
        { wineId: 'pinot_grigio', correct: true, explanation: 'Pinot Grigio zum Wolfsbarsch funktioniert – leicht, trocken, dezent. Aber ihm fehlt die maritime Spritzigkeit des Vinho Verde, die sie von zu Hause kennt!' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist süßlich – zur Meeresküche passt ein trockener, frischer Weißer besser.' },
      ]
    },
    {
      id: 'fp_2_7', guestId: 'frau_doktor', mood: '🍽️',
      scenario: 'Frau Doktor hat heute ihren freien Tag und gönnt sich Schweinebraten mit Semmelknödeln und Blaukraut. "Nach einer Woche Klinik brauche ich Soulfood! Und einen passenden Roten – nicht zu leicht, der soll zum Braten stehen können."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'zweigelt', correct: true, favorite: true, explanation: 'Zweigelt – kirschfruchtig, mittelschwer, mit sanften Tanninen. Passt wunderbar zum deftigen Schweinebraten ohne ihn zu erschlagen!' },
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder zum Schweinebraten ist vertretbar – elegante Frucht trifft deftiges Fleisch. Aber der Zweigelt hat mehr Schmelz für Knödel und Blaukraut!' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist leicht und spritzig – nichts für Soulfood mit Knödeln und Blaukraut.' },
      ]
    },
    {
      id: 'fp_2_8', guestId: 'der_jaeger', mood: '🦌',
      scenario: 'Der Jäger hat heute Abend Besuch aus dem Nachbarrevier. "Mein Kumpel bringt selbstgemachte Chorizo und Manchego-Käse mit – der war letzten Herbst in Spanien auf der Jagd. Dazu brauch ich einen Roten, der da mithalten kann!"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'rioja_crianza', correct: true, favorite: true, explanation: 'Rioja Crianza zu Chorizo und Manchego – spanischer geht\'s nicht! Die Vanille- und Kirschnoten harmonieren perfekt mit der würzigen Wurst und dem kräftigen Käse.' },
        { wineId: 'zweigelt', correct: true, explanation: 'Zweigelt ist ein solider Roter zu Wurst und Käse – kirschfruchtig und mittelschwer. Aber zur spanischen Platte fehlt ihm das passende Terroir. Rioja wäre die authentischere Wahl!' },
        { wineId: 'cremant', correct: false, explanation: 'Crémant ist prickelnd und leicht – zur rustikalen Chorizo-Manchego-Platte unter Jägern braucht es einen kräftigen Roten mit Charakter.' },
      ]
    },
    {
      id: 'fp_2_9', guestId: 'buergermeister', mood: '🍜',
      scenario: 'Der Bürgermeister kommt vom Asia-Imbiss nebenan – aber der hatte zu. "Also bestelle ich hier das Thai-Curry, das Frau Lindner neuerdings auf der Karte hat. Scharf, mit Kokosmilch und Zitronengras. Dazu brauche ich einen Wein, der mit der Schärfe klarkommt!"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'gewuerztraminer', correct: true, favorite: true, explanation: 'Gewürztraminer ist DER Asia-Wein! Die exotische Frucht und die leichte Restsüße bändigen die Schärfe, und die Litschi-Aromen ergänzen die Kokosmilch wunderbar.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist zu neutral und leicht für ein scharfes Thai-Curry – die Schärfe würde den Wein überrollen.' },
        { wineId: 'rioja_crianza', correct: false, explanation: 'Rotwein und scharfes Curry ist keine gute Idee – die Tannine verstärken die Schärfe und der Alkohol brennt zusätzlich. Hier braucht es einen aromatischen Weißen!' },
        { wineId: 'vinho_verde', acceptable: true, explanation: 'Vinho Verde ist leicht und frisch – er verstärkt die Schärfe zumindest nicht. Aber ihm fehlen die exotischen Aromen, die das Curry wirklich ergänzen. Der Gewürztraminer spielt hier in einer anderen Liga.' },
      ]
    },
    {
      id: 'fp_2_10', guestId: 'der_pfarrer', mood: '🐟',
      scenario: 'Der Pfarrer seufzt fromm: "Heute ist Freitag – Fischtag! Frau Lindner macht mir eine Forelle Müllerin mit Mandelbutter und Petersilienkartoffeln. Dazu etwas Leichtes, Feines bitte – die Forelle ist ein zartes Geschöpf."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'pinot_grigio', correct: true, favorite: true, explanation: 'Pinot Grigio – dezent, trocken, mit feinen Mandel- und Zitrusnoten. Ergänzt die Mandelbutter der Forelle perfekt, ohne den zarten Fisch zu übertönen!' },
        { wineId: 'vinho_verde', correct: true, explanation: 'Vinho Verde zur Forelle ist frisch und leicht – die Spritzigkeit passt gut zum Fisch. Aber die Mandelnoten des Pinot Grigio harmonieren noch besser mit der Mandelbutter!' },
        { wineId: 'zweigelt', correct: false, explanation: 'Zweigelt zur zarten Forelle? Die Kirschfrucht und die Tannine würden den feinen Fisch erschlagen. Freitags wird weiß getrunken, Herr Pfarrer!' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_2_1', guestId: 'frau_doktor', mood: '🥂',
      scenario: 'Frau Doktor feiert eine erfolgreiche OP. "Ich hätte gern etwas Spritziges zum Aperitif – aber nicht zu teuer. Es soll festlich sein, aber ich bin ja nicht aus Geld gemacht!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'cremant', correct: true, favorite: true, explanation: 'Crémant – gleiche Methode wie Champagner, halber Preis! Festlich, elegant, bezahlbar.' },
        { wineId: 'sekt', correct: true, explanation: 'Deutscher Sekt ist auch prickelnd und festlich – aber Crémant hat etwas mehr Eleganz und französisches Flair für den Anlass!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist weder prickelnd noch festlich genug für diesen Anlass.' },
      ]
    },
    {
      id: 'pref_2_2', guestId: 'oma_hildegard', mood: '🌸',
      scenario: 'Oma Hildegard möchte mal was Neues probieren: "Kindchen, ich hab gehört, es gibt Weißweine, die richtig nach Blumen und Gewürzen duften. Haben Sie sowas? Darf auch halbtrocken sein."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gewuerztraminer', correct: true, favorite: true, explanation: 'Gewürztraminer – der duftintensivste Weißwein überhaupt! Litschi, Rosenblüte, Gewürze. Genau was Oma Hildegard sucht.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling ist frisch und zitrusbetont, aber nicht der blumig-aromatische Typ, den sie meint.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist eher neutral und dezent – wenig Duft und Blume.' },
      ]
    },
    {
      id: 'pref_2_3', guestId: 'brautpaar', mood: '💍',
      scenario: '"Wir feiern unsere Silberhochzeit!" Das Paar strahlt. "25 Jahre zusammen – da muss etwas Besonderes her. Etwas Edles zum Anstoßen, aber es muss nicht Champagner sein."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'cremant', correct: true, favorite: true, explanation: 'Crémant – edle Flaschengärung, festliche Perlage. Champagner-Qualität zum vernünftigen Preis für den besonderen Anlass!' },
        { wineId: 'sekt', correct: true, explanation: 'Deutscher Sekt prickelt auch festlich – aber für 25 Jahre Ehe darf es das französische Upgrade sein!' },
        { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos zum Jubiläum? Da muss schon etwas mehr Eleganz her.' },
      ]
    },
    {
      id: 'pref_2_4', guestId: 'buergermeister', mood: '🏛️',
      scenario: 'Der Bürgermeister empfängt den Partnerstadtrat aus Spanien. "Wir brauchen einen kräftigen Roten, der auch zum Käse passt. Etwas, das unseren spanischen Gästen Respekt zeigt!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rioja_crianza', correct: true, favorite: true, explanation: 'Rioja Crianza – ein spanischer Klassiker! Das zeigt Respekt vor den Gästen und passt hervorragend zu Käse.' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist portugiesisch und leicht – weder kräftig noch eine Ehrerbietung an Spanien.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Ein französischer Rosé für spanische Gäste? Da gibt es bessere diplomatische Optionen.' },
      ]
    },
    {
      id: 'pref_2_5', guestId: 'der_jaeger', mood: '🌲',
      scenario: 'Der Jäger lehnt sich zurück und seufzt zufrieden: "Heute kein Wild – heute will ich einfach nur einen guten Roten trinken. Kräftig, mit Charakter, aus einem warmen Land. Etwas für den Feierabend nach dem Ansitz."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rioja_crianza', correct: true, favorite: true, explanation: 'Rioja Crianza – gereift, kräftig, mit warmen Vanille- und Kirscharomen. Genau der Feierabend-Wein für einen Jäger mit Geschmack!' },
        { wineId: 'primitivo', correct: true, explanation: 'Primitivo aus dem warmen Apulien – kraftvoll, mit Pflaume und Schokolade. Hat Charakter! Aber die Rioja-Reife trifft den Wunsch noch besser.' },
        { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist ein milder Weißer – der Jäger will einen kräftigen Roten.' },
      ]
    },
    {
      id: 'pref_2_6', guestId: 'wandergruppe', mood: '☀️',
      scenario: 'Die Wandergruppe sitzt auf der Terrasse in der Nachmittagssonne. "Wir brauchen was zum Durstlöschen! Leicht, frisch, erfrischend – wir haben heute 18 Kilometer in der Hitze hinter uns. Am besten etwas mit wenig Alkohol."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'vinho_verde', correct: true, favorite: true, explanation: 'Vinho Verde – leicht, spritzig, mit nur ca. 9% Alkohol. Wie eine kühle Brise nach einer langen Wanderung! Die feine Kohlensäure erfrischt perfekt.' },
        { wineId: 'pinot_grigio', correct: true, explanation: 'Pinot Grigio ist auch leicht und trocken – passt als Durstlöscher. Aber dem Vinho Verde kann in Sachen Spritzigkeit und Frische niemand das Wasser reichen!' },
        { wineId: 'rioja_crianza', correct: false, explanation: 'Rioja Crianza nach 18 Kilometern in der Hitze? Der kräftige Rote mit Vanillenoten ist eher was für den Winterabend – nicht für verschwitzte Wanderer auf der Terrasse.' },
      ]
    },
    {
      id: 'pref_2_7', guestId: 'oma_hildegard', mood: '🎄',
      scenario: 'Oma Hildegard plant voraus: "Kindchen, Weihnachten steht vor der Tür! Ich mache Gänsebraten mit Rotkohl und Klößen. Welchen Wein soll ich meinem Schwiegersohn mitbringen? Der trinkt nur Rotwein und mag keine dünnen Weine."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'zweigelt', correct: true, favorite: true, explanation: 'Zweigelt – kirschfruchtig, mittelschwer bis kräftig, mit weichen Tanninen. Perfekt zur fetten Gans! Die Frucht ergänzt das Rotkohl, und die Substanz überzeugt den Schwiegersohn.' },
        { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza ist auch ein würdiger Begleiter zur Weihnachtsgans – kräftig und gereift. Aber die österreichische Kirschfrucht des Zweigelt harmoniert noch besser mit dem Rotkohl!' },
        { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde zum Gänsebraten? Der leichte, spritzig-frische Weißwein geht neben der fetten Gans völlig unter. Der Schwiegersohn wäre enttäuscht!' },
      ]
    },
    {
      id: 'pref_2_8', guestId: 'austauschschuelerin', mood: '🧀',
      scenario: 'Die Austauschschülerin schwärmt: "In Frankreich machen wir immer \'Apéro\' – Käse, Oliven, ein bisschen Schinken, und dazu einen leichten Wein. Können wir das hier auch machen? Etwas Mediterranes, Unkompliziertes!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'vinho_verde', correct: true, favorite: true, explanation: 'Vinho Verde – leicht, frisch, mediterran. Perfekt zum Apéro mit Käse und Oliven! Die zarte Spritzigkeit und die Limetten-Aromen passen wunderbar zum lockeren Nachmittags-Snack.' },
        { wineId: 'cremant', correct: true, explanation: 'Crémant zum Apéro ist klassisch französisch und elegant – die Austauschschülerin würde sich wie zu Hause fühlen. Aber für den unkomplizierten Nachmittag ist Vinho Verde noch lockerer!' },
        { wineId: 'zweigelt', correct: false, explanation: 'Zweigelt zum leichten Apéro mit Käse und Oliven? Der kräftige Rote ist zu viel des Guten für einen sonnigen Nachmittags-Snack im mediterranen Stil.' },
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
    {
      id: 'bw_2_5', guestId: 'oma_hildegard', mood: '👵',
      statement: 'Oma Hildegard tippt auf ihr Glas Gewürztraminer: "Kindchen, das schmeckt so blumig – da sind bestimmt Rosenblüten mit reingekommen beim Keltern. Früher hat man das so gemacht!"',
      isCorrect: false,
      correction: 'Die Rosen- und Blütenaromen im Gewürztraminer sind natürliche Aromastoffe der Traube! Terpene heißen diese Verbindungen – sie entstehen in der Beerenhaut und sind genetisch bedingt. Da kommt kein einziges Blütenblatt in den Wein!'
    },
    {
      id: 'bw_2_6', guestId: 'brautpaar', mood: '🤓',
      statement: 'Die Braut sagt zu ihrem Verlobten: "Mein Onkel sagt, süßer Wein passt hervorragend zu Blauschimmelkäse. Das klingt komisch, aber es soll wirklich stimmen!"',
      isCorrect: true,
      correction: 'Der Onkel hat völlig recht! Süße und Salzigkeit sind ein traumhaftes Paar – die Süße des Weins gleicht die Salzigkeit und Intensität des Blauschimmelkäses aus. Klassiker: Roquefort mit Sauternes oder Stilton mit Portwein. Eine der berühmtesten Kombinationen der Weinwelt!'
    },
    {
      id: 'bw_2_7', guestId: 'frau_doktor', mood: '🤓',
      statement: 'Frau Doktor erklärt am Tisch: "Die Säure im Wein hat eine wichtige Funktion beim Essen – sie reinigt den Gaumen, besonders bei fettigen Gerichten. Darum passt Riesling so gut zu Schweinebraten."',
      isCorrect: true,
      correction: 'Medizinisch korrekt! Die Weinsäure wirkt wie ein natürlicher Gaumenreiniger: Sie schneidet durch das Fett und erfrischt die Geschmacksknospen. Das ist eines der Grundprinzipien des Food Pairing – säurebetonte Weine zu fettreichen Speisen!'
    },
    {
      id: 'bw_2_8', guestId: 'wandergruppe', mood: '🤓',
      statement: 'Ein Wanderer aus der Gruppe behauptet: "Gewürztraminer kommt ursprünglich aus Südtirol – aus dem Ort Tramin! Daher hat er ja auch seinen Namen."',
      isCorrect: true,
      correction: 'Richtig gewandert, richtig gewusst! Der Name "Traminer" leitet sich tatsächlich vom Ort Tramin (italienisch: Termeno) in Südtirol ab. Von dort hat sich die Rebsorte über das Elsass, Deutschland und die ganze Welt verbreitet. Das "Gewürz-" im Namen verweist auf die intensiven Gewürzaromen.'
    },
    {
      id: 'bw_2_9', guestId: 'der_jaeger', mood: '🤓',
      statement: 'Der Jäger riecht an seinem Zweigelt und sagt: "Wein und Wild – das passt, weil die Tannine im Rotwein das Eiweiß im Fleisch binden. Darum schmeckt Rotwein zum Steak besser als Weißwein."',
      isCorrect: true,
      correction: 'Der Jäger kennt nicht nur das Wild, sondern auch den Wein! Tannine binden sich an Proteine im Fleisch, wodurch sie weniger adstringierend wirken. Gleichzeitig wird das Fleisch geschmacklich "weicher". Darum ist die Kombination tanninreicher Rotwein + proteinreiches Fleisch so harmonisch!'
    },
    {
      id: 'bw_2_10', guestId: 'buergermeister', mood: '🤓',
      statement: 'Der Bürgermeister erklärt seinem spanischen Gast: "In der Rioja-Region wird der Wein in Eichenfässern gereift – und je nach Reifezeit bekommt er einen anderen Namen: Crianza, Reserva, Gran Reserva."',
      isCorrect: true,
      correction: 'Diplomatisch korrekt! Das spanische Reifesystem ist streng geregelt: Crianza = mind. 24 Monate (12 im Fass), Reserva = mind. 36 Monate (12 im Fass), Gran Reserva = mind. 60 Monate (18 im Fass). Je länger die Reifung, desto komplexer und eleganter der Wein!'
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
    {
      id: 'ww_2_6', guestId: 'wandergruppe', mood: '🥾',
      question: 'Ein Wanderer aus der Gruppe fragt neugierig: "Wir trinken gerade Gewürztraminer. Woher kommt der eigentlich – aus Tramin in Südtirol, oder?"',
      options: [
        { text: 'Ja – der Name verweist auf den Ort Tramin in Südtirol', correct: true },
        { text: 'Aus der Pfalz in Deutschland', correct: false },
        { text: 'Aus dem Elsass in Frankreich', correct: false },
        { text: 'Aus der Wachau in Österreich', correct: false },
      ],
      explanation: 'Der Name "Traminer" verweist tatsächlich auf den Ort Tramin (Termeno) in Südtirol! Heute wird Gewürztraminer vor allem im Elsass, in Deutschland und in der Pfalz angebaut – aber die Wiege liegt in Südtirol.'
    },
    {
      id: 'ww_2_7', guestId: 'buergermeister', mood: '🧐',
      question: 'Der Bürgermeister studiert die Weinkarte und fragt: "Hier steht \'halbtrocken\' beim Gewürztraminer. Was bedeutet das eigentlich genau – halb fertig gegoren?"',
      options: [
        { text: 'Der Wein hat eine leichte Restsüße (9–18 g/l Zucker)', correct: true },
        { text: 'Der Wein wurde nur halb so lange gelagert wie trocken', correct: false },
        { text: 'Die Trauben waren bei der Ernte nur halb reif', correct: false },
      ],
      explanation: 'Halbtrocken bedeutet, dass der Wein eine leichte Restsüße hat – zwischen 9 und 18 Gramm Zucker pro Liter. Die Gärung wird gestoppt, bevor aller Zucker in Alkohol umgewandelt ist. Das macht den Wein weicher und fruchtiger als einen trockenen.'
    },
    {
      id: 'ww_2_8', guestId: 'frau_doktor', mood: '🔬',
      question: 'Frau Doktor betrachtet ihr Glas Zweigelt kritisch: "Die Farbe ist so intensiv dunkelrot. Woher kommt die Farbe beim Rotwein eigentlich – aus dem Fruchtfleisch?"',
      options: [
        { text: 'Aus der Beerenhaut – durch Maischegärung werden Farbstoffe gelöst', correct: true },
        { text: 'Aus dem Fruchtfleisch der roten Trauben', correct: false },
        { text: 'Durch Zugabe von natürlichen Farbstoffen beim Keltern', correct: false },
      ],
      explanation: 'Die Farbe kommt aus der Beerenhaut! Anthocyane heißen die Farbpigmente, die bei der Maischegärung – wenn der Saft mit den Schalen in Kontakt bleibt – in den Wein übergehen. Deshalb kann man aus roten Trauben auch Weißwein machen, wenn man die Schalen sofort abtrennt!'
    },
    {
      id: 'ww_2_9', guestId: 'der_pfarrer', mood: '🍷',
      question: 'Der Pfarrer schwenkt seinen Rioja und fragt nachdenklich: "Was bewirkt die Lagerung im Eichenfass eigentlich genau? Nur Geschmack, oder steckt da mehr dahinter?"',
      options: [
        { text: 'Geschmack (Vanille, Toast), kontrollierte Oxidation und weichere Tannine', correct: true },
        { text: 'Nur Konservierung – das Holz verhindert, dass der Wein schlecht wird', correct: false },
        { text: 'Die Eiche färbt den Wein dunkler und macht ihn stärker', correct: false },
      ],
      explanation: 'Im Eichenfass passiert viel: Das Holz gibt Aromastoffe ab (Vanillin, Toastaromen), durch die Poren dringt minimal Sauerstoff ein (kontrollierte Oxidation), und die Tannine des Weins verbinden sich mit den Holztanninen zu weicheren, runderen Gerbstoffen. Ein kleines Wunder der Weinchemie!'
    },
    {
      id: 'ww_2_10', guestId: 'lisa', mood: '🤷',
      question: 'Lisa räumt Gläser ein und fragt: "Chef, warum servieren wir eigentlich Weißwein kalt und Rotwein wärmer? Ist das nur Tradition oder hat das einen Grund?"',
      options: [
        { text: 'Kälte betont Säure und Frische, Wärme betont Aromen und Tannine', correct: true },
        { text: 'Rotwein verträgt keine Kälte, weil er dann trüb wird', correct: false },
        { text: 'Das ist nur eine alte Gewohnheit ohne wissenschaftlichen Grund', correct: false },
      ],
      explanation: 'Temperatur beeinflusst die Wahrnehmung: Kälte betont Säure und Frische – ideal für knackige Weißweine. Wärme lässt Aromen besser verdunsten und macht Tannine weicher – perfekt für komplexe Rotweine. Darum: Weißwein bei 8–12°C, Rotwein bei 14–18°C. Mundstück-Wissenschaft!'
    },
  ],

  blindtasting: [
    {
      id: 'bt_2_1', guestId: 'frau_doktor', mood: '👃',
      clues: {
        appearance: 'Intensives Goldgelb mit leichten kupfrigen Reflexen – für einen Weißwein ungewöhnlich kräftig in der Farbe.',
        nose: 'Exotisch und betörend: Litschi, Rosenblüte, ein Hauch Ingwer und Muskatnuss. Sehr aromatisch und parfümiert.',
        palate: 'Vollmundig und weich, leichte Restsüße, moderate Säure. Opulente Frucht mit langem, würzigem Abgang.'
      },
      options: [
        { wineId: 'gewuerztraminer', correct: true, favorite: true },
        { wineId: 'pinot_grigio', correct: false },
        { wineId: 'vinho_verde', correct: false },
        { wineId: 'cremant', correct: false },
      ],
      explanation: 'Die exotischen Litschi- und Rosenaromen sind das Markenzeichen des Gewürztraminers! Kein anderer Weißwein duftet so intensiv parfümiert. Die goldene Farbe und die leichte Restsüße bestätigen: Das ist der aromatischste aller Weißweine.'
    },
    {
      id: 'bt_2_2', guestId: 'der_jaeger', mood: '👃',
      clues: {
        appearance: 'Mittleres Rubinrot mit violetten Reflexen am Rand – jugendlich und einladend.',
        nose: 'Saftige Kirsche und dunkle Brombeere dominieren, dahinter ein zarter Hauch von Vanille und etwas Pfeffer.',
        palate: 'Mittelschwerer Körper, weiche, geschmeidige Tannine. Fruchtbetont mit einer angenehmen Frische im Abgang.'
      },
      options: [
        { wineId: 'zweigelt', correct: true, favorite: true },
        { wineId: 'rioja_crianza', correct: false },
        { wineId: 'gewuerztraminer', correct: false },
        { wineId: 'cremant', correct: false },
      ],
      explanation: 'Kirsche und Brombeere mit weichen Tanninen – das ist der österreichische Zweigelt! Im Unterschied zum Rioja fehlt die deutliche Eichenholznote, und die Tannine sind geschmeidiger. Das jugendliche Violett am Glasrand verrät den jungen, fruchtbetonten Stil.'
    },
    {
      id: 'bt_2_3', guestId: 'buergermeister', mood: '👃',
      clues: {
        appearance: 'Sehr blasses Strohgelb mit grünlichen Reflexen, feine aufsteigende Perlage – winzige Bläschen, die elegant tanzen.',
        nose: 'Grüner Apfel, frische Brioche und ein Hauch Zitronenschale. Dezent, aber einladend.',
        palate: 'Leicht und erfrischend, feine Mousse am Gaumen, knackige Säure. Trocken mit einem sauberen, mineralischen Finish.'
      },
      options: [
        { wineId: 'cremant', correct: true, favorite: true },
        { wineId: 'vinho_verde', correct: false },
        { wineId: 'pinot_grigio', correct: false },
        { wineId: 'gewuerztraminer', correct: false },
      ],
      explanation: 'Die feine, anhaltende Perlage und die Brioche-Note verraten die Flaschengärung – das ist der Crémant! Vinho Verde hat zwar auch etwas Spritzigkeit, aber keine echte Schaumwein-Mousse und keine Hefearomen. Die Brioche-Note entsteht durch die Autolyse der Hefe während der Flaschengärung.'
    },
  ],

  beratung: [
    // ---- Beratung 1: Oma Hildegard – Schweinebraten für die pingelige Schwester ----
    {
      id: 'ber_2_1',
      guestId: 'oma_hildegard',
      mood: '👵',
      intro: 'Oma Hildegard kommt aufgeregt herein und wischt sich die Hände an der Schürze ab. "Kindchen, ich brauch dringend deinen Rat! Meine Schwester Gertrud kommt morgen zum Schweinebraten – und die meckert an allem rum. Beim letzten Mal hat sie den Wein in die Blumen gekippt!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was gibt es denn genau zu essen, Frau Hildegard?"', good: true, bonusTip: 2, guestResponse: '"Schweinebraten mit Knödeln und Blaukraut – mein Rezept von der Oma. Deftig, mit viel Soße! Die Gertrud isst ja nix Leichtes."' },
            { text: '"Ach, nehmen Sie einfach irgendeinen Roten, passt schon."', good: false, bonusTip: 0, guestResponse: '"Kindchen, so einfach ist das nicht! Die Gertrud hat eine Zunge wie ein Sommelier – nur ohne die gute Laune!"' },
            { text: '"Trinkt Ihre Schwester lieber Rot- oder Weißwein?"', good: true, bonusTip: 1, guestResponse: '"Rotwein, immer! Die sagt, Weißwein ist was für den Sommer auf dem Balkon. Ein kräftiger Roter muss es sein."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Mag Ihre Schwester eher fruchtige oder eher würzige Weine?"', good: true, bonusTip: 2, guestResponse: '"Fruchtig! Die Gertrud hat mal gesagt, ein guter Roter muss nach Kirschen schmecken, sonst kann er gleich wieder in den Keller. So ist die halt."' },
            { text: '"Wie teuer darf der Wein sein?"', good: false, bonusTip: 0, guestResponse: '"Ach, Kindchen, es geht doch nicht ums Geld – es geht darum, dass die Gertrud nicht wieder meckert! Frag mich lieber was zum Geschmack."' },
            { text: '"Trinkt sie gerne deutsche Weine oder eher internationale?"', good: true, bonusTip: 1, guestResponse: '"Die Gertrud ist da nicht so festgelegt. Hauptsache kräftig genug zum Braten – und kein \'Modekram\', wie sie sagt."' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'zweigelt', correct: true, favorite: true, explanation: 'Perfekte Wahl! Der Zweigelt ist kirschfruchtig – genau das, was Schwester Gertrud mag – und kräftig genug, um neben dem deftigen Schweinebraten mit Blaukraut zu bestehen. Ein fruchtiger, bodenständiger Roter ohne Schnickschnack.' },
            { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder zum Schweinebraten ist solide – elegant und beerig. Allerdings könnte er für den deftigen Braten etwas zu fein sein, und Gertrud wollte es ja kräftig und kirschig.' },
            { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist ein leichter, spritziger Weißwein – das Gegenteil von dem, was Gertrud will. Der würde definitiv wieder in den Blumen landen!' },
          ]
        }
      ],
      summary: 'Bei der Weinberatung zum Essen gilt: Erst das Gericht verstehen, dann den Geschmack des Gastes – und erst dann empfehlen. Ein kirschfruchtiger Zweigelt ist der ideale Begleiter zu deftigem Schweinebraten.'
    },

    // ---- Beratung 2: Brautpaar – Sektempfang für die Hochzeit ----
    {
      id: 'ber_2_2',
      guestId: 'brautpaar',
      mood: '💒',
      intro: 'Das Brautpaar kommt Hand in Hand herein, sie mit einem Stapel Hochzeitsmagazine unterm Arm. "Wir brauchen Ihre Hilfe! Der Sektempfang für unsere Hochzeit – 50 Gäste, und alles soll perfekt sein. Aber unser Budget ist nicht unendlich..."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Wo findet die Feier statt und zu welcher Jahreszeit?"', good: true, bonusTip: 2, guestResponse: '"Im Juli, draußen im Garten vom Lindenhof! Unter den alten Kastanien, mit Lichterketten. Es soll sommerlich und elegant werden."' },
            { text: '"Wie viel wollt ihr pro Flasche ausgeben?"', good: false, bonusTip: 0, guestResponse: '"Also... wir haben da noch nicht so genau drüber nachgedacht. Fragen Sie uns lieber, was wir uns vorstellen – dann finden wir schon was Passendes!"' },
            { text: '"Soll es ein klassischer Sektempfang werden oder etwas Besonderes?"', good: true, bonusTip: 1, guestResponse: '"Schon etwas Besonderes! Nicht einfach nur Sekt aus dem Supermarkt. Es soll sich festlich anfühlen – wie in einem französischen Film!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein zum Anstoßen sein oder auch zum Essen passen?"', good: true, bonusTip: 2, guestResponse: '"Nur zum Anstoßen! Danach gibt es Wein zum Essen. Aber der erste Schluck soll ein Wow-Moment sein – wenn alle die Gläser heben und die Sonne durch die Bäume scheint!"' },
            { text: '"Mögt ihr es eher trocken oder lieblich?"', good: true, bonusTip: 1, guestResponse: '"Trocken bis halbtrocken – die meisten unserer Gäste mögen es nicht zu süß. Es soll erfrischend sein bei der Sommerhitze!"' },
            { text: '"Nehmt doch einfach Prosecco, das trinkt jeder."', good: false, bonusTip: 0, guestResponse: '"Prosecco? Das klingt eher nach Geburtstagsbrunch als nach Hochzeit... Wir wollen schon etwas mit mehr Klasse!"' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'cremant', correct: true, favorite: true, explanation: 'Volltreffer! Crémant d\'Alsace wird wie Champagner hergestellt – feine Perlage, elegant, festlich – aber deutlich günstiger. Perfekt für 50 Gäste unter Kastanien an einem Sommerabend. Das französische Flair, das sie sich wünschen!' },
            { wineId: 'sekt', correct: true, explanation: 'Deutscher Sekt ist eine solide Wahl – prickelnd und bezahlbar für 50 Gäste. Aber für den Wow-Moment bei einer Sommerhochzeit fehlt ihm das gewisse französische Etwas, das sich das Paar wünscht.' },
            { wineId: 'rioja_crianza', correct: false, explanation: 'Ein kräftiger Rotwein zum Anstoßen im Sommer? Bei 50 Gästen im Freien unter Sommerhitze braucht es etwas Frisches, Prickelndes – keinen schweren Roten.' },
          ]
        }
      ],
      summary: 'Für Feiern gilt: Anlass, Jahreszeit und Gästezahl bestimmen die Weinwahl. Crémant bietet Champagner-Qualität zum vernünftigen Preis – ideal für große Feste mit Stil.'
    },

    // ---- Beratung 3: Der Pfarrer – Weingeschenk für den Bischof ----
    {
      id: 'ber_2_3',
      guestId: 'der_pfarrer',
      mood: '⛪',
      intro: 'Der Pfarrer betritt das Gasthaus mit ernster Miene und nimmt seinen Hut ab. "Ich brauche Ihre fachkundige Hilfe. Der Herr Bischof hat sich zum Abendessen angemeldet – und ich möchte ihm einen Wein überreichen, der seinem Rang angemessen ist. Das muss sitzen!"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was für ein Mensch ist der Herr Bischof? Hat er bestimmte Weinvorlieben?"', good: true, bonusTip: 2, guestResponse: '"Der Bischof ist ein Mann der Tradition. Er schätzt gereifte Weine mit Geschichte – nichts Modernes oder Experimentelles. Ein Wein soll Würde ausstrahlen, sagt er immer."' },
            { text: '"Nehmen Sie doch einfach eine Flasche Rotwein, Herr Pfarrer."', good: false, bonusTip: 0, guestResponse: '"Einfach eine Flasche Rotwein? Lieber Freund, der Bischof ist Ehrengast! Da kann ich nicht mit irgendetwas ankommen. Das wäre fast eine Sünde!"' },
            { text: '"Was gibt es denn zum Abendessen?"', good: true, bonusTip: 1, guestResponse: '"Ein formelles Abendessen im Pfarrhaus – Rinderbraten mit feinem Gemüse. Klassisch und würdevoll, wie es sich gehört."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein eher eine edle Reife mitbringen oder jung und frisch sein?"', good: true, bonusTip: 2, guestResponse: '"Gereift, unbedingt! Der Bischof sagt immer: \'Ein Wein braucht Zeit, wie ein guter Prediger.\' Er mag es, wenn man die Fassreife schmeckt – Vanille, etwas Eiche."' },
            { text: '"Wie viel möchten Sie denn ausgeben?"', good: false, bonusTip: 0, guestResponse: '"Es geht hier nicht um weltliche Dinge wie Geld! Es geht darum, dem Bischof eine angemessene Geste des Respekts zu erweisen. Beraten Sie mich bitte fachlich!"' },
            { text: '"Trinkt der Bischof auch Weißwein oder nur Rotwein?"', good: true, bonusTip: 1, guestResponse: '"Rotwein, ausschließlich. Der Bischof sagt, Rotwein hat Seele – und das Blut Christi war schließlich auch kein Riesling." Er schmunzelt verschmitzt.' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'rioja_crianza', correct: true, favorite: true, explanation: 'Ausgezeichnete Wahl! Rioja Crianza bringt genau das mit, was der Bischof schätzt: Reife durch Fassausbau, würdevolle Vanille- und Eichennoten, und eine lange Weintradition. Ein Wein mit Geschichte und Tiefe – wie eine gute Predigt.' },
            { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder ist ein eleganter, respektabler Wein – aber ihm fehlt die Fassreife und die Vanillenoten, die der Bischof so schätzt. Für ein formelles Geschenk darf es etwas mehr Opulenz sein.' },
            { wineId: 'vinho_verde', correct: false, explanation: 'Ein leichter, junger Weißwein als Geschenk für den Bischof? Der Bischof trinkt ausschließlich Rotwein und schätzt gereifte Weine. Das wäre ein echtes Fettnäpfchen!' },
          ]
        }
      ],
      summary: 'Bei Weingeschenken zählt: Kenne den Empfänger! Tradition, Reife und Fassausbau sind Qualitäten, die kennerische Genießer zu schätzen wissen. Ein Rioja Crianza vereint all das mit einer langen Weinbau-Geschichte.'
    },

    // ---- Beratung 4: Austauschschülerin – Wein als Mitbringsel für die Familie in Frankreich ----
    {
      id: 'ber_2_4',
      guestId: 'austauschschuelerin',
      mood: '🇫🇷',
      intro: 'Die Austauschschülerin stürmt aufgeregt herein. "Bonjour! Ich fahre nächste Woche zurück nach Lyon und möchte meiner Familie einen Wein mitbringen – aber einen, der sie beeindruckt! Die kennen sich nämlich richtig gut aus mit Wein. Was soll ich nur nehmen?"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Kennt sich deine Familie wirklich gut mit Wein aus? Was trinken sie normalerweise?"', good: true, bonusTip: 2, guestResponse: '"Oh oui, mein Papa hat einen Weinkeller! Die trinken Bordeaux, Burgunder, Rhône... Ich muss etwas mitbringen, das sie noch nicht kennen – sonst lachen die mich aus!"' },
            { text: '"Nimm einfach einen deutschen Wein, da kann man nichts falsch machen."', good: false, bonusTip: 0, guestResponse: '"Einfach irgendeinen? Non non non! Mein Papa ist Weinkenner – der merkt sofort, wenn man sich keine Mühe gegeben hat. Es muss etwas Besonderes sein!"' },
            { text: '"Möchtest du eher Rot- oder Weißwein mitnehmen?"', good: true, bonusTip: 1, guestResponse: '"Am besten Weißwein – roten Bordeaux haben die ja genug zu Hause! Ich brauche etwas, wo die sagen: Oh, das hätte ich nicht erwartet!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein eine Geschichte haben – etwas, das die Verbindung zwischen Deutschland und Frankreich zeigt?"', good: true, bonusTip: 2, guestResponse: '"Oh ja, das wäre magnifique! Mein Papa liebt es, wenn ein Wein eine Geschichte erzählt. Etwas, das zeigt, dass die Weinwelt keine Grenzen kennt – das würde ihn beeindrucken!"' },
            { text: '"Wie viel Geld hast du denn zur Verfügung?"', good: false, bonusTip: 0, guestResponse: '"Nicht so viel, ich bin ja Schülerin... Aber es muss trotzdem etwas Beeindruckendes sein! Geht das auch mit kleinem Budget?"' },
            { text: '"Soll es etwas Aromatisches sein oder eher dezent?"', good: true, bonusTip: 1, guestResponse: '"Aromatisch! Wenn mein Papa das Glas hebt und sofort sagt \'Oh là là!\' – dann habe ich alles richtig gemacht."' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'gewuerztraminer', correct: true, favorite: true, explanation: 'Perfekte Empfehlung! Der Gewürztraminer aus dem Elsass hat die ideale Geschichte: Eine Rebsorte, die ihren Ursprung in Südtirol hat, im Elsass – der Grenzregion zwischen Deutschland und Frankreich – ihre Heimat fand. Beeindruckende Aromatik von Litschi und Rosenblüte, die selbst französische Weinkenner zum Staunen bringt. Und er ist bezahlbar!' },
            { wineId: 'cremant', correct: true, explanation: 'Crémant d\'Alsace ist eine nette Idee – prickelnd, aus dem Elsass, und gut gemacht. Aber eine französische Weinfamilie kennt Crémant bereits gut. Der Überraschungseffekt fehlt – für ein echtes "Oh là là" braucht es etwas Aromatischeres!' },
            { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio aus Italien für eine französische Weinfamilie? Das ist zu generisch und hat keine besondere Geschichte. Papas Weinkenner-Nase würde enttäuscht schnüffeln – damit beeindruckt man niemanden in Lyon!' },
          ]
        }
      ],
      summary: 'Das beste Weingeschenk erzählt eine Geschichte. Gewürztraminer aus dem Elsass verbindet deutsche und französische Weinkultur und beeindruckt mit einzigartiger Aromatik – perfekt, um Weinkenner zu überraschen.'
    },

    // ---- Beratung 5: Wandergruppe – Wein für die Hütten-Feier ----
    {
      id: 'ber_2_5',
      guestId: 'wandergruppe',
      mood: '🥾',
      intro: 'Die Wandergruppe kommt erschöpft, aber gut gelaunt herein. Der Sprecher – roter Kopf, Sonnenbrand auf der Nase – lehnt sich an die Theke: "Also, wir planen nächstes Wochenende unsere 25-jährige Jubiläumswanderung! Abends auf der Hütte wollen wir ordentlich feiern. Was empfehlen Sie für 12 durstige Wanderer?"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was wird auf der Hütte gekocht?"', good: true, bonusTip: 2, guestResponse: '"Unser Hüttenwirt macht seinen berühmten Gulasch! Und vorher gibt es eine Brotzeit mit Schinken, Käse und eingelegtem Gemüse. Rustikal, aber richtig gut!"' },
            { text: '"Wie viele Flaschen brauchen Sie denn?"', good: false, bonusTip: 0, guestResponse: '"Na, das weiß ich doch nicht – dafür frage ich ja Sie! Sagen Sie mir erst mal, WAS wir trinken sollen, dann reden wir über die Menge."' },
            { text: '"Soll der Wein leicht oder kräftig sein?"', good: true, bonusTip: 1, guestResponse: '"Nach 20 Kilometern Bergwanderung wollen wir was Ordentliches! Kein Wässerchen – aber auch keinen Alkohol-Hammer. Wir müssen am nächsten Tag ja wieder runter!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Trinken alle Rotwein, oder gibt es auch Weißwein-Fans in der Gruppe?"', good: true, bonusTip: 2, guestResponse: '"Überwiegend Rot! Aber die Helga und der Franz trinken nur Weiß. Wenn Sie was hätten, das beide Lager zufriedenstellt, oder zwei verschiedene – das wäre super."' },
            { text: '"Wie transportieren Sie den Wein auf die Hütte?"', good: false, bonusTip: 0, guestResponse: '"Im Rucksack natürlich! Aber das ist unser Problem, nicht Ihres. Beraten Sie mich lieber beim Geschmack!"' },
            { text: '"Ist eher gemütliches Beisammensein oder wird richtig gefeiert?"', good: true, bonusTip: 1, guestResponse: '"Beides! Erst wird gemütlich bei Gulasch getafelt, dann kommen die Wanderlieder. Beim Nachtisch wird\'s feucht-fröhlich – 25 Jahre muss man feiern!"' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'zweigelt', correct: true, favorite: true, explanation: 'Perfekt für die Hütte! Zweigelt ist kirschfruchtig und unkompliziert – kräftig genug für den Gulasch, aber nicht so schwer, dass die Wanderer morgen liegen bleiben. Dazu ein Vinho Verde für die Weißwein-Fraktion – der ist leicht und erfrischend nach dem Aufstieg.' },
            { wineId: 'rioja_crianza', correct: true, explanation: 'Rioja Crianza ist ein solider Begleiter zum Gulasch – Vanille und Kirsche passen gut. Aber für eine rustikale Hüttengaudi ist er fast etwas zu elegant. Der Zweigelt ist hemdsärmeliger und trinkt sich leichter in der Runde.' },
            { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio für 12 hungrige Wanderer zum Gulasch? Der geht neben dem kräftigen Eintopf komplett unter. Die Gruppe braucht einen Rotwein mit Substanz – der Gulasch frisst den Pinot Grigio auf!' },
          ]
        }
      ],
      summary: 'Bei Gruppenevents zählt: Unkomplizierte, gutmütige Weine, die zur Stimmung und zum Essen passen. Zweigelt ist der ideale "Geselligkeits-Wein" – fruchtbetont, mittelschwer und für jeden zugänglich.'
    },

    // ---- Beratung 6: Der Jäger – Weinbegleitung zum Wild ----
    {
      id: 'ber_2_6',
      guestId: 'der_jaeger',
      mood: '🦌',
      intro: 'Der Jäger betritt das Gasthaus mit einem breiten Grinsen. Er riecht nach Wald und Rauch. "So, nächste Woche hab ich die Jagdgesellschaft zum Essen eingeladen. Rehrücken aus eigener Jagd! Jetzt brauch ich nur noch den richtigen Wein – und da vertrau ich Ihnen."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Wie wird der Rehrücken zubereitet – mit welcher Sauce?"', good: true, bonusTip: 2, guestResponse: '"Rehrücken rosa gebraten, mit einer Sauce aus Preiselbeeren und Rotwein. Dazu Knödel und Rotkohl. Ganz klassisch – so wie mein Vater das auch schon gemacht hat!"' },
            { text: '"Wie viel wollen Sie ausgeben?"', good: false, bonusTip: 0, guestResponse: '"Beim Wein zum Wild spar ich nicht! Das wäre ja wie mit der billigsten Flinte auf die Jagd gehen. Qualität muss sein – beraten Sie mich richtig!"' },
            { text: '"Wie viele Jäger kommen?"', good: true, bonusTip: 1, guestResponse: '"Sechs Jäger, alle mit ordentlichem Durst. Die kennen sich mit Wein allerdings eher weniger aus – das sind Bier-Männer. Aber zum Wild muss Wein her, das ist Tradition!"' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Wein kräftig zum Wild sein oder eher elegant?"', good: true, bonusTip: 2, guestResponse: '"Kräftig! Wild braucht einen Wein, der standhält. Nicht so ein zartes Tröpfchen – der muss was aushalten, wie ein guter Jagdhund. Aber trotzdem soll er was Besonderes sein."' },
            { text: '"Nehmen Sie doch einfach einen Bordeaux."', good: false, bonusTip: 0, guestResponse: '"Bordeaux hab ich in meinem Weinkeller nicht, und Sie auch nicht auf der Karte. Empfehlen Sie mir lieber was, das Sie tatsächlich haben!"' },
            { text: '"Mögen Ihre Gäste eher fruchtige oder eher würzige Aromen?"', good: true, bonusTip: 1, guestResponse: '"Würzig! Wir sind Männer des Waldes – da darf der Wein ruhig nach Erde, Leder und dunklen Beeren schmecken. Kirsche ist auch gut – Preiselbeere sowieso!"' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'rioja_crianza', correct: true, favorite: true, explanation: 'Ausgezeichnet! Rioja Crianza mit seinen Aromen von Vanille, Kirsche und Leder ist der klassische Begleiter zu Wild. Die Fassreife gibt ihm die Tiefe, die zum kräftigen Rehrücken passt, und die Tannine harmonieren perfekt mit der Preiselbeersauce. Ein Wein, den auch Bier-Trinker respektieren!' },
            { wineId: 'zweigelt', correct: true, explanation: 'Zweigelt zum Wild ist solide – fruchtbetont und unkompliziert. Aber für einen besonderen Jäger-Abend mit rosa Rehrücken fehlt ihm die Tiefe und Würze. Da darf es ruhig etwas mehr Fassreife und Komplexität sein.' },
            { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde – ein leichter, spritziger Sommerwein – zum kräftigen Rehrücken mit Preiselbeer-Rotwein-Sauce? Das ist wie mit der Wasserpistole auf die Jagd gehen. Die Jäger würden dich auslachen!' },
          ]
        }
      ],
      summary: 'Wild verlangt nach kräftigen, gereiften Weinen mit Struktur. Rioja Crianza bringt genau die richtige Kombination aus Frucht, Würze und Fassreife mit, um einem rosa gebratenen Rehrücken standzuhalten.'
    },

    // ---- Beratung 7: Frau Doktor – Weinprobe als Team-Event ----
    {
      id: 'ber_2_7',
      guestId: 'frau_doktor',
      mood: '🔬',
      intro: 'Frau Doktor kommt mit einem Notizbuch und setzt sich konzentriert an die Theke. "Ich plane eine kleine Weinprobe für mein Praxis-Team – acht Leute, die meisten haben wenig Ahnung von Wein. Es soll lehrreich sein, aber auch Spaß machen. Können Sie mir helfen, den richtigen Einstiegswein auszuwählen?"',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Was soll das Team bei der Weinprobe lernen?"', good: true, bonusTip: 2, guestResponse: '"Den Unterschied zwischen Rot und Weiß, trocken und süß – das Basiswissen eben. Aber nicht als trockene Vorlesung! Ich will, dass die Leute hinterher sagen: Boah, ich wusste gar nicht, dass Wein so spannend ist!"' },
            { text: '"Wie viele Weine wollen Sie verkosten?"', good: true, bonusTip: 1, guestResponse: '"Drei bis vier verschiedene. Ich will Kontraste zeigen – aber nicht überfordern. Zum Schluss soll es einen geben, der alle vom Hocker haut. Der Finale-Wein muss besonders sein!"' },
            { text: '"Soll ich einfach eine Mischung zusammenstellen?"', good: false, bonusTip: 0, guestResponse: '"Einfach eine Mischung? Frau Doktor will keine zufällige Zusammenstellung! Ich plane das wie eine Diagnose – systematisch und mit Ziel."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll der Finale-Wein eher ein Roter oder Weißer sein?"', good: true, bonusTip: 2, guestResponse: '"Ein Weißer! Die meisten im Team trinken Rot – ich will ihnen zeigen, dass Weißwein mehr kann als \'nur leicht und langweilig\'. Etwas, das Vorurteile bricht und Aromen explodieren lässt!"' },
            { text: '"Gibt es Allergien oder Unverträglichkeiten?"', good: false, bonusTip: 0, guestResponse: '"Das ist eine Weinprobe, keine Anamnese! Zum Glück verträgt mein Team alles – beraten Sie mich lieber beim Geschmack als bei der Medizin."' },
            { text: '"Gibt es dazu Essen oder wird nur verkostet?"', good: true, bonusTip: 1, guestResponse: '"Ein paar Häppchen – Käse, Cracker, Trauben. Nichts Aufwändiges, die Weine sollen im Mittelpunkt stehen. Der Finale-Wein bekommt aber seinen eigenen Moment!"' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du als Finale?',
          options: [
            { wineId: 'gewuerztraminer', correct: true, favorite: true, explanation: 'Brillant! Gewürztraminer als Finale ist ein Geniestreich – wenn die Leute das Glas heben und plötzlich Litschi, Rosenblüte und Ingwer riechen, fallen ihnen die Kinnladen runter. DAS bricht jedes Vorurteil über "langweiligen Weißwein". Frau Doktor strahlt: "Perfekt – das ist die Diagnose, die ich gesucht habe!"' },
            { wineId: 'vinho_verde', correct: false, explanation: 'Vinho Verde ist erfrischend, aber als Finale zu zurückhaltend. Nach drei anderen Weinen geht er unter – kein Wow-Effekt, keine Aromen-Explosion. Frau Doktor braucht einen Wein, der Vorurteile bricht, keinen, der sie bestätigt.' },
            { wineId: 'cremant', correct: true, explanation: 'Crémant als Finale hat Charme – das Prickeln sorgt für Überraschung. Aber für das Ziel "Weißwein kann mehr als langweilig" fehlen die explosiven Aromen. Ein Schaumwein bestätigt eher das Klischee, dass Weißwein nur "nett" ist.' },
          ]
        }
      ],
      summary: 'Bei Weinproben für Einsteiger gilt: Kontraste schaffen und mit einem Überraschungswein enden. Gewürztraminer ist der perfekte Vorurteilsbrecher – seine explosive Aromatik zeigt, dass Weißwein alles andere als langweilig ist.'
    },

    // ---- Beratung 8: Bürgermeister – Wein für den Neujahrsempfang ----
    {
      id: 'ber_2_8',
      guestId: 'buergermeister',
      mood: '🏛️',
      intro: 'Der Bürgermeister kommt mit seiner Amtskette und besorgter Miene. "Ich habe ein Problem. Der Neujahrsempfang der Gemeinde steht an – 80 Leute, und der Gemeinderat hat das Bier-Budget gestrichen. Jetzt soll es Wein geben! Aber bitte etwas, das ALLEN schmeckt – vom Bauern bis zur Professorin."',
      steps: [
        {
          prompt: 'Was möchtest du zuerst wissen?',
          choices: [
            { text: '"Gibt es Essen zum Wein oder wird nur angestoßen?"', good: true, bonusTip: 2, guestResponse: '"Beides! Erst ein Empfang mit Häppchen – Lachsschnittchen, Käsespieße, Mini-Quiche. Dann halte ich meine Rede, und danach wird auf das neue Jahr angestoßen. Der Anstoß-Moment ist am wichtigsten!"' },
            { text: '"Was ist Ihr Budget pro Flasche?"', good: false, bonusTip: 0, guestResponse: '"Wir sind eine Gemeinde, kein Großkonzern! Aber billig darf es auch nicht aussehen – die Opposition nutzt jeden Fehltritt. Beraten Sie mich lieber, was geschmacklich alle zufriedenstellt!"' },
            { text: '"Soll es festlich wirken oder eher bodenständig?"', good: true, bonusTip: 1, guestResponse: '"Festlich! Es ist der Neujahrsempfang, nicht das Schützenfest. Die Leute sollen denken: Unser Bürgermeister hat Geschmack! Aber es darf auch nicht zu abgehoben sein – ich bin Bürgermeister, kein Baron."' },
          ]
        },
        {
          prompt: 'Was möchtest du noch wissen?',
          choices: [
            { text: '"Soll es einen Wein für alle geben oder verschiedene?"', good: true, bonusTip: 2, guestResponse: '"Einer für alle – das vereint die Gemeinde! Am besten etwas Prickelndes zum Anstoßen, das auch zu den Häppchen passt. Nichts, worüber man diskutieren muss – etwas, das einfach allen ein Lächeln ins Gesicht zaubert."' },
            { text: '"Wie stehen die Gemeinderäte zu Alkohol?"', good: false, bonusTip: 0, guestResponse: '"Ha! Die Gemeinderäte stehen sehr gut zu Alkohol – deswegen haben wir ja kein Bier-Budget mehr! Nein, beraten Sie mich lieber, was zum festlichen Anlass passt."' },
            { text: '"Gibt es einen regionalen Bezug, den Sie betonen wollen?"', good: true, bonusTip: 1, guestResponse: '"Gute Idee! Etwas mit europäischem Flair wäre schön. Zeigt, dass wir weltoffen sind, aber trotzdem Stil haben. Die Professorin im Gemeinderat soll auch beeindruckt sein!"' },
          ]
        },
        {
          prompt: 'Welchen Wein empfiehlst du?',
          options: [
            { wineId: 'cremant', correct: true, favorite: true, explanation: 'Volltreffer! Crémant d\'Alsace ist die perfekte Wahl: Prickelnd und festlich genug für den Neujahrsempfang, bezahlbar für 80 Gäste, und mit seiner feinen Perlage und Brioche-Note beeindruckt er sowohl den Bauern als auch die Professorin. Das europäische Flair aus dem Elsass zeigt Weltoffenheit. Der Bürgermeister strahlt: "DAS ist ein Wein, der Stimmen gewinnt!"' },
            { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist leicht und nett – aber zum Anstoßen auf das neue Jahr fehlt das Festliche komplett. Ohne Perlage und ohne Wow-Faktor sagt die Opposition: "Nicht mal ein ordentlicher Sekt zum Neujahr?" Damit gewinnt man keine Wiederwahl.' },
            { wineId: 'rioja_crianza', correct: false, explanation: 'Ein kräftiger Rotwein zum Neujahrsempfang mit Lachsschnittchen? Und für 80 Leute, die angestoßen wollen? Rotwein ist zum Anstoßen unpraktisch (Flecken auf der weißen Bluse!) und passt nicht zu leichten Häppchen. Der Bürgermeister schüttelt den Kopf.' },
          ]
        }
      ],
      summary: 'Bei offiziellen Empfängen zählt: Ein Wein muss alle Geschmäcker bedienen und zum Anlass passen. Crémant verbindet Festlichkeit mit Bezahlbarkeit – das diplomatische Allround-Talent unter den Schaumweinen.'
    },
  ],
};
