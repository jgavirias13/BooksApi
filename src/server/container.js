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

//Models
const User = require('../models/user');

//Repositories
const BaseRepository = require('../repositories/baseRepository');

//Services
const BaseService = require('../services/BaseService');
const UserService = require('../services/UserService');

//Config
container.register({
    Config: asValue(config),
    App: asClass(App).singleton(),
    Db: asClass(Db).singleton(),
    Logger: asClass(Logger).singleton()
});

//models
container.register({
    User: asValue(User)
});

//Repositories
container.register({
    BaseRepository: asClass(BaseRepository).singleton()
});

//Errors
container.register({
    NotFoundException: asClass(NotFoundException).singleton(),
    RequiredFieldException: asClass(RequiredFieldException).singleton()
});

//Services
container.register({
    BaseService: asClass(BaseService).singleton(),
    UserService: asClass(UserService).singleton()
});

module.exports = container;