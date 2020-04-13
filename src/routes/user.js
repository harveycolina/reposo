const {Router} = require('express');
const api = Router();
const ControladorUser = require('../controller/user');

const home = '/user/';
const user = '/user/:id';
const create = '/user/create';
const userId = '/user/:id';
const delet = '/user/:id';

api.get(home, ControladorUser.home);

api.get(user, ControladorUser.userId);

api.post(create, ControladorUser.create);

api.put(userId, ControladorUser.userIdupdate);

api.delete(delet,ControladorUser.userIdDelete);


module.exports = api;



