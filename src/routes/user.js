const {Router} = require('express');
const app = Router();
const User = require('../models/user');
const bodyParser = require('body-parser');


app.get('/api/user',async (req, res)=>{
    const user = req.body
    
    console.log('aqui consola')
  
  await User.find({}).exec((err, user) => {
      console.log('Entrando a la petición');
      
      if(err) return res.status(500).send({message: 'Error en el servidor'});
      
      if(user) {
          
          return res.status(200).send({
              user
            });
            
            
            
        }else{
            return res.status(404).send({
                message: 'No hay user'
            });
        }
        
});
});




app.get('/api/user/:userId', async(req , res) =>{
    
    let id = req.param.userId
    // let userId =req.body

  await  User.findById(id, (err, user, next)=>{
        if(err)return res.status(500).send ({messenge:'error de solicitud: ${err}'})
        if(!user)return res.status(404).send({messenge:'NO hay usuarios: ${err}'})
        res.status(200).send({user})
        // console.log({userId})
        
    }) 
});

app.post('/api/user/create', (req , res)=>{
    let user = new User()
    user.first_name=req.body.first_name
    user.last_name=req.body.last_name 
    user.email=req.body.email
    user.type=req.body.type 
    user.password=req.body.password
    user.save((err, userStore)=>{
        if(err)return res.status(500).send({messenge:'error al guardar usuarios: ${err}'})
        res.status(200).send({user:userStore})
        console.log({res})
    });
    console.log(req.body)
    res.status(200).send({message:'registrado '})
    
  
});

app.put('/api/user/:userId', (req , res)=>{
    let userId = req.param.userId
    let update =req.body
    User.findByIdAndUpdate(update, (err, userUpdated)=>{
        if(err) return res.status(500).send ({messenge:'error : ${err}'})
        res.status(200).send({user:userUpdated})
        res.status(200).send({messenge:'Modificado: ${err}'})

    })
});

app.delete('/api/user/:userId', (req , res)=>{
    let userId = req.param.userId
    
    User.findByIdAndDelete(userId,(err,user)=>{
        if(err)return res.status(500).send ({messenge:'error : ${err}'})
        
        user.remove( err=>{
            if(err)return res.status(500).send ({messenge:'error : ${err}'})
           res.status(200).send({messenge:'Eliminado: ${err}'})
       })
    })
});


module.exports = app;



