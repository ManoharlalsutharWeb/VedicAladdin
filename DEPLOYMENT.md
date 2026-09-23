# VedicAladdin V6 — Deployment Guide

## Local (Development)
```bash
npm install && npm run dev
# http://localhost:3000
```

## Production (VPS/Cloud)
```bash
npm install --production
NODE_ENV=production API_KEY=your_secret_key node api/server.js
# Use PM2: pm2 start api/server.js --name vedicaladdin-v6
```

## Environment Variables (.env)
```
PORT=3000
NODE_ENV=production
API_KEY=your_secure_key_here
MARKET_API=alpha_vantage_key_optional
```

## PWA Install
1. Browser में `http://your-domain.com` खोलें
2. "Install App" prompt पर क्लिक करें
3. Phone/Desktop पर app icon आ जाएगा

## Cron Jobs
```bash
node scripts/cron_scheduler.js &
```

## Login
Username: **Admin**  
Password: **Guruji@1379**
