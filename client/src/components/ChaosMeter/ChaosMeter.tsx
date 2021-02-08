import React from 'react';
import './ChaosMeter.scss';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';
export const ChaosMeter: React.FC = () => {
  //const chaos = store.getState().gameStateReducer.chaosMeter;
  const chaos = useSelector((state: RootState) => state.gameStateReducer.chaosMeter)

  return (
    <div className="chaos-meter-container">
      <div className="chaos-label">
        <p>
          {chaos}/4
        </p>
      </div>
      <svg width='150' height='150'>
        <circle className='track' r='70' cx='75' cy='75'></circle>
        <circle className='progress' r='70' cx='75' cy='75'></circle>
      </svg>
    </div>
  );
};

//   <div className='progress-container'>
//     <svg className='progress-circle' viewBox='0 0 64 64'>
//       <circle
//         className='progressbar__track'
//         cx='50%'
//         cy='50%'
//         r='30px'
//       ></circle>
//       <circle
//         className='progressbar__thumb
//         progressbar__thumb--track-1'
//         cx='50%'
//         cy='50%'
//         r='30px'
//       ></circle>
//       <circle
//         className='progressbar__thumb
//         progressbar__thumb--track-2'
//         cx='50%'
//         cy='50%'
//         r='30px'
//       ></circle>
//       <circle
//         className='progressbar__thumb
//         progressbar__thumb--track-3'
//         cx='50%'
//         cy='50%'
//         r='30px'
//       ></circle>
//     </svg>
//   </div>
// );
