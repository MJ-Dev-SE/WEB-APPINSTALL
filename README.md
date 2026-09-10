# 88 Hot Spring Resort — Website

Landing page for 88 Hot Spring Resort (Calamba, Laguna). Single-page React +
TypeScript site built with Vite, deployed on Vercel.

## Sections

Hero → Mobile App (APK download) → Room Availability → Footer

## Local development

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Deploying to Vercel

Vercel auto-detects the Vite setup; `vercel.json` pins it explicitly.

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

Import the repo at [vercel.com/new](https://vercel.com/new) and deploy — no
environment variables are required.

## The Android APK

The APK is **not stored in this repo**. At ~120 MiB it exceeds GitHub's 100 MiB
per-file limit, so a push containing it is rejected.

It is distributed as a **GitHub Release asset** instead, and the download button
points at:

```
https://github.com/MJ-Dev-SE/WEB-APPINSTALL/releases/latest/download/88resort.apk
```

`releases/latest` always resolves to the newest release, so the URL in the code
(`APK_URL` in `src/App.tsx`) never needs to change when you ship a new build.

### Publishing a new APK version

1. Go to the repo → **Releases** → **Draft a new release**
2. Create a tag (e.g. `v1.0.0`) and give the release a title
3. Attach the APK as a release asset, named exactly **`88resort.apk`**
4. **Publish release**

The filename must stay `88resort.apk` or the `releases/latest/download/` URL
will 404.

## Replaceable assets

| Path | Purpose | Notes |
| --- | --- | --- |
| `public/app-screenshot.png` | Screenshot inside the phone mockup | Portrait, ideally 512×1040. Falls back to a placeholder if missing. |
| `public/favicon.svg` | Browser tab icon, also the nav logo | Currently a 48×48 raster wrapped in SVG — replace with a true vector when the original logo is available. |
| `public/favicon.ico` | Fallback icon for older browsers | |
| `public/apple-touch-icon.png` | iOS home-screen icon | |
