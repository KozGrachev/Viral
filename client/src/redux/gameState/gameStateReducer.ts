import { GameStateActionTypes, UPDATE_GAME_STATE, UPDATE_MOVES_LEFT, UPDATE_PLAYER_LOCATION } from './../../types/gameStateTypes';
import { gameState } from '../../socket-io-client/dummy-state'
import { GameState } from '../../types/gameStateTypes'
// import {emit} from '../backend-dummy-client/dummy-client'
//here should be a initial State of the Game
const initialState: GameState = gameState

export function gameStateReducer(
  state = initialState,
  action: GameStateActionTypes
): GameState {
  switch (action.type) {
    case UPDATE_GAME_STATE:
      return {
        ...state, ...action.payload
      }
    case UPDATE_PLAYER_LOCATION:
      return {
        ...state, received: false, ...state.players.map(player => {
          if (state.currentTurn.player === player) {
            return player.currentSource = action.payload
          } else {
            return state;
          }
        })
        // or helper function
      }
    case UPDATE_MOVES_LEFT:
      return {
        ...state, received: false,
        currentTurn: { ...state.currentTurn, movesLeft: action.payload }
      }

    default: return state
  }
}
