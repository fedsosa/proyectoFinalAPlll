const autenticacionRouter = require('express').Router();
const {
    autenticar,
    registrar,
    verificarToken,
} = require('./../controllers/autenticacioncontroller.js');

autenticacionRouter.post('/autenticar', autenticar);

autenticacionRouter.post('/verificarToken', verificarToken);

module.exports = autenticacionRouter;