
import { createStore } from "redux";
import { combineReducers } from 'redux'
import { playerStateReducer } from './playerReducer'

// import {Gamestate} from '../../types/gameStateTypes'
import { gameStateReducer } from './gameStateReducer';

export const reducer = combineReducers({
  playerStateReducer,
  gameStateReducer
})

export const store = createStore(reducer);
