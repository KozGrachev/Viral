import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toPascalCase } from '../../helpers/utils'
import './SourceCard.scss'
export interface SourceCardProps {
  name: string,   
  category: string, 
  canShare: any[]
}

export const SourceCard: React.FC<SourceCardProps> = ({ name, category, canShare }: SourceCardProps) => { // SVGIcon
  const SVGIcon = getIcon(toCamelCase(name) + 'Icon');
  const handleShareClick = (id: string) => {
  }
  const renderShareButtons = (shareWith: { name: string, id: string }[]) => {
    return shareWith.map(player => <button onClick={() => handleShareClick(player.id)
    }>{player.name}</button>)
  }
  return (
    <div className={`source-card-container ${category}`} >
      <SVGIcon name={name} className="card-icon" />
      <div className="name-container" >
        <p className="title">{toPascalCase(name)}</p>
        {renderShareButtons(canShare)}
      </div>
    </div>
  )
}