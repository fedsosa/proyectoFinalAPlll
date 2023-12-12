const comentarioModel = require('../model/comentarioModel');

const comentarioController = {}

// crear comentario
comentarioController.crearComentario = async (req, res) => {

    try {
        const {comentar, autor } = req.body;

        const nuevocomentario = new comentarioModel({
            
          
            comentar: comentar,
            autor :autor
        });

        await nuevocomentario.save();
        
        return res.json({ mensaje: 'comentario creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el usuario',
            error: error
        });
    }
}


// Editar comentario
comentarioController.editarComentario= async (req, res) => {
    
    try {
        const { id, comentar, autor } = req.body;

         await comentarioModel.findByIdAndUpdate(
            id,
            { comentar:comentar, autor:autor } 
        );
      
            return res.json({ mensaje: 'comentario editado correctamente.' });
       
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Eliminar comentario
comentarioController.eliminarComentario = async (req, res) => {
    try {
       
        const { id } = req.body;

        await comentarioModel.findByIdAndDelete(id);

       
            return res.json({ mensaje: 'comentario eliminado correctamente.' });
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}


// Ver comentario
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
