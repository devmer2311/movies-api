// src/models/movie.model.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const movieSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4, unique: true },
  title: { type: String, required: true },
  director: { type: String, default: '' },
  releaseYear: { type: Number },
  genre: { type: String, default: '' },
  rating: { type: Number, min: 1, max: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
