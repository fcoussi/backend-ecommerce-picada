
/*
Requeriendo la conexión
*/
const mariadb = require('../config/dbConnection');

async function getVentas() {
    try {
        let conn = await mariadb.getConn();

        const rows = await conn.query('SELECT * FROM compra')

        conn.release();

        //Devolviendo al pool
        return rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

async function getProductos() {
    try {
        let conn = await mariadb.getConn();
        
        const rows = await conn.query('SELECT * FROM producto')

        conn.release();

        //Devolviendo al pool
        return rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}


async function putVentas(nombre, id) {

    try {
        let conn = await mariadb.getConn();
        const rows = await conn.query('UPDATE categoria SET nombre= ? WHERE id = ?;', [nombre, id]);
        conn.release();

        //Devolviendo al pool
        return rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

async function postVentas(nombre) {

    try {
        let conn = await mariadb.getConn();
        const rows = await conn.query('INSERT INTO categoria(nombre) VALUES (?);', [nombre]);
        conn.release();

        //Devolviendo al pool
        return rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

async function postProducto(nombre,descripcion,precio,categoria,imagen) {

    try {
        let conn = await mariadb.getConn();
        const rows = await conn.query('INSERT INTO producto(Nombre,Descripcion,Precio,Categoria_id,UrlImagen) VALUES (?,?,?,?,?);', [nombre,descripcion,precio,categoria,imagen]);
        conn.release();

        //Devolviendo al pool
        return rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

async function deleteVentas(id) {

    try {
        let conn = await mariadb.getConn();
        const rows = await conn.query('DELETE FROM categoria WHERE id = ?;', [id]);
        conn.release();

        //Devolviendo al pool
        return rows;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

async function deleteProductos(id) {

    try {
        let conn = await mariadb.getConn();
        const rows = await conn.query('DELETE FROM producto WHERE id = ?;', [id]);
        conn.release();

        //Devolviendo al pool
        return id;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}


module.exports = { getVentas, getProductos,putVentas,deleteVentas,postVentas,postProducto,deleteProductos}