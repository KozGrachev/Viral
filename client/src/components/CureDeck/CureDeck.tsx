import React from 'react';
import "./CureDeck.css"

export interface CureDeckProps {
  
  hasACureForMisinformationA: boolean,
  hasACureForMisinformationB: boolean,
  hasACureForMisinformationC: boolean,

}


export const CureDeck: React.FC<CureDeckProps> = ({  hasACureForMisinformationA
  , hasACureForMisinformationB, hasACureForMisinformationC }: CureDeckProps) => { // SVGIcon
// using redux instead of props for real implementation
  //const gamestate = useSelector(state => state.gamestate) ...

let noCureString = "No cure - it´s the end"
let cureString = "u have a cure bitches!"
  const CureDeck = (<>
    <div className="misinformation-cure-deck-container A">{hasACureForMisinformationA? cureString: noCureString }</div>
    <div className="misinformation-cure-deck-container B">{hasACureForMisinformationB? cureString: noCureString}</div>
    <div className="misinformation-cure-deck-container C">{hasACureForMisinformationC? cureString: noCureString}</div>
  
  
  </>)

  return (
    <div className="cure-deck-container" >
      {CureDeck}
    </div>
  )
}