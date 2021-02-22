import { promisify } from 'util';
import redis, { RedisClient } from 'redis';
import dotenv from 'dotenv';
import { Gamestate } from '../types/types';
import { IUser, Socket } from '../types/types';
dotenv.config({ path: __dirname + '../.env' });

const PORT = Number(process.env.DB_PORT);
const HOST = process.env.DB_HOST;
let client: RedisClient;

if (process.env.NODE_ENV === 'production' && process.env.REDISCLOUD_URL) {
  client = redis.createClient(process.env.REDISCLOUD_URL);
} else {
  client = redis.createClient(PORT, HOST);
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
const redisDELAsync = promisify<string>(client.del).bind(client);


export const setState = (room: IUser['room'], state: Gamestate): void => {
  try {
    const json = JSON.stringify(state);
    client.set(room, json);
  } catch (e) {
    console.log(e);
  }

};

export const setUser = (users: string, usersArray: Socket[] | undefined): void => {
  try {
    const json = JSON.stringify(usersArray);
    client.set(users, json);
  } catch (e) {
    console.log(e);
  }

};

export const getUsers = async (): Promise<Socket[] | undefined> => {
  try {
    const json = await redisGetAsync('users');
    if (json && json.length > 1) {
      const state = json && JSON.parse(json);
      return state;
    }
  } catch (e) {
    console.log(e);
  }

};

export const getState = async (room: IUser['room']): Promise<Gamestate | undefined> => {
  try {
    const json = await redisGetAsync(room);
    if (json) {
      const state = JSON.parse(json);
      return state;
    }
  } catch (e) {
    console.log(e);
  }

};

export const getGames = async (patern: string): Promise<string[] | undefined> => {

  try {
    const games = await redisKEYSAsync(patern);
    if (games) return games;
  } catch (e) {
    console.log(e);
  }

};

export const deleteGame = async (room: string): Promise<number | void> => {
  try {
    await redisDELAsync(room);
  } catch (e) {
    console.log(e);
  }
};