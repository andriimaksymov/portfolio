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
    "9 years building high-performance web products at scale. I architect React/Next.js systems that are fast, maintainable, and built to grow.",
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
      "Architecting greenfield SaaS platforms, leading frontend modernization, and building complex real-time UI systems. Sole frontend decision-maker across multiple long-running production products.",
    impact: [
      "Sub-1s LCP achieved",
      "~40% fewer regressions",
      "3+ platforms architected",
      "4 engineers mentored",
    ],
    tags: ["Next.js 15", "TypeScript", "React Query", "WebSockets", "Playwright", "Tailwind CSS", "dnd-kit", "CI/CD"],
  },
  {
    id: "exp-rivo",
    timelineLabel: "2021 — 2022",
    role: "Middle Frontend Engineer",
    company: "Rivo Agency",
    period: "Oct 2021 – Apr 2022",
    location: "Rivne, Ukraine",
    description:
      "Built high-frequency data dashboards and collaborated cross-functionally with design and product to ship scalable, accessible React applications.",
    tags: ["React", "Redux Toolkit", "Context API", "TypeScript", "REST APIs"],
  },
  {
    id: "exp-proit",
    timelineLabel: "2017 — 2021",
    role: "Frontend Developer",
    company: "PRO-IT",
    period: "Jul 2017 – Sep 2021",
    location: "Rivne, Ukraine",
    badge: { label: "↑ Promoted to React Dev · Nov 2020", tone: "green" },
    description:
      "Started as an HTML/CSS developer building responsive interfaces for 10+ client projects. Promoted to React development after independently transitioning into component-based architecture.",
    tags: ["React", "HTML/CSS", "JavaScript", "Stripe API", "Responsive Design", "Sass"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend Core",
    icon: "code",
    skills: ["React 18", "Next.js 15", "TypeScript", "JavaScript ES2024", "App Router", "RSC", "SSR/SSG/ISR"],
  },
  {
    name: "State & Data",
    icon: "database",
    skills: ["TanStack Query", "Redux Toolkit", "Zustand", "SWR", "WebSockets", "Context API"],
  },
  {
    name: "UI & Styling",
    icon: "style",
    skills: ["Tailwind CSS", "shadcn/ui", "Radix UI", "MUI", "Framer Motion", "CSS Modules"],
  },
  {
    name: "Testing & Quality",
    icon: "shield",
    skills: ["Playwright", "Vitest", "Jest", "React Testing Library", "Storybook", "ESLint"],
  },
  {
    name: "Performance",
    icon: "zap",
    skills: ["Core Web Vitals", "Lighthouse", "Bundle Optimization", "Code Splitting", "Image Optimization", "WCAG"],
  },
  {
    name: "Backend & Tooling",
    icon: "terminal",
    skills: ["Node.js", "PostgreSQL", "Prisma", "GitHub Actions", "Vercel", "Cloudflare Workers", "Docker"],
  },
];

export const projects: ProjectsContent = {
  featured: {
    title: "Aivo Platform",
    description:
      "Long-term production SaaS platform. Sole frontend architect — designed the full component architecture, real-time WebSocket system, PDF editor, rich-text engine, and E2E testing strategy from scratch.",
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
        "End-to-end system for managing pet health records — from PostgreSQL schema design with Prisma, to Next.js 15 server components, to accessible UI. Full ownership.",
      tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Shadcn UI", "Vercel"],
      links: [
        { label: "GitHub", href: profile.github, external: true },
        { label: "Live Demo", href: "https://pet-life-sooty.vercel.app", external: true },
      ],
    },
    {
      label: "Edge tooling",
      title: "JSON UI Forge",
      subtitle: "Schema-Driven UI Builder",
      description:
        "A JSON-to-React rendering engine enabling no-code UI generation. Deployed on Cloudflare Workers edge for global low-latency access. Extensible without touching core logic.",
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
      tags: ["React", "Node.js", "GitHub API"],
      links: [{ label: "GitHub", href: profile.github, external: true }],
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
    "When I'm not writing code, I'm thinking about it. I follow the React and Next.js RFC process, contribute to team architecture decisions, and try to write frontend that future developers will thank me for.",
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
