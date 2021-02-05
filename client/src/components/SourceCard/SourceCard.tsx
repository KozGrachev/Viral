import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toPascalCase } from '../../helpers/utils'
import './SourceCard.css'

export interface SourceCardProps {
  name: string,
  category: string
}


export const SourceCard: React.FC<SourceCardProps> = ({ name, category }: SourceCardProps) => { // SVGIcon
  const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(name) + 'Icon');
  return (
    <div className={`source-card-container ${category}`} >
      <SVGIcon name={name} className="card-icon" />
      <div className="name-container" >
        <p className="title">{toPascalCase(name)}</p>
      </div>
    </div>
  )
}