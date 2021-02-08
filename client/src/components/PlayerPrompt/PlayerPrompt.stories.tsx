import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
 import { PlayerPrompt, PlayerPromptProps } from './PlayerPrompt';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'PlayerPrompt',
 component: PlayerPrompt,
  decorators: [withDesign]
} as Meta;

 const Template: Story<PlayerPromptProps> = () => <PlayerPrompt />

export const Loosing = Template.bind({});
Loosing.args = {
  msg: 'You have lost as usual!'
}
export const cureCreated = Template.bind({});
cureCreated.args = {
  msg: 'you created a cure against misinformation A'
}


