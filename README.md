# Nairobi Stack Studio

Tech studio site — websites, web apps/MVPs, e-commerce (M-Pesa) and SEO/growth for Kenyan startups & SMEs, diaspora businesses and international startups.

Next.js (App Router) · TypeScript · Tailwind CSS 4 · Deployed on Vercel

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes are static except /api/lead)
npm run start    # serve production build
```

## Env vars

Copy `.env.example` to `.env.local`. `RESEND_API_KEY` emails leads to `RESEND_TO` (defaults to joejoris99@gmail.com, jorisambeyi32@gmail.com); without it, leads are logged to the server console. Set the same vars in Vercel → Project → Environment Variables.

## Structure

- `src/app/` — pages: `/` home, `/about`, `/work`, `/insights`, `/free-audit-checklist`, `/privacy` (+ branded 404)
- `src/app/api/lead` — lead capture (Resend; falls back to console log)
- `docs/` — business plan, marketing strategy, 30-day action plan, outreach scripts
- `docs/preview.html` — legacy static preview

## Deploy

Connected to Vercel — pushes to `main` auto-deploy. Public pages, sticky mobile CTA, WhatsApp-first.
