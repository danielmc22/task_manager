const express = require("express");
const { startSession } = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;

require("dotenv").config()
require("./database/db");

const task_routes = require("./routes/RoutesTask")


//middlewares   
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//permisos cors 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use("/api", task_routes); 


app.get('/', (req, res) => {
    res.send ("esta es la pag. de inicio")
})

app.listen(PORT, () => console.log("Servidor corriendo ✅ " + PORT))