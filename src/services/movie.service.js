// src/services/movie.service.js
const dao = require('../dao/movie.dao');

const listMovies = async () => {
  return dao.findAll();
};

const getMovie = async (id) => {
  const movie = await dao.findById(id);
  if (!movie) throw { status: 404, message: 'Movie not found' };
  return movie;
};

const createMovie = async (payload) => {
  return dao.create(payload);
};

const updateMovie = async (id, payload) => {
  const updated = await dao.updateById(id, payload);
  if (!updated) throw { status: 404, message: 'Movie not found' };
  return updated;
};

const deleteMovie = async (id) => {
  const deleted = await dao.deleteById(id);
  if (!deleted) throw { status: 404, message: 'Movie not found' };
  return deleted;
};

module.exports = { listMovies, getMovie, createMovie, updateMovie, deleteMovie };