import React from 'react';
import Source from '../Source/Source'

export interface SourceCardProps {
  sourceName: 'string',

}


export const Source: React.FC<SourceCardProps> = ({ sourceName }: SourceCardProps) => { // SVGIcon

  return (
    <div className="source-card-container" >
      <Source name={sourceName}  />
      <div className="name" >
      </div>
    </div>
  )
}