import React from 'react';
import { Box, Grommet } from 'grommet';
import './App.css';
import './backend-dummy-client/dummy-client'; 

function App () {

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  const AppBar = () => (
    <Box
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
    <div className="App">
    </div>
  );
}

export default App;
