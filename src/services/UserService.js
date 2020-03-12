const BaseService = require('./BaseService');

class UserService extends BaseService{
  constructor({UserRepository, RequiredFieldException, NotFoundException}){
    super({RequiredFieldException, NotFoundException}, UserRepository);
    this.UserRepository = UserRepository;
    this.RequiredFieldException = RequiredFieldException;
  }

  async getUserByUsername(username){
    if(!username){
      throw this.RequiredFieldException(username);
    }

    return await this.UserRepository.getUserByUsername(username);
  }
}

module.exports = UserService;