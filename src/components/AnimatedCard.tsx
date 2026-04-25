import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";

type AnimatedCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
};

export function AnimatedCard({ className, interactive = true, children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-lift backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(139,92,246,0.08),rgba(16,185,129,0.1))] before:opacity-0 before:transition-opacity before:duration-500",
        interactive &&
          "transition-colors duration-300 hover:border-cyan-300/[0.35] hover:bg-white/[0.065] hover:before:opacity-100",
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
