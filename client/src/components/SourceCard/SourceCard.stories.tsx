import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SourceCard, SourceCardProps } from './SourceCard';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Source Card',
  component: SourceCard,
  decorators: [withDesign]
} as Meta;

const Template: Story<SourceCardProps> = (args: SourceCardProps) => <SourceCard {...args} />

export const HighSchool = Template.bind({});
HighSchool.args = {
  name: 'high school',
}


export const Taxi = Template.bind({});
Taxi.args = {
  name: 'taxi',
}

export const LocalCult = Template.bind({});
LocalCult.args = {
  name: 'local cult',
}

export const Pub = Template.bind({});
Pub.args = {
  name: 'pub',
}

export const University = Template.bind({});
University.args = {
  name: 'university',
}

export const HairSalon = Template.bind({});
HairSalon.args = {
  name: 'hair salon',
}

export const Gym = Template.bind({});
Gym.args = {
  name: 'gym',
}

export const ASDA = Template.bind({});
ASDA.args = {
  name: 'asda',
}

export const UncleEugene = Template.bind({});
UncleEugene.args = {
  name: 'uncle eugene',
}

export const MotherInLaw = Template.bind({});
MotherInLaw.args = {
  name: 'mother-in-law',
}

export const Cousin = Template.bind({});
Cousin.args = {
  name: 'cousin',
}

export const FranFromHR = Template.bind({});
FranFromHR.args = {
  name: 'fran from hr',
}

export const EvilEx = Template.bind({});
EvilEx.args = {
  name: 'evil ex',
}

export const GuyAtTheBusStop = Template.bind({});
GuyAtTheBusStop.args = {
  name: 'guy at the bus stop',
}

export const CrazyDave = Template.bind({});
CrazyDave.args = {
  name: 'crazy dave',
}

export const OpinionatedGrandpa = Template.bind({});
OpinionatedGrandpa.args = {
  name: 'opinionated grandpa',
}

export const Illuminatify = Template.bind({});
Illuminatify.args = {
  name: 'illuminatify',
}

export const YouTube = Template.bind({});
YouTube.args = {
  name: 'youtube',
}

export const Instagram = Template.bind({});
Instagram.args = {
  name: 'instagram',
}

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'facebook',
}

export const Reddit = Template.bind({});
Reddit.args = {
  name: 'reddit',
}

export const Twitter = Template.bind({});
Twitter.args = {
  name: 'twitter',
}

export const WhatsApp = Template.bind({});
WhatsApp.args = {
  name: 'whatsapp',
}

export const TikTok = Template.bind({});
TikTok.args = {
  name: 'tiktok',
}