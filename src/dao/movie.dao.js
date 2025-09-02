// src/dao/movie.dao.js
const Movie = require('../models/movie.model');

const create = async (payload) => {
  const m = new Movie(payload);
  return m.save();
};

const findAll = async () => Movie.find().lean().exec();

const findById = async (id) => Movie.findOne({ id }).lean().exec();

const updateById = async (id, update) =>
  Movie.findOneAndUpdate({ id }, update, { new: true }).lean().exec();

const deleteById = async (id) => Movie.findOneAndDelete({ id }).lean().exec();

module.exports = { create, findAll, findById, updateById, deleteById };
