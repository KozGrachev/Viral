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

function selectCard (gamestate,weight) { //! misinfo card
  let drawSource=gamestate.misinformationDeck.active[0].source

  for(const source of gamestate.sources){
    if(source.name===drawSource){
      while(weight>0){
        source.markers.push(source.color) //!SET STATE
        gamestate.misinformation[source.color]-- //!SET STATE
      }
    }
  }
  gamestate.misinformationDeck.passive.push(gamestate.misinformationDeck.active[0]) //!SET STATE
  gamestate.misinformationDeck.active.shift()//!SET STATE

}

function dealCard (gamestate) { //! connection or viral card
  let newCard=gamestate.connectionDeck.active[0]

  if(newCard.action){
    viral()
  }
  else {
    for (const player of gamestate.players) {
      if(player.isCurrent){
        if(player.cards.length===6)
          {
            //todo front end to give player choice of card to delete
          }
        else player.cards.push(newCard)
      }
    }
  }
  
}

function viral () {
  //todo Viral actions
}





