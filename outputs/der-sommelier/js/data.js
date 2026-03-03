// ============================================================
// DER SOMMELIER — Datenbank (Weine, Regionen, Fragen)
// ============================================================

const CONFIG = {
  levels: [
    { id: 'imbiss', name: 'Imbiss "Zum Goldenen Gyros"', shortName: 'Goldener Gyros', icon: '🌯',
      xpNeeded: 0, xpToNext: 80, unlockRegions: ['deutschland', 'italien', 'griechenland'],
      bgKey: 'imbiss', description: 'Dein erster Job! Rot, Weiß, Rosé – mehr brauchst du hier erstmal nicht.' },
    { id: 'steakhaus', name: 'Steakhaus "Black Angus"', shortName: 'Black Angus', icon: '🥩',
      xpNeeded: 80, xpToNext: 200, unlockRegions: ['argentinien', 'suedafrika', 'spanien', 'australien'],
      bgKey: 'steakhaus', description: 'Kräftige Rote zum Steak. Malbec, Shiraz, Tempranillo – die Neue Welt ruft!' },
    { id: 'gutbuergerlich', name: 'Gasthaus "Zur Linde"', shortName: 'Zur Linde', icon: '🍽️',
      xpNeeded: 200, xpToNext: 400, unlockRegions: ['frankreich_basis', 'oesterreich'],
      bgKey: 'gutbuergerlich', description: 'Qualitätsstufen, Prädikate und regionale Spezialitäten.' },
    { id: 'gehoben', name: 'Restaurant "Le Vignoble"', shortName: 'Le Vignoble', icon: '🍷',
      xpNeeded: 400, xpToNext: 700, unlockRegions: ['burgund', 'bordeaux', 'piemont'],
      bgKey: 'gehoben', description: 'Cuvées, Jahrgänge, Terroir – jetzt wird es anspruchsvoll.' },
    { id: 'sterne', name: 'Sterne-Restaurant "Étoile"', shortName: 'Étoile', icon: '⭐',
      xpNeeded: 700, xpToNext: 999, unlockRegions: ['champagne', 'napa', 'barossa'],
      bgKey: 'sterne', description: 'Grand Cru, Blind Tasting, perfekte Menü-Begleitung.' },
  ],
  questionsPerShift: 5,
  xpPerCorrect: 12,
  xpPerWrong: 3,
  repPerCorrect: 8,
  repPerWrong: -3,
};

