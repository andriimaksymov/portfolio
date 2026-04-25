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
    "border-slate-950 bg-slate-950 text-white shadow-[0_14px_34px_rgba(15,23,42,0.2)] hover:border-slate-800 hover:bg-slate-800",
  secondary:
    "border-slate-200 bg-white text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.06)] hover:border-cyan-300 hover:bg-cyan-50/70",
  ghost:
    "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-white/80 hover:text-slate-950",
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
    "focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variants[variant],
    disabled && "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-400",
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
