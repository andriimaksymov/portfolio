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
    "border-neutral-950 bg-neutral-950 text-white shadow-[0_14px_32px_rgba(3,2,19,0.18)] hover:border-neutral-800 hover:bg-neutral-800",
  secondary:
    "border-neutral-200 bg-white text-neutral-950 shadow-[0_10px_24px_rgba(3,2,19,0.05)] hover:border-neutral-300 hover:bg-neutral-50",
  ghost:
    "border-transparent bg-transparent text-neutral-500 hover:border-neutral-200 hover:bg-white hover:text-neutral-950",
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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold outline-none transition duration-200",
    "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variants[variant],
    disabled && "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400 hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-400",
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
