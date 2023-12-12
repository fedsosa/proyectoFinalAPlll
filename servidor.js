require('dotenv').config();
const cors = require ('cors');
const bodyParser=require('body-parser');
const express = require('express');
const app = express();

const conectarMongo = require('./src/config/MongooseConfig');


const  comentarioRouter= require('./src/router/comentarioRutas');
const  loginRouter = require('./src/router/loginRutas.js');
const  posteoRouter = require('./src/router/posteoRutas');
const  usuarioRouter = require('./src/router/usuarioRutas');


const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json())
// Rutas

app.use(comentarioRouter);
app.use(posteoRouter);
app.use(usuarioRouter);
app.use(loginRouter);

app.listen(port, () => {
  console.log(`servidor corriendo en puerto ${port}`);
  
  conectarMongo();
})
