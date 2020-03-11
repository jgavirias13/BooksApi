const BaseService = require('./BaseService');

class UserService extends BaseService{
  constructor({UserRepository, RequiredFieldException, NotFoundException}){
    super({RequiredFieldException, NotFoundException}, UserRepository);
    this.userRepository = UserRepository;
  }

  async getUserByUsername(username){
    if(!username){
      throw new this.RequiredFieldException('Username');
    }

    return await this.userRepository.getUserByUsername(username);
  }
}

module.exports = UserService;