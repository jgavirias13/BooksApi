class RequiredFieldException extends Error{
    constructor(tipoCampo){
      const message = `El campo ${tipoCampo} es obligatorio`;
      super(message);
      this.status = 400;
    }
  }
  
module.exports = RequiredFieldException;