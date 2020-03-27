const {Schema, model} = require ('mongoose')
//const Schema = mongoose.Schema

const userSchema = new Schema ({
    
    first_name:{
        type:String
           
    },
    last_name:{
        type:String
        
    }, 
    email:{
        type:String
        
    },
    type:{type:String, enum:['admin', 'user']}, 
    password:{
        type:String
        
    }

});

module.exports = model('User', userSchema);