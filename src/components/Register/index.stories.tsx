import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Register from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Register',
  component: Register,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Register>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Register> = (args) => {
  return <Register {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Register',
};
export const RegisterUser = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RegisterUser.args = {
  label: 'Register',
  fullName: 'Neha Shettigar',
  email: 'neha@gmail.com',
  password: 'neha@123',
  confirmPassword: 'neha@123',
};
