const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/movie.controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: UUID generated for the movie
 *           example: "f1b2c3d4-5678-90ab-cdef-1234567890ab"
 *         title:
 *           type: string
 *           example: "Inception"
 *         director:
 *           type: string
 *           example: "Christopher Nolan"
 *         releaseYear:
 *           type: integer
 *           example: 2010
 *         genre:
 *           type: string
 *           example: "Sci-Fi"
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 10
 *           example: 9
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-01T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-01T12:34:56.789Z"
 *     MovieInput:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           example: "Inception"
 *         director:
 *           type: string
 *           example: "Christopher Nolan"
 *         releaseYear:
 *           type: integer
 *           example: 2010
 *         genre:
 *           type: string
 *           example: "Sci-Fi"
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 10
 *           example: 9
 */

/**
 * @openapi
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get('/', ctrl.listMovies);

/**
 * @openapi
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique movie ID (UUID)
 *     responses:
 *       200:
 *         description: Movie details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie not found
 */
router.get('/:id', ctrl.getMovie);

/**
 * @openapi
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       201:
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Invalid input
 */
router.post('/', ctrl.createMovie);

/**
 * @openapi
 * /movies/{id}:
 *   put:
 *     summary: Update an existing movie
 *     tags: [Movies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie ID (UUID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie not found
 */
router.put('/:id', ctrl.updateMovie);

/**
 * @openapi
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie ID (UUID)
 *     responses:
 *       204:
 *         description: Movie deleted successfully (no content returned)
 *       404:
 *         description: Movie not found
 */
router.delete('/:id', ctrl.deleteMovie);

module.exports = router;
