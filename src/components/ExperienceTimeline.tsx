import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import type { Experience } from "../types";
import { AnimatedCard } from "./AnimatedCard";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <ol className="relative mx-auto max-w-5xl border-l border-slate-200 pl-6 md:pl-10">
      {experiences.map((experience, index) => (
        <motion.li
          key={experience.company}
          className="relative pb-10 last:pb-0"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <span className="absolute -left-[31px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-cyan-600 shadow-[0_0_0_6px_rgba(8,145,178,0.12)] md:-left-[47px]" />
          <AnimatedCard className="p-5 md:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-700">{experience.company}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-950 md:text-2xl">{experience.role}</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <CalendarDays className="h-4 w-4 text-violet-700" aria-hidden="true" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <MapPin className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                  {experience.location}
                </span>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </motion.li>
      ))}
    </ol>
  );
}
