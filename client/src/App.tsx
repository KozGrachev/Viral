import React, { useState } from 'react';
import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
import { Notification } from 'grommet-icons';
import './App.css';

import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';
import { CureDeck } from './components/CureDeck/CureDeck';
import { getIcon } from './helpers/iconExporter'

function App () {

  const [showSidebar, setShowSidebar] = useState(false);

  const grommet = {
    global: {
      colors: {
        brand: '#228BE6'
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  const Insta = getIcon('instagramIcon');
  const Twit = getIcon('twitterIcon');

  return (
    <Grommet theme={grommet} full>
        <Provider store={store}>

        </Provider>
    </Grommet>
  );
}

export default App;
