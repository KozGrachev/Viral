//based on change of state 
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import { store } from '../redux/gameState/store'
import { GetAllGamesAction, updateGameState } from "../redux/gameState/gameStateActions";
import { Gamestate } from "../types/gameStateTypes";
dotenv.config({ path: __dirname + '/.env' });
//connection to the server
dotenv.config({ path: __dirname + '../.env' });
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');


const Player = store.getState().playerStateReducer

// on click - 'start game' 
export const joinRoom = (name: string, room: string) => {
  socket.emit('joinRoom', { name, room });
  console.log(name, room)
}

// Message from server // welcome component 
socket.on('joinConfirmation', (message: string) => {
  console.log(message); // display message to the screen 
});


//subscripion to any game state changes 

store.subscribe(() => {
  const newState = store.getState().gameStateReducer
  if (!newState.received && newState) {
    socket.emit('onChangeState', { newState, Player })
  }
})

//data coming from backend after game state changed
socket.on('updatedState', (newState: Gamestate) => {
  newState.received = true;
  store.dispatch(updateGameState(newState))
})

export const getGame = (room: string) => {
  socket.emit('retriveGame', room)
}

// on click when user wants to restart game 
export const restartGame = (name: string, room: string) => {
  joinRoom(name, room);
  socket.emit('resumeGame', { Player })
}

export const getGames = () => {
  socket.emit('getGames')
  socket.on('games', (
    (data: string[]) => {
      store.dispatch(GetAllGamesAction(data))
    }
  ))
}
getGames();



// how to we tell the users 
socket.on('userLeft', (message: string) => console.log(message)) // need a end game button 