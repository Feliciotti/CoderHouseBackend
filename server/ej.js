// Clase contenedor a ser importada

class Contenedor {
    constructor(products){
        this.products = products
    };

    getAll() {
        return this.products
    };

};

//Ejemplo

class User {
    constructor(name, age, datos) {
      this.name = name;
      this.age = age;
      this.datos = datos;
    }
  
    getUserStats() {
        const DatosParsed = JSON.parse(JSON.stringify(this.datos));
        
        return DatosParsed
//         const productsParsed = JSON.parse(products);        
//         const productById = productsParsed.find(function (product) {

//             fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))

    }
  }
  
console.log("Hola Modd")

const mytest = "variable de prueba"

// Exportamos el modulo
module.exports = Contenedor
module.exports = User