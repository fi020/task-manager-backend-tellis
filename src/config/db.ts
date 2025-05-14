// src/config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const LOCAL_URI = process.env.MONGODB_URI_DEV;
const PROD_URI = process.env.MONGODB_URI_PROD;

const MONGODB_URI = NODE_ENV === 'production' ? PROD_URI : LOCAL_URI;

export const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(MONGODB_URI);
    console.log(`✅ MongoDB connected (${NODE_ENV})`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
