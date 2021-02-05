export {}
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Gamestate } from '../types/gameStateTypes';
// import { decrementMoves } from '../redux/gameState/gameStateActions'
// import { joinRoom } from './socket-io-client';

// export const ReduxDummy: React.FC = (): JSX.Element => {

//   const gameState = useSelector((state: Gamestate) => state)
//   // const movesLeft = Number(gameState.currentTurn.movesLeft) - 1
//   const dispatch = useDispatch();
//   const click = () => {
//     dispatch(decrementMoves(movesLeft))
//   }
//   const fakeUser = { username: 'Maria', room: '2' }

//   const startGame = () => {
//     joinRoom(fakeUser.username, fakeUser.room);
//   }

//   return (
//     <div>
//       <h1>
//         {movesLeft}
//       </h1>
//       <button onClick={startGame}>Start Game</button>
//       <br />
//       <button onClick={click}>Hello, Click me</button>
//     </div>
//   )
// }