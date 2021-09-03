
var express = require('express');
var consultaDb = require('../../config/consultas')
var router = express.Router();

/*
RUTAS 
*/
router.get('/consultar', async function (req, res, next) {
  var ventas = await consultaDb.getVentas();
 // res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(ventas));
})

router.get('/consultarProducto', async function (req, res, next) {
  var ventas = await consultaDb.getProductos();
 // res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(ventas));
})


router.post('/modificar', async function (req, res, next) {
  var nombre = req.body.nombre;
  var id = req.body.id;
  var modelos = await consultaDb.putVentas(nombre, id);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(modelos));
})

router.post('/eliminar', async function (req, res, next) {
  var id = req.body.id;
  var modelos = await consultaDb.deleteVentas(id);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(modelos));
})

router.post('/agregar', async function (req, res, next) {
  var nombre = req.body.nombre;
  var modelos = await consultaDb.postVentas(nombre);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(modelos));
})

router.post('/agregarProducto', async function (req, res, next) {
  
  var nombre = req.body.nombre;
  var descripcion = req.body.descripcion;
  var precio = req.body.precio;
  var categoria = req.body.categoria;
  var imagen = req.body.imagen;
  var modelos = await consultaDb.postProducto(nombre,descripcion,precio,categoria,imagen);

res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(modelos));
})

router.post('/eliminarProducto/:id', async function (req, res, next) {
  var id = req.params.id;
  var modelos = await consultaDb.deleteProductos(id);

  res.json(modelos)
})

module.exports = router;
