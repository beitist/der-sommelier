// ============================================================
// DER SOMMELIER — Datenbank (Weine, Regionen, Gäste, Chefs, Fragen)
// ============================================================

const CONFIG = {
  levels: [
    { id: 'imbiss', name: 'Imbiss "Zum Goldenen Gyros"', shortName: 'Goldener Gyros', icon: '🌯',
      logo: 'assets/restaurants/imbiss_logo.png',
      xpNeeded: 0, xpToNext: 80, unlockRegions: ['deutschland', 'italien', 'griechenland'],
      bgKey: 'imbiss', themeLabel: 'Basics & Weinstile',
      description: 'Dein erster Job! Rot, Weiß, Rosé – mehr brauchst du hier erstmal nicht.' },
    { id: 'steakhaus', name: 'Steakhaus "Black Angus"', shortName: 'Black Angus', icon: '🥩',
      logo: 'assets/restaurants/steakhaus_logo.png',
      xpNeeded: 80, xpToNext: 240, unlockRegions: ['oesterreich', 'frankreich'],
      bgKey: 'steakhaus', themeLabel: 'Rebsorten & Charakter',
      levelCode: 'RIESLING',
      description: 'Kräftige Rote zum Steak – und die ersten edleren Tropfen.' },
    { id: 'gutbuergerlich', name: 'Gasthaus "Zur Linde"', shortName: 'Zur Linde', icon: '🍽️',
      logo: 'assets/restaurants/gutbuergerlich_logo.png',
      xpNeeded: 240, xpToNext: 480, unlockRegions: ['spanien', 'portugal'],
      bgKey: 'gutbuergerlich', themeLabel: 'Wein & Essen',
      levelCode: 'TERROIR',
      description: 'Regionale Küche, Food Pairing und die Kunst der richtigen Empfehlung.' },
    { id: 'gehoben', name: 'Restaurant "Le Vignoble"', shortName: 'Le Vignoble', icon: '🍷',
      logo: 'assets/restaurants/gehoben_logo.png',
      xpNeeded: 480, xpToNext: 800, unlockRegions: ['argentinien', 'suedafrika'],
      bgKey: 'gehoben', themeLabel: 'Terroir & Weinbereitung',
      levelCode: 'BARRIQUE',
      description: 'Terroir, Jahrgänge, Grand Cru – jetzt wird es anspruchsvoll.' },
    { id: 'sterne', name: 'Sterne-Restaurant "Étoile"', shortName: 'Étoile', icon: '⭐',
      logo: 'assets/restaurants/sterne_logo.png',
      xpNeeded: 800, xpToNext: 1200, unlockRegions: [],
      bgKey: 'sterne', themeLabel: 'Verkostung & Weinsprache',
      levelCode: 'SOMMELIER',
      description: 'Blindverkostung, perfekte Menü-Begleitung, Profi-Vokabular.' },
  ],
  questionsPerShift: 5,
  // Trinkgeld: Würfelsystem in engine.js (richtig: 4+1W6, falsch: 1W3, ×Level-Multiplikator)
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
    mapX: 51, mapY: 26,
    description: 'Deutschland ist das Land des Rieslings – keine andere Rebsorte bringt hier so elegante, mineralische Weißweine hervor. Mit 13 Anbaugebieten von der steilen Mosel bis zum sonnigen Baden gibt es eine enorme Vielfalt. Rund 65% der Rebfläche ist mit weißen Sorten bepflanzt, aber auch der Spätburgunder hat sich international einen Namen gemacht.',
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
    mapX: 52, mapY: 33,
    description: 'Italien ist der größte Weinproduzent der Welt – und das mit über 500 einheimischen Rebsorten, die es sonst nirgends gibt. Von den leichten Weißen Südtirols über den spritzigen Lambrusco der Emilia-Romagna bis zum mächtigen Barolo aus dem Piemont: Jede Region hat ihren eigenen Charakter. Wein gehört hier zum Essen wie Olivenöl zum Brot.',
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
    mapX: 56, mapY: 37,
    description: 'Griechenland ist die Wiege des europäischen Weinbaus – hier wird seit über 4.000 Jahren Wein gemacht. Bekannt ist vor allem der Retsina, der mit Kiefernharz aromatisiert wird – eine Tradition aus der Antike. Aber auch moderne griechische Weine von Santorin oder dem Peloponnes überraschen mit eigenständigen Rebsorten wie Assyrtiko und Agiorgitiko.',
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
    mapX: 53, mapY: 28,
    description: 'Klein aber fein: Österreich hat mit dem Grünen Veltliner einen echten Paradewein, der über 30% der gesamten Rebfläche ausmacht. Pfeffrig, frisch und unglaublich vielseitig zum Essen. Im Burgenland entstehen dazu kräftige Rotweine aus Zweigelt und Blaufränkisch. Die Wachau an der Donau gilt als eines der schönsten Weinbaugebiete Europas.',
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
    mapX: 48, mapY: 30,
    description: 'Frankreich ist die Wiege der modernen Weinkultur. Begriffe wie Terroir, Cuvée und Appellation wurden hier geprägt. Von Bordeaux über Burgund bis in die Champagne – französische Weine setzen weltweit den Maßstab. Das AOC-System, das Herkunft und Qualität schützt, wurde zum Vorbild für alle europäischen Weinländer.',
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
    mapX: 45, mapY: 35,
    description: 'Spanien besitzt die größte Rebfläche der Welt – und hat mit dem Reifesystem von Joven bis Gran Reserva eine ganz eigene Weinphilosophie. Tempranillo ist der Star unter den Rebsorten, vor allem in Rioja und Ribera del Duero. Spanische Weine bieten oft ein unschlagbares Preis-Genuss-Verhältnis, weil die Weingüter den Wein erst nach Jahren Fassreife auf den Markt bringen.',
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
    mapX: 43, mapY: 36,
    description: 'Portugal ist ein kleines Land mit einer riesigen Weinvielfalt – über 250 einheimische Rebsorten sorgen dafür, dass es hier immer etwas Neues zu entdecken gibt. Berühmt ist der Portwein aus dem Douro-Tal, aber auch der leichte, prickelnde Vinho Verde aus dem Norden hat sich zum Exportschlager entwickelt. In keinem Land Europas trinkt man pro Kopf mehr Wein.',
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
    mapX: 30, mapY: 75,
    description: 'Argentinien ist der fünftgrößte Weinproduzent der Welt und die unbestrittene Heimat des Malbec. Die Rebsorte kam einst aus Frankreich, wurde dort aber fast bedeutungslos – in den Höhenlagen von Mendoza auf bis zu 3.000 Metern fand sie ihre perfekte zweite Heimat. Kräftig, samtig und dunkelviolett: So schmeckt Argentinien.',
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
    mapX: 55, mapY: 73,
    description: 'Südafrika macht seit über 350 Jahren Wein und hat mit Pinotage eine Rebsorte, die es nur hier gibt – 1925 aus Pinot Noir und Cinsault gekreuzt. Die Weinregion um Stellenbosch und Franschhoek zählt zu den schönsten der Welt. Das Zusammenspiel aus kühlem Atlantikwind und heißer Sonne gibt den Weinen einen unverwechselbaren Charakter.',
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
    intro: [
      'Malaka! Endlich kommt Hilfe! Ich bin Kostas, und das hier ist der beste Imbiss der Stadt.',
      'Die Leute kommen für mein Gyros, aber sie fragen auch nach Wein! Und ich... naja, ich kenne mich da nicht so aus. Deswegen brauche ich DICH.',
      'Hier kommen alle rein: Studenten, Frau Müller von nebenan, der Stavros mit seinen Kumpels... Die wollen keinen Château-irgendwas. Die wollen einfach was Leckeres zum Essen.',
      'Erstmal zeig ich dir unsere Weine. Rot, Weiß, die Basics eben. Dann übst du mit den Gästen!'
    ]
  },
  steakhaus: {
    name: 'Mike', sprite: 'assets/chefs/chef_steakhaus.png',
    intro: [
      'Hey! Ich bin Mike, Grillmeister und Chef vom Black Angus. Nice, dass du aufsteigst!',
      'Bei uns geht es um kräftiges Essen – Steaks, Ribs, Burger. Die Gäste hier sind anspruchsvoller als im Imbiss. Die wollen wissen, WARUM ein bestimmter Wein zum Steak passt.',
      'Wir haben Geschäftsleute, den Marco aus Italien, und Jens – der wechselt gerade von Bier zu Wein, haha.',
      'Du lernst jetzt Rebsorten kennen und verstehst, was Wein seinen Charakter gibt. Let\'s go!'
    ]
  },
  gutbuergerlich: {
    name: 'Frau Lindner', sprite: 'assets/chefs/chef_gasthaus.png',
    intro: [
      'Grüß Gott! Ich bin die Lindner, und das hier ist mein Gasthaus. Seit drei Generationen in Familienhand.',
      'Bei uns kommen Stammgäste, Wandergruppen, das Brautpaar von nebenan, der Pfarrer nach der Sonntagsmesse... Die erwarten regionale Küche und den passenden Wein dazu.',
      'Hier geht es um Food Pairing – welcher Wein passt zu Schnitzel, welcher zum Sonntagsbraten? Das musst du können.',
      'Wir haben jetzt auch Spanien und Portugal im Keller. Die Karte wächst!'
    ]
  },
  gehoben: {
    name: 'Monsieur Laurent', sprite: 'assets/chefs/chef_gehoben.png',
    intro: [
      'Bienvenue dans Le Vignoble! Ich bin Laurent, Chefsommelier. Hier wird es ernst.',
      'Unsere Gäste sind Bankiers, Diplomaten, Professoren. Die reden über Terroir, Jahrgänge und Grand Cru. Da muss man mithalten können.',
      'Wir arbeiten jetzt mit Weinen aus der ganzen Welt – Argentinien, Südafrika. Und ab jetzt gibt es Blindverkostungen.',
      'Vertrauen Sie Ihrer Nase, Ihrem Gaumen. Das unterscheidet einen guten Sommelier von einem großartigen.'
    ]
  },
  sterne: {
    name: 'Chef Beaumont', sprite: 'assets/chefs/chef_sterne.png',
    intro: [
      'Willkommen in der Étoile. Ich bin Chef Beaumont. Zwei Michelin-Sterne, und wir arbeiten am dritten.',
      'Hier sitzt der Scheich neben der Opernsängerin, der Michelin-Tester neben dem Promi-Paar. Jeder Fehler kostet uns einen Stern.',
      'Profi-Vokabular, perfekte Menü-Begleitung, Blindverkostung auf höchstem Niveau. Das ist Ihre Prüfung.',
      'Zeigen Sie mir, dass Sie der beste Sommelier in der Stadt werden können.'
    ]
  },
};

