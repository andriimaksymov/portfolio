import type { Experience, Project, SkillGroup, ValueCard } from "../types";

export const profile = {
  name: "Andrii Maksymov",
  title: "Senior Front-End React Developer",
  email: "andrii.maksymov.1@gmail.com",
  linkedin: "https://www.linkedin.com/in/maksymov-andrii/",
  github: "https://github.com/andriimaksymov",
  headline:
    "I design and build scalable React and Next.js systems that perform.",
  summary:
    "I own frontend architecture, performance, SEO, CI/CD, and product-focused delivery for modern React products.",
};

export const experiences: Experience[] = [
  {
    company: "Movadex",
    role: "Senior Front-End React Developer",
    period: "May 2022 - Present",
    location: "Remote",
    highlights: [
      "I architected and delivered greenfield platforms with Next.js, TypeScript, React Query, and scalable architecture from day one.",
      "I led frontend modernization initiatives, migrating legacy codebases to hooks, modular architecture, and type-safe React patterns.",
      "I built complex UI systems including WebSocket-powered real-time features, rich text editors, PDF editing tools, and dnd-kit drag-and-drop interfaces.",
      "I designed and implemented Playwright end-to-end testing strategy to improve release stability and reduce regressions.",
      "I developed CI/CD pipelines and deployment workflows that improved delivery speed and reliability.",
      "I mentored developers, conducted code reviews, and enforced frontend best practices across projects.",
      "I optimized performance and SEO, achieving sub-second load times and stronger search visibility.",
    ],
  },
  {
    company: "Rivo Agency",
    role: "Middle Front-End React Developer",
    period: "October 2021 - April 2022",
    location: "Rivne",
    highlights: [
      "I built high-performance React applications.",
      "I designed complex state management using Redux and Context API.",
      "I handled high-frequency data flows.",
      "I worked with product managers and UX/UI designers.",
      "I converted business requirements into scalable, accessible, user-centric features.",
      "I applied clean code principles and architectural best practices.",
      "I reduced technical debt and improved sustainability.",
    ],
  },
  {
    company: "PRO-IT",
    role: "Junior Front-End React Developer",
    period: "November 2020 - September 2021",
    location: "Rivne",
    highlights: [
      "I developed interactive web applications with modern React component architecture.",
      "I built responsive interfaces.",
      "I integrated third-party APIs.",
      "I worked with Stripe payment gateway.",
      "I integrated external data services.",
      "I improved platform functionality, data integrity, and transaction security.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js 15",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "MUI",
      "Shadcn UI",
      "dnd-kit",
    ],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Neon", "Prisma ORM", "RESTful APIs", "Cloudflare Workers"],
  },
  {
    title: "Engineering Quality",
    skills: [
      "Playwright",
      "Vitest",
      "Jest",
      "React Testing Library",
      "CI/CD",
      "Storybook",
      "Web Performance Optimization",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "ESLint", "Figma"],
  },
  {
    title: "Leadership",
    skills: [
      "Architectural Design",
      "Technology Selection",
      "Code Review",
      "Technical Mentorship",
      "SEO Strategy",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Aivo Platform",
    link: "https://www.aivo.ch",
    subtitle: "Large-Scale SaaS Platform",
    stack: ["React", "TypeScript", "React Query", "WebSockets", "dnd-kit"],
    description:
      "A long-term production SaaS platform with real-time collaboration, document workflows, advanced editing interfaces, and a modernized frontend architecture.",
    impact: [
      "I designed and evolved frontend architecture for a long-term production system.",
      "I implemented WebSocket-powered real-time features for live updates and collaboration.",
      "I developed advanced PDF editor, rich text editing, and document workflow interfaces.",
      "I led migration from a legacy codebase to TypeScript, React Query, and modular architecture.",
      "I introduced unit and end-to-end testing strategy to improve stability and reduce regressions.",
    ],
  },
  {
    name: "Pet Life",
    link: "https://pet-life-sooty.vercel.app",
    subtitle: "Full-Stack Pet Management Platform",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Shadcn UI"],
    description:
      "A full-stack pet management platform focused on health tracking, pet profiles, appointments, saved moments, locations, food ordering, and future AI-powered behavior analysis.",
    impact: [
      "I architected and delivered an end-to-end health tracking system.",
      "I designed database schema and relational integrity with PostgreSQL and Prisma.",
      "I implemented modern Next.js server components.",
      "I owned the full lifecycle from database design to frontend delivery.",
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
      "I built flexible support for dynamic form rendering, component composition, and runtime layout generation.",
      "I enabled low-code and no-code UI creation flows that reduce development effort.",
      "I focused the architecture on extensibility so new components can be added without changing core logic.",
      "I deployed the product on Cloudflare Workers for fast global edge access.",
    ],
  },
  {
    name: "Portfolio Score",
    link: "https://portfolio-score-frontend.vercel.app",
    subtitle: "Developer Portfolio Analytics Tool",
    stack: ["React", "Node.js", "GitHub API"],
    description:
      "An automated scoring tool that analyzes GitHub and LinkedIn profiles and gives developers actionable feedback.",
    impact: [
      "I built a developer-focused analytics product.",
      "I integrated the GitHub API.",
      "I created automated profile analysis and scoring logic.",
      "I shaped the product around practical feedback for developers.",
    ],
  },
];

export const valueCards: ValueCard[] = [
  {
    title: "Architecture from day one",
    description:
      "I design frontend systems that can scale, evolve, and stay maintainable as product complexity grows.",
  },
  {
    title: "Performance as a feature",
    description:
      "I treat speed, responsiveness, bundle size, and SEO as core parts of the user experience.",
  },
  {
    title: "Product-focused delivery",
    description:
      "I work closely with product and design teams to turn business requirements into user-centered technical solutions.",
  },
  {
    title: "Engineering quality",
    description:
      "I improve codebases through testing, code review, clean architecture, and strong development workflows.",
  },
  {
    title: "Team growth",
    description: "I mentor developers and help teams build better engineering habits.",
  },
];

export const certificates = [
  "NodeJS: The Complete Guide (MVC, REST, GraphQL)",
  "React Testing Library with Vitest",
  "JavaScript: The Advanced Concepts",
];
