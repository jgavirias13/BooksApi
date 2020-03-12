function RequiredFieldException(){
  return function(campo){
    const error = new Error(`No se ha enviado el campo ${campo} que es obligatorio`);
    error.status = 404;
    return error;
  }
}

module.exports = RequiredFieldException;