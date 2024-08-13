import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routers/authRoutes.ts';
import messageRoutes from './routers/messageRoutes.ts';
import userRoutes from './routers/userRoutes.ts';

import connectToMongoDB from './db/connectToMongoDB.ts';

dotenv.config();

const PORT = (process.env.PORT as string) || 5000;

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port: ${PORT}`);
});
