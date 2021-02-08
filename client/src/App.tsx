
import React, { useEffect, useState } from 'react';
import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.scss';
import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';

import { StartGame } from './components/StartGame'


function App() {


  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>
      <StartGame />
    </Provider >
    // </Grommet>
  );
}

export default App;
