//* STATE

export interface Gamestate{
  sources: Source[];
  players: Player[];
  turnOrder: string[];
  spreadLevel: number; 
  chaosMeter: number;
  misinformation: {
    red:Misinformation,
    blue:Misinformation,
    yellow:Misinformation
  };
  connectionDeck: Card[];
  misinformationDeckActive: Card[];
  misinformationDeckPassive: Card[];
  turnMovesLeft: number;
  gameWon: boolean;
  gameLost: boolean;
}

interface Player { 
  name: string; 
  id: string;
  cards: Card[];
  cardHandOverflow: boolean;
  isCurrent: boolean; 
  pawnColor: string;
  currentSource: string;
}

export interface Source {
  name: string; 
  color: string;
  markersRed: number;
  markersYellow: number;
  markersBlue: number;
  canMove: boolean;
  canLogOn: boolean;
  canLogOff: boolean;
  canClearRed: boolean;
  canClearBlue: boolean;
  canClearYellow: boolean;
  canShare: Player[]; //? arrray of Players at same location
  canDebunk: string[]; //? array of misinfos possible to debunk at this location?
}

interface Misinformation {
  name: string;
  debunked: boolean;
  markersLeft: number; 
}

export interface Card {
  type: string; //? 'connection', 'minformation' or 'viral'
  sourceName: string | null;
  color: string | null;
}

//* CLIENT

interface Connections { //! kept client-side
  source01: string[],
  source02: string[],
  source03: string[],
  source04: string[],
  source05: string[],
  source06: string[],
  source07: string[],
  source08: string[],
  source09: string[],
  source10: string[],
  source11: string[],
  source12: string[],
  source13: string[],
  source14: string[],
  source15: string[],
  source16: string[],
  source17: string[],
  source18: string[],
  source19: string[],
  source20: string[],
  source21: string[],
  source22: string[],
  source23: string[],
  source24: string[],
  //! these will all be the location names as keys
}