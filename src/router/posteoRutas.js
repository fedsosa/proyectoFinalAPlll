const posteoRouter = require('express').Router();


const {
    verPosteos,
    crearPosteo ,
    editarPosteo,
    eliminarPosteo ,
} = require('./../controller/posteosController.js');

// Ver usuarios
posteoRouter.get('/posteos', verPosteos);

// Crear usuario
posteoRouter.post('/crearPost', crearPosteo);

// Editar usuario
posteoRouter.put('/editarPost', editarPosteo);

// Eliminar usuario
posteoRouter.delete('/eliminarPost', eliminarPosteo);


module.exports = posteoRouter;