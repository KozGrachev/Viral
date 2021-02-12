//based on change of state 
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import { store } from '../redux/gameState/store'
import { GetAllGamesAction, updateGameState } from "../redux/gameState/gameStateActions";
import { Gamestate } from "../types/gameStateTypes";
dotenv.config({ path: __dirname + '../.env' });
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');


const Player = store.getState().playerStateReducer

// on click - 'start game' 
export const joinRoom = (player: typeof Player) => {
  socket.emit('joinRoom', player);
}

// Message from server // welcome component 
socket.on('joinConfirmation', (message: string) => {
  console.log(message); // display message to the screen 

});

//subscripion to any game state changes 

store.subscribe(() => {
  const newState = store.getState().gameStateReducer
  const Player = store.getState().playerStateReducer
  if (!newState.received && Player && newState.gameOn) {
    socket.emit('onChangeState', { newState, Player })
  }
})


//data coming from backend after game state changed
socket.on('updatedState', (newState: Gamestate) => {
  console.log('newstate from client - always check this ', newState)
  newState.received = true;
  store.dispatch(updateGameState(newState))
})

export const getGame = (player: typeof Player) => {
  player && socket.emit('retriveGame', player)

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