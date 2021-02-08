import React from 'react';
import "./CureDeck.css"
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';




export const CureDeck: React.FC = ():JSX.Element => { 
  
  const gamestate = useSelector((state: RootState) => state.gameStateReducer)
  
  let misinformationCommunityHasDebunked = gamestate.misinformation.community.debunked
  let misinformationRelationsHasDebunked = gamestate.misinformation.relations.debunked
  let misinformationSocialHasDebunked = gamestate.misinformation.social.debunked




  let noCureString = "Not debunked yet - we're screwed"
  let cureString = "Debunked!! bitches!"
  const CureDeck = (<>
    <div className="misinformation-cure-deck-container A">{misinformationCommunityHasDebunked ? cureString : noCureString}</div>
    <div className="misinformation-cure-deck-container B">{misinformationRelationsHasDebunked ? cureString : noCureString}</div>
    <div className="misinformation-cure-deck-container C">{misinformationSocialHasDebunked ? cureString : noCureString}</div>


  </>)

  return (
    <div className="cure-deck-container" >
      {CureDeck}
    </div>
  )
}