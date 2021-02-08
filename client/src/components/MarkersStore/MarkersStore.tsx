import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../redux/gameState/store';


export const MarkersStore: React.FC= () => { 
const state = useSelector((state:RootState) => state.gameStateReducer)
   //const left= useSelector((state: RootState) => state.GameState.connectionDeck.length)
  const communityLeft = store.getState().gameStateReducer.misinformation.community.markersLeft
  const relationsLeft = store.getState().gameStateReducer.misinformation.relations.markersLeft
  const socialLeft = store.getState().gameStateReducer.misinformation.social.markersLeft


  return (
    <div className="" > 
      Community Markers Left:{communityLeft}
      <p></p>
      Relations Markers Left:{relationsLeft}
      <p>
      </p>
      {state.players[0].name}
      Social Markers Left:{socialLeft}
    </div>
  )
}