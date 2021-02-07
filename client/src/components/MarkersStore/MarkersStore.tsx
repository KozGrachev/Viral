import React from 'react';
import { store } from '../../redux/gameState/store';


export const MarkersStore: React.FC = () => {

  // //const left= useSelector((state: RootState) => state.GameState.connectionDeck.length)
  // const communityLeft = store.getState().misinformation.community.markersLeft
  // const relationsLeft = store.getState().misinformation.relations.markersLeft
  // const socialLeft = store.getState().misinformation.social.markersLeft


  return (
    <div className="" >
      {/* Community Markers Left:{communityLeft}
      <p></p>
      Relations Markers Left:{relationsLeft}
      <p></p>
      Social Markers Left:{socialLeft} */}
    </div>
  )
}