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

const fakeUser = { username: 'Maria', room: '1' }
// ultimately will passed on or read from the url  with 
// const { username, room } = Qs.parse(location.search, {
//   ignoreQueryPrefix: true
// });

store.subscribe(() => {
  const newState = store.getState()
  if (!newState.received) {
    socket.emit('onChangeState', { newState, fakeUser })
  }
})


//data coming from backend 
socket.on('updatedState', (newState: GameState) => {
  console.log('state is back to client', newState.currentTurn.movesLeft, 'status')
  newState.received = true;
  store.dispatch(updateGameState(newState))
})


const joinRoom = (username: string, room: string) => {
  socket.emit('joinRoom', { username, room });
}

// Message from server
socket.on('joinConfirmation', (message: string) => {
  console.log(message); // display message to the screen 
});


// on 'start' => 
joinRoom(fakeUser.username, fakeUser.room);

socket.on('userLeft', (message: string) => console.log(message))