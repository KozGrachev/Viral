// this initial state presumes 2 players, 3 locations (one for each color), 3 connection and 3 misinfo cards, and 1 viral card. 

import {Gamestate,Card,Source, Player, Misinformation, Connection} from './objects.REDO'

const initDummyState: Gamestate = {
  sources: [
    {
      name: 'University', 
      color: 'blue',
      markers_red: 0,
      markers_yellow: 0,
      markers_blue: 0,
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
      markers_red: 0,
      markers_yellow: 0,
      markers_blue: 0,
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
      markers_red: 0,
      markers_yellow: 0,
      markers_blue: 0,
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
  spreadLevel: 1,
  chaosMeter: 0,
  misinformation: {
    community:{
      name: 'Misinfo Type 1',
      debunked: false,
      markersLeft: 16, 
    },
    social:{
      name: 'Misinfo Type 2',
      debunked: false,
      markersLeft: 16, 
    },
    relations:{
      name: 'Misinfo Type 3',
      debunked: false,
      markersLeft: 16, 
    },
  },
  connectionDeck: [
    {
      cardType: 'connection',
      sourceName: 'University',
      misinfoType: 'blue',
    },
    {
      cardType: 'connection',
      sourceName: 'Gym',
      misinfoType: 'red',
    },
    {
      cardType: 'connection',
      sourceName: 'Instagram',
      misinfoType: 'yellow',
    },
    {
      cardType: 'viral',
      sourceName: null,
      misinfoType: null,
    },
  ],
  misinformationDeckActive: [
    {
      cardType: 'misinformation',
      sourceName: 'University',
      misinfoType: 'blue',
    },
    {
      cardType: 'misinformation',
      sourceName: 'Gym',
      misinfoType: 'red',
    },
    {
      cardType: 'misinformation',
      sourceName: 'Instagram',
      misinfoType: 'yellow',
    },
  ],
  misinformationDeckPassive: [],
  turnMovesLeft: 4,
  dealHistory: 0,
  gameWon: false,
  gameLost: false,
}