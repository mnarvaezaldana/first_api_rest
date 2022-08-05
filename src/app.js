const express = require('express');
const app = require('./server.js');

//Routers
const clientRoutes = require('./routes/clients')

//Middleware
app.use(express.json());
app.get("/", (req, res) => res.json("Academolo-api.json 1.0.1"))
app.use(clientRoutes)