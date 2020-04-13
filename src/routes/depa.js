const {Router} = require('express');
const api = Router();
const Depa = require('../controller/depa');

const home = '/depa/';
const create = '/depa/create';
const id = '/depa/:id';
const update= '/depa/:id';
const delet= '/depa/:id';

api.get(home, Depa.home)

api.get(id, Depa.depaId)

api.post(create, Depa.create)

api.put(update,Depa.updateDepa)

api.delete(delet,Depa.deleteDepa)

module.exports = api