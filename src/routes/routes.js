// IMPORTAR MODULOS
const express = require('express');
const { render } = require('express/lib/response');

// OBJETO ROUTER PARA GUARDAR LAS RUTAS
const router = express.Router();

// INICIO APP
router.get('/', (req, res) => {
  res.render('start');
});

// NAME VIEW
router.get('/name', (req, res) => {
  res.render('name');
});

module.exports = router;
