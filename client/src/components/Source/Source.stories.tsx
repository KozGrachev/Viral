import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Source, SourceProps } from './Source';
import { withDesign } from 'storybook-addon-designs'
import { ReactComponent as twitterIcon } from '../../assets/twitter-icon.svg'
import { ReactComponent as instagramIcon } from '../../assets/instagram-icon.svg'
import { ReactComponent as facebookIcon } from '../../assets/facebook-icon.svg'
import { ReactComponent as tiktokIcon } from '../../assets/tiktok-icon.svg'
import { ReactComponent as whatsappIcon } from '../../assets/whatsapp-icon.svg'
import { ReactComponent as redditIcon } from '../../assets/reddit-icon.svg'
import { ReactComponent as youtubeIcon } from '../../assets/youtube-icon.svg'
import { ReactComponent as illuminatifyIcon } from '../../assets/illuminatify-icon.svg'
// import { ReactComponent as instagramIcon } from '../../assets/instagram-icon.svg'
// import { ReactComponent as instagramIcon } from '../../assets/instagram-icon.svg'
// import { ReactComponent as instagramIcon } from '../../assets/instagram-icon.svg'
// import { ReactComponent as instagramIcon } from '../../assets/instagram-icon.svg'

export default {
  title: 'Source',
  component: Source,
  decorators: [withDesign]
} as Meta;

const Template: Story<SourceProps> = (args) => <Source {...args} />



// export const HighSchool = Template.bind({});
// HighSchool.args = {
//   name: 'HighSchool',
//   category: 'community'
// }


// export const Taxi = Template.bind({});
// Taxi.args = {
//   name: 'Taxi',
//   category: 'community'
// }

// export const LocalCult = Template.bind({});
// LocalCult.args = {
//   name: 'local cult',
//   category: 'community'
// }

// export const Pub = Template.bind({});
// Pub.args = {
//   name: 'pub',
//   category: 'community'
// }

// export const University = Template.bind({});
// University.args = {
//   name: 'university',
//   category: 'community'
// }

// export const HairSalon = Template.bind({});
// HairSalon.args = {
//   name: 'hair salon',
//   category: 'community'
// }

// export const Gym = Template.bind({});
// Gym.args = {
//   name: 'gym',
//   category: 'community'
// }

// export const ASDA = Template.bind({});
// ASDA.args = {
//   name: 'asda',
//   category: 'community'
// }

// export const Auntie = Template.bind({});
// Auntie.args = {
//   name: 'auntie',
//   category: 'relations'
// }

// export const MotherInLaw = Template.bind({});
// MotherInLaw.args = {
//   name: 'mother-in-law',
//   category: 'relations'
// }

// export const Cousin = Template.bind({});
// Cousin.args = {
//   name: 'cousin',
//   category: 'relations'
// }

// export const FranFromHR = Template.bind({});
// FranFromHR.args = {
//   name: 'fran from hr',
//   category: 'relations'
// }

// export const EvilEx = Template.bind({});
// EvilEx.args = {
//   name: 'evil ex',
//   category: 'relations'
// }

// export const GuyAtTheBusStop = Template.bind({});
// GuyAtTheBusStop.args = {
//   name: 'guy at the bus sto',
//   category: 'relations'
// }

// export const CrazyDave = Template.bind({});
// CrazyDave.args = {
//   name: 'crazy dave',
//   category: 'relations'
// }

// export const OpinionatedGrandpa = Template.bind({});
// OpinionatedGrandpa.args = {
//   name: 'opinionated grandpa',
//   category: 'relations'
// }

export const Illuminati = Template.bind({});
Illuminati.args = {
  name: 'illuminati',
  category: 'social',
  SVGIcon: illuminatifyIcon
}

export const YouTube = Template.bind({});
YouTube.args = {
  name: 'youtube',
  category: 'social',
  SVGIcon: youtubeIcon
}

export const Instagram = Template.bind({});
Instagram.args = {
  name: 'instagram',
  category: 'social',
  SVGIcon: instagramIcon
}

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'facebook',
  category: 'social',
  SVGIcon: facebookIcon
}

export const Reddit = Template.bind({});
Reddit.args = {
  name: 'reddit',
  category: 'social',
  SVGIcon: redditIcon
}

export const Twitter = Template.bind({});
Twitter.args = {
  name: 'twitter',
  category: 'social',
  SVGIcon: twitterIcon
}

export const WhatsApp = Template.bind({});
WhatsApp.args = {
  name: 'whatsapp',
  category: 'social',
  SVGIcon: whatsappIcon
}

export const TikTok = Template.bind({});
TikTok.args = {
  name: 'tik-tok',
  category: 'social',
  SVGIcon: tiktokIcon
}



