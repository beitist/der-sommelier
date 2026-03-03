// ============================================================
// DER SOMMELIER — Datenbank (Weine, Regionen, Gäste, Chefs, Fragen)
// ============================================================

const CONFIG = {
  levels: [
    { id: 'imbiss', name: 'Imbiss "Zum Goldenen Gyros"', shortName: 'Goldener Gyros', icon: '🌯',
      xpNeeded: 0, xpToNext: 80, unlockRegions: ['deutschland', 'italien', 'griechenland'],
      bgKey: 'imbiss', themeLabel: 'Basics & Weinstile',
      description: 'Dein erster Job! Rot, Weiß, Rosé – mehr brauchst du hier erstmal nicht.' },
    { id: 'steakhaus', name: 'Steakhaus "Black Angus"', shortName: 'Black Angus', icon: '🥩',
      xpNeeded: 80, xpToNext: 200, unlockRegions: ['oesterreich', 'frankreich'],
      bgKey: 'steakhaus', themeLabel: 'Rebsorten & Charakter',
      description: 'Kräftige Rote zum Steak – und die ersten edleren Tropfen.' },
    { id: 'gutbuergerlich', name: 'Gasthaus "Zur Linde"', shortName: 'Zur Linde', icon: '🍽️',
      xpNeeded: 200, xpToNext: 400, unlockRegions: ['spanien', 'portugal'],
      bgKey: 'gutbuergerlich', themeLabel: 'Wein & Essen',
      description: 'Regionale Küche, Food Pairing und die Kunst der richtigen Empfehlung.' },
    { id: 'gehoben', name: 'Restaurant "Le Vignoble"', shortName: 'Le Vignoble', icon: '🍷',
      xpNeeded: 400, xpToNext: 700, unlockRegions: ['argentinien', 'suedafrika'],
      bgKey: 'gehoben', themeLabel: 'Terroir & Weinbereitung',
      description: 'Terroir, Jahrgänge, Grand Cru – jetzt wird es anspruchsvoll.' },
    { id: 'sterne', name: 'Sterne-Restaurant "Étoile"', shortName: 'Étoile', icon: '⭐',
      xpNeeded: 700, xpToNext: 999, unlockRegions: [],
      bgKey: 'sterne', themeLabel: 'Verkostung & Weinsprache',
      description: 'Blindverkostung, perfekte Menü-Begleitung, Profi-Vokabular.' },
  ],
  questionsPerShift: 5,
  tipPerCorrect: 12,    // Trinkgeld bei richtiger Empfehlung
  tipPerWrong: 3,       // Mitleids-Trinkgeld bei falscher
  repPerCorrect: 8,
  repPerWrong: -3,
};

