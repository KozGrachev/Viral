"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const users_1 = require("./utils/users");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
const app = express_1.default();
app.use(cors_1.default());
app.get('/', (_, res) => {
    res.send('it worksss');
});
const httpServer = http_1.createServer(app);
const io = new socket_io_1.Server(httpServer, {
    cors: { origin: 'http://192.168.1.26:3000', methods: ['GET', 'POST'] }
});
const PORT = process.env.PORT || 3001;
io.on('connection', (socket) => {
    console.log('server connected');
    socket.on('joinRoom', ({ username, room }) => {
        const user = users_1.userJoin(socket.id, username, room);
        socket.join(user.room);
        // Welcome current user
        socket.emit('joinConfirmation', `welcome ${username}, you can start playing now.`);
        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit('joinConfirmation', `${username} has joined the game`);
    });
    socket.on('changeState', ({ user, state }) => {
        console.log(user, 'user from change state ');
        socket.broadcast.to(user.room).emit('updatedState', state);
        // will go and save this to redis 
    });
    //   socket.emit will send back message to sender only,
    // io.emit will send message to all the client including sender
    // if you want to send message to all but not back to sender then socket.broadcast.emit
    // Runs when client disconnects
    socket.on('disconnect', () => {
        console.log('disconnect works');
        const user = users_1.userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('userLeft', `${user.username} has left the game`);
        }
    });
});
httpServer.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
