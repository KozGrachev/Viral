
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import { store } from '../redux/gameState/store'
import { GetAllGamesAction, updateGameState } from "../redux/gameState/gameStateActions";
import { Gamestate } from "../types/gameStateTypes";

dotenv.config({ path: __dirname + '../.env' });
const socket = io();


const Player = store.getState().playerStateReducer

 
export const joinRoom = (player: typeof Player) => {
  socket.emit('joinRoom', player);
}


socket.on('joinConfirmation', (message: string) => {
  console.log(message); 

});



store.subscribe(() => {
  const newState = store.getState().gameStateReducer
  const Player = store.getState().playerStateReducer

  if (!newState.received && Player && newState.gameOn) {
    socket.emit('onChangeState', { newState, Player })
  }
})


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


socket.on('userLeft', (message: string) => console.log(message)) 