import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { NewGameMenu } from './NewGameMenu';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'New Game Menu',
  component: NewGameMenu,
  decorators: [withDesign],
} as Meta;

const Template: Story = () => (
  <NewGameMenu  />
);

export const GameMenu = Template.bind({});
GameMenu.args = {
  title: NewGameMenu,
};
