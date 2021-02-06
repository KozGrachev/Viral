import React, { useState } from 'react';
import { Box, Button, Heading, Grommet, Collapsible } from 'grommet';
import { Notification } from 'grommet-icons';
import './App.css';

import './socket-io-client/socket-io-client';
import { Provider } from 'react-redux';
import { store } from './redux/gameState/store';
import { CureDeck } from './components/CureDeck/CureDeck';

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

  // eslint-disable-next-line
  const AppBar = (props: any) => (
    <Box // eslint-disable-next-line
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      // elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  return (
    <>
      <Provider store={store}>
        <Grommet theme={grommet} full>
          <Box fill>
            <AppBar >
              <Heading level='3' margin='none'>OOOH woooooow My App</Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>

            <Collapsible direction="horizontal" open={showSidebar}>

                <Box flex align='center' justify='center'> app body
                  <Box
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar </Box>
                </Box>
            </Collapsible>


          </Box>

          <Box align="center" background="neutral-2">
            <Button
              label="hello world"
              primary
              onClick={() => alert('hello, world')}
            />
          </Box>
        </Grommet>
      </Provider>
    </>
  );
}

export default App;
