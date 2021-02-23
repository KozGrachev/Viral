import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { userJoin, userLeave } from './utils/users';
import { getState, setState, getGames, deleteGame } from './redis/redis-db';
import * as dotenv from 'dotenv';
import { Gamestate, Player } from './types/types';

const path = require('path');
const buildPath = path.resolve('../client/build');

dotenv.config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;
const httpServer = createServer(app);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(buildPath));
  app.get('*', (_, res) => res.sendFile(path.join(buildPath, 'index.html')));
}

const io = new Server(httpServer, {
  cors: { origin: `${process.env.CLIENT_URL}`, methods: ['GET', 'POST', 'DELETE'] }
});

const welcomeMessage = 'Welcome';

io.on('connection', (socket) => {
  console.log('server connected');
  socket.on('joinRoom', async (player: Player) => {
    try {
      const user = await userJoin(socket.id, player.name, player.room);
      user && socket.join(user.room);
      socket.emit('joinConfirmation', `${welcomeMessage} ${player.name}, you can start playing now.`);
      socket.broadcast
        .to(user.room)
        .emit(
          'joinConfirmation',
          `${player.name} has joined the game`);
    }
    catch (e) {
      console.log(e);
    }
  });

  socket.on('onChangeState',
    ({ newState, Player }: { newState: Gamestate, Player: Player }) => {
      try {
        const user = Player;
        socket.broadcast.to(user.room)
          .emit('updatedState', newState);
        setState(user.room, newState);
      } catch (e) {
        console.log(e);
      }
    });

  socket.on('retriveGame', (player: Player) => {
    try {
      getState(player.room).then(data => {
        data && data.players.push(player);
        socket.emit('updatedState', data);
        socket.broadcast.to(player.room).emit('updatedState', data);
        data && setState(player.room, data);
      });
    } catch (e) {
      console.log(e);
    }

  });

  socket.on('getGames', () => {
    getGames('*').then(data => {
      socket.emit('games', data);
    });
  });

  socket.on('disconnect', async () => {
    try {
      const user = await userLeave(socket.id);
      console.log(user, 'user');
      user &&
        getState(user.room).then(game => {
          if (game && game.gameLost === false && game.gameWon === false) {
            const newPlayers = game.players.filter(player => player.name !== user.name);
            const data = { ...game, players: newPlayers };
            if (data) {
              socket.emit('updatedState', data);
              socket.broadcast.to(user.room).emit('updatedState', data);
              setState(user.room, data);
            }
          } else {
            game && (game.gameLost || game.gameWon) && deleteGame(user.room).then(() => {
              getGames('*').then(data => {
                socket.emit('games', data);
              });
            }
            );
          }

          io.to(user.room).emit(
            'userLeft', `${user.name} has left the game`);
        });
    } catch (e) {
      console.log(e);
    }
  });
});

httpServer.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);
