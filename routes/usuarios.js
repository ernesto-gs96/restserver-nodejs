const {Router} = require('express');
const { usuariosget, usuariosput, usuariospost, usuariosdelete } = require('../controllers/usuarios');

const router = Router();

router.get('/:id', usuariosget);

router.put('/:id', usuariosput);

router.post('/:id', usuariospost);

router.delete('/:id', usuariosdelete);

module.exports = router;