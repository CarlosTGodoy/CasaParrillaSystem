// IMPORTAR MODULOS
const express = require('express');
const { render } = require('express/lib/response');

// OBJETO ROUTER PARA GUARDAR LAS RUTAS
const router = express.Router();

// START VIEW
router.get('/', (req, res) => {
  res.render('start');
});

// NAME VIEW
router.get('/name', (req, res) => {
  res.render('name');
});

// PRINCIPAL MENU VIEW
router.get('/principal_menu', (req, res) => {
  res.render('principal_menu');
});

module.exports = router;
