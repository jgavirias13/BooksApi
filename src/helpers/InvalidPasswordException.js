function InvalidPasswordException(){
    return function(){
      const error = new Error(`Password incorrecto`);
      error.status = 401;
      return error;
    }
  }
  
  module.exports = InvalidPasswordException;