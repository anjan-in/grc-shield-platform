import React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  extra?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, subtitle, extra, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-grc-card border border-neutral-border bg-neutral-surface shadow-grc-flat p-5",
          className
        )}
        {...props}
      >
        {(title || subtitle || extra) && (
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              {title && <h3 className="text-grc-lg font-semibold text-neutral-text-main tracking-tight">{title}</h3>}
              {subtitle && <p className="text-grc-sm text-neutral-text-muted mt-0.5">{subtitle}</p>}
            </div>
            {extra && <div className="shrink-0">{extra}</div>}
          </div>
        )}
        <div>{children}</div>
      </div>
    );
  }
);
Card.displayName = "Card";