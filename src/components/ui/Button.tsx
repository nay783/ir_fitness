import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  target,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] whitespace-nowrap min-w-0 max-w-full min-h-[44px] cursor-pointer select-none";

  const variants = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-hover shadow-glow-red border border-brand-red",
    secondary:
      "bg-surface text-text-primary hover:bg-surface-hover border border-border hover:border-border-strong",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-brand-red hover:text-brand-red",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface/60",
  };

  const sizes = {
    sm: "text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md gap-1.5",
    md: "text-xs sm:text-base px-3.5 sm:px-6 py-2.5 rounded-lg gap-2",
    lg: "text-sm sm:text-lg px-4 sm:px-8 py-3 rounded-xl gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
