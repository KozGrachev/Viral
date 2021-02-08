// import React from 'react';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import './PlayerPawn.css';
import { withDesign } from 'storybook-addon-designs';
import {useSelector} from 'react-redux'
// import {RootState} from '../../redux/gameState/store'

export interface PlayerPawnProps {
  player: string,
  color: string
}


export const PlayerPawn: React.FC<PlayerPawnProps> = ({player, color}: PlayerPawnProps) => {
  // SVGIcon



  // const color=useSelector((state:RootState)=>state.playerStateReducer.pawnColor)

  return (
    <div className='container'>
      <div className='player_pawn'>
        <p>Connor</p>
      </div>
    </div>
  );
};
