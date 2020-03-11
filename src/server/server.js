const express = require('express');

class Server{
    constructor({Config}){
        this.config = Config;
        this.app = express();
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