// ===== WINE DATABASE (30 Weine) =====
const WINES = {
  // --- LEVEL 0: Imbiss (DE, IT, GR) ---
  dornfelder: {
    id: 'dornfelder', name: 'Dornfelder', region: 'deutschland', level: 0,
    color: 'rot', body: 'mittel', sweetness: 'halbtrocken', price: '€', grape: 'Dornfelder',
    flavors: ['Kirsche', 'Brombeere'],
    pairings: ['Gyros', 'Pizza', 'Grillwurst'],
    description: 'Unkomplizierter, fruchtiger Rotwein aus Deutschland.',
    funFact: 'Dornfelder wurde erst 1955 an der Weinbauschule Weinsberg gezüchtet!',
    label: 'assets/wines/dornfelder.png'
  },
  mueller_thurgau: {
    id: 'mueller_thurgau', name: 'Müller-Thurgau', region: 'deutschland', level: 0,
    color: 'weiss', body: 'leicht', sweetness: 'halbtrocken', price: '€', grape: 'Müller-Thurgau',
    flavors: ['Apfel', 'Muskat', 'Blüten'],
    pairings: ['Salat', 'leichter Fisch', 'Geflügel'],
    description: 'Milder, blumiger Weißwein – beliebt als Alltagswein.',
    funFact: 'Benannt nach dem Schweizer Botaniker Hermann Müller aus dem Kanton Thurgau.',
    label: 'assets/wines/mueller_thurgau.png'
  },
  riesling: {
    id: 'riesling', name: 'Riesling trocken', region: 'deutschland', level: 0,
    color: 'weiss', body: 'leicht', sweetness: 'trocken', price: '€', grape: 'Riesling',
    flavors: ['Zitrus', 'Apfel', 'mineralisch'],
    pairings: ['Fisch', 'Geflügel', 'Spargel'],
    description: 'Frischer, säurebetonter Weißwein – Deutschlands Aushängeschild.',
    funFact: 'Erste urkundliche Erwähnung: 1435 am Rhein!',
    label: 'assets/wines/riesling.png'
  },
  lambrusco: {
    id: 'lambrusco', name: 'Lambrusco', region: 'italien', level: 0,
    color: 'rot', body: 'leicht', sweetness: 'lieblich', price: '€', grape: 'Lambrusco',
    flavors: ['Erdbeere', 'Kirsche', 'spritzig'],
    pairings: ['Pizza', 'Pasta', 'Antipasti'],
    description: 'Leicht perlender, süffiger Rotwein aus der Emilia-Romagna.',
    funFact: 'Lambrusco ist eine Familie von über 60 Unterrebsorten!',
    label: 'assets/wines/lambrusco.png'
  },
  imiglykos: {
    id: 'imiglykos', name: 'Imiglykos', region: 'griechenland', level: 0,
    color: 'rot', body: 'leicht', sweetness: 'lieblich', price: '€', grape: 'Agiorgitiko',
    flavors: ['Kirsche', 'Pflaume', 'süß'],
    pairings: ['Gyros', 'Souvlaki', 'Moussaka'],
    description: 'Die "Mädchentraube" – lieblich, süffig, griechisch.',
    funFact: '"Imiglykos" heißt wörtlich "halbtrocken" – obwohl er eher lieblich schmeckt!',
    label: 'assets/wines/imiglykos.png'
  },
  retsina: {
    id: 'retsina', name: 'Retsina', region: 'griechenland', level: 0,
    color: 'weiss', body: 'mittel', sweetness: 'trocken', price: '€', grape: 'Savatiano',
    flavors: ['Harz', 'Kiefer', 'Zitrus'],
    pairings: ['Gyros', 'Feta', 'Oliven', 'Meeresfrüchte'],
    description: 'Geharzter griechischer Weißwein – unverwechselbar.',
    funFact: 'Seit über 2000 Jahren! Antike Griechen versiegelten Amphoren mit Kiefernharz.',
    label: 'assets/wines/retsina.png'
  },

  // --- LEVEL 1: Steakhaus (+AT, FR) ---
  spaetburgunder: {
    id: 'spaetburgunder', name: 'Spätburgunder', region: 'deutschland', level: 1,
    color: 'rot', body: 'mittel', sweetness: 'trocken', price: '€€', grape: 'Pinot Noir',
    flavors: ['Kirsche', 'Himbeere', 'Erde'],
    pairings: ['Braten', 'Geflügel', 'Pilzgerichte', 'Lachs'],
    description: 'Eleganter deutscher Rotwein – das gleiche wie Pinot Noir!',
    funFact: 'Spätburgunder = Pinot Noir. Gleiche Traube, deutsches Gewand.',
    label: 'assets/wines/spaetburgunder.png'
  },
  chianti: {
    id: 'chianti', name: 'Chianti', region: 'italien', level: 1,
    color: 'rot', body: 'mittel', sweetness: 'trocken', price: '€€', grape: 'Sangiovese',
    flavors: ['Kirsche', 'Kräuter', 'Leder'],
    pairings: ['Steak', 'Pasta', 'Hartkäse', 'Tomatengerichte'],
    description: 'Toskanischer Klassiker – der Inbegriff italienischen Rotweins.',
    funFact: 'Die typische Korbflasche (Fiasco) wird heute kaum noch verwendet.',
    label: 'assets/wines/chianti.png'
  },
  primitivo: {
    id: 'primitivo', name: 'Primitivo di Manduria', region: 'italien', level: 1,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€', grape: 'Primitivo',
    flavors: ['Pflaume', 'Schokolade', 'Gewürze'],
    pairings: ['Steak', 'Lamm', 'Wildgerichte', 'reifer Käse'],
    description: 'Kraftvoller, fruchtbetonter Roter aus Apulien – aktuell sehr beliebt.',
    funFact: 'Primitivo und der kalifornische Zinfandel sind genetisch identisch!',
    label: 'assets/wines/primitivo.png'
  },
  gruener_veltliner: {
    id: 'gruener_veltliner', name: 'Grüner Veltliner', region: 'oesterreich', level: 1,
    color: 'weiss', body: 'mittel', sweetness: 'trocken', price: '€', grape: 'Grüner Veltliner',
    flavors: ['Pfeffer', 'Apfel', 'Kräuter'],
    pairings: ['Wiener Schnitzel', 'Spargel', 'Fisch'],
    description: 'Österreichs Parade-Weißwein. Pfeffrig und frisch.',
    funFact: 'Grüner Veltliner macht über 30% der österreichischen Rebfläche aus!',
    label: 'assets/wines/gruener_veltliner.png'
  },
  rose_provence: {
    id: 'rose_provence', name: 'Rosé de Provence', region: 'frankreich', level: 1,
    color: 'rose', body: 'leicht', sweetness: 'trocken', price: '€', grape: 'Grenache/Cinsault',
    flavors: ['Erdbeere', 'Pfirsich', 'Kräuter'],
    pairings: ['Salat', 'Grillen', 'Fisch', 'Sommertag'],
    description: 'Leichter, eleganter Rosé aus Südfrankreich – der Sommer im Glas.',
    funFact: 'Rosé wird NICHT gemischt! Sondern durch kurzen Hautkontakt roter Trauben hergestellt.',
    label: 'assets/wines/rose_provence.png'
  },
  sekt: {
    id: 'sekt', name: 'Deutscher Sekt', region: 'deutschland', level: 1,
    color: 'weiss', body: 'leicht', sweetness: 'trocken', price: '€', grape: 'Riesling/Pinot',
    flavors: ['Apfel', 'Hefe', 'Brioche'],
    pairings: ['Aperitif', 'Feiern', 'leichte Vorspeisen'],
    description: 'Deutschlands Antwort auf Champagner – prickelnd und festlich.',
    funFact: 'Deutschland ist der größte Sekt-Konsument der Welt!',
    label: 'assets/wines/sekt.png'
  },

  // --- LEVEL 2: Gasthaus (+ES, PT) ---
  gewuerztraminer: {
    id: 'gewuerztraminer', name: 'Gewürztraminer', region: 'deutschland', level: 2,
    color: 'weiss', body: 'mittel', sweetness: 'halbtrocken', price: '€€', grape: 'Gewürztraminer',
    flavors: ['Litschi', 'Rosenblüte', 'Gewürze'],
    pairings: ['Asiatische Küche', 'Käse', 'Vesper'],
    description: 'Aromatischer Weißwein mit intensivem Duft – unverwechselbar.',
    funFact: 'Der Name kommt von "Tramin" in Südtirol – dem Ursprungsort der Rebsorte.',
    label: 'assets/wines/gewuerztraminer.png'
  },
  pinot_grigio: {
    id: 'pinot_grigio', name: 'Pinot Grigio', region: 'italien', level: 2,
    color: 'weiss', body: 'leicht', sweetness: 'trocken', price: '€', grape: 'Pinot Grigio',
    flavors: ['Birne', 'Zitrus', 'Mandel'],
    pairings: ['Fisch', 'Meeresfrüchte', 'Salat'],
    description: 'Leichter, erfrischender Weißwein aus Norditalien.',
    funFact: 'Pinot Grigio und Grauburgunder sind exakt die gleiche Rebsorte!',
    label: 'assets/wines/pinot_grigio.png'
  },
  zweigelt: {
    id: 'zweigelt', name: 'Zweigelt', region: 'oesterreich', level: 2,
    color: 'rot', body: 'mittel', sweetness: 'trocken', price: '€€', grape: 'Zweigelt',
    flavors: ['Kirsche', 'Beeren', 'weiche Tannine'],
    pairings: ['Wild', 'Braten', 'Rindfleisch'],
    description: 'Österreichs beliebtester Rotwein – fruchtig und zugänglich.',
    funFact: 'Gezüchtet 1922 von Prof. Friedrich Zweigelt aus Blaufränkisch × St. Laurent.',
    label: 'assets/wines/zweigelt.png'
  },
  rioja_crianza: {
    id: 'rioja_crianza', name: 'Rioja Crianza', region: 'spanien', level: 2,
    color: 'rot', body: 'mittel', sweetness: 'trocken', price: '€€', grape: 'Tempranillo',
    flavors: ['Kirsche', 'Vanille', 'Holz'],
    pairings: ['Tapas', 'Lamm', 'Käse', 'Chorizo'],
    description: 'Spanischer Klassiker – mindestens 24 Monate gereift, davon 12 im Fass.',
    funFact: 'Crianza, Reserva, Gran Reserva – die Stufen zeigen die Reifezeit im Holzfass.',
    label: 'assets/wines/rioja_reserva.png'
  },
  cremant: {
    id: 'cremant', name: 'Crémant d\'Alsace', region: 'frankreich', level: 2,
    color: 'weiss', body: 'leicht', sweetness: 'trocken', price: '€€', grape: 'Chardonnay/Pinot',
    flavors: ['Apfel', 'Birne', 'Blüten'],
    pairings: ['Aperitif', 'Fisch', 'Hochzeiten'],
    description: 'Französischer Schaumwein – gleiche Methode wie Champagner, halber Preis.',
    funFact: 'Crémant darf überall in Frankreich produziert werden – nur nicht in der Champagne!',
    label: 'assets/wines/cremant.png'
  },
  vinho_verde: {
    id: 'vinho_verde', name: 'Vinho Verde', region: 'portugal', level: 2,
    color: 'weiss', body: 'leicht', sweetness: 'trocken', price: '€', grape: 'Loureiro/Alvarinho',
    flavors: ['Zitrus', 'Mineralik', 'leicht spritzig'],
    pairings: ['Fisch', 'Meeresfrüchte', 'Sushi'],
    description: 'Junger, frischer portugiesischer Wein mit leichter Spritzigkeit.',
    funFact: '"Grüner Wein" – nicht wegen der Farbe, sondern weil er jung getrunken wird!',
    label: 'assets/wines/vinho_verde.png'
  },

  // --- LEVEL 3: Le Vignoble (+AR, ZA) ---
  malbec: {
    id: 'malbec', name: 'Malbec', region: 'argentinien', level: 3,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€', grape: 'Malbec',
    flavors: ['Pflaume', 'Brombeere', 'Schokolade'],
    pairings: ['Steak', 'Grillfleisch', 'BBQ'],
    description: 'Argentiniens Aushängeschild – kraftvoll und fruchtig.',
    funFact: 'Malbec stammt ursprünglich aus Cahors, Frankreich – kam im 19. Jh. nach Argentinien!',
    label: 'assets/wines/malbec.png'
  },
  pinotage: {
    id: 'pinotage', name: 'Pinotage', region: 'suedafrika', level: 3,
    color: 'rot', body: 'mittel', sweetness: 'trocken', price: '€€', grape: 'Pinotage',
    flavors: ['Rauch', 'Beeren', 'Kaffee'],
    pairings: ['BBQ', 'Wild', 'würzige Gerichte'],
    description: 'Südafrikas eigene Rebsorte – einzigartig rauchig und erdig.',
    funFact: 'Pinotage = Pinot Noir × Cinsault. Wurde 1925 an der Uni Stellenbosch gezüchtet.',
    label: 'assets/wines/pinotage.png'
  },
  saint_emilion: {
    id: 'saint_emilion', name: 'Saint-Émilion Grand Cru', region: 'frankreich', level: 3,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€€', grape: 'Merlot/Cabernet Franc',
    flavors: ['Cassis', 'Zeder', 'Tabak'],
    pairings: ['Rinderfilet', 'Trüffel', 'Hartkäse'],
    description: 'Bordeaux-Klassiker vom rechten Ufer – elegant und komplex.',
    funFact: 'Saint-Émilion ist UNESCO-Weltkulturerbe – die ganze Weinlandschaft!',
    label: 'assets/wines/bordeaux_rouge.png'
  },
  barolo: {
    id: 'barolo', name: 'Barolo', region: 'italien', level: 3,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€€', grape: 'Nebbiolo',
    flavors: ['Teer', 'Rosen', 'Kirschen', 'Lakritz'],
    pairings: ['Trüffel', 'Risotto', 'Wildgerichte'],
    description: 'Der "König der Weine" aus dem Piemont – mächtig und langlebig.',
    funFact: 'Barolo muss mindestens 38 Monate reifen, davon 18 im Holzfass.',
    label: 'assets/wines/barolo.png'
  },
  chablis_premier_cru: {
    id: 'chablis_premier_cru', name: 'Chablis Premier Cru', region: 'frankreich', level: 3,
    color: 'weiss', body: 'mittel', sweetness: 'trocken', price: '€€€', grape: 'Chardonnay',
    flavors: ['Zitrus', 'Feuerstein', 'mineralisch'],
    pairings: ['Austern', 'Fisch', 'Meeresfrüchte'],
    description: 'Mineralischer Chardonnay aus dem Burgund – ohne Holz, pure Eleganz.',
    funFact: 'Chablis-Böden enthalten fossile Austernschalen – man schmeckt das Meer!',
    label: 'assets/wines/chablis.png'
  },
  riesling_spaetlese: {
    id: 'riesling_spaetlese', name: 'Riesling Spätlese', region: 'deutschland', level: 3,
    color: 'weiss', body: 'mittel', sweetness: 'lieblich', price: '€€', grape: 'Riesling',
    flavors: ['Pfirsich', 'Aprikose', 'Honig'],
    pairings: ['Foie Gras', 'asiatische Küche', 'milde Käse'],
    description: 'Restsüßer Riesling der Prädikatsstufe – reif und aromatisch.',
    funFact: '"Spätlese" = spät gelesene Trauben mit höherer Reife und mehr Zucker.',
    label: 'assets/wines/riesling_spaetlese.png'
  },

  // --- LEVEL 4: Étoile (Premium) ---
  champagner: {
    id: 'champagner', name: 'Champagner', region: 'frankreich', level: 4,
    color: 'weiss', body: 'mittel', sweetness: 'trocken', price: '€€€', grape: 'Chardonnay/Pinot Noir',
    flavors: ['Brioche', 'Zitrus', 'weiße Blüten'],
    pairings: ['Hummer', 'Kaviar', 'Aperitif', 'Feiern'],
    description: 'Der König der Schaumweine – nur aus der Champagne, Frankreich.',
    funFact: 'Dom Pérignon hat den Champagner NICHT erfunden – aber perfektioniert.',
    label: 'assets/wines/champagner.png'
  },
  chateauneuf: {
    id: 'chateauneuf', name: 'Châteauneuf-du-Pape', region: 'frankreich', level: 4,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€€', grape: 'Grenache & Co.',
    flavors: ['Beeren', 'Kräuter', 'Gewürze', 'Leder'],
    pairings: ['Lamm', 'Wild', 'Schmorgerichte'],
    description: 'Mächtiger Rhône-Wein – benannt nach der Sommerresidenz der Päpste.',
    funFact: 'Bis zu 13 verschiedene Rebsorten dürfen verwendet werden!',
    label: 'assets/wines/chateauneuf.png'
  },
  amarone: {
    id: 'amarone', name: 'Amarone della Valpolicella', region: 'italien', level: 4,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€€', grape: 'Corvina/Rondinella',
    flavors: ['Rosinen', 'Schokolade', 'Süßkirsche', 'Mokka'],
    pairings: ['Ossobuco', 'Wildbraten', 'reifer Käse'],
    description: 'Opulenter italienischer Rotwein aus angetrockneten Trauben.',
    funFact: 'Appassimento: Die Trauben werden 3-4 Monate auf Strohmatten getrocknet!',
    label: 'assets/wines/amarone.png'
  },
  eiswein: {
    id: 'eiswein', name: 'Eiswein', region: 'deutschland', level: 4,
    color: 'weiss', body: 'mittel', sweetness: 'süß', price: '€€€', grape: 'Riesling',
    flavors: ['Honig', 'Aprikose', 'Mango', 'Karamell'],
    pairings: ['Desserts', 'Foie Gras', 'Blauschimmelkäse'],
    description: 'Seltener Dessertwein – die Trauben werden gefroren gelesen.',
    funFact: 'Die Trauben müssen bei mindestens -7°C am Stock gefrieren – ein riskantes Warten!',
    label: 'assets/wines/eiswein.png'
  },
  sancerre: {
    id: 'sancerre', name: 'Sancerre', region: 'frankreich', level: 4,
    color: 'weiss', body: 'mittel', sweetness: 'trocken', price: '€€', grape: 'Sauvignon Blanc',
    flavors: ['Stachelbeere', 'Gras', 'Mineralik'],
    pairings: ['Ziegenkäse', 'Fisch', 'Salat'],
    description: 'Eleganter Loire-Weißwein – Benchmark für Sauvignon Blanc.',
    funFact: 'Sancerre und der gegenüber liegende Pouilly-Fumé teilen sich die Loire-Terroirs.',
    label: 'assets/wines/sancerre.png'
  },
  tempranillo_gran_reserva: {
    id: 'tempranillo_gran_reserva', name: 'Tempranillo Gran Reserva', region: 'spanien', level: 4,
    color: 'rot', body: 'voll', sweetness: 'trocken', price: '€€€', grape: 'Tempranillo',
    flavors: ['Leder', 'Tabak', 'reife Kirschen', 'Vanille'],
    pairings: ['Lamm', 'gereifter Käse', 'Festmenü'],
    description: 'Spaniens Krönung – mindestens 60 Monate gereift, davon 24 im Fass.',
    funFact: 'Gran Reserva wird nur in herausragenden Jahrgängen produziert!',
    label: 'assets/wines/tempranillo_gran_reserva.png'
  },
};

