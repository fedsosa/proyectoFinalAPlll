const LoginModel = require('./../model/loginModel.js');

const LoginController = {}

// crear posteo
LoginController.crearLogin = async (req, res) => {

    try {
        const {usuario, contraseña } = req.body;

        const nuevoLogin = new LoginModel({
            
            usuario: usuario,
            contraseña : contraseña ,
           
        });

        await nuevoLogin .save();
        
        return res.json({ mensaje: 'Posteo creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el usuario',
            error: error
        });
    }
}

module.exports = LoginController;