import React from 'react';
import { Box, Grommet } from 'grommet';
import './App.css';

import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';
import { CureDeck } from './components/CureDeck/CureDeck';

function App() {

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  // eslint-disable-next-line
  const AppBar = () => (
    <Box // eslint-disable-next-line
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
    />
  );

  return (
    <Provider store={store}>

      {/* <CureDeck /> */}

    </Provider>
  );
}

export default App;
