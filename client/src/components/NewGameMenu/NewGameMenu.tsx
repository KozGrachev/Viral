import React from 'react';
import './NewGameMenu.css';
export const NewGameMenu: React.FC = () => {
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
        <button className='start_game_button' type='submit'>
          Play
        </button>
      </div>
    </form>
  );
};