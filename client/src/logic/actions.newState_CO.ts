import { Gamestate, Card, Source, Player, Misinformation, Connection } from '../types/gameStateTypes'
import { didWin, viral as playViralCard, dealMisinfoCard, outbreak } from './actions.MW'
import { connections as sources } from './connections'

//* START THE GAME
//? called when start button pressed, after game initialised and player order set

export function startGame(oldState: Gamestate) {
  const currentPlayerID: Player['id'] = oldState.players[0].id;
  return updatePossibleActions(oldState, currentPlayerID);
}

//* ACTIONS

export function moveAction(oldState: Gamestate, currentPlayerID: Player['id'], location: Source['name']): Gamestate {
  const newState: Gamestate =
  {
    ...oldState,
    players: oldState.players
      .map((player) => player.id === currentPlayerID ?
        { ...player, currentSource: location } :
        player
      ),
    turnMovesLeft: oldState.turnMovesLeft - 1,
  };
  console.log('player moved to', location);
  console.log('there are', newState.turnMovesLeft, 'moves left')
  return nextMoveChecker(newState, currentPlayerID);
}


export function clearMisinfo(oldState: Gamestate, currentPlayerID: Player['id'], misinfoType: Misinformation['name'], location: Source['name']): Gamestate {
  const sourceIndex: number = oldState.sources.map((source) => source.name).indexOf(location);
  let noOfMarkers: number = 1;
  if (oldState.misinformation[misinfoType].debunked) {
    noOfMarkers = oldState.sources[sourceIndex][`markers_${misinfoType}`]
  };
  const newState: Gamestate =
  {
    ...oldState,
    sources: oldState.sources
      .map((source) => source.name === location ?
        { ...source, [`markers_${misinfoType}`]: source[`markers_${misinfoType}`] - noOfMarkers } :
        source
      ), 
    misinformation: {
      ...oldState.misinformation,
      [misinfoType]: {
        ...oldState.misinformation[misinfoType],
        markersLeft: oldState.misinformation[misinfoType].markersLeft + noOfMarkers
      }
    },
    turnMovesLeft: oldState.turnMovesLeft - 1,
  };
  console.log('player cleared', noOfMarkers, misinfoType);
  console.log('there are', newState.turnMovesLeft, 'moves left')
  return nextMoveChecker(newState, currentPlayerID);
}


export function shareCard(oldState: Gamestate, currentPlayerID: Player['id'], recipient: Player['id'], sharedCard: Card['sourceName']): Gamestate {
  const newState: Gamestate =
  {
    ...oldState,
    players: oldState.players
      .map((player) => player.id === currentPlayerID ?
        {
          ...player,
          cards: player.cards.filter((card) => card.sourceName !== sharedCard)
        } :
        player.id === recipient ?
          {
            ...player,
            cards: [...player.cards, {
              cardType: 'connection',
              sourceName: sharedCard,
              misinfoType: null
            }],
          } :
          player
      ),
    turnMovesLeft: oldState.turnMovesLeft - 1,
  };
  console.log('player shared', sharedCard, 'with player', recipient);
  console.log('there are', newState.turnMovesLeft, 'moves left')
  return nextMoveChecker(newState, currentPlayerID);
}


export function logOnOff(oldState: Gamestate, currentPlayerID: Player['id'], location: Source['name'], usedCard: Card['sourceName']): Gamestate {
  const newState: Gamestate =
  {
    ...oldState,
    players: oldState.players
      .map((player) => player.id === currentPlayerID ?
        {
          ...player,
          currentSource: location,
          cards: player.cards.filter((card) => card.sourceName !== usedCard)
        } :
        player
      ),
    turnMovesLeft: oldState.turnMovesLeft - 1,
  };
  console.log('player flew to', location, 'using the', usedCard, 'card');
  console.log('there are', newState.turnMovesLeft, 'moves left')
  return nextMoveChecker(newState, currentPlayerID);
}


