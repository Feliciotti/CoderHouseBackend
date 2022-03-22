const express = require('express');
const Contenedor = require('./ej.js');
const app = express();


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http esuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

app.get('/products', (req, res) => {
    res.send(Contenedor.getAll())
});


app.get('/random', (req, res) =>{
    res.send(Contenedor.getById(3))
});