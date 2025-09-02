// src/controllers/movie.controller.js
const service = require('../services/movie.service');
const { validateCreate, validateUpdate } = require('../validators/movie.validator');

const listMovies = async (req, res, next) => {
  try {
    const movies = await service.listMovies();
    res.json(movies);
  } catch (err) { next(err); }
};

const getMovie = async (req, res, next) => {
  try {
    const movie = await service.getMovie(req.params.id);
    res.json(movie);
  } catch (err) { next(err); }
};

const createMovie = async (req, res, next) => {
  try {
    const v = validateCreate(req.body);
    if (!v.valid) return res.status(400).json({ error: v.message });

    const movie = await service.createMovie(req.body);
    res.status(201).json(movie);
  } catch (err) { next(err); }
};

const updateMovie = async (req, res, next) => {
  try {
    const v = validateUpdate(req.body);
    if (!v.valid) return res.status(400).json({ error: v.message });

    const updated = await service.updateMovie(req.params.id, req.body);
    res.json(updated);
  } catch (err) { next(err); }
};

const deleteMovie = async (req, res, next) => {
  try {
    await service.deleteMovie(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};

module.exports = { listMovies, getMovie, createMovie, updateMovie, deleteMovie };
