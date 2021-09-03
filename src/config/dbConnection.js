
const mariadb = require('mariadb');

/*Haciendo uso libreria dotenv para hacer uso de las variables 
en archivo .env
*/
require('dotenv').config()

/*Realizando uso ECMAScript 2017 */
/*pool en mariadb es para gestionar el número de conexiones en la bd
  el limite se especifica dentro de la instancia origen de datos
*/

var pool =
  mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectionLimit: 50,
    multipleStatements: true
  });

async function getConn() {
  let conn = await pool.getConnection();
  return conn;
}



module.exports.getConn = getConn;

