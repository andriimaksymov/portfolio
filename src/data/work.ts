export type WorkEntry = {
  id: string;
  title: string;
  meta: string; // context line: company / kind
  year: string;
  blurb: string;
  tags: string[];
  href?: string; // live link, if public
  image?: string; // real screenshot, if public
  imageAlt?: string;
};

/**
 * "Selected work" - a real, ordered shortlist (strongest first).
 * Client work is text-only (NDA); personal projects carry real screenshots.
 * No metrics are invented; add them here when the numbers are confirmed.
 */
export const work: WorkEntry[] = [
  {
    id: "gitmerit",
    title: "GitMerit",
    meta: "Full-stack, solo build",
    year: "2026",
    blurb:
      "Turns a developer's GitHub, LinkedIn, and resume PDF into hiring-ready scores with evidence-backed fixes: deterministic scoring, AI insights grounded in real repo evidence, and a side-by-side resume diff with every change explained.",
    tags: ["React", "NestJS", "AI / LLM", "PDF parsing"],
    href: "https://gitmerit.vercel.app/",
    image: "/work/gitmerit.png",
    imageAlt: "GitMerit landing page: a scored developer-profile card next to the analysis form.",
  },
  {
    id: "pawbase",
    title: "Pawbase",
    meta: "Full-stack, solo build",
    year: "2024",
    blurb:
      "A pet health app built end to end on the Next.js 15 App Router: relational Prisma schema, server components and actions, and an accessible UI for pets, appointments, and records.",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://pet-life-jade.vercel.app/en",
    image: "/work/petlife.png",
    imageAlt: "Pawbase dashboard: a calm home screen listing a pet's tasks and medications.",
  },
  {
    id: "json-ui-forge",
    title: "JSON UI Forge",
    meta: "Side project, dev tool",
    year: "2026",
    blurb:
      "A developer tool that turns pasted JSON into an editable form, a table preview, TypeScript interfaces, and generated React component code. Runs on Cloudflare Workers at the edge.",
    tags: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
    href: "https://json-ui-forge.andrii-maksymov-1.workers.dev",
    image: "/work/jsonuiforge.png",
    imageAlt: "JSON UI Forge: the JSON editor beside the generated form and code output.",
  },
];
