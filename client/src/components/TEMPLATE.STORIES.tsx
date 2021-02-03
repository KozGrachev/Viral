import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
// import { COMPONENT, COMPONENTPROPS } from './FILENAME';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'TITLEFORSTORYBOOK',
  // component: COMPONENT,
  decorators: [withDesign]
} as Meta;

// const Template: Story<COMPONENTPROPS> = (args: COMPONENTPROPS) => <COMPONENT {...args} />

// export const StoryName = Template.bind({});
// StoryName.args = {
  // PROP: VALUE
// }