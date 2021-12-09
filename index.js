require('dotenv').config();

const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config')

const app = express();

//configurar cors
app.use(cors());

//DATABASE
dbConnection();


// Rutas
app.get('/',(req,res)=>{
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});

app.listen( process.env.PORT, ()=> {
    console.log(' Servidor corriendo en puerto' + process.env.PORT );
})