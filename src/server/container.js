// File para manejar inyeccion de dependencias
const awilix = require('awilix');
const {asClass, asValue, asFunction} = awilix;

const container = awilix.createContainer();

const App = require('./server');
const config = require('../config/config');
const Db = require('./db');
const Logger = require('../util/logger');

//Config
container.register({
    Config: asValue(config),
    App: asClass(App).singleton(),
    Db: asClass(Db).singleton(),
    Logger: asClass(Logger).singleton()
});

module.exports = container;