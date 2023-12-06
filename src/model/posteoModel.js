const { Schema, model } = require('mongoose');

const PosteoSchema = new Schema({
    titulo: String,
    narrar: String,
    autor: String,
});

const PostModel = model('posteos', PosteoSchema);

module.exports = PostModel;