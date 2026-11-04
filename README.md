# andriim.dev

[![CI](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Portfolio site for **Andrii Maksymov**, Senior Frontend Engineer (React, TypeScript, Next.js). The site is also a work sample, so it's kept small, fast and accessible, and it's tested in CI.

| | |
| --- | --- |
| Live site | <https://andriim.dev> |
| Stack | Next.js 16 (App Router, static export), React 19, TypeScript, custom CSS |
| Client components | None. The page is rendered on the server at build time; navigation is plain anchors |
| Fonts | Geist Sans and Geist Mono, self-hosted (`src/app/fonts/`, SIL OFL) |
| Hosting | Cloudflare Pages, serving `out/` |
| Node.js | `^20.19.0` or `>=22.12.0` |
| Runtime dependencies | `next`, `react`, `react-dom` |

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at `http://localhost:3000` |
| `npm run build` | Static export to `out/` |
| `npm run serve` | Serve `out/` at `http://localhost:4173` (gzip on, like production) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (`eslint-config-next`, core web vitals + TypeScript) |
| `npm run test:e2e` | Playwright + axe smoke tests against `out/` (build first) |
| `npm run check` | Typecheck, lint, build and the smoke tests, in that order |
| `npm run screenshots` | Re-capture the personal projects' live sites into `public/work/*.webp` |
| `npm run og` | Re-render the social preview card, `public/og.png` |
| `npm run audit` | `npm audit` at high severity |

First-time setup for the tests: `npx playwright install chromium`.

## Structure

```text
src/
  app/
    layout.tsx       metadata, Open Graph, JSON-LD Person, fonts
    page.tsx         the single page: hero, work, experience, how I work, skills, about, contact
    globals.css      design tokens (OKLCH, light + dark) and all styles
    fonts.ts         self-hosted Geist; only the sans face is preloaded
    robots.ts, sitemap.ts, manifest.ts
  components/        SiteHeader, CaseStudy, ProjectCard, Readable (all server components)
  data/
    portfolio.ts     profile, hero facts, experience, how I work, skills, about, contact
    work.ts          case studies (client work, text only) and personal projects
    nav.ts           primary navigation
  types.ts           the content model
public/
  Andrii_Maksymov_CV.pdf   the published CV (keep this filename: other sites link to it)
  work/                    personal-project screenshots, 640 and 1280 px WebP
  og.png                   1200x630 social card
scripts/             serve.mjs, screenshots.mjs, og.mjs
tests/smoke.spec.ts  Playwright + axe
```

## Updating content

All copy lives in `src/data/`. The source of truth is the current frontend CV, so update the CV first, then the data files.

**Writing rules** (the smoke test enforces the first two):

- No em dashes, and none of these words: spearheaded, leveraged, utilized, synergy, passionate, results-driven, dynamic, cutting-edge, seamless, robust, innovative, delve, orchestrated, fostered, pivotal, testament, landscape, "proven track record".
- Every number and claim must match the CV. Don't add facts that aren't in it.
- Client work is text only. Name only aivo Revisions AG and Movadex; the Movadex SaaS stays unnamed. No screenshots or data from client products.
- AI tools appear only together with the checks that keep them honest (tests, a separate review, lint and typecheck before merge).

**CV:** replace `public/Andrii_Maksymov_CV.pdf` and keep the filename. Publish only the frontend CV.

**Screenshots:** personal projects only. Run `npm run screenshots`, then check each image for anything you wouldn't put your name to.

## Quality checks

CI (`.github/workflows/ci.yml`) runs typecheck, lint, build, and the smoke tests on every push to `main` and every pull request. The smoke tests check that:

- the page renders the name, role and the four main actions (CV, email, LinkedIn, GitHub);
- every nav link scrolls to its section, on desktop and at 360 px;
- `/Andrii_Maksymov_CV.pdf` returns a PDF;
- axe finds no WCAG 2.2 AA or best-practice violations in light mode, in dark mode and at 360 px, and there's no sideways scroll at 360 px;
- the skip link is the first tab stop and moves focus to the main content;
- every image has alt text and explicit dimensions;
- the copy follows the writing rules.

Design decisions that keep the site fast:

- No client components, no animation library, no image optimizer. The JavaScript that ships is Next.js's own runtime.
- CSS is inlined (`experimental.inlineCss`), so nothing blocks rendering.
- Only the sans font is preloaded. Mono is small metadata text and can arrive later.
- Screenshots are pre-sized WebP with `width`/`height` and `loading="lazy"`.
- Motion is limited to short color transitions, and `prefers-reduced-motion` turns those and smooth scrolling off.

## Deploying to Cloudflare Pages

The site is a static export, so Pages only serves files. Settings:

- Build command: `npm run build`
- Build output directory: `out`
- Environment variable: `NODE_VERSION` = `22`

Pushing to `main` deploys, if the project is connected to the repo. Otherwise build locally and upload `out/` with `npx wrangler pages deploy out --project-name <project>`.

## License

MIT, see [LICENSE](LICENSE). Geist fonts: SIL Open Font License, see `src/app/fonts/LICENSE-Geist.txt`.
