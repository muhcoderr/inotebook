import mongoose from 'mongoose';
const { Schema } = mongoose;

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/iNotebook';

const connectToMongo = async () => {
  try {
    await connect(mongoURI, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToMongo;
