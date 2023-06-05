const { leerJSON, escribirJSON } = require("../data");
const productosx = leerJSON();
const Producto = function (id, nombre, marca, precio, descuento) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.descuento = descuento;
    this.stock = true;
  };
  
  

const agregar = function(nombre,marca,precio,descuento){
    let productos = productosx;
    let ultimoId = productos[productos.length - 1] ? productos[productos.length - 1].id : 0;
    
    let nuevoProducto = new Producto(ultimoId + 1,nombre,marca,precio,descuento);

    productos.push(nuevoProducto)
    
    escribirJSON(productos)

    return `El producto "${nuevoProducto.nombre} | ${nuevoProducto.marca}"  se registró satisfactoriamente`
  }
