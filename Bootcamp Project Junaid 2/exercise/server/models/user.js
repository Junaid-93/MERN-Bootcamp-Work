const mongoose = require ('mongoose');


const user = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:[true, "Name is required"]
    },
    email:{
        type:String ,
        trim:true,
        required:[true, "Email is required"]
    },
    password:{
        type: String,
        required:[true, "Password is required"],
        minLength:[8,"Password must be of 8 characters"],
    },
    about:{
        type:String,
    },
    // exercises:[
    //     {
    //         type:mongoose.Types.ObjectId,
    //         ref:"exercise"
    //     }
    // ]
})

module.exports = mongoose.model("user", user)