// ===== CHEF STRESS COMMENTS =====
const CHEF_COMMENTS = {
  imbiss: {
    stress: [
      'Kostas ruft aus der Küche: "Malaka! Was war DAS denn?!"',
      'Kostas schüttelt den Kopf: "Mein Gyros verdient besseren Wein-Service..."',
      'Kostas murmelt: "Vielleicht sollte ich doch einen Getränkeautomaten aufstellen..."',
      'Kostas wirft ein Handtuch: "Nicht mal mein Onkel auf Kreta macht solche Fehler!"',
    ],
    praise: [
      'Kostas strahlt: "BRAVO! Das ist mein Sommelier!"',
      'Kostas klatscht: "Opa! Dafür kriegst du extra Tzatziki!"',
      'Kostas ruft: "So macht man das! Der Laden läuft!"',
    ],
    beerComment: 'Kostas kratzt sich am Kopf: "Weißt du was... vielleicht servierst du erstmal nur Bier. Ist einfacher. 🍺"',
  },
  steakhaus: {
    stress: [
      'Mike flucht leise: "Dude, das Steak ist perfekter als dein Weinvorschlag..."',
      'Mike schüttelt den Kopf: "Bro, meine Grillkohle hat mehr Weinwissen als du gerade."',
      'Mike seufzt: "Ich hätte den Sommelier-Job doch besser selbst gemacht..."',
      'Mike guckt dich an: "Alter, nicht dein Ernst. Nochmal."',
    ],
    praise: [
      'Mike gibt dir ein High-Five: "YEAH! So muss das!"',
      'Mike grinst: "Du wirst noch zum Steak-Flüsterer!"',
      'Mike nickt anerkennend: "Respect, Bro. Der Gast ist happy."',
    ],
    beerComment: 'Mike lehnt sich an die Theke: "Hey Alter... soll ich dir erstmal ein Bier zapfen? Dann reden wir nochmal über Wein. 🍺"',
  },
  gutbuergerlich: {
    stress: [
      'Frau Lindner seufzt: "Kindchen, das hätte meine Oma besser gewusst..."',
      'Frau Lindner schüttelt den Kopf: "Das erzähle ich besser nicht dem Stammtisch..."',
      'Frau Lindner murmelt: "Na, wird schon noch. Übung macht den Meister."',
      'Frau Lindner tippt auf den Tisch: "Das war nix. Nochmal nachdenken!"',
    ],
    praise: [
      'Frau Lindner strahlt: "Wunderbar! Das hätte dem seligen Herrn Lindner gefallen!"',
      'Frau Lindner nickt: "So ist es richtig. Ein guter Griff!"',
      'Frau Lindner klatscht: "Bravo! Der Stammtisch wird begeistert sein!"',
    ],
    beerComment: 'Frau Lindner seufzt mütterlich: "Kindchen... vielleicht fängst du erstmal mit dem Bier-Service an. Da kann man weniger falsch machen. 🍺"',
  },
  gehoben: {
    stress: [
      'Laurent hebt eine Augenbraue: "Monsieur... das war unter Ihrem Niveau."',
      'Laurent flüstert: "In Frankreich würde man Sie dafür in den Keller schicken."',
      'Laurent schließt die Augen: "Bitte... denken Sie nach bevor Sie antworten."',
      'Laurent zückt diskret ein Taschentuch: "Mon Dieu..."',
    ],
    praise: [
      'Laurent lächelt: "Magnifique! Sie entwickeln ein feines Gaumen-Gedächtnis."',
      'Laurent nickt: "Très bien. Das war die Empfehlung eines echten Sommeliers."',
      'Laurent hebt sein Glas: "Bravo! Sie machen Le Vignoble stolz."',
    ],
    beerComment: 'Laurent wischt sich die Stirn: "Vielleicht... sollten wir Sie erstmal an die Bier-Karte setzen. Weniger Schaden möglich. 🍺"',
  },
  sterne: {
    stress: [
      'Chef Beaumont starrt: "...Sind Sie sicher, dass Sie hier richtig sind?"',
      'Chef Beaumont atmet tief ein: "Ein Michelin-Stern weniger. Ihretwegen."',
      'Chef Beaumont murmelt: "Das war ein unverzeihlicher Fehler."',
      'Chef Beaumont schließt kurz die Augen: "Wir reden später."',
    ],
    praise: [
      'Chef Beaumont nickt fast unmerklich: "Akzeptabel. Gut gemacht."',
      'Chef Beaumont hebt eine Augenbraue: "Ich bin... beeindruckt."',
      'Chef Beaumont lächelt (selten!): "DAS war Sterne-Niveau."',
    ],
    beerComment: 'Chef Beaumont massiert seine Schläfen: "Vielleicht... eine Karriere in der Getränkeindustrie? Bier braucht weniger Expertise. 🍺"',
  },
};

