import { promisify } from 'util';
import redis from 'redis';
import dotenv from 'dotenv';
import { Gamestate } from '../utils/game';
import { IUser, Socket } from '../utils/users';

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


const redisGetAsync = promisify(client.get).bind(client);
const redisKEYSAsync = promisify(client.KEYS).bind(client);



export const setState = (room: IUser['room'], state: Gamestate): void => {

  const json = JSON.stringify(state);
  client.set(room, json);

};


export const setUser = (users:string, usersArray:Socket[] | undefined): void => {

  const json = JSON.stringify(usersArray);
  client.set(users, json);

};

export const getUsers = async (): Promise<Socket[] | undefined> => {
  const json = await redisGetAsync('users');
  if (json) {
    const state = JSON.parse(json);
    return state;
  }

};


export const getState = async (room: IUser['room']): Promise<Gamestate | undefined> => {
  if (!room) return;
  const json = await redisGetAsync(room);
  if (json) {
    const state = JSON.parse(json);
    return state;

  }

};

export const getGames = async (patern: string): Promise<string[] | undefined> => {

  const games = await redisKEYSAsync(patern);
  if (games) return games;

};
