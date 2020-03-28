const mongoose = require('mongoose') 
const express = require('express');
const path = require('path'); 
const methodOverride = require('method-override');
const session = require('express-session');
const {MongoClient} = require('mongodb');
const bodyParser = require('body-parser');
const user = require('./models/user');
//Initializations
var app = express();
//db connections
const url = 'mongodb://127.0.0.1:27017/node';
 
//settings 
app.set('port', process.env.PORT || 3001);

//Middlewares 


app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret:'123',
    resave:true,
    saveUninitialized:true,
}));

//Routs
app.use(require('./routes/index'));
app.use(require('./routes/user'));
 //Statics Files

//Server is Listenning

(async ()=> {
    try {
       await mongoose.connect(url, {'useCreateIndex': true, useNewUrlParser: true, useUnifiedTopology: true });
       console.log('Base de datos conectada!');
       
    } catch(e) {
      console.error(e)
    }
  
  })()

    app.listen(app.get('port'), ()=>{
        console.log('Server on port',app.get('port'));
    });

    app.get('/', (req, res)=>{
    res.send('<h2>Servidor en el puerto 3000: activo !!!!</h2>');
    res.end();
    });
module.exports = mongoose;


