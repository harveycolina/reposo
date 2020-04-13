const {Schema, model} = require ('mongoose')


const torreSchema = new Schema ({
    
 ident:{type:String, required: true},
    depar: [{type: Schema.Types.ObjectId, ref: 'Depa'}],
    conjunto: [{type: Schema.Types.ObjectId, ref: 'Conjunto'}],

    
    
});
module.exports = model('Torre', torreSchema);
