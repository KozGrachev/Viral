
import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../redux/gameState/store';
import { getGame, getGames, joinRoom } from '../socket-io-client/socket-io-client';
import { CureDeck } from '../components/CureDeck/CureDeck';
import { getIcon } from '../helpers/iconExporter'
import { NewGameMenu } from '../components/NewGameMenu/NewGameMenu'
import { addPlayerToGameState, DealCardsToNewPlayerAction, StartGameAction } from '../redux/gameState/gameStateActions';
import { Gamestate, Player } from '../types/gameStateTypes';
import { GameOn } from './GameOn';
import { GameOver } from './GameOver/gameOver'
import { Winner } from './YouWon/youWon'

export const StartGame: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  // const [showSidebar, setShowSidebar] = useState(false);
  const player = useSelector((state: RootState) => state.playerStateReducer)
  const allRooms = useSelector((state: RootState) => state.allGamesStateReducer)
  const [stateRendered, updateStateRendered] = useState(false)
  // let gameOn: boolean = false;
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
  

  const MapSVG = getIcon('map');
  // const addPlayer = () => {
  //   dispatch(addPlayerToGameState(player, gamestate))
  // }

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








