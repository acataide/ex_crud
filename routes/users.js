var express = require('express');
var router = express.Router();

var Usuarios = require('../models/usuarios');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var usuarios = await Usuarios.find().exec();
  res.render('usuarios', { title: 'Usuários', usuarios: usuarios });
});

module.exports = router;
