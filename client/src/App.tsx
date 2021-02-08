
import React, { useEffect, useState } from 'react';
import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.scss';
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
<<<<<<< HEAD
import { StartGame } from './components/StartGame'
import { startGame } from './logic/actions.newState_CO';

function App() {
=======
import { ChaosMeterGrommet } from './components/ChaosMeter_Grommet/ChaosMeter_Grommet'
>>>>>>> 95fed0520835d62510578e38fff3b141f11d76c4

  const [stateRendered, updateStateRendered] = useState(false)


  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>
<<<<<<< HEAD
      <StartGame/>
    </Provider >
    // </Grommet>
=======

      <div className="app-container">
        <CureDeck /> {/* finished! just needs an initial state from redux */}
        <SpreadLevel/> {/* finished! Just needs an initial state from redux */}
        <PlayerPrompt />
        {/* <Map /> */}
        {/* <GameBoard /> */}
        <div className="sidebar-left">

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
    </Provider>
    // {/* </Grommet> */ }
>>>>>>> 95fed0520835d62510578e38fff3b141f11d76c4
  );
}

export default App;
