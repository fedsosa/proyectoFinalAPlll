const mongoose = require('mongoose');

const MONGO_DB_URI = "mongodb+srv://proyectoFinal:fede123@cluster0.ykeqi5m.mongodb.net/?retryWrites=true&w=majority";
const conectarMongo = async () => {
    try {
        console.log('Conectando...');
        await mongoose.connect(MONGO_DB_URI);
        console.log('Éxito al conectar')
    } catch (error) {
        console.log('Error al conectar: ', error);
    }
}

module.exports = conectarMongo;