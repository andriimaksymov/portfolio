import type { About, Contact, Experience, Hero, Practice, Profile, SkillGroup } from "../types";

/*
 * Copy rules (see README):
 * - Every fact comes from the frontend CV or its evidence report. No new numbers.
 * - Client work is text only. Name only aivo Revisions AG and Movadex.
 * - Plain words. No em dashes. Read each line and ask whether it could sit on
 *   a thousand other sites; if yes, make it specific or cut it.
 */

export const profile: Profile = {
  name: "Andrii Maksymov",
  role: "Senior Frontend Engineer",
  stack: "React, TypeScript, Next.js",
  email: "andrii@andriim.dev",
  github: "https://github.com/andriimaksymov",
  linkedin: "https://www.linkedin.com/in/maksymov-andrii",
  website: "https://andriim.dev",
  cvHref: "/Andrii_Maksymov_CV.pdf",
  sourceHref: "https://github.com/andriimaksymov/portfolio",
};

export const hero: Hero = {
  lead: "I build frontends for data-heavy B2B SaaS. On several products I've been the founding, sole or lead frontend engineer, owning the architecture, the typing and the tests.",
  facts: [
    "9+ years in web development, 6 in React and TypeScript",
    "Ukraine, UTC+2/+3",
    "Remote, open to roles worldwide",
    "B2B contractor or employer of record (EOR)",
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-aivo",
    role: "Senior Frontend Engineer",
    company: "aivo Revisions AG",
    companyNote: "Swiss audit SaaS, Zurich",
    period: "Jun 2024 – Present",
    location: "Remote",
    meta: [
      "Part-time contract alongside my full-time Movadex role Jun 2024 – May 2026; main engagement since Jun 2026.",
    ],
    stack: {
      label: "Stack",
      value: "React 18, TypeScript, TanStack Query, Zustand, MUI, Storybook, Jest, Playwright, AWS Amplify",
    },
    points: [
      "Led the frontend of the data-analysis workspace, took the app from 11% to 99% strict TypeScript, and wrote ~520 of its 620 test files.",
      "500+ merged PRs since June 2024, about half the repo's total. I own the frontend CI/CD (GitHub Actions, AWS Amplify) and wrote the testing and architecture docs plus three decision records (ADRs).",
    ],
    caseStudyId: "aivo",
  },
  {
    id: "exp-movadex",
    role: "Senior Frontend Engineer",
    company: "Movadex",
    companyNote: "product agency",
    period: "May 2022 – Jun 2026",
    location: "Remote",
    meta: ["Full-time."],
    stack: {
      label: "Stack across projects",
      value: "React 19, TypeScript, Next.js, Vite, Tailwind, MUI, TanStack Query, Zustand",
    },
    points: [
      "Founding frontend engineer on a multi-tenant peer-forum SaaS for business executives, from first commit to production.",
      "Sole frontend engineer on a humanitarian aid-logistics platform delivered in six months: role-based workflows, inventory, legal documents, maps and EN/UK localization.",
      "Also a customer-facing analytics platform, a German-market Next.js SSR/SSG search site (Lighthouse 90+, LCP under 1 s) and an e-commerce site on the Next.js App Router with Payload CMS and Stripe.",
      "Supported junior developers for a short period, sharing practices and helping them through their tasks.",
    ],
    caseStudyId: "saas",
  },
  {
    id: "exp-rivo",
    role: "Frontend Engineer",
    company: "Rivo Agency",
    period: "Oct 2021 – Apr 2022",
    meta: [],
    points: [
      "Refactored a Next.js beauty-services platform and built landing pages that scored Lighthouse 92+ with green Core Web Vitals. Also built CRM features and took part in technical planning.",
    ],
  },
  {
    id: "exp-proit",
    role: "Frontend Developer",
    company: "PRO-IT",
    period: "Jul 2017 – Sep 2021",
    location: "Rivne, Ukraine",
    meta: ["React Developer Nov 2020 – Sep 2021; HTML/CSS Developer Jul 2017 – Oct 2020."],
    points: [
      "Moved from HTML/CSS into React and Next.js. Built a B2B video-player product site and an embed-script generator, and wrote responsive markup and shared CSS for a large B2C video-hosting product.",
    ],
  },
];

