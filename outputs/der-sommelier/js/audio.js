// ============================================================
// DER SOMMELIER — Sound (Web Audio)
// Musik pro Restaurant + Effekte. Steht für eine Szene eine Wiedergabeliste
// in assets/audio/playlist.js, läuft sie wie ein Radiosender (gemischt,
// gestreamt, macht beim Zurückkehren dort weiter). Sonst spielt ein im Code
// erzeugter Chiptune-Platzhalter. Siehe assets/audio/README.md.
// ============================================================

const Sound = (() => {
  const SETTINGS_KEY = 'sommelier_audio';
  const MUSIC_VOL = 0.35, SFX_VOL = 0.6;

  // ----- Platzhalter-Musik: Noten als MIDI-Nummern, null = Pause -----
  // steps = Sechzehntel pro Takt-Schleife, bpm = Tempo
  const PATTERNS = {
    // Bouzouki-Feeling: D-Hijaz (D Eb F# G A Bb C)
    imbiss: { bpm: 132, lead: 'square', bass: 'triangle',
      melody: [74,null,75,74, 78,null,79,78, 81,79,78,75, 74,null,null,null, 74,75,78,79, 81,null,82,81, 79,78,75,78, 74,null,null,null],
      bassline: [50,null,57,null, 50,null,57,null, 55,null,62,null, 50,null,57,null, 50,null,57,null, 58,null,57,null, 55,null,51,null, 50,null,57,null] },
    // Country/Saloon: G-Dur, Boom-Chick
    steakhaus: { bpm: 116, lead: 'square', bass: 'triangle',
      melody: [67,null,71,null, 74,null,71,72, 74,null,null,71, 67,null,null,null, 69,null,72,null, 76,null,74,72, 71,null,69,null, 67,null,null,null],
      bassline: [43,null,50,null, 43,null,50,null, 48,null,55,null, 43,null,50,null, 50,null,57,null, 48,null,55,null, 50,null,45,null, 43,null,50,null] },
    // Volksmusik-Walzer (3/4): F-Dur, Umpa-pa
    gutbuergerlich: { bpm: 150, lead: 'sawtooth', bass: 'triangle', stepsPerBeat: 2,
      melody: [72,null,72,74, 77,null, 76,null,74,null, 72,null, 70,null,70,72, 74,null, 72,null,null,null, 69,null, 72,null,72,74, 77,null, 79,null,77,76, 74,null, 72,null,69,70, 72,null, 65,null,null,null, null,null],
      bassline: [41,null,57,null,57,null, 41,null,57,null,57,null, 46,null,58,null,58,null, 48,null,60,null,60,null, 41,null,57,null,57,null, 46,null,58,null,58,null, 48,null,60,null,60,null, 41,null,57,null,57,null] },
    // Musette/Jazz: a-Moll, swingend
    gehoben: { bpm: 100, lead: 'triangle', bass: 'sine',
      melody: [76,null,null,77, 76,null,74,null, 72,null,null,71, 72,null,76,null, 81,null,null,79, 77,null,76,null, 74,null,null,72, 71,null,null,null],
      bassline: [45,null,52,null, 45,null,52,null, 50,null,57,null, 50,null,57,null, 52,null,59,null, 52,null,59,null, 45,null,52,null, 44,null,52,null] },
    // Klassik/Streicher: ruhige Arpeggien in C (Cmaj7 – Am7 – Fmaj7 – G)
    sterne: { bpm: 84, lead: 'sine', bass: 'sine',
      melody: [60,64,67,71, 72,71,67,64, 57,60,64,67, 69,67,64,60, 53,57,60,64, 65,64,60,57, 55,59,62,65, 67,65,62,59],
      bassline: [36,null,null,null, null,null,null,null, 45,null,null,null, null,null,null,null, 41,null,null,null, null,null,null,null, 43,null,null,null, null,null,null,null] },
    // Titel: gemächlich, warm
    title: { bpm: 76, lead: 'triangle', bass: 'sine',
      melody: [69,null,72,null, 76,null,null,null, 74,null,72,null, 71,null,null,null, 69,null,72,null, 76,null,79,null, 77,null,76,null, 74,null,null,null],
      bassline: [45,null,null,null, 52,null,null,null, 41,null,null,null, 48,null,null,null, 45,null,null,null, 52,null,null,null, 50,null,null,null, 43,null,null,null] },
    // Minispiel: schneller Western-Galopp
    minigame: { bpm: 168, lead: 'square', bass: 'square',
      melody: [69,null,69,72, 76,null,76,null, 74,72,71,72, 69,null,null,null, 67,null,67,71, 74,null,74,null, 72,71,69,71, 69,null,null,null],
      bassline: [45,45,52,45, 45,45,52,45, 43,43,50,43, 45,45,52,45, 43,43,50,43, 43,43,50,43, 40,40,47,40, 45,45,52,45] },
  };

  let ctx = null, musicGain = null, sfxGain = null;
  let settings = { music: true, sfx: true };
  let currentTrack = null;      // Name des gewünschten Tracks
  let seq = null;               // laufender Platzhalter-Sequencer
  const nowPlayingListeners = [];

  try { Object.assign(settings, JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}); } catch (e) {}
  function saveSettings() { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {} }

  function ensureContext() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    // iOS: "ambient" = mischt sich mit eigener Musik des Nutzers und beachtet den Stummschalter
    try { if (navigator.audioSession) navigator.audioSession.type = 'ambient'; } catch (e) {}
    ctx = new AC();
    musicGain = ctx.createGain(); musicGain.gain.value = settings.music ? MUSIC_VOL : 0;
    sfxGain = ctx.createGain(); sfxGain.gain.value = settings.sfx ? SFX_VOL : 0;
    musicGain.connect(ctx.destination); sfxGain.connect(ctx.destination);
    return ctx;
  }

  // iOS spielt erst nach einer Nutzergeste Ton ab
  function unlock() {
    if (!ensureContext()) return;
    loadSfxFiles();
    const startIfIdle = () => { if (currentTrack && !radioStation && !seq) startTrack(currentTrack); };
    if (ctx.state === 'suspended') ctx.resume().then(startIfIdle); else startIfIdle();
  }
  document.addEventListener('pointerdown', unlock, true);
  document.addEventListener('keydown', unlock, true);

  // App im Hintergrund → Ton pausieren
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) { ctx.suspend(); if (radioEl) radioEl.pause(); }
    else { ctx.resume(); if (radioEl && radioStation) radioEl.play().catch(() => {}); }
  });

  // ----- Radio: Wiedergabelisten aus assets/audio/playlist.js -----
  const playlists = (typeof PLAYLISTS !== 'undefined') ? PLAYLISTS : {};
  const stations = {};          // Szene -> { order, pos, time }: Sender läuft beim Zurückkehren weiter
  const failed = new Set();     // Dateien, die nicht geladen werden konnten
  let radioEl = null, radioRouted = false, radioStation = null, nowPlaying = null, playToken = 0;

  function getRadioEl() {
    if (radioEl) return radioEl;
    radioEl = new Audio();
    radioEl.preload = 'auto';
    radioEl.setAttribute('playsinline', '');
    // Über Web Audio leiten, damit Lautstärke und Einblenden auch auf iOS funktionieren.
    // Bei file:// verbietet der Browser das – dann direkte Lautstärke.
    if (location.protocol !== 'file:') {
      try { ctx.createMediaElementSource(radioEl).connect(musicGain); radioRouted = true; } catch (e) {}
    }
    if (!radioRouted) radioEl.volume = MUSIC_VOL;
    radioEl.addEventListener('ended', () => { if (radioStation) nextSong(radioStation); });
    radioEl.addEventListener('error', () => {
      if (!radioStation || !radioEl.dataset.file) return;
      failed.add(radioEl.dataset.file);
      nextSong(radioStation);
    });
    return radioEl;
  }

  function shuffled(n) {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function hasPlaylist(name) { return (playlists[name] || []).some(s => !failed.has(s.file)); }
  function station(name) {
    if (!stations[name]) stations[name] = { order: shuffled(playlists[name].length), pos: 0, time: 0 };
    return stations[name];
  }

  function playSong(name) {
    const list = playlists[name], st = station(name);
    // nächstes ladbares Lied suchen
    for (let tries = 0; tries < list.length && failed.has(list[st.order[st.pos]].file); tries++) {
      st.pos = (st.pos + 1) % list.length; st.time = 0;
    }
    const song = list[st.order[st.pos]];
    if (failed.has(song.file)) {        // keine Datei ladbar → Platzhalter
      radioStation = null; setNowPlaying(null);
      if (PATTERNS[name]) startSequencer(PATTERNS[name]);
      return;
    }
    const el = getRadioEl();
    radioStation = name;
    el.dataset.file = song.file;
    el.src = 'assets/audio/music/' + song.file;
    const resumeAt = st.time;
    if (resumeAt > 0) el.addEventListener('loadedmetadata', () => { el.currentTime = resumeAt; }, { once: true });
    // Anzeige erst, wenn das Lied wirklich spielt (fehlende Dateien blitzen sonst kurz auf)
    const token = ++playToken;
    el.addEventListener('playing', () => { if (token === playToken && radioStation === name) setNowPlaying(song); }, { once: true });
    el.play().catch(() => {});
  }

  function nextSong(name) {
    const st = station(name);
    st.time = 0;
    st.pos++;
    if (st.pos >= playlists[name].length) { st.order = shuffled(playlists[name].length); st.pos = 0; }
    playSong(name);
  }

  function setNowPlaying(song) {
    nowPlaying = song;
    nowPlayingListeners.forEach(fn => fn(song));
  }

  function stopMusic() {
    if (radioEl && radioStation) {
      station(radioStation).time = radioEl.currentTime || 0;
      radioEl.pause();
      radioStation = null;
      setNowPlaying(null);
    }
    if (seq) { clearInterval(seq.timer); seq = null; }
  }

  function startTrack(name) {
    stopMusic();
    if (!ctx || ctx.state !== 'running' || !settings.music) return;   // wird bei unlock()/Einschalten nachgeholt
    // sanft einblenden
    musicGain.gain.cancelScheduledValues(ctx.currentTime);
    musicGain.gain.setValueAtTime(0, ctx.currentTime);
    musicGain.gain.linearRampToValueAtTime(MUSIC_VOL, ctx.currentTime + 1.2);
    if (hasPlaylist(name)) playSong(name);
    else if (PATTERNS[name]) startSequencer(PATTERNS[name]);
  }

  function startSequencer(p) {
    const stepDur = 60 / p.bpm / (p.stepsPerBeat || 4);
    const len = p.melody.length;
    seq = { step: 0, next: ctx.currentTime + 0.05 };
    const s = seq;
    s.timer = setInterval(() => {
      // Lookahead-Scheduler: Noten 150 ms im Voraus exakt einplanen
      while (s.next < ctx.currentTime + 0.15) {
        const i = s.step % len;
        if (p.melody[i] != null) tone(p.melody[i], s.next, stepDur * 0.9, p.lead, 0.22, musicGain);
        if (p.bassline[i % p.bassline.length] != null) tone(p.bassline[i % p.bassline.length], s.next, stepDur * 0.8, p.bass, 0.3, musicGain);
        s.next += stepDur;
        s.step++;
      }
    }, 25);
  }

  function midiToHz(n) { return 440 * Math.pow(2, (n - 69) / 12); }

  function tone(note, t, dur, type, vol, dest, slideTo) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(midiToHz(note), t);
    if (slideTo != null) o.frequency.exponentialRampToValueAtTime(midiToHz(slideTo), t + dur);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(dest);
    o.start(t); o.stop(t + dur + 0.02);
  }

  function noise(t, dur, vol, filterHz) {
    const len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.value = filterHz; g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(sfxGain);
    src.start(t);
  }

  // ----- Effekte: Dateien aus assets/audio/sfx/, sonst synthetisch -----
  const SFX_FILES = ['cork', 'pling', 'clank', 'beer', 'cork2'];
  const sfxBuffers = {};
  let sfxLoading = false;
  function loadSfxFiles() {
    if (sfxLoading || !ctx) return;
    sfxLoading = true;
    SFX_FILES.forEach(async name => {
      try {
        const res = await fetch(`assets/audio/sfx/${name}.m4a`);
        if (res.ok) sfxBuffers[name] = await ctx.decodeAudioData(await res.arrayBuffer());
      } catch (e) { /* synthetischer Ersatz */ }
    });
  }

  const SFX = {
    cork:     t => { noise(t, 0.06, 0.9, 1800); tone(70, t, 0.12, 'sine', 0.5, sfxGain, 50); },        // Korkenplopp
    pling:    t => { tone(88, t, 0.5, 'sine', 0.35, sfxGain); tone(95, t + 0.08, 0.6, 'sine', 0.25, sfxGain); }, // Glas-Pling
    meh:      t => { tone(60, t, 0.18, 'triangle', 0.35, sfxGain); tone(58, t + 0.16, 0.25, 'triangle', 0.3, sfxGain); },
    wrong:    t => { tone(45, t, 0.35, 'sawtooth', 0.18, sfxGain, 40); },
    fanfare:  t => { [72, 76, 79, 84].forEach((n, i) => tone(n, t + i * 0.12, i === 3 ? 0.7 : 0.15, 'square', 0.18, sfxGain)); },
    throw:    t => { tone(76, t, 0.08, 'square', 0.12, sfxGain, 88); },
    hit:      t => { noise(t, 0.12, 0.6, 600); tone(52, t, 0.15, 'square', 0.15, sfxGain, 40); },
    jump:     t => { tone(64, t, 0.12, 'square', 0.12, sfxGain, 76); },
    clank:    t => { tone(84, t, 0.15, 'triangle', 0.25, sfxGain); tone(91, t + 0.03, 0.2, 'triangle', 0.15, sfxGain); },
    cork2:    t => SFX.cork(t),
    beer:     () => {},
  };

  function play(name, delay = 0) {
    if (!settings.sfx || !ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime + 0.01 + delay;
    if (sfxBuffers[name]) {
      const src = ctx.createBufferSource();
      src.buffer = sfxBuffers[name];
      src.connect(sfxGain);
      src.start(t);
    } else if (SFX[name]) {
      SFX[name](t);
    }
  }

  return {
    // Musik passend zur Szene wählen (wird nach jedem render() aufgerufen)
    setTrack(name) {
      if (name === currentTrack) return;
      currentTrack = name;
      if (ctx) startTrack(name);
    },
    play,
    answer(correct, favorite, acceptable) {
      play(correct ? (favorite ? 'pling' : 'cork') : acceptable ? 'clank' : 'wrong');
    },
    get musicOn() { return settings.music; },
    // "♪ Titel – Künstler" fürs Radio (null beim Platzhalter)
    get nowPlaying() { return nowPlaying; },
    onNowPlaying(fn) { nowPlayingListeners.push(fn); },
    get sfxOn() { return settings.sfx; },
    toggleMusic() {
      settings.music = !settings.music; saveSettings();
      if (settings.music) startTrack(currentTrack); else stopMusic();
    },
    toggleSfx() {
      settings.sfx = !settings.sfx; saveSettings();
      if (sfxGain) sfxGain.gain.value = settings.sfx ? SFX_VOL : 0;
    },
  };
})();
