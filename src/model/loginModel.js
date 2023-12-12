const { Schema, model } = require('mongoose');

const loginSchema = new Schema({
    usuario: String,
    contraseña: String,
    
});

const LoginModel = model('login', loginSchema);

module.exports = LoginModel;