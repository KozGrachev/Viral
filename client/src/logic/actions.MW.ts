import { Gamestate, Card,ViralCard, Source, Player } from '../types/gameStateTypes'
import {startGame} from './actions.newState_CO'
import { connections as sources } from './connections'

//! HELPER HELPERS
export function shuffle(array: any[]) {
  let currentIndex = array.length
  let tempValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue
  }
  return array;
}

export function didWin(state: Gamestate) {
  if (state.misinformation.community.debunked === true &&
    state.misinformation.social.debunked === true &&
    state.misinformation.relations.debunked === true)
    return true
  else return false;
}

export function didLose(state: Gamestate) {
  if (state.chaosMeter === 4)
    return true
  if (
    state.misinformation.community.markersLeft === 0 ||
    state.misinformation.social.markersLeft === 0 ||
    state.misinformation.relations.markersLeft === 0
  )
    return true
  if (state.connectionDeck.length === 0) {
    return true
  }
  return false
}

export function createConnectionDeck() {
  let deck: Card[] = [];
  for (const source of sources) {
    deck.push({ cardType: 'connection', sourceName: source.name, misinfoType: source.category });
  }
  return deck;
}

export function createMisinformationDeck() {
  let deck: Card[] = [];
  for (const source of sources) {
    deck.push({ cardType: 'misinformation', sourceName: source.name, misinfoType: source.category });
  }
  return deck;
}

export function createSources() {
  let array: Source[] = [];
  for (const source of sources) {
    array.push({
      name: source.name,
      misinfoType: source.category,
      markers_community: 0,
      markers_social: 0,
      markers_relations: 0,
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearCommunity: false,
      canClearSocial: false,
      canClearRelations: false,
      canShare: [],
      canDebunk: [],
    })
  }
  return array
}

//! SET STATE

export function playerOrder(oldState: Gamestate) { //! where to put this?
  let players = oldState.players
  let newPlayers = shuffle(players)
  newPlayers[0].isCurrent = true
  let newState = { ...oldState, newPlayers }
  return newState
}



export function insertViralCards(oldState: Gamestate) {
  //console.log('inserting viral cards to connection deck')
  let oldDeck = oldState.connectionDeck

  const viral1: ViralCard = { cardType: "viral"}
  const viral2: ViralCard = { cardType: "viral"}
  const viral3: ViralCard = { cardType: "viral"}
  let first = oldDeck.slice(0, (oldDeck.length / 3))
  let second = oldDeck.slice((oldDeck.length / 3), (2 * oldDeck.length / 3))
  let third = oldDeck.slice((2 * oldDeck.length / 3), oldDeck.length)

  first.push(viral1)
  second.push(viral2)
  third.push(viral3)

  first = shuffle(first)
  second = shuffle(second)
  third = shuffle(third)

  let connectionDeck = [...first, ...second, ...third]

  let newState = { ...oldState, connectionDeck }
  return newState

}

function typeCheck(string:string){
  if(
    string==='social'||
    string==='community'|| 
    string==='relations'||
    string==='markers_community'||
    string==='markers_social'||
    string==='markers_relations')
  return true
  else return false
}

//* spread level will define how many times this function is called 

export function dealMisinfoCard(oldState: Gamestate, weight: number, isViral: boolean) {
  let oldDeck: Card[] = oldState.misinformationDeckActive
  let drawSource: string
  if (isViral) {
    drawSource = oldDeck[oldDeck.length - 1].sourceName
  }
  else {
    
    drawSource = oldDeck[0].sourceName
  }
  
  for (const source of oldState.sources) {
    console.log('source name', source.name) //! always high school
    if (source.name === drawSource) {

      while (weight > 0) {
        console.log('WHILE LOOP',weight)
        let key1 = 'markers_' + source.misinfoType
        let key2 = source.misinfoType

        if(typeCheck(key1)&&typeCheck(key2)){
        
          if (source[key1] === 3) {
            oldState = outbreak(source, oldState)
          }
          else {
            console.log('HELLO ANA')
            source[key1]++
            oldState.misinformation[key2].markersLeft--
          }
          didLose(oldState)
          weight--
        }
      }
    
      if (isViral) {
        oldState.misinformationDeckPassive.push(oldDeck[oldDeck.length - 1])
        oldState.misinformationDeckActive.pop()
      }
      else {
        oldState.misinformationDeckPassive.push(oldDeck[0])
        oldState.misinformationDeckActive.shift()
      }
      let newState = { ...oldState }
      return newState
    }
  }
}

export function outbreak(outbreak_source: Source, oldState: Gamestate) {
  //console.log('outbreak!! chaos meter increases')
  oldState.chaosMeter++
  let connections!: string[];
  for (const source of sources) {
    if (source.name === outbreak_source.name) {
      connections = source.connections  //* set list of connections to spread to
    }
  }
  for (const connection of connections) {
    for (const source of oldState.sources) {
      if (source.name === connection) {
        let key = outbreak_source.misinfoType
        if (typeCheck(key))
          if (source[key] === 3) {
            oldState = outbreak(source, oldState)
          }
          else {
            source[key]++
          }

      }
    }
  }
  //console.log('outbreak on', outbreak_source)
  let newState = { ...oldState }
  return newState
}


