const mongoose = require("mongoose");
const { Schema } = mongoose;
const PeliculaSchema = new Schema({
        id: Number,
        nombre:String,
        anioDeEstreno: Number,
        directorOdirectores: [String],
        elenco: [String],
        comentarios: [String]
});

PeliculaSchema.methods.agregarComentario = function(comentario) {
        this.comentarios.push({
                comentario
        })
        return this.save()
}

module.exports = mongoose.model("Pelicula",PeliculaSchema);