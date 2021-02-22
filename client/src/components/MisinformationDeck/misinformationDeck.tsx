import React from 'react';
import { RootState } from '../../redux/gameState/store';
import { useSelector } from 'react-redux';
export const MisinformationDeck: React.FC= () => { 

  const left = useSelector((state: RootState) => state.gameStateReducer.misinformationDeckActive.length);

  return (
    <div className="" > 
      Misinformation Cards Left:{left}
    </div>
  );
};