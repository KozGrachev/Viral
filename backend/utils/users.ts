export const users: IUser[] = [];

export interface IUser {
  name: string;
  id: string;
  cards?: Card[];
  cardHandOverflow?: boolean;
  isCurrent?: boolean;
  pawnColor?: string;
  currentSource?: string;
  room: string;
}

export interface Card {

  cardType: string; //? 'connection', 'minformation' or 'viral'
  sourceName: string;
  misinfoType: string;
}


// Join user to chat
export function userJoin (id: string, name: string, room: string): IUser {
  const user = {
    id,
    name,
    room,

  };

  users.push (user);
  return user;
}


// User leaves chat
export function userLeave (id: string): IUser | void {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}
