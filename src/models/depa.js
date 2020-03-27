const {Schema, model} = require ('mongoose')
const depaSchema = new Schema ({
    
 ident:{
        type:String
           
    },
    
    
});
module.exports = model('Depa', depaSchema);
