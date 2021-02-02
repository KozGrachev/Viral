

// function moveAction(oldState, location) {
//   // set players location to "location"
//   //? how to get the player?
//   const currentPlayer = oldState.players.filter((player) => player.isCurrent);
//   const playerIndex = oldState.players.map((player) => player.isCurrent).indexOf(true);
//   currentPlayer.currentSource = location;
//   oldState.players. 


//   // decrement actionscount
//   //todo update actionCount state, eg Gamestate.currentTurn.movesleft
//   if (actionCount) {
//     updatePossibleActions(player)
//   } 
// }

// let newsteae = {...oldState, oldState.players[0].cards[2].color = blue}

// object.assign

// nested objects may still be references

// oldState.player[0].cards[2]


let newstate = {
  ...oldState, 
  players : players.map((player) => {
    if (player === currentPlayer) {
      player.cards.map((card) => {
        if ( card === ourCard) {
          card.color : 'blue'
        }
      })
    }
  })
}




    // returns new array of all cards with one of them changed to 'blue' 