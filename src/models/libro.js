const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibroSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    autor: {
        type: String
    },
    imagen: {
        type: String
    },
    categorias: [{
        type: String
    }]
});

mongoose.model('Libro', LibroSchema);

module.exports = mongoose.model('Libro');