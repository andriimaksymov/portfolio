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
  status: "[ AVAILABLE FOR WORK ]",
  nameLines: ["Andrii", "Maksymov"],
  titleRotations: ["Senior Frontend Engineer", "React / Next.js Architect", "Product-minded Builder"],
  description:
    "Senior Frontend Engineer with 9+ years building high-performance, production-grade React/Next.js applications at scale.",
  stats: [
    { value: 9, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Projects Shipped" },
    { value: 3, suffix: "+", label: "Engineers Mentored" },
    { value: 90, suffix: "+", label: "Lighthouse Score" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-movadex",
    timelineLabel: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Movadex",
    period: "May 2022 – Present",
    location: "Remote",
    badge: { label: "● Current" },
    description:
      "Architecting greenfield SaaS platforms end-to-end, leading frontend modernization, and building real-time collaboration systems with WebSockets, React Query, TypeScript, and Next.js.",
    impact: [
      "Sub-1s LCP and 90+ Lighthouse scores",
      "~40% fewer regressions",
      "30%+ technical debt reduction",
      "3-4 engineers mentored",
    ],
    tags: ["Next.js 14/15", "TypeScript", "React Query", "WebSockets", "Playwright", "Tailwind CSS", "Tiptap", "dnd-kit", "CI/CD"],
  },
  {
    id: "exp-rivo",
    timelineLabel: "2021 — 2022",
    role: "Middle Frontend Engineer",
    company: "Rivo Agency",
    period: "Oct 2021 – Apr 2022",
    location: "Rivne, Ukraine",
    description:
      "Delivered complex, high-frequency data dashboards with Redux Toolkit and Context API while translating design and product requirements into fast, accessible React interfaces.",
    tags: ["React", "Redux Toolkit", "Context API", "TypeScript", "REST APIs", "Performance"],
  },
  {
    id: "exp-proit",
    timelineLabel: "2017 — 2021",
    role: "Frontend Developer",
    company: "PRO-IT",
    period: "Jul 2017 – Oct 2020 · HTML/CSS Developer; Nov 2020 – Sep 2021 · Junior React Developer",
    location: "Rivne, Ukraine",
    badge: { label: "↑ Promoted to React Dev · Nov 2020", tone: "green" },
    description:
      "Built responsive, accessible web applications for 10+ client projects, integrated Stripe and external APIs, and progressed from HTML/CSS delivery into React component architecture.",
    tags: ["React", "HTML/CSS", "JavaScript", "TypeScript", "Stripe API", "Responsive Design", "Sass"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend Core",
    icon: "code",
    skills: ["React 18", "Next.js 14/15", "TypeScript", "JavaScript ES2024", "App Router", "RSC", "SSR/SSG/ISR"],
  },
  {
    name: "State & Data",
    icon: "database",
    skills: ["TanStack Query", "Redux Toolkit", "Zustand", "SWR", "WebSockets", "Context API", "REST APIs", "GraphQL"],
  },
  {
    name: "UI & Styling",
    icon: "style",
    skills: ["Tailwind CSS", "shadcn/ui", "Radix UI", "MUI", "Framer Motion", "CSS Modules", "Figma"],
  },
  {
    name: "Testing & Quality",
    icon: "shield",
    skills: ["Playwright", "Vitest", "Jest", "React Testing Library", "Storybook", "ESLint", "Prettier"],
  },
  {
    name: "Performance",
    icon: "zap",
    skills: ["Core Web Vitals", "Lighthouse", "Bundle Optimization", "Code Splitting", "Image Optimization", "WCAG", "SEO"],
  },
  {
    name: "Backend & Tooling",
    icon: "terminal",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Neon", "GitHub Actions", "Vercel", "Cloudflare Workers", "Docker"],
  },
];

export const projects: ProjectsContent = {
  featured: {
    title: "Aivo Platform",
    description:
      "Long-term production SaaS platform under NDA. Sole frontend architect — designed the component architecture, real-time WebSocket layer, PDF editor, rich-text engine, and E2E testing strategy from scratch.",
    tags: ["Next.js", "TypeScript", "React Query", "WebSockets", "Playwright", "Tiptap", "dnd-kit"],
    achievements: [
      "Real-time multi-user collaboration system",
      "PDF editor replacing third-party tooling",
      "E2E test suite eliminating regression classes",
    ],
  },
  cards: [
    {
      label: "Full-stack",
      title: "Pet Life",
      subtitle: "Full-Stack Pet Health Platform",
      description:
        "Full-stack pet health management platform built with Next.js 15, TypeScript, PostgreSQL, Prisma, shadcn/ui, and Vercel. Full ownership from schema design to accessible UI.",
      tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Shadcn UI", "Vercel"],
      links: [
        { label: "GitHub", href: profile.github, external: true },
        { label: "Live Demo", href: "https://pet-life-jade.vercel.app/en", external: true },
      ],
    },
    {
      label: "Edge tooling",
      title: "JSON UI Forge",
      subtitle: "Schema-Driven Dynamic UI Builder",
      description:
        "A JSON-to-React rendering engine for no-code dynamic UI generation. Deployed on Cloudflare Workers edge for global low-latency access with an extensible schema-first architecture.",
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
        "Automated scoring tool that ingests GitHub and LinkedIn profile data to generate structured, actionable feedback for developers.",
      tags: ["React", "Node.js", "GitHub API", "LinkedIn API"],
      links: [
        { label: "GitHub", href: profile.github, external: true },
        { label: "Live Demo", href: "https://portfolio-score-frontend.vercel.app/", external: true },
      ],
    },
    {
      label: "Coming next",
      title: "More in the lab",
      subtitle: "",
      description:
        "A streaming-first design-system tooling project is currently in development. Reach out for early access.",
      tags: [],
      links: [{ label: "Get in touch", href: "#contact" }],
      variant: "placeholder",
    },
  ],
};

export const about: AboutContent = {
  paragraphs: [
    "I've spent the last 9 years obsessing over how the web is built. Not just making things that look good — making things that are fast, scalable, and maintainable six months after launch.",
    "I started cutting HTML/CSS back in 2017 and never stopped pushing forward — from hand-coded layouts to React architecture, from client scripts to building real-time SaaS platforms. I care about the whole system: performance budgets, test coverage, CI pipelines, and the naming of variables.",
    "When I'm not writing code, I'm thinking about how teams ship better software. I care about the bridge between product, design, and engineering: readable architecture, useful tests, clean handoffs, and frontend that future developers can actually maintain.",
  ],
  values: ["Product Thinking", "High Ownership", "Performance First"],
  terminalTitle: "~/andrii — zsh",
  terminalLines: [
    { className: "prompt", text: "$ " },
    { className: "com", text: "whoami" },
    { newline: 1 },
    { className: "res", text: "andrii.maksymov" },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "cat skills.json | jq '.core'" },
    { newline: 1 },
    { className: "res", text: '["React", "Next.js", "TypeScript"]' },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "git log --oneline -5" },
    { newline: 1 },
    { className: "hash", text: "a3f2c1b " },
    { className: "res", text: "feat: real-time collab via WebSockets" },
    { newline: 1 },
    { className: "hash", text: "9d8e4a0 " },
    { className: "res", text: "perf: LCP < 1s, Lighthouse 90+" },
    { newline: 1 },
    { className: "hash", text: "b7c3f21 " },
    { className: "res", text: "test: E2E coverage via Playwright" },
    { newline: 1 },
    { className: "hash", text: "2e1a9d8 " },
    { className: "res", text: "arch: migrated to TypeScript strict" },
    { newline: 1 },
    { className: "hash", text: "c5f8b3e " },
    { className: "res", text: "init: greenfield SaaS platform" },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "echo $STATUS" },
    { newline: 1 },
    { className: "green", text: "open to remote opportunities" },
    { newline: 1 },
  ],
};

export const contact: ContactContent = {
  eyebrow: "[ 05 — Contact ]",
  title: "Let's work together",
  description:
    "I'm currently open to senior frontend and frontend architect roles — remote, full-time or contract. If you're building something ambitious, I'd love to hear about it.",
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
