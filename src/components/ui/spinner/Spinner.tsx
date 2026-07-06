import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";

const spinnerVariants = cva("animate-spin text-brand-primary", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-8 w-8",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
  fullscreen?: boolean;
}

export const Spinner = ({ className, size, fullscreen, ...props }: SpinnerProps) => {
  const content = <Loader2 className={cn(spinnerVariants({ size }), className)} {...props} />;

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-page/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};