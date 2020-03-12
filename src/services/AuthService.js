class AuthService{
  constructor({UserService, DuplicatedException, NotFoundException, InvalidPasswordException, JwtHelper}){
    this.UserService = UserService;
    this.DuplicatedException = DuplicatedException;
    this.NotFoundException = NotFoundException;
    this.InvalidPasswordException = InvalidPasswordException;
    this.JwtHelper = JwtHelper;
  }

  async signUp(user){
    const username = user.username;
    const userExist = await this.UserService.getUserByUsername(username);
    if(userExist){
      throw this.DuplicatedException('Username');
    }

    return await this.UserService.create(user);
  }

  async signIn(user){
    const username = user.username;
    const password = user.password;

    const userExist = await this.UserService.getUserByUsername(username);
    if(!userExist){
      throw this.NotFoundException('User');
    }

    const validPassword = userExist.comparePassword(password);

    if(!validPassword){
      throw this.InvalidPasswordException();
    }

    const userToEncode = {
      username: userExist.username,
      id: userExist._id
    };

    const token = this.JwtHelper.generateToken(userToEncode);

    return {token, user: userExist};
  }
}

module.exports = AuthService;