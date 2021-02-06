


Source
  - listening to:
    source.
      canMove: boolean; // can be moved to
      canLogOn: boolean; // can go there if you have the card
      canLogOff: boolean; // can go there if you have the   card of your current location
      
      canClearCommunity: boolean; 
      canClearSocial: boolean;
      canClearRelations: boolean;
      canShare: Player[]; // FOR CARD? when >1 players are in one location, can give any card
                          // show menu with possible players to select from
      canDebunk: string[]; // 'FOR CURES / CARDS' border around cards in that category "0/4 cards selected" <== counter


      eg 
      canMove: *true* -> the source must render a button that triggers the move action when press, render something to show it can be moved to

*discarding cards*
  - listens to:
    player.
      cardHandOverflow: boolean; - turned "true" when you have 6 cards and are dealt a 7th, has to display a choice of all 7 cards and send the chosen card to the handler



**PRESENTATIONAL**

spread rate:
  state.
    spreadLEvel: number; [2,2,3,4][speadlevel] (value at 0-3)

chaos meter:
  state.
   chaosMeter: number; value 1-4/0-3? - (linear)

whose turn is it?
  player.
    isCurrent: boolean;  cycle through all players and check isCurrent

how many moves are left in the current turn?
  state.
    turnMovesLeft: number;

CARDS - 
  - how manyeach player has?
      player.
        cards: Cards[]; - each players hand, always connection cards, maximum 6 (or 7 if being discarded)
  - how many connection cards remaining (when zero, next card drawn loses the game)
    state.
      connectionDeck: Card[];

how many misinformation markers are remaining in the 3 stores?
  state.
    misinformation.
      [community/social/relations]
        markersLeft: number;

how many of each marker is on each source?
  source.
    markers_community/social...: number;

~~~~~~

DisInfo cards 
  - place "rumours" on the sources
  - connect


GAME FUNCTION ORDER:

- the state is updated with all possible moves ( the "canMove..." booleans )

- the UI renders the relevant components based on this state, and in doing so renders buttons/clickable things

- the player clicks on one of these newly-rendered buttons, an action updates the state, and then the next possible moves are also updated 
