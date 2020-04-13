'use strict'

const User = require('../models/user');
// const bcrypt = require('bcryptjs'); 
 

 async function home(req, res){
    const user = req.body
    
    // console.log('aqui consola')
  
  await User.find({}).exec((err, user) => {
    //   console.log('Entrando a la petición');
      
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

 }

 async function userId(req ,res){
     
    let id = req.params.id
    
    
  await  User.findById(id, (err, users)=>{
        if(err)
        {
        return res.status(500).send ({messenge:'error de solicitud: ', err})
            
        }else{

            if(!users)return res.status(404).send({messenge:'NO hay usuarios: ', err})
        }
        res.status(200).send({users})
       
        
    }) 
 }

    async function create(req , res){
     
        let params = req.body;
     
           
        let user = new User()
        user.first_name=req.body.first_name
        user.last_name=req.body.last_name 
        user.email=req.body.email
        user.type=req.body.type  
        user.password=req.body.password
     
        await  User.find( {email: params.email}, (err, userDuplicado)=>{
                if(err)return res.status(500).send({messenge:'error '})
                if(userDuplicado && userDuplicado.length > 0)

                return res.status(200).send({message: 'mismo email, vuelva a intentar por favor'})

                 

                user.save((err, res)=>{
                    if(err){

                        return res.status(500).send({message: 'error'}) 
                    }else{

                        return res.status(200).send({message:'ok'}) 
                    } 
                        
    
        
        
                })
            })

                    console.log(user)  
                    
    
 } 
  

 async function userIdupdate(req , res){
    let id = req.params.id
    let update =req.body
    User.findByIdAndUpdate({_id:id},update,{new:true},{upsert: true, useFindAndModify: false}, (err, userUpdated)=>{
        if(err){

            return res.status(500).send ({messenge:'error '})
        }
        if(!userUpdated){
            return res.status(400).send({
                ok: false,
                err: {
                    message: 'Torre no encontrada'
                }
            })
        }
        return res.send({
            ok: true,
            user: userUpdated
        })
        

      
        //  res.status(200).send({user:userUpdated})
        
        //  res.status(200).send({messenge:'Modificado: ${err}'})

    })
 }

  
 async function userIdDelete(req , res){
    let userId = req.params.id
    
    User.findByIdAndDelete(userId,(err,user)=>{
        if(err)return res.status(500).send ({messenge:'error : ', err})
        
        user.remove( err=>{
            if(err)return res.status(500).send ({messenge:'error : ', err})
          return res.status(200).send({messenge:'Eliminado:'})
       })
    })
 }

 module.exports = {
    home,
    create,
    userId,
    userIdupdate,
    userIdDelete,
 }