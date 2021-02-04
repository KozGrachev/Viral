import React from 'react';
import { getIcon } from '../../helpers/iconExporter'


export interface SourceProps {
  name: string,
  // category: string,
  // SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}


export const Source: React.FC<SourceProps> = ({ name }: SourceProps) => { // SVGIcon
  const toCamelCase = (str: string): string =>
    str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase());
  console.log('THIS IS THE NAME::::::: ',toCamelCase(name));
  const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(name)+'Icon');

  return (
    <div className={`source-container ${name} `} >
      <SVGIcon />
    </div>
  )
}

