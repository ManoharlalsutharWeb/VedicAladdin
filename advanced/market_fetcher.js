/* ============================================================
   VedicAladdin V6 — advanced/market_fetcher.js
   Optional: Free market data (no API key needed)
   Yahoo Finance public endpoint only
   schemaVersion: "6.0"
   ============================================================ */
'use strict';

const MARKET_FETCHER = (function () {
  'use strict';

  const YAHOO_URL = 'https://query1.finance.yahoo.com/v8/finance/chart/QQQ';

  async function fetchLivePrice() {
    try {
      const url  = YAHOO_URL + '?interval=1d&range=5d';
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const meta = data?.chart?.result?.[0]?.meta;
      if (!meta) throw new Error('No meta in response');
      return {
        available   : true,
        symbol      : 'QQQ',
        price       : parseFloat((meta.regularMarketPrice || 0).toFixed(2)),
        change      : parseFloat(((meta.regularMarketPrice - meta.previousClose) || 0).toFixed(2)),
        changePct   : parseFloat((((meta.regularMarketPrice - meta.previousClose) / meta.previousClose * 100) || 0).toFixed(2)),
        volume      : meta.regularMarketVolume || 0,
        latestDay   : meta.regularMarketTime ? new Date(meta.regularMarketTime*1000).toISOString().split('T')[0] : '',
        schemaVersion: "6.0",
      };
    } catch (e) {
      console.warn('[MARKET_FETCHER] fetchLivePrice failed:', e.message);
      return { available: false, reason: e.message };
    }
  }

  async function fetchHistorical(dateStr) {
    try {
      const dt    = new Date(dateStr + 'T12:00:00Z');
      const from  = Math.floor(dt.getTime() / 1000) - 86400;
      const to    = Math.floor(dt.getTime() / 1000) + 86400;
      const url   = YAHOO_URL + '?interval=1d&period1=' + from + '&period2=' + to;
      const resp  = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data  = await resp.json();
      const result = data?.chart?.result?.[0];
      if (!result) throw new Error('No result');
      const timestamps = result.timestamp || [];
      const closes     = result.indicators?.quote?.[0]?.close || [];
      const opens      = result.indicators?.quote?.[0]?.open  || [];
      const idx = timestamps.findIndex(t => {
        const d = new Date(t * 1000).toISOString().split('T')[0];
        return d === dateStr;
      });
      if (idx < 0) return { available: false, reason: 'Date not found' };
      const prevClose = idx > 0 ? closes[idx-1] : opens[idx];
      const close     = closes[idx];
      return {
        available   : true,
        date        : dateStr,
        open        : parseFloat((opens[idx]  || 0).toFixed(2)),
        close       : parseFloat((close       || 0).toFixed(2)),
        movePct     : prevClose ? parseFloat(((close - prevClose)/prevClose*100).toFixed(2)) : 0,
        schemaVersion: "6.0",
      };
    } catch (e) {
      return { available: false, reason: e.message };
    }
  }

  return { fetchLivePrice, fetchHistorical };
})();

if (typeof module !== 'undefined') module.exports = MARKET_FETCHER;
if (typeof window !== 'undefined') window.MARKET_FETCHER = MARKET_FETCHER;
