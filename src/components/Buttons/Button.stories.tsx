import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from ".";

export default {
  title: "Elements/Buttons",
  component: "Button",
  argTypes: {
    variant: {
      control: {
        type: "select",
        values: ["primary", "secondary", "outline"],
      },
    },
  },
} as unknown as ComponentMeta<typeof Button>;

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Primary Button</Button>
);

Primary.args = {
  variant: "primary",
};

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Secondary Button</Button>
);

Secondary.args = {
  variant: "secondary",
};

export const Outline: Story<ButtonProps> = (args) => (
  <Button {...args}>Outline Button</Button>
);

Outline.args = {
  variant: "outline",
};
