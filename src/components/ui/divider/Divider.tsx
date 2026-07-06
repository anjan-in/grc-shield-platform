import React from "react";
import { cn } from "@/lib/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  vertical?: boolean;
}

export const Divider = ({ className, label, vertical, ...props }: DividerProps) => {
  if (vertical) {
    return (
      <div
        className={cn("mx-4 inline-block h-full min-h-[1em] w-px self-stretch bg-neutral-border", className)}
        {...props}
      />
    );
  }

  return (
    <div className={cn("relative my-4 flex items-center w-full", className)} {...props}>
      <div className="flex-grow border-t border-neutral-border"></div>
      {label && <span className="mx-4 shrink-0 text-grc-xs font-medium text-neutral-text-muted">{label}</span>}
      {label && <div className="flex-grow border-t border-neutral-border"></div>}
    </div>
  );
};