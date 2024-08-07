import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { MongoClient, ServerApiVersion } from 'mongodb';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors);
app.use(express.json());

const MONGO_URL = process.env.MONGODB_URI;

if (!MONGO_URL) {
  throw new Error('MONGODB_URI environment variable is not set');
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Connection to MongoDB was successful');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/ping', (_req, res) => {
  return res.json({ msg: 'Ping Successful' });
});

// app.use('/api/auth', authRoutes);
// app.use('/api/messages', messageRoutes);
