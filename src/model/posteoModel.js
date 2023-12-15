const { Schema, model } = require('mongoose');

const PosteoSchema = new Schema({
    titulo: String,
    narrar: String,
    autor: {
        type: Schema.Types.ObjectId ,
        ref: 'usuarios'
    }
});

const PostModel = model('posteos', PosteoSchema);

module.exports = PostModel;