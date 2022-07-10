const express = require('express');
const res = require('express/lib/response');
const peliculasRouter = express.Router();
const { getPeliculas, getPeliculaPorId, getPeliculasPorNombre, postCrearPelicula, patchCrearComentario, patchActualizarPelicula, deleteBorrarPelicula } = require('./peliculasController');

/* GET users listing. */
peliculasRouter.route('/')
    .get(getPeliculas)
    .post(postCrearPelicula)

//peliculasRouter.route('/?nombre')
//    .get(getPeliculasPorNombre)

peliculasRouter.route('/:id')
    .get(getPeliculaPorId)
    .patch(patchActualizarPelicula)
    .delete(deleteBorrarPelicula)

peliculasRouter.post('/:id/comentarios', patchCrearComentario);

module.exports = peliculasRouter;
//.route documentacion express
