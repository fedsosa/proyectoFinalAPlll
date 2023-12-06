const { Schema, model } = require('mongoose');

const PosteoSchema = new Schema({
    comentar: String,
    autor: String,
    
});

const comentarioModel = model('comentario', PosteoSchema);

module.exports = comentarioModel;