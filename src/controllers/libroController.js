
class LibroController{
    constructor({LibroService}){
      this.LibroService = LibroService;
    }
  
    get = async (req, res) => {
      const libroId = req.params.libroId;
      const user = await this.LibroService.get(libroId);
  
      return res.send(user);
    }

    create = async (req, res) => {
        const body = req.body;
        const libro = await this.LibroService.create(body);
        return res.send(libro);
    }
  
    getAll = async (req, res) => {
      const libros = await this.LibroService.getAll();

      return res.send(libros);
    }
  
    update = async (req, res) => {
      const body = req.body;
      const libroId = req.params.libroId;
      const updatedLibro = this.LibroService.update(libroId, body);
      
      return res.send(updatedLibro);
    }
  
    delete = async (req, res) => {
      const libroId = req.params.libroId;
      const deletedLibro = this.LibroService.delete(libroId);
  
      return res.send(deletedLibro);
    }

    addToFavorites = async (req, res) => {
      const libroId = req.params.libroId;
      console.log(req.user);
      const userId = req.user;

      const updatedUser = await this.LibroService.addLibroToFavorites(libroId, userId);

      return res.send(updatedUser);
    }
  }
  
  module.exports = LibroController;