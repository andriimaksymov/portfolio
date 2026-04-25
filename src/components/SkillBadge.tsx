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
        "inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 font-medium text-slate-700 transition-colors duration-200 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800",
        compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm",
      )}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  );
}
