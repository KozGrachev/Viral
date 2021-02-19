export interface Turn {
  player: Player;
  movesLeft: number;
}
export interface Gamestate {
  sources: Source[];
  players: Player[];
  spreadLevel: number;
  chaosMeter: number;
  misinformation: {
    [key: string]: Misinformation, 
    community: Misinformation,
    social: Misinformation,
    relations: Misinformation
  };
  connectionDeck: Card[];
  misinformationDeckActive: Card[];
  misinformationDeckPassive: Card[];
  turnMovesLeft: number;
  dealHistory: number;
  gameWon: boolean;
  gameLost: boolean;
  received: boolean;
}

export interface Player {
  name: string;
  id: string;
  cards: Card[];
  cardHandOverflow: boolean;
  isCurrent: boolean;
  pawnColor: string;
  currentSource: string;
  room: string;
}

export interface Source {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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
  canShare: Player[];
  canDebunk: string[];
}

export interface Misinformation {
  name: string;
  debunked: boolean;
  markersLeft: number;
}

export interface Card {
  cardType: string;
  sourceName: string | null;
  misinfoType: string | null;
}
export interface Connection {
  name: string;
  connections: string[];
  category: string;
}

export interface Socket {
  id: string
  name: string
  room: string
}
export interface IUser {
  name: string;
  id: string;
  room: string;
}

export interface Card {

  cardType: string;
  sourceName: string | null;
  misinfoType: string | null;
}