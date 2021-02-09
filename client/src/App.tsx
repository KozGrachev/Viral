
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

    <Provider store={store}>

      <StartGame />
    </Provider >
    
  );
}

export default App;
