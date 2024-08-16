import { Socket } from 'socket.io';
import { io } from '../socket/socket';

type User = {
  userId: string;
  socketId: string;
};

export const addUser = (socket: Socket, onlineUsers: User[], newUserId: string) => {
  const isUserOnline = onlineUsers.some((user) => user.userId === newUserId);

  if (!isUserOnline) {
    onlineUsers.push({ userId: newUserId, socketId: socket.id });
    console.log('onlineUsers:', onlineUsers);
  }

  io.emit('get-users', onlineUsers);
};
