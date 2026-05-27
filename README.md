# Ava Strong 90

Ava Strong 90 is a private, mobile-first 90-day strength and conditioning app built for a beginner high school cheerleader. It is designed to help her feel confident in the gym, learn the machines, track progress, and build strength for basing, stunting, and competition endurance.

Live app: https://ava-strong-90.vercel.app/

## What It Includes

- A 90-day cheer-focused training plan split into Foundation, Build, and Performance phases
- Beginner-friendly workout language with plain-English explanations for gym terms
- Weight, rep, and effort logging so progress is easy to track
- Personal record detection and progress stats
- Daily energy and soreness check-ins to guide the suggested workout
- Move library matched to the machines available at her gym
- YouTube form links for exercise demos
- Competition countdown support
- Fuel and supplement guidance written for a beginner athlete
- PWA support so it can be added to an iPhone home screen like an app

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Local browser storage for workout logs and progress
- Service worker and web app manifest for PWA behavior
- Vercel for hosting

## Run Locally

This is a static app. You can open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## Deploy

The production version is deployed with Vercel from the GitHub repo. Any commit to `main` triggers a new deployment.

## Project Files

- `index.html` - app shell and PWA metadata
- `styles.css` - mobile-first premium visual design
- `app.js` - workout plan, logging, glossary, progress logic, and UI rendering
- `manifest.json` and `manifest.webmanifest` - home-screen app configuration
- `sw.js` - offline/cache support for the PWA

## Notes

This app is built as a supportive training tool, not medical advice. A parent, coach, trainer, or physician should be consulted for injuries, pain, or exercise restrictions.
