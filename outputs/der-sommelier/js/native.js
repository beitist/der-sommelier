// ============================================================
// DER SOMMELIER — iPad-App (Capacitor): Spielstand nativ sichern
// iOS darf den WebView-Speicher (localStorage) bei Platzmangel leeren,
// die App-Einstellungen (UserDefaults via @capacitor/preferences) nicht.
// Im Browser tut diese Datei nichts.
// ============================================================

const NativeStore = (() => {
  const KEYS = ['sommelier_v3', 'sommelier_v2', 'sommelier_highscores', 'sommelier_audio'];
  const cap = window.Capacitor;
  const Prefs = cap && cap.isNativePlatform && cap.isNativePlatform() && cap.Plugins && cap.Plugins.Preferences;
  const origSet = Storage.prototype.setItem;
  const origRemove = Storage.prototype.removeItem;

  if (Prefs) {
    // Jeder Schreibzugriff auf unsere Schlüssel geht zusätzlich in die App-Einstellungen
    Storage.prototype.setItem = function (key, value) {
      origSet.call(this, key, value);
      if (this === window.localStorage && KEYS.includes(key)) Prefs.set({ key, value: String(value) }).catch(() => {});
    };
    Storage.prototype.removeItem = function (key) {
      origRemove.call(this, key);
      if (this === window.localStorage && KEYS.includes(key)) Prefs.remove({ key }).catch(() => {});
    };
  }

  // Beim Start: fehlt etwas im WebView-Speicher, aus den App-Einstellungen zurückholen
  async function restore() {
    if (!Prefs) return;
    for (const key of KEYS) {
      try {
        if (localStorage.getItem(key) !== null) continue;
        const { value } = await Prefs.get({ key });
        if (value !== null && value !== undefined) origSet.call(localStorage, key, value);
      } catch (e) { /* weiter mit dem nächsten Schlüssel */ }
    }
  }

  return { restore, isNative: !!Prefs };
})();
