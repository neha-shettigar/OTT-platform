import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CarouselComponent from './index';
// import bookMark from '../assets/cardLogo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/CarouselComponent',
  component: CarouselComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CarouselComponent>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CarouselComponent> = () => {
  return <CarouselComponent />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
