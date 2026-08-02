# Techwin Systems Website

Website for Techwin Systems Pvt Limited, configured for `techwensys.com`.

## Local development

Install Node.js and npm, then open this project folder and run:

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The production-ready files will be generated in the `dist` folder.

## Technology

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Deployment

The repository includes a Vercel configuration for the Vite build, SPA route
fallbacks, security headers, and production cache headers.

In the Vercel project settings, add the variables listed in `.env.example` for
Production, Preview, and Development. The seven `VITE_FIREBASE_*` values are
required for the CMS and administrator login. Keep
`VITE_ENABLE_MOCK_AUTH=false` in every hosted environment.

Set `techwensys.com` as the primary domain and add `www.techwensys.com` as a
redirecting domain in Vercel. Firebase Authentication must also list both
domains under **Authentication > Settings > Authorized domains**.
