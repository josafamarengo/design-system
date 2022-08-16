import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { Input, InputProps } from ".";

export default {
  title: "Elements/Inputs",
  component: "Input",
} as unknown as ComponentMeta<typeof Input>;

export const Default: Story<InputProps> = () => <Input />;
