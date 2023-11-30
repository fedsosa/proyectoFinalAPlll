const usuarioRouter = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controller/usuarioController.js');

// Ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

// Ver usuario
usuarioRouter.get('/usuario/:id', verUsuario);

// Crear usuario
usuarioRouter.post('/usuario', crearUsuario);

// Editar usuario
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);


module.exports = usuarioRouter;