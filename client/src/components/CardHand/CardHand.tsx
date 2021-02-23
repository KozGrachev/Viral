import React, { useState, useEffect } from 'react';
import { SourceCard, } from '../SourceCard/SourceCard';
import { RootState } from '../../redux/gameState/store'
import { useSelector } from 'react-redux';
import { Card as SourceCardType } from '../../types/gameStateTypes';
import { DiscardModal } from './DiscardModal';
import './CardHand.scss'

export const CardHand: React.FC = () => {
  const Player = useSelector((state: RootState) => state.playerStateReducer);
  const cards = useSelector((state: RootState) => state.gameStateReducer.players.filter(player => player.id === Player.id)[0].cards);
  const cardHandOverflow = useSelector((state: RootState) => state.gameStateReducer.players.filter(player => player.id === Player.id)[0].cardHandOverflow);
  const dealHistory = useSelector((state: RootState) => state.gameStateReducer.dealHistory);
  const renderCards = (cardArray: SourceCardType[]) => {
    return cardArray.map(card => {
      if(card.cardType !=='viral' ) {
        return <SourceCard name={card.sourceName} key={card.sourceName} category={card.misinfoType} canShare={[]} />
      }  else {
        return <h1> this is a viral card you are trying to pass </h1>
      }
    })
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  let cardsToDiscard = cards;

  useEffect(() => { 
    if (cardHandOverflow) { 
      setIsOpen(true); }}, 
      [cardHandOverflow, setIsOpen, dealHistory])


  return (
    <>
      {modalIsOpen ? 
        <DiscardModal 
          modalIsOpen={modalIsOpen} 
          closeModal={closeModal}
          discardableCards={cardsToDiscard}
        /> : null}
      <div className="source-card-hand">
        {'--------------' + cardHandOverflow}
        {renderCards(cards)}
      </div>
    </>
  )
}
