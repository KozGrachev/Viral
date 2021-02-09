import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
 import { CureDeck,  } from './CureDeck';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'CureDeck',
 component: CureDeck,
  decorators: [withDesign]
} as Meta;

 const Template: Story = () => <CureDeck />

export const setCure = Template.bind({});
setCure.args = {
  hasACureForMisinformationA: false,
  hasACureForMisinformationB: false,
  hasACureForMisinformationC: false,
  
}


