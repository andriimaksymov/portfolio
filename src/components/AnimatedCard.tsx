import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";

type AnimatedCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
};

export function AnimatedCard({ className, interactive = true, children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-slate-200/80 bg-white/85 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,rgba(8,145,178,0.08),rgba(124,58,237,0.06),rgba(5,150,105,0.06))] before:opacity-0 before:transition-opacity before:duration-500",
        interactive &&
          "transition-colors duration-300 hover:border-cyan-500/30 hover:bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] hover:before:opacity-100",
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
