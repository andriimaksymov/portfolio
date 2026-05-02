import { cn } from "../utils/cn";

type SkillBadgeProps = {
  label: string;
  compact?: boolean;
};

export function SkillBadge({ label, compact }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 font-medium text-neutral-600 transition-colors duration-150 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700",
        compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm",
      )}
    >
      {label}
    </span>
  );
}
