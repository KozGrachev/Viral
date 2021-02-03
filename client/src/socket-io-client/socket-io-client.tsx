//based on change of state 
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import { store } from '../redux/gameState/store'
import { updateGameState } from "../redux/gameState/gameStateActions";
import { GameState } from "../types/gameStateTypes";
// import {gameState} from './dummy-state'

//connection to the server
dotenv.config({ path: __dirname + '../.env' });
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');

const fakeUser = { username: 'Maria', room: '2' }
// ultimately will passed on or read from the url  with 
// const { username, room } = Qs.parse(location.search, {
//   ignoreQueryPrefix: true
// });

// on click - 'start game' 
export const joinRoom = (username: string, room: string) => {
  socket.emit('joinRoom', { username, room });
}

// Message from server
socket.on('joinConfirmation', (message: string) => {
  console.log(message); // display message to the screen 
});


//subscripion to any game state changes 
store.subscribe(() => {
  const newState = store.getState()
  if (!newState.received) {
    socket.emit('onChangeState', { newState, fakeUser })
  }
})

//data coming from backend after game state changed
socket.on('updatedState', (newState: GameState) => {
  console.log('state is back to after user rejoins', newState)
  newState.received = true;
  store.dispatch(updateGameState(newState))
})


// on click when user wants to restart game
const restartGame = () => {
  joinRoom(fakeUser.username, fakeUser.room);
  socket.emit('resumeGame', fakeUser.room)
}
// on a click which allows user to resume game 
// restartGame()


socket.on('userLeft', (message: string) => console.log(message))