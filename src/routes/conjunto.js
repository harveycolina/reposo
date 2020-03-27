const {Router} = require('express');
const app = Router();
const Conjunto = require('../models/conjunto');
const bodyParser = require('body-parser');


app.get('/api/conjunto', async(req , res)=>{
    
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
    
    });
    

app.get('/api/conjunto/:id', async(req, res)=>{
    let id = req.param.id

    await Conjunto.findById(id, (err, conj, next)=>{
        if (err) {
            return res.status(500).send ({messenge:'error de solicitud: ${err}'})
        } else {
            if(!conj)return res.status(404).send({messenge:'NO hay usuarios: ${err}'})
            
        }
        res.status(200).send({conj})

    }) 
})

app.post('/api/conjunto/create', (req , res)=>{
    let c = new Conjunto()
    c.name_conjunto = req.body.name_conjunto
    c.save(( err , conjunto)=>{
        if (err) {
            return res.status(500).send({messenge:'error al guardar conjunto: ${err}'})
        }res.status(200).send({c:conjunto})
        
    } ) 
    res.status(200).send({message:'registrado '})

})

app.put('/api/conjunto/:id',async (req, res)=>{
    let id = req.param.id
    let update =req.body
await Conjunto.findByIdAndUpdate(update, (err, conj, next)=>{
    if (err) {
        return res.status(400).send({messenge:'se jo: ${err}'})   
    }
        return res.status(200).send({conjunto:conj})
})
})

app.delete('/api/conjunto/:id', async(req , res)=>{
    let id = req.param.id
    
   await Conjunto.findByIdAndDelete(id,(err,conj)=>{
        if(err)return res.status(500).send ({messenge:'error : ${err}'})
        
        conj.remove( err=>{
            if(err)return res.status(500).send ({messenge:'error : ${err}'})
           res.status(200).send({messenge:'Eliminado: ${err}'})
       })
    })
});




module.exports = app;