// ===== WINE DATABASE =====
const WINES = {
  dornfelder: {
    id: 'dornfelder', name: 'Dornfelder', region: 'deutschland',
    color: 'rot', body: 'mittel', acidity: 'mild', sweetness: 'halbtrocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Kirsche', 'Brombeere'],
    pairings: ['Gyros', 'Pizza', 'Grillwurst', 'Burger'],
    description: 'Unkomplizierter, fruchtiger Rotwein aus Deutschland. Passt zu deftigen Speisen.',
    funFact: 'Dornfelder wurde erst 1955 an der Weinbauschule Weinsberg gezüchtet – eine junge Rebsorte!',
    label: 'assets/wines/dornfelder.png'
  },
  mueller_thurgau: {
    id: 'mueller_thurgau', name: 'Müller-Thurgau', region: 'deutschland',
    color: 'weiss', body: 'leicht', acidity: 'mild', sweetness: 'halbtrocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Apfel', 'Muskat', 'Blüten'],
    pairings: ['Salat', 'leichter Fisch', 'Geflügel'],
    description: 'Milder, blumiger Weißwein. Sehr beliebt als unkomplizierter Alltagswein.',
    funFact: 'Benannt nach dem Schweizer Botaniker Hermann Müller aus dem Kanton Thurgau.',
    label: 'assets/wines/mueller_thurgau.png'
  },
  riesling_einfach: {
    id: 'riesling_einfach', name: 'Riesling trocken', region: 'deutschland',
    color: 'weiss', body: 'leicht', acidity: 'hoch', sweetness: 'trocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Zitrus', 'Apfel', 'mineralisch'],
    pairings: ['Fisch', 'Geflügel', 'Salat', 'Spargel'],
    description: 'Frischer, säurebetonter Weißwein – Deutschlands Aushängeschild.',
    funFact: 'Erste urkundliche Erwähnung einer Riesling-Rebe: 1435 am Rhein!',
    label: 'assets/wines/riesling.png'
  },
  lambrusco: {
    id: 'lambrusco', name: 'Lambrusco', region: 'italien',
    color: 'rot', body: 'leicht', acidity: 'mittel', sweetness: 'lieblich',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Erdbeere', 'Kirsche', 'spritzig'],
    pairings: ['Pizza', 'Pasta', 'Antipasti'],
    description: 'Leicht perlender, süffiger Rotwein aus der Emilia-Romagna.',
    funFact: 'Lambrusco ist eine Familie von über 60 Unterrebsorten!',
    label: 'assets/wines/lambrusco.png'
  },
  pinot_grigio: {
    id: 'pinot_grigio', name: 'Pinot Grigio', region: 'italien',
    color: 'weiss', body: 'leicht', acidity: 'mittel', sweetness: 'trocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Birne', 'Zitrus', 'Mandel'],
    pairings: ['Salat', 'Fisch', 'Meeresfrüchte', 'Pizza Bianca'],
    description: 'Leichter, erfrischender Weißwein aus Norditalien.',
    funFact: 'Pinot Grigio und Grauburgunder sind exakt die gleiche Rebsorte – nur anders benannt!',
    label: 'assets/wines/pinot_grigio.png'
  },
  imiglykos: {
    id: 'imiglykos', name: 'Imiglykos', region: 'griechenland',
    color: 'rot', body: 'leicht', acidity: 'niedrig', sweetness: 'lieblich',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Kirsche', 'Pflaume', 'süß'],
    pairings: ['Gyros', 'Souvlaki', 'Moussaka'],
    description: 'Die "Mädchentraube" – lieblich, süffig, griechisch.',
    funFact: '"Imiglykos" heißt wörtlich "halbtrocken" – obwohl der Wein eher lieblich schmeckt!',
    label: 'assets/wines/imiglykos.png'
  },
  retsina: {
    id: 'retsina', name: 'Retsina', region: 'griechenland',
    color: 'weiss', body: 'mittel', acidity: 'mittel', sweetness: 'trocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Harz', 'Kiefer', 'Zitrus'],
    pairings: ['Gyros', 'Feta', 'Oliven', 'Meeresfrüchte'],
    description: 'Geharzter griechischer Weißwein – unverwechselbar.',
    funFact: 'Seit über 2000 Jahren! Antike Griechen versiegelten Amphoren mit Kiefernharz.',
    label: 'assets/wines/retsina.png'
  },
  rose_haus: {
    id: 'rose_haus', name: 'Rosé (Hauswein)', region: 'frankreich_basis',
    color: 'rose', body: 'leicht', acidity: 'mittel', sweetness: 'trocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Erdbeere', 'Wassermelone', 'frisch'],
    pairings: ['Salat', 'Geflügel', 'Pizza', 'leichte Vorspeisen'],
    description: 'Leichter, fruchtiger Rosé – der unkomplizierte Sommerwein.',
    funFact: 'Rosé wird NICHT aus Rot- und Weißwein gemischt! Sondern durch kurzen Hautkontakt roter Trauben.',
    label: 'assets/wines/rose.png'
  },
  spaetburgunder: {
    id: 'spaetburgunder', name: 'Spätburgunder', region: 'deutschland',
    color: 'rot', body: 'mittel', acidity: 'mittel', sweetness: 'trocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Kirsche', 'Himbeere', 'Erde'],
    pairings: ['Braten', 'Geflügel', 'Pilzgerichte', 'Lachs'],
    description: 'Eleganter deutscher Rotwein – das gleiche wie Pinot Noir!',
    funFact: 'Spätburgunder = Pinot Noir. Gleiche Traube, deutsches Gewand.',
    label: 'assets/wines/spaetburgunder.png'
  },
  gruener_veltliner: {
    id: 'gruener_veltliner', name: 'Grüner Veltliner', region: 'oesterreich',
    color: 'weiss', body: 'mittel', acidity: 'hoch', sweetness: 'trocken',
    price: 'günstig', quality: 'tafelwein',
    flavors: ['Pfeffer', 'Apfel', 'Kräuter'],
    pairings: ['Wiener Schnitzel', 'Salat', 'Spargel', 'Fisch'],
    description: 'Österreichs Parade-Weißwein. Pfeffrig und frisch.',
    funFact: 'Grüner Veltliner macht über 30% der gesamten österreichischen Rebfläche aus!',
    label: 'assets/wines/gruener_veltliner.png'
  }
};

