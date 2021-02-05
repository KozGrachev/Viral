import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { OtherPlayer, OtherPlayerProps } from './OtherPlayer';
import { withDesign } from 'storybook-addon-designs'
import { connections } from '../../types/connections'
// import { Connection } from '../../../../logic/objects.REDO'

export default {
  title: 'Other Player',
  component: OtherPlayer,
  decorators: [withDesign]
} as Meta;

const Template: Story<OtherPlayerProps> = (args: OtherPlayerProps) => <OtherPlayer {...args} />

console.log('CONNECTION::::', connections[0]);

export const StoryName1 = Template.bind({});
StoryName1.args = {
  player: {
    name: 'Konstantin',
    // id: '5678',
    cards: [
      connections[Math.floor(Math.random() * (connections.length - 1))],
    ],
    cardHandFull: false,
    isCurrent: true,
    pawnColor: 'fuchsia',
    currentSource: 'University'
  },
}

for (let i = 0; i < 20; i++) {
  const r1 = Math.floor(Math.random() * (connections.length - 1));
  console.log(r1, '   : ', connections[r1])
}



export const StoryName2 = Template.bind({});
StoryName2.args = {
  player: {
    name: 'Connor',
    // id: '5678',
    cards: [
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],

    ],
    cardHandFull: false,
    isCurrent: true,
    pawnColor: 'yellow',
    currentSource: 'University'
  },
}

export const StoryName3 = Template.bind({});
StoryName3.args = {
  player: {
    name: 'Ana',
    // id: '5678',
    cards: [
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
    ],
    cardHandFull: false,
    isCurrent: true,
    pawnColor: 'green',
    currentSource: 'University'
  },
}

export const StoryName4 = Template.bind({});
StoryName4.args = {
  player: {
    name: 'Till',
    // id: '5678',
    cards: [
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
    ],
    cardHandFull: false,
    isCurrent: true,
    pawnColor: 'blue',
    currentSource: 'University'
  },
}

export const StoryName5 = Template.bind({});
StoryName5.args = {
  player: {
    name: 'Chris',
    // id: '5678',
    cards: [
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
      connections[Math.floor(Math.random() * (connections.length - 1))],
    ],
    cardHandFull: false,
    isCurrent: true,
    pawnColor: 'purple',
    currentSource: 'University'
  },
}

export const StoryName6 = Template.bind({});
StoryName6.args = {
  player: {
    name: 'Malcolm',
    // id: '5678',
    cards: [
      connections[15],
      connections[16],
      connections[17],
      connections[18],
      connections[19],
    ],
    cardHandFull: false,
    isCurrent: true,
    pawnColor: 'fuchsia',
    currentSource: 'University'
  },
}