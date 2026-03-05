// ============================================================
// DER SOMMELIER — Fragen Level 1: Steakhaus "Black Angus"
// Thema: Rebsorten & Charakter
// ============================================================

QUESTIONS.steakhaus = {
  food_pairing: [
    {
      id: 'fp_1_1', guestId: 'grillmeister', mood: '🔥',
      scenario: 'Der Grillmeister kommt rein, noch Rauch in den Haaren. "Alter, ich hab heute ein T-Bone auf dem Grill gehabt – perfekt medium rare. Jetzt brauch ich nen Wein, der da mithalten kann. Kein Weichei-Wein!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chianti', correct: true, favorite: true, explanation: 'Chianti mit seiner Kirsche und den Tanninen hält dem saftigen T-Bone stand – ein Klassiker zu Steak!' },
        { wineId: 'primitivo', correct: true, explanation: 'Primitivo hat ordentlich Wumms und passt zu Steak – aber dem T-Bone medium rare fehlt mit Primitivo die feine Tanninstruktur, die Chianti mitbringt.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé zum Steak? Zu leicht. Der Grillmeister will Wumms.' },
        { wineId: 'spaetburgunder', acceptable: true, explanation: 'Spätburgunder ist ein feiner Roter und funktioniert zum Steak – aber für ein saftiges T-Bone medium rare ist er etwas zu leicht und elegant. Dem Grillmeister fehlt der Wumms.' },
      ]
    },
    {
      id: 'fp_1_2', guestId: 'der_amerikaner', mood: '🤠',
      scenario: '"Hey buddy!" Der Amerikaner in Baseball-Cap strahlt über sein Texas-Grinsen. "Ich hab das Mega-Rumpsteak bestellt, well done – und dazu den kräftigsten Roten, den ihr habt. Go big or go home!"',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'primitivo', correct: true, favorite: true, explanation: 'Primitivo di Manduria – kraftvoll, fruchtig, vollmundig. Genau der Wumms, den ein Steak-Fan braucht!' },
        { wineId: 'chianti', correct: true, explanation: 'Chianti ist ein solider Roter zum Steak – aber für "den kräftigsten Roten" fehlt ihm der volle Körper des Primitivo.' },
        { wineId: 'riesling', correct: false, explanation: 'Riesling ist leicht und säurebetont – passt nicht zum kräftigen Steak.' },
      ]
    },
    {
      id: 'fp_1_3', guestId: 'fitnesstrainerin', mood: '💪',
      scenario: 'Die Fitnesstrainerin bestellt gegrillte Hähnchenbrust mit Avocado-Salat. "Wenig Kohlenhydrate, viel Protein. Und ein Glas Wein darf schon sein – aber bitte was Frisches, Leichtes."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Grüner Veltliner – pfeffrig, frisch und leicht. Perfekt zur gesunden Hähnchenbrust!' },
        { wineId: 'rose_provence', correct: true, explanation: 'Rosé de Provence ist leicht und frisch – passt zum Salat, aber die pfeffrige Note des Veltliners harmoniert besser mit dem Hähnchen.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Lieblicher Roter zum Fitness-Salat? Das passt geschmacklich nicht zusammen.' },
        { wineId: 'sekt', acceptable: true, explanation: 'Gut gekühlter Sekt zur leichten Hähnchenbrust ist nicht verkehrt – die Kohlensäure erfrischt. Aber als Essensbegleiter fehlt ihm die Würze und Substanz, die der Grüne Veltliner mitbringt.' },
      ]
    },
    {
      id: 'fp_1_4', guestId: 'marco', mood: '🇮🇹',
      scenario: 'Marco, der italienische Austauschstudent, bestellt mit breitem Lächeln: "Spaghetti Bolognese, per favore! Come a casa." Er küsst seine Fingerspitzen. "Und einen richtigen italienischen Wein dazu – keinen deutschen!" Er zwinkert.',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chianti', correct: true, favorite: true, explanation: 'Chianti zur Bolognese – wie von Marcos Mamma gemacht! Sangiovese und Tomate sind ein Traumpaar.' },
        { wineId: 'primitivo', correct: true, explanation: 'Primitivo ist auch italienisch und kräftig genug für Bolognese – aber Sangiovese und Tomate ist das klassischere Paar als Primitivo.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zur Bolognese? In Italien würde man dich auslachen.' },
      ]
    },
    {
      id: 'fp_1_5', guestId: 'ehepaar_koch', mood: '🥂',
      scenario: 'Ehepaar Koch kommt festlich gekleidet: Heute ist ihr 30. Hochzeitstag! "Wir wollen erst mal mit etwas Prickelndem anstoßen, bevor das Essen kommt. Haben Sie etwas Festliches?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sekt', correct: true, favorite: true, explanation: 'Deutscher Sekt – prickelnd, festlich und genau richtig für einen Toast auf 30 Jahre Liebe!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist ein stiller Rotwein – zum Anstoßen braucht es was Prickelndes!' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina zum Hochzeitstag? Das wäre eine mutige Wahl – und nicht unbedingt festlich.' },
      ]
    },
    {
      id: 'fp_1_6', guestId: 'business_duo', mood: '💼',
      scenario: 'Zwei Geschäftsleute im Anzug sitzen beim Arbeitsessen. Der Ältere bestellt Rinderfilet mit Pfeffersoße. "Dazu einen eleganten Roten bitte – aber nicht zu laut. Wir müssen noch über Zahlen reden."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'spaetburgunder', correct: true, favorite: true, explanation: 'Spätburgunder – elegant, geschmeidig, nicht zu dominant. Der diplomatische Rotwein fürs Geschäftsessen.' },
        { wineId: 'chianti', correct: true, explanation: 'Chianti passt gut zum Rinderfilet und ist seriös genug – aber Spätburgunder ist die elegantere, dezentere Wahl für ein diskretes Geschäftsessen.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist kräftig – fast zu "laut" fürs diskrete Geschäftsessen.' },
      ]
    },
    {
      id: 'fp_1_7', guestId: 'stammgast_jens', mood: '🍔',
      scenario: 'Stammgast Jens hat sich heute den Mega-Burger mit Jalapeños und BBQ-Sauce bestellt. Er klopft auf den Tisch: "So, letztes Mal hatte ich Primitivo – top! Aber heute will ich was Neues. Was passt zum Burger, Chef?"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chianti', correct: true, favorite: true, explanation: 'Chianti mit seiner Kirschfrucht und den Tanninen schneidet durch die BBQ-Sauce und hält der Würze stand – ein kräftiger Essensbegleiter!' },
        { wineId: 'primitivo', correct: true, explanation: 'Primitivo hat die Power für den Mega-Burger – aber Jens hatte ihn letztes Mal schon. Chianti bietet das Neue, das er sucht, plus die Tannine zur BBQ-Sauce.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt zum Mega-Burger? Jens würde dich auslachen.' },
      ]
    },
    {
      id: 'fp_1_8', guestId: 'fitnesstrainerin', mood: '🥗',
      scenario: 'Die Fitnesstrainerin ist heute mit einer Kollegin da. "Zwei Mal gegrillten Lachs mit Zitrone und Dill bitte! Und dazu einen Weißwein – trocken, nicht zu viel Alkohol. Wir müssen morgen früh raus zum Bootcamp."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'mueller_thurgau', correct: true, favorite: true, explanation: 'Müller-Thurgau ist mild, leicht und hat moderate 11-12% Alkohol – perfekt zum Lachs und für den Bootcamp-Morgen!' },
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Grüner Veltliner ist trocken und passt gut zu Fisch – aber er hat etwas mehr Körper und Alkohol als Müller-Thurgau, was bei der Bootcamp-Bedingung nicht ideal ist.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist ein Rotwein – zum gegrillten Lachs mit Zitrone und Dill passt ein frischer Weißer viel besser.' },
      ]
    },
    {
      id: 'fp_1_9', guestId: 'die_veganerin', mood: '🌿',
      scenario: 'Die Veganerin hat heute eine Freundin mitgebracht. "Wir nehmen beide den gegrillten Spargel mit Kräuterbutter – also, vegane Kräuterbutter natürlich. Und dazu einen trockenen Weißen, der die Frühlingsstimmung einfängt."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Grüner Veltliner und Spargel – ein österreichischer Klassiker! Die pfeffrige Frische und die zarte Kräuternote passen perfekt zum grünen Spargel.' },
        { wineId: 'rose_provence', correct: true, explanation: 'Rosé de Provence ist trocken und leicht genug für Spargel – aber der Grüne Veltliner ist die Traumkombination schlechthin, seine Pfeffernote hebt den Spargel auf ein neues Level.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo zum Spargel? Der kraftvolle Rote würde den feinen Spargelgeschmack komplett überrollen.' },
      ]
    },
    {
      id: 'fp_1_10', guestId: 'ehepaar_koch', mood: '🍽️',
      scenario: 'Herr Koch hat sich für das Entrecôte mit Rosmarin-Kartoffeln entschieden, Frau Koch nimmt den Wildlachssalat. Sie schauen sich an: "Können Sie uns einen Wein empfehlen, der zu beiden Gerichten passt? Wir teilen gerne eine Flasche."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'spaetburgunder', correct: true, favorite: true, explanation: 'Spätburgunder ist der perfekte Kompromiss – leicht genug für den Lachs, aber mit genügend Frucht und Struktur für das Entrecôte. Der Diplomat unter den Rotweinen!' },
        { wineId: 'chianti', correct: true, explanation: 'Chianti funktioniert gut zum Entrecôte – aber für Frau Kochs Lachs ist er schon etwas dominant. Spätburgunder ist die elegantere Brücke zwischen beiden Gerichten.' },
        { wineId: 'sekt', correct: false, explanation: 'Sekt als Essensbegleiter zum Entrecôte? Da fehlt es an Substanz für das Fleisch.' },
        { wineId: 'rose_provence', acceptable: true, explanation: 'Rosé de Provence ist trocken und leicht – zum Wildlachssalat von Frau Koch geht das, aber für Herrn Kochs Entrecôte fehlt die Substanz. Spätburgunder schafft die Brücke zwischen beiden besser.' },
      ]
    },
    {
      id: 'fp_1_11', guestId: 'der_trucker', mood: '🥩',
      scenario: 'Der Trucker parkt seinen 40-Tonner und kommt rein: "So, Feierabend! Wiener Schnitzel mit Kartoffelsalat, bitte. Und dazu einen Weißen – aber keinen süßen Kinderwein, sondern was Ordentliches."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Grüner Veltliner – der Klassiker zum Wiener Schnitzel! Die pfeffrige Frische und die knackige Säure schneiden perfekt durch das panierte Fleisch.' },
        { wineId: 'mueller_thurgau', correct: true, explanation: 'Müller-Thurgau ist mild und unkompliziert – passt zum Schnitzel, aber dem Grünen Veltliner fehlt nichts: seine Pfeffernote und der Biss machen ihn zum ultimativen Schnitzelwein.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo zum Wiener Schnitzel? Der wuchtige Rote erschlägt das zarte Kalbfleisch unter der Panade.' },
      ]
    },
    {
      id: 'fp_1_12', guestId: 'claudia', mood: '🥗',
      scenario: 'Claudia bestellt einen Ziegenkäse-Salat mit Honig-Walnuss-Dressing. "Und dazu einen Weißwein, der nicht zu neutral ist – ich mag es, wenn der Wein auch was zu sagen hat. Etwas mit Charakter!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Grüner Veltliner – die pfeffrige Würze und die frische Säure harmonieren wunderbar mit dem cremigen Ziegenkäse und kontrastieren das süße Honig-Dressing. Ein Wein mit Charakter!' },
        { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist mild und zurückhaltend – genau das Neutrale, das Claudia nicht haben will. Dem fehlt der Charakter für den kräftigen Ziegenkäse.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist ein milder Roter – zum Ziegenkäse-Salat mit Honig fehlt ihm die frische Säure, die das Gericht braucht.' },
      ]
    },
    {
      id: 'fp_1_13', guestId: 'die_nachbarin', mood: '🍝',
      scenario: 'Die Nachbarin bestellt Spaghetti Carbonara: "Wissen Sie, mit richtig viel Parmesan und Speck – so wie beim Italiener um die Ecke. Und einen Weißwein dazu, bitte. Mein Sohn, der Weinbau studiert, sagt, zu Carbonara passt ein trockener Weißer am besten."',
      question: 'Welchen Wein empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Grüner Veltliner – die pfeffrige Würze und die frische Säure schneiden perfekt durch die cremige Ei-Käse-Sauce. Ihr Sohn hat recht: ein trockener Weißer ist hier Gold wert!' },
        { wineId: 'rose_provence', correct: true, explanation: 'Rosé de Provence ist leicht und trocken genug für Carbonara – aber der Grüne Veltliner hat mehr Biss und Würze, die der cremigen Sauce besser Paroli bieten.' },
        { wineId: 'imiglykos', correct: false, explanation: 'Ein lieblicher griechischer Rotwein zur Carbonara? Die Süße und die cremige Ei-Sauce würden sich gegenseitig erschlagen.' },
      ]
    },
  ],

  preference: [
    {
      id: 'pref_1_1', guestId: 'stammgast_jens', mood: '💪',
      scenario: 'Stammgast Jens, ehemaliger Handballspieler, lässt sich auf seinen Platz fallen. "So, heute will ich mal was anderes als Bier. Richtig kräftigen Roten! Vollmundig, fruchtig – nix für Weicheier!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'primitivo', correct: true, favorite: true, explanation: 'Primitivo – kräftig, fruchtig, vollmundig. Genau der Powerwein für einen Ex-Handballer, der vom Bier auf Wein umsteigt!' },
        { wineId: 'chianti', correct: true, explanation: 'Chianti ist ein ordentlicher Roter mit Charakter – aber für Jens\' Ansage "vollmundig, nix für Weicheier" hat Primitivo den kräftigeren Körper.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé ist zu leicht für Jens – der will was mit Wumms.' },
      ]
    },
    {
      id: 'pref_1_2', guestId: 'ehepaar_koch', mood: '🥂',
      scenario: '"Wir haben schon angestoßen," strahlt Frau Koch, "aber jetzt wollen wir noch was Prickelndes zur Vorspeise. Festlich soll es sein – aber muss ja nicht gleich Champagner sein!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sekt', correct: true, favorite: true, explanation: 'Sekt – prickelnd, festlich und preislich vernünftig. Champagner-Feeling ohne Champagner-Preis!' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist still – ohne Prickeln keine Feststimmung.' },
        { wineId: 'retsina', correct: false, explanation: 'Retsina ist nicht prickelnd und geschmacklich sehr speziell.' },
      ]
    },
    {
      id: 'pref_1_3', guestId: 'die_veganerin', mood: '🌿',
      scenario: 'Die Veganerin hat den Steak-Laden eher skeptisch betreten, sich aber für den Gemüseteller entschieden. "Haben Sie einen trockenen Rosé? Irgendwas nicht zu Süßes, nicht zu Schweres."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rose_provence', correct: true, favorite: true, explanation: 'Rosé de Provence – trocken, leicht, fruchtig. Perfekt zum Gemüseteller und zur Einstellung.' },
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Grüner Veltliner ist trocken und nicht schwer – eine solide Wahl. Aber sie hat explizit nach Rosé gefragt, und der Provence-Rosé trifft genau ihren Wunsch.' },
        { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist süßlich – sie wollte ausdrücklich nichts Süßes.' },
      ]
    },
    {
      id: 'pref_1_4', guestId: 'marco', mood: '🍷',
      scenario: 'Marco lehnt sich zurück und sagt: "Weißt du, ich vermisse Italien. Gibt es hier einen leichten, eleganten Rotwein? Nicht so schwer – eher wie ein Burgunder, weißt du? Etwas mit Finesse."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'spaetburgunder', correct: true, favorite: true, explanation: 'Spätburgunder = Pinot Noir – genau die Finesse und Eleganz, die Marco sucht. Fast wie Burgund!' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist kraftvoll und schwer – das Gegenteil von der gewünschten Eleganz.' },
        { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder ist OK, aber nicht die elegante Finesse, die Marco meint.' },
      ]
    },
    {
      id: 'pref_1_5', guestId: 'grillmeister', mood: '🔥',
      scenario: 'Der Grillmeister wischt sich die Hände an der Schürze ab: "Alter, heute kein Steak – heute ist Pulled Pork angesagt! Acht Stunden Smoker. Ich brauch nen fruchtigen Roten, der da mitgeht. Nix Säuerliches!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'primitivo', correct: true, favorite: true, explanation: 'Primitivo – fruchtig, vollmundig, wenig Säure. Die dunkle Beerenfrucht harmoniert perfekt mit dem rauchigen Pulled Pork!' },
        { wineId: 'chianti', correct: true, explanation: 'Chianti hat genug Substanz für Pulled Pork – aber als Sangiovese-Wein bringt er von Natur aus mehr Säure mit, und der Grillmeister wollte explizit "nix Säuerliches". Primitivo ist hier die fruchtigere Wahl.' },
        { wineId: 'rose_provence', correct: false, explanation: 'Rosé zum Pulled Pork? Zu leicht. Das acht Stunden Smoker-Fleisch braucht einen Wein mit Wumms.' },
      ]
    },
    {
      id: 'pref_1_6', guestId: 'der_amerikaner', mood: '🤠',
      scenario: 'Der Amerikaner fächert sich Luft zu: "Man, ist das heiß heute! Ich brauch erstmal was Erfrischendes bevor ich die Karte studiere. Irgendwas Kaltes, Spritziges – wie eine Klimaanlage im Glas!"',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'sekt', correct: true, favorite: true, explanation: 'Ein gut gekühlter Sekt – die Kohlensäure erfrischt, die Kühle belebt. Besser als jede Klimaanlage und der perfekte Einstieg in den Abend!' },
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Grüner Veltliner ist frisch und kühl serviert sehr erfrischend – aber für das Spritzig-Prickelnde, das er sucht, ist Sekt mit seiner Kohlensäure der bessere Durstlöscher.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo bei Hitze? Der volle, warme Rote ist das Gegenteil von Erfrischung.' },
      ]
    },
    {
      id: 'pref_1_7', guestId: 'fitnesstrainerin', mood: '🧘',
      scenario: 'Die Fitnesstrainerin hat heute ihren Ruhetag. "Ich hab die ganze Woche nur Proteinshakes und Meal Prep gehabt. Heute gönne ich mir was! Einen Rotwein, aber bitte nichts zu Wuchtiges – elegant und nicht zu viel Alkohol."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'spaetburgunder', correct: true, favorite: true, explanation: 'Spätburgunder – elegant, seidig und mit moderatem Alkohol um die 12-13%. Der perfekte "Belohnungswein" für einen verdienten Ruhetag!' },
        { wineId: 'chianti', correct: true, explanation: 'Chianti ist nicht übermäßig schwer und hat schöne Frucht – aber Spätburgunder ist noch eleganter und hat tendenziell weniger Alkohol, genau was sie heute sucht.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo mit 14-15% Alkohol und vollem Körper? Das ist eher ein Powerlifting-Wein – nichts für den Ruhetag.' },
      ]
    },
    {
      id: 'pref_1_8', guestId: 'business_duo', mood: '🍸',
      scenario: 'Die jüngere Geschäftsfrau blickt von der Weinkarte auf: "Wir haben den Deal eingetütet! Jetzt will ich feiern. Aber bitte nichts Rotes – ich hab ein weißes Kleid an und kenne mich." Sie lacht. "Etwas Weißes, Trockenes mit Charakter."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'gruener_veltliner', correct: true, favorite: true, explanation: 'Grüner Veltliner – trocken, charaktervoll mit seiner typischen Pfeffernote, und weiß genug für jedes Kleid. Ein Wein, der so selbstbewusst ist wie die Geschäftsfrau!' },
        { wineId: 'rose_provence', correct: true, explanation: 'Rosé de Provence ist trocken und hat Charakter – aber sie hat explizit "nichts Rotes" gesagt, und manche rechnen Rosé dazu. Der Grüne Veltliner ist die sichere, charakterstarke Wahl in Weiß.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti ist ein Rotwein – weißes Kleid plus Rotwein ist eine gefährliche Kombination, das weiß sie selbst am besten.' },
      ]
    },
    {
      id: 'pref_1_9', guestId: 'der_trucker', mood: '🍺',
      scenario: 'Der Trucker kratzt sich am Kopf: "Also, normalerweise trink ich Bier. Aber meine Frau hat gesagt, ich soll mal was Neues probieren. Haben Sie so einen Anfängerwein? Nicht sauer, nicht kompliziert – einfach lecker."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'dornfelder', correct: true, favorite: true, explanation: 'Dornfelder – mild, fruchtig, wenig Tannine. Der perfekte Einstiegswein für Biertrinker: unkompliziert und mit einer Beerenfrucht, die sofort schmeckt!' },
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder ist elegant und zugänglich – aber für einen Biertrinker-Neuling ist Dornfelder noch unkomplizierter und fruchtiger, der ideale erste Schritt in die Weinwelt.' },
        { wineId: 'chianti', correct: false, explanation: 'Chianti hat markante Säure und Tannine – für einen Weinanfänger eher abschreckend als einladend.' },
      ]
    },
    {
      id: 'pref_1_10', guestId: 'claudia', mood: '☀️',
      scenario: 'Claudia blättert durch die Karte und seufzt: "Es ist so ein schöner Abend, ich sitze auf der Terrasse und will einfach einen leichten, frischen Wein genießen. Trocken, bitte – und am besten was Sommerliches."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'rose_provence', correct: true, favorite: true, explanation: 'Rosé de Provence – DER Terrassenwein schlechthin! Trocken, leicht und mit zarten Fruchtaromen perfekt für einen lauen Sommerabend.' },
        { wineId: 'gruener_veltliner', correct: true, explanation: 'Grüner Veltliner ist frisch und trocken – ein guter Terrassenwein, aber für das sommerliche Feeling hat Rosé de Provence einfach das gewisse Etwas.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo auf der Sommerterrasse? Viel zu wuchtig und warm für einen leichten Abend draußen.' },
      ]
    },
    {
      id: 'pref_1_11', guestId: 'die_nachbarin', mood: '📖',
      scenario: 'Die Nachbarin strahlt: "Unser Buchclub liest gerade einen Toskana-Roman! Da möchte ich passend dazu einen italienischen Rotwein. Nichts zu Schweres – etwas Klassisches zum Schwelgen."',
      question: 'Was empfiehlst du?',
      options: [
        { wineId: 'chianti', correct: true, favorite: true, explanation: 'Chianti – das Herz der Toskana! Sangiovese mit Kirschfrucht und mediterranem Charme. Die Nachbarin wird sich beim nächsten Buchclub wie in der Toskana fühlen!' },
        { wineId: 'spaetburgunder', correct: true, explanation: 'Spätburgunder ist elegant und nicht zu schwer – aber die Nachbarin will ausdrücklich nach Italien reisen, und da ist Chianti die erste Adresse.' },
        { wineId: 'primitivo', correct: false, explanation: 'Primitivo ist zwar italienisch, aber aus Apulien – kein Toskana-Feeling. Und zum gemütlichen Buchclub-Abend ist er etwas zu wuchtig.' },
      ]
    },
  ],

  besserwisser: [
    {
      id: 'bw_1_1', guestId: 'der_amerikaner', mood: '🤠',
      statement: 'Der Amerikaner zeigt auf die Weinkarte: "Chianti – das ist aus dem Veneto, richtig? War ich mal im Urlaub, super Gegend."',
      isCorrect: false,
      correction: 'Knapp daneben! Chianti kommt aus der Toskana, nicht dem Veneto. Im Veneto gibt es dafür Prosecco, Soave und Valpolicella.'
    },
    {
      id: 'bw_1_2', guestId: 'fitnesstrainerin', mood: '🤓',
      statement: '"Ich hab mal gelesen," sagt die Fitnesstrainerin, "dass Spätburgunder und Pinot Noir die gleiche Rebsorte sind. Stimmt das wirklich?"',
      isCorrect: true,
      correction: 'Stimmt! Spätburgunder (DE) = Pinot Noir (FR) = Blauburgunder (AT). Gleiche Traube, verschiedene Namen in verschiedenen Ländern.'
    },
    {
      id: 'bw_1_3', guestId: 'grillmeister', mood: '🍺',
      statement: 'Der Grillmeister prostet mit seinem Sekt: "Weißt du, Sekt ist eigentlich ein französisches Produkt – wird doch alles in der Champagne gemacht, oder?"',
      isCorrect: false,
      correction: 'Nein! Sekt ist ein deutsches Produkt und darf überall hergestellt werden. Nur "Champagner" darf ausschließlich aus der Champagne kommen – streng geschützte Herkunft!'
    },
    {
      id: 'bw_1_4', guestId: 'business_duo', mood: '🧐',
      statement: 'Der ältere Geschäftsmann schwenkt sein Glas: "Merken Sie sich, junger Mann: Je dunkler der Rotwein, desto schwerer ist er. Das ist ein Naturgesetz."',
      isCorrect: false,
      correction: 'Nicht immer! Nebbiolo (Barolo) ist relativ hell aber sehr kraftvoll. Und ein junger Malbec kann tiefschwarz, aber fruchtig-weich sein. Farbe ≠ Gewicht!'
    },
    {
      id: 'bw_1_5', guestId: 'stammgast_jens', mood: '🍷',
      statement: 'Jens kippt seinen Primitivo und sagt: "Weißt du was, Primitivo heißt so, weil er primitiv hergestellt wird – einfach Trauben pressen und fertig. Deswegen ist der auch so günstig!"',
      isCorrect: false,
      correction: 'Der Name "Primitivo" kommt vom lateinischen "primativus" – er reift früh (primitiv = "der Erste"). Die Traube wird als eine der ersten im Jahr gelesen. Mit primitiver Herstellung hat das nichts zu tun!'
    },
    {
      id: 'bw_1_6', guestId: 'marco', mood: '🤓',
      statement: 'Marco schwenkt sein Glas Chianti und sagt: "Weißt du, die Tannine im Rotwein – die kommen hauptsächlich aus der Traubenschale. Deswegen hat Rotwein dieses trockene Gefühl im Mund."',
      isCorrect: true,
      correction: 'Bravo, Marco! Tannine sind Gerbstoffe, die vor allem in der Schale, den Kernen und Stielen der Traube sitzen. Bei der Rotwein-Herstellung gärt der Most zusammen mit den Schalen (Maischegärung), deshalb hat Rotwein deutlich mehr Tannine als Weißwein.'
    },
    {
      id: 'bw_1_7', guestId: 'business_duo', mood: '🤓',
      statement: 'Der jüngere Geschäftsmann sagt zu seinem Kollegen: "Übrigens, wenn man einen Wein dekantiert, lässt man ihn atmen. Das verbessert den Geschmack, weil die Aromen sich entfalten können."',
      isCorrect: true,
      correction: 'Richtig! Durch Dekantieren (Umfüllen in eine Karaffe) kommt der Wein mit Sauerstoff in Kontakt. Bei jungen, tanninreichen Rotweinen werden die Tannine weicher und die Aromen öffnen sich. Bei älteren Weinen trennt man zudem den Bodensatz ab.'
    },
    {
      id: 'bw_1_8', guestId: 'der_trucker', mood: '🤓',
      statement: 'Der Trucker bestellt seinen Spätburgunder und meint: "Hab ich im Radio gehört: Rotwein soll man nicht so kalt trinken wie Weißwein, aber auch nicht warm. So 16 bis 18 Grad, oder?"',
      isCorrect: true,
      correction: 'Gut aufgepasst! Kräftige Rotweine entfalten bei 16-18°C ihre besten Aromen. Leichte Rote wie Spätburgunder sogar etwas kühler bei 14-16°C. Zu warm (über 20°C) schmeckt der Alkohol vor, zu kalt werden die Aromen verschluckt.'
    },
    {
      id: 'bw_1_9', guestId: 'claudia', mood: '🤓',
      statement: 'Claudia schaut nachdenklich auf den Rosé de Provence und sagt: "Ich hab gelesen, dass Chardonnay die verbreitetste weiße Rebsorte der Welt ist. Die wächst doch wirklich überall, oder?"',
      isCorrect: true,
      correction: 'Stimmt! Chardonnay ist die meistangebaute weiße Rebsorte weltweit – von Burgund über Kalifornien bis Australien. Sie ist extrem anpassungsfähig und kann völlig unterschiedliche Stile hervorbringen: vom schlanken Chablis bis zum buttrigen kalifornischen Chardonnay.'
    },
    {
      id: 'bw_1_10', guestId: 'die_nachbarin', mood: '🤓',
      statement: 'Die Nachbarin nippt an ihrem Grüner Veltliner und sagt: "Mein Sohn studiert Weinbau und hat mir erzählt, dass Grüner Veltliner fast nur in Österreich angebaut wird. Das ist quasi ihr Nationalwein!"',
      isCorrect: true,
      correction: 'Hat sie recht! Grüner Veltliner ist mit Abstand die wichtigste Rebsorte Österreichs – rund ein Drittel der gesamten Rebfläche! Außerhalb Österreichs gibt es nur kleine Anbauflächen in der Slowakei und Tschechien. Ein echter österreichischer Nationalschatz.'
    },
  ],

  weinwissen: [
    {
      id: 'ww_1_1', guestId: 'lisa', mood: '📝',
      question: 'Lisa lernt fleißig mit: "Ich hab gehört, Spätburgunder hat noch einen anderen Namen? Welche berühmte Rebsorte steckt dahinter?"',
      options: [
        { text: 'Pinot Noir', correct: true },
        { text: 'Cabernet Sauvignon', correct: false },
        { text: 'Merlot', correct: false },
        { text: 'Tempranillo', correct: false },
      ],
      explanation: 'Spätburgunder = Pinot Noir! Eine der edelsten roten Rebsorten der Welt, berühmt aus dem Burgund.'
    },
    {
      id: 'ww_1_2', guestId: 'marco', mood: '🇮🇹',
      question: 'Marco will dich testen: "Sag mal, aus welcher Region kommt Chianti? Ich wette, du weißt es nicht!"',
      options: [
        { text: 'Toskana', correct: true },
        { text: 'Piemont', correct: false },
        { text: 'Venetien', correct: false },
        { text: 'Sizilien', correct: false },
      ],
      explanation: 'Chianti kommt aus der Toskana in Mittelitalien. Die Hauptrebsorte ist Sangiovese.'
    },
    {
      id: 'ww_1_3', guestId: 'bergmann', mood: '🤔',
      question: 'Herr Bergmann grübelt beim Sekt: "Was ist eigentlich der Unterschied zwischen Sekt und Champagner? Schmeckt doch beides gleich..."',
      options: [
        { text: 'Die Herkunft – Champagner nur aus der Champagne', correct: true },
        { text: 'Die Rebsorte ist komplett anders', correct: false },
        { text: 'Sekt ist immer süßer', correct: false },
        { text: 'Es gibt keinen Unterschied', correct: false },
      ],
      explanation: 'Champagner darf NUR aus der Region Champagne (FR) kommen – streng geschützte Herkunftsbezeichnung. Methode und Rebsorten können ähnlich sein!'
    },
    {
      id: 'ww_1_4', guestId: 'die_veganerin', mood: '🌍',
      question: '"Primitivo di Manduria – das klingt so exotisch," sagt die Veganerin. "Aus welchem Land kommt der eigentlich?"',
      options: [
        { text: 'Italien (Apulien)', correct: true },
        { text: 'Spanien', correct: false },
        { text: 'Argentinien', correct: false },
        { text: 'Portugal', correct: false },
      ],
      explanation: 'Primitivo kommt aus Apulien (Puglia) im Süden Italiens. Fun Fact: Er ist genetisch identisch mit dem kalifornischen Zinfandel!'
    },
    {
      id: 'ww_1_5', guestId: 'grillmeister', mood: '🥩',
      question: 'Der Grillmeister fragt beim Steak: "Alle reden immer vom Körper beim Wein. Was meint man damit eigentlich?"',
      options: [
        { text: 'Das Mundgefühl – leicht bis schwer', correct: true },
        { text: 'Die Farbe des Weins', correct: false },
        { text: 'Den Alkoholgehalt allein', correct: false },
        { text: 'Die Flaschenform', correct: false },
      ],
      explanation: '"Körper" beschreibt das Mundgefühl: von leicht (wie Wasser) bis voll/schwer (wie Milch). Beeinflusst durch Alkohol, Tannine, Extrakt und Glycerin.'
    },
    {
      id: 'ww_1_6', guestId: 'der_amerikaner', mood: '🇺🇸',
      question: 'Der Amerikaner zeigt auf sein Glas Primitivo: "Hey, in Kalifornien trinken wir Zinfandel – und der schmeckt genau so! Sind das die gleichen Trauben?"',
      options: [
        { text: 'Ja – Primitivo und Zinfandel sind genetisch identisch', correct: true },
        { text: 'Nein, komplett verschiedene Rebsorten', correct: false },
        { text: 'Zinfandel ist eine Kreuzung aus Primitivo und Merlot', correct: false },
        { text: 'Nur der Name ist gleich, die Trauben sind anders', correct: false },
      ],
      explanation: 'DNA-Analysen haben bewiesen: Primitivo (IT) = Zinfandel (USA) = Crljenak Kaštelanski (Kroatien). Die gleiche Traube reiste über Jahrhunderte durch die Welt und bekam überall einen anderen Namen!'
    },
    {
      id: 'ww_1_7', guestId: 'lisa', mood: '🤔',
      question: 'Lisa dreht nachdenklich ihr Glas: "Chef, ich kapier das mit dem Tannin nicht. Wo kommen die Tannine im Rotwein eigentlich her?"',
      options: [
        { text: 'Aus Schalen, Kernen und Stielen der Trauben', correct: true },
        { text: 'Aus der Hefe während der Gärung', correct: false },
        { text: 'Aus dem Eichenfass – nur daher', correct: false },
      ],
      explanation: 'Tannine (Gerbstoffe) sitzen in der Beerenhaut, den Kernen und den Stielen. Bei Rotwein gärt der Most mit den Schalen zusammen (Maischegärung) – deswegen hat Rotwein viel mehr Tannine als Weißwein, wo die Schalen vorher entfernt werden.'
    },
    {
      id: 'ww_1_8', guestId: 'bergmann', mood: '🍷',
      question: 'Herr Bergmann schwenkt seinen Spätburgunder und fragt: "Mir fällt auf, dass manche Rotweine richtig dickflüssig an der Glaswand runterlaufen und andere nicht. Was sagt das über den Wein?"',
      options: [
        { text: 'Dickere Schlieren deuten auf mehr Alkohol und Extrakt hin', correct: true },
        { text: 'Das bedeutet, der Wein ist schlecht geworden', correct: false },
        { text: 'Das hat mit der Glasform zu tun, nicht mit dem Wein', correct: false },
      ],
      explanation: 'Die "Kirchenfenster" oder "Tränen" an der Glaswand entstehen durch den Marangoni-Effekt: Je mehr Alkohol und Glycerin im Wein, desto langsamer und dicker laufen die Schlieren herunter. Ein kraftvoller Primitivo zeigt das deutlicher als ein leichter Spätburgunder!'
    },
    {
      id: 'ww_1_9', guestId: 'stammgast_jens', mood: '🤨',
      question: 'Jens hält sein Glas Chianti hoch und will es wissen: "Ist Chianti eigentlich eine Rebsorte oder was? Ich bestell immer Chianti, aber was genau ist da drin?"',
      options: [
        { text: 'Chianti ist eine Region – die Hauptrebsorte ist Sangiovese', correct: true },
        { text: 'Chianti ist der Name der Rebsorte', correct: false },
        { text: 'Chianti ist ein Verschnitt aus Merlot und Cabernet', correct: false },
      ],
      explanation: 'Chianti ist ein Herkunftsgebiet in der Toskana, keine Rebsorte! Der Wein muss mindestens 70% Sangiovese enthalten. Sangiovese bedeutet übrigens "Blut des Jupiter" – kein Wunder, dass Jens ihn mag!'
    },
    {
      id: 'ww_1_10', guestId: 'ehepaar_koch', mood: '🌡️',
      question: 'Frau Koch fragt besorgt: "Der Kellner hat unseren Rotwein aus dem Kühlschrank geholt – ist das nicht zu kalt? Bei welcher Temperatur trinkt man Rotwein am besten?"',
      options: [
        { text: '14-18°C – leichte Rote kühler, kräftige wärmer', correct: true },
        { text: 'Zimmertemperatur, also ca. 22°C', correct: false },
        { text: 'Wie Weißwein bei 6-8°C', correct: false },
      ],
      explanation: '"Zimmertemperatur" stammt aus einer Zeit, als Zimmer 16-18°C hatten! Heute sind unsere Räume meist wärmer. Leichte Rote wie Spätburgunder lieben 14-16°C, kräftige wie Primitivo 16-18°C. Zu warm schmeckt der Alkohol vor, zu kalt verschwinden die Aromen.'
    },
  ],

  blindtasting: [
    {
      id: 'bt_1_1', guestId: 'grillmeister', mood: '👃',
      clues: {
        appearance: 'Sattes Kirschrot, fast undurchsichtig, mit einem violetten Rand – dunkler als die meisten Rotweine auf der Karte.',
        nose: 'Sofort reife Brombeeren und Pflaumenmus. Dahinter Gewürznelke, ein Hauch Vanille und etwas Süßholz. Warm und einladend.',
        palate: 'Vollmundig und samtig. Dunkle Beerenfrucht, weiche Tannine und eine leichte Restsüße. Langer, warmer Abgang mit Gewürznoten.'
      },
      options: [
        { wineId: 'primitivo', correct: true, favorite: true },
        { wineId: 'spaetburgunder', correct: false },
        { wineId: 'chianti', correct: false },
        { wineId: 'rose_provence', correct: false },
      ],
      explanation: 'Dunkle Farbe, Brombeer-Pflaumen-Aromatik, voller Körper und leichte Restsüße – das schreit nach Primitivo di Manduria! Spätburgunder wäre heller und eleganter, Chianti hätte mehr Sauerkirsche und Säure.'
    },
    {
      id: 'bt_1_2', guestId: 'ehepaar_koch', mood: '👃',
      clues: {
        appearance: 'Blassrosa, fast lachsfarben. Kristallklar und brillant – sieht aus wie flüssiger Sonnenuntergang.',
        nose: 'Frische Erdbeeren, ein zarter Hauch Lavendel und Zitrusschale. Leicht und einladend, wie ein Sommergarten.',
        palate: 'Knochentrocken und leicht. Frische rote Früchte, dezente Kräuternoten und eine knackige Säure. Kurzer, erfrischender Abgang.'
      },
      options: [
        { wineId: 'rose_provence', correct: true, favorite: true },
        { wineId: 'sekt', correct: false },
        { wineId: 'gruener_veltliner', correct: false },
        { wineId: 'spaetburgunder', correct: false },
      ],
      explanation: 'Blassrosa Farbe, Erdbeere-Lavendel-Nase und ein leichter, trockener Gaumen – das ist der klassische Rosé de Provence! Sekt hätte Kohlensäure, Grüner Veltliner ist weiß, und Spätburgunder wäre deutlich dunkler und voller.'
    },
    {
      id: 'bt_1_3', guestId: 'lisa', mood: '👃',
      clues: {
        appearance: 'Helles bis mittleres Rubinrot, fast durchscheinend. Man kann durch das Glas lesen – kein Schwergewicht.',
        nose: 'Kirsche, Erdbeere und ein feiner Hauch von Nelke und feuchtem Waldboden. Dezent und elegant, nichts Lautes.',
        palate: 'Leicht bis mittelschwer, seidige Tannine. Rote Beeren, eine sanfte Würze und eine feine Säure. Geschmeidiger, mittellanger Abgang.'
      },
      options: [
        { wineId: 'spaetburgunder', correct: true, favorite: true },
        { wineId: 'chianti', correct: false },
        { wineId: 'primitivo', correct: false },
        { wineId: 'gruener_veltliner', correct: false },
      ],
      explanation: 'Helle, durchscheinende Farbe, Kirsch-Erdbeer-Nase mit Waldboden und ein seidiger, eleganter Gaumen – typisch Spätburgunder (Pinot Noir)! Chianti hätte mehr Sauerkirsche und straffere Tannine, Primitivo wäre viel dunkler und kraftvoller.'
    },
  ],
};
