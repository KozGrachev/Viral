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
  //!SET STATE
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

function insertViralCards(connectionDeck) {

  const viral1:ViralCard={action:"viral"}
  const viral2:ViralCard={action:"viral"}
  const viral3:ViralCard={action:"viral"}
  let first=connectionDeck.slice(0,(connectionDeck.length/3))
  let second=connectionDeck.slice((connectionDeck.length/3),(2*connectionDeck.length/3))
  let third=connectionDeck.slice((2*connectionDeck.length/3),connectionDeck.length)

  first.push(viral1)
  second.push(viral2)
  third.push(viral3)

  first=shuffle(first)
  second=shuffle(second)
  third=shuffle(third)

  return[first+second+third] //! SET STATE

}

function selectCard (gamestate,weight) {
  let source=gamestate.misinformationDeck.active[0].source

  for(let i=0; i<gamestate.sources.length; i++){
    if(gamestate.sources[i].name===source){
      while(weight>0){
        gamestate.sources[i].markers.push(gamestate.sources[i].color) //!SET STATE
        gamestate.misinformation[gamestate.sources[i].color]-- //!SET STATE
      }
    }
  }
  gamestate.misinformationDeck.passive.push(gamestate.misinformationDeck.active[0]) //!SET STATE
  gamestate.misinformationDeck.active.shift()//!SET STATE

}





