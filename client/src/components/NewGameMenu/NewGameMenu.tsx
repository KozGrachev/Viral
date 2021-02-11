import React, {
  ButtonHTMLAttributes,
  ChangeEvent,
  DetailedHTMLProps,
  useState,
} from 'react';
import './NewGameMenu.scss';
// import { startGameEvent, addPlayerEvent } from '../../logic/event.listeners'
import {
  AddPlayerAction,
  addPlayerToGameState,
  DealCardsToNewPlayerAction,
  StartGameAction,
  updateGameState,
} from '../../redux/gameState/gameStateActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../redux/gameState/store';
import { Player } from '../../types/gameStateTypes';
import { PlayerPawn, PlayerPawnProps } from '../PlayerPawn/PlayerPawn';
// import PlayerPawn from '../PlayerPawn/PlayerPawn'
import { Console } from 'console';
import { getIcon } from '../../helpers/iconExporter';

export const NewGameMenu: React.FC = () => {
  const FirePawn = getIcon('firePawn');
  const HexagonPawn = getIcon('hexagonPlayerPawn');
  const FlowerPawn = getIcon('flowerPawn');
  const RombPawn = getIcon('rombPawn');
  const SunPawn = getIcon('sunPawn');
  const SquarePawn = getIcon('squarePawn');

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (event.target) {
      updateInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    }
  }
  const [input, updateInput] = useState({ name: '', color: '', room: '' });
  const dispatch = useDispatch();

  const handleSelect = (color: string) => {
    let selectedPawn: string = 'none';
    selectedPawn = color === input.color ? 'none' : color;

    updateInput((state) => ({
      ...state,
      color: selectedPawn,
    }));
  };

  let player = useSelector((state: RootState) => state.playerStateReducer);
  let state = useSelector((state: RootState) => state.gameStateReducer);

  const addPlayer = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(AddPlayerAction(input.name, input.color, input.room));
  };

  return (
    <form className='form'>
      <div className='menu-container'>
        <div className='title-container'>
          <h3 style={{ color: 'royalblue' }}>Welcome to Viral</h3>
        </div>

        <input
          type='text'
          name='name'
          value={input.name}
          placeholder='Player name '
          onChange={handleChange}
        ></input>

        <input
          type='text'
          name='room'
          value={input.room}
          placeholder='Room '
          onChange={handleChange}
        ></input>
        <div className='colors-container'>
          <FirePawn
            className='icon'
            style={{
              transform: input.color === 'orange' ? 'scale(1.7)' : 'none',
            }}
            onClick={() => handleSelect('orange')}
          />

          <HexagonPawn
            className='icon'
            style={{
              transform: input.color === 'green' ? 'scale(1.7)' : 'none',
            }}
            onClick={() => handleSelect('green')}
          />

          <FlowerPawn
            className='icon'
            style={{
              transform: input.color === 'pink' ? 'scale(1.7)' : 'none',
            }}
            onClick={() => handleSelect('pink')}
          />

          <RombPawn
            className='icon'
            style={{
              transform: input.color === 'blue' ? 'scale(1.7)' : 'none',
            }}
            onClick={() => handleSelect('blue')}
          />
          <SunPawn
            className='icon'
            style={{
              transform: input.color === 'yellow' ? 'scale(1.7)' : 'none',
            }}
            onClick={() => handleSelect('yellow')}
          />

          <SquarePawn
            className='icon'
            style={{ transform: input.color === 'red' ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('red')}
          />
        </div>

        <button className='start_game_button' type='submit' onClick={addPlayer}>
          Play
        </button>
      </div>
    </form>
  );
};
