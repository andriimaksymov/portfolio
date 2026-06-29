import type {
  AboutContent,
  ContactContent,
  Experience,
  HeroContent,
  NavItem,
  Profile,
  ProjectsContent,
  SkillGroup,
  SocialLink,
} from "../types";

export const profile: Profile = {
  name: "Andrii Maksymov",
  email: "andrii.maksymov.1@gmail.com",
  github: "https://github.com/andriimaksymov",
  linkedin: "https://linkedin.com/in/maksymov-andrii",
  website: "https://andriim.dev",
  cvHref: "/Andrii_Maksymov_CV.pdf",
};

export const navItems: NavItem[] = [
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
];

export const hero: HeroContent = {
  status: "[ OPEN TO SENIOR FRONTEND ROLES ]",
  nameLines: ["Andrii", "Maksymov"],
  titleRotations: ["Senior Frontend Engineer", "React / Next.js / TypeScript", "SaaS Platforms", "Full-Stack Capable"],
  description:
    "Senior Frontend Engineer with 9 years building production web applications and 5+ years focused on React, TypeScript, and Next.js.",
  stats: [
    { value: 9, suffix: "", label: "Years Web Experience" },
    { value: 5, suffix: "+", label: "React / Next.js Years" },
    { value: 3, suffix: "", label: "Selected Projects" },
    { value: 90, suffix: "+", label: "Lighthouse Score" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-movadex",
    timelineLabel: "2022 — 2026",
    role: "Senior Frontend Engineer",
    company: "Movadex",
    period: "May 2022 – Jun 2026",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "Senior frontend owner shipping React/Next.js products for international clients across analytics, real estate, job-search, healthcare, e-commerce, and social-impact domains.",
    highlights: [
      "Architected and shipped React/Next.js applications across six domains, owning frontend from technical planning through release.",
      "Built a customer-facing analytics product on Metabase data — multi-step onboarding, external account integrations, and the full data-visualization layer (dynamic dashboards, configurable tables, reusable charting logic).",
      "Built a B2B platform from scratch — onboarding, client and admin areas, organization and position management, file uploads, and PDF/report generation — with React Query as the data layer.",
      "Delivered a Next.js search platform for the German market using SSR/SSG, holding Lighthouse 90+ and sub-1s LCP under real content load.",
      "Shipped an e-commerce build on Next.js + Payload CMS + Stripe, wiring CMS-driven content into storefront and payment flows.",
      "Improved frontend maintainability with reusable component architecture, code-review practices, and clearer implementation patterns across projects.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Metabase API", "React Query", "Payload CMS", "Stripe", "SSR/SSG"],
  },
  {
    id: "exp-aivo",
    timelineLabel: "2024 — Now",
    role: "Frontend Engineer",
    company: "Aivo",
    period: "Jun 2024 – Present",
    location: "Remote",
    employmentType: "Contract · Part-time",
    badge: { label: "● Current", tone: "green" },
    description:
      "Modernizing a live production frontend — type safety, server-state, and tooling — without pausing feature delivery.",
    highlights: [
      "Migrated the entire legacy JavaScript codebase to strict TypeScript, eliminating a recurring class of runtime errors.",
      "Made React Query the server-state standard, centralizing caching, loading/error states, and retries previously hand-rolled per component.",
      "Retired deprecated dependencies, including a react-beautiful-dnd → dnd-kit migration to restore drag-and-drop on React 18.",
      "Refactored Ant Design / SCSS screens into a reusable Material UI component set, collapsing one-off styling into one system.",
      "Backfilled unit + Playwright E2E coverage on the five most critical flows, turning silent regressions into pre-merge failures.",
    ],
    tags: ["React", "TypeScript", "React Query", "Material UI", "dnd-kit", "Playwright"],
  },
  {
    id: "exp-rivo",
    timelineLabel: "2021 — 2022",
    role: "Middle Frontend Engineer",
    company: "Rivo Agency",
    period: "Oct 2021 – Apr 2022",
    location: "Rivne, Ukraine",
    description:
      "Built CRM and product frontends, proposing solutions and introducing libraries that improved development speed and maintainability.",
    highlights: [
      "Worked on an internal CRM system — discussing features, proposing solutions, and introducing frontend libraries that improved speed and maintainability.",
      "Developed and extended a Next.js beauty-services platform, adding features and refactoring the codebase for maintainability as the product grew.",
      "Built several Next.js landing-page sites with strong performance — Lighthouse 92 and green Core Web Vitals across the set.",
      "Contributed to Phase 2 of a US B2C application for ValueSoft, Inc., shipping frontend enhancements and maintaining existing functionality.",
    ],
    tags: ["React", "Next.js", "Redux Toolkit", "TypeScript", "REST APIs", "Performance"],
  },
  {
    id: "exp-proit",
    timelineLabel: "2017 — 2021",
    role: "Frontend Developer",
    company: "PRO-IT",
    period: "Jul 2017 – Sep 2021",
    location: "Rivne, Ukraine",
    badge: { label: "↑ Grew HTML/CSS → React", tone: "green" },
    description:
      "Grew from HTML/CSS markup into React and Next.js development, building reusable UI and customer-facing pages for production client projects.",
    roles: [
      {
        role: "Junior React Developer",
        period: "Nov 2020 – Sep 2021",
        highlights: [
          "Moved from HTML/CSS into React and Next.js, building reusable UI components and production-ready customer-facing pages.",
          "Built a Next.js website for a B2B video-player product, helping customers understand it and configure integration options.",
          "Developed an integration page where users selected video-player parameters and generated an embed script for their own sites.",
          "Contributed frontend features to the video-player product alongside an existing engineering team.",
        ],
      },
      {
        role: "HTML/CSS Developer",
        period: "Jul 2017 – Oct 2020",
        highlights: [
          "Built responsive HTML/CSS markup, email templates, reusable layout patterns, and shared CSS libraries for production websites.",
          "Worked on a large B2C video-hosting product — markup, responsive layout, animation, and web performance optimization.",
          "Built responsive, reusable markup for a custom web video player across desktop, tablet, and mobile.",
          "Optimized page structure, styles, and assets to improve loading speed, responsiveness, and cross-browser stability.",
        ],
      },
    ],
    tags: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Sass", "Responsive Design"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend Core",
    icon: "code",
    skills: ["React 18", "Next.js 14/15", "App Router", "RSC", "SSR/SSG/ISR", "TypeScript strict", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    name: "State & Data",
    icon: "database",
    skills: ["Axios", "React Query", "Redux Toolkit", "Zustand", "SWR", "Context API", "WebSockets", "RESTful APIs", "GraphQL basic"],
  },
  {
    name: "UI & Styling",
    icon: "style",
    skills: ["Tailwind CSS", "shadcn/ui", "Material UI (MUI)", "Radix UI", "Framer Motion", "CSS Modules", "Responsive Design"],
  },
  {
    name: "Backend & DB",
    icon: "terminal",
    skills: ["Node.js", "Express.js", "PostgreSQL (Neon)", "Prisma ORM", "Payload CMS", "RESTful APIs", "GraphQL basic"],
  },
  {
    name: "Testing & Quality",
    icon: "shield",
    skills: ["Playwright (E2E)", "Vitest", "Jest", "React Testing Library", "Storybook", "ESLint", "Prettier"],
  },
  {
    name: "Performance & Tooling",
    icon: "zap",
    skills: ["Core Web Vitals", "Lighthouse", "Bundle Optimization", "Code Splitting", "Lazy Loading", "Image Optimization", "GitHub Actions", "Vercel", "Cloudflare Workers", "Docker", "Figma", "Jira"],
  },
];

export const projects: ProjectsContent = {
  featured: {
    title: "Pet Life",
    description:
      "Production-ready pet health management application built with Next.js 15, TypeScript, PostgreSQL, Prisma, shadcn/ui, and Vercel.",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "shadcn/ui", "Vercel"],
    links: [
      { label: "GitHub", href: profile.github, external: true },
      { label: "Live Demo", href: "https://pet-life-jade.vercel.app/en", external: true },
    ],
    achievements: [
      "Designed the relational database schema, backend architecture, server actions, and server component workflows",
      "Built accessible UI components and flows for pet, owner, appointment, and health data management",
      "Used AI tooling to accelerate architecture, validation, UI generation, and implementation while owning the core code",
    ],
  },
  cards: [
    {
      label: "Edge tooling",
      title: "JSON UI Forge",
      subtitle: "Schema-Driven Dynamic UI Builder",
      description:
        "JSON-to-React rendering engine for no-code UI generation, dynamic forms, component composition, and runtime layout generation without redeployment. Designed an extensible schema architecture for layouts, states, validation, and workflows, then deployed it on Cloudflare Workers.",
      tags: ["React", "TypeScript", "JSON Schema", "Cloudflare Workers"],
      links: [
        { label: "GitHub", href: profile.github, external: true },
        { label: "Live Demo", href: "https://json-ui-forge.andrii-maksymov-1.workers.dev", external: true },
      ],
    },
    {
      label: "Devtools",
      title: "Portfolio Score",
      subtitle: "Developer Profile Analytics",
      description:
        "Automated scoring system that ingests GitHub and LinkedIn data to generate structured, actionable profile feedback. Engineered API integration logic and frontend feedback components with a focus on accuracy, security, UX, and product thinking.",
      tags: ["React", "Node.js", "GitHub API", "LinkedIn API"],
      links: [
        { label: "GitHub", href: profile.github, external: true },
        { label: "Live Demo", href: "https://portfolio-score-frontend.vercel.app/", external: true },
      ],
    },
  ],
};

export const about: AboutContent = {
  paragraphs: [
    "I'm a Senior Frontend Engineer with 9 years building production web applications and 5+ years focused on React, TypeScript, and Next.js. I'm equally strong architecting new applications from scratch and modernizing legacy frontend systems without unnecessary rewrites.",
    "My work spans customer-facing analytics and data-visualization UIs, JavaScript-to-TypeScript migrations, scalable component architecture, React Query data-fetching, and Playwright E2E testing — owning frontend delivery from technical planning through release.",
    "I'm comfortable collaborating across the stack with Node.js, PostgreSQL, and Prisma in remote, cross-functional teams, and I lean on AI-assisted tools (Claude Code, Codex, Copilot, Cursor) for code review, refactoring, debugging, and test generation.",
  ],
  values: ["Frontend Ownership", "Legacy Modernization", "SaaS Delivery", "Performance & Quality"],
  education: [
    {
      institution: "National University of Water Management and Natural Resources",
      credential: "M.Sc. in Hydropower Engineering",
      period: "2011 – 2017",
    },
  ],
  certifications: [
    "Node.js — MVC, REST APIs, GraphQL (Udemy)",
    "React Testing Library with Vitest (Udemy)",
    "JavaScript: The Advanced Concepts (Udemy)",
  ],
  terminalTitle: "~/andrii — zsh",
  terminalLines: [
    { className: "prompt", text: "$ " },
    { className: "com", text: "whoami" },
    { newline: 1 },
    { className: "res", text: "andrii.maksymov" },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "cat profile.json | jq '.focus'" },
    { newline: 1 },
    { className: "res", text: '["React", "Next.js", "TypeScript", "SaaS platforms"]' },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "git log --oneline -5" },
    { newline: 1 },
    { className: "hash", text: "a3f2c1b " },
    { className: "res", text: "feat: Metabase analytics charts and reporting" },
    { newline: 1 },
    { className: "hash", text: "9d8e4a0 " },
    { className: "res", text: "perf: sub-1s LCP and Lighthouse 90+" },
    { newline: 1 },
    { className: "hash", text: "b7c3f21 " },
    { className: "res", text: "test: Playwright + RTL regression coverage" },
    { newline: 1 },
    { className: "hash", text: "2e1a9d8 " },
    { className: "res", text: "arch: Next.js 15 pet health platform" },
    { newline: 1 },
    { className: "hash", text: "c5f8b3e " },
    { className: "res", text: "ci: lint, typecheck, test, deploy" },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "echo $STATUS" },
    { newline: 1 },
    { className: "green", text: "open to senior frontend roles" },
    { newline: 1 },
  ],
};

export const contact: ContactContent = {
  eyebrow: "[ 05 — Contact ]",
  title: "Let's work together",
  description:
    "I'm open to senior frontend roles where React, Next.js, TypeScript, SaaS product work, performance, and practical full-stack thinking matter.",
  methods: [
    {
      label: "Email",
      value: profile.email,
      icon: "email",
      copyValue: profile.email,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/maksymov-andrii",
      icon: "linkedin",
      href: profile.linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/andriimaksymov",
      icon: "github",
      href: profile.github,
    },
  ],
};
