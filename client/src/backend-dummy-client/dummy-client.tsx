
//based on change of state 
import io from "socket.io-client";

const socket = io('http://192.168.1.26:3001')

const fakeUser = { username: 'Maria', room: '1' }




export const sendChangedStateToBE = (state: GameStatedummy): void => {
  socket.emit('changeState', { fakeUser, state })

}
interface GameStatedummy {

}

// //add the thunk 
// const addTodoStarted = (STATE) => ({
//   type: 'UPDATE_STORE', 
//   payload:STATE, 
// });

// //add todo will be called from the component
// export const addTodo = (STATE) => {
//   return (dispatch) => {
//     dispatch(addTodoStarted(STATE));


// socket.on('updatedState', (state:GameStatedummy) => {

// addTodo(state); 

//   //state will be the payload 
//   //trigger redux with middleware dispatch 
// })


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

// export const leaveRoom = () => {
//   socket.emit('disconnect')
// }
//
//onclick => 


socket.on('userLeft', (message: string) => console.log(message))
// leaveRoom ();


// sending the state to the backend
// socket.emit('Gamestate', {state:IState})

// //getting the state from the 
// socket.on('gamestate', (state:any) => {
//   dispatch({type:UpdateState, payload:state)
// })

// Join chatroom