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

        if (usuarioEncontrado){
            return res.json(usuarioEncontrado)
        } else{  
            return res.status(500).json({
            mensaje: 'no se encontro el usuario a editar',
           
        })
    }
           
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
        const { usuario, contraseña, nombre, apellido } = req.body;

        const nuevoUsuario = new UsuarioModel({
            
            usuario: usuario,
            contraseña: contraseña,
            nombre: nombre,
            apellido: apellido,
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
        const { id, usuario, contraseña, nombre, apellido } = req.body;

        if(!id || !usuario || !contraseña || !nombre || !apellido ) {
            return res.status(500).json({
                mensaje: 'Ocurrió un error de campos',
              
            });
        }

         await UsuarioModel.findByIdAndUpdate(
            id,
            {usuario:usuario, contraseña:contraseña , nombre:nombre, apellido:apellido} 
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
