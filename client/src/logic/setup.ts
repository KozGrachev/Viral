import { Gamestate, Card, ViralCard, Source, Player } from '../types/gameStateTypes'
import { startGame, dealMisinfoCard, dealConnectionCard, shuffle } from './moves'
import { connections as sources } from './connections'

export function didWin(state: Gamestate) {
  if (state.misinformation.community.debunked === true &&
    state.misinformation.social.debunked === true &&
    state.misinformation.relations.debunked === true)
    return true
  else return false;
}

export function didLose(state: Gamestate) {
  if (state.chaosMeter === 4) {
    return true
  }
  if (
    state.misinformation.community.markersLeft === 0 ||
    state.misinformation.social.markersLeft === 0 ||
    state.misinformation.relations.markersLeft === 0
  ) {
    return true
  }
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
export function playerOrder(oldState: Gamestate) { //! where to put this?
  let players = oldState.players
  let newPlayers = shuffle(players)
  newPlayers[0].isCurrent = true
  let newState = { ...oldState, newPlayers }
  return newState
}
export function insertViralCards(oldState: Gamestate) {
  let oldDeck = oldState.connectionDeck
  const viral1: ViralCard = { cardType: "viral" }
  const viral2: ViralCard = { cardType: "viral" }
  const viral3: ViralCard = { cardType: "viral" }
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
export function typeCheck(string: string) {
  if (
    string === 'social' ||
    string === 'community' ||
    string === 'relations' ||
    string === 'markers_community' ||
    string === 'markers_social' ||
    string === 'markers_relations')
    return true
  else return false
}

export function viralCheck(object: any): object is ViralCard {
  return false
}
export function createPlayer(name: string, color: string, room: string) {
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

export function dealConnectionCardToOtherPlayer(player: Player, oldState: Gamestate) {
  let newCard: Card | ViralCard = oldState.connectionDeck[0]

  if (newCard.cardType === 'viral') {
    oldState.connectionDeck = shuffle(oldState.connectionDeck)
    oldState.connectionDeck.push(newCard)
    newCard = oldState.connectionDeck[0]
    oldState.connectionDeck.shift()
  }
  for (const Player of oldState.players) {
    if (Player.id === player.id) {
      if (!viralCheck(newCard)) {
        Player.cards.push(newCard)
        oldState.connectionDeck.shift()
      }
    }
  }
  let state = { ...oldState };
  return state;
}
export function dealCardsToNewPlayer(player: Player, state: Gamestate) {
  let updatedState: any;
  let cards = 3
  while (cards > 0) {
    updatedState = dealConnectionCardToOtherPlayer(player, state)
    cards--
  }
  return { ...updatedState }
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
  const gameOn = true;


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
  if (state.players.length > 0) cards = 3;
  else cards = 3
  for (let i = 0; i < state.players.length; i++) { //* deal connection cards to players before inserting viral cards
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
  updateState = startGame(updateState)
  let newState = { ...updateState }
  return newState
}

export function addPlayerToGame(player: Player, oldState: Gamestate) {
  oldState.players.push(player)
  let newState = { ...oldState }
  return newState;
}
