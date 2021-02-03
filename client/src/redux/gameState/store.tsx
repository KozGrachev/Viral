
import { createStore } from "redux";
import { gameStateReducer } from './gameStateReducer';

export const store = createStore(gameStateReducer);