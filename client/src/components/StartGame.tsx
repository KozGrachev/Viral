
import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../redux/gameState/store';
import { getGame, getGames, joinRoom } from '../socket-io-client/socket-io-client';
import { CureDeck } from '../components/CureDeck/CureDeck';
import { getIcon } from '../helpers/iconExporter'
import { SourceCard } from '../components/SourceCard/SourceCard';
import { CardHand } from '../components/CardHand/CardHand';
import { SourceDeck } from '../components/sourceDeck/sourceDeck'
import { MarkersStore } from '../components/MarkersStore/MarkersStore'
import { MisinformationDeck } from '../components/MisinformationDeck/misinformationDeck'
import { ChaosMeter } from '../components/ChaosMeter/ChaosMeter'
import { SpreadLevel } from '../components/SpreadLevel/SpreadLevel';
import { PlayerPrompt } from '../components/PlayerPrompt/PlayerPrompt';
import { SourceParent } from '../components/SourceParent/SourceParent';
import { NewGameMenu } from '../components/NewGameMenu/NewGameMenu'
import { addPlayerToGameState, StartGameAction } from '../redux/gameState/gameStateActions';
import { Gamestate, Player } from '../types/gameStateTypes';
import { UpdateGameStateAction } from '../redux/gameState/reduxTypes';
import { OtherPlayer } from './OtherPlayer/OtherPlayer';
import {ChaosMeterGrommet} from './ChaosMeter_Grommet/ChaosMeter_Grommet'
import {GameOver} from './GameOver/gameOver'
import {Winner} from './YouWon/youWon'


export const StartGame: React.FC = (): JSX.Element => {

  const dispatch = useDispatch();
  // const [showSidebar, setShowSidebar] = useState(false);
  const player = useSelector((state: RootState) => state.playerStateReducer)
  const allRooms = useSelector((state: RootState) => state.allGamesStateReducer)
  const [stateRendered, updateStateRendered] = useState(false)
  // let gameOn: boolean = false;
  const state = useSelector((state: RootState) => state.gameStateReducer)

  const startGame = (player: Player) => {
    if (!stateRendered) {
      joinRoom(player)
      if (allRooms.filter(room => room === player.room).length > 0) {
        getGame(player);
        updateStateRendered(true)
      } else {
        dispatch(StartGameAction([player]))
        updateStateRendered(true)
      }
    }
  }


  const MapSVG = getIcon('map');
  // const addPlayer = () => {
  //   dispatch(addPlayerToGameState(player, gamestate))
  // }

  return (
    
    <div>
      {state.gameWon?
        <Winner/>:
      state.gameLost?
        <GameOver/>:
        (player.name.length < 1) ?
          <NewGameMenu />
          : (
            (!stateRendered) ?
              <h1>
                game loading ...
          {startGame(player)}
              </h1>
              :
              (stateRendered && state.gameOn) &&
              <div className="app-outer-wrapper">
                <div className="app-container">
                  {/* <Map /> */}
                  {/* <GameBoard /> */}
                  <div className="sidebar left">
                    <CardHand />
                    <PlayerPrompt />
                  </div>
                  <div className="board-container">

                    <div id="game-board">
                      <SourceParent />
                      {/* <MapSVG className="map-svg"/> */}
                    </div>

                    <SourceDeck />
                    <MisinformationDeck />
                    <MarkersStore />
                    {/* <ChaosMeterGrommet /> */}
                    <OtherPlayer />
                    {/* </Grommet> */}
                  </div>
                  <div className="sidebar right">
                    <ChaosMeter />
                    <SpreadLevel/>
                  </div>
                </div>
              </div>
          )
      }
    </div>

  )
}















// import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// // import { Notification } from 'grommet-icons';
// import './App.scss';
// import './socket-io-client/socket-io-client';
// import { Provider } from 'react-redux';
// import { store } from './redux/gameState/store';
// import { getGames } from './socket-io-client/socket-io-client';
// import { CureDeck } from './components/CureDeck/CureDeck';
// import { getIcon } from './helpers/iconExporter'
// import { SourceCard } from './components/SourceCard/SourceCard';
// import { CardHand } from './components/CardHand/CardHand';
// import { SourceDeck } from './components/sourceDeck/sourceDeck'
// import { MarkersStore } from './components/MarkersStore/MarkersStore'
// import { MisinformationDeck } from './components/MisinformationDeck/misinformationDeck'
// import { ChaosMeter } from './components/ChaosMeter/ChaosMeter'
// import { SpreadLevel } from './components/SpreadLevel/SpreadLevel';
// import { PlayerPrompt } from './components/PlayerPrompt/PlayerPrompt';
// import { SourceParent } from './components/SourceParent/SourceParent';
// import { ChaosMeterGrommet } from './components/ChaosMeter_Grommet/ChaosMeter_Grommet'
// import { OtherPlayer } from './components/OtherPlayer/OtherPlayer';
// import { connections } from './types/connections'
// // import './assets/allIcons/game-board-without-sources.svg';






// function App () {

//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     getGames();
//   }, []);

//   const MapSVG = getIcon('map');

//   const fakePlayer1 = {
//     name: 'Konstantin',
//     // id: '5678',
//     cards: [
//       connections[Math.floor(Math.random() * (connections.length - 1))],
//     ],
//     cardHandFull: false,
//     isCurrent: false,
//     pawnColor: 'fuchsia',
//     currentSource: 'University'
//   }

//   return (
//     // <Grommet theme={grommet} full>
//     <Provider store={store}>
//       <div className="app-outer-wrapper">
//         <div className="app-container">
//           {/* <Map /> */}
//           {/* <GameBoard /> */}
//           <div className="sidebar-left">
//             <CardHand />
//             <PlayerPrompt />
//           </div>
//           <div className="board-container">

//             <div id="game-board">
//               {/* <MapSVG className="map-svg"/> */}
//               <SourceParent />
//             </div>

//             {/* <ChaosMeter />
//             <SourceDeck />
//             <MisinformationDeck />
//             <MarkersStore />
//             <ChaosMeterGrommet />
//             <OtherPlayer />
//             // {/* </Grommet> */ }
//           </div>
//         </div>
//       </div>
//     </Provider>
//   );
// }

// export default App;
