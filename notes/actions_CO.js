//* ACTIONS


//* Player actions (within "Turn" function)

//? These checks will be send to UI to determine what actions are made available
// check players location
//  - list connections (move)
// check status of curent location
//  - are there disease markers there? (clear up)
//  - is another player there? (share)
//  - is "home" included? (debunk 1/2)
// check cards in hand
//  - is current location included (logoff)
//  - is current location included (logon)
//  - are there 4 of any one colour (debunk 2/2)
//? The above checks will activate state on the sources, which will trigger appropriate choices displayed by UI on hover


function playerActions(player) {
  let actionPoints = 4;
  while (actionPoints) {
    // do checks
    const location = player.currentSource;
    const adjacent = 
    const moveState = {};
    const possibleMoves = location.
    // Gamestate.sources is an array
  }
}


//* for  

function getConnections(location) {
  const connections = Object.entries(Connections)
  .filter(([key]) => key === location)
  .map(([_, value]) => value)
  return connections;             
}

//* Move player action

function movePlayer(player) {
  // get players current location
  // find out list of available locations to move
  // send prompt to 
  
}