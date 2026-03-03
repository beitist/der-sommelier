// ============================================================
// DER SOMMELIER — Game Engine
// ============================================================

// ===== GAME STATE =====
let state = {
  scene: 'title',       // title, map, restaurant, region, explorer
  player: {
    level: 0,
    xp: 0,
    reputation: [0, 0, 0, 0, 0],
    wineKnowledge: {},   // wineId → { seen, correct }
    discoveredWines: new Set(), // wines the player has "met"
  },
  currentShift: null,
  currentQuestion: null,
  selectedRegion: null,
  explorerWineIndex: 0,  // for wine explorer
  overlay: null,
  overlayData: null,
  animating: false,
};

// ===== HELPERS =====
function getLevel() { return CONFIG.levels[state.player.level]; }
function getNextLevel() { return CONFIG.levels[state.player.level + 1] || null; }
function getXpProgress() {
  const next = getNextLevel();
  if (!next) return 100;
  const lv = getLevel();
  return Math.min(100, Math.round(((state.player.xp - lv.xpNeeded) / (next.xpNeeded - lv.xpNeeded)) * 100));
}
function getUnlockedRegionIds() {
  const ids = [];
  for (let i = 0; i <= state.player.level; i++) {
    ids.push(...CONFIG.levels[i].unlockRegions);
  }
  return ids;
}
function getAvailableWineIds() {
  const unlockedRegions = getUnlockedRegionIds();
  return Object.values(WINES).filter(w => unlockedRegions.includes(w.region)).map(w => w.id);
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ===== SAVE / LOAD =====
function saveGame() {
  try {
    const saveData = {
      player: {
        ...state.player,
        discoveredWines: [...state.player.discoveredWines],
      },
      version: 2,
    };
    localStorage.setItem('sommelier_v2', JSON.stringify(saveData));
  } catch(e) { console.warn('Save failed', e); }
}

function loadGame() {
  try {
    const raw = localStorage.getItem('sommelier_v2');
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (data.version !== 2) return false;
    state.player = data.player;
    state.player.discoveredWines = new Set(data.player.discoveredWines || []);
    return true;
  } catch(e) { return false; }
}

function hasSave() {
  return !!localStorage.getItem('sommelier_v2');
}

// ===== GAME ACTIONS =====
function startNewGame() {
  state = {
    scene: 'explorer',
    player: {
      level: 0, xp: 0,
      reputation: [0, 0, 0, 0, 0],
      wineKnowledge: {},
      discoveredWines: new Set(),
    },
    currentShift: null,
    currentQuestion: null,
    selectedRegion: null,
    explorerWineIndex: 0,
    overlay: null,
    overlayData: null,
  };
  saveGame();
  render();
}

function continueGame() {
  if (loadGame()) {
    state.scene = 'restaurant';
    state.currentShift = null;
    state.currentQuestion = null;
    render();
  }
}

function goToScene(scene, data) {
  state.scene = scene;
  state.overlay = null;
  state.overlayData = null;
  if (data) Object.assign(state, data);
  render();
}

// ===== EXPLORER MODE =====
function getExplorerWines() {
  const lv = getLevel();
  const regionIds = lv.unlockRegions;
  const wines = [];
  regionIds.forEach(rId => {
    const region = REGIONS[rId];
    if (region && region.wines) {
      region.wines.forEach(wId => {
        if (WINES[wId]) wines.push(WINES[wId]);
      });
    }
  });
  return wines;
}

function explorerNext() {
  const wines = getExplorerWines();
  if (state.explorerWineIndex < wines.length - 1) {
    state.explorerWineIndex++;
    state.player.discoveredWines.add(wines[state.explorerWineIndex].id);
    saveGame();
  } else {
    // Explorer done → go to restaurant
    goToScene('restaurant');
  }
  render();
}

function explorerPrev() {
  if (state.explorerWineIndex > 0) {
    state.explorerWineIndex--;
    render();
  }
}

function explorerSkip() {
  // Mark all wines as discovered
  const wines = getExplorerWines();
  wines.forEach(w => state.player.discoveredWines.add(w.id));
  saveGame();
  goToScene('restaurant');
}

// ===== SHIFT SYSTEM =====
function startShift() {
  const levelId = getLevel().id;
  const questionPool = QUESTIONS[levelId];
  if (!questionPool) return;

  const allQuestions = [];
  if (questionPool.food_pairing) questionPool.food_pairing.forEach(q => allQuestions.push({ type: 'food_pairing', data: q }));
  if (questionPool.preference) questionPool.preference.forEach(q => allQuestions.push({ type: 'preference', data: q }));
  if (questionPool.besserwisser) questionPool.besserwisser.forEach(q => allQuestions.push({ type: 'besserwisser', data: q }));

  const selected = shuffle(allQuestions).slice(0, CONFIG.questionsPerShift);

  state.currentShift = {
    questions: selected,
    questionIndex: 0,
    correct: 0, wrong: 0, total: 0,
    xpEarned: 0,
  };
  state.currentQuestion = selected[0];
  state.overlay = null;
  render();
}

function answerQuestion(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;
  const wine = WINES[opt.wineId];

  const xpGain = isCorrect ? CONFIG.xpPerCorrect : CONFIG.xpPerWrong;
  const repGain = isCorrect ? CONFIG.repPerCorrect : CONFIG.repPerWrong;

  state.player.xp += xpGain;
  state.player.reputation[state.player.level] = Math.max(0, Math.min(100, state.player.reputation[state.player.level] + repGain));
  state.currentShift.xpEarned += xpGain;
  if (isCorrect) state.currentShift.correct++; else state.currentShift.wrong++;
  state.currentShift.total++;

  if (!state.player.wineKnowledge[opt.wineId]) state.player.wineKnowledge[opt.wineId] = { seen: 0, correct: 0 };
  state.player.wineKnowledge[opt.wineId].seen++;
  if (isCorrect) state.player.wineKnowledge[opt.wineId].correct++;

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, explanation: opt.explanation, funFact: wine ? wine.funFact : '', xp: xpGain };
  saveGame();
  render();
}

function answerBesserwisser(value) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  const playerSaidTrue = value === 'true';
  q.answered = playerSaidTrue;
  const isCorrect = (playerSaidTrue === q.data.isCorrect);

  const xpGain = isCorrect ? CONFIG.xpPerCorrect : CONFIG.xpPerWrong;
  const repGain = isCorrect ? CONFIG.repPerCorrect : CONFIG.repPerWrong;

  state.player.xp += xpGain;
  state.player.reputation[state.player.level] = Math.max(0, Math.min(100, state.player.reputation[state.player.level] + repGain));
  state.currentShift.xpEarned += xpGain;
  if (isCorrect) state.currentShift.correct++; else state.currentShift.wrong++;
  state.currentShift.total++;

  saveGame();
  render();
}

function nextQuestion() {
  state.overlay = null;
  state.overlayData = null;
  const shift = state.currentShift;
  shift.questionIndex++;

  if (shift.questionIndex >= shift.questions.length) {
    state.currentQuestion = null;
    // Check level up
    const nextLv = getNextLevel();
    if (nextLv && state.player.xp >= nextLv.xpNeeded) {
      state.player.level++;
      state.overlay = 'levelup';
      state.overlayData = { newLevel: CONFIG.levels[state.player.level] };
    }
    saveGame();
    render();
    return;
  }
  state.currentQuestion = shift.questions[shift.questionIndex];
  render();
}

function endShift() {
  state.currentShift = null;
  state.currentQuestion = null;
  state.overlay = null;
  render();
}
