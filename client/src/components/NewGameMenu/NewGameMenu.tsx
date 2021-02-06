import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { store } from '../../redux/gameState/store';
// import { useSelector } from 'react-redux';
// import { RootState, store } from '../../redux/gameState/store';
import './NewGameMenu.css';

export const NewGameMenu: React.FC = () => {



  let rooms: string[] = store.getState().allGamesStateReducer;

  function handle() {
    return rooms = store.getState().allGamesStateReducer
  }


  return (
    <form className='form'>
      <div className='menu-container'>
        <div className='title-container'>
          <h3>Welcome</h3>
        </div>

        <input
          type='text'
          name='player name'
          placeholder='player name...'
        ></input>

        <input
          type='text'
          name='number of players'
          placeholder='1 - 4 players...'
        ></input>
        {
          <select name="rooms" id="rooms" onSelect={handle}>
            {(rooms.length > 0) ?
              rooms.map(room => <option value={`${room}`} id='room-options'>{room}</option>) :
              <option> start new game</option>
            }
          </select>

        }

        <button className='start_game_button' type='submit' >
          Play
          </button>
      </div>
    </form>
  );
}




