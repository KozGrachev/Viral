import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Source, SourceProps } from './Source';
import { withDesign } from 'storybook-addon-designs'

// import { ReactComponent as twitterIcon } from '../../assets/social/twitter-icon.svg'
// import { ReactComponent as instagramIcon } from '../../assets/social/instagram-icon.svg'
// import { ReactComponent as facebookIcon } from '../../assets/social/facebook-icon.svg'
// import { ReactComponent as tiktokIcon } from '../../assets/social/tiktok-icon.svg'
// import { ReactComponent as whatsappIcon } from '../../assets/social/whatsapp-icon.svg'
// import { ReactComponent as redditIcon } from '../../assets/social/reddit-icon.svg'
// import { ReactComponent as youtubeIcon } from '../../assets/social/youtube-icon.svg'
// import { ReactComponent as illuminatifyIcon } from '../../assets/social/illuminatify-icon.svg'

// import { ReactComponent as highSchoolIcon } from '../../assets/community/highschool-icon.svg'
// import { ReactComponent as taxiIcon } from '../../assets/community/taxi-icon.svg'
// import { ReactComponent as localCultIcon } from '../../assets/community/local-cult-icon.svg'
// import { ReactComponent as hairSalonIcon } from '../../assets/community/hair-salon-icon.svg'
// import { ReactComponent as gymIcon } from '../../assets/community/gym-icon.svg'
// import { ReactComponent as asdaIcon } from '../../assets/community/asda-icon.svg'
// import { ReactComponent as pubIcon } from '../../assets/community/pub-icon.svg'
// import { ReactComponent as universityIcon } from '../../assets/community/university-icon.svg'

// import { ReactComponent as cousinIcon } from '../../assets/relations/cousin-icon.svg'
// import { ReactComponent as guyAtTheBusStop } from '../../assets/relations/guy-at-the-bus-stop.svg'
// import { ReactComponent as crazyDaveIcon } from '../../assets/relations/crazy-dave-icon.svg'
// import { ReactComponent as motherInLawIcon } from '../../assets/relations/mother-in-law-icon.svg'
// import { ReactComponent as franFromHRIcon } from '../../assets/relations/fran-from-hr-icon.svg'
// import { ReactComponent as evilExIcon } from '../../assets/relations/evil-ex-icon.svg'
// import { ReactComponent as opinionatedGrandpaIcon } from '../../assets/relations/opinionated-grandpa-icon.svg'
// import { ReactComponent as uncleEugeneIcon } from '../../assets/relations/uncle-eugene-icon.svg'

export default {
  title: 'Source',
  component: Source,
  decorators: [withDesign]
} as Meta;

const Template: Story<SourceProps> = (args: SourceProps) => <Source {...args} />



export const HighSchool = Template.bind({});
HighSchool.args = {
  name: 'high school',
  // category: 'community',
  // SVGIcon: highSchoolIcon
}


export const Taxi = Template.bind({});
Taxi.args = {
  name: 'taxi',
  // category: 'community',
  // SVGIcon: taxiIcon
}

export const LocalCult = Template.bind({});
LocalCult.args = {
  name: 'local cult',
  // category: 'community',
  // SVGIcon:localCultIcon
}

export const Pub = Template.bind({});
Pub.args = {
  name: 'pub',
  // category: 'community',
  // SVGIcon: pubIcon
}

export const University = Template.bind({});
University.args = {
  name: 'university',
  // category: 'community',
  // SVGIcon: universityIcon
}

export const HairSalon = Template.bind({});
HairSalon.args = {
  name: 'hair salon',
  // category: 'community',
  // SVGIcon:hairSalonIcon
}

export const Gym = Template.bind({});
Gym.args = {
  name: 'gym',
  // category: 'community',
  // SVGIcon:gymIcon
}

export const ASDA = Template.bind({});
ASDA.args = {
  name: 'asda',
  // category: 'community',
  // SVGIcon: asdaIcon
}

export const UncleEugene = Template.bind({});
UncleEugene.args = {
  name: 'uncle eugene',
  // category: 'relations',
  // SVGIcon: uncleEugeneIcon
}

export const MotherInLaw = Template.bind({});
MotherInLaw.args = {
  name: 'mother-in-law',
  // category: 'relations',
  // SVGIcon: motherInLawIcon
}

export const Cousin = Template.bind({});
Cousin.args = {
  name: 'cousin',
  // category: 'relations',
  // SVGIcon: cousinIcon
}

export const FranFromHR = Template.bind({});
FranFromHR.args = {
  name: 'fran from hr',
  // category: 'relations',
  // SVGIcon: franFromHRIcon
}

export const EvilEx = Template.bind({});
EvilEx.args = {
  name: 'evil ex',
  // category: 'relations',
  // SVGIcon: evilExIcon
}

export const GuyAtTheBusStop = Template.bind({});
GuyAtTheBusStop.args = {
  name: 'guy at the bus stop',
  // category: 'relations',
  // SVGIcon: guyAtTheBusStop
}

export const CrazyDave = Template.bind({});
CrazyDave.args = {
  name: 'crazy dave',
  // category: 'relations',
  // SVGIcon: crazyDaveIcon
}

export const OpinionatedGrandpa = Template.bind({});
OpinionatedGrandpa.args = {
  name: 'opinionated grandpa',
  // category: 'relations',
  // SVGIcon : opinionatedGrandpaIcon
}

export const Illuminatify = Template.bind({});
Illuminatify.args = {
  name: 'illuminatify',
  // category: 'social',
  // SVGIcon: illuminatifyIcon
}

export const YouTube = Template.bind({});
YouTube.args = {
  name: 'youtube',
  // category: 'social',
  // SVGIcon: youtubeIcon
}

export const Instagram = Template.bind({});
Instagram.args = {
  name: 'instagram',
  // category: 'social',
  // SVGIcon: instagramIcon
}

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'facebook',
  // category: 'social',
  // SVGIcon: facebookIcon
}

export const Reddit = Template.bind({});
Reddit.args = {
  name: 'reddit',
  // category: 'social',
  // SVGIcon: redditIcon
}

export const Twitter = Template.bind({});
Twitter.args = {
  name: 'twitter',
  // category: 'social',
  // SVGIcon: twitterIcon
}

export const WhatsApp = Template.bind({});
WhatsApp.args = {
  name: 'whatsapp',
  // category: 'social',
  // SVGIcon: whatsappIcon
}

export const TikTok = Template.bind({});
TikTok.args = {
  name: 'tiktok',
  // category: 'social',
  // SVGIcon: tiktokIcon
}



