const {Schema, model} = require ('mongoose')
const torreSchema = new Schema ({
    
 ident:{
        type:String
           
    },
    
    
});
module.exports = model('Torre', torreSchema);
