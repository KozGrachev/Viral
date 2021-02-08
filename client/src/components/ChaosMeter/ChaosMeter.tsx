import React from 'react';
import './ChaosMeter.css';
import {useSelector} from 'react-redux'
import { RootState} from '../../redux/gameState/store';
export const ChaosMeter: React.FC = () => {
  //const chaos = store.getState().gameStateReducer.chaosMeter;
  const chaos=useSelector((state:RootState)=>state.gameStateReducer.chaosMeter)

  return (
    <>
      {chaos}
      <svg width='250' height='250'>
        <circle className='track' r='100' cx='125' cy='125'></circle>
        <circle className='progress' r='100' cx='125' cy='125'></circle>
      </svg>
    </>
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
