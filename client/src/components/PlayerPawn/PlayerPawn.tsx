// import React from 'react';
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import './PlayerPawn.css';
import { withDesign } from 'storybook-addon-designs';
import { useSelector } from 'react-redux';
// import {RootState} from '../../redux/gameState/store'
import { getIcon } from '../../helpers/iconExporter'


const FirePawn = getIcon('firePawn');
const HexagonPawn = getIcon('hexagonPlayerPawn');
const FlowerPawn = getIcon('flowerPawn');
const RombPawn = getIcon('rombPawn')
const SunPawn = getIcon('sunPawn')
const SquarePawn = getIcon('squarePawn')


const getPawn = (color: string) => {

  if (color === 'orange') return <FirePawn />;
  if (color === 'red') return <SquarePawn />;
  if (color === 'blue') return <RombPawn />;
  if (color === 'yellow') return <SunPawn />;
  if (color === 'pink') return <FlowerPawn />;
  if (color === 'green') return <HexagonPawn />;

}

export interface PlayerPawnProps {
  color: string
}

export const PlayerPawn: React.FC<PlayerPawnProps> = ({
  color,
}: PlayerPawnProps) => {
  return (
    <div className='container'>
      {console.log(color, 'color')}
      {getPawn(color)}
    </div>
  );
};
