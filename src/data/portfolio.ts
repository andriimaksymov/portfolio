import type { Experience, Project, SkillGroup, ValueCard } from "../types";

export const profile = {
  name: "Andrii Maksymov",
  title: "Senior Front-End React Developer",
  location: "Remote / Ukraine",
  email: "andrii.maksymov.1@gmail.com",
  linkedin: "https://linkedin.com/in/maksymov-andrii/?skipRedirect=true",
  github: "https://github.com/andriimaksymov",
  headline:
    "I build scalable, high-performance React and Next.js products from architecture to production.",
  summary:
    "Andrii specializes in React, Next.js, TypeScript, frontend architecture, performance optimization, SEO, CI/CD, and product-focused engineering.",
};

export const experiences: Experience[] = [
  {
    company: "Movadex",
    role: "Senior Front-End React Developer",
    period: "May 2022 - Present",
    location: "Remote",
    highlights: [
      "Architected and deployed multiple high-stakes greenfield platforms from scratch.",
      "Defined foundational tech stacks using Next.js, TypeScript, React Query.",
      "Designed scalable system architecture for long-term maintainability.",
      "Implemented code review processes.",
      "Mentored junior and mid-level developers.",
      "Modernized legacy systems into performant, type-safe React architectures.",
      "Reduced technical debt and maintenance overhead.",
      "Owned frontend DevOps lifecycle.",
      "Built CI/CD pipelines and automated deployment workflows.",
      "Improved team velocity and time-to-production.",
      "Optimized performance and implemented SEO strategies.",
      "Delivered fast, user-centric applications with sub-second response times.",
      "Improved organic traffic through technical SEO.",
    ],
  },
  {
    company: "Rivo Agency",
    role: "Middle Front-End React Developer",
    period: "October 2021 - April 2022",
    location: "Rivne",
    highlights: [
      "Built high-performance React applications.",
      "Designed complex state management using Redux and Context API.",
      "Handled high-frequency data flows.",
      "Worked with product managers and UX/UI designers.",
      "Converted business requirements into scalable, accessible, user-centric features.",
      "Applied clean code principles and architectural best practices.",
      "Reduced technical debt and improved sustainability.",
    ],
  },
  {
    company: "PRO-IT",
    role: "Junior Front-End React Developer",
    period: "November 2020 - September 2021",
    location: "Rivne",
    highlights: [
      "Developed interactive web applications with modern React component architecture.",
      "Built responsive interfaces.",
      "Integrated third-party APIs.",
      "Worked with Stripe payment gateway.",
      "Integrated external data services.",
      "Improved platform functionality, data integrity, and transaction security.",
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
      "Architected and delivered an end-to-end health tracking system.",
      "Designed database schema and relational integrity with PostgreSQL and Prisma.",
      "Implemented modern Next.js server components.",
      "Demonstrated full-lifecycle ownership from database design to frontend delivery.",
    ],
  },
  {
    name: "Portfolio Score",
    subtitle: "Developer Portfolio Analytics Tool",
    stack: ["React", "Node.js", "GitHub API"],
    description:
      "An automated scoring tool that analyzes GitHub profiles and gives developers actionable feedback.",
    impact: [
      "Built a developer-focused analytics product.",
      "Integrated GitHub API.",
      "Created automated profile analysis and scoring logic.",
      "Demonstrated product thinking and commitment to the engineering community.",
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
