import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { addUser } from '../socketInstances/addUserInstance';

type User = {
  userId: string;
  socketId: string;
};

const CLIENT_PORT = (process.env.CLIENT_PORT as string) || 5173;

const app = express();
const httpServer = createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: `http://localhost:${CLIENT_PORT}`,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

let onlineUsers: User[] = [];

io.on('connection', (socket) => {
  console.log(`New socket connection: ${socket.id}`);

  socket.on('addUser', (userId) => {
    addUser(socket, onlineUsers, userId);
    io.emit('get-users', onlineUsers);
  });

  socket.on('disconnect', () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit('get-users', onlineUsers);
    console.log(`User with socket ID ${socket.id} disconnected`);
  });
});

export { app, httpServer };
