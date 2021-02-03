import React from 'react';

export interface SourceProps {
  name: string,
  category: string,
  SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}


export const Source: React.FC<SourceProps> = ({ name }: SourceProps) => { // SVGIcon
  
  return (
    <div className={`source-container ${name} ${category}`} >
      <SVGIcon />
    </div>
  )
}