export const practices: Practice[] = [
  {
    id: "remote",
    title: "Remote, and mostly in writing",
    paragraphs: [
      "I've worked fully remote since 2022. Most coordination happens in GitHub issues, PR descriptions and Slack, with a few calls a week. I open issues for what I find and validate the ones assigned to me. On aivo in 2026 that came to 42 issues opened and 121 threads commented on.",
    ],
  },
  {
    id: "ai",
    title: "AI agents, under the same checks as my own code",
    paragraphs: [
      "I use Claude Code and Codex every day. Their output goes through regression tests, a separate review pass, and lint and typecheck before anything merges, and I can defend every line that ships.",
      "Each agent works in its own git worktree, and hooks keep client financial documents out of the model's context. On aivo, measured test coverage went from 31% to 67% between July and October 2026 while I worked this way.",
    ],
  },
  {
    id: "quality",
    title: "Checks that ratchet",
    paragraphs: [
      "On aivo I turned the quality rules into checks. The enforced coverage floor went from 28% to 64%, set a couple of points under the measured value and never lowered. Inline query keys are a lint error. axe runs on every Storybook story in CI, and the known-failure list went from 513 to 489.",
      "Decisions get written down: the testing and architecture docs are mine, and so are three of the repo's decision records (ADRs).",
    ],
  },
];

/** Same groups and items as the CV's Skills section. Keep them in sync. */
export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["TypeScript (strict)", "JavaScript", "React", "Next.js (App Router, React Server Components, SSR)", "HTML", "CSS"],
  },
  {
    name: "State management and data",
    skills: ["TanStack Query", "Zustand", "Redux Toolkit", "React Hook Form", "Zod", "REST", "WebSockets"],
  },
  {
    name: "Testing",
    skills: ["Jest", "Vitest", "React Testing Library", "Playwright", "Mock Service Worker (MSW)", "axe"],
  },
  {
    name: "Quality",
    skills: ["accessibility (WCAG 2.1 AA)", "performance (Core Web Vitals, virtualization)", "i18n", "Feature-Sliced Design"],
  },
  {
    name: "UI and design systems",
    skills: ["MUI (Material UI)", "Tailwind CSS", "shadcn/ui", "Storybook", "Figma tokens", "TanStack Table"],
  },
  {
    name: "AI-assisted development",
    skills: ["Claude Code and OpenAI Codex (daily)", "Cursor", "GitHub Copilot"],
  },
  {
    name: "Build and delivery",
    skills: ["Vite", "Webpack", "monorepos", "CI/CD (GitHub Actions)", "AWS Amplify", "Vercel"],
  },
  {
    name: "Backend (working knowledge)",
    skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "Prisma", "Supabase", "LLM APIs"],
  },
];

export const about: About = {
  paragraphs: [
    "I started in web in 2017, writing HTML and CSS at PRO-IT in Rivne, and moved to React and Next.js in 2020. Before that I studied hydropower engineering.",
    "The part of frontend I enjoy most is the unglamorous half: type migrations, test suites, design systems and the API layer everything else depends on.",
  ],
  education: {
    credential: "M.Sc., Hydropower Engineering",
    institution: "National University of Water Management and Natural Resources",
    period: "2011 – 2017",
  },
  languages: ["English: B2 (upper-intermediate), used daily at work", "Ukrainian: native"],
  location: "Ukraine (UTC+2/+3)",
};

export const contact: Contact = {
  lead: "If you have a frontend that has grown faster than its architecture, or a product where the UI is the hard part, I'd like to talk.",
  engagement: "Remote, open to roles worldwide · B2B contractor or employer of record (EOR)",
};
