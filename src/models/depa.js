const {Schema, model} = require ('mongoose')
const depaSchema = new Schema ({
    
    ident:{type:String, required:true},
    depa: {type: Schema.Types.ObjectId, ref: 'Torre'},
    
    
});
module.exports = model('Depa', depaSchema);
