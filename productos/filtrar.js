const { leerJSON, escribirJSON } = require("../data");
const productosx = leerJSON();

const filtrar = function(categoria){
    const productosFiltrados = productosx.filter(producto => producto.categoria === categoria.toLowerCase());
    return productosFiltrados
  }
  module.exports = filtrar;