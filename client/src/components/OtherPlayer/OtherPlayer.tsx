import React from 'react';
import { getIcon } from '../../helpers/iconExporter';
import { toCamelCase } from '../../helpers/utils';
import { v4 as uuidv4 } from 'uuid';
import './OtherPlayer.scss'
import { RootState } from '../../redux/gameState/store'
import { useSelector } from 'react-redux';
import { Player } from '../../types/gameStateTypes';
export const OtherPlayer: React.FC = () => {
  const myName = useSelector((state: RootState) => state.playerStateReducer.name)
  const playerState = useSelector((state: RootState) => state.gameStateReducer.players)
  const otherPlayerState = playerState.filter((player) => player.name !== myName)
  const first = otherPlayerState[0]
  const second = otherPlayerState[1]
  const third = otherPlayerState[2]
  const renderCards = (player: Player) => {
    const angle = 40;
    const numGaps = player.cards.length - 1;
    return player.cards.map((card, index) => {
      const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = getIcon(toCamelCase(card.sourceName) + 'Icon');
      const rotationAngle = (numGaps * angle / 2) + index * angle - angle * numGaps;
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
    <>
      {first ? <div className={`other-player-container ${first.name}`}>
        <div className={`player-avatar ${first.pawnColor}`}>
          <div className="player-hand">
            {renderCards(first)}
          </div>
          <p>{first.name}</p>
        </div>
      </div> : null}
      {second ? <div className={`other-player-container ${second.name}`}>
        <div className={`player-avatar ${second.pawnColor}`}>
          <div className="player-hand">
            {renderCards(second)}
          </div>
          <p>{second.name}</p>
        </div>
      </div> : null}
      {third ? <div className={`other-player-container ${third.name}`}>
        <div className={`player-avatar ${third.pawnColor}`}>
          <div className="player-hand">
            {renderCards(third)}
          </div>
          <p>{third.name}</p>
        </div>
      </div> : null}
    </>
  )
}

