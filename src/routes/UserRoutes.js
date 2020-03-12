const express = require('express');

module.exports = ({UserController}) => {
  const router = express.Router();
  router.get('/:userId', UserController.get);
  router.get('/', UserController.getAll);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
}