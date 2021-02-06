import React, { useEffect, useState } from 'react';
import { Box, Grommet } from 'grommet';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.css';
import './socket-io-client/socket-io-client';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './redux/gameState/store';
import { getGames } from './socket-io-client/socket-io-client';
// import { CureDeck } from './components/CureDeck/CureDeck';
import { CureDeck } from './components/CureDeck/CureDeck';
import { getIcon } from './helpers/iconExporter'
import { SourceCard } from './components/SourceCard/SourceCard';
import { CardHand } from './components/CardHand/CardHand';
import { NewGameMenu } from './components/NewGameMenu/NewGameMenu'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    getGames();
  }, []);


  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>

      {/* <CureDeck /> */}

      <div className="app-container">
        <><div className="sidebar-left">
          <CardHand>
            <div className="source-card-hand">
              <SourceCard name='whatsapp' category="social" />
              <SourceCard name='whatsapp' category="social" />
              <SourceCard name='whatsapp' category="social" />
              <SourceCard name='whatsapp' category="social" />
            </div>
          </CardHand>
        </div>
          <div className="board-container">
          </div></>
      </div>
      {/* ultimately aternery as to whether a player exists or not */}
      <NewGameMenu />

    </Provider>
  );
}

export default App;
