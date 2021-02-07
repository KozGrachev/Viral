
import { createStore } from "redux";
import { combineReducers } from 'redux'
// import { playerStateReducer } from './playerReducer'

// import {Gamestate} from '../../types/gameStateTypes'
import { gameStateReducer } from './gameStateReducer';
import { Gamestate, Player } from "../../types/gameStateTypes";
// export const reducer = combineReducers({
//   playerStateReducer,
//   gameStateReducer,
//   allGamesStateReducer
// })

export const store = createStore(gameStateReducer);
export let playerStore:string; 



export interface RootState {
  Player: Player
  GameState: Gamestate,
  AllGames: String[]
}