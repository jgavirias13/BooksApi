const express = require('express');

module.exports = ({LibroController, AuthMiddleware}) => {
  const router = express.Router();
  router.get('/:userId', AuthMiddleware, LibroController.get);
  router.get('/', AuthMiddleware, LibroController.getAll);
  router.post('/', AuthMiddleware, LibroController.create);
  router.patch('/:userId', AuthMiddleware, LibroController.update);
  router.delete('/:userId', AuthMiddleware, LibroController.delete);

  return router;
}