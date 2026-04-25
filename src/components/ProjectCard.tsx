import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "../types";
import { AnimatedCard } from "./AnimatedCard";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <AnimatedCard className="flex h-full flex-col p-5 md:p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-lg border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800">
            <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
            Case study
          </p>
          <h3 className="text-2xl font-semibold text-slate-950">{project.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-cyan-700" aria-hidden="true" />
      </div>

      <p className="text-sm leading-6 text-slate-600">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <SkillBadge key={item} label={item} compact />
        ))}
      </div>

      <div className="mt-7 border-t border-slate-200 pt-6">
        <p className="mb-3 text-sm font-semibold text-slate-950">Impact</p>
        <ul className="space-y-3">
          {project.impact.map((impact) => (
            <li key={impact} className="flex gap-3 text-sm leading-6 text-slate-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
              <span>{impact}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}
