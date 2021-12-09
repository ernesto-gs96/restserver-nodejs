const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

const usuariosget = (req, res = response) =>{

    const {nombre} = req.query;
    const id = req.params.id;

    res.json({
        msg: 'get API - Controlador',
        id,
        nombre
    })
}

const usuariosput = (req, res = response) =>{

    const id = req.params.id; 

    res.json({
        msg: 'put API - Controlador',
        id
    })
}

const usuariospost = async (req, res = response) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const {nombre, correo, password, img, rol, estado, google} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Verificar si el correo existe
    // const existeEmail = await usuario.findOne({correo});
    // if(existeEmail){
    //     return res.status(400).json({
    //         msg: 'Correo ya registrado'
    //     })
    // }

    // Encriptar password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();

    res.json({
        msg: 'post API - Controlador',
        usuario
    })
}

const usuariosdelete = (req, res = response) =>{

    res.json({
        msg: 'delete API - Controlador',
    })
}

module.exports = {
    usuariosget,
    usuariosput,
    usuariospost,
    usuariosdelete
}