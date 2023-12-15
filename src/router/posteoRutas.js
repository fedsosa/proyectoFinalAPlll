const posteoRouter = require('express').Router();


const {
    verPosteos,
    crearPosteo ,
    editarPosteo,
    eliminarPosteo ,
} = require('./../controller/posteosController.js');

// Ver Posteos
posteoRouter.get('/posteos', verPosteos);

// Crear Posteos
posteoRouter.post('/crearPost', crearPosteo);

// Editar Posteos
posteoRouter.put('/editarPost', editarPosteo);

// Eliminar Posteos
posteoRouter.delete('/eliminarPost', eliminarPosteo);


module.exports = posteoRouter;