const comentarioModel = require('../model/comentarioModel');

const comentarioController = {}

// crear posteo
comentarioController.crearComentario = async (req, res) => {

    try {
        const {comentar, autor } = req.body;

        const nuevocomentario = new comentarioModel({
            
          
            comentar: comentar,
            autor :autor
        });

        await nuevocomentario.save();
        
        return res.json({ mensaje: 'Posteo creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el usuario',
            error: error
        });
    }
}


// Editar posteo
comentarioController.editarComentario= async (req, res) => {
    
    try {
        const { id, comentar, autor } = req.body;

         await comentarioModel.findByIdAndUpdate(
            id,
            { comentar:comentar, autor:autor } 
        );
      
            return res.json({ mensaje: 'Posteo editado correctamente.' });
       
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Eliminar usuario
comentarioController.eliminarComentario = async (req, res) => {
    try {
       
        const { id } = req.body;

        await comentarioModel.findByIdAndDelete(id);

       
            return res.json({ mensaje: 'posteo eliminado correctamente.' });
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}


// Ver Posteos
comentarioController.verComentario = async (req, res) => {
    try {
        const listaComentario = await comentarioModel.find();
    
        return res.json(listaComentario);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}



module.exports = comentarioController;
