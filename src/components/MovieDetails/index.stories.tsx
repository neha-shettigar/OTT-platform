import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieDetails from './index';
import { data } from '../../data';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MovieDetails',
  component: MovieDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MovieDetails>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieDetails> = (args) => {
  return <MovieDetails {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  poster: data[1].poster,
  title: data[1].title,
  rating: data[1].rating,
  category: data[1].category,
  description: data[1].description,
};
