import React from 'react';
import "./CureDeck.scss"
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';

export const CureDeck: React.FC = ():JSX.Element => {
  const { community, relations, social } = useSelector((state:RootState) => state.gameStateReducer.misinformation)
  const CureDeck = (<>
    <div className="debunk-indicator community">
      {community.markersLeft}
    </div>
    <div className="debunk-indicator relations">
      {relations.markersLeft}
    </div>
    <div className="debunk-indicator social">
      {social.markersLeft}
    </div>
  </>)

  return (
    <div className="cure-deck-container" >
      {CureDeck}
    </div>
  )
}