// ===== REGIONS (9 Länder) =====
const REGIONS = {
  deutschland: {
    id: 'deutschland', name: 'Deutschland', flag: '🇩🇪',
    mapX: 52, mapY: 28,
    description: 'Berühmt für Riesling und eine Vielfalt an Weißweinen. 13 Anbaugebiete von Mosel bis Baden.',
    mainRegions: 'Mosel, Rheingau, Pfalz, Baden, Württemberg',
    keyFacts: [
      'Größte Rebsorten: Riesling (weiß) und Spätburgunder (rot)',
      'Qualitätsstufen: Tafelwein → Landwein → QbA → Prädikatswein',
      'Ca. 100.000 Hektar Rebfläche – 65% Weißwein',
      'Prädikate: Kabinett, Spätlese, Auslese, Beerenauslese, Eiswein',
    ],
    wines: ['dornfelder', 'mueller_thurgau', 'riesling', 'spaetburgunder', 'sekt', 'gewuerztraminer', 'riesling_spaetlese', 'eiswein'],
  },
  italien: {
    id: 'italien', name: 'Italien', flag: '🇮🇹',
    mapX: 54, mapY: 36,
    description: 'Größter Weinproduzent der Welt! Von Südtirol bis Sizilien.',
    mainRegions: 'Toskana, Piemont, Venetien, Apulien, Sizilien',
    keyFacts: [
      'Qualitätsstufen: Vino da Tavola → IGT → DOC → DOCG',
      'Über 500 autochthone (einheimische) Rebsorten!',
      'Bekannteste DOCG: Chianti, Barolo, Brunello, Amarone',
    ],
    wines: ['lambrusco', 'chianti', 'primitivo', 'pinot_grigio', 'barolo', 'amarone'],
  },
  griechenland: {
    id: 'griechenland', name: 'Griechenland', flag: '🇬🇷',
    mapX: 58, mapY: 42,
    description: 'Eines der ältesten Weinbauländer – Wiege des europäischen Weinbaus!',
    mainRegions: 'Attika, Peloponnes, Kreta, Santorin',
    keyFacts: [
      'Weinbau-Tradition seit über 4000 Jahren',
      'Bekannte Rebsorten: Assyrtiko, Agiorgitiko, Moschofilero',
      'Retsina – seit der Antike mit Kiefernharz versetzt',
    ],
    wines: ['imiglykos', 'retsina'],
  },
  oesterreich: {
    id: 'oesterreich', name: 'Österreich', flag: '🇦🇹',
    mapX: 55, mapY: 30,
    description: 'Klein aber fein! Grüner Veltliner und elegante Rotweine.',
    mainRegions: 'Wachau, Kamptal, Burgenland, Weinviertel',
    keyFacts: [
      'Paradewein: Grüner Veltliner (über 30% der Rebfläche)',
      'DAC-System ähnlich wie französische AOC',
      'Burgenland: Heimat von Zweigelt und Blaufränkisch',
    ],
    wines: ['gruener_veltliner', 'zweigelt'],
  },
  frankreich: {
    id: 'frankreich', name: 'Frankreich', flag: '🇫🇷',
    mapX: 46, mapY: 32,
    description: 'Die Wiege der modernen Weinkultur – von Bordeaux bis Champagne.',
    mainRegions: 'Bordeaux, Burgund, Champagne, Rhône, Loire, Elsass, Provence',
    keyFacts: [
      'AOC/AOP-System als Vorbild für alle Weinländer',
      'Terroir-Gedanke: Der Boden macht den Wein',
      'Heimat von Champagner, Bordeaux, Burgunder',
      'Zweitgrößter Weinproduzent nach Italien',
    ],
    wines: ['rose_provence', 'cremant', 'saint_emilion', 'chablis_premier_cru', 'champagner', 'chateauneuf', 'sancerre'],
  },
  spanien: {
    id: 'spanien', name: 'Spanien', flag: '🇪🇸',
    mapX: 42, mapY: 38,
    description: 'Größte Rebfläche der Welt! Rioja, Ribera del Duero und mehr.',
    mainRegions: 'Rioja, Ribera del Duero, Priorat, Rueda, Penedès',
    keyFacts: [
      'Reifestufen: Joven → Crianza → Reserva → Gran Reserva',
      'Tempranillo ist die wichtigste rote Rebsorte',
      'Cava: Spaniens Antwort auf Champagner',
    ],
    wines: ['rioja_crianza', 'tempranillo_gran_reserva'],
  },
  portugal: {
    id: 'portugal', name: 'Portugal', flag: '🇵🇹',
    mapX: 38, mapY: 38,
    description: 'Kleine Fläche, große Vielfalt – von Vinho Verde bis Portwein.',
    mainRegions: 'Minho (Vinho Verde), Douro, Alentejo, Dão',
    keyFacts: [
      'Über 250 einheimische Rebsorten',
      'Portwein: berühmtester Süßwein der Welt',
      'Vinho Verde: Portugals beliebtester Exportwein',
    ],
    wines: ['vinho_verde'],
  },
  argentinien: {
    id: 'argentinien', name: 'Argentinien', flag: '🇦🇷',
    mapX: 28, mapY: 72,
    description: 'Fünftgrößter Weinproduzent – Heimat des Malbec.',
    mainRegions: 'Mendoza, Salta, Patagonien',
    keyFacts: [
      'Mendoza: 70% der argentinischen Weinproduktion',
      'Höchste Weinberge der Welt (bis 3.000m)',
      'Malbec: aus Frankreich importiert, in Argentinien perfektioniert',
    ],
    wines: ['malbec'],
  },
  suedafrika: {
    id: 'suedafrika', name: 'Südafrika', flag: '🇿🇦',
    mapX: 54, mapY: 74,
    description: 'Weinbau seit 350 Jahren – Pinotage als einzigartige Schöpfung.',
    mainRegions: 'Stellenbosch, Paarl, Franschhoek, Swartland',
    keyFacts: [
      'Pinotage: 1925 in Stellenbosch gezüchtet',
      'Chenin Blanc (lokal: "Steen") wichtigste weiße Rebsorte',
      'Constantia: eines der ältesten Weingüter der Neuen Welt (1685)',
    ],
    wines: ['pinotage'],
  },
};

