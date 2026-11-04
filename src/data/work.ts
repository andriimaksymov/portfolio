import type { CaseStudy, Project } from "../types";

/**
 * Selected work, strongest first.
 *
 * Client work (aivo, Movadex) is text only: no screenshots, data or UI.
 * aivo handles confidential client financial ledgers, and the Movadex SaaS
 * belongs to a client, so it stays unnamed.
 * Personal projects carry real screenshots of their live sites.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "aivo",
    title: "Modernizing a live audit platform without a feature freeze",
    org: "aivo Revisions AG",
    role: "Senior Frontend Engineer",
    period: "Jun 2024 – Present",
    confidentiality: "Text only: the product holds clients' financial ledgers, so there are no screenshots here.",
    context: [
      "aivo is a Swiss audit SaaS based in Zurich. When I joined in June 2024, its frontend was a four-year-old React 17 app, mostly JavaScript, with three styling stacks, hand-rolled data fetching and no test suite.",
      "It works with real client ledgers, and feature work couldn't pause while the foundations changed. So none of what follows happened in a rewrite branch. It went in module by module on the live app.",
    ],
    points: [
      {
        label: "Data-analysis workspace",
        text: "I led the frontend of the product's new module for audit data work outside Excel: ledger import, validation, account mapping, pivot tables and saved views. Its structure is now the template for new features.",
      },
      {
        label: "Strict TypeScript, no freeze",
        text: "Took the 1,500-file app from 11% to 99% strict TypeScript in six milestones while features kept shipping, and ran the React 17 to 18 upgrade.",
      },
      {
        label: "Tests that check the figures",
        text: "Wrote about 520 of the 620 test files and most of the Playwright end-to-end suite. The import spec had 170 assertions, and not one of them checked a figure. I added a test that compares every imported account total against an independent calculation.",
      },
      {
        label: "Server state and design system",
        text: "Moved all server state to TanStack Query, with query-key factories and inline keys banned by lint. Replaced Redux with Zustand and URL state, and merged three styling stacks into one MUI design system of about 50 components.",
      },
      {
        label: "API contracts",
        text: "Added Zod validation on API responses and a contract test registry checked against the OpenAPI spec. It caught three places where the client had silently drifted from the API.",
      },
      {
        label: "Performance and accessibility",
        text: "Fixed an editor render loop that hit about 400 re-renders per second, and virtualized the ledger table. In CI, axe runs on every Storybook story; the known-failure list went from 513 to 489.",
      },
    ],
    metrics: [
      { value: "11% → 99%", label: "strict TypeScript on a live 1,500-file app" },
      { value: "~520 of 620", label: "test files written by me" },
      { value: "31% → 67%", label: "measured test coverage, Jul–Oct 2026" },
      { value: "500+", label: "merged PRs since June 2024, about half the repo's total" },
    ],
    stack: ["React 18", "TypeScript", "TanStack Query", "Zustand", "MUI", "Storybook", "Jest", "Playwright", "AWS Amplify"],
  },
  {
    id: "saas",
    title: "Founding frontend engineer on a multi-tenant SaaS",
    org: "Movadex",
    role: "Senior Frontend Engineer",
    confidentiality: "Text only: a Movadex client's product, so it stays unnamed and there are no screenshots.",
    context: [
      "A peer-forum SaaS for business executives, built at Movadex for a client. I wrote the first commit and took it to production.",
    ],
    points: [
      {
        label: "Ownership",
        text: "Wrote over 90% of the 52k-line codebase: 733 commits and 185 of its 196 PRs, in React 19, strict TypeScript, Vite, Tailwind and TanStack Query.",
      },
      {
        label: "Product scope",
        text: "13 product domains and 46 routes, including the super-admin panel, meeting-cycle forms, engagement analytics, a rich-text community feed and data import with row-level validation.",
      },
      {
        label: "Multi-tenancy",
        text: "One deployment serves every tenant. I designed it with runtime tenant theming and per-tenant privacy rules.",
      },
      {
        label: "API layer",
        text: "A typed TanStack Query layer over 200+ endpoints, and the HTTP client under it: silent JWT refresh with request replay, retries with backoff, and normalized typed errors.",
      },
      {
        label: "AI features",
        text: "Meeting analysis, action-item extraction and reminder drafts on OpenAI, Gemini and Groq, behind one provider interface with ordered fallback and per-attempt timeouts.",
      },
    ],
    metrics: [
      { value: "90%+", label: "of the 52k-line codebase" },
      { value: "185 of 196", label: "pull requests" },
      { value: "46", label: "routes across 13 product domains" },
      { value: "200+", label: "endpoints behind one typed API layer" },
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind", "TanStack Query"],
  },
];

export const projects: Project[] = [
  {
    id: "gitmerit",
    title: "GitMerit",
    kind: "Personal project, full stack",
    year: "2026",
    summary: "Scores a developer's GitHub, LinkedIn and résumé evidence, then explains the score.",
    details: [
      "A React 19 and NestJS 11 monorepo on PostgreSQL and Prisma. Scoring is deterministic and kept apart from the AI explanations.",
      "The LLM layer falls back across four providers, with JSON-schema output, Zod validation and groundedness checks. With no API keys at all, the app still works.",
    ],
    stack: ["React 19", "NestJS 11", "PostgreSQL", "Prisma", "Zod"],
    links: [
      { label: "Live site", href: "https://gitmerit.vercel.app" },
      { label: "Source", href: "https://github.com/andriimaksymov/gitmerit" },
    ],
    image: {
      base: "/work/gitmerit",
      alt: "GitMerit home page: a headline about developer profile strength, a sample score card, and a form to analyze a GitHub profile.",
      width: 1280,
      height: 800,
    },
  },
  {
    id: "pawbase",
    title: "Pawbase",
    kind: "Personal project, full stack",
    year: "2026",
    summary: "A pet-health platform for records, medications, appointments and documents.",
    details: [
      "A full-stack Next.js 16 app with a 32-model Prisma schema, Auth.js, presigned S3 uploads, rate limiting, 4 locales and revocable emergency-share pages.",
      "Playwright and axe run in CI.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    links: [{ label: "Live site", href: "https://pet-life-jade.vercel.app/en" }],
    image: {
      base: "/work/pawbase",
      alt: "Pawbase home page: the headline next to a preview of the app's daily task list for several pets.",
      width: 1280,
      height: 800,
    },
  },
  {
    id: "json-ui-forge",
    title: "JSON UI Forge",
    kind: "Small tool",
    year: "2026",
    summary: "Paste JSON and get an editable form, a table preview, TypeScript interfaces and React component code.",
    details: ["A small React, TypeScript and Vite app. The generators have unit tests in Vitest."],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Vitest"],
    links: [
      { label: "Live tool", href: "https://json-ui-forge.andrii-maksymov-1.workers.dev" },
      { label: "Source", href: "https://github.com/andriimaksymov/json-ui-forge" },
    ],
    image: {
      base: "/work/json-ui-forge",
      alt: "JSON UI Forge: a JSON editor on the left and the generated form preview on the right.",
      width: 1280,
      height: 800,
    },
  },
];
