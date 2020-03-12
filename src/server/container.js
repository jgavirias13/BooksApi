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

//Helpers
const JwtHelper = require('../helpers/jwtHelper');

//Models
const User = require('../models/user');

//Repositories
const BaseRepository = require('../repositories/baseRepository');
const UserRepository = require('../repositories/userRepository');

//Services
const BaseService = require('../services/BaseService');
const UserService = require('../services/UserService');

//Controladores
const UserController = require('../controllers/userController');

//Middlewares
const ErrorMiddleware = require('../middlewares/errorMiddleware');
const NotFoundMiddleware = require('../middlewares/notFoundMiddleware');

//Routes
const IndexRoute = require('../routes/index');
const UserRoutes = require('../routes/UserRoutes');

//Config
container.register({
    Config: asValue(config),
    App: asClass(App).singleton(),
    Db: asClass(Db).singleton(),
    Logger: asClass(Logger).singleton()
});

//models
container.register({
    UserModel: asValue(User)
});

//Repositories
container.register({
    //BaseRepository: asClass(BaseRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton()
});

//Errors
container.register({
    NotFoundException: asFunction(NotFoundException).singleton(),
    RequiredFieldException: asFunction(RequiredFieldException).singleton(),
    DuplicatedException: asFunction(DuplicatedException).singleton(),
    InvalidPasswordException: asFunction(InvalidPasswordException).singleton()
});

//Services
container.register({
    BaseService: asClass(BaseService).singleton(),
    UserService: asClass(UserService).singleton()
});

//Controladores
container.register({
    UserController: asClass(UserController).singleton()
});

//Middlewares
container.register({
    ErrorMiddleware: asFunction(ErrorMiddleware).singleton(),
    NotFoundMiddleware: asFunction(NotFoundMiddleware).singleton()
});

//Routes
container.register({
    IndexRoute: asFunction(IndexRoute).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
});

//Helpers
container.register({
    JwtHelper: asFunction(JwtHelper).singleton()
});

module.exports = container;