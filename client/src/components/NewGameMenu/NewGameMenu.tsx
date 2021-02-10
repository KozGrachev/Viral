import React, { ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, useState } from 'react';
import './NewGameMenu.scss';
// import { startGameEvent, addPlayerEvent } from '../../logic/event.listeners'
import { AddPlayerAction, addPlayerToGameState, DealCardsToNewPlayerAction, StartGameAction, updateGameState } from '../../redux/gameState/gameStateActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../redux/gameState/store';
import { Player } from '../../types/gameStateTypes';
import { Console } from 'console';
import { getIcon } from '../../helpers/iconExporter'


export const NewGameMenu: React.FC = () => {

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
        ...state,
        [event.target.name]: event.target.value
      }))
    }

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


  return (
    <form className='form' >
      <div className='menu-container'>
        <div className='title-container'>
          <h3 style = {{color:'blueviolet'}}>Welcome</h3>
        </div>
        <input
          type='text'
          name='name'
          value={input.name}
          placeholder='player name '
          onChange={handleChange}
        ></input>


        <input
          type='text'
          name='room'
          value={input.room}
          placeholder='room '
          onChange={handleChange}

        ></input>
        <div className='colors-container' >
          <FirePawn id="icon"
            style={{ border: input.color === 'orange' ? '2px solid orange' : 'none' }}
            onClick={() => handleSelect('orange')}
          />

          <HexagonPawn id="icon"
            style={{ border: (input.color === 'green') ? ' 2px solid green' : 'none' }}
            onClick={() => handleSelect('green')}
          />

          <FlowerPawn id="icon"
            style={{ border: (input.color === 'pink') ? '2px solid pink' : 'none' }}
            onClick={() => handleSelect('pink')}
          />

          <RombPawn id="icon"
            style={{ border: (input.color === 'blue') ? ' 2px solid blue' : 'none' }}
            onClick={() => handleSelect('blue')}
          />
          <SunPawn id='icon'
            onClick={() => handleSelect('yellow')}
            style={{ border: (input.color === 'yellow') ? '2px solid yellow' : 'none' }}
          />

          <SquarePawn id="icon"
            onClick={() => handleSelect('red')}
            style={{ border: (input.color === 'red') ? '2px solid red' : 'none' }}

          />

        </div>

        <button className='start_game_button' type='submit' onClick={addPlayer} >
          Play
        </button>
      </div >
    </form >
  );
};