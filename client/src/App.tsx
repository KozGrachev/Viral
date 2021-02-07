import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.css';
import './socket-io-client/socket-io-client';
import { Provider, useSelector } from 'react-redux';
import { playerStore, store } from './redux/gameState/store';

import { CureDeck } from './components/CureDeck/CureDeck';
import { getIcon } from './helpers/iconExporter'
import { SourceCard } from './components/SourceCard/SourceCard';
import { CardHand } from './components/CardHand/CardHand';
import { SourceDeck } from './components/sourceDeck/sourceDeck'
import { MarkersStore } from './components/MarkersStore/MarkersStore'
import { MisinformationDeck } from './components/MisinformationDeck/misinformationDeck'
import { ChaosMeter } from './components/ChaosMeter/ChaosMeter'
import { SpreadLevel } from './components/SpreadLevel/SpreadLevel';
import { PlayerPrompt } from './components/PlayerPrompt/PlayerPrompt';
import { SourceParent } from './components/SourceParent/SourceParent';
import { NewGameMenu } from './components/NewGameMenu/NewGameMenu';
import { Gamestate } from './types/gameStateTypes';



function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>
      {/* <Provider store={playerStore}> */}
      {/* <div className="app-container"> */}
        {/* <CureDeck /> */} {/* finished! just needs an initial state from redux */}
        {/* <SpreadLevel/> */} {/* finished! Just needs an initial state from redux */}
        {/* <PlayerPrompt />
          {/* <Map /> */}
        {/* <GameBoard /> */}
        {/* <div className="sidebar-left">
            <CardHand />
          </div>

          <SourceParent />
          <div className="board-container">  */}

        {/* 
            <ChaosMeter />
            <SourceDeck />
            <MisinformationDeck />
            <MarkersStore /> */}
        {/* </div> */}
      {/* </div> */}
      {/* {store.getState().players[store.getState().players.length - 1].name} */}
      <NewGameMenu />
    </Provider>
    // </Provider>
    //  {/* </Grommet> */}
  );
}

export default App;
