
'use strict'

const Depa = require('../models/depa');

async function home(req, res){

    await  Depa.find({}, (err, depa)=>{
          if(err) return res.status(500).send ({messenge:'error de solicitud: ${err}'})
          if(!depa) return res.status(404).send ({messenge:'no existe: ${err}'})
          return res.status(200).send({depa})
         
          })
  }

  async function depaId(req, res){
    let id = req.params.id
    await Depa.findById(id, (err, idDepa)=>{
        if(err) return res.send(status(500).send ({messenge:'error de solicitud: ${err}'}))
        if(!idDepa)return res.status(404).send ({messenge:'no existe: ${err}'})
        
        return res.status(200).send({departamento:idDepa})
    })
} 

async function create(req , res){
   
    let depa = new Depa()
    depa.ident  = req.body.ident
    
    depa.save((err, d)=>{
        if(err)return res.status(500).send({messenge:'error al guardar usuarios: ${err}'})
        
        
        return res.status(200).send({departamento:d}) 
    });
    console.log({depa})
    
  
 }

async function updateDepa(req , res){
    
    let id = req.params.id
    let update =req.body
    await Depa.findByIdAndUpdate({_id:id},update,{new:true},(err, depaUpdate)=>{
        if(err)return res.status(404).send ({messenge:'no existe: ${err}'})
        return res.send({id:depaUpdate})
    })
}

async function deleteDepa(req , res){
    let id = req.params.id
    let idDelete = req.body
    await Depa.findByIdAndDelete({_id:id},idDelete, (err, depaDeleted)=>{
        if(err) return res.status(500).send({messenge :'error ${err}'})
        
        depaDeleted.remove(err=>{
            
            if(err)return res.status(500).send ({messenge:'error : ${err}'})
           res.status(200).send({messenge:'Eliminado: ${err}'})
        })
    })
}

module.exports = {home, depaId, create, updateDepa ,deleteDepa}