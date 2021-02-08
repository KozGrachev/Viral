import React from 'react';

import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase } from '../../helpers/utils';
import './Source.scss'


export interface SourceProps {
  name: string,
  markersCommunity: number,
  markersSocial: number,
  markersRelations: number,
  canMoveTo: boolean
}


export const Source: React.FC<SourceProps> = ({ name, markersCommunity, markersSocial, markersRelations, canMoveTo }: SourceProps) => { // SVGIcon



  console.log('THIS IS THE NAME::::::: ', toCamelCase(name));
  const SVGIconSource: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(name) + 'Icon');


  const getMarker = (category: string, num: number) => {
    if (num > 0) {
      console.log(toCamelCase(`marker ${category} ${num}`))
      const Icon = getIcon(toCamelCase(`marker ${category} ${num}`));
      return <Icon />;
    }
  }

  const Iconnn = getIcon('markerRelations3');

  return (
    <div className={`source-container ${name} ${canMoveTo ? 'can-move-to' : ''}`} >
      <SVGIconSource />
      <div className="markers-container">
        {getMarker('community', markersCommunity)}
        {getMarker('social', markersSocial)}
        {getMarker('relations', markersRelations)}
      </div>
    </div>
  )
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