export function viralCheck(object:any): object is ViralCard{
  return false
}

export function dealConnectionCard(oldState: Gamestate) {
  let newCard: Card|ViralCard = oldState.connectionDeck[0]
  
  if (newCard.cardType==='viral') {
    console.log('viral')
    oldState = viral(oldState)
    oldState.connectionDeck.shift()
  }
  else {
    console.log('hello')
    for (const player of oldState.players) {
      if (player.isCurrent) {
        if(!viralCheck(newCard)){
        player.cards.push(newCard)
        oldState.connectionDeck.shift()
        }
      }
      }
    }
  
  console.log(oldState.players)
  let newState = { ...oldState }
  return newState
}

export function viral(oldState: Gamestate) {
  //console.log('viral card!!!')
  oldState = dealMisinfoCard(oldState, 3, true)!

  oldState.spreadLevel++
  //* shuffle passive misinfo deck and put on top of active misinfo deck
  oldState.misinformationDeckActive = [...shuffle(oldState.misinformationDeckPassive), ...oldState.misinformationDeckActive]
  let newState = { ...oldState }
  return newState
}


export function createPlayer(name: string, color: string, room: string) {

  // update the state fo rthe player
  let random = Math.floor(Math.random() * 100000)
  const player = {
    name,
    id: String(random),
    cards: [],
    cardHandOverflow: false,
    isCurrent: false,
    pawnColor: color,
    currentSource: 'crazy dave',
    room: room
  }
  return player

}

export function addPlayerToGame(player: Player, oldState: Gamestate) {

  oldState.players.push(player)

  let newState = { ...oldState }
  return newState;
}

export function setUp(players: Player[]) {

  let cards;
  let misinfo = 6;
  let index = 0;
  let weights = [3, 3, 2, 2, 1, 1]

  const sources = createSources()
  const spreadLevel = 0;
  const chaosMeter = 0;
  const misinformation = {
    community: { name: 'community', debunked: false, markersLeft: 16 },
    social: { name: 'social', debunked: false, markersLeft: 16 },
    relations: { name: 'relations', debunked: false, markersLeft: 16 },
  }
  const withoutViral = shuffle(createConnectionDeck());
  const misinformationDeckActive = shuffle(createMisinformationDeck());
  const misinformationDeckPassive: Card[] = []
  const dealHistory = 0;
  const turnMovesLeft = 4;
  const gameWon = false;
  const gameLost = false;
  const received = false;
  const gameOn =true; 


  let state = {
    sources,
    players,
    spreadLevel,
    chaosMeter,
    misinformation,
    connectionDeck: withoutViral,
    misinformationDeckActive,
    misinformationDeckPassive,
    dealHistory,
    turnMovesLeft,
    gameWon,
    gameLost,
    received, 
    gameOn
  }

  if (state.players.length > 2) cards = 2;
  else cards = 3

  for (let i = 0; i < state.players.length; i++) { //* deal connection cards to players before inserting viral cards
    //console.log(state.players)
    if (state.players.length > 2) cards = 2;
    else cards = 3
    while (cards > 0) {
      state = dealConnectionCard(state)
      cards--
    }
    state.players[i].isCurrent = false;
    if (i !== state.players.length - 1) state.players[i + 1].isCurrent = true;
    else state.players[0].isCurrent = true;
  }

  let updateState = insertViralCards({ ...state, connectionDeck: withoutViral })


  while (misinfo > 0) {
    let weight = weights[index]
    updateState = dealMisinfoCard(updateState, weight, false)!
    index++
    misinfo--
  }

  //! UPDATE POSSIBLE ACTIONS
  console.log('BEFORE',updateState.sources)
  updateState=startGame(updateState)
  console.log('AFTER',updateState.sources)

  let newState = { ...updateState }
  return newState
}



// export function deleteCard(card: Card, oldState: Gamestate) {
//   for (const player of oldState.players) {
//     if (player.isCurrent) {
//       for (const [i, value] of player.cards.entries()) {
//         if (value === card) {
//           player.cards.splice(i, 1)
//         }
//       }
//     }
//   }
//   let newState = { ...oldState }
//   return newState

// }

// if ((key === `markers_community` && key2 === `community`)
        //   || (key === `markers_social` && key2 === `social`)
        //   || (key === `markers_relations` && key2 === `relations`)
        // ) {

 // if (player.cards.length > 6) { //! not relevent at this stage
        //   let chosenCard = {
        //     cardType: 'connection',
        //     sourceName: 'University',
        //     misinfoType: 'community',
        //   } 
        //   deleteCard(chosenCard, oldState)


// let array = [{
//   name: 'Player 1',
//   id: '1234',
//   cards: [],
//   cardHandOverflow: false,
//   isCurrent: true,
//   pawnColor: 'green',
//   currentSource: 'crazy dave'
// },
// {
//   name: 'Player 2',
//   id: '5678',
//   cards: [],
//   cardHandOverflow: false,
//   isCurrent: false,
//   pawnColor: 'purple',
//   currentSource: 'crazy dave'
// },
// ]









