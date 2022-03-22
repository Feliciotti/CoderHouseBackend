//Express
const express = require('express');
const app = express();

// Datos Servidor Express
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));

// Constante productos que respeta el nombre con el que fue exportada, de tener otro nombre no funciona
const productos = require('./ej.js');

//Objecto creado en base a la class constructor productos que importamos
const lista = new productos([{"title": "producto2","price": 500,"id": 1},{"title": "producto3","price": 600,"id": 2},{"title": "producto4","price": 1000,"id": 3}]);

// Metodos Express
app.get('/products', (req, res) => {
    res.send(lista.getAll())
});

app.get('/random', (req, res) =>{
    res.send(lista.getRandom())
});

console.log(lista.getAll());
console.log(lista.getRandom());


// ref exports
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

// DATAZO LEER
// https://nkaushik.com/javascript/javascript-syntaxerror-unexpected-token-json/

// Tip: no meter 20 cambios en un saque al debuggear, sacar 1-2 cosas, probar e ir tanteando como se comportar el código y continuar