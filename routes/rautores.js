module.exports = function(app, swig) {

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });

    app.post("/autor", function (req,res){
        var respuesta = "";

        if(typeof(req.body.nombre) == "undefined"){
            respuesta += "Autor agregado: Nombre no enviado en la petición" + "<br>";

        }else{
            respuesta += "Autor agregado: " + req.body.nombre + "<br>";
        }

        if (typeof (req.body.grupo) == undefined){
            respuesta += " Grupo: Grupo no enviado en la petición" + "<br>";
        }else{
            respuesta += " Grupo: " + req.body.grupo + "<br>";
        }

        respuesta += " Rol: " + req.body.rol;
        res.send(respuesta);
    });

    app.get("/autores", function(req, res) {
        let autores = [ {
            "nombre" : "Autor1",
            "grupo" : "Grupo1",
            "rol"   : "Guitarrista"
        }, {
            "nombre" : "Autor2",
            "grupo" : "Grupo2",
            "rol"   : "Cantante"
        }, {
            "nombre" : "Autor3",
            "grupo" : "Grupo3",
            "rol"   : "Teclista"
        }];
        let respuesta = swig.renderFile('views/lista-autores.html', {
            titulo : 'Lista de autores',
            autores : autores
        });

        res.send(respuesta);
    });

    app.get('/autor*', function(req, res) {
        res.redirect('/autores');
    });
};