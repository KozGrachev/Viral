//todo define basic three catagories of misinformation

// blue = conspiracy (out-there weirdo theories) [unbelievable things]
// red = viral memes? [youth culture type stuff, bad influencers etc]
// yellow = anti-science & new age [more folksy, non-health tips, older people] 


//todo define location by catagory

const sources = [
  {
    name: 'influencer platform',
    connections: ['closed app group', 'university'],
    color: 'red',
  },
  {
    name: 'closed app group',
    connections: ['influencer platform', 'high school', 'comments section'],
    color: 'red',
  },
  {
    name: 'comments section',
    connections: ['closed app group', 'high school', 'podcast'],
    color: 'red',
  },
  {
    name: 'high school',
    connections: ['comments section', 'closed app group', 'university', 'message board'],
    color: 'red',
  },
  {
    name: 'university',
    connections: ['high school', 'influencer platform', 'video platform'],
    color: 'red',
  },
  {
    name: 'video platform',
    connections: ['hair salon', 'university', 'message board'],
    color: 'red',
  },
  {
    name: 'message board',
    connections: ['residents association', 'streaming service', 'high school', 'video platform'],
    color: 'red',
  },
  {
    name: 'streaming service',
    connections: ['crazy daves house', 'taxi driver', 'message board', 'overheard in asda'],
    color: 'red',
  },
  {
    name: 'podcast',
    connections: ['comments section', 'taxi driver', 'history tv', 'gym'],
    color: 'blue',
  },
  {
    name: 'history tv',
    connections: ['podcast', 'dodgy blog', 'gaming clan'],
    color: 'blue',
  },
  {
    name: 'gaming clan',
    connections: ['history tv', 'dodgy blog', 'cinema'],
    color: 'blue',
  },
  {
    name: 'cinema',
    connections: ['gaming clan', 'dodgy blog'],
    color: 'blue',
  },
  {
    name: 'dodgy blog',
    connections: ['history tv', 'gaming clan', 'cinema', 'gym'],
    color: 'blue',
  },
  {
    name: 'gym',
    connections: ['podcast', 'dodgy blog', 'crazy daves house'],
    color: 'blue',
  },
  {
    name: 'crazy daves house',
    connections: ['gym', 'taxi driver', 'streaming service', 'church'],
    color: 'blue',
  },
  {
    name: 'taxi driver',
    connections: ['crazy daves house', 'podcast', 'streaming service'],
    color: 'blue',
  },
  {
    name: 'church',
    connections: ['crazy daves house', 'search engine', 'overheard in asda'],
    color: 'yellow',
  },
  {
    name: 'overheard in asda',
    connections: ['church', 'streaming service', 'residents association'],
    color: 'yellow',
  },
  {
    name: 'residents association',
    connections: ['overheard in asda', 'message board', 'hair salon', 'the pub'],
    color: 'yellow',
  },
  {
    name: 'hair salon',
    connections: ['residents association', 'video platform', 'the pub'],
    color: 'yellow',
  },
  {
    name: 'the pub',
    connections: ['residents association', 'hair salon', 'search engine', 'yoga studio'],
    color: 'yellow',
  },
  {
    name: 'yoga studio',
    connections: ['search engine', 'the pub'],
    color: 'yellow',
  },
  {
    name: 'search engine',
    connections: ['the pub', 'church', 'local cult', 'yoga studio'],
    color: 'yellow',
  },
  {
    name: 'local cult',
    connections: ['search engine'],
    color: 'yellow',
  },
]