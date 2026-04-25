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
        "inline-flex items-center rounded-lg border border-white/10 bg-white/[0.055] font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100",
        compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm",
      )}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  );
}

