// ============================================================
// DER SOMMELIER — Spielinhalte als JSON exportieren
// Quelle für generate_pdf.py, damit die PDF immer zum Spiel passt.
// Aufruf: node tools/export_content.js > inhalte.json
// ============================================================
const fs = require('fs'), vm = require('vm'), path = require('path');
const js = path.join(__dirname, '..', 'outputs', 'der-sommelier', 'js');
const files = ['data.js', 'questions_lv0.js', 'questions_lv1.js', 'questions_lv2.js', 'questions_lv3.js', 'questions_lv4.js', 'academy.js'];
const ctx = {};
vm.createContext(ctx);
vm.runInContext(files.map(f => fs.readFileSync(path.join(js, f), 'utf8')).join('\n') +
  '\n;globalThis.__d = { CONFIG, WINES, REGIONS, CHEFS, LEVEL_INTROS, QUESTIONS, ACADEMY };', ctx);
const { CONFIG, WINES, REGIONS, CHEFS, LEVEL_INTROS, QUESTIONS, ACADEMY } = ctx.__d;

const COUNTRY_CODES = {
  deutschland: 'DE', italien: 'IT', griechenland: 'GR', oesterreich: 'AT', frankreich: 'FR',
  spanien: 'ES', portugal: 'PT', argentinien: 'AR', suedafrika: 'ZA',
};
const COLOR_DOTS = { rot: '🔴', weiss: '⚪', rose: '🩷' };
const COLOR_NAMES = { rot: 'Rot', weiss: 'Weiß', rose: 'Rosé' };
const plain = t => String(t || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const wineName = id => (WINES[id] ? WINES[id].name : id);

// Beispiel: erste Speiseempfehlung bzw. erste Gast-Behauptung eines Levels
function examples(lvId) {
  const q = QUESTIONS[lvId] || {}, out = [];
  const fp = (q.food_pairing || [])[0];
  if (fp) {
    const best = fp.options.find(o => o.favorite) || fp.options.find(o => o.correct);
    out.push({ kind: 'Speiseempfehlung', situation: plain(fp.scenario), question: plain(fp.question),
      options: fp.options.map(o => wineName(o.wineId)), answer: wineName(best.wineId), explanation: plain(best.explanation) });
  }
  const bw = (q.besserwisser || [])[0];
  if (bw) out.push({ kind: 'Besserwisser', situation: plain(bw.statement),
    answer: bw.isCorrect ? 'Stimmt.' : 'Stimmt nicht.', explanation: plain(bw.correction) });
  return out;
}

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
      color: COLOR_NAMES[w.color] || w.color, grape: w.grape || '',
    })),
    academy: ACADEMY[lv.id] ? {
      title: plain(ACADEMY[lv.id].title),
      lessons: ACADEMY[lv.id].lessons.map(l => ({
        title: plain(l.title), exercise: plain(l.exercise.question), label: l.exercise.type === 'label',
      })),
    } : null,
    examples: examples(lv.id),
    lehrgang: {
      title: intro.title,
      headings: intro.sections.map(s => `${s.icon} ${s.heading}`),
      recap: intro.recap || [],
    },
    questions,
  };
});

process.stdout.write(JSON.stringify({ levels, optionsPerQuestion: CONFIG.optionsPerQuestion }, null, 1));
