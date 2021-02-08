import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { PlayerPawn, PlayerPawnProps } from './PlayerPawn';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Player Pawn',
  component: PlayerPawn,
  decorators: [withDesign],
} as Meta;

const Template: Story<PlayerPawnProps> = (args: PlayerPawnProps) => (
  <PlayerPawn {...args} />
);

export const Player = Template.bind({});
Player.args = {
  colour: '',
};
