# FREEDOM Barber & Fryzjer — website

Next.js (App Router) site for FREEDOM Barber & Fryzjer, Poznań.

## Requirements

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000) with hot reload.

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` — canonical production URL, used for metadata, Open Graph tags,
  the JSON-LD structured data, `robots.ts`, and `sitemap.ts`. Defaults to
  `https://freedom-barber.pl` if not set.

## Production build

```bash
npm run build
npm run start
```

## Linting

```bash
npm run lint
```

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket and import it in [Vercel](https://vercel.com/new).
2. Set the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel project settings
   (Production and Preview) to the live domain.
3. Vercel auto-detects Next.js — no extra build configuration is required.
4. Every push to the main branch triggers a new production deployment.

Images are served through Next.js Image Optimization (no static export), so no extra
CDN/image configuration is needed on Vercel.

## Optional static export (temporary preview hosts)

For hosts that only accept a static `out/` folder:

```bash
# PowerShell
$env:STATIC_EXPORT="1"; npm run build

# bash
STATIC_EXPORT=1 npm run build
```

This writes an `out/` directory. Default Vercel builds should **not** set `STATIC_EXPORT`.

