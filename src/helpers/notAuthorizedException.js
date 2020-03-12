function NotAuthorizedException(){
    return function(id){
      const error = new Error(`Error, no autorizado`);
      error.status = 401;
      return error;
    }
  }
  
  module.exports = NotAuthorizedException;