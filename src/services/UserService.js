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
}

module.exports = UserService;