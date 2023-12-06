const UsuarioModel = require ('./../model/usuarioModelMongo.js')
const UsuariosController = {}

// Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await UsuarioModel.find();
    
        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver usuario
UsuariosController.verUsuario = async (req, res) => {
    
    try {
        const { id } = req.params;

        const usuarioEncontrado = await UsuarioModel.findById(id);

        
            return res.json(usuarioEncontrado);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Crear usuario
UsuariosController.crearUsuario = async (req, res) => {

    try {
        const { nombres, apellidos } = req.body;

        const nuevoUsuario = new UsuarioModel({
            
            nombres: nombres,
            apellidos: apellidos
           
        });

        await nuevoUsuario.save();
        
        return res.json({ mensaje: 'Usuario creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el usuario',
            error: error
        });
    }
}


// Editar usuario
UsuariosController.editarUsuario = async (req, res) => {
    
    try {
        const { id, nombres, apellidos } = req.body;

         await UsuarioModel.findByIdAndUpdate(
            id,
            {nombres:nombres, apellidos:apellidos } 
        );
      
            return res.json({ mensaje: 'Usuario editado correctamente.' });
       
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Eliminar usuario
UsuariosController.eliminarUsuario = async (req, res) => {
  
    try {
       
        const { id } = req.body;

        await UsuarioModel.findByIdAndDelete(id);

       
            return res.json({ mensaje: 'Usuario eliminado correctamente.' });
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}
module.exports = UsuariosController;
