
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/gameState/store';
import { getGame, joinRoom } from '../socket-io-client/socket-io-client';

import { NewGameMenu } from '../components/NewGameMenu/NewGameMenu'
import {  StartGameAction } from '../redux/gameState/gameStateActions';
import {  Player } from '../types/gameStateTypes';
import { GameOn } from './GameOn';
import { GameOver } from './GameOver/gameOver'
import { Winner } from './YouWon/youWon'

export const StartGame: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  
  const player = useSelector((state: RootState) => state.playerStateReducer)
  const allRooms = useSelector((state: RootState) => state.allGamesStateReducer)
  const [stateRendered, updateStateRendered] = useState(false)
  
  let state = useSelector((state: RootState) => state.gameStateReducer)

  const startGame = (player: Player) => {
    if (!stateRendered) {
      joinRoom(player)
      if (allRooms.filter(room => room === player.room).length > 0) {
        getGame(player);
        updateStateRendered(true)
      } else {
        dispatch(StartGameAction([player]))
        updateStateRendered(true)
      }
    }
  }
  


  return (

    <div className="start-game-container">
      {state.gameWon ?
        <Winner /> :
        state.gameLost ?
          <GameOver /> :
          (player.name.length < 1) ?


            <NewGameMenu />

            : (
              (!stateRendered) ?
                <h1>
                  game loading ...
          {startGame(player)}
                </h1>
                :
                <GameOn rendered={stateRendered} />
            )
      }
    </div>
  )
}








