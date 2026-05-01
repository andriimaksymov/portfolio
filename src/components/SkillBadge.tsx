import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type SkillBadgeProps = {
  label: string;
  compact?: boolean;
};

export function SkillBadge({ label, compact }: SkillBadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 font-medium text-neutral-600 transition-colors duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700",
        compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm",
      )}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  );
}
