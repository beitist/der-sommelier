// ============================================================
// DER SOMMELIER — Game Engine
// ============================================================

// ===== GAME STATE =====
let state = {
  scene: 'title',       // title, map, restaurant, region, explorer
  player: {
    level: 0,
    tips: 0,             // Trinkgeld (ehemals XP)
    reputation: [0, 0, 0, 0, 0],
    wineKnowledge: {},   // wineId → { seen, correct }
    discoveredWines: new Set(),
    chefIntroSeen: [false, false, false, false, false],
    shiftsCompleted: [0, 0, 0, 0, 0],
  },
  currentShift: null,
  currentQuestion: null,
  currentGuest: null,    // { name, sprite }
  selectedRegion: null,
  explorerWineIndex: 0,
  showChefIntro: false,
  overlay: null,
  overlayData: null,
};

// ===== HELPERS =====
function getLevel() { return CONFIG.levels[state.player.level]; }
function getNextLevel() { return CONFIG.levels[state.player.level + 1] || null; }
function getTipProgress() {
  const next = getNextLevel();
  if (!next) return 100;
  const lv = getLevel();
  return Math.min(100, Math.round(((state.player.tips - lv.xpNeeded) / (next.xpNeeded - lv.xpNeeded)) * 100));
}
function getUnlockedRegionIds() {
  const ids = [];
  for (let i = 0; i <= state.player.level; i++) {
    ids.push(...CONFIG.levels[i].unlockRegions);
  }
  return ids;
}
function getAvailableWineIds() {
  return Object.values(WINES).filter(w => w.level <= state.player.level).map(w => w.id);
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
      version: 3,
    };
    localStorage.setItem('sommelier_v3', JSON.stringify(saveData));
  } catch(e) { console.warn('Save failed', e); }
}

function loadGame() {
  try {
    // Try v3 first
    let raw = localStorage.getItem('sommelier_v3');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.version === 3) {
        state.player = data.player;
        state.player.discoveredWines = new Set(data.player.discoveredWines || []);
        // Ensure new fields exist
        if (!state.player.chefIntroSeen) state.player.chefIntroSeen = [false, false, false, false, false];
        if (!state.player.shiftsCompleted) state.player.shiftsCompleted = [0, 0, 0, 0, 0];
        if (state.player.tips === undefined) state.player.tips = state.player.xp || 0;
        return true;
      }
    }
    // Migrate from v2
    raw = localStorage.getItem('sommelier_v2');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.version === 2) {
        state.player = data.player;
        state.player.discoveredWines = new Set(data.player.discoveredWines || []);
        state.player.tips = data.player.xp || 0;
        state.player.chefIntroSeen = [false, false, false, false, false];
        state.player.shiftsCompleted = [0, 0, 0, 0, 0];
        // Mark current level's chef as seen if player has progressed
        for (let i = 0; i < state.player.level; i++) {
          state.player.chefIntroSeen[i] = true;
        }
        delete state.player.xp;
        saveGame(); // Save as v3
        return true;
      }
    }
    return false;
  } catch(e) { return false; }
}

function hasSave() {
  return !!(localStorage.getItem('sommelier_v3') || localStorage.getItem('sommelier_v2'));
}

// ===== CHEF INTRO =====
function checkChefIntro() {
  const lv = state.player.level;
  if (!state.player.chefIntroSeen[lv]) {
    state.showChefIntro = true;
    render();
    return true;
  }
  return false;
}

function dismissChefIntro() {
  state.player.chefIntroSeen[state.player.level] = true;
  state.showChefIntro = false;
  saveGame();
  // After chef intro → go to explorer (with intro page)
  goToScene('explorer', { explorerWineIndex: -1 });
}

// ===== GUEST ASSIGNMENT =====
function assignGuestToQuestion(q, level) {
  // If question has a specific guestId, use it
  if (q.data && q.data.guestId) {
    const info = getGuestInfo(q.data.guestId, level);
    if (info) return info;
  }
  // Otherwise pick a random guest from the level pool
  return getRandomGuest(level);
}

function getRandomGuest(level) {
  const pool = [];
  // Add recurring guests (with level-appropriate sprite)
  GUESTS.recurring.forEach(g => {
    pool.push({ name: g.name, sprite: g.sprites[level] || g.sprites[0], facing: g.facing || 'left' });
  });
  // Add level-specific guests
  const levelGuests = GUESTS.byLevel[level] || [];
  levelGuests.forEach(g => {
    pool.push({ name: g.name, sprite: g.sprite, facing: g.facing || 'left' });
  });
  return pick(pool);
}

// ===== GAME ACTIONS =====
function startNewGame() {
  state = {
    scene: 'restaurant',
    player: {
      level: 0, tips: 0,
      reputation: [0, 0, 0, 0, 0],
      wineKnowledge: {},
      discoveredWines: new Set(),
      chefIntroSeen: [false, false, false, false, false],
      shiftsCompleted: [0, 0, 0, 0, 0],
    },
    currentShift: null,
    currentQuestion: null,
    currentGuest: null,
    selectedRegion: null,
    explorerWineIndex: -1,
    showChefIntro: true,  // Chef intro first, then explorer
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
    state.showChefIntro = false;
    // Check if chef intro needs showing
    checkChefIntro();
    if (!state.showChefIntro) render();
  }
}

function goToScene(scene, data) {
  state.scene = scene;
  state.overlay = null;
  state.overlayData = null;
  state.showChefIntro = false;
  if (data) Object.assign(state, data);
  render();
}

