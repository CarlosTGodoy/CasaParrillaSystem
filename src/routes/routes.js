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

// ENTRADAS VIEW
router.get('/entradas', (req, res) => {
  res.render('entradas');
});

// TACOS VIEW
router.get('/tacos', (req, res) => {
  res.render('tacos');
});

// EMPANADAS VIEW
router.get('/empanadas', (req, res) => {
  res.render('empanadas');
});

// HAMBURGUESAS VIEW
router.get('/hamburguesas', (req, res) => {
  res.render('hamburguesas');
});

// PEPITOS VIEW
router.get('/pepitos', (req, res) => {
  res.render('pepitos');
});

// CORTES VIEW
router.get('/cortes', (req, res) => {
  res.render('cortes');
});

// PARRILLADAS VIEW
router.get('/parrilladas', (req, res) => {
  res.render('parrilladas');
});

// MARISCOS VIEW
router.get('/mariscos', (req, res) => {
  res.render('mariscos');
});

// BEBIDAS VIEW
router.get('/bebidas', (req, res) => {
  res.render('bebidas');
});

// POSTRES VIEW
router.get('/postres', (req, res) => {
  res.render('postres');
});

// PEDIDO VIEW
router.get('/pedido', (req, res) => {
  res.render('pedido');
});

module.exports = router;