export function debunkMisinfo(oldState: Gamestate, currentPlayerID: Player['id'], usedCards: Card['sourceName'][], misinfoType: Misinformation['name']): Gamestate {
  const newState: Gamestate =
  {
    ...oldState,
    players: oldState.players
      .map((player) => player.id === currentPlayerID ?
        {
          ...player,
          cards: player.cards.filter((card) => !usedCards.includes(card.sourceName))
        } :
        player
      ),
    misinformation: {
      ...oldState.misinformation,
      [misinfoType]: {
        ...oldState.misinformation[misinfoType],
        debunked: true,
      }
    },
    turnMovesLeft: oldState.turnMovesLeft - 1,
  };
  if (didWin(newState)) {
    console.log('congratulations, you debunked all the misinformation and won')
    return {
      ...newState,
      gameWon: true,
    }
  } else {
    console.log('player debunked', misinfoType);
    console.log('there are', newState.turnMovesLeft, 'moves left')
    return nextMoveChecker(newState, currentPlayerID)
  }
}


//* TURN

export function updatePossibleActions(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
  //* settup
  const playerIndex: number = oldState.players.map((player) => player.id).indexOf(currentPlayerID);
  const location: Player['currentSource'] = oldState.players[playerIndex].currentSource;
  const sourceIndex: number = oldState.sources.map((source) => source.name).indexOf(location);
  //* move check
  const adjacents: string[] = sources.filter((source) => source.name === location)[0].connections;
  //* clear checks
  const clearCommunityMisinfo: boolean = oldState.sources[sourceIndex].markers_community > 0;
  const clearSocialMisinfo: boolean = oldState.sources[sourceIndex].markers_social > 0;
  const clearRelationsMisinfo: boolean = oldState.sources[sourceIndex].markers_relations > 0;
  //* share checks
  // check if cards in hand
  let possibleShares: Player[] = [];
  if (oldState.players[playerIndex].cards.length > 0) {
    // check if another player is there
    const otherPlayers: Player[] = oldState
      .players
      .filter((player) => player.id !== currentPlayerID)
      .filter((otherPlayer) => otherPlayer.currentSource === location);
    // check players have space in their hand
    possibleShares = otherPlayers
      .filter((player) => player.cards.length < 6)
  }
  //* logoff checks
  // check hand contains current location card
  const logoffPossible: boolean = oldState.players[playerIndex].cards
    .filter((card) => card.sourceName === location)
    .length > 0;
  //* logon check
  // check hand contains other location card
  const logonPossible: Card['sourceName'][] = oldState.players[playerIndex].cards
    .map((card) => card.sourceName)
    .filter((name) => name !== location);
  //* debunk checks
  // check if we are at home (debunk 1/2)
  const atHome: boolean = location === 'crazy dave';
  // check hand contains 4 of any misinfo type/area (debunk 2/2)
  const debunkable: Misinformation['name'][] = []
  if (atHome) {
    if (
      oldState.players[playerIndex].cards
        .filter((card) => card.misinfoType === 'community')
        .length >= 4) {
      debunkable.push('community')
    };
    if (
      oldState.players[playerIndex].cards
        .filter((card) => card.misinfoType === 'social')
        .length >= 4) {
      debunkable.push('social')
    };
    if (
      oldState.players[playerIndex].cards
        .filter((card) => card.misinfoType === 'relations')
        .length >= 4) {
      debunkable.push('relations')
    };
  };
  //* UPDATE ENTIRE STATE WITH ALL ABOVE CHANGES
  const newState: Gamestate =
  {
    ...oldState,
    sources: oldState.sources
      .map((source) => source.name === location ?
        {
          ...source,
          canMove: false,
          canLogOn: false,
          canLogOff: false,
          canClearCommunity: clearCommunityMisinfo,
          canClearSocial: clearSocialMisinfo,
          canClearRelations: clearRelationsMisinfo,
          canShare: possibleShares,
          canDebunk: debunkable,
        } :
        {
          ...source,
          canMove: adjacents.includes(source.name),
          canLogOn: logonPossible.includes(source.name),
          canLogOff: logoffPossible,
          canClearCommunity: false,
          canClearSocial: false,
          canClearRelations: false,
          canShare: [],
          canDebunk: [],
        }
      ),
  };
  return newState;
}


