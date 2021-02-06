import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.css';
import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';
import { getGames } from './socket-io-client/socket-io-client';
import { CureDeck } from './components/CureDeck/CureDeck';
import { getIcon } from './helpers/iconExporter'
import { SourceCard } from './components/SourceCard/SourceCard';
import { CardHand } from './components/CardHand/CardHand';
import {SourceDeck} from './components/sourceDeck/sourceDeck'
import {MarkersStore} from './components/MarkersStore/MarkersStore'
import {MisinformationDeck} from './components/MisinformationDeck/misinformationDeck'
import {ChaosMeter} from './components/ChaosMeter/ChaosMeter'
import { SpreadLevel } from './components/SpreadLevel/SpreadLevel';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    getGames();
  }, []);

  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>

      <div className="app-container">
        {/* <CureDeck /> */} {/* finished! just needs an initial state from redux */}
        {/* <SpreadLevel/> */} {/* finished! Just needs an initial state from redux */}

        {/* <Map /> */}
        {/* <GameBoard /> */}
        <div className="sidebar-left">

          <CardHand>
            {/* <div className="source-card-hand">
              <SourceCard name='whatsapp' category="social" />
              <SourceCard name='whatsapp' category="social" />
              <SourceCard name='whatsapp' category="social" />
              <SourceCard name='whatsapp' category="social" />
            </div> */}
          </CardHand>
        </div>
        <div className="board-container">
        <ChaosMeter/>
        <SourceDeck/>
        <MisinformationDeck/>
        <MarkersStore/>
        </div>
      </div>
    </Provider>
    // </Grommet>
  );
}

export default App;
