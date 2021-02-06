import React, { useEffect, useState } from 'react';
import { Box, Grommet } from 'grommet';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import './App.css';
import './socket-io-client/socket-io-client';
import { Provider, useSelector } from 'react-redux';
import {store } from './redux/gameState/store';
import { SourceCard } from './components/SourceCard/SourceCard';
import { CardHand } from './components/CardHand/CardHand';
import { NewGameMenu } from './components/NewGameMenu/NewGameMenu'

function App() {
  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    // <Grommet theme={grommet} full>
    <Provider store={store}>
      <div> {store.getState().allGamesStateReducer[0]}</div>
   
        <NewGameMenu />
      
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


    </Provider>
  );
}

export default App;
