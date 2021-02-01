import express from 'express';
import cors from 'cors';

import { createServer } from 'http';
import { Server} from 'socket.io';

const app = express();
app.use(cors());


app.get('/', (_, res) => {
  res.send('it worksss');
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] }
});
const PORT = 3001;

io.on('connection', (socket) => {
  console.log('server connected');
  socket.on('hello', (data:string) => console.log(data)); 
  socket.emit('hi back', 'hi hi hi'); 
});

httpServer.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);