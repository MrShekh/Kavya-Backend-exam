const mongoose = require('mongoose')
const Schema = mongoose.Schema({
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

const userModel=mongoose.model('user',userSchema)
module.exports=userModel

