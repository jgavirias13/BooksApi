const mongoose = require('mongoose');

class Db{
  constructor({Config}){
    this.config = Config;
  }

  connect(callback){
    mongoose.connect(this.config.DB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }, (err) => {callback(err)});
    mongoose.set('useCreateIndex', true);
  }
}

module.exports = Db;