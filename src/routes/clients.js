const {Router} = require('express');
const {getAll, create, update, remove} = require('../controllers/clients.controllers');
const route = Router();

//Endpoints

route.get("/clientes", getAll); //READ
route.post("/clientes", create); //CREATE
route.put("/clientes/:id", update); //UPDATE
route.delete("/clientes", remove); //DELETE

module.exports = route;