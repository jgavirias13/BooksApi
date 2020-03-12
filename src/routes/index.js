const express = require('express');
const morgan = require('morgan');

//Middlewares
const cors = require('cors');
require('express-async-errors');

module.exports = ({
  UserRoutes,
  Config,
  NotFoundMiddleware,
  ErrorMiddleware
}) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json());
  apiRoutes.use(cors());

  if (Config.ENV == 'develop') {
    apiRoutes.use(morgan('combined'));
  }

  //Configuracion de rutas
  apiRoutes.use('/user', UserRoutes);

  router.use('/v1/api', apiRoutes);

  //Middlewares
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
