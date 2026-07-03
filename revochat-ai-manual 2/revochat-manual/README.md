# RevoChat AI — Walkthrough Guide

A step-by-step visual manual for RevoChat AI, built from the screenshots in
`revochat_docs.docx`. Each step shows one screen full-size with a plain-English
description underneath, in this order:

1. **Landing Page** (8 steps) — hero, live agent showcase, feature grids, the
   embedded live demo, the integrations section, and pricing — in the order
   they appear on the public site.
2. **Dashboard** (19 steps) — every admin screen, in the same order they're
   listed in the app's left sidebar, starting from Dashboard Overview.

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm start
```

## Editing the content

All step titles, descriptions, section grouping, and image paths live in one
place: `src/data/steps.js`. Each entry looks like this:

```js
{
  id: 9,
  section: "dashboard",       // "landing" or "dashboard"
  image: "/screenshots/image19.png",
  title: "Dashboard Overview",
  description: "…",
}
```

To reorder, retitle, or rewrite any step, edit that array — the sidebar,
progress bar, and prev/next navigation all update automatically. Screenshots
live in `public/screenshots/`.

## Structure

- `src/app/page.js` — top-level state (current step, mobile menu)
- `src/app/globals.css` — **theme colors** (light/dark, accent colors) and fonts
- `src/components/GuideSidebar.js` — left-hand step list. Landing Page shows
  only "Hero" by default, with the remaining landing steps tucked into a
  "More landing sections" dropdown. Dashboard is its own collapsible section.
- `src/components/StepView.js` — screenshot (click to enlarge) + title +
  description + prev/next
- `src/components/Lightbox.js` — full-size image modal opened by clicking
  the screenshot
- `src/components/ProgressRule.js` — top progress bar
- `src/data/steps.js` — all guide content (titles, descriptions, image paths)
- `next.config.mjs` — image quality settings (screenshots render at full
  quality, no compression blur)

### Want to change the colors / light vs dark theme?
Edit `src/app/globals.css` — the `@theme` block near the top has every color
used across the site (background, panel, border, text, accent, teal). Change
the hex values there and the whole site updates.

### Want to change which steps are collapsed in the sidebar?
Edit `src/components/GuideSidebar.js` — look for `restOfLanding` and
`dashboardOpen` to control what's expanded by default.
