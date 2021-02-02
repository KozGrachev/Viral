//? put obljects here as we use/store stuff

interface Gamestate{
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

interface Source {
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

interface Connections { //! kept client-side
  source01: string[],
  source02: string[],
  source03: string[],
  source04: string[],
  //! these will all be the location names as keys
}

interface Misinformation {
  name: string;
  debunked: boolean;
  markersLeft: number; 
}

interface Card {
  type: string; //? 'connection', 'minformation' or 'viral'
  sourceName: string | null;
}
