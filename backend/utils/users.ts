import { getUsers, setUser } from '../redis/redis-db';

export let users: Socket[] | undefined = [];

export interface Socket {
  id: string
  name: string
  room: string
}
export interface IUser {
  name: string;
  id: string;
  room: string;
}

export interface Card {

  cardType: string; //? 'connection', 'minformation' or 'viral'
  sourceName: string;
  misinfoType: string;
}


// Join user to chat
export function userJoin (id: string, name: string, room: string): Promise<IUser> {

  return getUsers().then(data => {
    users = data; 
    const user = {
      id,
      name,
      room,
    };
    users && users.push(user);
    setUser('users', users);
    return user;
  });



}