// ===== EXPLORER MODE =====
function getExplorerWines() {
  // Show wines for the current level only (not cumulative)
  return Object.values(WINES).filter(w => w.level === state.player.level);
}

function explorerNext() {
  const wines = getExplorerWines();
  // From intro page → first wine
  if (state.explorerWineIndex === -1) {
    state.explorerWineIndex = 0;
    state.player.discoveredWines.add(wines[0].id);
    saveGame();
    render();
    return;
  }
  if (state.explorerWineIndex < wines.length - 1) {
    state.explorerWineIndex++;
    state.player.discoveredWines.add(wines[state.explorerWineIndex].id);
    saveGame();
  } else {
    // Explorer done → restaurant
    goToScene('restaurant');
    return;
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

  const level = state.player.level;
  const allQuestions = [];

  // Collect all question types
  if (questionPool.food_pairing) questionPool.food_pairing.forEach(q => allQuestions.push({ type: 'food_pairing', data: q }));
  if (questionPool.preference) questionPool.preference.forEach(q => allQuestions.push({ type: 'preference', data: q }));
  if (questionPool.besserwisser) questionPool.besserwisser.forEach(q => allQuestions.push({ type: 'besserwisser', data: q }));
  if (questionPool.weinwissen) questionPool.weinwissen.forEach(q => allQuestions.push({ type: 'weinwissen', data: q }));
  if (questionPool.blindtasting) questionPool.blindtasting.forEach(q => allQuestions.push({ type: 'blindtasting', data: q }));

  const selected = shuffle(allQuestions).slice(0, CONFIG.questionsPerShift);

  // Assign guests to each question
  selected.forEach(q => {
    q.guest = assignGuestToQuestion(q, level);
  });

  state.currentShift = {
    questions: selected,
    questionIndex: 0,
    correct: 0, wrong: 0, total: 0,
    tipsEarned: 0,
  };
  state.currentQuestion = selected[0];
  state.currentGuest = selected[0].guest;
  state.overlay = null;
  render();
}

// ===== SHARED TIP/REP LOGIC =====
function applyTipAndRep(isCorrect) {
  const tipGain = isCorrect ? CONFIG.tipPerCorrect : CONFIG.tipPerWrong;
  const repGain = isCorrect ? CONFIG.repPerCorrect : CONFIG.repPerWrong;

  state.player.tips += tipGain;
  state.player.reputation[state.player.level] = Math.max(0, Math.min(100,
    state.player.reputation[state.player.level] + repGain));
  state.currentShift.tipsEarned += tipGain;
  if (isCorrect) state.currentShift.correct++; else state.currentShift.wrong++;
  state.currentShift.total++;

  return tipGain;
}

// ===== ANSWER HANDLERS =====
function answerQuestion(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;
  const wine = WINES[opt.wineId];

  const tipGain = applyTipAndRep(isCorrect);

  // Track wine knowledge
  if (opt.wineId) {
    if (!state.player.wineKnowledge[opt.wineId]) state.player.wineKnowledge[opt.wineId] = { seen: 0, correct: 0 };
    state.player.wineKnowledge[opt.wineId].seen++;
    if (isCorrect) state.player.wineKnowledge[opt.wineId].correct++;
  }

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, explanation: opt.explanation, funFact: wine ? wine.funFact : '', tips: tipGain };
  saveGame();
  render();
}

function answerBesserwisser(value) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  const playerSaidTrue = value === 'true';
  q.answered = playerSaidTrue;
  const isCorrect = (playerSaidTrue === q.data.isCorrect);

  applyTipAndRep(isCorrect);
  saveGame();
  render();
}

function answerWeinwissen(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;

  const tipGain = applyTipAndRep(isCorrect);

  state.overlay = 'feedback';
  state.overlayData = { correct: isCorrect, explanation: q.data.explanation, funFact: '', tips: tipGain };
  saveGame();
  render();
}

function answerBlindtasting(index) {
  const q = state.currentQuestion;
  if (!q || q.answered !== undefined) return;

  q.answered = index;
  const opt = q.data.options[index];
  const isCorrect = opt.correct;
  const wine = WINES[opt.wineId];

  const tipGain = applyTipAndRep(isCorrect);

  state.overlay = 'feedback';
  state.overlayData = {
    correct: isCorrect,
    explanation: q.data.explanation,
    funFact: wine ? wine.funFact : '',
    tips: tipGain,
    revealWine: isCorrect ? null : q.data.options.find(o => o.correct)?.wineId,
  };
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
    state.currentGuest = null;
    state.player.shiftsCompleted[state.player.level]++;

    // Check level up
    const nextLv = getNextLevel();
    if (nextLv && state.player.tips >= nextLv.xpNeeded) {
      state.player.level++;
      state.overlay = 'levelup';
      state.overlayData = { newLevel: CONFIG.levels[state.player.level] };
    }
    saveGame();
    render();
    return;
  }

  state.currentQuestion = shift.questions[shift.questionIndex];
  state.currentGuest = state.currentQuestion.guest;
  render();
}

function endShift() {
  state.currentShift = null;
  state.currentQuestion = null;
  state.currentGuest = null;
  state.overlay = null;
  render();
}

// ===== WINE DETAIL (Region view) =====
function showWineDetail(wineId) {
  state.overlay = 'wineDetail';
  state.overlayData = { wineId };
  render();
}

function hideWineDetail() {
  state.overlay = null;
  state.overlayData = null;
  render();
}
