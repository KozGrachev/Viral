
import React, { useEffect, useState } from 'react';
import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.scss';
import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';

import { StartGame } from './components/StartGame'
import { connections } from './logic/connections';


function App() {


  const fakePlayer1 = {
    name: 'Konstantin',
     id: '5678',
    cards: [
      connections[Math.floor(Math.random() * (connections.length - 1))],
    ],
    cardHandFull: false,
    isCurrent: false,
    pawnColor: 'fuchsia',
    currentSource: 'University'
  }

  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>
<<<<<<< HEAD
      <div className="app-outer-wrapper">
        <div className="app-container">
          {/* <Map /> */}
          {/* <GameBoard /> */}
            <SourceParent />
          <div className="sidebar-left">
            <CardHand />
            <PlayerPrompt />
          </div>
          <div className="board-container">
          <CureDeck /> 
          <SpreadLevel/> 
            <ChaosMeter />
            <SourceDeck />
            <MisinformationDeck />
            <MarkersStore />
            <ChaosMeterGrommet />
            <OtherPlayer  />
          </div>
        </div>
      </div>
    </Provider>
    // {/* </Grommet> */ }
=======
      <StartGame />
    </Provider >
    // </Grommet>
>>>>>>> afe228564de474c303b7f9c5bcbb96593c7ae842
  );
}

export default App;
