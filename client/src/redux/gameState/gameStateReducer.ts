import { CLEAR_MISINFO, GameStateActionTypes, LOG_ON_OFF, MOVE_ACTION, SHARE_CARD } from './../../types/gameStateTypes';
import { gameState } from '../../socket-io-client/dummy-state'
import { Gamestate } from '../../types/gameStateTypes'
import { clearMisinfo, logOnOff, moveAction, shareCard } from '../../../../logic/actions.newState_CO'
// import {emit} from '../backend-dummy-client/dummy-client'
//here should be a initial State of the Game
const initialState: Gamestate = gameState

export function gameStateReducer(
  state = initialState,
  action: GameStateActionTypes
): Gamestate {
  switch (action.type) {
    case MOVE_ACTION: {
      const ap = action.payload;
      return moveAction(ap.oldState, ap.currentPlayerID, ap.location)
    }
    case CLEAR_MISINFO: {
      const ap = action.payload;
      return clearMisinfo(ap.oldState, ap.currentPlayerID, ap.misinfoType, ap.location)
    }
    case SHARE_CARD: {  
      const ap = action.payload;
      return shareCard(ap.oldState, ap.currentPlayerID, ap.recipient, ap.sharedCard)
    }
    case LOG_ON_OFF: {
      const ap = action.payload;
      return logOnOff(ap.oldState, ap.currentPlayerID, ap.location, ap.usedCard)
    }

    default: return state
  }
}
