

/*
  Archivo principal donde se da inicio el server
*/

const app = require('./config/server');

app.listen(app.get('puerto'), () => {
  console.log('Servidor escuchando en el puerto ' + app.get('puerto'));
});
















