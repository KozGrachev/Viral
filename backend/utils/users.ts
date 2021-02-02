export const users: IUser[] = [];

export interface IUser {
  id: string,
  username: string,
  room: string
}
// Join user to chat
export function userJoin (id: string, username: string, room: string): IUser {
  const user = {
    id,
    username,
    room
  };
  users.push(user);
  return user;
}


// User leaves chat
export function userLeave (id: string): IUser | void {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}
