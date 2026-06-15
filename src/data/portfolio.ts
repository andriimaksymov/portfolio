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
  titleRotations: ["Senior Frontend Engineer", "React / Next.js Specialist", "SaaS Frontend Owner"],
  description:
    "Senior Frontend Engineer with 8+ years in web development and 5+ years focused on production React, Next.js, and TypeScript SaaS platforms.",
  stats: [
    { value: 8, suffix: "+", label: "Years Web Experience" },
    { value: 5, suffix: "+", label: "React / Next.js Years" },
    { value: 4, suffix: "", label: "Large Builds Owned" },
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
      "Built a customer-facing analytics platform on the Metabase API (charts, data tables, reports) and shipped multiple SaaS platforms from scratch to production, owning frontend planning, delivery, shared standards, CI/CD, and performance across React and Next.js products.",
    impact: [
      "Customer-facing Metabase analytics platform",
      "90+ Lighthouse and sub-1s LCP",
      "Payload CMS e-commerce + SSR/SSG marketing sites",
      "Shared standards adopted; juniors mentored",
    ],
    tags: ["React", "Next.js 14/15", "TypeScript", "Metabase API", "Payload CMS", "GitHub Actions", "Core Web Vitals", "SSR/SSG", "CI/CD"],
  },
  {
    id: "exp-aivo",
    timelineLabel: "2024 — Present",
    role: "Senior Frontend Engineer",
    company: "Aivo",
    period: "Jun 2024 – Present",
    location: "Contract · Part-time · Remote",
    badge: { label: "● Contract" },
    description:
      "Frontend owner on a multi-year commercial SaaS product with active customers, modernizing a legacy React codebase into a strict TypeScript, React Query, Material UI, and real-time document workflow platform.",
    impact: [
      "Strict TypeScript migration",
      "Reusable MUI component library",
      "PDF + Tiptap document workflows",
      "WebSocket collaboration + Playwright E2E",
    ],
    tags: ["React", "TypeScript strict", "React Query", "Material UI", "WebSockets", "Tiptap", "dnd-kit", "Playwright", "Jest/RTL"],
  },
  {
    id: "exp-rivo",
    timelineLabel: "2021 — 2022",
    role: "Middle Frontend Engineer",
    company: "Rivo Agency",
    period: "Oct 2021 – Apr 2022",
    location: "Rivne, Ukraine",
    description:
      "Developed data-intensive React applications and dashboards with Redux Toolkit and Context API while partnering with product, design, and backend teams on accessible, responsive interfaces.",
    impact: ["Data-heavy dashboards delivered", "PR reviews and linting workflows", "Feature planning and estimation"],
    tags: ["React", "Redux Toolkit", "Context API", "TypeScript", "REST APIs", "Responsive UI", "Accessibility"],
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
      "Delivered responsive, cross-browser interfaces for 10+ client projects, then progressed into React application delivery with reusable components, third-party integrations, and production deployment support.",
    impact: ["10+ client projects", "Promoted into React development", "Payments, auth, and API integrations"],
    tags: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Sass", "Responsive Design", "External APIs"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend Core",
    icon: "code",
    skills: ["React 18", "Next.js 14/15", "App Router", "RSC", "SSR/SSG/ISR", "TypeScript strict", "JavaScript ES6+", "HTML5/CSS3"],
  },
  {
    name: "State & Data",
    icon: "database",
    skills: ["TanStack Query", "Redux Toolkit", "Zustand", "SWR", "Context API", "WebSockets", "RESTful APIs", "GraphQL basics"],
  },
  {
    name: "UI & Styling",
    icon: "style",
    skills: ["Tailwind CSS", "shadcn/ui", "Material UI", "Radix UI", "Framer Motion", "CSS Modules", "Responsive Design", "Figma"],
  },
  {
    name: "Testing & Quality",
    icon: "shield",
    skills: ["Playwright", "Vitest", "Jest", "React Testing Library", "Storybook", "ESLint", "Prettier"],
  },
  {
    name: "Performance & SEO",
    icon: "zap",
    skills: ["Core Web Vitals", "Lighthouse", "Bundle Optimization", "Code Splitting", "Lazy Loading", "Image Optimization", "WCAG", "SEO Strategy"],
  },
  {
    name: "Backend & DevOps",
    icon: "terminal",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Payload CMS", "Neon", "Vercel", "Cloudflare Workers", "GitHub Actions", "Docker", "Jira"],
  },
];

