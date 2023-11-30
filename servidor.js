require('dotenv').config();

const express = require('express');
const app = express();

const conectarMongo = require('./src/config/MongooseConfig');


const usuarioRouter = require('./src/router/usuarioRutas');
const port = 3000;

// Rutas
app.use(usuarioRouter);


app.listen(port, () => {
  console.log(`servidor corriendo en puerto ${port}`);
  
  conectarMongo();
})
