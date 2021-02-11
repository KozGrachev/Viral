import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/gameState/store';
import "./SpreadLevel.scss"

export interface SpreadLevelProps {
  spreadLevel: number

}


export const SpreadLevel: React.FC = (  ) => {
const spreadLevel = useSelector((state:RootState) => state.gameStateReducer.spreadLevel)
  const spreadLevelArray = [2, 2, 3, 3, 4];
  console.log(spreadLevel)
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