const {Router} = require('express');
const api = Router();
const Conjunto = require('../controller/conjunto');

const conjuntos  = '/conjunto';
const conjunto = '/conjunto/:id';
const torres = '/:id/conjunto';
const create = '/conjunto/create';
const updat ='/conjunto/:id';
const delet= '/conjunto/:id';

api.get(conjuntos, Conjunto.conjunto);

api.get(conjunto, Conjunto.conjuntoid)

api.post(create, Conjunto.create)


api.put(updat, Conjunto.updateId)

api.delete(delet, Conjunto.deleteId);




module.exports = api;
