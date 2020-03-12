const express = require('express');

class Server{
    constructor({Config, IndexRoute}){
        this.config = Config;
        this.app = express();
        this.app.use(IndexRoute);
    }

    start(callback){
        return new Promise(resolve => {
            this.app.listen(this.config.PORT, () => {
                callback();
            });
        });
    }
}

module.exports = Server;