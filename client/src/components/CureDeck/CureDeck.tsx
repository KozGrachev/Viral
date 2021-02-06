import React from 'react';
import "./CureDeck.css"
import { DefaultRootState, useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';


export interface CureDeckProps {

  hasACureForMisinformationA: boolean,
  hasACureForMisinformationB: boolean,
  hasACureForMisinformationC: boolean,

}



export const CureDeck: React.FC<CureDeckProps> = ({ hasACureForMisinformationA
  , hasACureForMisinformationB, hasACureForMisinformationC }: CureDeckProps) => { // SVGIcon
  // using redux instead of props for real implementation
  const gamestate = useSelector((state: RootState) => state.GameState.connectionDeck)



  let noCureString = "No cure - we're screwed"
  let cureString = "We have a cure bitches!"
  const CureDeck = (<>
    <div className="misinformation-cure-deck-container A">{hasACureForMisinformationA ? cureString : noCureString}</div>
    <div className="misinformation-cure-deck-container B">{hasACureForMisinformationB ? cureString : noCureString}</div>
    <div className="misinformation-cure-deck-container C">{hasACureForMisinformationC ? cureString : noCureString}</div>


  </>)

  return (
    <div className="cure-deck-container" >
      {CureDeck}
    </div>
  )
}