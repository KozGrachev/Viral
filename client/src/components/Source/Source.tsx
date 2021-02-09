import React from 'react';
import {Player, Source} from '../../types/objects.REDO'
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toKebabCase } from '../../helpers/utils';
import './Source.scss'
import { useDispatch, useSelector } from 'react-redux';
import { clearMisinfoAction } from '../../redux/gameState/gameStateActions';
import { RootState } from '../../redux/gameState/store';
import { PlayerPawn } from '../PlayerPawn/PlayerPawn';


export interface SourceProps {
  source: Source;
}


export const SourceComponent: React.FC<SourceProps> = ({ source}: SourceProps) => { // SVGIcon
  const dispatch = useDispatch()
  const gamestate = useSelector((state: RootState) => state.gameStateReducer)
  const currentPlayer = useSelector((state: RootState) => state.playerStateReducer)
  //console.log('gamestate from source : ', gamestate)
  //console.log('currentPlayer from source : ' , currentPlayer)

  let { name, markers_community, markers_social, markers_relations,
    canMove, canLogOff, canLogOn, canClearCommunity,
    canClearRelations, canClearSocial, canShare, canDebunk } = source;

  //console.log('THIS IS THE NAME::::::: ', toCamelCase(name));
  const SVGIconSource: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    = getIcon(toCamelCase(name) + 'Icon');


  const getMarker = (category: string, num: number , canBeCleared:boolean) => {
    //add a different icon if canBeCleared
    if (num > 0 && canBeCleared) {
      //get the clearable icon
      const ClearableIcon = getIcon(toCamelCase(`marker ${category} ${num}`))
      //wrap it with  button to make it clickable
      return (<button onClick={()=>clearMisinformationbyOne(category)}><ClearableIcon/></button>)

    }
    if (num > 0) {
      //console.log(toCamelCase(`marker ${category} ${num}`))
      const Icon = getIcon(toCamelCase(`marker ${category} ${num}`));
      return <Icon   />;
    }
  }




  const clearMisinformationbyOne = (misinfoType:string) => {
    //throws a logic error !!!
    dispatch(clearMisinfoAction({oldState:gamestate , currentPlayerID: currentPlayer.id, misinfoType, location:source.name }))
  }


  const getPlayerPawns = (players:Player[]) => {

    return players.map(player => <PlayerPawn player={player.name} colour={player.pawnColor }/>)


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
        {getMarker('community', markers_community , canClearCommunity)}
        {getMarker('social', markers_social, canClearSocial)}
        {getMarker('relations', markers_relations, canClearRelations)}
      </div>
      {canShare.length > 0 ?  getPlayerPawns(canShare):null}
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