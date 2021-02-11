<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ButtonHTMLAttributes,
  ChangeEvent,
  DetailedHTMLProps,
  useState,
} from 'react';
import './NewGameMenu.css';
// import { startGameEvent, addPlayerEvent } from '../../logic/event.listeners'
import {
  AddPlayerAction,
  addPlayerToGameState,
  StartGameAction,
  updateGameState,
} from '../../redux/gameState/gameStateActions';
=======
import React, { ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, useState } from 'react';
import './NewGameMenu.scss';
// import { startGameEvent, addPlayerEvent } from '../../logic/event.listeners'
import { AddPlayerAction, addPlayerToGameState, DealCardsToNewPlayerAction, StartGameAction, updateGameState } from '../../redux/gameState/gameStateActions';
>>>>>>> 127e23c389b2339e9418ddd6d1f1b9a6748fdca1
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../redux/gameState/store';
import { Player } from '../../types/gameStateTypes';
import { PlayerPawn, PlayerPawnProps } from '../PlayerPawn/PlayerPawn';
// import PlayerPawn from '../PlayerPawn/PlayerPawn'
import { Console } from 'console';
import { getIcon } from '../../helpers/iconExporter'

export const NewGameMenu: React.FC = () => {
<<<<<<< HEAD
  const [input, updateName] = useState({ name: '', color: '', room: '' });
  // const [Room, updateRoom] = useState('')
  const dispatch = useDispatch();
  const [option, updateOption] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (event.target) {
      updateName((state) => ({
=======

  const FirePawn = getIcon('firePawn');
  const HexagonPawn = getIcon('hexagonPlayerPawn');
  const FlowerPawn = getIcon('flowerPawn');
  const RombPawn = getIcon('rombPawn')
  const SunPawn = getIcon('sunPawn')
  const SquarePawn = getIcon('squarePawn')

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault()
    if (event.target) {
      updateInput(state => ({
>>>>>>> 127e23c389b2339e9418ddd6d1f1b9a6748fdca1
        ...state,
        [event.target.name]: event.target.value,
      }));
    }
<<<<<<< HEAD
  };

  const addPlayer = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(AddPlayerAction(input.name, input.color, input.room));
  };
=======

  }
  const [input, updateInput] = useState({ name: '', color: '', room: '' })
  const dispatch = useDispatch();


  const handleSelect = (color: string) => {
    let selectedPawn: string = 'none';
    selectedPawn = color === input.color ? 'none' : color;

    updateInput(state => ({
      ...state,
      color: selectedPawn
    }))

  }

  let player = useSelector((state: RootState) => state.playerStateReducer)
  let state = useSelector((state: RootState) => state.gameStateReducer)

  const addPlayer = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    dispatch(AddPlayerAction(input.name, input.color, input.room))
  }

>>>>>>> 127e23c389b2339e9418ddd6d1f1b9a6748fdca1

  return (
    <form className='form'>
      <div className='menu-container'>
        <div className='title-container'>
          <h3 style = {{color:'royalblue'}}>Welcome to Viral</h3>
        </div>

        <input
          type='text'
          name='name'
          value={input.name}
<<<<<<< HEAD
          placeholder='Player name...'
          onChange={handleChange}
        ></input>

        {/* <input
          type='text'
          name='color'
          value={input.color}
          placeholder='color'
          onChange={handleChange}
        ></input> */}

        <select name='colours' id='playerColour'>
          <option selected value={input.color}>
            Blue
          </option>
          <option value={input.color}>Green</option>
          <option value={input.color}>Yellow</option>
          <option value={input.color}>Pink</option>
          <option value={input.color}>Red</option>
          <option value={input.color}>Orange</option>
        </select>

        <select name='players' id='playerCount'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
=======
          placeholder='Player name '
          onChange={handleChange}
        ></input>

>>>>>>> 127e23c389b2339e9418ddd6d1f1b9a6748fdca1

        <input
          type='text'
          name='room'
          value={input.room}
<<<<<<< HEAD
          placeholder='Room name...'
=======
          placeholder='Room '
>>>>>>> 127e23c389b2339e9418ddd6d1f1b9a6748fdca1
          onChange={handleChange}
        ></input>
<<<<<<< HEAD

        {/* <input
          type='text'
          name='number of players'
          placeholder='1 - 4 Players...'
        ></input> */}
        {/* 
        <select
          placeholder='select room'
          value={Room}
          onChange={selectRoom}>
          {(rooms.length > 0) ?
            rooms.map(room =>
              <option value={`${room}`} id='room-options'>
                {room}
              </option>) :
            <option> Start new game</option>
          }
        </select> */}
=======
        <div className='colors-container' >
          <FirePawn className="icon"
            style={{ transform: (input.color === 'orange') ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('orange')}
          />

          <HexagonPawn className="icon"
            style={{ transform: (input.color === 'green') ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('green')}
          />

          <FlowerPawn className="icon"
            style={{ transform: (input.color === 'pink') ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('pink')}
          />

          <RombPawn className="icon"
            style={{ transform: (input.color === 'blue') ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('blue')}
          />
          <SunPawn className="icon"
            style={{ transform: (input.color === 'yellow') ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('yellow')}
          />

          <SquarePawn className="icon"
            style={{ transform: (input.color === 'red') ? 'scale(1.7)' : 'none' }}
            onClick={() => handleSelect('red')}
          />
        </div>
>>>>>>> 127e23c389b2339e9418ddd6d1f1b9a6748fdca1

        <button className='start_game_button' type='submit' onClick={addPlayer}>
          Play
        </button>
      </div >
    </form >
  );
};
