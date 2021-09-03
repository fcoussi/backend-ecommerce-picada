import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const bodyparser = require('body-parser');

const app = express();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

/*
    Requeriendo las consultas HTTP Tabla Ventas
*/
var consultaRouter = require('../app/routes/consultas');

//Definicion de ruta base
app.use('/api/consultas', consultaRouter)


//Settings
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, '../app/vista')));
app.set('puerto', process.env.PORT || 3000);




module.exports = app;