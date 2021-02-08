import React from 'react';
import "./CureDeck.css"
import { DefaultRootState, useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';






export const CureDeck: React.FC = ():JSX.Element => { // SVGIcon
  // using redux instead of props for real implementation
  const gamestate = useSelector((state: RootState) => state.gameStateReducer)
  console.log('gamestate from curedeck' , gamestate)
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