import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputTextField } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/InputTextField',
  component: InputTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputTextField>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextField> = (args) => {
  return <InputTextField {...args} />;
};

export const FullName = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullName.args = {
  label: 'FullName',
  placeholder: 'FullName',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  placeholder: 'Email',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Password',
};

export const ConfirmPassword = Template.bind({});
ConfirmPassword.args = {
  label: 'Confirm Password',
  placeholder: 'ConfirmPassword',
};
