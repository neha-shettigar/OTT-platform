import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoviesGenre from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MoviesGenre',
  component: MoviesGenre,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MoviesGenre>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoviesGenre> = (args) => {
  return <MoviesGenre {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label1: 'Action',
  label2: 'Adventure',
  label3: 'Anime',
  label4: 'Comedy',
  label5: 'Crime',
  label6: 'Documentary',
  label7: 'Drama',
  label8: 'Family',
  label9: 'Fantasy',
  label10: 'History',
  label11: 'Horror',
  label12: 'Music',
};
