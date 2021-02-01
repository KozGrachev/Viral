//* SETTUP

//* init misinformation deck
/*
create 24 cards
  grab list of sources
SHUFFLE order (look at algorithm)
save as misinformationDeck.active
  misinformationDeck.passive = []
*/


//* create players
/* 
CREATE PLAYER(name, color, role)
  create new player object w/ input
*/


//* init connection deck
/*
create 24 source cards
  grab list of sources
SHUFFLE order (look at algorithm)
save as connectionDeck.active
*/


//* deal cards
/*
(to each player)
(repeat x times)
DEAL CARD(player)
take 1 cards from connectionDeck.active
add to player.cards[]
*/


//* insert viral cards
/*
create 3 viral cards
  grab viral format
add to remaining source cards
  grab from connectiondeck.active
SHUFFLE
save as connectionDeck.active
*/


//* selecting misinfo cards
/*
(repeat x times with varying weight)

SELECT CARDS(weight)
  remove 1 card from misnformationDeck.active
  add [weight] number of misinfo markers to card source
  (eg for 'high school')
    Gamestate.sources[3].markers = ['red', 'red', 'red']
    Gamestate.misinformation.red.markersLeft -= 3
  add card to misnformationDeck.passive
*/


//* select player order 
/*
randomly shuffle players and store client-side in an order
set first player to
Gamestate.players[0].isCurrent = true; 
*/


//* init state (board)
/*
Gamestate.misinformation.red.markersLeft = 13
Gamestate.misinformation.red.debunked = false
Gamestate.connectionDeck.active = 21
Gamestate.misinformationDeck.active = 21
Gamestate.misinformationDeck.passive = 3
...
Gamestate.chaosMeter = 0
Gamestate.spreadLevel = 0
Gamestate.players = [
  {
    name:'Chris',
    cards: [card1, card2, card3,],
    isCurrent: true,
    pawnColor: 'red',
    role: 'general',
    currentSource: {name: "crazy daves house',...},
  },
  {
    name:'Malcolm',
    cards: [card3, card4, card5,],
    isCurrent: false,
    pawnColor: 'blue',
    role: 'general',
    currentSource: {name: "crazy daves house',...}, 
  }]
*/


//* Players turn

/* 

(Check if player is sure
Depending on UI selection...)

check what players turn it is

TURN(player){

  <PLAYER PART>

  if/while moves {...

  set moves=4

  MOVE()
  CLEAN()
  LOGON()
  LOGOFF()
  DEBUNK(
    DIDWIN()
  )
  SHARE()

  moves--
  }

  <BOARD PART>

  CONNECTIONCARDS{
    let cards=0
    WHILE(cards<2){
    DEAL CARD (see func above)
      if (viralCard){
        VIRAL()
      }
      else{
        if(players.cards.length===6){
          prompt player to remove cards from hand- REMOVE(
            show all 7 cards (6 + 1 new)
            prompt play to discard 1
          )
        }
        else{
          players.cards+= newcard
        }
        cards++
      }
      
    }
      DIDLOSE()
    }
  
  MISINFORMATIONCARDS(){
    check spead level
    while (spread level)
      SELECT CARDS (see above)
      DIDLOSE()
  }
}

CYCLE TO NEXT PLAYER()

*/













