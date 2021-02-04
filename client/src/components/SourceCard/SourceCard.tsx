import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase } from '../../helpers/utils'
// import {sources} from '../../dictionaries/sources-COPY'


export interface SourceCardProps {
  name: string,

}


export const Source: React.FC<SourceCardProps> = ({ name }: SourceCardProps) => { // SVGIcon
  const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(name) + 'Icon');
  return (
    <div className="source-card-container" >
      <SVGIcon name={name}  />
      <div className="name" >
      </div>
    </div>
  )
}