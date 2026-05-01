import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import type { Experience } from "../types";
import { AnimatedCard } from "./AnimatedCard";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

const accents = [
  { dot: "bg-indigo-600", ring: "shadow-[0_0_0_6px_rgba(99,102,241,0.12)]", text: "text-indigo-600" },
  { dot: "bg-blue-600", ring: "shadow-[0_0_0_6px_rgba(59,130,246,0.12)]", text: "text-blue-600" },
  { dot: "bg-emerald-600", ring: "shadow-[0_0_0_6px_rgba(16,185,129,0.12)]", text: "text-emerald-600" },
];

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <ol className="relative border-l border-neutral-200 pl-6 md:pl-14">
      {experiences.map((experience, index) => {
        const accent = accents[index % accents.length];

        return (
          <motion.li
            key={experience.company}
            className="relative pb-10 last:pb-0"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className={`absolute -left-[33px] top-7 h-5 w-5 rounded-full border-4 border-white ${accent.dot} ${accent.ring} md:-left-[67px]`} />
            <AnimatedCard className="p-6 md:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className={`text-sm font-semibold ${accent.text}`}>{experience.company}</p>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-950 md:text-2xl">{experience.role}</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-500">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2">
                    <CalendarDays className="h-4 w-4 text-indigo-500" aria-hidden="true" />
                    {experience.period}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2">
                    <MapPin className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    {experience.location}
                  </span>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-500">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </motion.li>
        );
      })}
    </ol>
  );
}