export const projects: ProjectsContent = {
  featured: {
    title: "Aivo Platform",
    description:
      "Multi-year commercial SaaS product with active customers. Frontend owner for the React Query data layer, Material UI design system, strict TypeScript migration, document workflows, rich-text/PDF editing, WebSocket collaboration, and test coverage.",
    tags: ["React", "TypeScript strict", "React Query", "Material UI", "WebSockets", "Tiptap", "dnd-kit", "Playwright"],
    achievements: [
      "Migrated JavaScript codebase to strict TypeScript",
      "Reusable accessible component library replacing legacy CSS",
      "Real-time document collaboration with optimistic UI",
    ],
  },
  cards: [
    {
      label: "Full-stack",
      title: "Pet Life",
      subtitle: "Full-Stack Pet Health Platform",
      description:
        "Full-stack pet health management platform built with Next.js 15, TypeScript, PostgreSQL, Prisma, shadcn/ui, and Vercel. Designed the relational schema, backend architecture, server components, server actions, and accessible UI end to end.",
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
        "JSON-to-React rendering engine for no-code UI generation, dynamic forms, component composition, and runtime layout generation without redeployment. Deployed on Cloudflare Workers edge for global low-latency access.",
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
        "Automated scoring system that ingests GitHub and LinkedIn data to generate structured, actionable profile feedback for developers and demonstrate product-thinking plus API integration depth.",
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
        "Full-stack and design-system experiments are currently in development. Reach out if you want the deeper code walkthrough.",
      tags: [],
      links: [{ label: "Get in touch", href: "#contact" }],
      variant: "placeholder",
    },
  ],
};

export const about: AboutContent = {
  paragraphs: [
    "I build and ship production SaaS interfaces, modernize legacy frontend systems, and raise product quality through component architecture, reliable data-fetching patterns, testing, and performance work.",
    "Across Movadex and Aivo, I've owned frontend delivery from technical planning to release: React/Next.js architecture, React Query layers, strict TypeScript migrations, design systems, CI/CD, test coverage, and Core Web Vitals improvements.",
    "Alongside frontend depth, I bring practical full-stack range with Node.js, PostgreSQL, Prisma, Payload CMS, REST/GraphQL APIs, and modern cloud deployment tooling. I like remote teams where product, design, backend, and frontend stay close enough to make sharp decisions.",
  ],
  values: ["Frontend Ownership", "Product Quality", "Performance & Testing"],
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
    { className: "res", text: '["React", "Next.js", "TypeScript strict", "SaaS"]' },
    { newline: 2 },
    { className: "prompt", text: "$ " },
    { className: "com", text: "git log --oneline -5" },
    { newline: 1 },
    { className: "hash", text: "a3f2c1b " },
    { className: "res", text: "feat: typed document workflows with Tiptap" },
    { newline: 1 },
    { className: "hash", text: "9d8e4a0 " },
    { className: "res", text: "perf: sub-1s LCP and Lighthouse 90+" },
    { newline: 1 },
    { className: "hash", text: "b7c3f21 " },
    { className: "res", text: "test: Playwright + RTL regression coverage" },
    { newline: 1 },
    { className: "hash", text: "2e1a9d8 " },
    { className: "res", text: "arch: JavaScript to TypeScript strict" },
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
    "I'm open to senior frontend and frontend architecture roles where React, Next.js, TypeScript, SaaS product work, performance, and practical full-stack thinking matter.",
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
