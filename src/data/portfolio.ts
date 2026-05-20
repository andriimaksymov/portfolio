import type { Experience, Project, SkillGroup, ValueCard } from "../types";

export const profile = {
  name: "Andrii Maksymov",
  title: "Senior Frontend Engineer / Frontend Architect",
  email: "andrii.maksymov.1@gmail.com",
  linkedin: "https://www.linkedin.com/in/maksymov-andrii/",
  github: "https://github.com/andriimaksymov",
  headline:
    "I architect high-performance React and Next.js products built to scale.",
  summary:
    "9+ years building production-grade web applications, with deep ownership across frontend architecture, Core Web Vitals, real-time systems, testing strategy, CI/CD, and product delivery.",
};

export const experiences: Experience[] = [
  {
    company: "Movadex",
    role: "Senior Frontend Engineer",
    period: "May 2022 - Present",
    location: "Remote",
    highlights: [
      "I architected multiple greenfield SaaS platforms end-to-end with Next.js 14/15, TypeScript, React Query, Tailwind CSS, and scalable frontend patterns.",
      "I drove a large legacy-to-modern migration, introducing TypeScript strict mode, React hooks, modular components, and React Query while reducing technical debt by an estimated 30%+.",
      "I engineered WebSocket-powered real-time collaboration with optimistic UI updates and sub-100ms perceived latency for multi-user workflows.",
      "I built a feature-rich PDF editor and document workflow engine with Tiptap, Slate, and dnd-kit, replacing third-party tooling and reducing licensing dependency.",
      "I implemented Playwright end-to-end testing across critical paths, reducing production regressions by roughly 40% and shortening QA cycles.",
      "I optimized Core Web Vitals and SEO architecture, reaching sub-1s LCP and 90+ Lighthouse performance scores through SSR/SSG, code splitting, lazy loading, and image optimization.",
      "I built GitHub Actions CI/CD pipelines with automated linting, type-checking, testing, and preview deployments to support same-day delivery.",
      "I mentored 3-4 mid-level engineers through code reviews, architecture walkthroughs, and pair programming, raising team-wide engineering standards.",
    ],
  },
  {
    company: "Rivo Agency",
    role: "Middle Frontend Engineer",
    period: "October 2021 - April 2022",
    location: "Rivne, Ukraine",
    highlights: [
      "I delivered complex React dashboards for high-frequency data flows using Redux Toolkit and Context API.",
      "I optimized re-render performance across real-time updates and multiple concurrent data streams.",
      "I collaborated directly with product managers and UX/UI designers to turn wireframes and business requirements into accessible, pixel-accurate components.",
      "I improved project stability through systematic PR reviews, linting standards, clean code principles, and frontend architecture best practices.",
    ],
  },
  {
    company: "PRO-IT",
    role: "Frontend Developer",
    period: "July 2017 - September 2021",
    location: "Rivne, Ukraine",
    highlights: [
      "I progressed from HTML/CSS Developer into React development, building a strong foundation in web standards, performance, and component-based thinking.",
      "I created pixel-perfect, cross-browser HTML/CSS layouts and responsive interfaces for 10+ client projects.",
      "I developed accessible React applications and delivered 3+ client projects from design handoff to production.",
      "I integrated Stripe payments and external APIs, handling edge cases, error states, and transaction security for e-commerce functionality.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Core",
    skills: [
      "React 18",
      "Next.js 14/15",
      "TypeScript strict",
      "JavaScript ES2024",
      "Tailwind CSS",
    ],
  },
  {
    title: "State & Data",
    skills: [
      "TanStack Query",
      "Redux Toolkit",
      "Zustand",
      "SWR",
      "Context API",
      "WebSockets",
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      "shadcn/ui",
      "Material UI",
      "Radix UI",
      "Framer Motion",
      "CSS Modules",
      "dnd-kit",
      "Tiptap",
      "Slate",
    ],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Neon", "Prisma ORM", "RESTful APIs", "GraphQL basic"],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Playwright",
      "Vitest",
      "Jest",
      "React Testing Library",
      "Storybook",
      "ESLint",
      "Prettier",
      "WCAG accessibility",
    ],
  },
  {
    title: "Performance & DevOps",
    skills: [
      "Core Web Vitals",
      "Lighthouse",
      "Bundle Optimization",
      "GitHub Actions",
      "Vercel",
      "Cloudflare Workers",
      "Docker basic",
      "Git",
      "Figma",
      "SEO Strategy",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Aivo Platform",
    link: "https://www.aivo.ch",
    subtitle: "Large-Scale SaaS Platform",
    stack: ["Next.js", "TypeScript", "React Query", "WebSockets", "Playwright", "Tiptap", "dnd-kit"],
    description:
      "A long-term production SaaS platform where I owned frontend architecture, real-time collaboration, document workflows, advanced editing interfaces, and testing infrastructure.",
    impact: [
      "I designed component architecture, data-fetching strategy, and testing infrastructure from the ground up.",
      "I delivered real-time collaboration, PDF editing, and rich-text workflows that became core product differentiators.",
      "I introduced a Playwright E2E suite that eliminated entire classes of regression bugs across release cycles.",
      "I led modernization from legacy React to TypeScript, React Query, strict typing, and modular architecture.",
    ],
  },
  {
    name: "Pet Life",
    link: "https://pet-life-sooty.vercel.app",
    subtitle: "Full-Stack Pet Management Platform",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Shadcn UI"],
    description:
      "A full-stack pet health management platform focused on pet profiles, health tracking, appointments, saved moments, locations, food ordering, and future AI-powered behavior analysis.",
    impact: [
      "I designed backend architecture and relational data schema with PostgreSQL and Prisma.",
      "I implemented server components and server actions with the Next.js 15 App Router.",
      "I owned the full lifecycle from database design and API layer to accessible frontend delivery.",
    ],
  },
  {
    name: "JSON UI Forge",
    link: "https://json-ui-forge.andrii-maksymov-1.workers.dev/",
    subtitle: "Dynamic UI Builder Platform",
    stack: ["React", "TypeScript", "JSON Schema", "Cloudflare Workers"],
    description:
      "A platform for dynamically generating user interfaces from JSON configurations, enabling rapid prototyping and runtime UI customization without redeployment.",
    impact: [
      "I designed a schema-driven UI engine that converts JSON into interactive React components.",
      "I supported dynamic forms, component composition, and runtime layout generation for no-code UI creation.",
      "I deployed the product on Cloudflare Workers edge infrastructure for fast global access.",
      "I kept the architecture extensible so new component types can be added without modifying core logic.",
    ],
  },
  {
    name: "Portfolio Score",
    link: "https://portfolio-score-frontend.vercel.app",
    subtitle: "Developer Portfolio Analytics Tool",
    stack: ["React", "Node.js", "GitHub API", "LinkedIn API"],
    description:
      "An automated scoring tool that analyzes GitHub and LinkedIn profiles and gives developers actionable feedback.",
    impact: [
      "I built a developer-focused analytics product around structured, actionable feedback.",
      "I integrated GitHub and LinkedIn data sources for automated profile analysis.",
      "I created scoring logic that translates raw profile signals into practical improvement guidance.",
    ],
  },
];

export const valueCards: ValueCard[] = [
  {
    title: "Greenfield SaaS architecture",
    description:
      "I select the stack, define frontend patterns, and build systems that stay maintainable as product complexity grows.",
  },
  {
    title: "Measurable performance",
    description:
      "I treat Core Web Vitals, Lighthouse scores, bundle size, responsiveness, and SEO as product outcomes.",
  },
  {
    title: "Real-time product systems",
    description:
      "I build WebSocket-driven collaboration, optimistic UI, document workflows, and advanced editing interfaces.",
  },
  {
    title: "Testing and delivery automation",
    description:
      "I improve reliability with Playwright coverage, CI/CD pipelines, preview deployments, linting, and type-checking.",
  },
  {
    title: "Mentorship and team quality",
    description: "I mentor engineers through reviews, architecture walkthroughs, pair programming, and practical delivery habits.",
  },
];

export const certificates = [
  "NodeJS: The Complete Guide (MVC, REST, GraphQL)",
  "React Testing Library with Vitest",
  "JavaScript: The Advanced Concepts",
];
