const express = require('express');
const app = require('./server.js');
const logger = require('morgan');
const fs = require('fs');

//Routers
const clientRoutes = require('./routes/clients');
const paymentMethodTypesRoutes = require('./routes/payment_method_types');


//Middleware
app.use(express.json());

//app.get("/", (req, res) => res.json("Academolo-api.json 1.0.1"))

//app.use(clientRoutes);
app.use("/api/v1", paymentMethodTypesRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).send('Something broke!')
});
app.use(logger('combined', {stream: fs.createWriteStream('./access.log', {falgs: 'a'})}));

module.exports = app;