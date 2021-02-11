
import React from 'react';
// import { Notification } from 'grommet-icons';
import './App.scss';
import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';

import { StartGame } from './components/StartGame'


function App() {
  return (

    <Provider store={store}>

      <StartGame />
    </Provider >

  );
}

export default App;
