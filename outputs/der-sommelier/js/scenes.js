// ============================================================
// DER SOMMELIER — Scene Renderers
// ============================================================

function render() {
  const root = document.getElementById('game-root');
  let html = '';

  // Chef intro has priority
  if (state.showChefIntro && state.scene === 'restaurant') {
    html = renderChefIntro();
  } else {
    switch (state.scene) {
      case 'title': html = renderTitle(); break;
      case 'explorer': html = renderExplorer(); break;
      case 'map': html = renderMap(); break;
      case 'restaurant': html = renderRestaurant(); break;
      case 'region': html = renderRegion(); break;
      case 'minigame': html = renderMiniGame(); break;
    }
  }
  // Global overlays (can appear on any scene)
  if (state.overlay === 'downgrade') html += renderDowngradeOverlay();

  root.innerHTML = html;
  attachEvents();

  // Auto-scroll beratung chat history
  const berHist = document.getElementById('ber-history');
  if (berHist) berHist.scrollTop = berHist.scrollHeight;
}

// ===== TITLE =====
function renderTitle() {
  return `
    <div class="scene scene-title active">
      <div class="title-bg">
        <div class="title-vignette"></div>
        <div class="title-content">
          <div class="title-glass">
            <div class="glass-bowl"><div class="glass-wine"></div></div>
            <div class="glass-stem"></div>
            <div class="glass-base"></div>
          </div>
          <h1 class="title-text">DER SOMMELIER</h1>
          <p class="title-sub">Ein Wein-Abenteuer für angehende Gastro-Profis</p>
          <div class="title-buttons">
            <button class="btn btn-primary" onclick="startNewGame()">🍷 Neues Spiel</button>
            ${hasSave() ? '<button class="btn btn-secondary" onclick="continueGame()">📂 Weiterspielen</button>' : ''}
            <button class="btn btn-ghost" onclick="showLevelCodeInput()">🔑 Levelcode eingeben</button>
          </div>
          <div id="levelcode-input" style="display:none; margin-top:20px;">
            <div style="display:flex; gap:8px; justify-content:center; align-items:center;">
              <input id="levelcode-field" type="text" placeholder="Code eingeben..."
                style="padding:10px 16px; font-size:16px; font-family:var(--font-ui); background:var(--c-card); color:var(--c-text); border:2px solid var(--c-purple); border-radius:6px; text-transform:uppercase; width:200px; text-align:center;"
                onkeydown="if(event.key==='Enter')tryLevelCode()">
              <button class="btn btn-primary btn-small" onclick="tryLevelCode()">ENTER</button>
            </div>
            <p id="levelcode-error" style="color:var(--c-danger); font-size:13px; margin-top:8px; display:none;">Unbekannter Code!</p>
          </div>
        </div>
      </div>
    </div>`;
}

