//* ACTIONS


//* Player actions (within "Turn" function)


// its the players turn
// update possible actions
// set actionpoint counter = 4
// ...wait till action taken by player (defined by UI event handlers)
// every action then decrements the actionpoint
// then updates possible actions OR triggers next phase (board actions)

function playerActions(currentPlayer) {

  //? Where do we store actionPoints? in state?

  let actionPoints = 4;
  while (actionPoints) {

  }
}



//* Possible Actions (within "playerActions" function)

function updatePossibleActionsOld(currentPlayer) {

  //* STATE CHECK TO DETERMINE WHAT ACTIONS ARE POSSIBLE
  //? These checks will be send to UI to determine what actions are made available
  // check players location
  //  - list connections (move)
  // check status of curent location
  //  - are there misinfo markers there? (clear up)
  //  - is another player there? (share)
  //  - is "home" included? (debunk 1/2)
  // check cards in hand
  //  - is current location included (logoff)
  //  - is current location included (logon)
  //  - are there 4 of any one colour (debunk 2/2)
  //? The above checks will activate state on the sources, which will trigger appropriate choices displayed by UI on hover
    
  const location = currentPlayer.currentSource;
  const adjacents = getConnections(location.name);
  // create list of locations to update the canMove boolean
  //todo create list in format that can update state, ie [Gamestate.sources[index].canMove = true, ...] 
  // check markers
  const redMisinfo = location.markers.filter((marker) => marker.color === 'red').length;
  const blueMisinfo = location.markers.filter((marker) => marker.color === 'blue').length;
  const yellowMisinfo = location.markers.filter((marker) => marker.color === 'yellow').length;
  //todo create object to add to state to update the current location's "canClearRed/Blue/Yellow" properties, ie: [Gamestate.sources[index].canClearBlue = true, ...]
  // check if another player is there
  const otherPlayers = Gamestate
    .players
    .filter((player) => player.name !== currentPlayer.name)
    .filter((otherPlayer) => otherPlayer.currentSource === location);
  // check players have space in their hand
  const possibleShares = otherplayers
    .filter((player) => player.cards.length < 6)
  //todo update canShare of current source eg [Gamestate.sources[index].canShare = possibleShares]
  // check if we are at home (debunk 1/2)
  const atHome = location.name === "crazy dave's house";
  // check hand contains current location (logoff)
  const canLogOff = currentPlayer.cards
    .filter((card) => card.source.name === location.name)
    .length; // make conditional?
  //todo update canLogOff state of ALL sources other than current, ie: [Gamestate.sources[index].canLogOff = true, ...]
  // check hand contains other location (logon)
  const logonSourceCards = currentPlayer.cards
    .map((card) => card.source.name)
    .filter((name) => name !== location.name);
  //todo update canLogOn of all sources listed in logonSourceCards
  // check hand contains 4 of any colour (debunk 2/2)
  const debunkable = []
  if (atHome) {
    if (
      currentPlayer.cards
      .filter((card) => card.source.color === 'red')
      .length >= 4) {
        debunkable.push('red')
      };
    if (
      currentPlayer.cards
      .filter((card) => card.source.color === 'blue')
      .length >= 4) {
        debunkable.push('blue')
      };
    if (
      currentPlayer.cards
      .filter((card) => card.source.color === 'yellow')
      .length >= 4) {
        debunkable.push('yellow')
      };
  };
  //todo update current location canDebunk with debunkable array
  //* UPDATE ENTIRE STATE WITH ALL ABOVE CHANGES
  //todo return/dispatch state

  
}


//* for getting connection from source location (helper function) 

function getConnection(location) {
  const connections = Object.entries(Connections)
  .filter(([key]) => key === location)
  .map(([_, value]) => value)
  return connections;             
}


//* Move player action

//? called as event handler, so will be passed location to move to

function move (player, location) {
  // set players location to "location"
  //todo update state like [player.currentSource = location]
  // decrement actionscount
  //todo update actionCount state, eg Gamestate.currentTurn.movesleft
  if (actionCount) {
    updatePossibleActions(player)
  } 

 


  
}


//* Clear marker action

//? called as event handler, will be passed colour of chosen marker and location

function clear (player, markerColor, location) {
  // default markers to remove to 1, and update if debunked 
  let noOfMarkers = 1
  //? check if any colours/misinformations have been debunked
  if (Gamestate.misinformation[markerColor].debunked) {
    //! reorganised marker types to seperate by colour
    noOfMarkers = location.markers[markerColor]
  }
  //todo update state eg location.markers[markerColor] -= noOfMarkers
  //todo update state to replace markers to count, eg Gamestate.misinformation[markerColor].markersLeft += noOfMarkers
  // decrement actionscount
  //todo update actionCount state, eg Gamestate.currentTurn.movesleft
  if (actionCount) {
    updatePossibleActions(player)
  } 
}


//* Share card action

//? called as event handler, will be passed player, recipient, and card)

//! the recipient cannot accept when their hand is full
//! sharing can only go one way (initiated by the player whose turn it is, unlike in board game)

function shareCardOld(player, recipient, sharedCard) {
  // remove card from player hand
  //todo update state eg: player.cards.filter((card) => card !== sharedCard );
  // put card in recipient hand
  //todo update state eg: recipient.cards = [...recipient.cards, sharedCard];
  //todo update actionCount state, eg Gamestate.currentTurn.movesleft
  if (actionCount) {
    updatePossibleActions(player)
  } 
}


//* Swap out cards function

//? called when player chooses a card to discard from their hand

function discardCard(player, card) {
  // remove card from player hand
  //todo update state eg: player.cards.filter((card) => card !== sharedCard );
  // reset cardHandOverflow trigger
  //todo update state eg:  player.carHandOverflow = false
}


//* Logon action / Logoff action
//! these actions are identical, but will be passed different card (matching destination location for logon, and players current location for logoff)

//? called as event handler, will be passed player, location, and card)

function logOnOffOld(player, location, usedCard) {
  // remove card from player hand
  //todo update state eg: player.cards.filter((card) => card !== usedCard );
  // set players location to "location"
  //todo update state like [player.currentSource = location]
  //todo update actionCount state, eg Gamestate.currentTurn.movesleft
  if (actionCount) {
    updatePossibleActions(player)
  } 
}


//* Debunk action

//? called as event handler, will be passed player, cards (array of 4), color)

function debunk (player, usedCards, color) {
  // remove cards from player hand
  //todo update state eg: player.cards.filter((card) => !usedCards.includes(card));
  // set misinformation type to debunked
  //todo update state eg: Gamestate.misinformation[color].debunked = true
  // check didWin (SEE: actions.MW) 
  if (didWin(Gamestate.misinformation)) {
    //todo update state to win game eg: Gamestate.gameWon = true
  } else {
    //todo update actionCount state, eg Gamestate.currentTurn.movesleft
    if (actionCount) {
      updatePossibleActions(player)
    } 
  }
}