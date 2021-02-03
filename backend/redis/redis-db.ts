import { promisify } from 'util';
import redis from 'redis'
import dotenv from 'dotenv';
import { GameState } from '../utils/game';
import { IUser } from '../utils/users';

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

export const setState = (room:IUser['room'], state: GameState): void => {

  const json = JSON.stringify(state);
  client.set(room, json);

};

export const getState = async (room:IUser['room']): Promise<GameState | null> => {

  const json = await redisGetAsync(room);
  if (json) {
    const state = JSON.parse(json);
    return state;
  } else {
    return null;
  }
};

