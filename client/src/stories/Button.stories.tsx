import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
// import { jsxDecorator } from "storybook-addon-jsx";
import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Whazzzup?',
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3k935zN5yVF2G1mi4YvWzD/Untitled?node-id=1%3A8',
  },
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
