CREATE DATABASE comercio;
/*Usando base dato*/
USE comercio;

SHOW TABLES;

CREATE TABLE categoria(
    Nombre VARCHAR(100) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

DESCRIBE  categoria;

INSERT INTO categoria(nombre, id) values ('Churrasco', 12)

SELECT * FROM categoria




CREATE TABLE producto (
  id int(11) NOT NULL AUTO_INCREMENT,
  Nombre varchar(100) NOT NULL,
  Descripcion varchar(255) DEFAULT NULL,
  Precio int(5) NOT NULL,
  Categoria_id int(11) NOT NULL,
  UrlImagen varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_producto_categoria (Categoria_id),
  CONSTRAINT fk_producto_categoria FOREIGN KEY (Categoria_id) REFERENCES categoria (id) ON DELETE CASCADE
  );

INSERT INTO producto VALUES (2,'Italiano','Carne, Palta, Mayo, tomate carne, palta',990,15,'https://instagram.fpmc2-1.fna.fbcdn.net/v/t51.2885-15/e35/91369871_918135578625708_3964730829256479113_n.jpg?_nc_ht=instagram.fpmc2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=v3OAYrIwC4cAX8tHX49&_nc_tp=18&oh=2127914c8dc59c72471ac84f0c8b832d&oe=5FAA1001');

CREATE TABLE venta(
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Fecha date NOT NULL,
  NombreProducto varchar(100) NOT NULL,
  Cantidad int(3) NOT NULL,
  Total int(6) NOT NULL
);