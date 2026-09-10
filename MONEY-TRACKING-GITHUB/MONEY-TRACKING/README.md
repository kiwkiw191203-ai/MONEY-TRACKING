# MONEY TRACKING

React + Vite frontend untuk MONEY TRACKING.

## Lokal
npm install
npm run dev

## API
Salin `.env.example` menjadi `.env`, lalu isi:
VITE_API_URL=https://script.google.com/macros/s/XXXXXXXX/exec

Frontend membaca endpoint `?action=get&sheet=Transactions`.
Jika parameter API berbeda, edit `src/services/api.js`.

## Deploy GitHub
Upload project ini ke repository GitHub, lalu import repository tersebut ke Vercel atau Netlify. Tambahkan `VITE_API_URL` pada Environment Variables.