// ===== REGIONS =====
const REGIONS = {
  deutschland: {
    id: 'deutschland', name: 'Deutschland', icon: '🇩🇪', flag: '🇩🇪',
    mapX: 52, mapY: 30,
    description: 'Berühmt für Riesling und eine Vielfalt an Weißweinen. 13 Anbaugebiete von Mosel bis Baden.',
    keyFacts: [
      'Größte Rebsorten: Riesling (weiß) und Spätburgunder (rot)',
      'Qualitätsstufen: Tafelwein → Landwein → QbA → Prädikatswein',
      'Bekannte Gebiete: Mosel, Rheingau, Pfalz, Baden',
      'Ca. 100.000 Hektar Rebfläche',
    ],
    wines: ['dornfelder', 'mueller_thurgau', 'riesling_einfach', 'spaetburgunder'],
  },
  italien: {
    id: 'italien', name: 'Italien', icon: '🇮🇹', flag: '🇮🇹',
    mapX: 54, mapY: 48,
    description: 'Größter Weinproduzent der Welt! Von Südtirol bis Sizilien – überall wird Wein angebaut.',
    keyFacts: [
      'Qualitätsstufen: Vino da Tavola → IGT → DOC → DOCG',
      'Bekannteste Regionen: Toskana, Piemont, Venetien',
      'Über 500 autochthone (einheimische) Rebsorten!',
    ],
    wines: ['lambrusco', 'pinot_grigio'],
  },
  griechenland: {
    id: 'griechenland', name: 'Griechenland', icon: '🇬🇷', flag: '🇬🇷',
    mapX: 60, mapY: 55,
    description: 'Eines der ältesten Weinbauländer der Welt – Wiege des europäischen Weinbaus!',
    keyFacts: [
      'Weinbau-Tradition seit über 4000 Jahren',
      'Bekannte Rebsorten: Assyrtiko, Agiorgitiko, Moschofilero',
      'Imiglykos ("Mädchentraube") – der bekannteste griechische Exportwein',
      'Retsina – seit der Antike mit Kiefernharz versetzt',
    ],
    wines: ['imiglykos', 'retsina'],
  },
  oesterreich: {
    id: 'oesterreich', name: 'Österreich', icon: '🇦🇹', flag: '🇦🇹',
    mapX: 56, mapY: 34,
    description: 'Klein aber fein! Grüner Veltliner und elegante Blaufränkisch-Rotweine.',
    keyFacts: [
      'Paradewein: Grüner Veltliner (über 30% der Rebfläche)',
      'DAC-System ähnlich wie französische AOC',
      'Wichtige Gebiete: Wachau, Kamptal, Burgenland',
    ],
    wines: ['gruener_veltliner'],
  },
  argentinien: { id: 'argentinien', name: 'Argentinien', icon: '🇦🇷', flag: '🇦🇷', mapX: 28, mapY: 78, description: 'Heimat des Malbec.', keyFacts: [], wines: [] },
  suedafrika: { id: 'suedafrika', name: 'Südafrika', icon: '🇿🇦', flag: '🇿🇦', mapX: 56, mapY: 82, description: 'Pinotage und mehr.', keyFacts: [], wines: [] },
  spanien: { id: 'spanien', name: 'Spanien', icon: '🇪🇸', flag: '🇪🇸', mapX: 42, mapY: 48, description: 'Rioja, Tempranillo, Cava.', keyFacts: [], wines: [] },
  australien: { id: 'australien', name: 'Australien', icon: '🇦🇺', flag: '🇦🇺', mapX: 84, mapY: 78, description: 'Shiraz-Land.', keyFacts: [], wines: [] },
  frankreich_basis: { id: 'frankreich_basis', name: 'Frankreich', icon: '🇫🇷', flag: '🇫🇷', mapX: 46, mapY: 40, description: 'Die Wiege der Weinkultur.', keyFacts: [], wines: ['rose_haus'] },
  burgund: { id: 'burgund', name: 'Burgund', icon: '🍇', flag: '🇫🇷', mapX: 48, mapY: 38, description: 'Pinot Noir und Chardonnay.', keyFacts: [], wines: [] },
  bordeaux: { id: 'bordeaux', name: 'Bordeaux', icon: '🏰', flag: '🇫🇷', mapX: 42, mapY: 44, description: 'Cabernet Sauvignon und Merlot.', keyFacts: [], wines: [] },
  piemont: { id: 'piemont', name: 'Piemont', icon: '⛰️', flag: '🇮🇹', mapX: 50, mapY: 42, description: 'Barolo, Barbaresco.', keyFacts: [], wines: [] },
  champagne: { id: 'champagne', name: 'Champagne', icon: '🥂', flag: '🇫🇷', mapX: 48, mapY: 34, description: 'Der einzig wahre Schaumwein.', keyFacts: [], wines: [] },
  napa: { id: 'napa', name: 'Napa Valley', icon: '🌉', flag: '🇺🇸', mapX: 12, mapY: 38, description: 'Kaliforniens Premium-Weinland.', keyFacts: [], wines: [] },
  barossa: { id: 'barossa', name: 'Barossa Valley', icon: '🦘', flag: '🇦🇺', mapX: 86, mapY: 75, description: 'Australiens bester Shiraz.', keyFacts: [], wines: [] },
};

