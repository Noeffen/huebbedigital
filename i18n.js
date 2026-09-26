// Shared DE/EN language-toggle engine, reused across all HuebbeDigital pages.
// A page defines a `de` and `en` dictionary keyed by data-i18n ids, then calls
// HDI18N.init(de, en, opts). Language choice persists via localStorage('hd_lang')
// across every page on the site so switching once stays consistent everywhere.
window.HDI18N = (function () {
  function doSwap(dict, opts) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (opts.isInitial && opts.skipIds && opts.skipIds.indexOf(el.id) !== -1) return;
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.documentElement.setAttribute('lang', opts.lang);
    window.HD_LANG = opts.lang;
    if (typeof opts.onApply === 'function') opts.onApply(opts.lang);
  }

  function apply(dictDe, dictEn, lang, animate, opts) {
    opts = opts || {};
    var dict = lang === 'en' ? dictEn : dictDe;
    opts.lang = lang;
    var docEl = document.documentElement;
    if (!animate) { doSwap(dict, opts); return; }
    docEl.classList.add('i18n-swapping');
    setTimeout(function () {
      doSwap(dict, opts);
      requestAnimationFrame(function () { docEl.classList.remove('i18n-swapping'); });
    }, 380);
  }

  function init(dictDe, dictEn, opts) {
    opts = opts || {};
    var stored = localStorage.getItem('hd_lang');
    var initialLang = stored === 'en' ? 'en' : 'de';
    apply(dictDe, dictEn, initialLang, false, { isInitial: true, skipIds: opts.skipIds, onApply: opts.onApply });

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = window.HD_LANG === 'en' ? 'de' : 'en';
        localStorage.setItem('hd_lang', next);
        apply(dictDe, dictEn, next, true, { isInitial: false, skipIds: opts.skipIds, onApply: opts.onApply });
      });
    }
  }

  return { init: init };
})();
