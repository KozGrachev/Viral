
import React from 'react';
import './PlayerPawn.scss';
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
  <>
  {getPawn(color)}
  </>)
};
