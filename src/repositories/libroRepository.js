const BaseRepository = require("./baseRepository");

class LibroRepository extends BaseRepository {
  constructor({ LibroModel }) {
    super(LibroModel);
    this.LibroModel = LibroModel;
  }

  async findByQuery(query) {
    let pattern = `.*${query}.*`;
    return await this.LibroModel.find({
      $or: [
        { nombre: { $regex: pattern, $options: "i" } },
        { autor: { $regex: pattern, $options: "i" } },
        { categorias: { $regex: pattern, $options: "i" } }
      ]
    });
  }
}

module.exports = LibroRepository;
