//? put obljects here as we use/store stuff

//Time to save the world!!

export interface Turn {
  player: Player;
  movesLeft: number;
}// do we need a turn export interface to keep track of how many actions left etc?

//* STATE

export interface Gamestate {
  sources: Source[];
  players: Player[];
  spreadLevel: number; // 0,1,2 or 3
  chaosMeter: number;
  misinformation: {
    community: Misinformation,
    social: Misinformation,
    relations: Misinformation
  };
  connectionDeck: Card[];
  misinformationDeckActive: Card[];
  misinformationDeckPassive: Card[];
  turnMovesLeft: number;
  dealHistory: number; //? this is needed for the discardCard funtion to return back to where it was called from, and is the noOfCards parameter passed to boardActions
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
  canShare: Player[];
  canDebunk: string[];
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

export interface Connection {
  name: string;
  connections: string[];
  category: string;
}

//Redux Types
//Redux  TypeChecking Action - BELOW ARE EXAMPLES 

export const MOVE_ACTION = 'MOVE_ACTION'
export const CLEAR_MISINFO = 'CLEAR_MISINFO'
export const SHARE_CARD = 'SHARE_CARD'
export const LOG_ON_OFF = 'LOG_ON_OFF'
export const DEBUNK_MISINFO = 'DEBUNK_MISINFO'
export const DISCARD_ACTION = 'DISCARD_ACTION'
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE'

export interface MoveActionProps {
  oldState: Gamestate,
  currentPlayerID: Player['id'],
  location: Source['name']
}
export interface MoveAction {
  type: typeof MOVE_ACTION
  payload: MoveActionProps;
}

export interface ClearmisinfoProps {
  oldState: Gamestate,
  currentPlayerID: Player['id'],
  misinfoType: Misinformation['name'],
  location: Source['name']
}
export interface ClearMisinfoAction {
  type: typeof CLEAR_MISINFO
  payload: ClearmisinfoProps;
}



export interface ShareCardAction {
  type: typeof SHARE_CARD
  payload: ShareCardProps;
}


export interface ShareCardProps {
  oldState: Gamestate,
  currentPlayerID: Player['id'],
  recipient: Player['id'],
  sharedCard: Card['sourceName']

}

export interface logOnOffProps {
  oldState: Gamestate,
  currentPlayerID: Player['id'],
  location: Source['name'],
  usedCard: Card['sourceName']
}
export interface logOnOffPropsAction {
  type: typeof LOG_ON_OFF
  payload: logOnOffProps;
}

export interface DebunkMisinfoAction {
  type: typeof DEBUNK_MISINFO,
  payload: DebunkMisinfoProps
}


export interface DebunkMisinfoProps {
  oldState: Gamestate,
  currentPlayerID: Player['id'],
  usedCards: Card['sourceName'][],
  misinfoType: Misinformation['name']
}

export interface discardCardProps {
  oldState: Gamestate,
  currentPlayerID: Player['id'],
  discardedCard: Card['sourceName']

}

export interface discardCardAction {
  type: typeof DISCARD_ACTION,
  payload: discardCardProps
}

interface UpdateGameStateAction {
  type: typeof UPDATE_GAME_STATE
  payload: Gamestate
}

export type GameStateActionTypes =
  MoveAction | ClearMisinfoAction | ShareCardAction | logOnOffPropsAction |
  DebunkMisinfoAction | discardCardAction | UpdateGameStateAction
