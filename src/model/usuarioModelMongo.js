const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombres: String,
    apellidos: String,
    
});

const UsuarioModel = model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;