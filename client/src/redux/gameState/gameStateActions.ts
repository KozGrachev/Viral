import { ClearmisinfoProps, CLEAR_MISINFO, DebunkMisinfoProps, DEBUNK_MISINFO, discardCardProps, DISCARD_ACTION, logOnOffProps, LOG_ON_OFF, MoveActionProps, MOVE_ACTION, ShareCardProps, SHARE_CARD, UPDATE_GAME_STATE, GameStateActionTypes, PlayerStateActionTypes, ADD_PLAYER, GET_ALL_GAMES, AllGamesActionTypes, START_GAME, ADD_PLAYER_TO_GAME } from './reduxTypes';
import { Gamestate, Player, } from '../../types/gameStateTypes'
//Below are example of actions with typescript.
// we need to create an action for each reduced case


export function moveAction(props: MoveActionProps): GameStateActionTypes {
  const { oldState, currentPlayerID, location } = props
  return {
    type: MOVE_ACTION,
    payload: { oldState, currentPlayerID, location }
  }
}



export function clearMisinfoAction(props: ClearmisinfoProps): GameStateActionTypes {
  const { oldState, currentPlayerID, location, misinfoType } = props;
  return {
    type: CLEAR_MISINFO,
    payload: { oldState, currentPlayerID, location, misinfoType }
  }
}


export function shareCardAction(props: ShareCardProps): GameStateActionTypes {
  const { oldState, currentPlayerID, recipient, sharedCard } = props;
  return {
    type: SHARE_CARD,
    payload: { oldState, currentPlayerID, recipient, sharedCard }
  }
}

export function logOnOffAction(props: logOnOffProps): GameStateActionTypes {
  const { oldState, currentPlayerID, location, usedCard } = props;
  return {
    type: LOG_ON_OFF,
    payload: { oldState, currentPlayerID, location, usedCard }
  }
}
export function debunkMisinfoAction(props: DebunkMisinfoProps): GameStateActionTypes {
  const { oldState, currentPlayerID, usedCards, misinfoType } = props;
  return {
    type: DEBUNK_MISINFO,
    payload: { oldState, currentPlayerID, usedCards, misinfoType }
  }
}

export function discardCardAction(props: discardCardProps): GameStateActionTypes {
  const { oldState, currentPlayerID, discardedCard } = props;
  return {
    type: DISCARD_ACTION,
    payload: { oldState, currentPlayerID, discardedCard }
  }
}
//redux action to update whole gameState // examples
export function updateGameState(gameState: Gamestate): GameStateActionTypes {
  return {
    type: UPDATE_GAME_STATE,
    payload: gameState
  }
}

export function AddPlayerAction(name: string, color: string, room: string): PlayerStateActionTypes {
  return {
    type: ADD_PLAYER,
    payload: { name, color, room }
  }
}

export function GetAllGamesAction(array: string[]): AllGamesActionTypes {
  return {
    type: GET_ALL_GAMES,
    payload: array
  }
}


export function StartGameAction(players: Player[]): GameStateActionTypes {
  return {
    type: START_GAME,
    payload: players
  }
}

export function addPlayerToGameState (player:Player):GameStateActionTypes { 
  return { 
    type:ADD_PLAYER_TO_GAME, 
    payload:{player}
  }
}