// ===== CHEF HINT INTROS (Frag den Chef) =====
const CHEF_HINT_INTROS = {
  imbiss: [
    'Kostas flüstert dir zu:',
    'Kostas zwinkert:',
    'Kostas lehnt sich über die Theke:',
    'Kostas kratzt sich am Bart:',
  ],
  steakhaus: [
    'Mike raunt dir zu:',
    'Mike grinst und sagt:',
    'Mike tippt dir auf die Schulter:',
    'Mike flüstert hinter vorgehaltener Hand:',
  ],
  gutbuergerlich: [
    'Frau Lindner flüstert mütterlich:',
    'Frau Lindner beugt sich vor:',
    'Frau Lindner lächelt wissend:',
    'Frau Lindner tippt sich an die Nase:',
  ],
  gehoben: [
    'Laurent murmelt diskret:',
    'Laurent hebt eine Augenbraue:',
    'Laurent flüstert auf Französisch... ähm, Deutsch:',
    'Laurent neigt leicht den Kopf:',
  ],
  sterne: [
    'Chef Beaumont seufzt und gibt nach:',
    'Chef Beaumont flüstert fast unhörbar:',
    'Chef Beaumont blickt zur Seite:',
    'Chef Beaumont zückt ein Notizbuch:',
  ],
};

