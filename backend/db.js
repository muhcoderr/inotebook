const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://inotebook:2829@inotebook.wqdfi1m.mongodb.net/inotebook';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;