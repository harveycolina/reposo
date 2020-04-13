'use strict'

const Conjunto = require('../models/conjunto');


async function conjunto(req , res){
    
    const conj = req.body
  
  await Conjunto.find({}).sort({'_id':-1}).exec((err, conj) => {
      if(err) return res.status(500).send({message: 'Error en el servidor'});
      
      if(conj) {
          
          return res.status(200).send({
              conj
            });
            
            
            
        }else{
            return res.status(404).send({
                message: 'No hay user'
            });
        }
    });
    
}
 
 async function conjuntoid(req, res){
    let id = req.params.id

    await Conjunto.findById(id, (err, conj )=>{
        if (err) {
            return res.status(500).send({'':'error de solicitud: ${err}'})
        } else {
            if(!conj)return res.status(404).send({'':'NO hay conjunto registrado: '})
            
        }
        res.status(200).send({conj})

    }) 
}

async function create(req , res){
    

    let c = new Conjunto()
    c.name_conjunto = req.body.name_conjunto
    c.save(( err , conjunto)=>{
        if (err) 
            return res.status(500).send({messenge:'error al guardar conjunto: ${err}'})
            return res.status(200).send({conjunto})
        
    } ) 

    console.log({c})
}

async function updateId(req, res){  
    let id = req.params.id
    let update =req.body
await Conjunto.findByIdAndUpdate({_id:id},update,{new:true}, (err, conj)=>{
    if (err) {
        return res.status(400).send({messenge:'error:'})   
    }
        return res.status(200).send({conjunto:conj})
})
}

async function deleteId(req , res){
    let id = req.params.id
    
    
   await Conjunto.findByIdAndDelete(id,(err,conj)=>{
        if(err)return res.status(500).send ({messenge:'error : ${err}'})
        
        conj.remove( err=>{
            if(err)return res.status(500).send ({messenge:'error : ${err}'})
           res.status(200).send({messenge:'Eliminado: ${err}'})
       })
    })
}


module.exports = {
conjunto,
conjuntoid,
create,
updateId,
deleteId
}