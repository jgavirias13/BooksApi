function NotFoundException(){
  return function(id){
    const error = new Error(`Error, ${id} no fue encontrado`);
    error.status = 404;
    return error;
  }
}

module.exports = NotFoundException;