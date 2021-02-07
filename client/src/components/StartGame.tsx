



import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../redux/gameState/store';
import { getGames } from '../socket-io-client/socket-io-client';
import { CureDeck } from '../components/CureDeck/CureDeck';
import { getIcon } from '../helpers/iconExporter'
import { SourceCard } from '../components/SourceCard/SourceCard';
import { CardHand } from '../components/CardHand/CardHand';
import { SourceDeck } from '../components/sourceDeck/sourceDeck'
import { MarkersStore } from '../components/MarkersStore/MarkersStore'
import { MisinformationDeck } from '../components/MisinformationDeck/misinformationDeck'
import { ChaosMeter } from '../components/ChaosMeter/ChaosMeter'
import { SpreadLevel } from '../components/SpreadLevel/SpreadLevel';
import { PlayerPrompt } from '../components/PlayerPrompt/PlayerPrompt';
import { SourceParent } from '../components/SourceParent/SourceParent';
import { NewGameMenu } from '../components/NewGameMenu/NewGameMenu'
import { StartGameAction } from '../redux/gameState/gameStateActions';
import { Player } from '../types/gameStateTypes';

export const StartGame: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  // const [showSidebar, setShowSidebar] = useState(false);
  const player = useSelector((state: RootState) => state.playerStateReducer)

  const startGame = (player: Player) => {
    dispatch(StartGameAction([player]))
  }

  return (
    <div className="app-container">
      {(player.name.length > 1) ?
        <div>
          {startGame(player)}
          <CureDeck /> {/* finished! just needs an initial state from redux */}
          <SpreadLevel /> {/* finished! Just needs an initial state from redux */}
          <PlayerPrompt />
          {/* <Map /> */}
          {/* <GameBoard /> */}
          <div className="sidebar-left">
            <h1> hello {player.name} we have 
            <br/> 
            {store.getState().gameStateReducer.sources.length} sources now
            </h1>
            <CardHand />
          </div>
          <SourceParent />
          <div className="board-container">
            <ChaosMeter />
            <SourceDeck />
            <MisinformationDeck />
            <MarkersStore />
          </div>
        </div>
        : <NewGameMenu />
      }
    </div>
  )
}