import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase } from '../../helpers/utils';
import { SourceCard, SourceCardProps } from '../SourceCard/SourceCard';
import { RootState, store } from '../../redux/gameState/store'
import { DefaultRootState, useSelector } from 'react-redux';
import { Gamestate, SourceCard as SourceCardType } from '../../types/gameStateTypes';
// import { initDummyState } from '../../logic/dummyState.REDO_CO'



// const gamestate = useSelector((state: RootState) => state.GameState.connectionDeck)
// state.player[playerIndex].cards = []


export const CardHand: React.FC = () => { // SVGIcon
  // const cards: Card[] = useSelector((state: RootState) => state.GameState.players[0].cards)
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

  // push dummy card to hand //! UNDO




  const renderCards = (cardArray: SourceCardType[]) => {
    return cardArray.map(card => {
      console.log(card)
      return <SourceCard name={card.sourceName} category={card.misinfoType} />
    })
  }

  return (
    <div className="source-card-hand">
      {renderCards(cards)}
    </div>
  )
}