// ===== CHEF INTRO =====
function renderChefIntro() {
  const lv = getLevel();
  const chef = CHEFS[lv.id];
  if (!chef) { dismissChefIntro(); return ''; }

  const introText = Array.isArray(chef.intro)
    ? chef.intro.map(p => `<p>${p}</p>`).join('')
    : `<p>${chef.intro}</p>`;

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/${lv.bgKey}/hintergrund.png')"></div>
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/${lv.bgKey}/theke.png')"></div>
          <div class="chef-intro-scene">
            <div class="chef-sprite-area">
              <img src="${chef.sprite}" alt="${chef.name}" onerror="this.style.display='none'">
            </div>
            <div class="chef-dialog-area">
              <div class="chef-intro-card">
                <h2 class="chef-name">${chef.name}</h2>
                <div class="chef-restaurant">${lv.icon} ${lv.name}</div>
                <div class="chef-theme">Thema: ${lv.themeLabel}</div>
                <div class="chef-intro-text">${introText}</div>
                <div class="chef-intro-buttons">
                  <button class="btn btn-primary btn-large" onclick="dismissChefIntro()">📚 Zum Lehrgang!</button>
                  <button class="btn btn-secondary" onclick="dismissChefIntro();goToScene('map')">🗺️ Erst Länderinfo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== EXPLORER MODE =====
function renderExplorer() {
  const wines = getExplorerWines();
  if (wines.length === 0) return renderRestaurant();

  // Intro page (explorerWineIndex === -1)
  if (state.explorerWineIndex === -1) return renderExplorerIntro(wines);

  const wine = wines[state.explorerWineIndex];
  const region = REGIONS[wine.region];
  const progress = `${state.explorerWineIndex + 1} / ${wines.length}`;
  const isLast = state.explorerWineIndex === wines.length - 1;

  const colorBg = wine.color === 'rot' ? '#5c1a2a' : wine.color === 'weiss' ? '#4a4a2a' : '#5c2a3a';
  const colorAccent = wine.color === 'rot' ? '#e94560' : wine.color === 'weiss' ? '#f0e68c' : '#ffb6c1';

  state.player.discoveredWines.add(wine.id);

  return `
    <div class="scene scene-explorer active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="explorer-bg" style="background:linear-gradient(135deg, ${colorBg}, #1a1a2e)">
          <div class="explorer-header">
            <div class="explorer-title">
              <span class="explorer-badge">📚 LEHRGANG</span>
              <span class="explorer-level">${CONFIG.levels[wine.level].name}</span>
            </div>
            <div class="explorer-progress">${progress}</div>
          </div>

          <div class="explorer-card">
            <!-- Wine Bottle Image -->
            <div class="wine-bottle-area">
              <img class="wine-bottle-img" src="${wine.label}" alt="${wine.name}" onerror="this.style.display='none'">
            </div>

            <!-- Wine Info -->
            <div class="wine-info-area">
              <h2 class="wine-title" style="color:${colorAccent}">${wine.name}</h2>
              <div class="wine-meta">
                <span class="wine-price">${wine.price}</span>
                <span class="wine-grape">${wine.grape}</span>
              </div>
              <p class="wine-desc">${wine.description}</p>

              <div class="wine-details">
                <div class="detail-row">
                  <span class="detail-label">🎨 Farbe</span>
                  <span class="detail-value">${wine.color === 'rot' ? 'Rot' : wine.color === 'weiss' ? 'Weiß' : 'Rosé'}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">💧 Geschmack</span>
                  <span class="detail-value">${wine.sweetness}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">💪 Körper</span>
                  <span class="detail-value">${wine.body}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🌍 Region</span>
                  <span class="detail-value">${region ? region.flag + ' ' + region.name : ''}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">👃 Aromen</span>
                  <span class="detail-value">${wine.flavors.join(', ')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🍽️ Passt zu</span>
                  <span class="detail-value">${wine.pairings.join(', ')}</span>
                </div>
              </div>

              <div class="wine-funfact">
                <span class="funfact-icon">💡</span>
                <span>${wine.funFact}</span>
              </div>
            </div>
          </div>

          <div class="explorer-nav">
            <button class="btn btn-secondary" onclick="explorerPrev()" ${state.explorerWineIndex === 0 ? 'disabled' : ''}>← Zurück</button>
            <button class="btn btn-ghost" onclick="explorerSkip()">Überspringen →→</button>
            <button class="btn btn-primary" onclick="explorerNext()">${isLast ? '✅ Zur Arbeit!' : 'Nächster Wein →'}</button>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== EXPLORER INTRO =====
function renderExplorerIntro(wines) {
  const lv = getLevel();
  const intro = LEVEL_INTROS[lv.id];
  if (!intro) { state.explorerWineIndex = 0; return renderExplorer(); }

  const sectionsHtml = intro.sections.map(s => `
    <div class="intro-section">
      <h3>${s.icon} ${s.heading}</h3>
      <p>${s.text}</p>
    </div>
  `).join('');

  const recapHtml = intro.recap ? `
    <div class="intro-recap">
      <h3>📋 Zusammenfassung</h3>
      <ul>${intro.recap.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>` : '';

  return `
    <div class="scene scene-explorer active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="explorer-bg" style="background:linear-gradient(135deg, #2a1a3a, #1a1a2e)">
          <div class="explorer-header">
            <div class="explorer-title">
              <span class="explorer-badge">📚 LEHRGANG</span>
              <span class="explorer-level">${lv.name}</span>
            </div>
            <div class="explorer-progress">Einführung</div>
          </div>
          <div class="explorer-intro">
            <h2>${intro.title}</h2>
            ${sectionsHtml}
            ${recapHtml}
          </div>
          <div class="explorer-nav">
            <div></div>
            <button class="btn btn-ghost" onclick="explorerSkip()">Überspringen →→</button>
            <button class="btn btn-primary" onclick="explorerNext()">Weiter zu den Weinen →</button>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== MAP =====
function renderMap() {
  const unlocked = getUnlockedRegionIds();

  let regions = Object.values(REGIONS).map(r => {
    const isUnlocked = unlocked.includes(r.id);
    const wineCount = r.wines.filter(wId => WINES[wId] && WINES[wId].level <= state.player.level).length;
    return `<div class="map-pin ${isUnlocked ? 'unlocked' : 'locked'}"
                 style="left:${r.mapX}%;top:${r.mapY}%"
                 ${isUnlocked ? `onclick="goToScene('region', {selectedRegion:'${r.id}'})"` : ''}>
      <span class="pin-icon">${r.flag}</span>
      <span class="pin-name">${r.name}</span>
      ${!isUnlocked ? '<span class="pin-lock">🔒</span>' : `<span class="pin-wines">${wineCount} Weine</span>`}
    </div>`;
  }).join('');

  return `
    <div class="scene scene-map active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="map-bg">
          <div class="map-title-bar">
            <h2>🗺️ Weinländer der Welt</h2>
            <button class="btn btn-small btn-secondary" onclick="goToScene('restaurant')">← Zurück zum Restaurant</button>
          </div>
          <div class="map-world" style="background-image:url('assets/map/weltkarte.png')">
            ${regions}
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== REGION INFO =====
function renderRegion() {
  const r = REGIONS[state.selectedRegion];
  if (!r) return renderMap();

  const playerLevel = state.player.level;
  const visibleWines = r.wines.filter(wId => WINES[wId] && WINES[wId].level <= playerLevel);
  const lockedCount = r.wines.length - visibleWines.length;

  const winesHtml = visibleWines.map(wId => {
    const w = WINES[wId];
    if (!w) return '';
    const dot = w.color === 'rot' ? '🔴' : w.color === 'weiss' ? '⚪' : '🩷';
    return `<div class="region-wine-card" onclick="showWineDetail('${w.id}')" style="cursor:pointer">
      <img class="rwc-img" src="${w.label}" alt="${w.name}" onerror="this.style.display='none'">
      <div class="rwc-info">
        <div class="rwc-name">${dot} ${w.name}</div>
        <div class="rwc-detail">${w.grape} · ${w.sweetness} · ${w.price}</div>
        <div class="rwc-flavors">${w.flavors.join(', ')}</div>
      </div>
      <div class="rwc-pairings">🍽️ ${w.pairings.slice(0,2).join(', ')}</div>
    </div>`;
  }).join('');

  const lockedHtml = lockedCount > 0 ?
    `<div class="region-locked-hint">🔒 ${lockedCount} weitere${lockedCount === 1 ? 'r' : ''} Wein${lockedCount === 1 ? '' : 'e'} noch nicht freigeschaltet</div>` : '';

  return `
    <div class="scene scene-region active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="region-bg">
          <div class="region-header">
            <button class="btn btn-small btn-secondary" onclick="goToScene('map')">← Karte</button>
            <h2>${r.flag} ${r.name}</h2>
            <div></div>
          </div>
          <div class="region-body">
            <div class="region-desc">
              <p>${r.description}</p>
              <div class="region-main-regions"><strong>Hauptregionen:</strong> ${r.mainRegions}</div>
              ${r.keyFacts.length ? '<div class="region-facts">' + r.keyFacts.map(f => `<div class="fact-item">📌 ${f}</div>`).join('') + '</div>' : ''}
            </div>
            <div class="region-wines-list">
              <h3>Weine aus ${r.name}</h3>
              ${winesHtml || '<p class="muted">Noch keine Weine freigeschaltet.</p>'}
              ${lockedHtml}
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
      ${state.overlay === 'wineDetail' ? renderWineDetailOverlay() : ''}
    </div>`;
}

function renderWineDetailOverlay() {
  const w = WINES[state.overlayData?.wineId];
  if (!w) return '';
  const region = REGIONS[w.region];
  const dot = w.color === 'rot' ? '🔴' : w.color === 'weiss' ? '⚪' : '🩷';

  return `
    <div class="overlay-backdrop" onclick="hideWineDetail()">
      <div class="wine-detail-card" onclick="event.stopPropagation()">
        <div class="wine-detail-bottle">
          <img src="${w.label}" alt="${w.name}" onerror="this.style.display='none'">
        </div>
        <div class="wine-detail-info">
          <h3>${dot} ${w.name}</h3>
          <div class="wine-meta">
            <span class="wine-price">${w.price}</span>
            <span class="wine-grape">${w.grape}</span>
          </div>
          <p>${w.description}</p>
          <div class="wine-details" style="margin-bottom:12px">
            <div class="detail-row"><span class="detail-label">Farbe</span><span class="detail-value">${w.color === 'rot' ? 'Rot' : w.color === 'weiss' ? 'Weiß' : 'Rosé'}</span></div>
            <div class="detail-row"><span class="detail-label">Geschmack</span><span class="detail-value">${w.sweetness}</span></div>
            <div class="detail-row"><span class="detail-label">Körper</span><span class="detail-value">${w.body}</span></div>
            <div class="detail-row"><span class="detail-label">Region</span><span class="detail-value">${region ? region.flag + ' ' + region.name : ''}</span></div>
            <div class="detail-row"><span class="detail-label">Aromen</span><span class="detail-value">${w.flavors.join(', ')}</span></div>
            <div class="detail-row"><span class="detail-label">Passt zu</span><span class="detail-value">${w.pairings.join(', ')}</span></div>
          </div>
          <div class="wine-funfact"><span class="funfact-icon">💡</span><span>${w.funFact}</span></div>
          <button class="btn btn-secondary btn-small" style="margin-top:12px" onclick="hideWineDetail()">Schließen</button>
        </div>
      </div>
    </div>`;
}

// ===== RESTAURANT =====
function renderRestaurant() {
  const shift = state.currentShift;
  if (!shift) return renderRestaurantLobby();
  if (!state.currentQuestion) return renderShiftEnd();
  return renderQuestion();
}

function renderRestaurantLobby() {
  const lv = getLevel();
  const chef = CHEFS[lv.id];
  const rep = state.player.reputation[state.player.level];
  const stars = renderStars(rep);
  const shifts = state.player.shiftsCompleted[state.player.level];

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/${lv.bgKey}/hintergrund.png')"></div>
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/${lv.bgKey}/theke.png')"></div>
          ${lv.id === 'steakhaus' ? '<div class="skull-easter-egg" onclick="handleSkullClick()" title="💀"></div>' : ''}
          <div class="rest-ui-overlay">
            <div class="lobby-card">
              ${chef ? `<img class="lobby-chef-mini" src="${chef.sprite}" alt="${chef.name}" onerror="this.style.display='none'">` : ''}
              <div class="lobby-icon">${lv.icon}</div>
              <h2 class="lobby-title">${lv.name}</h2>
              <p class="lobby-desc">${lv.description}</p>
              <div class="lobby-stats">
                <div class="lobby-stat">
                  <span class="lobby-stat-label">Dein Ruf</span>
                  <span class="lobby-stat-value">${stars}</span>
                </div>
                <div class="lobby-stat">
                  <span class="lobby-stat-label">Bekannte Weine</span>
                  <span class="lobby-stat-value">${state.player.discoveredWines.size}</span>
                </div>
                <div class="lobby-stat">
                  <span class="lobby-stat-label">Schichten</span>
                  <span class="lobby-stat-value">${shifts}</span>
                </div>
              </div>
              <div class="lobby-buttons">
                <button class="btn btn-primary btn-large" onclick="startShift()">🍽️ Schicht starten</button>
                <button class="btn btn-secondary" onclick="goToScene('explorer', {explorerWineIndex:0})">📚 Weine wiederholen</button>
                <button class="btn btn-ghost" onclick="goToScene('map')">🗺️ Länderinfo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
    </div>`;
}

// ===== QUESTION RENDERING =====
function renderQuestion() {
  const q = state.currentQuestion;
  const shift = state.currentShift;
  const lv = getLevel();

  let dialogContent = '';
  switch (q.type) {
    case 'besserwisser': dialogContent = renderBesserwisserQ(q); break;
    case 'weinwissen': dialogContent = renderWeinwissenQ(q); break;
    case 'blindtasting': dialogContent = renderBlindtastingQ(q); break;
    case 'beratung': dialogContent = renderBeratungQ(q); break;
    default: dialogContent = renderPairingQ(q); break;
  }

  const guest = state.currentGuest;
  const flipStyle = guest && guest.facing === 'right' ? ' style="transform:scaleX(-1)"' : '';
  const guestHtml = guest ? `<div class="guest-sprite-area"><img class="guest-sprite" src="${guest.sprite}" alt="${guest.name}"${flipStyle} onerror="this.style.display='none'"></div>` : '';

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/${lv.bgKey}/hintergrund.png')"></div>
          ${guestHtml}
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/${lv.bgKey}/theke.png')"></div>

          <div class="shift-hud">
            <div class="hud-item">Gast ${shift.questionIndex + 1}/${CONFIG.questionsPerShift}</div>
            <div class="hud-item hud-score">✅ ${shift.correct} ❌ ${shift.wrong}</div>
          </div>

          <div class="dialog-container">
            ${dialogContent}
          </div>
        </div>
      </div>
      ${renderBottomBar()}
      ${state.overlay === 'feedback' ? renderFeedbackOverlay() : ''}
    </div>`;
}

function renderHintArea(q) {
  if (q.answered !== undefined) return '';
  if (q.hintUsed) {
    return `<div class="chef-hint-box">
      <span class="chef-hint-icon">👨‍🍳</span>
      <span class="chef-hint-text">${q.chefHint}</span>
      <span class="chef-hint-cost">halbes Trinkgeld</span>
    </div>`;
  }
  return `<button class="btn btn-chef-hint" onclick="askChefForHelp()">👨‍🍳 Frag den Chef</button>`;
}

function renderPairingQ(q) {
  const answered = q.answered !== undefined;
  const guest = state.currentGuest;

  const optionsHtml = q.data.options.map((opt, i) => {
    const wine = WINES[opt.wineId];
    let cls = 'dialog-choice';
    if (answered) {
      if (opt.correct) cls += ' correct';
      else if (i === q.answered && !opt.correct) cls += ' wrong';
    }
    if (q.eliminatedOption === i) cls += ' eliminated';
    const dot = wine ? (wine.color === 'rot' ? '🔴' : wine.color === 'weiss' ? '⚪' : '🩷') : '';
    return `<button class="${cls}" ${answered || q.eliminatedOption === i ? 'disabled' : ''} onclick="answerQuestion(${i})">
      <span class="choice-wine">${dot} ${wine ? wine.name : '???'}</span>
      <span class="choice-detail">${wine ? wine.sweetness + ' · ' + wine.flavors.slice(0,2).join(', ') : ''}</span>
    </button>`;
  }).join('');

  return `
    <div class="dialog-box">
      <div class="dialog-header">
        <span class="dialog-guest">${q.data.mood || ''} ${guest ? guest.name : ''}</span>
        <span class="dialog-type-badge fp-badge">${q.type === 'preference' ? '💭 VORLIEBEN' : '🍽️ EMPFEHLUNG'}</span>
      </div>
      <div class="dialog-body">
        <p class="dialog-scenario">${q.data.scenario}</p>
        <p class="dialog-question">${q.data.question}</p>
      </div>
      ${renderHintArea(q)}
      <div class="dialog-choices">
        ${optionsHtml}
      </div>
    </div>`;
}

function renderBesserwisserQ(q) {
  const answered = q.answered !== undefined;
  const data = q.data;
  const guest = state.currentGuest;

  let responseHtml = '';
  if (answered) {
    const wasRight = (q.answered === data.isCorrect);
    responseHtml = `
      <div class="bw-result ${wasRight ? 'correct' : 'wrong'}">
        <div class="bw-verdict">${wasRight ? '✅ Richtig erkannt!' : '❌ Leider daneben!'}</div>
        <p class="bw-correction">${data.correction}</p>
        <button class="btn btn-primary" onclick="nextQuestion()">Weiter →</button>
      </div>`;
  } else {
    responseHtml = `
      <div class="dialog-choices">
        <button class="dialog-choice bw-choice" onclick="answerBesserwisser('true')">
          <span class="choice-wine">👍 "Stimmt, da haben Sie recht!"</span>
        </button>
        <button class="dialog-choice bw-choice" onclick="answerBesserwisser('false')">
          <span class="choice-wine">😏 "Da muss ich widersprechen..."</span>
        </button>
      </div>`;
  }

  return `
    <div class="dialog-box dialog-besserwisser">
      <div class="dialog-header">
        <span class="dialog-guest">${data.mood || '🧐'} ${guest ? guest.name : ''}</span>
        <span class="bw-badge">🧐 BESSERWISSER</span>
      </div>
      <div class="dialog-body">
        <p class="dialog-scenario bw-statement">${data.statement}</p>
      </div>
      ${renderHintArea(q)}
      ${responseHtml}
    </div>`;
}

function renderWeinwissenQ(q) {
  const answered = q.answered !== undefined;
  const data = q.data;
  const guest = state.currentGuest;

  const optionsHtml = data.options.map((opt, i) => {
    let cls = 'dialog-choice';
    if (answered) {
      if (opt.correct) cls += ' correct';
      else if (i === q.answered && !opt.correct) cls += ' wrong';
    }
    if (q.eliminatedOption === i) cls += ' eliminated';
    return `<button class="${cls}" ${answered || q.eliminatedOption === i ? 'disabled' : ''} onclick="answerWeinwissen(${i})">
      <span class="choice-wine">${opt.text}</span>
    </button>`;
  }).join('');

  return `
    <div class="dialog-box dialog-weinwissen">
      <div class="dialog-header">
        <span class="dialog-guest">${data.mood || '🤔'} ${guest ? guest.name : ''}</span>
        <span class="ww-badge">🎓 WEINWISSEN</span>
      </div>
      <div class="dialog-body">
        <p class="dialog-scenario">${data.question}</p>
      </div>
      ${renderHintArea(q)}
      <div class="dialog-choices">
        ${optionsHtml}
      </div>
    </div>`;
}

function renderBlindtastingQ(q) {
  const answered = q.answered !== undefined;
  const data = q.data;
  const guest = state.currentGuest;

  const cluesHtml = `
    <div class="bt-clues">
      <div class="bt-clue"><span class="bt-clue-label">👁️ Aussehen</span><span>${data.clues.appearance}</span></div>
      <div class="bt-clue"><span class="bt-clue-label">👃 Nase</span><span>${data.clues.nose}</span></div>
      <div class="bt-clue"><span class="bt-clue-label">👅 Gaumen</span><span>${data.clues.palate}</span></div>
    </div>`;

  const optionsHtml = data.options.map((opt, i) => {
    const wine = WINES[opt.wineId];
    let cls = 'dialog-choice';
    if (answered) {
      if (opt.correct) cls += ' correct';
      else if (i === q.answered && !opt.correct) cls += ' wrong';
    }
    if (q.eliminatedOption === i) cls += ' eliminated';
    return `<button class="${cls}" ${answered || q.eliminatedOption === i ? 'disabled' : ''} onclick="answerBlindtasting(${i})">
      <span class="choice-wine">${wine ? wine.name : '???'}</span>
      <span class="choice-detail">${wine ? wine.region ? (REGIONS[wine.region]?.flag || '') + ' ' + (REGIONS[wine.region]?.name || '') : '' : ''}</span>
    </button>`;
  }).join('');

  return `
    <div class="dialog-box dialog-blindtasting">
      <div class="dialog-header">
        <span class="dialog-guest">${data.mood || '🍷'} ${guest ? guest.name : 'Blindverkostung'}</span>
        <span class="bt-badge">🥃 BLIND TASTING</span>
      </div>
      <div class="dialog-body">
        <p class="dialog-scenario">Ein geheimnisvoller Wein im Glas – was könnten Sie hier vor sich haben?</p>
        ${cluesHtml}
      </div>
      ${renderHintArea(q)}
      <div class="dialog-choices">
        ${optionsHtml}
      </div>
    </div>`;
}

// ===== BERATUNG RENDERING =====
function renderBeratungQ(q) {
  const data = q.data;
  const guest = state.currentGuest;
  const answered = q.answered !== undefined;

  // Initialize beratung state if needed
  if (!state.beratungState) {
    state.beratungState = {
      stepIndex: 0,
      dialogHistory: [{ speaker: 'guest', text: data.intro }],
      bonusAccumulated: 0,
    };
  }

  const bs = state.beratungState;
  const stepIndex = bs.stepIndex;
  const step = data.steps[stepIndex];

  // Render chat history
  const historyHtml = bs.dialogHistory.map(entry => {
    const isGuest = entry.speaker === 'guest';
    return `<div class="ber-bubble ${isGuest ? 'ber-guest' : 'ber-player'}">
      <span class="ber-speaker">${isGuest ? (guest ? guest.name : 'Gast') : 'Du'}</span>
      <span class="ber-text">${entry.text}</span>
    </div>`;
  }).join('');

  // Render current step choices
  let choicesHtml = '';
  if (stepIndex < 2 && !answered) {
    // Text choices for clarifying steps
    choicesHtml = step.choices.map((c, i) => {
      return `<button class="dialog-choice ber-choice" onclick="answerBeratungStep(${i})">
        <span class="choice-wine">${c.text}</span>
      </button>`;
    }).join('');
  } else if (stepIndex === 2 && !answered) {
    // Wine choices for final step
    choicesHtml = step.options.map((opt, i) => {
      const wine = WINES[opt.wineId];
      let cls = 'dialog-choice';
      if (q.eliminatedOption === i) cls += ' eliminated';
      const dot = wine ? (wine.color === 'rot' ? '\u{1F534}' : wine.color === 'weiss' ? '\u26AA' : '\u{1FA77}') : '';
      return `<button class="${cls}" ${q.eliminatedOption === i ? 'disabled' : ''} onclick="answerBeratungStep(${i})">
        <span class="choice-wine">${dot} ${wine ? wine.name : '???'}</span>
        <span class="choice-detail">${wine ? wine.sweetness + ' \u00B7 ' + wine.flavors.slice(0, 2).join(', ') : ''}</span>
      </button>`;
    }).join('');
  }

  const stepLabel = stepIndex < 2
    ? `Schritt ${stepIndex + 1}/3: Frage stellen`
    : 'Schritt 3/3: Wein empfehlen';

  const hintHtml = stepIndex === 2 ? renderHintArea(q) : '';

  return `
    <div class="dialog-box dialog-beratung">
      <div class="dialog-header">
        <span class="dialog-guest">${data.mood || '\u{1F4AC}'} ${guest ? guest.name : ''}</span>
        <span class="ber-badge">\u{1F91D} BERATUNG</span>
      </div>
      <div class="ber-step-indicator">${stepLabel}</div>
      <div class="ber-history" id="ber-history">
        ${historyHtml}
      </div>
      ${step.prompt ? `<div class="ber-prompt">${step.prompt}</div>` : ''}
      ${hintHtml}
      <div class="dialog-choices">
        ${choicesHtml}
      </div>
    </div>`;
}

// ===== FEEDBACK OVERLAY =====
function renderFeedbackOverlay() {
  const d = state.overlayData;
  const revealHtml = d.revealWine ? `<p class="fb-reveal">Der richtige Wein war: <strong>${WINES[d.revealWine]?.name || ''}</strong></p>` : '';

  // Chef comment (30% chance on correct, always on wrong, always on beer threshold)
  let chefHtml = '';
  const showComment = !d.correct || state.consecutiveWrong >= 5 || Math.random() < 0.3;
  if (showComment) {
    const comment = getChefComment(d.correct);
    if (comment) {
      const isBeer = state.consecutiveWrong >= 5;
      chefHtml = `<div class="fb-chef-comment ${isBeer ? 'fb-beer' : d.correct ? 'fb-chef-praise' : 'fb-chef-stress'}">${comment}</div>`;
    }
  }

  return `
    <div class="overlay-backdrop feedback-backdrop" onclick="nextQuestion()">
      <div class="feedback-card ${d.correct ? 'fb-correct' : d.acceptable ? 'fb-acceptable' : 'fb-wrong'}" onclick="event.stopPropagation()">
        <div class="fb-icon">${d.correct ? (d.favorite ? '🌟' : '✅') : d.acceptable ? '🤷' : '❌'}</div>
        <h3>${d.correct ? (d.favorite ? 'Perfekt! Beste Wahl!' : 'Gute Wahl!') : d.acceptable ? 'Geht gerade noch...' : 'Nicht ganz...'}</h3>
        <p class="fb-explanation">${d.explanation}</p>
        ${revealHtml}
        ${d.funFact ? `<p class="fb-funfact">💡 ${d.funFact}</p>` : ''}
        ${chefHtml}
        <div class="fb-tips">+${d.tips}€ Trinkgeld${d.favorite ? ' (inkl. 3€ Bonus!)' : ''}${d.beratungBonus ? ` (inkl. ${d.beratungBonus}€ Beratungsbonus!)` : ''}${d.hintUsed ? ' (Chef-Tipp: halbes TG)' : ''}</div>
        ${d.beratungSummary ? `<div class="fb-beratung-summary">\u{1F4A1} ${d.beratungSummary}</div>` : ''}
        <button class="btn btn-primary" onclick="nextQuestion()">Weiter →</button>
      </div>
    </div>`;
}

// ===== DOWNGRADE OVERLAY =====
function renderDowngradeOverlay() {
  const d = state.overlayData;
  if (!d) return '';
  const targetLv = CONFIG.levels[d.targetLevel];
  const currentLv = getLevel();
  return `
    <div class="overlay-backdrop" onclick="cancelDowngrade()">
      <div class="feedback-card fb-downgrade" onclick="event.stopPropagation()">
        <div class="fb-icon">\u{1F6AA}</div>
        <h3>K\u00FCndigung einreichen?</h3>
        <p class="fb-explanation">
          Du willst deine Stelle im <strong>${currentLv.name}</strong> aufgeben und bei <strong>${targetLv.name}</strong> anfangen?
          <br><br>
          Dein Trinkgeld wird auf <strong>${targetLv.xpNeeded}\u20AC</strong> zur\u00FCckgesetzt und dein Ruf im ${targetLv.shortName} startet bei Null. Du musst dich dort wieder hocharbeiten!
        </p>
        <div class="summary-buttons" style="margin-top:16px">
          <button class="btn btn-primary" onclick="confirmDowngrade(${d.targetLevel})">\u{2705} Ja, k\u00FCndigen!</button>
          <button class="btn btn-secondary" onclick="cancelDowngrade()">\u274C Nein, bleiben</button>
        </div>
      </div>
    </div>`;
}

// ===== SHIFT END =====
function renderShiftEnd() {
  const shift = state.currentShift;
  const lv = getLevel();
  const accuracy = shift.total > 0 ? Math.round((shift.correct / shift.total) * 100) : 0;

  // Chef end-of-shift comment
  let endComment = '';
  const comments = CHEF_COMMENTS[lv.id];
  if (comments) {
    if (accuracy >= 80) endComment = pick(comments.praise);
    else if (accuracy <= 20) endComment = comments.beerComment;
    else if (accuracy < 50) endComment = pick(comments.stress);
  }

  return `
    <div class="scene scene-restaurant active">
      ${renderSidebar()}
      <div class="main-area">
        <div class="restaurant-bg">
          <div class="rest-layer rest-bg-layer" style="background-image:url('assets/${lv.bgKey}/hintergrund.png')"></div>
          <div class="rest-layer rest-fg-layer" style="background-image:url('assets/${lv.bgKey}/theke.png')"></div>
          <div class="rest-ui-overlay">
            <div class="shift-summary-card">
              <h2>🏁 Schicht geschafft!</h2>
              <div class="summary-stats">
                <div class="summary-stat"><div class="stat-num correct">${shift.correct}</div><div class="stat-label">Richtig</div></div>
                <div class="summary-stat"><div class="stat-num wrong">${shift.wrong}</div><div class="stat-label">Falsch</div></div>
                <div class="summary-stat"><div class="stat-num">${accuracy}%</div><div class="stat-label">Quote</div></div>
                <div class="summary-stat"><div class="stat-num tips">+${shift.tipsEarned}€</div><div class="stat-label">Trinkgeld</div></div>
              </div>
              ${endComment ? `<div class="shift-chef-comment">${endComment}</div>` : ''}
              <div class="summary-buttons">
                <button class="btn btn-primary" onclick="startShift()">🔄 Nächste Schicht</button>
                <button class="btn btn-secondary" onclick="endShift()">🏠 Zurück</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomBar()}
      ${state.overlay === 'levelup' ? renderLevelUpOverlay() : ''}
    </div>`;
}

function renderLevelUpOverlay() {
  const d = state.overlayData;
  const newRegions = d.newLevel.unlockRegions.map(rId => REGIONS[rId]).filter(Boolean);

  return `
    <div class="overlay-backdrop">
      <div class="levelup-card">
        <div class="lu-stars">⭐⭐⭐</div>
        <h2>AUFSTIEG!</h2>
        <div class="lu-new-title">${d.newLevel.icon} ${d.newLevel.name}</div>
        <p class="lu-desc">${d.newLevel.description}</p>
        ${newRegions.length ? `<div class="lu-regions">
          <h4>Neue Weinländer:</h4>
          ${newRegions.map(r => `<span class="lu-region">${r.flag} ${r.name}</span>`).join('')}
        </div>` : ''}
        ${d.newLevel.levelCode ? `<div style="margin:16px 0; padding:12px 18px; background:rgba(240,230,140,0.1); border:1px solid rgba(240,230,140,0.25); border-radius:8px;">
          <div style="font-size:13px; color:var(--c-muted); margin-bottom:4px;">Dein Levelcode:</div>
          <div style="font-family:var(--font-pixel); font-size:20px; color:var(--c-gold); letter-spacing:4px;">${d.newLevel.levelCode}</div>
          <div style="font-size:12px; color:var(--c-muted); margin-top:4px;">Merke ihn dir, um später direkt hier einzusteigen!</div>
        </div>` : ''}
        <button class="btn btn-primary btn-large" onclick="state.overlay=null;state.overlayData=null;checkChefIntro();if(!state.showChefIntro)goToScene('explorer',{explorerWineIndex:-1})">
          🍷 Neue Weine kennenlernen!
        </button>
      </div>
    </div>`;
}

// ===== SHARED UI COMPONENTS =====
function renderSidebar() {
  const levels = CONFIG.levels;
  const current = state.player.level;

  const items = levels.map((lv, i) => {
    const isCurrent = i === current;
    const isUnlocked = i <= current;
    const rep = state.player.reputation[i];
    const iconHtml = lv.logo
      ? `<img class="sidebar-logo" src="${lv.logo}" alt="${lv.shortName}" onerror="this.outerHTML='<div class=\\'sidebar-icon\\'>${lv.icon}</div>'">`
      : `<div class="sidebar-icon">${lv.icon}</div>`;
    return `
      <div class="sidebar-item ${isCurrent ? 'current' : ''} ${isUnlocked ? 'unlocked' : 'locked'}"
           ${isUnlocked ? (i < current ? `onclick="switchRestaurant(${i})"` : `onclick="goToScene('restaurant')"`) : ''}>
        ${iconHtml}
        <div class="sidebar-label">${lv.shortName}</div>
        ${isCurrent ? '<div class="sidebar-arrow">◄</div>' : ''}
        ${isUnlocked ? `<div class="sidebar-stars">${renderStarsSmall(rep)}</div>` : '<div class="sidebar-lock">🔒</div>'}
      </div>`;
  }).join('');

  return `
    <div class="sidebar">
      <div class="sidebar-title">🍷</div>
      ${items}
      <div class="sidebar-spacer"></div>
      <div class="sidebar-item" onclick="goToScene('explorer',{explorerWineIndex:-1})">
        <div class="sidebar-icon">📖</div>
        <div class="sidebar-label">Buch</div>
      </div>
      <div class="sidebar-item map-btn" onclick="goToScene('map')">
        <div class="sidebar-icon">🗺️</div>
        <div class="sidebar-label">Karte</div>
      </div>
    </div>`;
}

function renderBottomBar() {
  const lv = getLevel();
  const next = getNextLevel();
  const tipProg = getTipProgress();

  return `
    <div class="bottom-bar">
      <div class="bb-level">${lv.icon} ${lv.shortName}</div>
      <div class="bb-xp">
        <div class="xp-bar">
          <div class="xp-fill" style="width:${tipProg}%"></div>
        </div>
        <span class="xp-text">${state.player.tips}€ / ${lv.xpToNext}€</span>
      </div>
      <div class="bb-stats">
        <span>🍷 ${state.player.discoveredWines.size} Weine</span>
        <span>⭐ ${renderStarsSmall(state.player.reputation[state.player.level])}</span>
      </div>
    </div>`;
}

function renderStars(rep) {
  const full = Math.floor(rep / 20);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function renderStarsSmall(rep) {
  const full = Math.floor(rep / 20);
  return '<span class="stars">' +
    Array.from({length: 5}, (_, i) => `<span class="star ${i < full ? 'full' : 'empty'}">${i < full ? '★' : '☆'}</span>`).join('') +
    '</span>';
}

// ===== MINI-GAME SCENE =====
function renderMiniGame() {
  return `
    <div class="scene scene-minigame active">
      <div class="minigame-wrapper">
        <canvas id="minigame-canvas"></canvas>
      </div>
      ${state.overlay === 'minigameEnd' ? renderMiniGameEnd() : ''}
    </div>`;
}

function renderMiniGameEnd() {
  const score = state.overlayData?.score || 0;
  let ratingText = '';
  if (score >= 100) ratingText = '🏆 Wein-Cowboy-Legende!';
  else if (score >= 60) ratingText = '🤠 Solider Flaschenschütze!';
  else if (score >= 30) ratingText = '🍷 Ausbaufähig...';
  else ratingText = '🐄 Die Kühe haben gewonnen!';

  return `
    <div class="overlay-backdrop">
      <div class="minigame-end-card">
        <h2 style="font-family:var(--font-pixel);color:var(--c-accent);margin-bottom:8px">GAME OVER</h2>
        <div style="font-size:48px;margin:12px 0">🍷🤠</div>
        <div style="font-family:var(--font-pixel);font-size:24px;color:var(--c-gold);margin-bottom:8px">${score} Punkte</div>
        <p style="color:var(--c-muted);margin-bottom:20px">${ratingText}</p>
        <button class="btn btn-primary" onclick="closeMiniGame()">Zurück zum Restaurant</button>
      </div>
    </div>`;
}

// ===== EVENT DELEGATION =====
function attachEvents() {
  // Events handled via onclick attributes
}
