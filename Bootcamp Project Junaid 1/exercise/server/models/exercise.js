const mongoose = require ('mongoose');

const exercise = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:true
    },
    type:{
        type:String ,
        enum:["Running", "Bicycle Ride", "Swimming", "Walking", "Hiking"],
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        // default:Date.now()
        required:true

    },
    description:{
        type:String
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model("exercise", exercise)