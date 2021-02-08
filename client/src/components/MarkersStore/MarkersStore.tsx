import React from 'react';
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/gameState/store';


export const MarkersStore: React.FC= () => { 

  const communityLeft= useSelector((state: RootState) => state.gameStateReducer.misinformation.community.markersLeft)
  const relationsLeft= useSelector((state: RootState) => state.gameStateReducer.misinformation.relations.markersLeft)
  const socialLeft= useSelector((state: RootState) => state.gameStateReducer.misinformation.social.markersLeft)

  return (
    <div className="" > 
      Community Markers Left:{communityLeft}
      <p></p>
      Relations Markers Left:{relationsLeft}
      <p></p>
      Social Markers Left:{socialLeft}
    </div>
  )
}