import React from 'react';
import { getIcon } from '../../helpers/iconExporter'
import { toCamelCase, toPascalCase } from '../../helpers/utils'
import './SourceCard.css'

//! issue with "Card" interface beings used for both Source/connection & "Viral" cards, which have name type "null" - possible change types/logic later
export interface SourceCardProps {
  name: string,    //! NULL TO BE REMOVED
  category: string, //! NULL TO BE REMOVED
  canShare: any[]
}
// DON'T NEED ===> canlogon can go to the place if you have that card
// canShare: a button that appears on each card when you are on the same location as another player
// canchare: Player[]


export const SourceCard: React.FC<SourceCardProps> = ({ name, category, canShare }: SourceCardProps) => { // SVGIcon
  const SVGIcon = getIcon(toCamelCase(name) + 'Icon');

  const handleShareClick = (id: string) => {
    //DISPATCH ACTION
    console.log(`SHARING CARD ${name} WITH ${id}`);
  }

  const renderShareButtons = (shareWith: {name:string, id:string}[]) => {
    return shareWith.map(player => <button onClick={() => handleShareClick(player.id)}>{ player.name}</button>)
  }
  return (
    <div className={`source-card-container ${category}`} >
      <SVGIcon name={name} className="card-icon" />
      <div className="name-container" >
        <p className="title">{toPascalCase(name)}</p>
        <p className="title">test test</p>
        {renderShareButtons(canShare)}
      </div>
    </div>
  )
}