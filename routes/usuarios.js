const {Router} = require('express');
const { check } = require('express-validator');
const { usuariosget, usuariosput, usuariospost, usuariosdelete } = require('../controllers/usuarios');

const router = Router();

router.get('/:id', usuariosget);

router.put('/:id', usuariosput);

router.post('/', [
    check('correo', 'El correo no es valido').isEmail(), // Recoger el error si un correo no es valido
] ,usuariospost);

router.delete('/', usuariosdelete);

module.exports = router;