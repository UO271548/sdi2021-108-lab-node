module.exports = function(app, swig, gestorBD) {

    app.post("/cancion/comentarios/:cancion_id", function (req,res){

        let comentario = {
            texto : req.body.texto,
            autor : req.session.usuario,
            cancion_id : gestorBD.mongo.ObjectID(req.params.cancion_id)
        }

        // Conectarse
        gestorBD.insertarComentario(comentario, function(id){
            if (id == null) {
                res.send("Error al insertar comentario");
            } else {
                res.send('Comentario Insertado ' + id);
            }
        });

    });

}