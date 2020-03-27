const {Router} = require('express');
const app = Router();
const Depa = require('../models/depa');
const bodyParser = require('body-parser');


app.get('/api/depa/',async(req, res)=>{

  await  Depa.find({}, (err, depa)=>{
        if(err) return res.status(500).send ({messenge:'error de solicitud: ${err}'})
        if(!depa) return res.status(404).send ({messenge:'no existe: ${err}'})
        return res.send(200,{depa})
        })
})

app.get('/api/depa/:id',async(req, res)=>{
    let id = req.body.id
    await Depa.findById(id, (err, idDepa)=>{
        if(err) return res.send(status(500).send ({messenge:'error de solicitud: ${err}'}))
        if(!idDepa)  return res.status(404).send ({messenge:'no existe: ${err}'})
        return res.send(200,{id:idDepa})

    })
})

app.post('/api/depa/create',async(re, res)=>{
    let depa = new Depa()
    depa.ident = req.body.ident

    depa.save( (err, depa, next)=>{
        if(err) return res.status(500).send ({messenge:'error de solicitud: ${err}'})
        return res.status(200).send({depa})
    })
    res.status(200).send({message:'registrado '})

})

app.put('/api/depa/:id',async(req , res)=>{
    
    let id = req.param.id
    let update =req.body
    await Depa.findByIdAndUpdate(update,(err, depaUpdate)=>{
        if(err)return res.status(404).send ({messenge:'no existe: ${err}'})
        return res.send(200,{id:depaUpdate})
    })
})

app.delete('/api/depa/:id',async(req , res)=>{
    let id = req.param.id
    let idDelete = req.body
    await Depa.findByIdAndRemove(idDelete, (err, depaDeleted)=>{
        if(err) return res.status(500).send({messenge :'error ${err}'})
        
        depaUpdate.remove(err=>{
            
            if(err)return res.status(500).send ({messenge:'error : ${err}'})
           res.status(200).send({messenge:'Eliminado: ${err}'})
        })
    })
})

module.exports = app