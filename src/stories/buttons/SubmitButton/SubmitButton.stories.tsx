import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SubmitButton } from "./SubmitButton";

export default {
  title: "Buttons/SubmitButton",
  component: SubmitButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  submit: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  submit: true,
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  submit: true,
  size: "small",
  label: "Button",
};
