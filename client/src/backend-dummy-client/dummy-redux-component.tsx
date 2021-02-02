
import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { GameState } from '../types/gameStateTypes';
import {decrementMoves} from '../redux/gameState/gameStateActions'
export const ReduxDummy: React.FC = (): JSX.Element => {

  const gameState = useSelector((state: GameState) => state)

  

  const movesLeft =Number(gameState.currentTurn.movesLeft)-1

  const dispatch = useDispatch(); 

  const click = () => {
    dispatch(decrementMoves(movesLeft))
  }

  return (
    <div>
      {movesLeft}
      <button onClick ={click}>Hello, Click me</button> 
    </div>
  )

  
}