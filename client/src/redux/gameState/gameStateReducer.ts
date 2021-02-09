//import { initDummyState } from './../../logic/dummyState.REDO_CO';
import { ADD_PLAYER_TO_GAME, CLEAR_MISINFO, DEBUNK_MISINFO, DISCARD_ACTION, GameStateActionTypes, LOG_ON_OFF, MOVE_ACTION, SHARE_CARD, START_GAME, UPDATE_GAME_STATE } from './reduxTypes';
//import { initDummyState as gameState } from '../../logic/dummyState.REDO_CO'
import { initialState } from './initialState'
import { Gamestate } from '../../types/gameStateTypes'
import { clearMisinfo, debunkMisinfo, discardCard, logOnOff, moveAction, shareCard } from '../../logic/actions.newState_CO'
import { addPlayerToGame, setUp } from '../../logic/actions.MW';
import { Console } from 'console';
//here should be a initial State of the Game
const GameState: Gamestate = initialState;
// const GameState: Gamestate = gameState;

export function gameStateReducer(
  state = GameState,
  action: GameStateActionTypes
): Gamestate {
  switch (action.type) {
    case MOVE_ACTION: {
      const ap = action.payload;
      const newstate = moveAction(ap.oldState, ap.currentPlayerID, ap.location)
      return { ...state, ...newstate, received: false };
    }
    case CLEAR_MISINFO: {
      const ap = action.payload;
      // return {...clearMisinfo(ap.oldState, ap.currentPlayerID, ap.misinfoType, ap.location),  ...state, received: false }}
      const newState = { ...state, received: false }
      return { ...newState, ...clearMisinfo(ap.oldState, ap.currentPlayerID, ap.misinfoType, ap.location) }
    }

    case SHARE_CARD: {
      const ap = action.payload;
      const newstate = shareCard(ap.oldState, ap.currentPlayerID, ap.recipient, ap.sharedCard)
      return { ...state, ...newstate, received: false };
    }
    case LOG_ON_OFF: {
      const ap = action.payload;
      const newstate = logOnOff(ap.oldState, ap.currentPlayerID, ap.location, ap.usedCard)
      return { ...state, ...newstate, received: false };
    }
    case DEBUNK_MISINFO: {
      const ap = action.payload;
      const newstate = debunkMisinfo(ap.oldState, ap.currentPlayerID, ap.usedCards, ap.misinfoType)
      return { ...state, ...newstate, received: false };
    }
    case DISCARD_ACTION: {
      const ap = action.payload;
      const newstate = discardCard(ap.oldState, ap.currentPlayerID, ap.discardedCard)
      return { ...state, ...newstate, received: false };
    }

    case UPDATE_GAME_STATE:
      return {
        ...state, ...action.payload
      }

    case ADD_PLAYER_TO_GAME: {
      const ap = action.payload;
      console.log('state before add player', state)
      const newState = addPlayerToGame(ap.player, state)
      console.log(newState, 'new state from add player reducer ')
      return newState
    }
    case START_GAME: {
      const initialState = setUp(action.payload)
      console.log('it gets here - START GAME REDUCER')
      const obj = { ...state, ...initialState, gameOn: true, received: false }
      console.log('obj - AFTER UPDATE', obj)
      return obj

    }
    default: return state
  }
}
