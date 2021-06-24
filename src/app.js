// Requiere Express
const { prototype } = require('events');
const express = require('express'); 

// Require Node Path
const path = require('path') 

// Ejecuta Express
const app = express(); 

// Permite acceder a las carpetas publicas
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

// Servidor
app.listen (process.env.PORT || 3000, function() {
console.log("Corriendo en el puerto 3000");
}); 

// Ruta de Home
app.get('/',(req, res) =>{
    res.sendFile(path.resolve('./views/home.html'));
});

// Ruta de Registro
app.get('/register',(req, res) =>{
    res.sendFile(path.resolve('./views/register.html'));
});

// Ruta de Inicio de Sesión
app.get('/login',(req, res) =>{
    res.sendFile(path.resolve('./views/login.html'));
});