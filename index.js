
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config')

//crear el servidor de express
const app = express();

//Db
dbConnection();

//cors

app.use(cors());


//directorio publico 
app.use( express.static('public') );

//lectura del body

app.use(express.json());

//rutas 

app.use('/api/auth', require('./routs/auth'));
app.use('/api/events', require('./routs/events'));


//Escuchar peticion 

app.listen(process.env.PORT, ()=>{
    console.log (`Servidor corriendo en el puerto ${process.env.PORT} `);
})


