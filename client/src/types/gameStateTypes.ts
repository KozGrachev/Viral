//? put obljects here as we use/store stuff

//Time to save the world!!

export interface Turn {
  player: Player;
  movesLeft: number;
}// do we need a turn export interface to keep track of how many actions left etc?



export interface GameState {
  received: boolean;
  sources: Source[];
  players: Player[];
  spreadLevel: number; // [2, 2, 3, 4]
  chaosMeter: number;
  misinformation: {
    red: Misinformation,
    blue: Misinformation,
    yellow: Misinformation
  }; //! sits better as an object
  connectionDeck: ConnectionDeck;
  misinformationDeck: MisinformationDeck;
  currentTurn: Turn
}
export interface Player {
  name: string;
  cardHandFull: boolean;
  cards: ConnectionCard[];
  isCurrent: boolean;
  pawnColor: string;
  // role:Role, 
  currentSource: Source,
}

// export interface Role {
//   name:string; 
//   moves: number; 
//   otherSpecialAbility:string; 

// }

export interface Source {
  // id:number; ? is this needed ?
  name: string;
  color: string;
  //! Removed player from source, current location fits better on Player
  markers: Marker[];
  //? these below checks indicate whether a player can perform actions on the source at any point, such as moving to it, logging on/off, etc
  canMove: boolean;
  canLogOn: boolean;
  canLogOff: boolean;
  canClearRed: boolean;
  canClearBlue: boolean;
  canClearYellow: boolean;
  canShare: Player[]; //? arrray of Players at same location
  canDebunk: string[]; //? array of misinfos possible to debunk at this location?
}

export interface Connections { //! kept client-side
  source01: string[],
  source02: string[],
  source03: string[],
  source04: string[],
  //! these will all be the location names as keys
}

export interface Marker {
  color: string
}


export interface MarkerStatus {
  red: number;
  blue: number;
  yellow: number
}

export interface Misinformation {
  name: string;
  debunked: boolean;
  //! Eradicated removed as not in this verison of the game
  markersLeft: number;
}


type ViralCard = { // Constant
  action: string
  //? what does viral card need to contain? can cards be integrated?
}

export interface ConnectionCard { // Contant
  source: Source;
  color: Source['color'];
}

export interface ConnectionDeck {
  active: [ConnectionCard | ViralCard];
  //! passive removed as cards just destroyed
}


export interface MisinformationCard {
  source: Source;
}


export interface MisinformationDeck {
  active: MisinformationCard[];
  passive: MisinformationCard[];

}

//Redux Types
//Redux  TypeChecking Action - BELOW ARE EXAMPLES 

export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE'
export const UPDATE_PLAYER_LOCATION = 'UPDATE_PLAYER_MOVE'
export const UPDATE_MOVES_LEFT = 'UPDATE_MOVES_LEFT'
//action types to update the game state
interface UpdateGameStateAction {
  type: typeof UPDATE_GAME_STATE
  payload: GameState
}


interface UpdateMovesLeftAction {
  type: typeof UPDATE_MOVES_LEFT
  payload: Turn['movesLeft']
}

interface UpdatePlayerLocationAction {
  type: typeof UPDATE_PLAYER_LOCATION
  payload: Player['currentSource']
}



export type GameStateActionTypes =
  UpdateGameStateAction | UpdatePlayerLocationAction | UpdateMovesLeftAction