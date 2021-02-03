//* ACTIONS

function moveAction (oldState: Gamestate, currentPlayerID: Player['id'], location: Source['name']): Gamestate {
  const newState = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === currentPlayerID ?
          { ...player, currentSource : location } :
          player
      ),
    turnMovesLeft : oldState.turnMovesLeft - 1 //* decrement turn move count here
  };
  //? encapsulate below into nextMove check?
  if (newState.turnMovesLeft > 0) {
    return updatePossibleActions(newState, currentPlayerID)
  } else {
    //? trigger next turn? -> another function
    return newState;
  }
}


//* TURN

function updatePossibleActions(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
  //* settup
  const playerIndex: number = oldState.players.map((player) => player.id).indexOf(currentPlayerID);
  const location: Player['currentSource'] = oldState.players[playerIndex].currentSource;
  const sourceIndex: number = oldState.sources.map((source) => source.name).indexOf(location);
  //* move check
  const adjacents: string[] = connections[location];
  //* clear checks
  const clearCommunityMisinfo: boolean = oldState.sources[sourceIndex].markers_community > 0;
  const clearSocialMisinfo: boolean = oldState.sources[sourceIndex].markers_social > 0;
  const clearRelationsMisinfo: boolean = oldState.sources[sourceIndex].markers_relations > 0;
  //* share checks
  // check if cards in hand
  let possibleShares: Player[] = [];
  if (oldState.players[playerIndex].cards.length > 0) {
    // check if another player is there
    const otherPlayers: Player[] = oldState
      .players
      .filter((player) => player.id !== currentPlayerID)
      .filter((otherPlayer) => otherPlayer.currentSource === location);
    // check players have space in their hand
    possibleShares = otherPlayers
      .filter((player) => player.cards.length < 6)
  }
  //* logoff checks
  // check hand contains current location card
  const logoffPossible: boolean = oldState.players[playerIndex].cards
  .filter((card) => card.sourceName === location)
  .length > 0;
  //* logon check
  // check hand contains other location card
  const logonPossible: Card['sourceName'][] = oldState.players[playerIndex].cards
  .map((card) => card.sourceName)
  .filter((name) => name !== location);
  //* debunk checks
  // check if we are at home (debunk 1/2)
  const atHome: boolean = location === "crazy dave's house"; //todo change this value
  // check hand contains 4 of any misinfo type/area (debunk 2/2)
  const debunkable: string[] = []
  if (atHome) {
    if (
      oldState.players[playerIndex].cards
      .filter((card) => card.area === 'community')
      .length >= 4) {
        debunkable.push('community')
      };
    if (
      oldState.players[playerIndex].cards
      .filter((card) => card.area === 'social')
      .length >= 4) {
        debunkable.push('social')
      };
    if (
      oldState.players[playerIndex].cards
      .filter((card) => card.area === 'relations')
      .length >= 4) {
        debunkable.push('relations')
      };
  };
  //* UPDATE ENTIRE STATE WITH ALL ABOVE CHANGES
  const newState = 
  {
    ...oldState,
    sources : oldState.sources
      .map((source) => source.name === location ?
          { ...source, 
            canMove : false,
            canLogOn: false,
            canLogOff: false,
            canClearCommunity: clearCommunityMisinfo,
            canClearSocial: clearSocialMisinfo,
            canClearRelations: clearRelationsMisinfo,
            canShare: possibleShares,
            canDebunk: debunkable,
          } :
          { ...source, 
            canMove : adjacents.includes(source.name),
            canLogOn: logonPossible.includes(source.name),
            canLogOff: logoffPossible,
            canClearCommunity: clearCommunityMisinfo,
            canClearSocial: clearSocialMisinfo,
            canClearRelations: clearRelationsMisinfo,
            canShare: [],
            canDebunk: [],
          }
      ),
  };
  return newState;
}

//* HELPERS


//* RESOURCES

//? will be in format { sourceName : [array of source names] }
const connections: Connections = {
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