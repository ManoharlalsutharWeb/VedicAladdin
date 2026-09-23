/* ============================================================
   VedicAladdin V6 — assets/js/loader.js
   MASTER SCRIPT LOADER
   Include this ONE file in any page to get ALL modules loaded
   in the correct dependency order.
   ============================================================ */
(function() {
  'use strict';
  
  // All modules in correct dependency order
  var SCRIPTS = [
    '/core/config.js',
    '/core/types.js',
    '/core/natal.js',
    '/core/time.js',
    '/core/varga.js',
    '/core/dasha.js',
    '/core/transits.js',
    '/core/events.js',
    '/core/sessions.js',
    '/core/regime.js',
    '/core/scoring.js',
    '/core/research.js',
    '/core/aggregator.js',
    '/core/instant_engine.js',
    '/core/date_navigator.js',
    '/advanced/ashtakavarga.js',
    '/advanced/shadbala.js',
    '/advanced/yoga_engine.js',
    '/advanced/muhurta_engine.js',
    '/advanced/nakshatra_engine.js',
    '/advanced/jaimini_engine.js',
    '/advanced/eclipse_engine.js',
    '/advanced/yogini_dasha.js',
    '/advanced/ml_engine.js',
    '/advanced/pattern_matcher.js',
    '/advanced/smart_alert.js',
    '/advanced/backtester.js',
    '/advanced/accuracy_tracker.js',
    '/advanced/market_fetcher.js',
    '/ny_engine/block_a_vedic.js',
    '/ny_engine/block_b_probability.js',
    '/ny_engine/block_c_timing.js',
    '/ny_engine/block_d_moments.js',
    '/ny_engine/block_e_crash.js',
    '/ny_engine/block_f_ml.js',
    '/ny_engine/ny_orchestrator.js',
    '/assets/js/voice.js',
    '/assets/js/ui.js',
    '/assets/js/router.js',
    '/assets/js/charts.js',
  ];

  // Load scripts sequentially (order matters!)
  function loadNext(idx, onDone) {
    if (idx >= SCRIPTS.length) { if (onDone) onDone(); return; }
    var s   = document.createElement('script');
    s.src   = SCRIPTS[idx];
    s.async = false;
    s.onerror = function() {
      console.warn('[LOADER] Failed to load: ' + SCRIPTS[idx]);
      loadNext(idx + 1, onDone); // continue even if one fails
    };
    s.onload = function() { loadNext(idx + 1, onDone); };
    document.head.appendChild(s);
  }

  // Start loading
  window.VEDICALADDIN_LOADED = false;
  loadNext(0, function() {
    window.VEDICALADDIN_LOADED = true;
    document.dispatchEvent(new Event('vedicaladdin:ready'));
    console.log('[LOADER] VedicAladdin V6 — सभी मॉड्यूल लोड ✅');
  });
})();
