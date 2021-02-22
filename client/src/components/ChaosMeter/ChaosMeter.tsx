import React from 'react';
import './ChaosMeter.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/gameState/store';

export const ChaosMeter: React.FC = () => { 
  const chaos = useSelector((state: RootState) => state.gameStateReducer.chaosMeter);
  const chaosPercentage = (chaos / 4) * 100;
  const offSet = (440 - (440 * chaosPercentage / 100));
  return (
    <div className="rings">
      <div className="percent1" >
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: offSet }}></circle>
        </svg>
      </div>
      <div className="number ">
        <h2>{chaosPercentage}<span>%</span></h2>
      </div>
    </div>
  );
};
