const BaseService = require('./BaseService');

class UserService extends BaseService{
  constructor({UserRepository, RequiredFieldException, NotFoundException}){
    super({RequiredFieldException, NotFoundException}, UserRepository);
    this.UserRepository = UserRepository;
    this.RequiredFieldException = RequiredFieldException;
    this.NotFoundException = NotFoundException;
  }

  async getUserByUsername(username){
    if(!username){
      throw this.RequiredFieldException(username);
    }

    return await this.UserRepository.getUserByUsername(username);
  }

  async addLibroToFavorites(libro, userId){
    if(!userId){
      throw this.RequiredFieldException('userId');
    }
    
    const user = await this.UserRepository.get(userId);
    
    if(!user){
      throw this.NotFoundException('User');
    }

    user.favoritos.push(libro);

    return await this.UserRepository.update(userId, {favoritos: user.favoritos});
  }

  async removeFromFavorites(libro, userId){
    if(!userId){
      throw this.RequiredFieldException('userId');
    }
    
    const user = await this.UserRepository.get(userId);
    
    if(!user){
      throw this.NotFoundException('User');
    }

    user.favoritos = user.favoritos.filter(book => !book._id.equals(libro._id));

    return await this.UserRepository.update(userId, {favoritos: user.favoritos});
  }

  async comprobarFavorito(libroId, userId){
    const user = await super.get(userId);
    if(!user){
      return false;
    }

    if(user.favoritos.find(libro => libro._id == libroId)){
      return true
    }
    
    return false;
  }
}

module.exports = UserService;