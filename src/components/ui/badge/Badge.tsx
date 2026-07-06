import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-grc-xs font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "border-brand-light bg-brand-light text-brand-primary",
        success: "border-severity-low-border bg-severity-low-bg text-severity-low-text",
        warning: "border-severity-medium-border bg-severity-medium-bg text-severity-medium-text",
        danger: "border-severity-critical-border bg-severity-critical-bg text-severity-critical-text",
        info: "border-blue-100 bg-blue-50 text-blue-700",
        gray: "border-neutral-border bg-neutral-100 text-neutral-text-muted",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
};