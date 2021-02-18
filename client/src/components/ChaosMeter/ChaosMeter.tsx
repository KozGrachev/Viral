import React from 'react';
import './ChaosMeter.scss';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';
export const ChaosMeter: React.FC = () => {
  
  const chaos = useSelector((state: RootState) => state.gameStateReducer.chaosMeter)
  let chaosPercentage = (chaos / 4) * 100
  let offSet = (440 - (440 * chaosPercentage / 100))

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
