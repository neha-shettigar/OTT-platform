import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Register = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Register.args = {
  label: 'Register',
};

export const SignUp = Template.bind({});
SignUp.args = {
  label: 'Sign Up',
};

export const SignIn = Template.bind({});
SignIn.args = {
  label: 'Sign In',
};
