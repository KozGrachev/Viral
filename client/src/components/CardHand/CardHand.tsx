import React from 'react';
import { SourceCard, } from '../SourceCard/SourceCard';
import { RootState } from '../../redux/gameState/store'
import { useSelector } from 'react-redux';
import { Card as SourceCardType } from '../../types/gameStateTypes';
import './CardHand.scss'


export const CardHand: React.FC = () => {


  const Player = useSelector((state: RootState) => state.playerStateReducer);
  const cards = useSelector((state: RootState) => state.gameStateReducer.players.filter(player => player.id === Player.id)[0].cards);
  console.log(`%c REMAINING PLAYER CARDS`,`background-color: lightgray; color: indigo; padding: 10px`);

  const renderCards = (cardArray: SourceCardType[]) => {
    return cardArray.map(card => {
      // console.log(card)
      return <SourceCard name={card.sourceName} category={card.misinfoType} canShare={[]} />
    })
  }

  return (
    <div className="source-card-hand">
      {renderCards(cards)}
    </div>
  )
}
