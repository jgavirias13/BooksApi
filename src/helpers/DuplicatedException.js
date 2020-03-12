function DuplicatedException(){
    return function(campo){
      const error = new Error(`Error, ${campo} ya existe`);
      error.status = 401;
      return error;
    }
}

module.exports = DuplicatedException;