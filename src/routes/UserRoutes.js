const express = require('express');

module.exports = ({UserController, AuthMiddleware}) => {
  const router = express.Router();
  router.get('/:userId', AuthMiddleware, UserController.get);
  router.get('/', AuthMiddleware, UserController.getAll);
  router.patch('/:userId', AuthMiddleware, UserController.update);
  router.delete('/:userId', AuthMiddleware, UserController.delete);

  return router;
}