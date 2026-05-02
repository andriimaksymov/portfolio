import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";

type AnimatedCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
};

export function AnimatedCard({ className, interactive = true, children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-neutral-200/90 bg-white p-6",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-transparent before:transition before:duration-150 before:ease-out",
        interactive &&
          "transition-[transform,border-color,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-neutral-50/70 hover:before:ring-indigo-100",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
