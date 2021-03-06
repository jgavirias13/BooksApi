
class UserController{
  constructor({UserService}){
    this.userService = UserService;
  }

  get = async (req, res) => {
    const userId = req.params.userId;
    const user = await this.userService.get(userId);

    return res.send(user);
  }

  getAll = async (req, res) => {
    const users = await this.userService.getAll();

    return res.send(users);
  }

  update = async (req, res) => {
    const body = req.body;
    const userId = req.params.userId;
    const updateUser = await this.userService.update(userId, body);
    
    return res.send(updateUser);
  }

  delete = async (req, res) => {
    const userId = req.params.userId;
    const deletedUser = await this.userService.delete(userId);

    return res.send(deletedUser);
  }
}

module.exports = UserController;