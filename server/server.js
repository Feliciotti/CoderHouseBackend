//Express
const express = require('express');
const app = express();

// Importar Clase Contenedor
const Contenedor = require('./ej.js');
const p = new Contenedor('sdksdfsd');

// Datos Servidor Express
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));


// objecto
// {producto:'tabla',precio:250} x3

// ejemplo array
// [{"title": "producto2","price": 500,"id": 1},{"title": "producto3","price": 600,"id": 2},{"title": "producto4","price": 1000,"id": 3}]

const User = require('./ej.js');
const jim = new User('Jim', 37, [{"title": "producto2","price": 500,"id": 1},{"title": "producto3","price": 600,"id": 2},{"title": "producto4","price": 1000,"id": 3}]);

console.log(jim.getUserStats());

// Metodos Express
app.get('/products', (req, res) => {
    res.send(jim.getUserStats())
});

app.get('/random', (req, res) =>{
    res.send(jim.getUserStats())
});

// ref exports
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

// DATAZO LEER
// https://nkaushik.com/javascript/javascript-syntaxerror-unexpected-token-json/