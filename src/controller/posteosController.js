const PostModel = require('./../model/posteoModel.js');
const {verificarToken } = require ('./../utils/token.js')

const PosteoController = {}

// crear posteo
PosteoController.crearPosteo = async (req, res) => {
           
    try {
        const {titulo, narrar} = req.body;

        const {token} = req . headers 
       

        const tokenValido = verificarToken (token);

        if (!tokenValido) {
            return res.status(500).json({
                mensaje: 'Ocurrió un error interno al intentar crear el posteo',
                error: error
            });

        }
        
         const autor = tokenValido.id;

        const nuevoPosteo = new PostModel({
            
            titulo: titulo,
            narrar: narrar,
            autor : autor
        });

        await nuevoPosteo.save();
        
        return res.json({ mensaje: 'Posteo creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el posteo',
            error: error
        });
    }
}


// Editar posteo
PosteoController.editarPosteo = async (req, res) => {
    
    try {
        const { id, titulo, narrar,autor } = req.body;

         await PostModel.findByIdAndUpdate(
            // validar el autor
            id,
            {titulo:titulo, narrar:narrar,  } 
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
PosteoController.eliminarPosteo = async (req, res) => {
    try {
       
        const { id } = req.body;

        await PostModel.findByIdAndDelete(id);

       
            return res.json({ mensaje: 'posteo eliminado correctamente.' });
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}


// Ver Posteos
PosteoController.verPosteos = async (req, res) => {
    try {
        const listaPosteos = await PostModel.find().populate('autor') 
    
        return res.json(listaPosteos);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}



module.exports = PosteoController;
