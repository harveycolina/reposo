const {Schema, model} = require ('mongoose')
const conjuntoSchema = new Schema ({
    
    name_conjunto:{type:String, minlength: 4, required: true},
    ubicacion: {type:String},
    torre: {type: Schema.Types.ObjectId, ref: 'Torre'},
 

});

module.exports = model('Conjunto', conjuntoSchema);