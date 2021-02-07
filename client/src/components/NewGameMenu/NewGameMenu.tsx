import React, { ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, useState } from 'react';
import './NewGameMenu.css';
// import { startGameEvent, addPlayerEvent } from '../../logic/event.listeners'
import {  StartGameAction } from '../../redux/gameState/gameStateActions';
import { useDispatch, useSelector } from 'react-redux';
import { playerStore, store } from '../../redux/gameState/store';
import { addPlayerToGame, createPlayer } from '../../logic/actions.MW';
import { Gamestate } from '../../types/gameStateTypes';


export const NewGameMenu: React.FC = () => {
  const [name, updateName] = useState({ name: '' })
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    if (event.target) {
      updateName(state => ({
        ...state,
        name: event.target.value
      }))
    }
  }


  const addPlayer = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const color = 'blue'
    const room = 'test room'
    // dispatch(AddPlayerAction(name.name, color, room))
    const player = createPlayer(name.name, color, room)
    // const player = playerStore.getState()
    dispatch(StartGameAction([player]))
  }

  
  const level = useSelector((state:Gamestate) => state.spreadLevel)
  console.log(level)

  return (
    <form className='form' >
      <div className='menu-container'>
        <div className='title-container'>
          <h3>Welcome</h3>
        </div>
        <input
          type='text'
          name='player-name'
          value={name.name}
          placeholder='player name...'
          onChange={handleChange}
        ></input>

        {/* <input
          type='text'
          name='number of players'
          placeholder='1 - 4 players...'
        ></input> */}

        <button className='start_game_button' type='submit' onClick={addPlayer} >
          Play
        </button>
        {level}

      </div>
    </form>
  );
};

