const BaseRepository = require('./baseRepository');

class LibroRepository extends BaseRepository{
    constructor({ LibroModel }){
        super(LibroModel);
        this.LibroModel = LibroModel;
    }
}

module.exports = LibroRepository;