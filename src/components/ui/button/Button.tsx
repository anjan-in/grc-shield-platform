import React from "react";
import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";
import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";