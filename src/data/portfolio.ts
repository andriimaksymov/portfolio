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
    "Senior Frontend Engineer with 8+ years building production SaaS applications and 5+ years focused on React, TypeScript, and Next.js.",
  stats: [
    { value: 8, suffix: "+", label: "Years Web Experience" },
    { value: 5, suffix: "+", label: "React / Next.js Years" },
    { value: 3, suffix: "", label: "Selected Projects" },
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
      "Senior frontend owner for production SaaS work: customer-facing analytics, multiple greenfield SaaS applications, high-performance Next.js platforms, e-commerce, document workflows, real-time collaboration, quality automation, and shared frontend standards.",
    impact: [
      "Metabase-powered analytics with charts, dashboards, tables, and reporting",
      "Greenfield SaaS delivery from technical planning through release",
      "Next.js SSR/SSG platforms with 90+ Lighthouse and sub-1s LCP",
      "Payload CMS e-commerce, document workflows, WebSockets, CI/CD, and mentoring",
    ],
    tags: ["React", "Next.js", "TypeScript", "Metabase API", "Payload CMS", "Tiptap", "WebSockets", "Playwright", "GitHub Actions"],
  },
  {
    id: "exp-rivo",
    timelineLabel: "2021 — 2022",
    role: "Middle Frontend Engineer",
    company: "Rivo Agency",
    period: "Oct 2021 – Apr 2022",
    location: "Rivne, Ukraine",
    description:
      "Developed data-intensive React applications and dashboards using Redux Toolkit and Context API, partnering with product, design, and backend teams to ship accessible, responsive interfaces aligned with business requirements.",
    impact: [
      "React dashboards and data-heavy interfaces",
      "Accessible responsive UX with backend collaboration",
      "Pull request reviews, shared standards, and automated linting workflows",
      "Feature planning, estimation, and implementation discussions",
    ],
    tags: ["React", "Redux Toolkit", "Context API", "TypeScript", "REST APIs", "Responsive UI", "Accessibility", "Linting"],
  },
  {
    id: "exp-proit-react",
    timelineLabel: "2020 — 2021",
    role: "Junior React Developer",
    company: "PRO-IT",
    period: "Nov 2020 – Sep 2021",
    location: "Rivne, Ukraine",
    badge: { label: "↑ Promoted to React Dev · Nov 2020", tone: "green" },
    description:
      "Built React-based application components and feature workflows, implementing application state, business logic, API integration, and backend collaboration inside production client projects.",
    impact: [
      "Reusable React component patterns",
      "Application state and business logic delivery",
      "API integration and backend collaboration",
      "Agile production code maintenance and extension",
    ],
    tags: ["React", "JavaScript", "TypeScript", "REST APIs", "Component Architecture", "Agile", "Production Code"],
  },
  {
    id: "exp-proit-html",
    timelineLabel: "2017 — 2020",
    role: "HTML/CSS Developer",
    company: "PRO-IT",
    period: "Jul 2017 – Oct 2020",
    location: "Rivne, Ukraine",
    description:
      "Delivered responsive, cross-browser UI layouts for 10+ client projects, translating design handoff and business requirements into maintainable production interfaces.",
    impact: [
      "10+ responsive client projects",
      "Maintainable Sass-based styling",
      "Accessibility and performance optimization",
      "External APIs, third-party services, payments, auth, and error handling",
    ],
    tags: ["HTML5", "CSS3", "Sass", "JavaScript", "Responsive Design", "Accessibility", "Performance", "External APIs"],
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
    "I build production SaaS applications with a focus on React, TypeScript, and Next.js, combining architecture, scalable component systems, and reliable data-fetching patterns.",
    "My work spans architecting new applications from scratch, modernizing legacy frontend systems without unnecessary rewrites, building customer-facing analytics and data-visualization UIs, and leading frontend delivery from technical planning through release.",
    "I am equally comfortable collaborating across the stack with Node.js, PostgreSQL, and Prisma in remote, cross-functional teams, while using AI-assisted development tools for code review, refactoring, debugging, test generation, and development acceleration.",
  ],
  values: ["Frontend Ownership", "SaaS Delivery", "Performance & Quality"],
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
