import type { Experience, Project, SkillGroup, ValueCard } from "../types";

export const profile = {
  name: "Andrii Maksymov",
  title: "Senior Front-End React Developer",
  email: "andrii.maksymov.1@gmail.com",
  linkedin: "https://linkedin.com/in/maksymov-andrii/?skipRedirect=true",
  github: "https://github.com/andriimaksymov",
  headline:
    "I build scalable, high-performance React and Next.js products from architecture to production.",
  summary:
    "I specialize in React, Next.js, TypeScript, frontend architecture, performance optimization, SEO, CI/CD, and product-focused engineering.",
};

export const experiences: Experience[] = [
  {
    company: "Movadex",
    role: "Senior Front-End React Developer",
    period: "May 2022 - Present",
    location: "Remote",
    highlights: [
      "I architected and deployed multiple high-stakes greenfield platforms from scratch.",
      "I defined foundational tech stacks using Next.js, TypeScript, and React Query.",
      "I designed scalable system architecture for long-term maintainability.",
      "I implemented code review processes.",
      "I mentored junior and mid-level developers.",
      "I modernized legacy systems into performant, type-safe React architectures.",
      "I reduced technical debt and maintenance overhead.",
      "I owned the frontend DevOps lifecycle.",
      "I built CI/CD pipelines and automated deployment workflows.",
      "I improved team velocity and time-to-production.",
      "I optimized performance and implemented SEO strategies.",
      "I delivered fast, user-centric applications with sub-second response times.",
      "I improved organic traffic through technical SEO.",
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
      "Shadcn UI",
    ],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Neon", "Prisma ORM", "RESTful APIs"],
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
    skills: ["Git", "ESLint", "Figma", "Storybook"],
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
    name: "Pet Life",
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
    name: "Portfolio Score",
    subtitle: "Developer Portfolio Analytics Tool",
    stack: ["React", "Node.js", "GitHub API"],
    description:
      "An automated scoring tool that analyzes GitHub profiles and gives developers actionable feedback.",
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
  "NodeJS: The Complete Guide - MVC, REST, GraphQL",
  "React Testing Library with Vitest",
  "JavaScript: The Advanced Concepts",
];
