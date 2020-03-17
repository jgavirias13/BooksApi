const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(`${__dirname}/../../doc/apiDocumentation.yaml`);

//Middlewares
const cors = require('cors');
require('express-async-errors');

module.exports = ({
  UserRoutes,
  AuthRoutes,
  LibroRoutes,
  Config,
  NotFoundMiddleware,
  ErrorMiddleware
}) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json());
  apiRoutes.use(cors());

  if (Config.ENV == 'develop') {
    const morgan = require('morgan');
    apiRoutes.use(morgan('dev'));
  }

  //Configuracion de rutas
  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/libro', LibroRoutes);
  apiRoutes.use('/auth', AuthRoutes);
  router.use('/api/v1', apiRoutes);
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  //Middlewares
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
