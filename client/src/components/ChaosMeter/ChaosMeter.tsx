import React, { useEffect, useState } from 'react';
import './ChaosMeter.scss';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/gameState/store';

export const ChaosMeter: React.FC = () => {
  const chaos = useSelector((state: RootState) => state.gameStateReducer.chaosMeter)
  const [scale, setScale] = useState(vmin(1.3) / 10);

  useEffect(() => {
    function handleResize () {
      setScale(vmin(1.3)/10);
    }
    console.log('scale is:', scale)

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [scale])

  let chaosPercentage = (chaos / 4) * 100
  let offSet = (440 - (440 * chaosPercentage / 100))


  function vh (v: number) {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  function vw (v: number) {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  function vmin (v: number) {
    return Math.min(vh(v), vw(v));
  }

  return (
    <div className="rings" style={{transform: `scale(${scale})`}}>
      <div className="percent1" >
        <svg>
          <circle cx="50%" cy="50%" r="70"></circle>
          <circle cx="50%" cy="50%" r="70" style={{ strokeDashoffset: offSet }}></circle>
        </svg>
      </div>
      <div className="number ">
        <h2>{chaosPercentage}<span>%</span></h2>
      </div>
    </div>
  );
};



