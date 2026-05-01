import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

type SectionWrapperProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, eyebrow, title, description, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            className="mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            {eyebrow && (
              <p className="mb-4 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-500">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">{title}</h2>}
            {description && <p className="mt-5 text-base leading-8 text-neutral-500 md:text-xl">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
