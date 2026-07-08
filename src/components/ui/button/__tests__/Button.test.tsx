// import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";

describe("Button Component Behavior Matrix", () => {
  it("renders children text natively", () => {
    render(<Button>Create Compliance Target</Button>);
    expect(screen.getByRole("button", { name: /create compliance target/i })).toBeInTheDocument();
  });

  it("applies standard browser safety properties like type='button' by default", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("blocks user click executions and targets aria-busy states during active loading status", async () => {
    const handleClick = vi.fn();
    render(<Button loading onClick={handleClick}>Process Log</Button>);
    
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});