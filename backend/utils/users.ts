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
export function userJoin (id: string, name: string, room: string): IUser {

  getUsers().then(data => users = data);
  const user = {
    id,
    name,
    room,
  };
  users?.push(user);
  console.log(users, 'users'); 

  setUser('users', users);  return user;
}





// User leaves chat
export function userLeave (id: string): Socket | undefined {
  getUsers().then(data => users = data);
  const index = users?.findIndex(user => user.id === id);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (index && users) {
    const user = users[index]; 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(users, 'users');
    users?.splice(index, 1);
    setUser('users', users);
    return user;
  }
  
}
