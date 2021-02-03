import {Gamestate,Card} from './objects.REDO'
import {sources} from './sources'

//! HELPER HELPERS
function shuffle(array:any[]) { 
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
  if (state.misinformation.community.debunked===true&& 
    state.misinformation.social.debunked===true&&
    state.misinformation.relations.debunked===true)
  return true 
  else return false; 
}

function didLose(state:Gamestate){
  if (state.chaosMeter===4)
    return true
  if (
    state.misinformation.community.markersLeft===0|| 
    state.misinformation.social.markersLeft===0|| 
    state.misinformation.relations.markersLeft===0
    )
    return true
  if (state.connectionDeck.length===0){
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

  let oldDeck=oldState.connectionDeck

  const viral1:Card={type:"viral",sourceName:null, area:null}
  const viral2:Card={type:"viral",sourceName:null, area:null}
  const viral3:Card={type:"viral",sourceName:null, area:null}
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
  
  let oldDeck=oldState.misinformationDeckActive
  let drawSource

  if(!viral){ 
    drawSource=oldDeck[0].sourceName
  }
  else { 
    drawSource=oldDeck[oldDeck.length-1].sourceName //card name
  }

  for(const source of oldState.sources){
    if(source.name===drawSource){
      while(weight>0){
        if(source[`markers_${source.area}`]==3){
          //! OUTBREAK
        }
        else{
        //* add marker to source
        source[`markers_${source.area}`]++
        //* remove marker from global bucket
        oldState.misinformation[source.area]--
        didLose(oldState)
        }
        weight--
      }
    }
  }
  oldState.misinformationDeckPassive.push(oldDeck[0])
  oldState.misinformationDeckActive.shift()

  let newState={...oldState}
  return newState
}


function connectionCard (oldState:Gamestate) {
  let newCard:Card=oldState.connectionDeck[0]

  if(newCard.type==='viral'){
    viral(oldState)
  }
  else {
    for (const player of oldState.players) {
      if(player.isCurrent){

        player.cards.push(newCard)
        if(player.cards.length>6)
          {
            let chosenCard={
              type: 'connection',
              sourceName: 'University',
              area: 'community',
            } //* front end to give player choice of card to delete
            deleteCard(chosenCard,oldState)
          }
      }
    }
  }

  let newState={...oldState}
  return newState
}

function viral (oldState:Gamestate) {
 
 oldState=infoCard(oldState,3,true)
 oldState.spreadLevel++
 //* shuffle passive misinfo deck and put on top of active misinfo deck
 oldState.misinformationDeckActive=[...shuffle(oldState.misinformationDeckPassive),...oldState.misinformationDeckActive]
 let newState={...oldState}
 return newState
}

function deleteCard(card:Card,oldState:Gamestate){
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

function createConnectionDeck() {
  let deck:Card[]=[];
  for (const source of sources){
    deck.push({type:'connection',sourceName:source.name,area:source.category});
  }
  return deck;
}

function createMisinformationDeck() {
  let deck:Card[]=[];
  for (const source of sources){
    deck.push({type:'misinformation',sourceName:source.name,area:source.category});
  }
  return deck;
}

function outbreak() {
  //todo
}





