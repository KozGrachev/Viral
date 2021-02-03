import React from 'react';
import { Box, Grommet } from 'grommet';
import './App.css';
import './socket-io-client/socket-io-client';

import { ReduxDummy } from './socket-io-client/dummy-redux-component';
import { Provider } from 'react-redux';
import {store} from './redux/gameState/store'


function App() {

  const dummy = true
  
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

  if (dummy) return (
    <Provider store={store}>
      <ReduxDummy />
    </Provider>)


  return (
    <div className="App">
      <Grommet theme={theme}>
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </Grommet>
    </div>
  );
}

export default App;
