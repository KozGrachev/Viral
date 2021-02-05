import React from 'react';
import { Player } from '../../types/gameStateTypes';
import { getIcon } from '../../helpers/iconExporter';
import { toCamelCase } from '../../helpers/utils';
import { v4 as uuidv4 } from 'uuid';
import './OtherPlayer.css'
// import { connections } from '../../../../logic/connections'
import { Connection } from '../../types/objects.REDO'




// players: [
//   {
//     name: 'Player 1',
//     id: '1234',
//     cards: [],
//     cardHandOverflow: false,
//     isCurrent: true,
//     pawnColor: 'green',
//     currentSource: 'University'
//   },
//   {
//     name: 'Player 2',
//     id: '5678',
//     cards: [],
//     cardHandOverflow: false,
//     isCurrent: true,
//     pawnColor: 'purple',
//     currentSource: 'University'
//   },
// ],

interface FakePlayer {
  name: string;
  cardHandFull: boolean;
  cards: Connection[];
  isCurrent: boolean;
  pawnColor: string;
  currentSource: string,
}

export interface OtherPlayerProps {
  player: FakePlayer
}


export const OtherPlayer: React.FC<OtherPlayerProps> = ({ player }: OtherPlayerProps) => { // SVGIcon

  const renderCards = (): JSX.Element[] => {
    const angle = 40;
    const numGaps = player.cards.length - 1;

    return player.cards.map((card, index, cards) => {
      const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(card.name) + 'Icon');
      const rotationAngle = (numGaps * angle / 2) + index * angle - angle*numGaps;
      return <div className="displace" style={{
        transform: ` rotate(${rotationAngle}deg)`,
      }}>
        <div
          className="other-player-card"
          key={uuidv4()}
          style={{
            transform: `translateY(-50%) rotate(${-rotationAngle}deg)`,
          }}
        >
          <SVGIcon />
        </div>
      </div>;
    })
  }
  return (
    <div className={`other-player-container ${player.name}`}  >
      <div className={`player-avatar ${player.pawnColor}`}>
        <div className="player-hand">
          {renderCards()}
        </div>
        <p>{player.name}</p>
      </div>
    </div>
  )
}