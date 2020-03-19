const express = require('express');

module.exports = ({LibroController, AuthMiddleware, TokenMiddleware}) => {
  const router = express.Router();
  router.get('/', LibroController.getAll);
  router.post('/', AuthMiddleware, LibroController.create);
  router.get('/:libroId', TokenMiddleware, LibroController.get);
  router.patch('/:libroId', AuthMiddleware, LibroController.update);
  router.delete('/:libroId', AuthMiddleware, LibroController.delete);
  router.post('/addfavorite/:libroId', AuthMiddleware, LibroController.addToFavorites);
  router.post('/rmfavorite/:libroId', AuthMiddleware, LibroController.removeFromFavorites);

  return router;
}