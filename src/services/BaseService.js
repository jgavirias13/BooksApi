class BaseService{

  constructor({RequiredFieldException, NotFoundException}, repository){
    this.repository = repository;
    this.RequiredFieldException = RequiredFieldException;
    this.NotFoundException = NotFoundException;
  }

  async get(id){
    if(!id){
      throw this.RequiredFieldException('id');
    }

    const currentEntity = await this.repository.get(id);

    if(!currentEntity){
      throw this.NotFoundException(id);
    }

    return currentEntity;
  }

  async getAll(){
    return await this.repository.getAll();
  }

  async create(entity){
    return await this.repository.create(entity);
  }

  async update(id, entity){
    if(!id){
      throw this.RequiredFieldException('id');
    }

    return await this.repository.update(id, entity);
  }

  async delete(id){
    if(!id){
      throw this.RequiredFieldException('id');
    }

    return await this.repository.delete(id);
  }
}

module.exports = BaseService;