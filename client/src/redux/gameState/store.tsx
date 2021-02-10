
import { createStore } from "redux";
import { combineReducers } from 'redux'
import { playerStateReducer } from './playerReducer'


// import {Gamestate} from '../../types/gameStateTypes'
import { gameStateReducer } from './gameStateReducer';
import { Gamestate, Player } from "../../types/gameStateTypes";
import { allGamesStateReducer } from '../gameState/allGamesReducer'
import { initialState } from "./initialState";
export const reducer = combineReducers({
  playerStateReducer,
  gameStateReducer,
  allGamesStateReducer
})
/* eslint-disable no-underscore-dangle */
export const store = createStore(reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__());
  /* eslint-enable */

// export type RootState = ReturnType<typeof reducer>
export interface RootState {
  playerStateReducer: Player
  gameStateReducer: Gamestate,
  allGamesStateReducer: String[]
}