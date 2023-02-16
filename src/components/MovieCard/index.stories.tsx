import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieCard from './index';
import poster1 from '../assets/movieCard.svg';
import bookMark from '../assets/cardLogo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/MovieCard',
  component: MovieCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MovieCard>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args) => {
  return <MovieCard {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  poster: poster1,
  review: 'Movie',
  name: 'Uncharted',
  icon: bookMark,
};
