'use strict'

const Torre = require('../models/torre');

async function home(req, res){
    
  await Torre.find({}).exec((err, torre) => {
    //   console.log('Entrando a la petición');
    
    if(err) return res.status(500).send({message: 'Error en el servidor'});
    if(torre) {
        
        
        return res.status(200).send({torre});
    
    }
    return res.status(404).send({message: 'No hay torre'});
    
});


 }

 async function torreId(req, res) {
 
    let id = req.params.id
  await  Torre.findById(id, (err, torre)=>{
        if(err){

            return res.status(500).send ({messenge:'error : ${err}'})
        
        }else{ 

            if(!torre)return res.status(404).send({messenge:'NO hay torres: ${err}'})
        }
        
        res.status(200).send({torre})
        
    }) 


 }

async function create(req , res){
    let torre = new Torre()
     
    torre.ident=req.body.ident
    torre.save((err, torre)=>{
        if(err)return res.status(500).send({messenge:'error al guardar usuarios: ${err}'})
        
        return res.status(200).send({torre}) 
    });
    console.log({torre})
    // res.status(200).send({message:'registrado '})
    
  
 }

async function updateId(req, res){
    const id = req.params.id;
    const update = req.body;

    
   await Torre.findByIdAndUpdate({_id:id}, update, {new: true}, (err, torre) => {
        if(err){
            return res.status(500).send({
                ok: false,
                err
            })
        }

        if(!torre){
            return res.status(400).send({
                ok: false,
                err: {
                    message: 'Torre no encontrado'
                }
            })
        }

        return res.send({
            ok: true,
            torre: torre, 
            messenge:'modificado'
        })
    })

}

 async function  deleteId(req, res) {
    let torreId = req.params.id
    
    Torre.findByIdAndDelete(torreId,(err,torreId)=>{
        if(err)return res.status(500).send ({messenge:'error : ',err})
        torreId.remove( (err )=>{
            if(err){

                return res.status(500).send ({messenge:'error : ',err})
            }else{

            }
            
            res.status(200).send({messenge:'Eliminado: ',err})
       })
    })
    
 }


 module.exports = {home, torreId, create, updateId, deleteId }