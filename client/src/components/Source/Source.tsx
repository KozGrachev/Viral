import React, { useEffect, useState } from 'react';
import { Player, Source } from '../../types/gameStateTypes'
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toKebabCase } from '../../helpers/utils';
import './Source.scss'
import { useDispatch, useSelector } from 'react-redux';
import { clearMisinfoAction, debunkMisinfoAction, moveAction, logOnOffAction } from '../../redux/gameState/gameStateActions';
import { RootState } from '../../redux/gameState/store';
import { PlayerPawn } from '../PlayerPawn/PlayerPawn';
import { ModalComponent } from './DebunkModal';



export interface SourceProps {
  source: Source;
}


export const SourceComponent: React.FC<SourceProps> = ({ source }: SourceProps) => { // SVGIcon


  const dispatch = useDispatch()
  const gamestate = useSelector((state: RootState) => state.gameStateReducer)
  const currentPlayer = useSelector((state: RootState) => state.gameStateReducer.players.filter(player => player.isCurrent === true))[0]

  const allPlayers = useSelector((state: RootState) => state.gameStateReducer.players)

  const [modalIsOpen, setIsOpen] = useState(false);

  let { name, markers_community, markers_social, markers_relations,
    canMove, canLogOff, canLogOn, canClearCommunity,
    canClearRelations, canClearSocial, canShare, canDebunk, misinfoType } = source;

  const SVGIconSource: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    = getIcon(toCamelCase(name) + 'Icon');
  const SVGIconSourceOverlay: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    = getIcon(toCamelCase(name) + 'Icon');

  const getMarker = (category: string, num: number, canBeCleared: boolean, canDebunk: string[]) => {
    if (canDebunk.includes(category)) {

      const DebunkableIcon = getIcon(toCamelCase(`marker ${category} ${'3'}`)) //TODO this should be a seperate icon for debunking each relevant misinfo, here its defaulting to '3' as no svg available
      return (<div onClick={() => debunkMisinforamtion(category)}><DebunkableIcon /></div>)

    }


    if (num > 0 && canBeCleared) {
      
      const ClearableIcon = getIcon(toCamelCase(`marker ${category} ${num}`))
      

      return (<div onClick={() => clearMisinformationbyOne(category)}><ClearableIcon /></div>)

    }
    if (num > 0) {
     
      const Icon = getIcon(toCamelCase(`marker ${category} ${num}`));
      return <Icon className={`size${num}`} />;
    }
  }

  const debunkMisinforamtion = (category: string) => {
    setIsOpen(true)
  }

  const clearMisinformationbyOne = (misinfoType: string) => {
   
    dispatch(clearMisinfoAction({ oldState: gamestate, currentPlayerID: currentPlayer.id, misinfoType, location: source.name }))
  }


  const getPlayerPawns = () => {
    let test: Player[] = [];
    for (const player of allPlayers) {
      if (player.currentSource === source.name && !test.includes(player)) {
        test.push(player)

      }
    }

    if (test.length > 0) return test.map(player => {
      return <PlayerPawn color={player.pawnColor} key={player.id} />
    })
    else return null

  }


  const changePlayersCurrentSource = () => {
    dispatch(moveAction({ oldState: gamestate, currentPlayerID: currentPlayer.id, location: source.name }))
  }

  const logonToNewSource = () => {
    dispatch(logOnOffAction({ oldState: gamestate, currentPlayerID: currentPlayer.id, location: source.name, usedCard: source.name }))
  }

  const logoffToNewSource = () => {
    const spentCard = gamestate.players.filter(player => player.id === currentPlayer.id)[0].currentSource;
    dispatch(logOnOffAction({ oldState: gamestate, currentPlayerID: currentPlayer.id, location: source.name, usedCard: spentCard }))
  }


  let canMoveClassName = canMove ? 'can-move-to' : ''
  let canLogOffClassName = canLogOff ? 'can-log-off' : ''
  let canLogOnClassName = canLogOn ? 'can-log-on' : ''
  let canDebunkClassName = canDebunk ? 'can-debunk' : ''

  function unclickableMessage () {return null}

  const closeModal = () => {
    setIsOpen(false)
  }


  return (
    <>
      {modalIsOpen ? 
        <ModalComponent 
          modalIsOpen={modalIsOpen} 
          closeModal={closeModal}
          debunkableCards={currentPlayer.cards.filter(card => canDebunk.includes(card.misinfoType))}
        /> : null}

      <div
        onClick={
          canLogOff ?
            logoffToNewSource :
            canLogOn ?
              logonToNewSource :
              canMove ?
                changePlayersCurrentSource :
                unclickableMessage}
        className={`source-container ${toKebabCase(name)} ${canLogOffClassName} ${canLogOnClassName} ${canMoveClassName} ${source.misinfoType} ${canDebunkClassName} `} >
        <SVGIconSource />
        <SVGIconSourceOverlay />
        <div className={`markers-container ${misinfoType}`}>
          {getMarker('community', markers_community, canClearCommunity, canDebunk)}
          {getMarker('social', markers_social, canClearSocial, canDebunk)}
          {getMarker('relations', markers_relations, canClearRelations, canDebunk)}
        </div>
        <div className="player-pawn-container">
          {getPlayerPawns()}
        </div>
      </div>
    </>

  )
}
