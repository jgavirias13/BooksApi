const BaseService = require('./BaseService');

class LibroService extends BaseService{
    constructor({LibroRepository, RequiredFieldException, NotFoundException}){
        super({RequiredFieldException, NotFoundException}, LibroRepository);
    }
}

module.exports = LibroService;