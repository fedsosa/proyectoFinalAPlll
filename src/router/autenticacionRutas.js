const autenticacionRouter = require('express').Router();
const {
    autenticar,
    verificarToken,
  } = require('./../controller/autenticacioncontroller');

autenticacionRouter.post('/autenticar', autenticar);

autenticacionRouter.post('/verificarToken', verificarToken);

module.exports = autenticacionRouter;