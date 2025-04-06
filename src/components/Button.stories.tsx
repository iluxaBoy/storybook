import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button.tsx";

const meta = {
    component: Button,
    title: "Components/Button",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: 'select',
            options: ["primary", "secondary"]
        }
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        text: "Button",
    },
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        text: "Button",
    },
}