export function boardActions(oldState: Gamestate, currentPlayerID: Player['id'], noOfCards: number): Gamestate {
  // deal connection cards
  const playerIndex = oldState.players
    .map((player) => player.id)
    .indexOf(currentPlayerID);
  let cardsLeft = noOfCards;
  let newState: Gamestate = oldState;
  while (cardsLeft > 0) {
    newState = dealConnectionCard(oldState, currentPlayerID);
    if (newState.players[playerIndex].cards.length > 6) {
      console.log('your hand is full, you need to discard a card');
      return {
        ...newState,
        players: newState.players
          .map((player) => player.id === currentPlayerID ?
            { ...player, cardHandOverflow: true } :
            player
          ),
        dealHistory: cardsLeft - 1,
      } // exits function here
    }
    cardsLeft--;
  }
  //? do we need to put breaks here, and how, for the front end to update or show when a card has been dealt?
  // check spread marker for weight
  // deal misinfo cards
  let misinfoCardNo = [2, 2, 3, 4][newState.spreadLevel];
  while (misinfoCardNo > 0) {
    newState = dealMisinfoCard(newState, 1, false)
  }
  //change current player turn
  //? anything else needs resetting?
  return nextTurn(newState, currentPlayerID)
}

//* HELPERS

export function nextTurn(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
  const playerIndex: number = oldState.players.map((player) => player.id).indexOf(currentPlayerID);
  const nextPlayerIndex: number = playerIndex === oldState.players.length - 1 ?
    0 :
    playerIndex + 1;
  const newState: Gamestate =
  {
    ...oldState,
    players: oldState.players
      .map((player, index) => index === playerIndex ?
        { ...player, isCurrent: false } :
        index === nextPlayerIndex ?
          { ...player, isCurrent: true } :
          player
      ),
    // reset number of moves
    turnMovesLeft: 4,
  };
  console.log('next players turn!')
  return updatePossibleActions(newState, newState.players[nextPlayerIndex].id)
}


export function dealConnectionCard(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
  //* if no cards left then game is lost
  if (oldState.connectionDeck.length === 0) {
    console.log('no more connections... you lost!');
    return {
      ...oldState,
      gameLost: true
    }
  }
  const newCard: Card = oldState.connectionDeck[0]
  if (newCard.cardType === 'viral') {
    //? does viral function remove card? should it be returned? should it also break for game checks?
    console.log('you drew a viral card!');
    return playViralCard(oldState)
  }
  else {
    const newState: Gamestate =
    {
      ...oldState,
      players: oldState.players
        .map((player) => player.id === currentPlayerID ?
          {
            ...player,
            cards: [...player.cards, newCard],
          } :
          player
        ),
      connectionDeck: oldState.connectionDeck.slice[1]
    };
    console.log('player was dealt a', newCard.sourceName, 'connection card');
    return newState;
  }
}


export function nextMoveChecker(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
  if (oldState.turnMovesLeft > 0) {
    return updatePossibleActions(oldState, currentPlayerID)
  } else {
    //? move onto 'board actions' part of turn
    return boardActions(oldState, currentPlayerID, 2)
  }
}


// called when player has chosen to discard card from hand, when cardHandOverflow === true
export function discardCard(oldState: Gamestate, currentPlayerID: Player['id'], discardedCard: Card['sourceName']): Gamestate {
  const newState: Gamestate =
  {
    ...oldState,
    players: oldState.players
      .map((player) => player.id === currentPlayerID ?
        {
          ...player,
          cards: player.cards.filter((card) => card.sourceName !== discardedCard),
          cardHandOverflow: false,
        } :
        player
      ),
  };
  //? calling boardActions with newState.dealHistory will decrement the amount of connection cards to be dealt, allowing the function to continue where it left off
  return boardActions(newState, currentPlayerID, newState.dealHistory)
}