import { connect } from 'mongoose';

import { MONGODB_URL } from '../db/mongoDBUrl.ts';

const connectToMongoDB = async () => {
  try {
    await connect(MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (err: unknown) {
    const error = err as Error;
    console.log('Error connecting to MongoDB', error.message);
  }
};

export default connectToMongoDB;
