import React from 'react';
import { store } from '../../redux/gameState/store';
export const SourceDeck: React.FC= () => { 

   //const left= useSelector((state: RootState) => state.GameState.connectionDeck.length)
  const left = store.getState().gameStateReducer.connectionDeck.length


  return (
    <div className="" > 
      Source Cards Left:{left}
    </div>
  )
}