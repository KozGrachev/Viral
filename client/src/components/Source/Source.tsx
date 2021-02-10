import React, { Fragment, useEffect, useState } from 'react';
import { Player, Source } from '../../types/gameStateTypes'
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toKebabCase } from '../../helpers/utils';
import './Source.scss'
import { useDispatch, useSelector } from 'react-redux';
import { clearMisinfoAction, debunkMisinfoAction, moveAction, logOnOffAction } from '../../redux/gameState/gameStateActions';
import { RootState } from '../../redux/gameState/store';
import { PlayerPawn } from '../PlayerPawn/PlayerPawn';
import { ModalComponent } from './DebunkModal';
import { logOnOff } from '../../logic/actions.newState_CO';


export interface SourceProps {
  source: Source;
}


export const SourceComponent: React.FC<SourceProps> = ({ source }: SourceProps) => { // SVGIcon


  const dispatch = useDispatch()
  const gamestate = useSelector((state: RootState) => state.gameStateReducer)
  const currentPlayer = useSelector((state: RootState) => state.gameStateReducer.players.filter(player => player.isCurrent === true))[0]
  ////console.log('CURRENT PLAYER', array)
  const allPlayers = useSelector((state: RootState) => state.gameStateReducer.players)
  ////console.log('gamestate from source : ', gamestate)
  ////console.log('currentPlayer from source : ' , currentPlayer)

  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedDebunkCards, setselectedDebunkCards] = useState([])

  let { name, markers_community, markers_social, markers_relations,
    canMove, canLogOff, canLogOn, canClearCommunity,
    canClearRelations, canClearSocial, canShare, canDebunk, misinfoType } = source;



  useEffect(() => {
    //console.log('close modal from source tsx useEffect---------', modalIsOpen)

  }, [modalIsOpen])
  useEffect(() => {
    //console.log('close modal from source tsx useEffect seleceted debunked cards---------', selectedDebunkCards)

  }, [selectedDebunkCards])

  //console.log('source MOVABLE', source.name, canMove)
  //console.log('THIS IS THE NAME::::::: ', toCamelCase(name));
  ////console.log('THIS IS THE NAME::::::: ', toCamelCase(name));
  const SVGIconSource: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    = getIcon(toCamelCase(name) + 'Icon');


  const getMarker = (category: string, num: number, canBeCleared: boolean, canDebunk: string[]) => {
    if (num > 0 && canDebunk.includes(category)) {

      //get the debunable icon
      const DebunkableIcon = getIcon(toCamelCase(`marker ${category} ${num}`))
      //wrap it with  button to make it clickable
      return (<button onClick={() => debunkMisinforamtion(category)}><DebunkableIcon /></button>)

    }

    //add a different icon if canBeCleared
    if (num > 0 && canBeCleared) {
      //get the clearable icon
      const ClearableIcon = getIcon(toCamelCase(`marker ${category} ${num}`))
      //wrap it with  button to make it clickable

      return (<button onClick={() => clearMisinformationbyOne(category)}><ClearableIcon /></button>)

    }
    if (num > 0) {
      ////console.log(toCamelCase(`marker ${category} ${num}`))
      const Icon = getIcon(toCamelCase(`marker ${category} ${num}`));
      return <Icon />;
    }
  }

  const debunkMisinforamtion = (category: string) => {

    //showModal
    setIsOpen(true)

    setTimeout(async () => {
      try {

        // Wait user to confirm !
        dispatch(debunkMisinfoAction({
          oldState: gamestate, currentPlayerID: currentPlayer.id,
          misinfoType: category, usedCards: selectedDebunkCards
        }))

        // this line below is executed only after user click on OK
        alert("OK");
      } catch (err) {
        alert("CANCEL");
      }
    }, 7000);


  }

  const clearMisinformationbyOne = (misinfoType: string) => {
    //throws a logic error !!!
    dispatch(clearMisinfoAction({ oldState: gamestate, currentPlayerID: currentPlayer.id, misinfoType, location: source.name }))
  }


  const getPlayerPawns = (players: Player[], currentPlayer: Player) => {
    let test: Player[] = [];
    for (const player of allPlayers) {
      if (player.currentSource === source.name && !test.includes(player)) {
        test.push(player)

      }
    }
    if (test.length > 0) return test.map(player => <PlayerPawn color={player.pawnColor} />)
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

  const renderIcon = () => {
    if (canMove) return <button onClick={() => changePlayersCurrentSource()}> <SVGIconSource /> </button>
    return null

  }

  const renderAsLogOn = () => {
    if (canLogOn) return <button onClick={() => changePlayersCurrentSource()}> <SVGIconSource /> </button>
    return null

  }

  function unclickableMessage() {
    //console.log(`%c you can't do anything at ${source.name}`,`background-color: red; color: white; padding: 10px`)
    return null;
  }

  //adding the right class names
  let canMoveClassName = canMove ? 'can-move-to' : ''
  let canLogOffClassName = canLogOff ? 'can-log-off' : ''
  let canLogOnClassName = canLogOn ? 'can-log-on' : ''
  let canDebunkClassName = canDebunk ? 'can-debunk' : ''


  const closeModal = () => {
    //console.log('close modal from source tsx---------')
    setIsOpen(false)



  }


  return (
    <>
      {modalIsOpen ? <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} setselectedDebunkCards={setselectedDebunkCards} /> : null}



      <div
        onClick={
          // logic to render different click events from source
          canLogOff ?
            logoffToNewSource :
              canLogOn ?
                logonToNewSource :
                canMove ?
                  changePlayersCurrentSource :
                  unclickableMessage}
        className={`source-container ${toKebabCase(name)} ${canLogOffClassName} ${canLogOnClassName} ${canMoveClassName} ${source.misinfoType} ${canDebunkClassName} `} >

        <SVGIconSource />
        <div className={`markers-container ${misinfoType}`}>
          {getMarker('community', markers_community, canClearCommunity, canDebunk)}
          {getMarker('social', markers_social, canClearSocial, canDebunk)}
          {getMarker('relations', markers_relations, canClearRelations, canDebunk)}
        </div>
        {getPlayerPawns(canShare, currentPlayer)}
      </div>
    </>

  )



}



// CAN MOVE:
// CAN LOGON:
// CAN LOGOFF:
// MARKERS x3 ---> CAN CLEAR
// PAWNS