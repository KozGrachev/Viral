// import React from 'react';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import './PlayerPawn.css';
import { withDesign } from 'storybook-addon-designs';

export interface PlayerPawnProps {
  player: string;
  color: string;
}

export const PlayerPawn: React.FC<PlayerPawnProps> = ({
  player,
  color,
}: PlayerPawnProps) => {
  // SVGIcon

  return (
    <div className='container'>
      <div className='player_pawn'>
        <p>Connor</p>
      </div>
      <div className='player_pawn_2'>
        <p>Connor</p>
      </div>
      <div className='player_pawn_3'>
        <p>Connor</p>
      </div>
      <div className='player_pawn_4'>
        <p>Connor</p>
      </div>
    </div>
  );
};
