const { ObjectId } = require("mongodb");
const Pelicula = require("../models/Pelicula");
// npx create-react-app nombre --use-npm
module.exports.getPeliculas = async(req, res, next) => {
    Pelicula.find()
   .then(peliculas => {
    return res.status(200).json({
        code: 10,
        message: pelicula
    })
    })
    .catch(() => {
        res.status(500).send("Error del servidor")
    })
};

module.exports.getPeliculasPorNombre = async(req, res, next) => {
    const pelicula = req.query.nombre;

    Pelicula.find({nombre: pelicula})
    .then((pelicula) => {
        res.status(200).json(pelicula)
    })
    .catch(() => {
        res.status(500).send("Error del servidor")
    })
};
 
module.exports.getPeliculaPorId = async(req, res, next) => {
    const pelicula = req.params.id

    Pelicula.findOne({id: pelicula})
    .then((pelicula) => {
        res.status(200).json(pelicula)
    })
    .catch(() => {
        res.status(500).send("Error del servidor")
    })
};
  
module.exports.postCrearPelicula = async(req, res, next) => {
    const { id, nombre, anioDeEstreno, directorOdirectores, elenco, comentarios } = req.body;

    const pelicula = new Pelicula({
        id,
        nombre,
        anioDeEstreno,
        directorOdirectores,
        elenco,
        comentarios
    });

    pelicula.save()
    .then(() => {
        res.status(201).json(pelicula)
    })
    .catch(() => {
        res.status(500).send("No se pudo crear la pelicula")
    })
};
  
module.exports.patchActualizarPelicula = async(req, res) => {
    const { id, nombre, anioDeEstreno, directorOdirectores, elenco, comentarios } = req.body;

    Pelicula.updateOne(req.body)
    .then(() => {
        res.status(200).json(req.body)
    })
    .catch(() => {
        res.status(500).send("La pelicula no se pudo actualizar")
    })
};
  
module.exports.deleteBorrarPelicula = async(req, res) => {
    Pelicula.deleteOne({id: req.params.id})
    .then(() => {
        res.status(200).send("La pelicula ha sido eliminada")
    })
    .catch(() => {
        res.status(500).send("La pelicula no se pudo eliminar")
    })
};
  
module.exports.patchCrearComentario = async(req, res, next) => {
    const pelicula = await Pelicula.buscarPorId(req.id);
    pelicula.updateOne(pelicula,{$addToSet:{comentarios}})
    .then(() => {
        res.status(200).send("La pelicula se ha actualizado")
    })
    .catch(() => {
        res.status(500).send("La pelicula no se pudo actualizar")
    })
};
