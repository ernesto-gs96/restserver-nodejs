const {response, request} = require('express');

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

const usuariospost = (req, res = response) =>{

    const id = req.params.id;
    const body = req.body;

    res.json({
        msg: 'post API - Controlador',
        id,
        body
    })
}

const usuariosdelete = (req, res = response) =>{

    const id = req.params.id;
    
    res.json({
        msg: 'delete API - Controlador',
        id
    })
}

module.exports = {
    usuariosget,
    usuariosput,
    usuariospost,
    usuariosdelete
}