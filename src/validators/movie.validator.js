// src/validators/movie.validator.js

const currentYear = new Date().getFullYear();

function validateCreate(payload) {
  if (!payload || typeof payload !== 'object') return { valid: false, message: 'Invalid body' };
  if (!payload.title || String(payload.title).trim() === '') return { valid: false, message: 'title is required' };
  if (payload.releaseYear && (typeof payload.releaseYear !== 'number' || payload.releaseYear < 1800 || payload.releaseYear > currentYear))
    return { valid: false, message: 'releaseYear is invalid' };
  if (payload.rating && (typeof payload.rating !== 'number' || payload.rating < 1 || payload.rating > 10))
    return { valid: false, message: 'rating must be number 1-10' };
  return { valid: true };
}

function validateUpdate(payload) {
  if (!payload || typeof payload !== 'object') return { valid: false, message: 'Invalid body' };
  if (payload.releaseYear && (typeof payload.releaseYear !== 'number' || payload.releaseYear < 1800 || payload.releaseYear > currentYear))
    return { valid: false, message: 'releaseYear is invalid' };
  if (payload.rating && (typeof payload.rating !== 'number' || payload.rating < 1 || payload.rating > 10))
    return { valid: false, message: 'rating must be number 1-10' };
  return { valid: true };
}

module.exports = { validateCreate, validateUpdate };
