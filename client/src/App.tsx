
import React, { useEffect, useState } from 'react';
import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.css';
import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';
import { CureDeck } from './components/CureDeck/CureDeck';

import { CardHand } from './components/CardHand/CardHand';
import { SourceDeck } from './components/sourceDeck/sourceDeck'
import { MarkersStore } from './components/MarkersStore/MarkersStore'
import { MisinformationDeck } from './components/MisinformationDeck/misinformationDeck'
import { ChaosMeter } from './components/ChaosMeter/ChaosMeter'
import { SpreadLevel } from './components/SpreadLevel/SpreadLevel';
import { PlayerPrompt } from './components/PlayerPrompt/PlayerPrompt';
import { SourceParent } from './components/SourceParent/SourceParent';
import { StartGame } from './components/StartGame'
import { startGame } from './logic/actions.newState_CO';

function App() {

  const [stateRendered, updateStateRendered] = useState(false)


  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>
      <StartGame/>
    </Provider >
    // </Grommet>
  );
}

export default App;
