const loginRouter = require('express').Router();

const {
    crearLogin , 
    verLogin 
} = require('./../controller/loginController.js');

// Crear usuario
loginRouter.post('/crearLogin', crearLogin );
loginRouter.get('/verlog',verLogin );
module.exports = loginRouter;