import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toPascalCase } from '../../helpers/utils'
import './SourceCard.css'

//! issue with "Card" interface beings used for both Source/connection & "Viral" cards, which have name type "null" - possible change types/logic later
export interface SourceCardProps {
  name: string,    //! NULL TO BE REMOVED
  category: string, //! NULL TO BE REMOVED
}


export const SourceCard: React.FC<SourceCardProps> = ({ name, category }: SourceCardProps) => { // SVGIcon
  const SVGIcon = getIcon(toCamelCase(name) + 'Icon');

  return (
    <div className={`source-card-container ${category}`} >
      <SVGIcon name={name} className="card-icon" />
      <div className="name-container" >
        <p className="title">{toPascalCase(name)}</p>
        <p className="title">test test</p>
      </div>
    </div>
  )
}