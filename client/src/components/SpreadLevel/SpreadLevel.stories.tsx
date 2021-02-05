import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SpreadLevel, SpreadLevelProps } from './SpreadLevel';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'SpreadLevel',
   component: SpreadLevel,
  decorators: [withDesign]
} as Meta;

 const Template: Story<SpreadLevelProps> = (args: SpreadLevelProps) => <SpreadLevel {...args} />

export const SpreadLevelOne = Template.bind({});
SpreadLevelOne.args = {
  spreadLevel: 3
}