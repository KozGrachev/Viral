import React from 'react';

export interface SourceProps {
  name: string,
  connections: string[] | undefined,
  category: string
}

export const Source: React.FC<SourceProps> = ({ name, connections, category }) => {
  return (
    <div className={`source-container ${name} ${category}`} >
      <img src={`../assets/${name.replace(' ', '-')}.svg`} alt={name + '-icon'} />


    </div>
  )
}

