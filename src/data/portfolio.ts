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
  email: "andrii@andriim.dev",
  github: "https://github.com/andriimaksymov",
  linkedin: "https://linkedin.com/in/maksymov-andrii",
  website: "https://andriim.dev",
  cvHref: "/Andrii_Maksymov_CV.pdf",
};

export const navItems: NavItem[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
];

export const hero: HeroContent = {
  status: "Open to senior frontend roles",
  nameLines: ["Andrii", "Maksymov"],
  title: "Senior Frontend Engineer",
  description:
    "Nine years building production web applications, the last five focused on React, TypeScript, and Next.js. I work best on data-heavy product UIs and on moving older frontends onto modern footing without full rewrites.",
};

export const experiences: Experience[] = [
  {
    id: "exp-aivo",
    timelineLabel: "2024 - Now",
    role: "Frontend Engineer",
    company: "Aivo",
    period: "Jun 2024 - Present",
    location: "Remote",
    employmentType: "Contract · Part-time",
    badge: { label: "Current", tone: "green" },
    description:
      "Modernizing a live production frontend (types, server state, tooling) without freezing feature work.",
    highlights: [
      "Migrated the codebase to strict TypeScript, module by module, while it stayed in production.",
      "Moved server state onto React Query and tore out the hand-rolled fetch, loading, and error code spread across components.",
      "Drag-and-drop broke on the React 18 upgrade (react-beautiful-dnd is unmaintained), so replaced it with dnd-kit.",
      "Unified a mix of Ant Design, older MUI, and SCSS Modules into a single MUI component set, with shared styles and design tokens.",
      "Added Playwright coverage on the flows that caused the most regressions (auth, dashboards, account management, configuration, and document workflows), with unit tests on key component and business logic.",
    ],
    tags: ["React", "TypeScript", "React Query", "Material UI", "dnd-kit", "Playwright"],
  },
  {
    id: "exp-movadex",
    timelineLabel: "2022 - 2026",
    role: "Senior Frontend Engineer",
    company: "Movadex",
    period: "May 2022 - Jun 2026",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "Senior frontend engineer shipping React and Next.js products for international clients, mostly data-heavy dashboards and B2B tools.",
    highlights: [
      "Shipped client work across six domains, including analytics, real estate, job search, healthcare, e-commerce, and social impact, usually the only frontend owner from kickoff to launch.",
      "Built the customer-facing analytics product on top of Metabase: onboarding, third-party account connections, and the dashboard layer. Shared charting and table components ended up across 15+ views.",
      "Built a B2B platform from scratch: onboarding, client and admin areas, org and position management, file uploads, and generated PDF reports.",
      "A Next.js search platform for the German market on SSR and SSG, held above Lighthouse 90 with LCP under a second on real content.",
      "An e-commerce build on Next.js, Payload CMS, and Stripe, with CMS content wired through to storefront and checkout.",
      "Started the shared component library and the code-review habits the team kept using after.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Metabase API", "React Query", "Payload CMS", "Stripe", "SSR/SSG"],
  },
  {
    id: "exp-rivo",
    timelineLabel: "2021 - 2022",
    role: "Frontend Engineer (Mid-level)",
    company: "Rivo Agency",
    period: "Oct 2021 - Apr 2022",
    location: "Rivne, Ukraine",
    description:
      "Built CRM and product frontends, and brought in libraries where they actually saved time.",
    highlights: [
      "Internal CRM work: feature planning, and pulling in frontend libraries where they earned their place.",
      "Extended a Next.js beauty-services platform and refactored it as the product grew.",
      "Several Next.js landing pages, Lighthouse 92+ with green Core Web Vitals.",
      "Phase 2 of a US B2C application for ValueSoft, Inc.: frontend improvements and upkeep.",
    ],
    tags: ["React", "Next.js", "Redux Toolkit", "TypeScript", "REST APIs", "Performance"],
  },
  {
    id: "exp-proit",
    timelineLabel: "2017 - 2021",
    role: "Frontend Developer",
    company: "PRO-IT",
    period: "Jul 2017 - Sep 2021",
    location: "Rivne, Ukraine",
    badge: { label: "Grew from HTML/CSS to React", tone: "green" },
    description:
      "Grew from HTML/CSS markup into React and Next.js over four years of production client work.",
    roles: [
      {
        role: "React Developer",
        period: "Nov 2020 - Sep 2021",
        highlights: [
          "Made the jump from HTML and CSS into React and Next.js: first reusable components, first production customer-facing pages.",
          "Built a Next.js site for a B2B video-player product.",
          "Built the integration page where customers picked player settings and got a copy-paste embed script.",
          "Shipped frontend features on the video-player product alongside the existing team.",
        ],
      },
      {
        role: "HTML/CSS Developer",
        period: "Jul 2017 - Oct 2020",
        highlights: [
          "Responsive markup, email templates, and shared CSS libraries for production sites.",
          "Worked on a large B2C video-hosting product: markup, responsive layout, animation, and performance.",
          "Markup for a custom web video player across desktop, tablet, and mobile.",
          "Tuned structure, styles, and assets for load speed and cross-browser stability.",
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
    skills: ["React 18/19", "Next.js 14/15", "App Router", "RSC", "SSR/SSG/ISR", "TypeScript strict", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    name: "State & Data",
    icon: "database",
    skills: ["React Query", "Redux Toolkit", "Zustand", "WebSockets", "REST APIs", "GraphQL basic"],
  },
  {
    name: "UI & Styling",
    icon: "style",
    skills: ["Tailwind CSS", "shadcn/ui", "Material UI (MUI)", "Radix UI", "Framer Motion", "CSS Modules"],
  },
  {
    name: "Backend & DB",
    icon: "terminal",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Payload CMS"],
  },
  {
    name: "Testing & Quality",
    icon: "shield",
    skills: ["Playwright (E2E)", "Vitest", "Jest", "React Testing Library", "Storybook"],
  },
  {
    name: "Performance & Tooling",
    icon: "zap",
    skills: ["Core Web Vitals", "Lighthouse", "Bundle Optimization", "Code Splitting", "Lazy Loading", "GitHub Actions", "Vercel", "Cloudflare Workers", "Docker"],
  },
];

export const projects: ProjectsContent = {
  featured: {
    title: "GitMerit",
    role: "Solo build · full-stack",
    description:
      "A developer profile intelligence platform: turns GitHub activity, a LinkedIn profile, and a resume PDF into hiring-ready scores with evidence-backed fixes.",
    notes: [
      "Deterministic four-dimension GitHub scoring, with AI insights grounded against real repository evidence — ungrounded output is replaced, never rendered.",
      "Resume review shows a side-by-side original vs. improved diff with click-to-explain changes.",
      "Multi-provider AI fallback chain (OpenRouter, OpenAI, Gemini, Groq) with a deterministic fallback, so the full product works with zero API keys.",
    ],
    tags: ["React 19", "NestJS", "TypeScript", "TanStack Query", "AI / LLM", "PostgreSQL"],
    links: [
      { label: "GitHub", href: "https://github.com/andriimaksymov/gitmerit", external: true },
      { label: "Live Demo", href: "https://gitmerit.vercel.app/", external: true },
    ],
  },
  cards: [
    {
      label: "Side project",
      title: "Pawbase",
      subtitle: "Pet health management platform",
      description:
        "A pet health management app: owners keep pets, appointments, and health records in one place.",
      notes: [
        "Designed the relational schema and built it end to end on the Next.js 15 App Router with server components and server actions.",
        "Kept the UI accessible: real labels, keyboard flows, and shadcn/ui primitives.",
      ],
      tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "shadcn/ui"],
      links: [{ label: "Live Demo", href: "https://pet-life-jade.vercel.app/en", external: true }],
    },
    {
      label: "Side project",
      title: "JSON UI Forge",
      subtitle: "JSON-to-UI developer tool",
      description:
        "Turns pasted JSON into an editable form, a table preview, TypeScript interfaces, and generated React component code.",
      notes: [
        "Recursive form generation for nested objects and arrays, with rich previews for images, SVG, and links.",
        "Type checking, linting, tests, and coverage gates run on every change.",
        "Runs on Cloudflare Workers at the edge.",
      ],
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Cloudflare Workers"],
      links: [
        { label: "GitHub", href: "https://github.com/andriimaksymov/json-ui-forge", external: true },
        { label: "Live Demo", href: "https://json-ui-forge.andrii-maksymov-1.workers.dev", external: true },
      ],
    },
  ],
};

export const about: AboutContent = {
  paragraphs: [
    "I'm a frontend engineer with nine years in web development, the last five focused on React, TypeScript, and Next.js. I'm as comfortable starting an app from scratch as I am pulling an older frontend onto modern footing without a full rewrite.",
    "Most of my work has been data-heavy product UIs: analytics, dashboards, big configurable tables. Alongside that, the less glamorous parts I actually enjoy, like JavaScript-to-TypeScript migrations, shared component libraries, React Query, and getting real test coverage in place.",
    "I work across the stack when a feature needs it (Node, PostgreSQL, Prisma) and I'm used to remote, cross-functional teams. I lean on AI tools like Claude Code and Cursor for review, refactoring, and test generation, but I own the code that ships.",
  ],
  values: ["Frontend ownership", "Legacy modernization", "Data-heavy UIs", "Performance & quality"],
  education: [
    {
      institution: "National University of Water Management and Natural Resources",
      credential: "M.Sc. in Hydropower Engineering",
      period: "2011 - 2017",
    },
  ],
  certifications: [
    "Node.js - MVC, REST APIs, GraphQL (Udemy)",
    "React Testing Library with Vitest (Udemy)",
  ],
};

export const contact: ContactContent = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "I'm open to senior frontend roles where React, Next.js, TypeScript, SaaS product work, performance, and practical full-stack thinking matter. Based in Rivne, Ukraine, working remotely with flexible hours across US & EU time zones.",
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
