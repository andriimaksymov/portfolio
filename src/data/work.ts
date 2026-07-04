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
    id: "pet-life",
    title: "Pet Life",
    meta: "Full-stack, solo build",
    year: "2024",
    blurb:
      "A pet health app built end to end on the Next.js 15 App Router: relational Prisma schema, server components and actions, and an accessible UI for pets, appointments, and records.",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://pet-life-jade.vercel.app/en",
    image: "/work/petlife.png",
    imageAlt: "Pet Life dashboard: a calm home screen listing a pet's tasks and medications.",
  },
  {
    id: "json-ui-forge",
    title: "JSON UI Forge",
    meta: "Side project, edge tooling",
    year: "2024",
    blurb:
      "A rendering engine that turns a JSON schema into a live React UI with no redeploy to change it. New component types plug in without touching the core. Runs on Cloudflare Workers at the edge.",
    tags: ["React", "TypeScript", "JSON Schema", "Cloudflare Workers"],
    href: "https://json-ui-forge.andrii-maksymov-1.workers.dev",
    image: "/work/jsonuiforge.png",
    imageAlt: "JSON UI Forge: a schema editor beside the live-rendered React interface it produces.",
  },
  {
    id: "portfolio-score",
    title: "Portfolio Score",
    meta: "Side project, dev tool",
    year: "2024",
    blurb:
      "Scores a developer's presence across GitHub, LinkedIn, and a resume PDF, then shows a side-by-side diff against an AI-rewritten version with every change explained. Built the multi-provider AI layer, the API, and the feedback UI.",
    tags: ["React", "NestJS", "AI / LLM", "PDF parsing"],
    href: "https://portfolio-score-frontend.vercel.app/",
    image: "/work/portfolioscore.png",
    imageAlt: "Portfolio Score: a resume analysis view with a side-by-side original and rewritten diff.",
  },
];
