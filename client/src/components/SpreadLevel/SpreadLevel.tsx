import React from 'react';
import "./SpreadLevel.css"

export interface SpreadLevelProps {
  spreadLevel: number

}


export const SpreadLevel: React.FC<SpreadLevelProps> = ({ spreadLevel }: SpreadLevelProps) => { // SVGIcon
  const spreadLevelArray = [2, 2, 3, 3, 4];
  let isActiveToggle = "isPassive"
  console.log(spreadLevel)

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