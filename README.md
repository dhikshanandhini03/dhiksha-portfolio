# Data Engineer Portfolio

A modern, animated portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion — themed around data engineering (pipelines, streaming, cloud warehouses).

All content (name, experience, projects, skills, certifications) is **placeholder/dummy data** in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Edit that one file to make it yours.

## Features

- Animated canvas background (drifting data-pipeline node graph)
- Typing-effect hero with terminal-style code card
- Sections: About, Skills, Experience timeline, Projects, Certifications, Contact
- Fully responsive, glassmorphism dark UI with gradient accents
- Ready-made GitHub Actions workflow for GitHub Pages deployment

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Customize Your Content

Edit [`src/data/portfolioData.ts`](src/data/portfolioData.ts):

- `profile` — name, role, tagline, resume link, social URLs
- `stats` — headline numbers shown in the About section
- `about` — bio paragraphs and highlight tags
- `skillCategories` — grouped tech stack
- `experiences` — work history timeline
- `projects` — project cards (title, description, tags, metrics, links)
- `certifications` / `education`

Replace the favicon at `public/favicon.svg` if you want custom branding.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

**Option A — GitHub Actions (recommended):**

1. Push this repo to GitHub.
2. In the repo settings, go to **Settings → Pages** and set **Source** to "GitHub Actions".
3. Push to the `main` branch — the included workflow at `.github/workflows/deploy.yml` will build and deploy automatically.

**Option B — Manual `gh-pages` deploy:**

```bash
npm run build
npm run deploy
```

This publishes the `dist` folder to the `gh-pages` branch using the `gh-pages` package.

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · react-icons · react-scroll