// ===== GUESTS =====
// facing: 'left' = default (guckt zum Spieler), 'right' = muss gespiegelt werden
const GUESTS = {
  recurring: [
    { id: 'bergmann', name: 'Herr Bergmann', facing: 'left',
      sprites: { 0: 'assets/guests/bergmann_lv0.png', 1: 'assets/guests/bergmann_lv1.png', 2: 'assets/guests/bergmann_lv2.png', 3: 'assets/guests/bergmann_lv3.png', 4: 'assets/guests/bergmann_lv4.png' }
    },
    { id: 'lisa', name: 'Lisa', facing: 'left',
      sprites: { 0: 'assets/guests/lisa_lv0.png', 1: 'assets/guests/lisa_lv1.png', 2: 'assets/guests/lisa_lv2.png', 3: 'assets/guests/lisa_lv3.png', 4: 'assets/guests/lisa_lv4.png' }
    },
  ],
  byLevel: {
    0: [
      { id: 'stavros', name: 'Stavros', sprite: 'assets/guests/stavros.png', facing: 'left' },
      { id: 'studenten', name: 'Die Studenten', sprite: 'assets/guests/studenten.png', facing: 'center' },
      { id: 'frau_mueller', name: 'Frau Müller', sprite: 'assets/guests/frau_mueller.png', facing: 'left' },
      { id: 'der_eilige', name: 'Der Eilige', sprite: 'assets/guests/der_eilige.png', facing: 'left' },
      { id: 'das_paerchen', name: 'Das Pärchen', sprite: 'assets/guests/das_paerchen.png', facing: 'left' },
      { id: 'die_sportlerin', name: 'Die Sportlerin', sprite: 'assets/guests/die_sportlerin.png', facing: 'left' },
      { id: 'onkel_werner', name: 'Onkel Werner', sprite: 'assets/guests/onkel_werner.png', facing: 'left' },
      { id: 'die_touristen', name: 'Die Touristen', sprite: 'assets/guests/die_touristen.png', facing: 'right' },
    ],
    1: [
      { id: 'grillmeister', name: 'Der Grillmeister', sprite: 'assets/guests/grillmeister.png', facing: 'left' },
      { id: 'business_duo', name: 'Die Geschäftsleute', sprite: 'assets/guests/business_duo.png', facing: 'right' },
      { id: 'fitnesstrainerin', name: 'Die Fitnesstrainerin', sprite: 'assets/guests/fitnesstrainerin.png', facing: 'left' },
      { id: 'ehepaar_koch', name: 'Ehepaar Koch', sprite: 'assets/guests/ehepaar_koch.png', facing: 'left' },
      { id: 'der_amerikaner', name: 'Der Amerikaner', sprite: 'assets/guests/der_amerikaner.png', facing: 'left' },
      { id: 'die_veganerin', name: 'Die Veganerin', sprite: 'assets/guests/die_veganerin.png', facing: 'left' },
      { id: 'marco', name: 'Marco', sprite: 'assets/guests/marco.png', facing: 'right' },
      { id: 'stammgast_jens', name: 'Stammgast Jens', sprite: 'assets/guests/stammgast_jens.png', facing: 'left' },
    ],
    2: [
      { id: 'wandergruppe', name: 'Die Wandergruppe', sprite: 'assets/guests/wandergruppe.png', facing: 'left' },
      { id: 'buergermeister', name: 'Der Bürgermeister', sprite: 'assets/guests/buergermeister.png', facing: 'left' },
      { id: 'oma_hildegard', name: 'Oma Hildegard', sprite: 'assets/guests/oma_hildegard.png', facing: 'left' },
      { id: 'der_jaeger', name: 'Der Jäger', sprite: 'assets/guests/der_jaeger.png', facing: 'left' },
      { id: 'frau_doktor', name: 'Frau Doktor', sprite: 'assets/guests/frau_doktor.png', facing: 'left' },
      { id: 'brautpaar', name: 'Das Brautpaar', sprite: 'assets/guests/brautpaar.png', facing: 'left' },
      { id: 'der_pfarrer', name: 'Der Pfarrer', sprite: 'assets/guests/der_pfarrer.png', facing: 'left' },
      { id: 'austauschschuelerin', name: 'Die Austauschschülerin', sprite: 'assets/guests/austauschschuelerin.png', facing: 'left' },
    ],
    3: [
      { id: 'der_bankier', name: 'Der Bankier', sprite: 'assets/guests/der_bankier.png', facing: 'left' },
      { id: 'madame_dupont', name: 'Madame Dupont', sprite: 'assets/guests/madame_dupont.png', facing: 'left' },
      { id: 'diplomatenpaar', name: 'Das Diplomatenpaar', sprite: 'assets/guests/diplomatenpaar.png', facing: 'left' },
      { id: 'der_komponist', name: 'Der Komponist', sprite: 'assets/guests/der_komponist.png', facing: 'left' },
      { id: 'die_professorin', name: 'Die Professorin', sprite: 'assets/guests/die_professorin.png', facing: 'left' },
      { id: 'herr_tanaka', name: 'Herr Tanaka', sprite: 'assets/guests/herr_tanaka.png', facing: 'left' },
      { id: 'influencerin', name: 'Die Influencerin', sprite: 'assets/guests/influencerin.png', facing: 'left' },
      { id: 'weinhaendler', name: 'Der Weinhändler', sprite: 'assets/guests/weinhaendler.png', facing: 'left' },
    ],
    4: [
      { id: 'michelin_tester', name: 'Der Michelin-Tester', sprite: 'assets/guests/michelin_tester.png', facing: 'left' },
      { id: 'opernsaengerin', name: 'Die Opernsängerin', sprite: 'assets/guests/opernsaengerin.png', facing: 'left' },
      { id: 'der_scheich', name: 'Der Scheich', sprite: 'assets/guests/der_scheich.png', facing: 'left' },
      { id: 'promi_paar', name: 'Das Promi-Paar', sprite: 'assets/guests/promi_paar.png', facing: 'left' },
      { id: 'botschafterin', name: 'Die Botschafterin', sprite: 'assets/guests/botschafterin.png', facing: 'left' },
      { id: 'prof_weinstein', name: 'Prof. Weinstein', sprite: 'assets/guests/prof_weinstein.png', facing: 'left' },
      { id: 'kunstsammlerin', name: 'Die Kunstsammlerin', sprite: 'assets/guests/kunstsammlerin.png', facing: 'left' },
      { id: 'sternekoch', name: 'Der Sternekoch', sprite: 'assets/guests/sternekoch.png', facing: 'left' },
    ],
  },
};