// ===== LEVEL INTROS (Lehrgang-Einführungen) =====
const LEVEL_INTROS = {
  imbiss: {
    title: 'Weinwissen Basics: Rot, Weiß & Rosé',
    sections: [
      {
        icon: '🎨', heading: 'Die drei Farben des Weins',
        text: '<strong>Rotwein</strong> wird aus roten Trauben hergestellt – und zwar MIT den Schalen. Die geben Farbe, Tannine (dieses leicht pelzige Mundgefühl) und viel Geschmack ab. Je länger die Schalen dabei sind, desto dunkler und kräftiger der Wein.<br><br><strong>Weißwein</strong> wird ohne Schalen vergoren – daher die helle Farbe. Er kann aus weißen ODER sogar aus roten Trauben gemacht werden (dann wird nur der Saft verwendet). Weißwein ist meistens frischer und leichter.<br><br><strong>Rosé</strong> entsteht durch kurzen Hautkontakt mit roten Trauben – nur ein paar Stunden statt Tage. Daher die rosa Farbe. Rosé wird NICHT aus Rot- und Weißwein gemischt (das ist in der EU sogar verboten, außer bei Champagner)!'
      },
      {
        icon: '💧', heading: 'Geschmacksrichtungen: trocken bis süß',
        text: '<strong>Trocken</strong> bedeutet wenig Restzucker (unter 9 g/l) – der Wein schmeckt nicht süß. Das hat nichts mit dem Alkoholgehalt zu tun!<br><br><strong>Halbtrocken</strong> hat etwas mehr Restzucker (bis 18 g/l) – leicht rundlich, aber nicht wirklich süß.<br><br><strong>Lieblich</strong> ist deutlich süßer. Perfekt für Einsteiger und zu bestimmten Gerichten.<br><br><strong>Süß</strong> (wie Eiswein oder Dessertwein) – da schmeckt man den Zucker richtig.'
      },
      {
        icon: '🍽️', heading: 'Dein erster Pairing-Tipp',
        text: 'Die goldene Grundregel: <strong>Leichtes Essen → leichter Wein, kräftiges Essen → kräftiger Wein.</strong><br><br>Zum Salat eher Weißwein, zum Steak eher Rotwein. Fisch und Geflügel vertragen sich gut mit Weißwein. Und im Zweifel: Frag den Gast, was er mag!'
      },
      {
        icon: '🧊', heading: 'Serviertemperatur & Weinmythen',
        text: '<strong>Serviertemperatur:</strong> "Zimmertemperatur" für Rotwein meinte früher 16-18°C, nicht unsere heutigen 22°C! Leichte Rote bei 14-16°C, kräftige bei 16-18°C, Weißwein bei 8-12°C servieren.<br><br><strong>Schraubverschluss ≠ billiger Wein!</strong> Viele Top-Weingüter (besonders in Australien und Neuseeland) nutzen Schraubverschlüsse, weil sie vor Korkfehler (TCA) schützen – dem muffigen Geschmack, der durch einen defekten Korken entsteht.<br><br><strong>Sulfite und Kopfschmerzen:</strong> Sulfite im Wein verursachen selten Kopfschmerzen – Histamine, Tannine oder einfach zu viel Alkohol sind häufiger schuld. In Trockenfrüchten stecken viel mehr Sulfite als im Wein!<br><br><strong>Kalorien:</strong> Die Kalorien im Wein kommen vom Alkohol und Zucker, nicht von der Farbe. Ein süßer Weißwein kann mehr Kalorien haben als ein trockener Rotwein.<br><br><strong>Pinot Grigio = Grauburgunder:</strong> Dieselbe Traube, nur auf Italienisch bzw. Deutsch! (Auch: Pinot Gris auf Französisch). Im Wein gibt es viele solche Doppelnamen.'
      },
    ],
    recap: [
      '🔴 <strong>Rotwein</strong>: Rote Trauben, MIT Schalen vergoren → Farbe, Tannine, Körper',
      '⚪ <strong>Weißwein</strong>: Ohne Schalen vergoren → hell, frisch, leichter',
      '🩷 <strong>Rosé</strong>: Kurzer Hautkontakt → rosa Farbe, NICHT gemischt!',
      '🏜️ <strong>Trocken</strong> = wenig Zucker, <strong>Lieblich</strong> = süßer',
      '🍽️ Leichtes Essen → leichter Wein, kräftiges Essen → kräftiger Wein',
      '🧊 Rotwein bei 14-18°C, nicht bei Zimmertemperatur (22°C)!',
      '🍾 <strong>Schraubverschluss ≠ billig</strong>, schützt vor Korkfehler (TCA)',
    ]
  },
  steakhaus: {
    title: 'Rebsorten & Charakter',
    sections: [
      {
        icon: '🍇', heading: 'Rebsorten – die DNA des Weins',
        text: 'Die Rebsorte bestimmt den Grundcharakter eines Weins. <strong>Pinot Noir</strong> (= Spätburgunder!) macht elegante, helle Rotweine. <strong>Primitivo</strong> macht kraftvolle Fruchtbomben. <strong>Riesling</strong> macht mineralische Weiße mit Säure.<br><br>Gleiche Traube, anderer Name: Spätburgunder = Pinot Noir (FR) = Pinot Nero (IT). Grauburgunder = Pinot Grigio = Pinot Gris. Klingt verwirrend, ist aber immer die gleiche Traube!'
      },
      {
        icon: '🌡️', heading: 'Klima macht den Charakter',
        text: 'Kühles Klima (Deutschland, Burgund): Weine mit mehr Säure, weniger Alkohol, feinere Aromen.<br><br>Warmes Klima (Süditalien, Argentinien): Weine mit mehr Alkohol, reiferer Frucht, üppigerem Körper.<br><br>Das erklärt, warum ein deutscher Spätburgunder zarter schmeckt als ein australischer Pinot Noir – gleiche Traube, anderes Klima!'
      },
      {
        icon: '💪', heading: 'Körper: leicht, mittel, voll',
        text: 'Der "Körper" eines Weins beschreibt, wie schwer er sich im Mund anfühlt – wie Milch (leicht) vs. Sahne (voll).<br><br><strong>Leicht</strong>: Müller-Thurgau, Vinho Verde, Lambrusco<br><strong>Mittel</strong>: Riesling, Chianti, Rosé<br><strong>Voll</strong>: Primitivo, Barolo, Malbec<br><br><strong>Achtung:</strong> Die Farbe sagt nicht immer etwas über den Körper! Ein dunkler Wein kann leicht sein, ein heller kraftvoll. Spätburgunder zum Beispiel ist oft hell, aber überraschend komplex.<br><br>Zum Steak willst du einen vollmundigen Wein, der gegen das kräftige Fleisch bestehen kann!<br><br>Übrigens: Der Name <strong>Primitivo</strong> klingt lustig, kommt aber von "primativus" (der Erste) – die Traube reift und wird früher geerntet als andere. Hat nichts mit primitiver Herstellung zu tun!'
      },
    ],
    recap: [
      '🍇 Die <strong>Rebsorte</strong> bestimmt den Grundcharakter des Weins',
      '🔄 Gleiche Traube, andere Namen: Spätburgunder = Pinot Noir = Pinot Nero',
      '🌡️ <strong>Kühles Klima</strong> → mehr Säure, feiner. <strong>Warmes Klima</strong> → mehr Körper, üppiger',
      '💪 <strong>Körper</strong>: leicht (Müller-Thurgau) → mittel (Chianti) → voll (Primitivo)',
      '🥩 Kräftiges Essen braucht vollmundigen Wein!',
    ]
  },
  gutbuergerlich: {
    title: 'Wein & Essen: Food Pairing',
    sections: [
      {
        icon: '🤝', heading: 'Die Grundregeln des Food Pairings',
        text: '<strong>Ergänzen:</strong> Ähnliche Geschmäcker verbinden – z.B. ein fruchtiger Wein zu fruchtigem Dessert.<br><br><strong>Kontrastieren:</strong> Gegensätze ziehen sich an – z.B. ein säurebetonter Wein schneidet durch fettiges Essen.<br><br><strong>Regional:</strong> Was zusammen wächst, passt zusammen! Chianti zu Pasta, Grüner Veltliner zu Schnitzel, Riesling zu Spargel.'
      },
      {
        icon: '⚖️', heading: 'Gewicht gegen Gewicht',
        text: 'Das wichtigste Prinzip: Der Wein sollte das gleiche "Gewicht" haben wie das Essen.<br><br>Leichter Salat → leichter Weißwein (Vinho Verde)<br>Geschmortes Rindfleisch → kräftiger Rotwein (Rioja)<br>Scharfes Essen → Restsüße hilft! (Gewürztraminer)<br>Fettiges Essen → Säure schneidet durch (Riesling zu Schnitzel!)'
      },
      {
        icon: '🇪🇸🇵🇹', heading: 'Neue Weinländer: Spanien & Portugal',
        text: 'Spanien hat die größte Rebfläche der Welt! Rioja ist das bekannteste Gebiet – Tempranillo-Weine werden jahrelang in Eichenfässern gereift (Crianza, Reserva, Gran Reserva).<br><br>Portugal überrascht mit Vinho Verde – jung, frisch, leicht prickelnd. Perfekt im Sommer! Und natürlich Portwein, der berühmteste Dessertwein der Welt.<br><br><strong>Schaumwein-Wissen:</strong> Crémant und Champagner werden beide durch <strong>Flaschengärung</strong> (Méthode Traditionnelle) hergestellt – die zweite Gärung findet direkt in der Flasche statt, dadurch entsteht die natürliche Kohlensäure. Kein CO2 wird reingepumpt! Der Unterschied: Champagner darf nur aus der Region Champagne kommen.'
      },
    ],
    recap: [
      '🤝 <strong>Ergänzen</strong> oder <strong>Kontrastieren</strong> – beides funktioniert!',
      '🌍 Was zusammen wächst, passt zusammen (regional pairing)',
      '⚖️ Gleiches <strong>Gewicht</strong>: leichtes Essen → leichter Wein',
      '🍋 <strong>Säure</strong> schneidet durch Fett (Riesling + Schnitzel!)',
      '🌶️ <strong>Restsüße</strong> zähmt Schärfe (Gewürztraminer + Curry)',
    ]
  },
  gehoben: {
    title: 'Terroir & Weinbereitung',
    sections: [
      {
        icon: '🏔️', heading: 'Terroir – der Boden macht den Wein',
        text: 'Terroir ist das französische Konzept, dass Boden, Klima, Lage und Tradition zusammen den einzigartigen Charakter eines Weins formen.<br><br>Gleiche Traube, anderer Boden = anderer Wein. Ein Chardonnay aus Chablis (Kalkstein) schmeckt völlig anders als einer aus Kalifornien (warmes Klima, Eichenfass).<br><br>Grand Cru, Premier Cru – das sind die besten Lagen in Burgund und im Elsass. Der Boden dort ist so besonders, dass die Weine ein Vielfaches kosten.'
      },
      {
        icon: '🪵', heading: 'Eiche, Stahl & Reifung',
        text: 'Im <strong>Edelstahltank</strong> bleibt der Wein frisch und fruchtig – reine Traubenaromen.<br><br>Im <strong>Eichenfass</strong> (Barrique) bekommt der Wein Vanille-, Toast- und Gewürznoten. Je neuer das Fass, desto stärker der Effekt.<br><br><strong>Reifung</strong>: Manche Weine (Barolo, Rioja Gran Reserva) brauchen Jahre, um ihr Potenzial zu entfalten. Andere (Vinho Verde) trinkt man jung und frisch.<br><br><strong>Cuvée</strong> (frz. Verschnitt): Ein Wein aus mehreren Rebsorten, die der Winzer perfekt aufeinander abstimmt. Berühmtes Beispiel: Saint-Émilion (Merlot + Cabernet Franc) oder viele Champagner.<br><br><strong>Deutsche Prädikate:</strong> <em>Spätlese</em> bedeutet "spät gelesene Trauben" – sie hängen länger am Stock und werden besonders reif und aromatisch. Die Stufen: Kabinett → Spätlese → Auslese → Beerenauslese → Eiswein.'
      },
      {
        icon: '🌍', heading: 'Neue Welt: Argentinien & Südafrika',
        text: 'Argentiniens Malbec kommt aus Mendoza, am Fuß der Anden – Weinberge auf bis zu 3.000m Höhe! Der Malbec kam ursprünglich aus Frankreich (Cahors), aber Argentinien hat ihn perfektioniert.<br><br>Südafrikas Pinotage ist eine echte Erfindung: 1925 kreuzte man Pinot Noir mit Cinsaut. Das gibt es nur hier! Stellenbosch ist das Zentrum des südafrikanischen Weinbaus.'
      },
    ],
    recap: [
      '🏔️ <strong>Terroir</strong>: Boden + Klima + Lage + Tradition = einzigartiger Charakter',
      '🏆 <strong>Grand Cru</strong>: Die besten Lagen in Burgund/Elsass',
      '🪵 <strong>Eichenfass</strong> → Vanille, Toast. <strong>Stahltank</strong> → frisch, fruchtig',
      '⏳ Manche Weine brauchen <strong>Reifung</strong> (Barolo), andere trinkt man jung (Vinho Verde)',
      '🇦🇷 Malbec aus Mendoza, 🇿🇦 Pinotage aus Stellenbosch',
    ]
  },
  sterne: {
    title: 'Verkostung & Weinsprache',
    sections: [
      {
        icon: '👁️', heading: 'Das Auge trinkt mit',
        text: 'Bevor du riechst oder schmeckst: <strong>Schau den Wein an.</strong> Halte das Glas gegen weißes Licht.<br><br>Die Farbe verrät viel: Junger Rotwein ist rubinrot, alter wird ziegelrot/braun am Rand. Junger Weißwein ist hellgelb, gereifter wird goldgelb.<br><br>Schwenke das Glas: Dicke, langsame "Tränen" (Kirchenfenster) deuten auf hohen Alkohol oder Restzucker hin.'
      },
      {
        icon: '👃', heading: 'Die Nase – das wichtigste Werkzeug',
        text: 'Erst riechen, dann schmecken! Die Nase erkennt hunderte Aromen, die Zunge nur süß/sauer/salzig/bitter/umami.<br><br><strong>Primäraromen:</strong> Von der Traube – Frucht, Blumen<br><strong>Sekundäraromen:</strong> Von der Gärung – Hefe, Butter, Brioche<br><strong>Tertiäraromen:</strong> Von der Reifung – Leder, Tabak, Nüsse, Vanille<br><br>Profi-Tipp: Erst ohne Schwenken riechen (feine Aromen), dann mit Schwenken (kräftigere Aromen).'
      },
      {
        icon: '👅', heading: 'Am Gaumen: Die Verkostungssprache',
        text: 'Profis beschreiben Wein mit einem systematischen Ansatz:<br><br><strong>Antrunk:</strong> Der erste Eindruck – frisch? Weich? Spritzig?<br><strong>Mittelteil:</strong> Körper und Textur – wie fühlt sich der Wein im Mund an?<br><strong>Abgang:</strong> Was bleibt nach dem Schlucken? Langer Abgang = guter Wein.<br><br>Tannine (von Schalen und Eiche) geben das trockene, pelzige Gefühl im Mund. Säure lässt einem das Wasser im Mund zusammenlaufen.'
      },
      {
        icon: '🎓', heading: 'Der Sommelier – mehr als ein Kellner',
        text: '<strong>Ein Sommelier</strong> (frz., von "sommier" = Lasttier, das Wein transportierte) ist der offizielle <strong>Weinberater und -experte im Restaurant</strong>. Er berät die Gäste, pflegt die Weinkarte, verhandelt mit Winzern und sorgt für perfekten Service.<br><br><strong>Champagner vs. Sekt:</strong> Champagner kommt NUR aus der Champagne und hat die strengsten Produktionsregeln aller Schaumweine – Kreideböden, bestimmte Rebsorten (Chardonnay, Pinot Noir, Pinot Meunier), mindestens 15 Monate Hefelager. Sekt ist der deutsche Oberbegriff für Schaumwein.<br><br><strong>Eiswein weltweit:</strong> Eiswein wird nicht nur in Deutschland gemacht! <strong>Kanada</strong> (Ontario, British Columbia) produziert hervorragenden "Icewine" – sogar in größeren Mengen. Auch <strong>Österreich</strong> macht Eiswein. Die Trauben müssen bei mindestens -7°C am Stock gefrieren.'
      },
    ],
    recap: [
      '👁️ <strong>Aussehen:</strong> Farbe, Klarheit, Tränen (Kirchenfenster)',
      '👃 <strong>Nase:</strong> Primär (Frucht), Sekundär (Gärung), Tertiär (Reifung)',
      '👅 <strong>Gaumen:</strong> Antrunk → Mittelteil → Abgang',
      '📏 Langer <strong>Abgang</strong> = Qualitätsmerkmal',
      '🎓 <strong>Sommelier</strong> = Weinberater & Experte im Restaurant',
      '🍾 <strong>Champagner</strong> nur aus der Champagne, strenge Regeln (15 Mon. Hefelager)',
      '🏆 Der systematische Ansatz macht den Profi-Sommelier!',
    ]
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
