import React from 'react';
import './CureDeck.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/gameState/store';

export const CureDeck: React.FC = ():JSX.Element => {
  const communityCubesLeft = useSelector((state:RootState) => state.gameStateReducer.misinformation.community.markersLeft);
  const relationsCubesLeft = useSelector((state:RootState) => state.gameStateReducer.misinformation.relations.markersLeft);
  const socialCubesLeft = useSelector((state:RootState) => state.gameStateReducer.misinformation.social.markersLeft);
  const CureDeck = (<>
    <div className="debunk-indicator community">
      {communityCubesLeft}
    </div>
    <div className="debunk-indicator relations">
      {relationsCubesLeft}
    </div>
    <div className="debunk-indicator social">
      {socialCubesLeft}
    </div>
  </>);

  return (
    <div className="cure-deck-container" >
      {CureDeck}
    </div>
  );
};