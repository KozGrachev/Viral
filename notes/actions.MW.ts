function shuffle(array) {
  let currentIndex=array.length
  let tempValue
  let randomIndex

  while(0!==currentIndex) {
    randomIndex=Math.floor(Math.random()* currentIndex);
    currentIndex-=1
    tempValue=array[currentIndex];
    array[currentIndex]=array[randomIndex];
    array[randomIndex]=tempValue
  }

  return array;
}

function didWin(misinformation) {
  if (misinformation.red.debunked===true&& 
    misinformation.blue.debunked===true&&
    misinformation.yellow.debunked===true)
  return true 
  else return false; 
}

function didLose(Gamestate){
  if (Gamestate.chaosMeter===4)
    return true
  if (Gamestate.misinformation.red===0|| Gamestate.misinformation.blue===0|| Gamestate.misinformation.yellow===0)
    return true
  if (Gamestate.connectionDeck.active.length===0){
    return true
  }
  return false
}

function playerOrder(players) {
  shuffle(players) //! SET STATE
  players[0].isCurrent= true //! SET STATE
}





