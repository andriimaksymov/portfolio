import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "../types";
import { AnimatedCard } from "./AnimatedCard";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const gradients = [
  "from-blue-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-indigo-500 to-violet-500",
];

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      <AnimatedCard className="flex h-full cursor-pointer flex-col p-0">
        <div className={`h-1 bg-gradient-to-r ${gradient}`} />
        <div className="p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-500">
                <Layers3 className="h-3.5 w-3.5 text-indigo-500" aria-hidden="true" />
                {project.subtitle}
              </p>
              <h3 className="text-2xl font-semibold text-neutral-950 md:text-3xl">{project.name}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-500">{project.description}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition group-hover:text-indigo-600" aria-hidden="true" />
          </div>

          <div className="mb-7 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <SkillBadge key={item} label={item} compact />
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {project.impact.map((impact) => (
              <div key={impact} className="flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-500">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </a>
  );
}
