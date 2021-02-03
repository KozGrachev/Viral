//* STATE

export interface Gamestate{
  sources: Source[];
  players: Player[];
  turnOrder: string[];
  spreadLevel: number; 
  chaosMeter: number;
  misinformation: {
    community:Misinformation,
    social:Misinformation,
    relations:Misinformation
  };
  connectionDeck: Card[];
  misinformationDeckActive: Card[];
  misinformationDeckPassive: Card[];
  turnMovesLeft: number;
  gameWon: boolean;
  gameLost: boolean;
}

export interface Player { 
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
  misinfoType: string;
  markers_community: number;
  markers_social: number;
  markers_relations: number;
  canMove: boolean;
  canLogOn: boolean;
  canLogOff: boolean;
  canClearCommunity: boolean;
  canClearSocial: boolean;
  canClearRelations: boolean;
  canShare: Player[]; //? arrray of Players at same location
  canDebunk: string[]; //? array of misinfos possible to debunk at this location?
}

export interface Misinformation {
  name: string;
  debunked: boolean;
  markersLeft: number; 
}


export interface Card {
  cardType: string; //? 'connection', 'minformation' or 'viral'
  sourceName: string | null;
  misinfoType: string | null;
}

//* CLIENT

export interface Connections { //! kept client-side
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