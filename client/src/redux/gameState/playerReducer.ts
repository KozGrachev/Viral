//here should be a initial State of the Game

import { createPlayer } from "../../logic/actions.MW";
import { Player } from "../../types/gameStateTypes";
import { ADD_PLAYER, PlayerStateActionTypes } from "./reduxTypes";



let PlayerState: Player = {
  name: '',
  id: '',
  cards: [],
  cardHandOverflow: false,
  isCurrent: true,
  pawnColor: '',
  currentSource: '',
  room: '',
}


export function playerStateReducer(
  state = PlayerState,
  action: PlayerStateActionTypes
): Player {
  switch (action.type) {
    case ADD_PLAYER: {
      return createPlayer(action.payload.name, action.payload.color, action.payload.room)
    }
    default: return state
  }
}

