import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase } from '../../helpers/utils';


export interface SourceProps {
  name: string,
  category: string,
}


export const Source: React.FC<SourceProps> = ({ name, category }: SourceProps) => { // SVGIcon
  console.log('THIS IS THE NAME::::::: ',toCamelCase(name));
  const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(name)+'Icon');

  

  return (
    <div className={`source-container ${name} ${category} `} >
      <SVGIcon />
    </div>
  )
}

