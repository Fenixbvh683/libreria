const { leerJSON, escribirJSON } = require("../data");
const productosx = leerJSON();

const buscar = function(nombre){
    const producto = this.productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
    return producto
  }

  module.exports = buscar;