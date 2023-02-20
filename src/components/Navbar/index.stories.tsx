import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './index';

import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => {
  return <Navbar {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  icon1: icon,
  icon2: dashboard,
  icon3: movies,
  icon4: series,
  icon5: bookmark,
  icon6: user,
};
