

function moveAction (oldState: Gamestate, playerID: string, location: string): Gamestate {
  const newState = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === playerID ?
          { ...player, currentSource : location } :
          player
      ),
    turnMovesLeft : oldState.turnMovesLeft - 1
  };
  if (newState.turnMovesLeft > 0) {
    // run updatePossibleMoves function
    return newState;
  } else {
    //? trigger next turn?
    return newState;
  }
}

