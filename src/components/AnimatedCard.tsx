import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";

type AnimatedCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
};

export function AnimatedCard({ className, interactive = true, children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-neutral-200/90 bg-white p-6 shadow-[0_18px_44px_rgba(3,2,19,0.05)]",
        "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,rgba(99,102,241,0.8),rgba(59,130,246,0.55),rgba(16,185,129,0.55))] before:opacity-0 before:transition-opacity before:duration-500",
        interactive &&
          "transition duration-300 hover:border-neutral-300 hover:shadow-[0_24px_70px_rgba(3,2,19,0.09)] hover:before:opacity-100",
        className,
      )}
      whileHover={interactive ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
