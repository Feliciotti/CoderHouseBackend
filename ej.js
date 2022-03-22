// Clase productos a ser exportada
const fs = require('fs')

class productos {
    constructor(productos) {
      this.productos = productos;
    }
  
    getAll() {
        const readProducts = fs.readFileSync(this.productos, "utf-8");
        const productosParsed = JSON.parse(readProducts);
        return productosParsed
    }
    
    getRandom() {
      const readProducts = fs.readFileSync(this.productos, "utf-8");
      const productosParsed = JSON.parse(readProducts); 

      //Array con valores id
      const productsIdValues = productosParsed.map(product => product.id)
      
      //valores máximo y mínimo de id
      const idMin = Math.min.apply(Math, productsIdValues)
      const idMax = Math.max.apply(Math, productsIdValues)

      //valor random entre max y min
      const returnRandomId = Math.floor(Math.random() * (idMax - idMin + 1) ) + idMin;

      const randomProduct = productosParsed.find(function (product) {
        return product.id == returnRandomId;
      })
      
      return randomProduct
    
    }
}


// Exportamos el modulo
module.exports = productos