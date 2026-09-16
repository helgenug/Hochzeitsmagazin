(function () {
  'use strict';
  const KEY = 'hm-privacy-v1', VERSION = 1, TTL = 180 * 24 * 60 * 60 * 1000;
  function valid(value, now) {
    return !!value && value.version === VERSION && value.necessary === true &&
      value.analytics === false && Number.isFinite(value.savedAt) &&
      Number.isFinite(value.expiresAt) && value.savedAt <= now &&
      value.expiresAt === value.savedAt + TTL && value.expiresAt > now;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {valid, KEY, VERSION, TTL};
  if (typeof document === 'undefined') return;
  const banner = document.getElementById('privacy-banner'), dialog = document.getElementById('privacy-dialog');
  if (!banner || !dialog) return;
  let opener;
  try {
    banner.hidden = valid(JSON.parse(localStorage.getItem(KEY)), Date.now());
    if (!banner.hidden) localStorage.removeItem(KEY);
  } catch (_) { banner.hidden = false; }
  document.querySelectorAll('[data-privacy-open]').forEach(button => {
    button.addEventListener('click', () => { opener = button; dialog.showModal(); });
  });
  document.getElementById('privacy-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (opener && opener.isConnected) opener.focus(); });
  document.querySelectorAll('[data-privacy-save]').forEach(button => {
    button.addEventListener('click', () => {
      const now = Date.now();
      try { localStorage.setItem(KEY, JSON.stringify({version: VERSION, necessary: true, analytics: false, savedAt: now, expiresAt: now + TTL})); } catch (_) {}
      const focusHidden = banner.contains(document.activeElement);
      banner.hidden = true;
      if (dialog.open) dialog.close();
      if (focusHidden || (opener && banner.contains(opener))) document.querySelector('.footer-bottom [data-privacy-open]').focus();
    });
  });
})();
