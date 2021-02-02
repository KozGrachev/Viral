
//based on change of state 
import io from "socket.io-client";

import * as dotenv from 'dotenv';

//connection to the server
dotenv.config({ path: __dirname + '../.env' });
const socket = io(process.env.SERVER_URL || 'http://localhost:3002');





socket.on('updatedState', (state: GameStatedummy) => {

  console.log(state, 'state')
  // also could import store and then use store.dispatch(action)  
  // if this doesn't work 
  // updateState(state);
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

export const sendChangedStateToBE = (state: GameStatedummy): void => {
  socket.emit('changeState', { fakeUser, state })
}
interface GameStatedummy {

}



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