const container = require('./src/server/container');
const server = container.resolve('App');
const db = container.resolve('Db');
const config = container.resolve('Config');
const Logger = new container.resolve('Logger');

Logger.writeInfo('Iniciando el servidor...');
db.connect((err) => {
  if(err){
    Logger.writeError('No se ha podido conectar con la base de datos');
    Logger.writeError(err.message);
  }else{
    Logger.writeSuccess(`Conectado a la base de datos ${config.DB_NAME}`)
    server.start(() => {
      Logger.writeSuccess(`${config.APPLICATION_NAME} ejecutandose en el puerto ${config.PORT}`);
    });
  }
});