// ===== QUESTIONS =====
const QUESTIONS = {
  imbiss: {
    food_pairing: [
      {
        id: 'ip1', scenario: 'Ein Stammgast bestellt einen großen Gyrosteller mit Tsatsiki und Pommes.',
        question: 'Welchen Wein empfiehlst du?', guestName: 'Stavros', guestMood: '😊 entspannt',
        options: [
          { wineId: 'imiglykos', correct: true, explanation: 'Perfekt! Imiglykos passt hervorragend zur griechischen Küche – süffig und unkompliziert.' },
          { wineId: 'riesling_einfach', correct: false, explanation: 'Riesling wäre zu säurebetont für das herzhafte Gyros mit Tsatsiki.' },
          { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco passt eher zur italienischen Küche. Zum Gyros lieber was Griechisches!' },
        ]
      },
      {
        id: 'ip2', scenario: 'Eine Gruppe Studenten bestellt drei große Pizzen (Margherita, Salami, Quattro Formaggi).',
        question: 'Was schlägst du vor?', guestName: 'Die Studenten', guestMood: '🎉 feiernd',
        options: [
          { wineId: 'lambrusco', correct: true, explanation: 'Richtig! Lambrusco zur Pizza ist ein Klassiker – leicht, spritzig, italienisch.' },
          { wineId: 'retsina', correct: false, explanation: 'Retsina ist ein griechischer Harzwein – das würde eher irritieren als begeistern.' },
          { wineId: 'dornfelder', correct: false, explanation: 'Geht, aber Lambrusco ist DER Klassiker zu Pizza – die prickelnde Note passt perfekt.' },
        ]
      },
      {
        id: 'ip3', scenario: 'Ein Pärchen bestellt Putenspieße mit Salat und fragt nach einem "leichten Wein".',
        question: 'Was empfiehlst du?', guestName: 'Das Pärchen', guestMood: '💑 romantisch',
        options: [
          { wineId: 'pinot_grigio', correct: true, explanation: 'Genau! Pinot Grigio ist leicht und frisch – perfekt zu Geflügel und Salat.' },
          { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – nicht das, was man unter "leicht" versteht.' },
          { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist süßlich und eher schwer – zum Salat passt ein frischer Weißer besser.' },
        ]
      },
      {
        id: 'ip4', scenario: 'Freitag Abend, ein Gast holt Currywurst-Pommes ab und will noch ne Flasche Wein. "Irgendwas Rotes!"',
        question: 'Was gibst du ihm mit?', guestName: 'Der Eilige', guestMood: '⚡ eilig',
        options: [
          { wineId: 'dornfelder', correct: true, explanation: 'Genau! Dornfelder ist der unkomplizierte Rote zum Deftigem.' },
          { wineId: 'mueller_thurgau', correct: false, explanation: 'Er wollte ROT – Müller-Thurgau ist ein Weißwein!' },
          { wineId: 'rose_haus', correct: false, explanation: 'Der Gast wollte explizit Roten. Rosé ist weder rot noch weiß.' },
        ]
      },
      {
        id: 'ip5', scenario: 'Eine Kundin: "Ich möchte etwas Süßes, aber keinen Weißwein."',
        question: 'Was empfiehlst du?', guestName: 'Frau Müller', guestMood: '🤔 wählerisch',
        options: [
          { wineId: 'imiglykos', correct: true, explanation: 'Richtig! Imiglykos ist lieblich und rot – genau was sie sucht.' },
          { wineId: 'lambrusco', correct: true, explanation: 'Gute Wahl! Lambrusco hat eine fruchtige Süße und ist rot. Passt!' },
          { wineId: 'riesling_einfach', correct: false, explanation: 'Sie sagte kein Weißwein – Riesling fällt also raus.' },
        ]
      },
      {
        id: 'ip6', scenario: 'Ein Gast bestellt gemischten Salat mit Hähnchenbrust. "Etwas Erfrischendes bitte!"',
        question: 'Was schlägst du vor?', guestName: 'Die Sportlerin', guestMood: '💪 sportlich',
        options: [
          { wineId: 'mueller_thurgau', correct: true, explanation: 'Stimmt! Müller-Thurgau ist mild, blumig und erfrischend – perfekt zum Salat.' },
          { wineId: 'dornfelder', correct: false, explanation: 'Dornfelder hat zu viel Körper – zum Salat lieber was Leichtes, Weißes.' },
          { wineId: 'retsina', correct: false, explanation: 'Erfrischend ja, aber der Harzgeschmack ist gewöhnungsbedürftig.' },
        ]
      },
    ],
    preference: [
      {
        id: 'ipref1', scenario: '"Ich kenn mich nicht aus, aber süß und rot wäre nett."',
        question: 'Was empfiehlst du?', guestName: 'Die Einsteigerin', guestMood: '😅 unsicher',
        options: [
          { wineId: 'imiglykos', correct: true, explanation: 'Genau! "Mädchentraube" – perfekt für Einsteiger.' },
          { wineId: 'pinot_grigio', correct: false, explanation: 'Pinot Grigio ist weiß und trocken – das Gegenteil!' },
          { wineId: 'riesling_einfach', correct: false, explanation: 'Riesling ist weiß – der Gast wollte ausdrücklich rot.' },
        ]
      },
      {
        id: 'ipref2', scenario: '"Ich hätte gern was Trockenes, Weißes. Nichts Kompliziertes."',
        question: 'Was empfiehlst du?', guestName: 'Der Stammgast', guestMood: '😌 bestimmt',
        options: [
          { wineId: 'riesling_einfach', correct: true, explanation: 'Perfekt! Einfacher trockener Riesling – klar, frisch, unkompliziert.' },
          { wineId: 'pinot_grigio', correct: true, explanation: 'Auch gut! Pinot Grigio ist trocken, weiß und unkompliziert.' },
          { wineId: 'imiglykos', correct: false, explanation: 'Imiglykos ist rot und lieblich – das Gegenteil von dem was bestellt wurde!' },
        ]
      },
      {
        id: 'ipref3', scenario: '"Haben Sie Rosé? Nichts zu Trockenes bitte."',
        question: 'Was empfiehlst du?', guestName: 'Die Sonnenanbeterin', guestMood: '🌞 sommerlich',
        options: [
          { wineId: 'rose_haus', correct: true, explanation: 'Unser Rosé ist eher trocken, aber leicht und fruchtig – ehrlich beraten!' },
          { wineId: 'lambrusco', correct: false, explanation: 'Lambrusco ist fruchtig-süß, aber ein Rotwein – kein Rosé.' },
          { wineId: 'mueller_thurgau', correct: false, explanation: 'Müller-Thurgau ist ein Weißwein. Die Gästin hat nach Rosé gefragt!' },
        ]
      },
    ],
    besserwisser: [
      {
        id: 'ibw1', guestName: 'Herr Oberschlau',
        statement: '"Rosé wird doch einfach aus Rotwein und Weißwein zusammengekippt!"',
        isCorrect: false, guestMood: '🧐 überheblich',
        correction: 'Nicht ganz! Rosé entsteht durch kurzen Hautkontakt roter Trauben. Mischen ist in der EU verboten – außer bei Champagner!'
      },
      {
        id: 'ibw2', guestName: 'Der Weinexperte',
        statement: '"Schraubverschluss heißt immer billiger Wein."',
        isCorrect: false, guestMood: '😤 besserwisserisch',
        correction: 'Stimmt nicht! Viele Top-Weingüter nutzen Schraubverschluss – er schützt sogar besser vor Korkfehler!'
      },
      {
        id: 'ibw3', guestName: 'Onkel Werner',
        statement: '"Rotwein muss immer bei Zimmertemperatur getrunken werden."',
        isCorrect: false, guestMood: '👴 belehrend',
        correction: '"Zimmertemperatur" war mal 16-18°C! Bei heutigen 22-24°C wird Rotwein zu warm. Ideal: 14-18°C.'
      },
      {
        id: 'ibw4', guestName: 'Die Hobby-Sommelière',
        statement: '"Pinot Grigio und Grauburgunder – das sind doch verschiedene Trauben."',
        isCorrect: false, guestMood: '🤓 interessiert',
        correction: 'Gleiche Traube! Pinot Grigio (IT), Grauburgunder (DE), Pinot Gris (FR) – alles eins.'
      },
      {
        id: 'ibw5', guestName: 'Der Urlauber',
        statement: '"Retsina schmeckt nach Harz, weil die Griechen Kiefernharz reinkippen."',
        isCorrect: true, guestMood: '🏖️ skeptisch',
        correction: 'Stimmt tatsächlich! Kiefernharz wird während der Gärung zugegeben – Tradition seit der Antike.'
      },
      {
        id: 'ibw6', guestName: 'Die Gesundheitsbewusste',
        statement: '"Von Sulfiten im Wein kriegt man Kopfschmerzen."',
        isCorrect: false, guestMood: '🥗 besorgt',
        correction: 'Stark vereinfacht! Kopfschmerzen kommen eher von Histaminen, Tanninen – oder einfach zu viel Alkohol. Sulfite sind in Trockenfrüchten in viel höherer Konzentration!'
      },
    ]
  }
};

// ===== WINE INDEXES =====
const WINES_BY_REGION = {};
const WINES_BY_COLOR = { rot: [], weiss: [], rose: [] };
Object.values(WINES).forEach(w => {
  if (!WINES_BY_REGION[w.region]) WINES_BY_REGION[w.region] = [];
  WINES_BY_REGION[w.region].push(w.id);
  if (WINES_BY_COLOR[w.color]) WINES_BY_COLOR[w.color].push(w.id);
});
