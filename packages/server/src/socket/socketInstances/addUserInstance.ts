import { Socket } from 'socket.io';
import { User } from 'types/sockets/socket.types';
import { io } from '../socket';

export const addUser = (socket: Socket, onlineUsers: User[], newUserId: string) => {
  const isUserOnline = onlineUsers.some((user) => user.userId === newUserId);

  if (!isUserOnline) {
    onlineUsers.push({ userId: newUserId, socketId: socket.id });
    console.log('onlineUsers', onlineUsers);
  }

  io.emit('get-users', onlineUsers);
};
