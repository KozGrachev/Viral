import React from 'react';
import { SourceCard, } from '../SourceCard/SourceCard';
import { RootState } from '../../redux/gameState/store'
import { useSelector } from 'react-redux';
import { Card as SourceCardType } from '../../types/gameStateTypes';


export const CardHand: React.FC = () => {

  // const cards = useSelector((state: RootState) => state.playerStateReducer.cards)
  const cards: SourceCardType[] = [
      {
        cardType: 'connection',
        sourceName: 'high school',
        misinfoType: 'community',
      },
      {
        cardType: 'connection',
        sourceName: 'tiktok',
        misinfoType: 'social',
      },
      {
        cardType: 'connection',
        sourceName: 'fran from hr',
        misinfoType: 'relations',
      },
    ]

  const renderCards = (cardArray: SourceCardType[]) => {
    return cardArray.map(card => {
      console.log(card)
      return <SourceCard name={card.sourceName} category={card.misinfoType} canShare={[]} />
    })
  }

  return (
    <div className="source-card-hand">
      {renderCards(cards)}
    </div>
  )
}


  // push dummy card to hand //! UNDO


