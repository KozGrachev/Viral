import { getUsers, setUser } from '../redis/redis-db';
import { Socket, IUser } from '../types/types';

export let users: Socket[] | undefined = [];
// Join user to chat
export function userJoin (id: string, name: string, room: string): Promise<IUser> {
  const existingUsers = getUsers().then(data => {
    users = data;
    const user = {
      id,
      name,
      room,
    };
    users && users.push(user);
    users && setUser('users', users);
    return user;
  });

  return existingUsers;
}

export function userLeave (id: string): Promise<Socket | undefined> {
  return getUsers().then(data => {
    users = data;
    const index = users && users.findIndex(user => user.id === id);
    if (index && users) {
      const user = users[index];
      users && users.splice(index, 1);
      users && setUser('users', users);
      return user;
    }
  });
}
