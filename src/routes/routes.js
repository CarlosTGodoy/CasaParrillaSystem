// IMPORTAR MODULOS
const express = require('express');

// OBJETO ROUTER PARA GUARDAR LAS RUTAS
const router = express.Router();

// INICIO APP
router.get('/', (req, res) => {
  res.render('start');
});

module.exports = router;
