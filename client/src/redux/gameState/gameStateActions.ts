import { UPDATE_MOVES_LEFT, UPDATE_PLAYER_LOCATION } from './../../types/gameStateTypes';
import { GameState, UPDATE_GAME_STATE, GameStateActionTypes, Player, Turn} from '../../types/gameStateTypes'
//Below are example of actions with typescript. 
// we need to create an action for each reduced case 


//redux action to update whole gameState // examples 
export function updateGameState(gameState: GameState): GameStateActionTypes {
  
  return {
    type: UPDATE_GAME_STATE,
    payload:gameState
  }
}

export function decrementMoves(movesLeft: Turn['movesLeft']): GameStateActionTypes {
  
  return {
    type: UPDATE_MOVES_LEFT, 
    payload:movesLeft
  }
}



export function updatePlayerLocation(currentSource: Player['currentSource']): GameStateActionTypes {
  
  return {
    type: UPDATE_PLAYER_LOCATION,
    payload:currentSource
  }
}






