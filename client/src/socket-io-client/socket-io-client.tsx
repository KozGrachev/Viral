//based on change of state 
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import { RootState, store } from '../redux/gameState/store'
import { updateGameState } from "../redux/gameState/gameStateActions";
import { Gamestate } from "../types/gameStateTypes";
import { useSelector } from "react-redux";

//connection to the server
dotenv.config({ path: __dirname + '../.env' });
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');


// eslint-disable-next-line react-hooks/rules-of-hooks
const Player = useSelector((state: RootState) => state.Player);
// eslint-disable-next-line react-hooks/rules-of-hooks
const GameState = useSelector((state: RootState) => state.GameState)

// on click - 'start game' 
export const joinRoom = (username: string, room: string) => {
  socket.emit('joinRoom', Player);
}

// Message from server // welcome component 
socket.on('joinConfirmation', (message: string) => {
  console.log(message); // display message to the screen 
});


//subscripion to any game state changes 
store.subscribe(() => {
  const newState = useSelector((state: RootState) => state.GameState)
  socket.emit('onChangeState', { newState, Player })
}
)

//data coming from backend after game state changed
socket.on('updatedState', (newState: Gamestate) => {
  console.log('state is back to after user rejoins', newState)
  newState.received = true;
  store.dispatch(updateGameState(newState))
})


// on click when user wants to restart game 
export const restartGame = () => {
  joinRoom(Player.name, Player.room);
  socket.emit('resumeGame', Player.room)
}

// how to we tell the users 
socket.on('userLeft', (message: string) => console.log(message)) // need a end game button 