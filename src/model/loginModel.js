const { Schema, model } = require('mongoose');

const loginSchema = new Schema({
    usuario: String,
    contraseña: String,
    
});

const LoginModel = model('posteos', loginSchema);

module.exports = LoginModel;