import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-grc-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 raw-transition",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-white hover:bg-brand-hover active:bg-brand-hover/90",
        secondary: "bg-neutral-border text-neutral-text-main hover:bg-neutral-border/80",
        outline: "border border-neutral-border bg-transparent text-neutral-text-main hover:bg-neutral-page",
        ghost: "bg-transparent text-neutral-text-main hover:bg-neutral-page",
        success: "bg-severity-low-text text-white hover:opacity-90",
        warning: "bg-severity-medium-text text-white hover:opacity-90",
        danger: "bg-severity-critical-text text-white hover:opacity-90",
      },
      size: {
        xs: "h-7 px-2.5 text-grc-xs",
        sm: "h-8 px-3 text-grc-sm",
        md: "h-10 px-4 text-grc-base",
        lg: "h-11 px-6 text-grc-base",
        xl: "h-12 px-8 text-grc-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);