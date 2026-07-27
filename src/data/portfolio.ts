import type {
  AboutContent,
  ContactContent,
  Experience,
  HeroContent,
  Profile,
  SkillGroup,
} from "../types";

export const profile: Profile = {
  name: "Andrii Maksymov",
  email: "andrii@andriim.dev",
  github: "https://github.com/andriimaksymov",
  linkedin: "https://linkedin.com/in/maksymov-andrii",
  website: "https://andriim.dev",
  cvHref: "/Andrii_Maksymov_CV.pdf",
};

export const hero: HeroContent = {
  title: "Senior Frontend Engineer",
  headline: {
    before: "Production React, modernized without ",
    emphasis: "stopping delivery",
    after: ".",
  },
  description:
    "Nine years in web, five in React, TypeScript, and Next.js. I ship data-heavy product UIs end to end, and pull older frontends onto modern footing while the team keeps shipping features.",
};

export const experiences: Experience[] = [
  {
    id: "exp-aivo",
    role: "Senior Frontend Engineer",
    company: "Aivo",
    period: "Jun 2024 - Present",
    location: "Remote",
    employmentType: "Contract · Primary engagement since Jun 2026",
    badge: { label: "Current" },
    description:
      "Modernizing a live production audit platform (types, server state, tooling) without a rewrite, and without freezing feature work.",
    highlights: [
      "Led the migration from JavaScript to strict TypeScript and helped move React 17 to 18, module by module, while the app stayed in production and features kept shipping.",
      "Made React Query the standard for server state, replacing manual Axios calls with reusable query hooks that put caching, loading and error handling, and retries in one place.",
      "Architected and built the flagship data-analysis workspace on a feature-sliced architecture: advanced tables, saved views, working-paper annotations, and account mapping.",
      "Replaced Redux with a leaner Zustand + React Query + URL state split, which cut the state layer down to something maintainable.",
      "Unified three legacy UI stacks into a single MUI v7 design system, with shared components and design tokens, and took Ant Design out of the codebase entirely.",
      "Drag-and-drop broke on the React 18 upgrade (react-beautiful-dnd is unmaintained), so replaced it with dnd-kit, which also improved accessibility and cut bundle size.",
      "Built the frontend testing foundation from scratch (Playwright, Storybook, unit tests) and wired it into CI to protect the flows that caused the most regressions.",
    ],
    tags: ["React", "TypeScript", "React Query", "Zustand", "MUI v7", "dnd-kit", "Playwright", "Storybook"],
  },
  {
    id: "exp-movadex",
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
    role: "Frontend Developer",
    company: "PRO-IT",
    period: "Jul 2017 - Sep 2021",
    location: "Rivne, Ukraine",
    badge: { label: "Grew from HTML/CSS to React" },
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
    skills: ["React 18/19", "Next.js 14/15", "App Router", "RSC", "SSR/SSG/ISR", "TypeScript strict", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    name: "State & Data",
    skills: ["React Query", "Redux Toolkit", "Zustand", "WebSockets", "REST APIs", "GraphQL basic"],
  },
  {
    name: "UI & Styling",
    skills: ["Tailwind CSS", "shadcn/ui", "Material UI (MUI)", "Radix UI", "Framer Motion", "CSS Modules"],
  },
  {
    name: "Backend & DB",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Payload CMS"],
  },
  {
    name: "Testing & Quality",
    skills: ["Playwright (E2E)", "Vitest", "Jest", "React Testing Library", "Storybook"],
  },
  {
    name: "Performance & Tooling",
    skills: ["Core Web Vitals", "Lighthouse", "Bundle Optimization", "Code Splitting", "Lazy Loading", "GitHub Actions", "Vercel", "Cloudflare Workers", "Docker"],
  },
];

export const about: AboutContent = {
  paragraphs: [
    "I'm a frontend engineer with nine years in web development, the last five focused on React, TypeScript, and Next.js. I'm as comfortable starting an app from scratch as I am pulling an older frontend onto modern footing without a full rewrite.",
    "Most of my work has been data-heavy product UIs: analytics, dashboards, big configurable tables. Alongside that, the less glamorous parts I actually enjoy, like JavaScript-to-TypeScript migrations, shared component libraries, React Query, and getting real test coverage in place.",
    "I work across the stack when a feature needs it (Node, PostgreSQL, Prisma) and I'm used to remote, cross-functional teams. I lean on AI tools like Claude Code and Cursor for review, refactoring, and test generation, but I own the code that ships.",
  ],
  values: ["Frontend ownership", "Legacy modernization", "Data-heavy UIs", "Design systems", "Performance & quality"],
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
  description:
    "I'm open to senior frontend roles where React, Next.js, TypeScript, SaaS product work, performance, and practical full-stack thinking matter. Based in Rivne, Ukraine, working remotely with flexible hours across US & EU time zones.",
};
