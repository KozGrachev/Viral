//here should be a initial State of the Game

import { createPlayer } from "../../logic/actions.MW";
import { Player } from "../../types/gameStateTypes";
import { ADD_PLAYER, PlayerStateActionTypes } from "./reduxTypes";



let PlayerState: Player = {
  name: 'Player 1',
  id: '1234',
  cards: [],
  cardHandOverflow: false,
  isCurrent: true,
  pawnColor: 'green',
  currentSource: 'University',
  room: 'hello',
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

