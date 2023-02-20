import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchResult from './index';
import { data } from '../../data';
import bookMark from '../assets/cardLogo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SearchResult',
  component: SearchResult,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchResult>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchResult> = (args) => {
  return <SearchResult {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  icon: bookMark,
  poster: data[0].poster,
  link: data[0].link,
  title: data[0].title,
  rating: data[0].rating,
};

export {};
