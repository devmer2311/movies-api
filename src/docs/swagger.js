// src/docs/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Movie API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000/api' },// local
      { url: 'https://your-render-app.onrender.com/api' } // deployed 
              ],
    components: {
      schemas: {
        Movie: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            director: { type: 'string' },
            releaseYear: { type: 'integer' },
            genre: { type: 'string' },
            rating: { type: 'number' }
          },
          required: ['title']
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);
