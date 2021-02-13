
import { createPlayer } from "../../logic/setup";
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
      const newstate = createPlayer(action.payload.name, action.payload.color, action.payload.room)
      return { ...newstate }
    }
    default: return state
  }
}

