const UsuariosController = {}

const lista_usuarios = [
    { nombre: 'Juan' },
    { nombre: 'Carlos' }
];

// Ver usuarios
UsuariosController.verUsuarios = (req, res) => {
    return res.json(lista_usuarios);
}

// Ver usuario
UsuariosController.verUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: ver usuario' });
}

// Crear usuario
UsuariosController.crearUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: crear usuario' });
}

// Editar usuario
UsuariosController.editarUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: editar usuario' });
}

// Eliminar usuario
UsuariosController.eliminarUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: eliminar usuario' });
}

module.exports = UsuariosController;
