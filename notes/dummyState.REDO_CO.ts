// this initial state presumes 2 players, 3 locations (one for each color), 3 connection and 3 misinfo cards, and 1 viral card.

const initDummyState: Gamestate = {
  sources: [
    {
      name: 'University',
      color: 'blue',
      markersRed: 0,
      markersYellow: 0,
      markersBlue: 0,
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearRed: false,
      canClearBlue: false,
      canClearYellow: false,
      canShare: [],
      canDebunk: [],
    },
    {
      name: 'Gym',
      color: 'red',
      markersRed: 0,
      markersYellow: 0,
      markersBlue: 0,
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearRed: false,
      canClearBlue: false,
      canClearYellow: false,
      canShare: [],
      canDebunk: [],
    },
    {
      name: 'Instagram',
      color: 'yellow',
      markersRed: 0,
      markersYellow: 0,
      markersBlue: 0,
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearRed: false,
      canClearBlue: false,
      canClearYellow: false,
      canShare: [],
      canDebunk: [],
    },
  ],
  players: [
    {
      name: 'Player 1',
      id: '1234',
      cards: [],
      cardHandOverflow: false,
      isCurrent: true,
      pawnColor: 'green',
      currentSource: 'University'
    },
    {
      name: 'Player 2',
      id: '5678',
      cards: [],
      cardHandOverflow: false,
      isCurrent: true,
      pawnColor: 'purple',
      currentSource: 'University'
    },
  ],
  turnOrder: ['1234','5678'],
  spreadLevel: 1,
  chaosMeter: 0,
  misinformation: {
    red:{
      name: 'Misinfo Type 1', 
      debunked: false,
      markersLeft: 16,
    },
    blue:{
      name: 'Misinfo Type 2',
      debunked: false,
      markersLeft: 16,
    },
    yellow:{
      name: 'Misinfo Type 3',
      debunked: false,
      markersLeft: 16,
    },
  },
  connectionDeck: [
    {
      type: 'connection',
      sourceName: 'University',
      color: 'blue',
    },
    {
      type: 'connection',
      sourceName: 'Gym',
      color: 'red',
    },
    {
      type: 'connection',
      sourceName: 'Instagram',
      color: 'yellow',
    },
    {
      type: 'viral',
      sourceName: null,
      color: null,
    },
  ],
  misinformationDeckActive: [
    {
      type: 'misinformation',
      sourceName: 'University',
      color: 'blue',
    },
    {
      type: 'misinformation',
      sourceName: 'Gym',
      color: 'red',
    },
    {
      type: 'misinformation',
      sourceName: 'Instagram',
      color: 'yellow',
    },
  ],
  misinformationDeckPassive: [],
  turnMovesLeft: 4,
  gameWon: false,
  gameLost: false,
}