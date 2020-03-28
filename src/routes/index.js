const express = require('express');
const app = express();
const User = require('../models/user')
const Conjunto = require('../models/conjunto')
const Torre = require('../models/torre')
const Depa = require('../models/depa')
app.get('/', (req , res)=>{
    res.send('pagina inicial ');
});




module.exports = app;
