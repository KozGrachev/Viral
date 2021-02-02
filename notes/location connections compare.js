//? should player location be stored on player, in source, or in both?
//* lets try writing example "move" actions with both ways
// Eg: moving from crazy daves house to ...

//* general flow
/*
Players turn
get players location
present player with options/connections
receive players choice
set new player location
move to next part of turn (more actions or card drawing)
*/

//* with connections stored in objects
/*
<CHECK IF PLAYERS TURN>
if (Gamestate.players[0].isCurrent=true) ...
Gamestate.players[0].role.moves===4

const location = Gamestate.players[0].currentSource

location.connections = []

<GET INPUT FROM PLAYER BASED ON CHOICES>
const choice = 0
const nextLocation=location.connection[choice]

<RESET PLAYERS LOCATION>
Gamestate.players[0].currentSource = nextLocation
 
*/

//* with connections stored seperately
/*
...
<DEFINE WHERE CONNECTIONS ARE STORED>

const connections {
  highSchool: ['comments section', 'closed app group', 'university', 'message board'],
  university: ['high school', 'influencer platform', 'video platform']
}

const location = Gamestate.players[0].currentSource

const moveRoutes = Object.entries(connections).filter

<GET INPUT FROM PLAYER BASED ON CHOICES>
const choice = 0
const nextLocation=location.connection[choice]

<RESET PLAYERS LOCATION>
Gamestate.players[0].currentSource = nextLocation

*/