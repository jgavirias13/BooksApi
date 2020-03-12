const express = require('express');

module.exports = ({LibroController, AuthMiddleware}) => {
  const router = express.Router();
  router.get('/', LibroController.getAll);
  router.post('/', AuthMiddleware, LibroController.create);
  router.get('/:libroId', LibroController.get);
  router.patch('/:libroId', AuthMiddleware, LibroController.update);
  router.delete('/:libroId', AuthMiddleware, LibroController.delete);
  router.post('/:libroId', AuthMiddleware, LibroController.addToFavorites);

  return router;
}