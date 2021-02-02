const gamestate={connectionDeck:[1,2,3,4]}
const exampleDeck=gamestate.connectionDeck


function shuffle(exampleDeck) {
  let array=exampleDeck
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
  return array; //! NEW STATE
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


//* spread level will define how many times this function is called 

function selectCard (gamestate,weight,viral) { //! misinfo card
  
  let drawSource

  if(!viral){ //* if it's not from a "viral" call, take from top of depth
    drawSource=gamestate.misinformationDeck.active[0].source
  }
  else { //* if it's viral take from bottom
    drawSource=gamestate.misinformationDeck.active[gamestate.misinformationDeck.active.length-1].source
  }
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

  return gamestate
}

function dealCard (gamestate) { //! connection or viral card
  let newCard=gamestate.connectionDeck.active[0]

  if(newCard.action){
    viral(gamestate)
  }
  else {
    for (const player of gamestate.players) {
      if(player.isCurrent){
        if(player.cards.length===6)
          {
            //* front end to give player choice of card to delete
          }
        else player.cards.push(newCard)
      }
    }
  }
  
}

function viral (gamestate) {
 //* increase infection level
 gamestate.spreadlevel++
 //* pick card from bottom of misinfo deck

 //* shuffle passive misinfo deck and put on top of active misinfo deck
}





