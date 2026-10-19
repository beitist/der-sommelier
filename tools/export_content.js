// ============================================================
// DER SOMMELIER — Spielinhalte als JSON exportieren
// Quelle für generate_pdf.py, damit die PDF immer zum Spiel passt.
// Aufruf: node tools/export_content.js > inhalte.json
// ============================================================
const fs = require('fs'), vm = require('vm'), path = require('path');
const js = path.join(__dirname, '..', 'outputs', 'der-sommelier', 'js');
const files = ['data.js', 'questions_lv0.js', 'questions_lv1.js', 'questions_lv2.js', 'questions_lv3.js', 'questions_lv4.js'];
const ctx = {};
vm.createContext(ctx);
vm.runInContext(files.map(f => fs.readFileSync(path.join(js, f), 'utf8')).join('\n') +
  '\n;globalThis.__d = { CONFIG, WINES, REGIONS, CHEFS, LEVEL_INTROS, QUESTIONS };', ctx);
const { CONFIG, WINES, REGIONS, CHEFS, LEVEL_INTROS, QUESTIONS } = ctx.__d;

const COUNTRY_CODES = {
  deutschland: 'DE', italien: 'IT', griechenland: 'GR', oesterreich: 'AT', frankreich: 'FR',
  spanien: 'ES', portugal: 'PT', argentinien: 'AR', suedafrika: 'ZA',
};
const COLOR_DOTS = { rot: '🔴', weiss: '⚪', rose: '🩷' };

const levels = CONFIG.levels.map((lv, i) => {
  const intro = LEVEL_INTROS[lv.id] || { title: '', sections: [], recap: [] };
  const questions = {};
  for (const [type, arr] of Object.entries(QUESTIONS[lv.id] || {})) questions[type] = arr.length;
  return {
    nr: i,
    name: lv.name,
    icon: lv.icon,
    chef: CHEFS[lv.id] ? CHEFS[lv.id].name : '',
    theme: lv.themeLabel,
    description: lv.description,
    levelCode: lv.levelCode || null,
    countries: lv.unlockRegions.map(id => ({
      flag: REGIONS[id].flag, name: REGIONS[id].name, facts: REGIONS[id].keyFacts,
    })),
    wines: Object.values(WINES).filter(w => w.level === i).map(w => ({
      name: w.name, dot: COLOR_DOTS[w.color] || '', country: COUNTRY_CODES[w.region] || w.region,
      body: w.body, sweetness: w.sweetness, flavors: w.flavors.join(', '), price: w.price,
    })),
    lehrgang: {
      title: intro.title,
      headings: intro.sections.map(s => `${s.icon} ${s.heading}`),
      recap: intro.recap || [],
    },
    questions,
  };
});

process.stdout.write(JSON.stringify({ levels, optionsPerQuestion: CONFIG.optionsPerQuestion }, null, 1));
