const mongoose = require("mongoose")

const Blog = new mongoose.Schema(
{
    title:{
        type:String,
        required: [true,"Title Is Required"],
        minLength:[5,"> 5"],
    },
    
    description:{
        type:String,
        required: [true,"Description Is Required"],
        minLength:10
    },    

    createdDate:{
        type:Date,
        default:Date.now()
    },

    comments:[{
        type: mongoose.Types.ObjectId,
        ref:"Comment"
    }]
}
)

module.exports = mongoose.model("Blog",Blog)
