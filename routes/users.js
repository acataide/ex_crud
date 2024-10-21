var express = require('express');
var router = express.Router();

var Usuarios = require('../models/usuarios');

router.get('/detalhe/:id', async function(req, res, next){
  var user = await Usuarios.findOne({_id:req.params.id}).exec();
  res.render('usuarios_detalhe', {user: user});
});

router.post('/editar', async function(req, res, next){
  res.send(req.body.name);
});

/* GET users listing. */
router.get('/:page', async function(req, res, next) {
  var page = parseInt(req.params.page);
  var usuarios = await Usuarios.find().skip(10 * page).limit(10).exec();
  res.render('usuarios', { title: 'Usuários', 
                           usuarios: usuarios,
                           page: page });
});

module.exports = router;
