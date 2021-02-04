var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promisify } from 'util';
import redis from 'redis';
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '../.env' });
const PORT = Number(process.env.DB_PORT) || 6379;
const HOST = process.env.DB_HOST || '127.0.0.1';
const client = redis.createClient(PORT, HOST);
if (process.env.DB_PASSWORD) {
    client.auth(process.env.DB_PASSWORD);
}
client.once('error', (err) => {
    console.error('Redis connect error', err);
    process.exit(1);
});
client.on('ready', () => {
    console.log('Redis connected');
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
const redisGetAsync = promisify(client.get).bind(client);
export const setState = (room, state) => {
    const json = JSON.stringify(state);
    client.set(room, json);
};
export const getState = (room) => __awaiter(void 0, void 0, void 0, function* () {
    const json = yield redisGetAsync(room);
    if (json) {
        const state = JSON.parse(json);
        return state;
    }
    else {
        return null;
    }
});
