# Shot Rate Calculator — PWA

Spreader truck shot rate calculator. Caltrans spec. Works offline.

## Features

- **Calculator Tab:** Solve for rate, gallons, width, or length
- **Pull Tracker:** Log each truck pull with start/end gallons, square yards
- **Logs Tab:** View all pulls, export to CSV
- **GPS + Weather:** Auto-fetches location and ambient temperature
- **Offline:** Service worker caches everything
- **Persistent Storage:** localStorage saves all data

## Deploy to Vercel

```bash
cd src-pwa
npm install -g vercel
vercel deploy --prod
```

Or push to GitHub and auto-deploy via Vercel Git integration.

## Local Testing

```bash
python -m http.server 8000
# Visit http://localhost:8000
# Add to home screen (iOS: Share → Add to Home Screen)
```

## Files

- `index.html` — Main app (vanilla JS, no build step)
- `manifest.json` — PWA metadata
- `sw.js` — Service worker for offline caching
- `icon.png` — App icon (1024x1024)
- `vercel.json` — Deployment config
