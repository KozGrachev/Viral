
import { createStore } from "redux";
import { combineReducers } from 'redux'
import { playerStateReducer } from './playerReducer'



import { gameStateReducer } from './gameStateReducer';
import { Gamestate, Player } from "../../types/gameStateTypes";
import { allGamesStateReducer } from '../gameState/allGamesReducer'

export const reducer = combineReducers({
  playerStateReducer,
  gameStateReducer,
  allGamesStateReducer
})

export const store = createStore(reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__());



export interface RootState {
  playerStateReducer: Player
  gameStateReducer: Gamestate,
  allGamesStateReducer: String[]
}