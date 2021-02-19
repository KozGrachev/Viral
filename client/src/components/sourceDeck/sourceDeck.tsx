import React from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';

export const SourceDeck: React.FC = () => {
  const left = useSelector((state: RootState) => state.gameStateReducer.connectionDeck.length)
  return (
    <div className="" >
      Source Cards Left:{left}
    </div>
  )
}