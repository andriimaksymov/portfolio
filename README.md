# Andrii Maksymov Portfolio

[![CI](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Personal portfolio for **Andrii Maksymov**, Senior Frontend Engineer. Built with Next.js (App Router, React Server Components), React 19, TypeScript, and custom CSS. The design is a light, editorial, technical direction ("The Index"): a precise grotesque-on-paper type system, one restrained accent, hairline structure, and no template decoration.

## Quick Facts

| Item | Details |
| --- | --- |
| Live site | <https://andriim.dev> |
| Stack | Next.js 16 (App Router, RSC), React 19, TypeScript, custom CSS |
| Fonts | Geist Sans and Geist Mono, self-hosted via `next/font` |
| Node.js | `^20.19.0` or `>=22.12.0` |
| App type | Statically prerenderable portfolio (no runtime backend) |
| Build output | `.next` (standard Next.js build) |
| Environment variables | None required |
| License | MIT |

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start Next.js dev server at `http://localhost:3000/` |
| `npm run build` | Type-check and create the production build |
| `npm start` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript checks (`tsc --noEmit`) |
| `npm run audit` | Check npm dependencies for moderate-or-higher vulnerabilities |

## Project Structure

```text
.
├── public/
│   ├── Andrii_Maksymov_CV.pdf        # downloadable CV
│   ├── work/                         # real screenshots of live projects
│   └── favicon and manifest assets
├── src/
│   ├── app/
│   │   ├── layout.tsx                # root layout: fonts + metadata / OpenGraph
│   │   ├── page.tsx                  # the single-page composition
│   │   └── globals.css               # design tokens + all styles
│   ├── components/
│   │   └── Nav.tsx                   # client island (scroll-aware nav)
│   ├── data/
│   │   ├── portfolio.ts              # experience, skills, about, contact
│   │   └── work.ts                   # selected work / projects
│   └── types.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Architecture

Content is separated from presentation:

- `src/data/portfolio.ts` and `src/data/work.ts` hold the content model (profile, experience, skills, background, contact, and selected work).
- `src/app/page.tsx` composes the sections and is a React Server Component by default; only interactive pieces are client islands.
- `src/components/Nav.tsx` is the one client component (a scroll-aware sticky nav using `IntersectionObserver`, not a scroll listener).
- `src/app/globals.css` defines the design system: semantic color tokens (OKLCH), a type scale, spacing scale, one radius, and motion easing curves.

Server Components render the static layout; interactivity stays isolated in client leaves. This keeps client JavaScript minimal.

## Content Updates

Most visible text lives in:

```text
src/data/portfolio.ts    # experience, skills, background, contact
src/data/work.ts         # selected work / projects
```

The downloadable CV is:

```text
public/Andrii_Maksymov_CV.pdf
```

Replace that file to update the CV while keeping the same filename, or change `profile.cvHref` in `src/data/portfolio.ts`.

## Verification

Before publishing changes, run:

```bash
npm run build
npm run audit
```

`npm run build` type-checks and builds the app; the CI workflow runs the same build on pushes to `main` and on pull requests.

## Deployment

This is a Next.js App Router app. Two supported paths:

- **Vercel (recommended).** Zero configuration for Next.js. Push the repo and Vercel builds and serves it, including font optimization and metadata.
- **Static host (Cloudflare Pages, GitHub Pages, Netlify).** The site is fully prerendered, so it can be exported to static HTML: set `output: "export"` in `next.config.ts` (and `images: { unoptimized: true }` if `next/image` is added later), then configure the host with build command `npm run build`, output directory `out`, and `NODE_VERSION` `22`.

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

- Description: `Senior Frontend Engineer portfolio built with Next.js, React, and TypeScript.`
- Website: `https://andriim.dev`
- Topics: `portfolio`, `nextjs`, `react`, `typescript`, `frontend-architecture`, `frontend`, `personal-site`

## License

This project is licensed under the [MIT License](LICENSE).
