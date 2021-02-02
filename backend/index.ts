import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { userJoin, userLeave } from './utils/users';
import { IUser } from './utils/users';
import { GameState } from './utils/game';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });
const app = express();
app.use(cors());


app.get('/', (_, res) => {
  res.send('it worksss');
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] }
});
const PORT = process.env.PORT || 3002;


io.on('connection', (socket) => {
  console.log('server connected');

  socket.on('joinRoom', ({ username, room }: { username: string, room: string }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    // Welcome current user
    socket.emit('joinConfirmation', `welcome ${username}, you can start playing now.`);

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'joinConfirmation',
        `${username} has joined the game`);

  });

  socket.on('onChangeState', (state:any) => {
    console.log(state, 'state');
  }); 

  // socket.on('onchangeState', ({ user, state }: { user: IUser, state: GameState }) => {
  //   console.log(user, 'user from change state ');
  //   socket.broadcast.to(user.room).emit('updatedState', state);
  //   // will go and save this to redis 
  // });

  //   socket.emit will send back message to sender only,
  // io.emit will send message to all the client including sender
  // if you want to send message to all but not back to sender then socket.broadcast.emit

  // Runs when client disconnects
  socket.on('disconnect', () => {
    console.log('disconnect works');
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'userLeft', `${user.username} has left the game`);
    }
  });
});



httpServer.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);