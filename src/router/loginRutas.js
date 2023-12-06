const loginRouter = require('express').Router();

const {
    crearLogin ,   
} = require('./../controller/loginController.js');

// Crear usuario
loginRouter.post('/crearPost', crearLogin );

module.exports = loginRouter;