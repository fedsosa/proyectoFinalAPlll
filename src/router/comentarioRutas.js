const comentarioRouter = require('express').Router();


const {
    verComentario,
    crearComentario,
    editarComentario,
    eliminarComentario,
} = require('./../controller/comentarioController.js');

// Ver usuarios
comentarioRouter .get('/coment', verComentario);

// Crear usuario
comentarioRouter .post('/crearComent', crearComentario);

// Editar usuario
comentarioRouter .put('/editarComent', editarComentario);

// Eliminar usuario
comentarioRouter .delete('/eliminarComent', eliminarComentario);


module.exports = comentarioRouter ;