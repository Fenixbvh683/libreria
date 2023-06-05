const { leerJSON, escribirJSON } = require("../data");
const productosx = leerJSON();
const editar = function(id){

    const productoAModificar = productosx.find(producto => producto.id === id);

    if(!productoAModificar){
      return `Mmmmm, 404 NOT FOUND`
    }

    const {nombre, marca} = productoAModificar;
    const productosModificados =  productosx.map(producto => {
      
      if(producto.id === id){
        producto.stock = !producto.stock
      }
      
      return producto
    })

    escribirJSON(productosModificados);

    return `El producto "${nombre} | ${marca}" se modificó satisfactoriamente`
  }
  module.exports = editar;