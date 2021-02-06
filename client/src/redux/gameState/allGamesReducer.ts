import { AllGamesActionTypes, GET_ALL_GAMES } from "./reduxTypes"


export function allGamesStateReducer(
  state: string[] = [],
  action: AllGamesActionTypes
): string[] {
  switch (action.type) {
    case GET_ALL_GAMES: {
      state=Array.from(action.payload)
      console.log(state, 'state')
      return state
    }
    default: return state
  }
}
