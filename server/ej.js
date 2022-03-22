// Clase productos a ser exportada

class productos {
    constructor(productos) {
      this.productos = productos;
    }
  
    getAll() {
        const productosParsed = JSON.parse(JSON.stringify(this.productos));     
        return productosParsed
    }
    
    getRandom() {
        const productosParsed = JSON.parse(JSON.stringify(this.productos));
        // TODO: agregar o definir una funciona que itere por todos los elemntos y devuelva la cantidad
        // y usar esa cantidad con algo tipo math.random para que use un número random
        // Lo intenté y creo que me acercé pero solo lo veía en la consola, parece que a express no le gustaba
    }
  }

// Exportamos el modulo
module.exports = productos