# Andrii Maksymov Portfolio

[![CI](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/andriimaksymov/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Senior Frontend Engineer and Frontend Architect portfolio for **Andrii Maksymov**, built as a polished, frontend-only React landing page.

The site presents React/Next.js architecture experience, real-time systems, product-focused engineering, Core Web Vitals work, testing strategy, mentorship, selected projects, certificates, and public contact links. Content is intentionally grounded in the portfolio data in this repository.

## Quick Facts

| Item | Details |
| --- | --- |
| Live site | <https://andriim.dev> |
| Stack | React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React |
| App type | Static frontend portfolio |
| Build output | `dist` |
| Backend/database | None |
| Environment variables | None required |
| License | MIT |

## GitHub Repository Details

Recommended GitHub About settings:

- Description: `Senior Frontend Engineer and Frontend Architect portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.`
- Website: `https://andriim.dev`
- Topics: `portfolio`, `react`, `typescript`, `vite`, `tailwindcss`, `framer-motion`, `frontend`, `personal-site`

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local Vite dev server at `http://127.0.0.1:5173/` |
| `npm run typecheck` | Run TypeScript project checks |
| `npm run build` | Type-check and create the production build |
| `npm run test` | Run the repository verification command, currently the production build |
| `npm run preview` | Serve the generated production build locally |
| `npm run audit` | Check npm dependencies for moderate-or-higher vulnerabilities |

## Verification

Before opening a pull request or publishing changes, run:

```bash
npm run test
npm run audit
```

The GitHub Actions workflow runs the same verification on pushes and pull requests.

## Project Structure

```text
.
├── public/
│   └── Andrii_Maksymov_CV.pdf
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolio.ts
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Content Updates

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Use that file for profile details, social links, experience timeline data, skill groups, project descriptions, impact bullets, value cards, and certificates.

The downloadable CV lives at:

```text
public/Andrii_Maksymov_CV.pdf
```

To update the CV, replace that file while keeping the same filename, or update the `href` in `src/App.tsx`.

## Design And Accessibility

- Responsive single-page portfolio layout
- Semantic sections and accessible links/buttons
- Keyboard-visible focus states
- Reduced-motion handling for users who prefer less animation
- Reusable components for cards, buttons, section wrappers, skills, projects, and timeline content

## Deployment

This is a static frontend app. It can be deployed to Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any static host.

Use these deployment settings:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

## Public Data And Safety

This repository intentionally includes public portfolio information:

- Name and professional title
- Public email address
- LinkedIn profile URL
- GitHub profile URL
- Portfolio site URL
- Downloadable CV PDF
- Work experience, skills, selected projects, and certificates

No backend, database, private API keys, or private environment variables are required for this app. See [SECURITY.md](SECURITY.md) for the security posture and reporting guidance.

## License

This project is licensed under the [MIT License](LICENSE).
