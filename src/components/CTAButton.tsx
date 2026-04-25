import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  disabled?: boolean;
  download?: boolean | string;
  className?: string;
  ariaLabel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href" | "download"> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const variants = {
  primary:
    "border-cyan-300/50 bg-cyan-300 text-slate-950 shadow-glow hover:border-cyan-200 hover:bg-cyan-200",
  secondary:
    "border-white/[0.14] bg-white/[0.055] text-white hover:border-violet-300/[0.45] hover:bg-white/[0.09]",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white",
};

export function CTAButton({
  children,
  href,
  variant = "secondary",
  icon,
  disabled,
  download,
  className,
  ariaLabel,
  ...props
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold outline-none transition duration-200",
    "focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    variants[variant],
    disabled && "cursor-not-allowed border-white/10 bg-white/[0.035] text-slate-500 hover:border-white/10 hover:bg-white/[0.035] hover:text-slate-500",
    className,
  );

  if (!href || disabled) {
    return (
      <button className={classes} type="button" aria-label={ariaLabel} aria-disabled="true" disabled {...props}>
        {icon}
        {children}
      </button>
    );
  }

  return (
    <a className={classes} href={href} aria-label={ariaLabel} download={download} {...props}>
      {icon}
      {children}
    </a>
  );
}
