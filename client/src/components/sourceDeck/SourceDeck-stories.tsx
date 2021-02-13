import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { SourceDeck} from './sourceDeck';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Source Deck',
  component: SourceDeck,
  decorators: [withDesign]
} as Meta;

const Template: Story = (args) => <SourceDeck {...args} />

export const StoryName = Template.bind({});
StoryName.args = {

}