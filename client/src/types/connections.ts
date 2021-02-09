import { Connection } from '../types/gameStateTypes'
export const connections: Connection[] = [
  {
    name: 'high school',
    connections: ['taxi', 'university'],
    category: 'community',
  },
  {
    name: 'taxi',
    connections: ['high school', 'pub', 'local cult'],
    category: 'community',
  },
  {
    name: 'local cult',
    connections: ['taxi', 'pub', 'auntie'],
    category: 'community',
  },
  {
    name: 'pub',
    connections: ['local cult', 'taxi', 'university', 'gym'],
    category: 'community',
  },
  {
    name: 'university',
    connections: ['pub', 'high school', 'hair salon'],
    category: 'community',
  },
  {
    name: 'hair salon',
    connections: ['facebook', 'university', 'gym'],
    category: 'community',
  },
  {
    name: 'gym',
    connections: ['intagram', 'asda', 'pub', 'hair salon'],
    category: 'community',
  },
  {
    name: 'asda',
    connections: ['crazy dave', 'opinionated grandpa', 'gym', 'youtube'],
    category: 'community',
  },
  {
    name: 'uncle eugene',
    connections: [
      'local cult',
      'opinionated grandpa',
      'mother-in-law',
      'guy at the bus stop',
    ],
    category: 'relations',
  },
  {
    name: 'mother-in-law',
    connections: ['auntie', 'evil-ex', 'cousin'],
    category: 'relations',
  },
  {
    name: 'cousin',
    connections: ['mother-in-law', 'evil-ex', 'fran from hr'],
    category: 'relations',
  },
  {
    name: 'fran from hr',
    connections: ['cousin', 'evil-ex'],
    category: 'relations',
  },
  {
    name: 'evil ex',
    connections: [
      'mother-in-law',
      'cousin',
      'fran from hr',
      'guy at the bus stop',
    ],
    category: 'relations',
  },
  {
    name: 'guy at the bus stop',
    connections: ['auntie', 'evil-ex', 'crazy dave'],
    category: 'relations',
  },
  {
    name: 'crazy dave',
    connections: [
      'guy at the bus stop',
      'opinionated grandpa',
      'asda',
      'illuminatify',
    ],
    category: 'relations',
  },
  {
    name: 'opinionated grandpa',
    connections: ['crazy dave', 'auntie', 'asda'],
    category: 'relations',
  },
  {
    name: 'illuminatify',
    connections: ['crazy dave', 'whatsapp', 'youtube'],
    category: 'social',
  },
  {
    name: 'youtube',
    connections: ['illuminatify', 'asda', 'instagram'],
    category: 'social',
  },
  {
    name: 'instagram',
    connections: ['youtube', 'gym', 'facebook', 'reddit'],
    category: 'social',
  },
  {
    name: 'facebook',
    connections: ['instagram', 'hair salon', 'reddit'],
    category: 'social',
  },
  {
    name: 'reddit',
    connections: ['instagram', 'facebook', 'whatsapp', 'twitter'],
    category: 'social',
  },
  {
    name: 'twitter',
    connections: ['whatsapp', 'reddit'],
    category: 'social',
  },
  {
    name: 'whatsapp',
    connections: ['reddit', 'illuminatify', 'tik-tok', 'twitter'],
    category: 'social',
  },
  {
    name: 'tiktok',
    connections: ['whatsapp'],
    category: 'social',
  },
];