// ===== CHEFS (5 Restaurants) =====
const CHEFS = {
  imbiss: {
    name: 'Kostas', sprite: 'assets/chefs/chef_imbiss.png',
    intro: 'Willkommen in meinem Imbiss, mein Freund! Ich bin Kostas. Hier ist es einfach – die Leute wollen was Gutes trinken zum Essen. Komm, ich zeig dir unseren kleinen Weinkeller!'
  },
  steakhaus: {
    name: 'Mike', sprite: 'assets/chefs/chef_steakhaus.png',
    intro: 'Hey, willkommen im Black Angus! Ich bin Mike. Bei uns dreht sich alles ums Fleisch – und der richtige Wein macht den Unterschied. Let\'s go!'
  },
  gutbuergerlich: {
    name: 'Frau Lindner', sprite: 'assets/chefs/chef_gasthaus.png',
    intro: 'Grüß Gott und herzlich willkommen! Ich bin die Lindner. Bei uns kommen Stammgäste seit Generationen. Die erwarten Qualität – und die richtige Weinempfehlung!'
  },
  gehoben: {
    name: 'Monsieur Laurent', sprite: 'assets/chefs/chef_gehoben.png',
    intro: 'Bienvenue! Ich bin Laurent, Chefsommelier des Vignoble. Unsere Gäste erwarten Perfektion – jeder Wein muss zum Gericht und zum Anlass passen.'
  },
  sterne: {
    name: 'Chef Beaumont', sprite: 'assets/chefs/chef_sterne.png',
    intro: 'Willkommen in der Étoile. Ich bin Chef Beaumont. Dies ist die höchste Stufe – Blindverkostung, perfekte Paarungen, Profi-Vokabular. Zeigen Sie, was Sie können.'
  },
};

