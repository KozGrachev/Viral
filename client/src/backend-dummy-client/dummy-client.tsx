//based on change of state 
import io from "socket.io-client";
import * as dotenv from 'dotenv';
import {store} from '../redux/gameState/store'
import { updateGameState } from "../redux/gameState/gameStateActions";
import { GameState } from "../types/gameStateTypes";

//connection to the server
dotenv.config({ path: __dirname + '../.env' });
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');


//  socket.emit(state))
store.subscribe(() => {
  let state = store.getState()
  console.log('frontend redux subscribe fires state: ' , state)

  socket.emit('onChangeState', 'Hello')
})

  


// socket.emit('onMove',store))

//data coming from backend 
socket.on('updatedState', (state: GameState) => {
  store.dispatch(updateGameState(state))
})



// const stateAction = (state) => ({
//   type: 'UPDATE_STORE',
//   payload: state,
// });

// //add todo will be called from the component
// export const updateState = (state) => {
//   return (dispatch) => {
//     dispatch(stateAction(state));

//   }
// }

const fakeUser = { username: 'Maria', room: '1' }

// export const sendChangedStateToBE = (state: GameStatedummy): void => {
//   socket.emit('changeState', { fakeUser, state })
// }



export const joinRoom = (username: string, room: string) => {

  // ultimately will passed on or read from the url  with 
  // const { username, room } = Qs.parse(location.search, {
  //   ignoreQueryPrefix: true
  // });

  socket.emit('joinRoom', { username, room });

}

// Message from server
socket.on('joinConfirmation', (message: string) => {
  console.log(message);
});


// on click => 
joinRoom(fakeUser.username, fakeUser.room);


socket.on('userLeft', (message: string) => console.log(message))
// leaveRoom ();


// sending the state to the backend
// socket.emit('Gamestate', {state:IState})

// //getting the state from the 
// socket.on('gamestate', (state:any) => {
//   dispatch({type:UpdateState, payload:state)
// })

// Join chatroom