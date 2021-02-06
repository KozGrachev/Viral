import React from 'react';
import './ChaosMeter.css';

export interface ChaosMeterProps {
  name: string;
}


export const ChaosMeter: React.FC<ChaosMeterProps> = ({
  // should take the chaos value from redux store
  name,
}: ChaosMeterProps) => {
  return (
    <div className='progress-container'>
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
        <circle
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
        ></circle>
      </svg>
    </div>
  );
};
