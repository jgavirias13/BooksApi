const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
    this.User = UserModel;
  }

  async getUserByUsername(username) {
    return await this.User.findOne({ username: username });
  }
}

module.exports = UserRepository;
