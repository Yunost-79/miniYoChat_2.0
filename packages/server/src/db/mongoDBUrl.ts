import dotenv from 'dotenv';

dotenv.config();

const USER_API = process.env.USER_API as string;
const PASSWORD = process.env.PASSWORD as string;

export const MONGODB_URL = `mongodb+srv://${USER_API}:${PASSWORD}@miniyochatserver.kknx4.mongodb.net/?retryWrites=true&w=majority&appName=MiniYoChatServer`;
