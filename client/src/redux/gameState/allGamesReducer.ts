import { AllGamesActionTypes, GET_ALL_GAMES } from "./reduxTypes"


export function allGamesStateReducer(
  state: string[] = [],
  action: AllGamesActionTypes
): string[] {
  switch (action.type) {
    case GET_ALL_GAMES: {
    console.log(state, 'state')
    return state = [...action.payload]
      }
    default: return state
  }
}
