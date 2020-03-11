class NotFoundException extends Error{
    constructor(tipoCampo){
      const message = `${tipoCampo} no fue encontrado`;
      super(message);
      this.status = 404;
    }
  }
  
module.exports = NotFoundException;