const BaseService = require('./BaseService');

class LibroService extends BaseService{
    constructor({LibroRepository, RequiredFieldException, NotFoundException, UserService}){
        super({RequiredFieldException, NotFoundException}, LibroRepository);
        this.LibroRepository = LibroRepository;
        this.RequiredFieldException = RequiredFieldException;
        this.NotFoundException = NotFoundException;
        this.UserService = UserService;
    }

    async addLibroToFavorites(libroId, userId){
        if(!libroId){
            throw this.RequiredFieldException('libroId');
        }

        if(!userId){
            throw this.RequiredFieldException('userId');
        }

        const libro = await this.LibroRepository.get(libroId);

        return await this.UserService.addLibroToFavorites(libro, userId);
    }

    async searchLibros(query){
        if(query){
            return await this.LibroRepository.findByQuery(query)
        }else{
            return [];
        }
    }

    async get(libroId, userId){
        let libro = await super.get(libroId);
        libro = libro.toObject();
        if(userId){
            libro.isFavorite = await this.UserService.comprobarFavorito(libroId, userId);
            
        }
        return libro;
    }
}

module.exports = LibroService;