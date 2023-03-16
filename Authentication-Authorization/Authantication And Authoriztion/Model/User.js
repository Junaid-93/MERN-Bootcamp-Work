const mongoose = require("mongoose")

const User = new mongoose.Schema({
    Email:{
        type:String,
        unique:[true,"Email Must Be Unique"],
        required:[true,"Email Is Required"]
    },

    Password:{
        type:String,
        minlength:[8,"Password Must Be More Than Of 8 Char"],
        required:[true,"Email Is Required"]
    },

    Phone:{
        type:String,
        minlength:[11,"Password Must Be More Than Of 8 Char"],
        required:[true,"Email Is Required"]
    },

    Role:{
        type:String,
        enum : ['Admin','User'],
        default: 'User'
    }

})


module.exports = mongoose.model("user",User)