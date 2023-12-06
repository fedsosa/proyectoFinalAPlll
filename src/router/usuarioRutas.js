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
usuarioRouter.post('/ingresar', crearUsuario);

// Editar usuario
usuarioRouter.put('/editar', editarUsuario);

// Eliminar usuario
usuarioRouter.delete('/eliminar', eliminarUsuario);


module.exports = usuarioRouter;