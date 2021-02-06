import React from 'react';
import { DefaultRootState, useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';

export interface sourceDeckProps {
  cardsLeft:number
}


export const SOMECOMPONENT: React.FC<sourceDeckProps> = ({cardsLeft }: sourceDeckProps) => { 
    // using redux instead of props for real implementation

   const left:cardsLeft = useSelector((state: RootState) => state.GameState.connectionDeck.length)

  return (
    <div className="" >

    </div>
  )
}