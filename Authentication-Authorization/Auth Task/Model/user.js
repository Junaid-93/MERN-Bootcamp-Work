const mongoose = require('mongoose')

const User = new mongoose.Schema({
	Email:{
        type:"String",
        unique:[true,"Email must be unique"],
        required:[true,"Email is required"]
    },
	Password:{
        type:"String",
        minlength:[8,"Password must be at least 8 characters"],
        required:[true,"Password is required"]
    },
	Phone:{
        type:"String",
        minlength:[11,"Number length must be 11"],
        required:[true,"Phone number is required"]
    },

	Role:{
        type:"String",
        enum:["Admin", "Teacher", "Student"],
        required:[true,"Role must be put"]
    } 
})
module.exports = mongoose.model("user",User)