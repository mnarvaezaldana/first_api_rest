const clientModel = require('../db/clients');

const getAll = (req, res) => {
    res.json(clientModel)
}

const create = (req, res) => {
    clientModel.push(req.body);
    let clients = clientModel;
    console.log(clients);
    res.json(clients);
}

const update = (req, res) => {
    let clientId = Number(req.params.id);
    console.log(clientId);
    let clientObj = clientModel.find(({id}) => { return clientId === id});
    console.log(clientObj);
    res.json(clientObj);
}

const remove = (req, res) => {
    res.json({message: "se ha eliminado el registro satisfactoriamente."})
}

module.exports = {
    getAll,
    create,
    update,
    remove
}