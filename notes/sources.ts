// todo define basic three catagories of misinformation
//todo define location by category

<<<<<<< HEAD:notes/sources.ts

=======
//todo define location by category
>>>>>>> 99a9fc58c736bafb084a80c1ff5d1b44338b6c36:logic/sources.js

export const sources = [
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
<<<<<<< HEAD:notes/sources.ts
    connections: ['taxi', 'pub', 'uncle-eugene'],
    category:'community'
=======
    connections: ['taxi', 'pub', 'auntie'],
    category: 'community',
>>>>>>> 99a9fc58c736bafb084a80c1ff5d1b44338b6c36:logic/sources.js
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
    connections: ['intagram', 'ASDA', 'pub', 'hair salon'],
    category: 'community',
  },
  {
    name: 'asda',
    connections: ['crazy dave', 'opinionated grandpa', 'gym', 'youtube'],
    category: 'community',
  },
  {
<<<<<<< HEAD:notes/sources.ts
    name: 'uncle-eugene',
    connections: ['local cult', 'opinionated grandpa', 'mother-in-law', 'guy at the bus stop'],
    category: 'relations'
  },
  {
    name: 'mother-in-law',
    connections: ['uncle-eugene', 'evil-ex', 'cousin'],
    category: 'relations'
=======
    name: 'auntie',
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
>>>>>>> 99a9fc58c736bafb084a80c1ff5d1b44338b6c36:logic/sources.js
  },
  {
    name: 'cousin',
    connections: ['mother-in-law', 'evil-ex', 'fran from HR'],
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
      'fran from HR',
      'guy at the bus stop',
    ],
    category: 'relations',
  },
  {
    name: 'guy at the bus stop',
<<<<<<< HEAD:notes/sources.ts
    connections: ['uncle-eugene', 'evil-ex', 'crazy dave'],
    category: 'relations'
=======
    connections: ['auntie', 'evil-ex', 'crazy dave'],
    category: 'relations',
>>>>>>> 99a9fc58c736bafb084a80c1ff5d1b44338b6c36:logic/sources.js
  },
  {
    name: 'crazy dave',
    connections: [
      'guy at the bus stop',
      'opinionated grandpa',
      'ASDA',
      'illuminati',
    ],
    category: 'relations',
  },
  {
    name: 'opinionated grandpa',
<<<<<<< HEAD:notes/sources.ts
    connections: ['crazy dave', 'uncle-eugene', 'ASDA'],
    category: 'relations'
=======
    connections: ['crazy dave', 'auntie', 'ASDA'],
    category: 'relations',
>>>>>>> 99a9fc58c736bafb084a80c1ff5d1b44338b6c36:logic/sources.js
  },
  {
    name: 'illuminati',
    connections: ['crazy dave', 'whatsapp', 'youtube'],
    category: 'social',
  },
  {
    name: 'youtube',
    connections: ['illuminati', 'ASDA', 'intagram'],
    category: 'social',
  },
  {
    name: 'intagram',
    connections: ['youtube', 'gym', 'facebook', 'reddit'],
    category: 'social',
  },
  {
    name: 'facebook',
    connections: ['intagram', 'hair salon', 'reddit'],
    category: 'social',
  },
  {
    name: 'reddit',
    connections: ['intagram', 'facebook', 'whatsapp', 'twitter'],
    category: 'social',
  },
  {
    name: 'twitter',
    connections: ['whatsapp', 'reddit'],
    category: 'social',
  },
  {
    name: 'whatsapp',
    connections: ['reddit', 'illuminati', 'tik-tok', 'twitter'],
    category: 'social',
  },
  {
    name: 'tik-tok',
    connections: ['whatsapp'],
    category: 'social',
  },
];
