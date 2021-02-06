import React from 'react';
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/gameState/store';

export interface sourceDeckProps {
  cardsLeft:number
}


export const sourceDeck: React.FC<sourceDeckProps> = ({ }: sourceDeckProps) => { 
    // using redux instead of props for real implementation

   //const left= useSelector((state: RootState) => state.GameState.connectionDeck.length)

  return (
    <div className="" > 
      {}
    </div>
  )
}