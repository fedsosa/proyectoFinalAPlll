const express = require('express');
const app = express();



const usuarioRouter = require('./src/router/usuarioRutas');
const port = 3000;

// Rutas
app.use(usuarioRouter);


app.listen(port, () => {
  console.log(`servidor corriendo en puerto ${port}`)
})