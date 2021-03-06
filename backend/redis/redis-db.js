"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.getGames = exports.getState = exports.getUsers = exports.setUser = exports.setState = void 0;
var util_1 = require("util");
var redis_1 = __importDefault(require("redis"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '../.env' });
var PORT = Number(process.env.DB_PORT);
var HOST = process.env.DB_HOST;
var client;
if (process.env.NODE_ENV === 'production' && process.env.REDISCLOUD_URL) {
    client = redis_1.default.createClient(process.env.REDISCLOUD_URL);
}
else {
    client = redis_1.default.createClient(PORT, HOST);
}
client.once('error', function (err) {
    console.error('Redis connect error', err);
    process.exit(1);
});
client.on('ready', function () {
    console.log('Redis connected');
});
var redisGetAsync = util_1.promisify(client.get).bind(client);
var redisKEYSAsync = util_1.promisify(client.KEYS).bind(client);
var redisDELAsync = util_1.promisify(client.del).bind(client);
var setState = function (room, state) {
    try {
        var json = JSON.stringify(state);
        client.set(room, json);
    }
    catch (e) {
        console.log(e);
    }
};
exports.setState = setState;
var setUser = function (users, usersArray) {
    try {
        var json = JSON.stringify(usersArray);
        client.set(users, json);
    }
    catch (e) {
        console.log(e);
    }
};
exports.setUser = setUser;
var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var json, state, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, redisGetAsync('users')];
            case 1:
                json = _a.sent();
                if (json && json.length > 1) {
                    state = json && JSON.parse(json);
                    return [2 /*return*/, state];
                }
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getState = function (room) { return __awaiter(void 0, void 0, void 0, function () {
    var json, state, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, redisGetAsync(room)];
            case 1:
                json = _a.sent();
                if (json) {
                    state = JSON.parse(json);
                    return [2 /*return*/, state];
                }
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getState = getState;
var getGames = function (patern) { return __awaiter(void 0, void 0, void 0, function () {
    var games, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, redisKEYSAsync(patern)];
            case 1:
                games = _a.sent();
                if (games)
                    return [2 /*return*/, games];
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getGames = getGames;
var deleteGame = function (room) { return __awaiter(void 0, void 0, void 0, function () {
    var e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, redisDELAsync(room)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteGame = deleteGame;
