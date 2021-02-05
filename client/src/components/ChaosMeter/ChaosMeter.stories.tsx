import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChaosMeter, ChaosMeterProps } from './ChaosMeter';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Chaos Meter',
  component: ChaosMeter,
  decorators: [withDesign],
} as Meta;

const Template: Story<ChaosMeterProps> = (args: ChaosMeterProps) => (
  <ChaosMeter {...args} />
);

export const ChaosMeterComponent = Template.bind({});
ChaosMeterComponent.args = {
  title: 'Chaos Meter',
};
