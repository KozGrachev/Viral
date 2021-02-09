import { Gamestate, Player, Misinformation, Source, Card } from "../../types/gameStateTypes"


export const MOVE_ACTION = 'MOVE_ACTION'
export const CLEAR_MISINFO = 'CLEAR_MISINFO'
export const SHARE_CARD = 'SHARE_CARD'
export const LOG_ON_OFF = 'LOG_ON_OFF'
export const DEBUNK_MISINFO = 'DEBUNK_MISINFO'
export const DISCARD_ACTION = 'DISCARD_ACTION'
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE'
export const ADD_PLAYER = 'ADD_PLAYER'
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const START_GAME='START_GAME'
export const ADD_PLAYER_TO_GAME = 'ADD_PLAYER_TO_GAME'
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

export interface UpdateGameStateAction {
  type: typeof UPDATE_GAME_STATE
  payload: Gamestate
}

export interface AddPlayerProps {
  name: string,
  color: string,
  room: string
}
export interface AddPlayerAction {
  type: typeof ADD_PLAYER
  payload: AddPlayerProps
}


export interface StartGameAction {
  type: typeof START_GAME
  payload: Player[]
}

export interface GetAllGamesAction {
  type: typeof GET_ALL_GAMES
  payload: string[]
}

export interface AddPlayerToGameProps { 
  player:Player, 
}
export interface AddPlayerToGameStateAction {
  type: typeof ADD_PLAYER_TO_GAME
  payload: AddPlayerToGameProps
}

export type GameStateActionTypes =
  MoveAction | ClearMisinfoAction | ShareCardAction | logOnOffPropsAction |
  DebunkMisinfoAction | discardCardAction | UpdateGameStateAction | StartGameAction | AddPlayerToGameStateAction

export type PlayerStateActionTypes = AddPlayerAction;

export type AllGamesActionTypes = GetAllGamesAction; 