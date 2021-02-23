
import { Gamestate} from '../../types/gameStateTypes';

export const initialState: Gamestate = {
  sources: [
  
  ],
  players: [
  ],
  spreadLevel: 1,
  chaosMeter: 0,
  misinformation: {
    community: {
      name: 'Misinfo Type 1',
      debunked: false,
      markersLeft: 16,
    },
    social: {
      name: 'Misinfo Type 2',
      debunked: false,
      markersLeft: 16,
    },
    relations: {
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
  received: false,
  gameOn:false
};