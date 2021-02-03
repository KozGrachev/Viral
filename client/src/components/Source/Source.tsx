import React, { ReactComponentElement } from 'react';

export interface SourceProps {
  name: string,
  connections: string[] | undefined,
  category: string,
  SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}


export const Source: React.FC<SourceProps> = ({ name, connections, category, SVGIcon }) => {

  return (
    <div className={`source-container ${name} ${category}`} >
      <SVGIcon />
    </div>
  )
}

