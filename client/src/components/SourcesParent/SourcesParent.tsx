import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase } from '../../helpers/utils';
import { Source } from '../Source/Source';
import { RootState } from '../../redux/gameState/store'

export interface SourceProps {
  name: string,
  category: string,
}



// highlighted to show canMove, canLogon (single source which), canLogoff

// 3 markers & can clear?

// pawn <-- use otherPlayer, (canShare in otherPlayer)

// canMove: white transparent overlay (AWAY LOCATION)
// canLogon: blue border? (AWAY LOCATION)
// canLogoff: green border? (AWAY LOCATION)
// canLogon and Logoff: split blue/green border (AWAY LOCATION)

// with social marker: red dot on corner w/ number 1,2,3 (BOTH CURRENT & AWAY)
//    canClear that marker: slow flashing (CURRENT LOCATION)
// with community marker: yellow triangle on corner w/ number 1,2,3 (BOTH CURRENT & AWAY)
//    canClear that marker: slow flashing (CURRENT LOCATION)
// with relations marker: blue square on corner w/ number 1,2,3 (BOTH CURRENT & AWAY)
//    canClear that marker: slow flashing (CURRENT LOCATION)

export const SourcesParent: React.FC<SourceProps> = ({ name, category }: SourceProps) => { // SVGIcon
  console.log('THIS IS THE NAME::::::: ', toCamelCase(name));

  

  return (
    <div className={`source-container`} >
      <Source name="whatsapp" category="social" />
      <Source name="uncle eugene" category="relations" />
      <Source name="pub" category="community" />

    </div>
  )
}

