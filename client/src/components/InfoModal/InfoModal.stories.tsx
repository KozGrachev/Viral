// import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InfoModal, InfoModalProps } from './InfoModal';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Info Modal',
  component: InfoModal,
  decorators: [withDesign],
} as Meta;

// const [show, setShow] = useState(false);
const Template: Story<InfoModalProps> = (args: InfoModalProps) => (
  <div>
    <button>Open Model</button>
    <InfoModal {...args} />
  </div>
);

export const InformationModal = Template.bind({});
InformationModal.args = {
  title: 'Info Modal',
};
