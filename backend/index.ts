import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { IUser, userJoin, userLeave } from './utils/users';
import { getState, setState } from './redis/redis-db';

import * as dotenv from 'dotenv';
import { Gamestate } from './utils/game';

dotenv.config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());
const httpServer = createServer(app);
const PORT = process.env.PORT || 3002;

const io = new Server(httpServer, {
  cors: { origin: `${process.env.CLIENT_URL}`, methods: ['GET', 'POST'] }
});

let welcomeMessage = 'Welcome';

io.on('connection', (socket) => {
  console.log('server connected');

  socket.on('joinRoom', ({ name, room }: { name: string, room: string }) => {

    const user = userJoin(socket.id, name, room);
    socket.join(user.room);

    // Welcome current user
    socket.emit('joinConfirmation', `${welcomeMessage} ${name}, you can start playing now.`);

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'joinConfirmation',
        `${name} has joined the game`);

  });

  socket.on('onChangeState',
    ({ newState, Player }: { newState: Gamestate, Player: IUser }) => {
      const user = Player;
      socket.broadcast.to(user.room)
        .emit('updatedState', newState);
      //save to database
      setState(user.room, newState);
    });

  socket.on('resumeGame', (room: IUser['room']) => {
    welcomeMessage = 'Welcome back';
    getState(room).then(data => socket.emit('updatedState', data));

  });
  // Runs when client disconnects
  socket.on('disconnect', () => {
    console.log('disconnect works');
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'userLeft', `${user.name} has left the game`);
    }
  });
});



httpServer.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);