// ===== QUESTIONS (wird aus Level-Dateien zusammengebaut) =====
// Geladen aus: questions_lv0.js bis questions_lv4.js
const QUESTIONS = {};

// ===== WINE INDEXES =====
const WINES_BY_REGION = {};
const WINES_BY_COLOR = { rot: [], weiss: [], rose: [] };
const WINES_BY_LEVEL = { 0: [], 1: [], 2: [], 3: [], 4: [] };
Object.values(WINES).forEach(w => {
  if (!WINES_BY_REGION[w.region]) WINES_BY_REGION[w.region] = [];
  WINES_BY_REGION[w.region].push(w.id);
  if (WINES_BY_COLOR[w.color]) WINES_BY_COLOR[w.color].push(w.id);
  WINES_BY_LEVEL[w.level].push(w.id);
});

// Helper: Gast-Info aus ID holen
function getGuestInfo(guestId, level) {
  // Recurring guests
  const rec = GUESTS.recurring.find(g => g.id === guestId);
  if (rec) return { name: rec.name, sprite: rec.sprites[level] || rec.sprites[0], facing: rec.facing || 'left' };
  // Level guests
  for (const lv of Object.keys(GUESTS.byLevel)) {
    const g = GUESTS.byLevel[lv].find(g => g.id === guestId);
    if (g) return { name: g.name, sprite: g.sprite, facing: g.facing || 'left' };
  }
  return null;
}
