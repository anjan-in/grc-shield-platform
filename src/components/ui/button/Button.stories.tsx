import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
// import { Plus, ShieldAlert, ArrowRight } from "lucide-react";
import { ShieldAlert } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "success", "warning", "danger", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "icon"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Assign Auditor",
  },
};

export const GrcDanger: Story = {
  args: {
    variant: "danger",
    leftIcon: <ShieldAlert className="h-4 w-4" />,
    children: "Escalate Critical Risk",
  },
};

export const LoadingState: Story = {
  args: {
    variant: "primary",
    loading: true,
    children: "Saving Controls",
  },
};