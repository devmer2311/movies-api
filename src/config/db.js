// src/config/db.js
const mongoose = require('mongoose');

module.exports = async function connectDB(uri) {
  const mongoUri = uri || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/moviesdb';
  await mongoose.connect(mongoUri);
  console.log('MongoDB connected');
};
