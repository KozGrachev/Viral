import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/gameState/store';
import "./SpreadLevel.css"

export interface SpreadLevelProps {
  spreadLevel: number

}


export const SpreadLevel: React.FC = (  ) => {
const gameState = useSelector((state:RootState) => state.gameStateReducer)
  const spreadLevelArray = [2, 2, 3, 3, 4];
  let spreadLevel = gameState.spreadLevel;

  let isActiveToggle = "isPassive"

  return (
    <div className="spread-level-container" >
      {spreadLevelArray.map((spreadLevelCircleNumber, index) => {
        (index === spreadLevel) ? isActiveToggle = "isActive" : isActiveToggle = "isPassive"
        return (
          <div className={`spread-level-circle ${isActiveToggle}`} >{spreadLevelCircleNumber}</div>
        )
      })}
    </div>
  )
}