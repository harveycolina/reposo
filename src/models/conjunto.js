const {Schema, model} = require ('mongoose')
const conjuntoSchema = new Schema ({
    
 name_conjunto:{
        type:String
           
    },
 

});

module.exports = model('Conjunto', conjuntoSchema);