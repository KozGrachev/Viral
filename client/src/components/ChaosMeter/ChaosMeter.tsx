import React from 'react';
import './ChaosMeter.css';
import {store} from '../../redux/gameState/store';
export const ChaosMeter: React.FC = () => {

  const chaos=store.getState().gameStateReducer.chaosMeter


  return (
    <div className='progress-container'>
      {chaos}
      <svg className='progress-circle' viewBox='0 0 64 64'>
        <circle
          className='progressbar__track'
          cx='50%'
          cy='50%'
          r='30px'
        ></circle>
        <circle
          className='progressbar__thumb
          progressbar__thumb--track-1'
          cx='50%'
          cy='50%'
          r='30px'
        ></circle>
        {/* <circle
          className='progressbar__thumb
          progressbar__thumb--track-2'
          cx='50%'
          cy='50%'
          r='30px'
        ></circle>
        <circle
          className='progressbar__thumb
          progressbar__thumb--track-3'
          cx='50%'
          cy='50%'
          r='30px'
        ></circle> */}
      </svg>
    </div>
  );
};

