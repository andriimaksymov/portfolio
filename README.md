# Andrii Maksymov Portfolio

A modern personal portfolio landing page for **Andrii Maksymov**, a Senior Front-End React Developer.

The site presents frontend architecture, React/Next.js expertise, product-focused engineering, performance work, mentorship, selected projects, certificates, and contact links in a polished single-page experience.

## Overview

This project is a frontend-only portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. It is designed as a clean, technical, senior-level landing page rather than a generic resume template.

The content is intentionally based on the provided portfolio information only. No fake companies, metrics, links, or exaggerated claims are added.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Main Features

- Responsive portfolio landing page
- Light, polished visual system
- Smooth section reveal animations with Framer Motion
- Reusable component architecture
- Hero section with technical dashboard/code visual
- Experience timeline
- Grouped skill cards
- Project case-study cards
- Senior engineering value section
- Certificates section
- Contact section with email, LinkedIn, and GitHub links
- Downloadable CV from the `public` directory

## Content Source

The main portfolio content lives in:

```text
src/data/portfolio.ts
```

This file contains:

- Profile information
- Email and social links
- Experience timeline data
- Skill groups
- Project descriptions and impact bullets
- Senior engineering value cards
- Certificates

Keeping content in one file makes the page easier to maintain without digging through presentation components.

## Project Structure

```text
.
├── public/
│   └── Andrii-Maksymov-CV.pdf
├── src/
│   ├── components/
│   │   ├── AnimatedCard.tsx
│   │   ├── CTAButton.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── HeroVisual.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── SkillBadge.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Components

The page is built from reusable components:

- `SectionWrapper` handles consistent section spacing, headings, and reveal animation.
- `AnimatedCard` provides the shared card surface, hover treatment, and motion behavior.
- `CTAButton` provides consistent accessible buttons and links.
- `SkillBadge` renders compact technology labels.
- `ExperienceTimeline` renders the vertical professional timeline.
- `ProjectCard` renders case-study style project cards.
- `HeroVisual` renders the static technical dashboard/code visual in the hero section.

## Design Direction

The current design uses a refined light theme with:

- Soft off-white page background
- White glass-like card surfaces
- Slate text hierarchy
- Cyan, violet, and emerald accent colors
- Subtle shadows and borders
- Rounded but restrained UI elements
- Minimal motion for section reveals and hover feedback

The goal is to communicate seniority, clarity, product thinking, and engineering precision.

## Accessibility Notes

The implementation includes:

- Semantic HTML sections
- Accessible links and buttons
- Keyboard-visible focus states
- `aria-label` values for external profile links
- Good text contrast on the light theme
- Reduced-motion handling in CSS for users who prefer less animation

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

By default, Vite serves the app at:

```text
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev
```

Runs the local Vite development server.

```bash
npm run build
```

Runs TypeScript build checks and creates the production bundle in `dist`.

```bash
npm run preview
```

Serves the generated production build locally.

## Updating Portfolio Content

Most text updates should be made in:

```text
src/data/portfolio.ts
```

Common edits:

- Update email/social links in `profile`
- Add or edit experience highlights in `experiences`
- Add skills in `skillGroups`
- Update project copy in `projects`
- Update certificates in `certificates`

If a new section layout is needed, update `src/App.tsx` and add a reusable component under `src/components`.

## CV Download

The "Download CV" button points to:

```text
public/Andrii-Maksymov-CV.pdf
```

To update the downloadable CV, replace that file while keeping the same filename, or update the `href` in `src/App.tsx`.

## Deployment

This is a static frontend app. It can be deployed to platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Notes

- No backend is required.
- No database is required.
- No private environment variables are required.
- The site currently uses local/static assets only.
- Portfolio claims should stay grounded in verified experience and supplied content.

