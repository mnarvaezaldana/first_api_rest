const {Router} = require('express');
const {getAll, create, update, remove} = require('../controllers/payment_method_types.controllers');
const route = Router();

//Endpoints

route.get("/paymentMethodTypes", getAll); //READ
route.post("/paymentMethodTypes", create); //CREATE
route.put("/paymentMethodTypes/:id", update); //UPDATE
route.delete("/paymentMethodTypes/:id", remove); //DELETE

module.exports = route;