import {Gamestate,Card,Source, Player, Misinformation, Connection} from './objects.REDO'
import {didWin, playViralCard} from '../notes/actions.MW.COPY.forImport'
import {sources} from './sources'

//* ACTIONS


function moveAction(oldState: Gamestate, currentPlayerID: Player['id'], location: Source['name']): Gamestate { 
  const newState: Gamestate = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === currentPlayerID ?
          { ...player, currentSource : location } :
          player
      ),
    turnMovesLeft : oldState.turnMovesLeft - 1, 
  };
  return nextMoveChecker(newState, currentPlayerID);
}


function clearMisinfo(oldState: Gamestate, currentPlayerID: Player['id'], misinfoType: Misinformation['name'], location: Source['name']): Gamestate {
  const sourceIndex: number = oldState.sources.map((source) => source.name).indexOf(location);
  let noOfMarkers: number = 1;
  if (oldState.misinformation[misinfoType].debunked) {
    noOfMarkers = oldState.sources[sourceIndex][`markers_${misinfoType}`]
  };
  const newState: Gamestate = 
  {
    ...oldState,
    sources : oldState.sources
      .map((source) => source.name === location ?
          { ...source, [`markers_${misinfoType}`] : source[`markers_${misinfoType}`] - noOfMarkers } :
          source
      ),
    misinformation: {
      ...oldState.misinformation,
      [misinfoType] : {
        ...oldState.misinformation[misinfoType],
        markersLeft : oldState.misinformation[misinfoType].markersLeft + noOfMarkers
      }
    },
    turnMovesLeft : oldState.turnMovesLeft - 1,
  };
  return nextMoveChecker(newState, currentPlayerID);
}


function shareCard(oldState: Gamestate, currentPlayerID: Player['id'], recipient: Player['id'], sharedCard: Card['sourceName']): Gamestate {
  const newState: Gamestate = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === currentPlayerID ?
          { 
            ...player, 
            cards : player.cards.filter((card) => card.sourceName !== sharedCard) 
          } :
            player.id === recipient ?
              { 
                ...player, 
                cards : [...player.cards, {
                  cardType: 'connection',
                  sourceName: sharedCard,
                  misinfoType: null
                  }], 
              } :
                player
      ),
    turnMovesLeft : oldState.turnMovesLeft - 1,
  };
  return nextMoveChecker(newState, currentPlayerID);
}


function logOnOff(oldState: Gamestate, currentPlayerID: Player['id'], location: Source['name'], usedCard: Card['sourceName']): Gamestate {
  const newState: Gamestate = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === currentPlayerID ?
          { 
            ...player, 
            currentSource : location, 
            cards : player.cards.filter((card) => card.sourceName !== usedCard)
          } :
          player
      ),
    turnMovesLeft : oldState.turnMovesLeft - 1,
  };
  return nextMoveChecker(newState, currentPlayerID); 
}


function debunkMisinfo(oldState: Gamestate,  currentPlayerID: Player['id'], usedCards: Card['sourceName'][], misinfoType: Misinformation['name']): Gamestate {
  const newState: Gamestate = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === currentPlayerID ?
          { 
            ...player, 
            cards : player.cards.filter((card) => !usedCards.includes(card.sourceName)) 
          } :
            player
      ),
    misinformation : {
      ...oldState.misinformation,
      [misinfoType] : {
        ...oldState.misinformation[misinfoType],
        debunked : true,
      }
    },
    turnMovesLeft : oldState.turnMovesLeft - 1,
  };
  if (didWin(newState)) { 
    return {
      ...newState,
      gameWon: true,
    }
  } else {
    return nextMoveChecker(newState, currentPlayerID)
  }
}


//* TURN

function updatePossibleActions(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
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
    sources : oldState.sources
      .map((source) => source.name === location ?
          { ...source, 
            canMove : false,
            canLogOn: false,
            canLogOff: false,
            canClearCommunity: clearCommunityMisinfo,
            canClearSocial: clearSocialMisinfo,
            canClearRelations: clearRelationsMisinfo,
            canShare: possibleShares,
            canDebunk: debunkable,
          } :
          { ...source, 
            canMove : adjacents.includes(source.name),
            canLogOn: logonPossible.includes(source.name),
            canLogOff: logoffPossible,
            canClearCommunity: clearCommunityMisinfo,
            canClearSocial: clearSocialMisinfo,
            canClearRelations: clearRelationsMisinfo,
            canShare: [],
            canDebunk: [],
          }
      ),
  };
  return newState;
}


function boardActions(oldState: Gamestate, currentPlayerID: Player['id'], noOfCards: number): Gamestate {
  // deal connection cards
  const playerIndex = oldState.players
    .map((player) => player.id)
    .indexOf(currentPlayerID);
  let cardsLeft = noOfCards;
  while (cardsLeft > 0) {
    const newState = dealConnectionCard(oldState, currentPlayerID);
    if (newState.players[playerIndex].cards.length > 6) {
      return {
        ...newState,
        players : newState.players
          .map((player) => player.id === currentPlayerID ?
              { ...player, cardHandOverflow : true } :
              player
          ),
        dealHistory : cardsLeft - 1,
      } //! exit function here
    }
    cardsLeft --;
  }
  // deal misinfo cards

  //TODO - finish with misinfo deal, hook up so loop complete
  


}

//* HELPERS


function dealConnectionCard(oldState: Gamestate, currentPlayerID: Player['id']):Gamestate {
  //* first check if this card is the last one, thus ending the game
  //! does the game end when card pile is zero, or is there one last move (ie when card pile -1)?
  if (oldState.connectionDeck.length === 1) {
    return {
      ...oldState,
      gameLost : true
    }
  }
  const newCard: Card = oldState.connectionDeck[0]
  if (newCard.cardType === 'viral') {
    //? does viral function remove card? should it be returned? should it also break for game checks?
    playViralCard(oldState)
  }
  else {
    const newState: Gamestate = 
    {
      ...oldState,
      players : oldState.players
        .map((player) => player.id === currentPlayerID ?
        { 
          ...player, 
          cards : [...player.cards, newCard], 
        } :
          player
        ),
      connectionDeck : oldState.connectionDeck.slice[1]
    };
    return newState;  
  }
}


function nextMoveChecker(oldState: Gamestate, currentPlayerID: Player['id']): Gamestate {
  if (oldState.turnMovesLeft > 0) {
    return updatePossibleActions(oldState, currentPlayerID)
  } else {
    //? move onto 'board actions' part of turn
    return oldState; //! change here
  }
}


// called when player has chosen to discard card from hand, when cardHandOverflow === true
function discardCard(oldState: Gamestate, currentPlayerID: Player['id'], discardedCard: Card['sourceName']): Gamestate {
  const newState: Gamestate = 
  {
    ...oldState,
    players : oldState.players
      .map((player) => player.id === currentPlayerID ?
          { 
            ...player, 
            cards : player.cards.filter((card) => card.sourceName !== discardedCard),
            cardHandOverflow: false, 
          } :
            player
      ),
  };
  //? calling boardActions with newState.dealHistory will decrement the amount of connection cards to be dealt, allowing the function to continue where it left off
  return boardActions(newState, currentPlayerID, newState.dealHistory)
}


//* RESOURCES
