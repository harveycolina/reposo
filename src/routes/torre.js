const {Router} = require('express')
const api = Router() 
const ControllerTorre = require('../controller/torre')

const torres = '/torre/';
const torre  = '/torre/:id';
const create = '/torre/create';
const update = '/torre/:id';
const dele   =  '/torre/:id';


api.get(torres, ControllerTorre.home)
api.get(torre, ControllerTorre.torreId)
api.post(create ,ControllerTorre.create)
api.put(update, ControllerTorre.updateId)
api.delete(dele, ControllerTorre.deleteId)


module.exports = api;