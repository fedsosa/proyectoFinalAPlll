const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: String,
    contraseña: String,
    nombre: String,
    apellido: String,
});

const UsuarioModel = model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;