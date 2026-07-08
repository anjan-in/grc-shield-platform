import { cva } from "class-variance-authority";
import { transitions, focusRings } from "@/lib/variants";

export const buttonVariants = cva(
  `inline-flex items-center justify-center font-medium rounded-grc-subtle select-none border border-transparent disabled:pointer-events-none disabled:opacity-50 ${transitions.colors} ${focusRings.button}`,
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-white hover:bg-brand-hover active:bg-brand-hover/90",
        secondary: "bg-neutral-100 border-neutral-border text-neutral-text-main hover:bg-neutral-200/80 active:bg-neutral-200",
        outline: "border-neutral-border bg-transparent text-neutral-text-main hover:bg-neutral-100 active:bg-neutral-200/50",
        ghost: "bg-transparent text-neutral-text-main hover:bg-neutral-100 active:bg-neutral-200/60",
        success: "bg-severity-low-bg border-severity-low-border text-severity-low-text hover:bg-severity-low-border/40",
        warning: "bg-severity-medium-bg border-severity-medium-border text-severity-medium-text hover:bg-severity-medium-border/40",
        danger: "bg-severity-critical-bg border-severity-critical-border text-severity-critical-text hover:bg-severity-critical-bg/80",
        link: "bg-transparent text-brand-primary border-transparent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        xs: "h-7 px-2 text-grc-xs text-[11px]",
        sm: "h-8 px-3 text-grc-sm",
        md: "h-10 px-4 text-grc-base",
        lg: "h-11 px-5 text-grc-base font-semibold",
        xl: "h-12 px-6 text-grc-lg font-semibold",
        icon: "h-10 w-10 p-0 shrink-0", // <-- Make sure this line exists!
      },
      fullWidth: {
        true: "w-full flex",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);