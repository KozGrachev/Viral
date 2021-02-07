import React, { ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, useState } from 'react';
import './NewGameMenu.css';
// import { startGameEvent, addPlayerEvent } from '../../logic/event.listeners'
import { AddPlayerAction } from '../../redux/gameState/gameStateActions';
import { useDispatch } from 'react-redux';
import { store } from '../../redux/gameState/store';


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


const addPlayer =  (event:React.MouseEvent<HTMLElement>) => {
  event.preventDefault()
  const color = 'blue'
    const room = 'test room'
    console.log('name', name)
   dispatch(AddPlayerAction(name.name, color, room))

  }

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

        <button className='start_game_button' type='submit' onClick= {addPlayer} >
          Play
        </button>
      </div>
    </form>
  );
};

