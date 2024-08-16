import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routers/authRoutes.ts';
import messageRoutes from './routers/messageRoutes.ts';
import userRoutes from './routers/userRoutes.ts';

import connectToMongoDB from './db/connectToMongoDB.ts';

import { app, httpServer } from './socket/socket';

dotenv.config();

const SERVER_PORT = (process.env.SERVER_PORT as string) || 7000;
const CLIENT_PORT = (process.env.CLIENT_PORT as string) || 5173;

app.use(
  cors({
    origin: `http://localhost:${CLIENT_PORT}`,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

httpServer.listen(SERVER_PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port: ${SERVER_PORT}`);
});
