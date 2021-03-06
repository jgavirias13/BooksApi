// File para manejar inyeccion de dependencias
const awilix = require('awilix');
const {asClass, asValue, asFunction} = awilix;

const container = awilix.createContainer();

const App = require('./server');
const config = require('../config/config');
const Db = require('./db');
const Logger = require('../util/logger');

//Errors
const NotFoundException = require('../helpers/NotFoundException');
const RequiredFieldException = require('../helpers/RequiredFieldException');
const DuplicatedException = require('../helpers/DuplicatedException')
const InvalidPasswordException = require('../helpers/InvalidPasswordException');
const NotAuthorizedException = require('../helpers/notAuthorizedException');

//Helpers
const JwtHelper = require('../helpers/jwtHelper');

//Models
const User = require('../models/user');
const Libro = require('../models/libro');

//Repositories
const BaseRepository = require('../repositories/baseRepository');
const UserRepository = require('../repositories/userRepository');
const LibroRepository = require('../repositories/libroRepository');

//Services
const BaseService = require('../services/BaseService');
const UserService = require('../services/UserService');
const AuthService = require('../services/AuthService');
const LibroService = require('../services/LibroService')

//Controladores
const UserController = require('../controllers/userController');
const AuthController = require('../controllers/authController');
const LibroController = require('../controllers/libroController');

//Middlewares
const ErrorMiddleware = require('../middlewares/errorMiddleware');
const NotFoundMiddleware = require('../middlewares/notFoundMiddleware');
const AuthMiddleware = require('../middlewares/authMiddleware');
const TokenMiddleware = require('../middlewares/tokenMiddleware');

//Routes
const IndexRoute = require('../routes/index');
const UserRoutes = require('../routes/UserRoutes');
const AuthRoutes = require('../routes/AuthRoutes');
const LibroRoutes = require('../routes/LibroRoutes');

//Config
container.register({
    Config: asValue(config),
    App: asClass(App).singleton(),
    Db: asClass(Db).singleton(),
    Logger: asClass(Logger).singleton()
});

//models
container.register({
    UserModel: asValue(User),
    LibroModel: asValue(Libro)
});

//Repositories
container.register({
    BaseRepository: asClass(BaseRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
    LibroRepository: asClass(LibroRepository).singleton()
});

//Errors
container.register({
    NotFoundException: asFunction(NotFoundException).singleton(),
    RequiredFieldException: asFunction(RequiredFieldException).singleton(),
    DuplicatedException: asFunction(DuplicatedException).singleton(),
    InvalidPasswordException: asFunction(InvalidPasswordException).singleton(),
    NotAuthorizedException: asFunction(NotAuthorizedException).singleton()
});

//Services
container.register({
    BaseService: asClass(BaseService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    LibroService: asClass(LibroService).singleton()
});

//Controladores
container.register({
    UserController: asClass(UserController).singleton(),
    AuthController: asClass(AuthController).singleton(),
    LibroController: asClass(LibroController).singleton()
});

//Middlewares
container.register({
    ErrorMiddleware: asFunction(ErrorMiddleware).singleton(),
    NotFoundMiddleware: asFunction(NotFoundMiddleware).singleton(),
    AuthMiddleware: asFunction(AuthMiddleware).singleton(),
    TokenMiddleware: asFunction(TokenMiddleware).singleton()
});

//Routes
container.register({
    IndexRoute: asFunction(IndexRoute).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    LibroRoutes: asFunction(LibroRoutes).singleton()
});

//Helpers
container.register({
    JwtHelper: asFunction(JwtHelper).singleton()
});

module.exports = container;