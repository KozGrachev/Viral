import {Gamestate,ViralCard,ConnectionCard} from './objects'

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


function didWin(state:Gamestate) {
  if (state.misinformation.red.debunked===true&& 
    state.misinformation.blue.debunked===true&&
    state.misinformation.yellow.debunked===true)
  return true 
  else return false; 
}

function didLose(state:Gamestate){
  if (state.chaosMeter===4)
    return true
  if (
    state.misinformation.red.markersLeft===0|| 
    state.misinformation.blue.markersLeft===0|| 
    state.misinformation.yellow.markersLeft===0
    )
    return true
  if (state.connectionDeck.active.length===0){
    return true
  }
  return false
}

//! SET STATE

function playerOrder(oldState:Gamestate) {
  let players=oldState.players
  let newPlayers=shuffle(players)
  newPlayers[0].isCurrent= true
  let newState={...oldState,newPlayers}
  return newState
}

function insertViralCards(oldState:Gamestate) {

  let oldDeck=oldState.connectionDeck.active

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

  let connectionDeck=[...first,...second,...third]

  let newState={...oldState,connectionDeck}
  return newState

}

//* spread level will define how many times this function is called 

function infoCard (oldState:Gamestate,weight:number,viral:boolean) {
  
  let oldDeck=oldState.misinformationDeck

  let drawSource

  if(!viral){ 
    drawSource=oldDeck.active[0].source
  }
  else { 
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


function connectionCard (oldState:Gamestate) {
  let newCard:any=oldState.connectionDeck.active[0]

  if(newCard.action==='viral'){
    viral(oldState)
  }
  else {
    for (const player of oldState.players) {
      if(player.isCurrent){

        player.cards.push(newCard)
        if(player.cards.length>6)
          {
            let chosenCard="whatever" //* front end to give player choice of card to delete
            deleteCard(chosenCard,oldState)
          }
      }
    }
  }

  let newState={...oldState}
  return newState
}

function viral (oldState:Gamestate) {
 oldState.spreadLevel++
 infoCard(oldState,3,true)
 //* shuffle passive misinfo deck and put on top of active misinfo deck
 oldState.misinformationDeck.active=[...shuffle(oldState.misinformationDeck.passive),...oldState.misinformationDeck.active]
 let newState={...oldState}
 return newState
}

function deleteCard(card:ConnectionCard,oldState:Gamestate){
  for (const player of oldState.players) {
    if(player.isCurrent){
      for(const [i,value] of player.cards.entries()){ 
        if(value===card){
          player.cards.splice(i,1)
        }
      }
    }
  }
  let newState={...oldState}
  return newState

}





