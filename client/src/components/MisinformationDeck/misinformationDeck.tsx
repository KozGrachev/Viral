import React from 'react';
import { store } from '../../redux/gameState/store';
export const MisinformationDeck: React.FC= () => { 

   //const left= useSelector((state: RootState) => state.GameState.connectionDeck.length)
  const left = store.getState().gameStateReducer.misinformationDeckActive.length


  return (
    <div className="" > 
      Misinformation Cards Left:{left}
    </div>
  )
}