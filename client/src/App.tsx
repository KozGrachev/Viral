import React, { useEffect, useState } from 'react';
import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.scss';
import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';
import { getGames } from './socket-io-client/socket-io-client';
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
import { ChaosMeterGrommet } from './components/ChaosMeter_Grommet/ChaosMeter_Grommet'
import { OtherPlayer } from './components/OtherPlayer/OtherPlayer';
import { connections } from './types/connections'


function App () {

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    getGames();
  }, []);

  const fakePlayer1 = {
    name: 'Konstantin',
    // id: '5678',
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

      <div className="app-outer-wrapper">
        <div className="app-container">
          {/* <Map /> */}
          {/* <GameBoard /> */}
          <div className="sidebar-left">
            <CardHand />
            <PlayerPrompt />
          </div>
          <div className="board-container">
          <CureDeck />
          <SpreadLevel/>
            <SourceParent />
            <ChaosMeter />
            <SourceDeck />
            <MisinformationDeck />
            <MarkersStore />
            <ChaosMeterGrommet />
            <OtherPlayer player={fakePlayer1} />
          </div>
        </div>
      </div>
    </Provider>
    // {/* </Grommet> */ }
  );
}

export default App;
