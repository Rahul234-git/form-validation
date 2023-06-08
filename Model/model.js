const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true  
    },
    age:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    }
    
    
    
});

module.exports = mongoose.model("userDataHandel",UserSchema,"userData");