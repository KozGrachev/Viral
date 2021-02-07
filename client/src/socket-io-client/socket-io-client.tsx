//based on change of state 
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import { store } from '../redux/gameState/store'
import { updateGameState } from "../redux/gameState/gameStateActions";
import { Gamestate, } from "../types/gameStateTypes";

dotenv.config({ path: __dirname + '/.env' });
//connection to the server
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');


// const player = store.getState().players[0]


// // on click - 'start game' 
// export const joinRoom = (name: string, room: string) => {
//   socket.emit('joinRoom', { name, room });
//   console.log(name, room)
// }
// if (player.name.length > 0) {
//   const player = store.getState().players[0]
//   joinRoom(player.name, player.room)
// }

// // Message from server // welcome component 
// // socket.on('joinConfirmation', (message: string) => {
//   console.log(message); // display message to the screen 
// });

//subscripion player state  

// playerStore.subscribe(() => {
//   const player = playerStore.getState()
//   socket.emit('onAddPlayer', player)
// })

// socket.on('playerJoined', (player: Player) => {
//   const newState = store.getState()
//   // newState.received = true;
//   console.log(store.getState(), ' row 43 socket')

//   store.dispatch(addPlayerToGameState(player, newState))
// })


// store.subscribe(() => {
//   const newState = store.getState()
//   const player = newState.players[0]
//   if (!newState.received) {
//     socket.emit('onChangeState', { newState, player })
//   }
// // })

// //data coming from backend after game state changed
// socket.on('updatedState', (newState: Gamestate) => {
//   console.log('does it get herE?', newState)
//   newState.received = true;
//   store.dispatch(updateGameState(newState))
// })



// on click when user wants to restart game 
// export const restartGame = (name: string, room: string) => {
//   joinRoom(name, room);
//   socket.emit('resumeGame', room)
// }

// export const getGames = () => {
//   socket.emit('getGames')
//   socket.on('games', (
//     (data: string[]) => {
//       store.dispatch(GetAllGamesAction(data))
//     }
//   ))
// }



// how to we tell the users 
socket.on('userLeft', (message: string) => console.log(message)) // need a end game button 