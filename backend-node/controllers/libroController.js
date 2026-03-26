const Libro = require('../models/Libro');

exports.obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).send('Hubo un error al obtener los libros');
    }
};

// 2. Crear un nuevo libro (POST)
exports.crearLibro = async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch (error) {
        res.status(500).send('Hubo un error al crear el libro');
    }
};

exports.actualizarLibro = async (req, res) => {
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(libroActualizado);
    } catch (error) {
        res.status(500).send('Hubo un error al actualizar el libro');
    }
};

exports.eliminarLibro = async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Libro eliminado con éxito' });
    } catch (error) {
        res.status(500).send('Hubo un error al eliminar el libro');
    }
};