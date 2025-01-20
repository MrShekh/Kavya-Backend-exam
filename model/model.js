const mongoose = require('mongoose')
const userSchema = mongoose.Schema({  // yaha pe schema ka naam tumne Schema de rakha tha or niche jao niche 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const userModel=mongoose.model('user',userSchema) // yaha pe userschema deke rakha tha to isiliye vo error aa raha tha samji buddhu  dono ka same name hona chaiye 
module.exports=userModel

