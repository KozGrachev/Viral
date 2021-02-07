
import { createStore } from "redux";
import { combineReducers } from 'redux'
import { playerStateReducer } from './playerReducer'

// import {Gamestate} from '../../types/gameStateTypes'
import { gameStateReducer } from './gameStateReducer';
import { Gamestate, Player } from "../../types/gameStateTypes";
import { allGamesStateReducer } from '../gameState/allGamesReducer'
// export const reducer = combineReducers({
//   playerStateReducer,
//   gameStateReducer,
//   allGamesStateReducer
// })

export const store = createStore(gameStateReducer);
export const playerStore = createStore(playerStateReducer);


// export type RootState = ReturnType<typeof reducer>
export interface RootState {
  Player: Player
  GameState: Gamestate,
  AllGames: String[]
}