//here should be a initial State of the Game

import { Player } from "../../types/gameStateTypes";
import { ADD_PLAYER, PlayerStateActionTypes } from "./reduxTypes";



export function createPlayer(name: string, color: string) {

  // update the state fo rthe player
  let random = Math.floor(Math.random() * 100000)
  const player = {
    name,
    id: String(random),
    cards: [],
    cardHandOverflow: false,
    isCurrent: false,
    pawnColor: color,
    currentSource: 'crazy dave'
  }
  return player

}

let initialState: Player;


export function playerStateReducer(
  state = initialState,
  action: PlayerStateActionTypes
): Player {
  switch (action.type) {
    case ADD_PLAYER: {
      return createPlayer(action.payload.name, action.payload.color)
    }
    default: return state
  }
}