//* ACTIONS

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
  //? encapsulate below into nextMove check?
  if (newState.turnMovesLeft > 0) {
    // run updatePossibleMoves function
    return newState;
  } else {
    //? trigger next turn?
    return newState;
  }
}


//* TURN

function updatePossibleActions(oldState: Gamestate, playerID: string): Gamestate {

  const playerIndex: number = oldState.players.map((player) => player.id).indexOf(playerID);
  const location: string = oldState.players[playerIndex].currentSource;
  const sourceIndex: number = oldState.sources.map((source) => source.name).indexOf(location);
  const adjacents: string[] = connections[location];
  // create list of locations to update the canMove boolean
  //todo create list in format that can update state, ie [Gamestate.sources[index].canMove = true, ...] 
  // check markers
  // const redMisinfo = location.markers.filter((marker) => marker.color === 'red').length;
  const redMisinfo: number = oldState.sources[sourceIndex].markersRed
  const blueMisinfo: number = oldState.sources[sourceIndex].markersBlue
  const zellowMisinfo: number = oldState.sources[sourceIndex].markersYellow
  //todo create object to add to state to update the current location's "canClearRed/Blue/Yellow" properties, ie: [Gamestate.sources[index].canClearBlue = true, ...]
  // check if another player is there
  const otherPlayers: Player[] = oldState
    .players
    .filter((player) => player.id !== playerID)
    .filter((otherPlayer) => otherPlayer.currentSource.name === location);
  // check players have space in their hand
  const possibleShares: Player[] = otherplayers
    .filter((player) => player.cards.length < 6)
  //todo update canShare of current source eg [Gamestate.sources[index].canShare = possibleShares]
  // check if we are at home (debunk 1/2)
  const atHome: boolean = location === "crazy dave's house";
  // check hand contains current location (logoff)
  const canLogOff: boolean = oldState.players[playerIndex].cards
    .filter((card) => card.sourceName === location)
    .length > 0;
  //todo update canLogOff state of ALL sources other than current, ie: [Gamestate.sources[index].canLogOff = true, ...]
  // check hand contains other location (logon)
  const logonSourceCards: Card[] = oldState.players[playerIndex].cards
    .map((card) => card.sourceName)
    .filter((name) => name !== location);
  //todo update canLogOn of all sources listed in logonSourceCards
  // check hand contains 4 of any colour (debunk 2/2)
  const debunkable: string[] = []
  if (atHome) {
    if (
      oldState.players[playerIndex].cards
      .filter((card) => card.color === 'red')
      .length >= 4) {
        debunkable.push('red')
      };
    if (
      oldState.players[playerIndex].cards
      .filter((card) => card.color === 'blue')
      .length >= 4) {
        debunkable.push('blue')
      };
    if (
      oldState.players[playerIndex].cards
      .filter((card) => card.color === 'yellow')
      .length >= 4) {
        debunkable.push('yellow')
      };
  };
  //todo update current location canDebunk with debunkable array
  //* UPDATE ENTIRE STATE WITH ALL ABOVE CHANGES
  //todo return/dispatch state
}

//* HELPERS


//* RESOURCES

//? will be in format { sourceName : [array of source names] }
const connections: Connections {
  source01: [],
  source02: [],
  source03: [],
  source04: [],
  source05: [],
  source06: [],
  source07: [],
  source08: [],
  source09: [],
  source10: [],
  source11: [],
  source12: [],
  source13: [],
  source14: [],
  source15: [],
  source16: [],
  source17: [],
  source18: [],
  source19: [],
  source20: [],
  source21: [],
  source22: [],
  source23: [],
  source24: [],
}