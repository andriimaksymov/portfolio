# Andrii Maksymov Portfolio

[![CI](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Frontend-only portfolio for **Andrii Maksymov**, built with React, TypeScript, Vite, and custom CSS. The app is a static single-page site focused on frontend architecture experience, selected work, skills, contact links, and a downloadable CV.

## Quick Facts

| Item | Details |
| --- | --- |
| Live site | <https://andriim.dev> |
| Stack | React 18, TypeScript, Vite, custom CSS |
| Node.js | `^20.19.0` or `>=22.12.0` |
| App type | Static frontend portfolio |
| Build output | `dist` |
| Runtime backend | None |
| Environment variables | None required |
| License | MIT |

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite at `http://127.0.0.1:5173/` |
| `npm run typecheck` | Run TypeScript project checks |
| `npm run build` | Type-check and create the production build |
| `npm run test` | Run the repository verification command, currently the production build |
| `npm run preview` | Serve the generated production build locally |
| `npm run audit` | Check npm dependencies for moderate-or-higher vulnerabilities |

## Project Structure

```text
.
├── public/
│   ├── Andrii_Maksymov_CV.pdf
│   └── favicon and manifest assets
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   └── usePortfolioInteractions.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Architecture

The portfolio is structured around three boundaries:

- `src/data/portfolio.ts` contains the public content model: profile links, navigation, hero stats, experience, skills, projects, about copy, terminal animation text, and contact methods.
- `src/components/` contains presentational sections and shared visual pieces. Components render semantic JSX and keep markup close to the design.
- `src/hooks/usePortfolioInteractions.ts` owns browser-only behavior: custom cursor, reveal animations, counters, typewriter text, terminal typing, copy-to-clipboard, mobile menu state, scroll spy, and timeline navigation.

This keeps content changes separate from UI structure and keeps imperative DOM animation code out of the section components.

## Content Updates

Most visible portfolio text is edited in:

```text
src/data/portfolio.ts
```

The downloadable CV is:

```text
public/Andrii_Maksymov_CV.pdf
```

Replace that file to update the CV while keeping the same filename, or change `profile.cvHref` in `src/data/portfolio.ts`.

## Verification

Before publishing changes, run:

```bash
npm run test
npm run audit
```

The CI workflow runs the same checks on pushes and pull requests.

## Deployment

This is a static Vite app. It can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any host that serves static assets.

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

## Public Data And Safety

This repository intentionally includes public portfolio information:

- Name and professional positioning
- Public email address
- LinkedIn and GitHub profile URLs
- Portfolio URL
- Downloadable CV PDF
- Work experience, skills, and selected project descriptions

There is no backend, database, authentication layer, payment integration, or private runtime configuration in this app. See [SECURITY.md](SECURITY.md) for security posture and reporting guidance.

## GitHub Repository Details

Recommended GitHub About settings:

- Description: `Senior Frontend Engineer and Frontend Architect portfolio built with React, TypeScript, Vite, and custom CSS.`
- Website: `https://andriim.dev`
- Topics: `portfolio`, `react`, `typescript`, `vite`, `frontend-architecture`, `frontend`, `personal-site`

## License

This project is licensed under the [MIT License](LICENSE).
