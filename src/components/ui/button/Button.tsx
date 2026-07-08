import React from "react";
import { cn } from "@/lib/cn";
import { buttonVariants } from "./button.variants";
import { type ButtonProps } from "./button.types";
import { Loader2 } from "lucide-react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      type = "button",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Determine active state flags for screen readers
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={isDisabled}
        aria-busy={loading ? "true" : undefined}
        {...props}
      >
        {/* Loading Spinner Core */}
        {loading && (
          <Loader2 
            className={cn(
              "animate-spin shrink-0", 
              size === "xs" ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"
            )} 
            aria-hidden="true" 
          />
        )}

        {/* Left Icon Render */}
        {!loading && leftIcon && (
          <span className={cn("inline-flex shrink-0", size === "xs" ? "mr-1" : "mr-2")} aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Main Content Element */}
        {size === "icon" && !loading ? (
          <span className="inline-flex shrink-0">{leftIcon || children}</span>
        ) : (
          <span className="truncate">{children}</span>
        )}

        {/* Right Icon Render */}
        {!loading && rightIcon && size !== "icon" && (
          <span className="inline-flex shrink-0 ml-2" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";