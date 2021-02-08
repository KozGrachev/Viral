import React from 'react';
import {Source} from '../../types/objects.REDO'
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase } from '../../helpers/utils';
import './Source.css'


export interface SourceProps {
  source: Source;
}


export const SourceComponent: React.FC<SourceProps> = ({ source}: SourceProps) => { // SVGIcon
  
  
  let { name, markers_community, markers_social, markers_relations,
    canMove, canLogOff, canLogOn, canClearCommunity,
    canClearRelations, canClearSocial, canShare, canDebunk } = source;

  console.log('THIS IS THE NAME::::::: ', toCamelCase(name));
  const SVGIconSource: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    = getIcon(toCamelCase(name) + 'Icon');


  const getMarker = (category: string, num: number,) => {
    //additonal svgs 
    if (num > 0) {
      console.log(toCamelCase(`marker ${category} ${num}`))
      const Icon = getIcon(toCamelCase(`marker ${category} ${num}`));
      return <Icon  />;
    }
  }

  const Iconnn = getIcon('markerRelations3');

  //adding the right class names
   let canMoveClassName = canMove ? 'can-move-to' : ''
  let canLogOffClassName = canLogOff ? 'can-log-off' : ''
  let canLogOnClassName = canLogOn ? 'can-log-on' : ''

  return (
    <div className={`source-container ${name} ${canLogOffClassName} ${canLogOnClassName} ${canMoveClassName}`} >
      <SVGIconSource />
      <div className="markersContainer">
        {getMarker('community', markers_community)} 
        {getMarker('social', markers_social)}
        {getMarker('relations', markers_relations)}
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