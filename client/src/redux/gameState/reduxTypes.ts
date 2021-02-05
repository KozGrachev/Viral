import { Gamestate, Player, Misinformation, Source, Card } from "../../types/gameStateTypes"


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