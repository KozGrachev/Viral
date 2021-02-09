"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var users_1 = require("./utils/users");
var redis_db_1 = require("./redis/redis-db");
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
var app = express_1.default();
app.use(cors_1.default());
var httpServer = http_1.createServer(app);
var PORT = process.env.PORT || 3002;
var io = new socket_io_1.Server(httpServer, {
    cors: { origin: "" + process.env.CLIENT_URL, methods: ['GET', 'POST', 'DELETE'] }
});
var welcomeMessage = 'Welcome';
io.on('connection', function (socket) {
    console.log('server connected');
    socket.on('joinRoom', function (player) {
        var user = users_1.userJoin(socket.id, player.name, player.room);
        socket.join(user.room);
        // Welcome current user
        socket.emit('joinConfirmation', welcomeMessage + " " + player.name + ", you can start playing now.");
        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit('joinConfirmation', player.name + " has joined the game");
    });
    socket.on('onChangeState', function (_a) {
        var newState = _a.newState, Player = _a.Player;
        // console.log('NEWSTATE: ', newState, 'CONSOLE FROM ONCGANGE');
        var user = Player;
        redis_db_1.setState(user.room, newState);
        socket.broadcast.to(user.room)
            .emit('updatedState', newState);
        //save to database
    });
    socket.on('retriveGame', function (player) {
<<<<<<< HEAD
        // console.log('RETRIBE GAME player', player);
=======
        console.log('RETRIBE GAME player', player);
>>>>>>> player-cards_AS
        redis_db_1.getState(player.room).then(function (data) {
            // console.log(data, 'data from db');
            data === null || data === void 0 ? void 0 : data.players.push(player);
            data && redis_db_1.setState(player.room, data);
            // console.log('retrive data sent back after user added -players', data?.players);
<<<<<<< HEAD
=======
            console.log('retrived gata from the dv gere', data);
>>>>>>> player-cards_AS
            socket.emit('updatedState', data);
            socket.broadcast.to(player.room).emit('updatedState', data);
        });
    });
    socket.on('getGames', function () {
        redis_db_1.getGames('*').then(function (data) { return socket.emit('games', data); });
    });
    // Runs when client disconnects
    socket.on('disconnect', function () {
        console.log('disconnect works');
        var user = users_1.userLeave(socket.id);
        // console.log('from the disconnect', user?.room);
        user &&
            redis_db_1.getState(user.room).then(function (game) {
                var newPlayers = game === null || game === void 0 ? void 0 : game.players.filter(function (player) { return player.name !== user.name; });
                var data = __assign(__assign({}, game), { players: newPlayers });
                if (data) {
                    redis_db_1.setState(user.room, data);
                    socket.emit('updatedState', data);
                    socket.broadcast.to(user.room).emit('updatedState', data);
                }
                if (user) {
                    io.to(user.room).emit('userLeft', user.name + " has left the game");
                }
            });
    });
});
httpServer.listen(PORT, function () {
    return console.log("Server is listening on port " + PORT);
});
