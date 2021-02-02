//* old and new variables
//* return full state
//* or helper of helper

//! HELPER HELPERS
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

//! SET STATE

function playerOrder(oldState) {
  let players=oldState.players
  let newPlayers=shuffle(players)
  newPlayers[0].isCurrent= true
  let newState={...oldState,newPlayers}
  return newState
}

function insertViralCards(oldState) {

  let oldDeck=oldState.connectionDeck

  const viral1:ViralCard={action:"viral"}
  const viral2:ViralCard={action:"viral"}
  const viral3:ViralCard={action:"viral"}
  let first=oldDeck.slice(0,(oldDeck.length/3))
  let second=oldDeck.slice((oldDeck.length/3),(2*oldDeck.length/3))
  let third=oldDeck.slice((2*oldDeck.length/3),oldDeck.length)

  first.push(viral1)
  second.push(viral2)
  third.push(viral3)

  first=shuffle(first)
  second=shuffle(second)
  third=shuffle(third)

  let connectionDeck=[first+second+third]

  let newState={...oldState,connectionDeck}
  return newState

}

//* spread level will define how many times this function is called 

function infoCard (oldState,weight,viral) {
  
  let oldDeck=oldState.misinformationDeck

  let drawSource

  if(!viral){ //* if it's not from a "viral" call, take from top of depth
    drawSource=oldDeck.active[0].source
  }
  else { //* if it's viral take from bottom
    drawSource=oldDeck.active[oldDeck.active.length-1].source
  }
    for(const source of oldState.sources){
      if(source.name===drawSource){
        while(weight>0){
          source.markers[source.color]++
          oldState.misinformation[source.color]--
        }
      }
  }
  oldDeck.passive.push(oldDeck.active[0])
  oldDeck.active.shift()

  let newState={...oldState}
  return newState
}

function connectionCard (oldState) {
  let newCard=oldState.connectionDeck.active[0]

  if(newCard.action){
    viral(oldState)
  }
  else {
    for (const player of oldState.players) {
      if(player.isCurrent){

        player.cards.push(newCard)
        if(player.cards.length>6)
          {
            let chosenCard=({source:"whatever", color:"pink"})//* front end to give player choice of card to delete
            deleteCard(chosenCard)
          }
      }
    }
  }

  let newState={...oldState}
  return newState
}

function viral (oldState) {
 oldState.spreadlevel++
 infoCard(oldState,3,true)
 //* shuffle passive misinfo deck and put on top of active misinfo deck
 oldState.misinformationDeck.active=[...shuffle(oldState.misinformationDeck.passive),...oldState.misinformationDeck.active]
 let newState={...oldState}
 return newState
}

function deleteCard(card){
  //todo remove card from players hand
}





