var mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "boolean": Boolean,
    "numberrange": Number 
  })

module.exports = mongoose.model('usuarios', usuarioSchema);