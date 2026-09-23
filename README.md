# 🔱 VedicAladdin V6 — NASDAQ Vedic Intelligence

## दुनिया का पहला Vedic Astrology NASDAQ Futures Intelligence System

---

## 📦 इंस्टॉलेशन

```bash
# 1. Project folder में जाएं
cd vedicaladdin-v6

# 2. Dependencies install करें
npm install

# 3. Environment file बनाएं
cp .env.example .env

# 4. Server शुरू करें
npm start
# या development mode:
npm run dev
```

Browser में खोलें: `http://localhost:3000`

---

## 🚀 Features

### ✅ Instant Engine (< 500ms)
- कोई भी तारीख 1971–2035 → 0.5 सेकंड में पूरा विश्लेषण
- Browser में offline भी काम करता है
- Arrow keys से तारीख navigate करें

### ✅ NY Deep Dive (6 ब्लॉक)
| ब्लॉक | विवरण |
|-------|-------|
| A | 7-लेयर वैदिक कोर (नाटल + दशा + ट्रांज़िट + AV + योग + ग्रहण + जैमिनी) |
| B | 5-tier संभावना मानचित्र (0–100%) |
| C | इंट्राडे टाइमिंग (19:00–01:30 IST, A+ से F) |
| D | मुख्य क्षण (exact IST times) |
| E | क्रैश इंटेलिजेंस (21 नियम, 0–100 मीटर) |
| F | ML पैटर्न मिलान (10 ऐतिहासिक anchor dates) |

### ✅ Three Modes
- **📚 इतिहास**: 1971 से आज तक
- **🔴 लाइव**: आज का real-time
- **🔭 भविष्यवाणी**: आज से 10 साल आगे

### ✅ Smart Sessions
- Asian/London: Vedic event day पर full analysis, नहीं तो 3-line score
- NY: हमेशा 6-block deep dive

### ✅ Advanced Vedic Engine
- Vimshottari Dasha (5 स्तर)
- Yogini Dasha (8 योगिनी)
- 32 Vedic Yogas
- 27 Nakshatras (market profiles)
- Ashtakavarga (BAV + SAV)
- Shadbala (6 strengths)
- Jaimini Chara Dasha
- Eclipse Engine (±15 दिन shadow)
- Graha Yuddha detection
- Gandanta stress points
- D1–D60 सभी वर्ग

---

## 📁 File Structure

```
vedicaladdin-v6/
├── core/           ← Vedic Engine (14 modules)
├── advanced/       ← Advanced modules (11 modules)
├── ny_engine/      ← NY 6-block engine (7 modules)
├── api/            ← Express REST API
├── app/            ← Frontend HTML pages
│   ├── index.html       ← Master Dashboard
│   └── ny_deep_dive.html← NY Deep Dive
├── assets/         ← CSS + JS utilities
├── pwa/            ← PWA manifest + service worker
└── scripts/        ← Cron scheduler
```

---

## 🌐 API Endpoints

```
GET  /api/v1/analyze/:date          ← Instant analysis
GET  /api/v1/ny-deep-dive/:date     ← Full NY 6 blocks
GET  /api/v1/signals/live           ← Today live
GET  /api/v1/session/:name/:date    ← Session analysis
GET  /api/v1/yogas/active           ← Active yogas today
GET  /api/v1/muhurta/:date          ← Timing quality
GET  /api/v1/backtest/:from/:to     ← Backtest results
POST /api/v1/outcome                ← Submit actual result
GET  /api/v1/eclipse/:year          ← Eclipse list
GET  /api/v1/ashtakavarga/:date     ← AV analysis
```

Header: `X-API-Key: your_key_here`

---

## ✅ Validation Test Results

| तारीख | अपेक्षित | परिणाम |
|--------|----------|--------|
| 2000-03-10 (डॉट-कॉम पीक) | BEAR | ✅ BEAR |
| 2008-09-15 (लेहमैन क्रैश) | STRONG_BEAR | ✅ STRONG_BEAR |
| 2020-03-23 (COVID तल) | BULL | ✅ BULL |

Verifier चलाएं: `npm test`

---

## 📊 NASDAQ Birth Constants

```
तारीख    : 08 फरवरी 1971
समय      : 10:00 AM EST (15:00 UTC)
स्थान    : New York City, USA
Latitude : 40.714 N
Longitude: 74.006 W
Ayanamsha: LAHIRI
Houses   : WHOLE SIGN
Dasha    : VIMSHOTTARI
```

---

## ⚠️ Disclaimer

> यह प्रणाली शुद्ध ज्योतिषीय सांख्यिकी और वैदिक संभावना पर आधारित है।  
> यह कोई निश्चित भविष्यवाणी या निवेश सलाह नहीं है।  
> बाज़ार जोखिमों के अधीन है। अपने विवेक से निर्णय लें।

---

## 🔱 OM NAMAH SHIVAYA — JAI MAA CHAMUNDA 🔱

**VedicAladdin V6 — Schema Version: 6.0**
