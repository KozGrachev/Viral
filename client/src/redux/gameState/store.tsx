
import { createStore } from "redux";
// import {Gamestate} from '../../types/gameStateTypes'
import { gameStateReducer } from './gameStateReducer';

export const store = createStore(gameStateReducer);